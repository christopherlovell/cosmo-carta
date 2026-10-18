#!/usr/bin/env python3
"""Add a `first_author` surname to each simulation in data.js, looked up from its `ads` link.

Papers are resolved through the ADS API (ADS abstract pages are captcha-blocked), so
ADS_DEV_KEY must be set. Only entries without a first_author are touched, so rerun it
after adding new simulations:

    python3 scripts/fetch_first_authors.py
"""
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / 'data.js'
ADS_QUERY = 'https://api.adsabs.harvard.edu/v1/search/query'
LINK = re.compile(r"ads: '([^']*)'")


def identifier(url):
    """Bibcode or arXiv id from a paper link, spelt as in ADS's identifier field."""
    m = re.search(r'adsabs\.harvard\.edu/abs/([^/?#]+)', url)
    if m:
        return urllib.parse.unquote(m.group(1))
    m = re.search(r'arxiv\.org/(?:abs|pdf)/(.+?)(?:v\d+)?(?:\.pdf)?/?$', url)
    if m:
        return 'arXiv:' + m.group(1)
    return None


def query_ads(ids, batch=40):
    """Map each lower-cased identifier (bibcodes, arXiv ids, DOIs) to its ADS record."""
    found = {}
    for i in range(0, len(ids), batch):
        q = 'identifier:(' + ' OR '.join(f'"{x}"' for x in ids[i:i + batch]) + ')'
        params = urllib.parse.urlencode({'q': q, 'fl': 'bibcode,first_author,identifier', 'rows': 2 * batch})
        req = urllib.request.Request(f'{ADS_QUERY}?{params}',
                                     headers={'Authorization': f'Bearer {os.environ["ADS_DEV_KEY"]}'})
        with urllib.request.urlopen(req) as r:
            for doc in json.load(r)['response']['docs']:
                for ident in doc.get('identifier', []) + [doc['bibcode']]:
                    found[ident.lower()] = doc
    return found


def main():
    if 'ADS_DEV_KEY' not in os.environ:
        sys.exit('Set ADS_DEV_KEY to an ADS API token')

    lines = DATA.read_text().split('\n')
    todo = [(n, identifier(m.group(1))) for n, line in enumerate(lines)
            if (m := LINK.search(line)) and 'first_author:' not in line]
    docs = query_ads(sorted({ident for _, ident in todo if ident}))

    unresolved = []
    for n, ident in todo:
        doc = docs.get(ident.lower()) if ident else None
        if not doc or not doc.get('first_author'):
            unresolved.append(lines[n].strip()[:90])
            continue
        # "Schaye, Joop" -> Schaye, escaped for a single-quoted JS string
        surname = doc['first_author'].split(',')[0].strip().replace('\\', '\\\\').replace("'", "\\'")
        lines[n] = LINK.sub(lambda m: f"{m.group(0)}, first_author: '{surname}'", lines[n], count=1)

    DATA.write_text('\n'.join(lines))
    print(f'Added first_author to {len(todo) - len(unresolved)} of {len(todo)} entries')
    if unresolved:
        print('Could not resolve (add first_author by hand):')
        print('\n'.join(f'  {u}' for u in unresolved))


if __name__ == '__main__':
    main()
