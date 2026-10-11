// Simulation suites - hierarchical structure
const simulationFamilies = {
    'EAGLE': {
        'EAGLE-L100N1504': {size: 100, m_g: 1.81e6, m_dm: 9.7e6, n_g_part: 1504, n_dm_part: 1504, code: 'Gadget-3', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: 'January', ads: 'https://ui.adsabs.harvard.edu/abs/2015MNRAS.446..521S'},
        'EAGLE-L025N0752': {size: 25, m_g: 2.26e5, m_dm: 1.21e6, n_g_part: 752, n_dm_part: 752, code: 'Gadget-3', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: 'January', ads: 'https://ui.adsabs.harvard.edu/abs/2015MNRAS.446..521S'},
        'EAGLE-L050N0752': {size: 50, m_g: 1.81e6, m_dm: 9.7e6, n_g_part: 752, n_dm_part: 752, code: 'Gadget-3', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: 'January', ads: 'https://ui.adsabs.harvard.edu/abs/2015MNRAS.446..521S'},
        'EAGLE-L025N0376': {size: 25, m_g: 1.81e6, m_dm: 9.7e6, n_g_part: 376, n_dm_part: 376, code: 'Gadget-3', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: 'January', ads: 'https://ui.adsabs.harvard.edu/abs/2015MNRAS.446..521S'},
        'FLARES': {size: ((4/3)*3.141*(14/0.6771)**3)**(1/3), m_g: 1.81e6, m_dm: 9.7e6, n_g_part: 2223, n_dm_part: 2223, code: 'Gadget-3', 'radiative-transfer': false, complete: true, redshift_end: 5.0, periodic: false, suite: true, n_sims: 40, year: 2021, month: '', effective_volume: 3200, ads: 'https://ui.adsabs.harvard.edu/abs/2021MNRAS.500.2127L/abstract', dust: false},
    },
    'IllustrisTNG': {
        'TNG50': {size: 51.7, m_g: 8.5e4, m_dm: 3.1e5, n_g_part: 2160, n_dm_part: 2160, code: 'Arepo', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, mhd: true, year: 2019, month: '', ads: 'https://arxiv.org/abs/1902.05553'},
        'TNG100': {size: 110.7, m_g: 1.4e6, m_dm: 5.1e6, n_g_part: 1820, n_dm_part: 1820, code: 'Arepo', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, mhd: true, year: 2018, month: '', ads: 'https://arxiv.org/abs/1707.03406'},
        'TNG300': {size: 302.6, m_g: 1.1e7, m_dm: 4e7, n_g_part: 2500, n_dm_part: 2500, code: 'Arepo', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, mhd: true, year: 2018, month: '', ads: 'https://arxiv.org/abs/1707.03406'}
    },
    'Illustris': {
        'Illustris-1': {size: 106.5, m_g: 1.3e6, m_dm: 6.3e6, n_g_part: 1820, n_dm_part: 1820, code: 'Arepo', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2014, month: 'May', ads: 'https://ui.adsabs.harvard.edu/abs/2014Natur.509..177V'},
        'Illustris-2': {size: 106.5, m_g: 1.e7, m_dm: 5e7, n_g_part: 910, n_dm_part: 910, code: 'Arepo', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2014, month: 'May', ads: 'https://ui.adsabs.harvard.edu/abs/2014Natur.509..177V'},
        'Illustris-3': {size: 106.5, m_g: 8.1e7, m_dm: 4e8, n_g_part: 455, n_dm_part: 455, code: 'Arepo', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2014, month: 'May', ads: 'https://ui.adsabs.harvard.edu/abs/2014Natur.509..177V'}
    },
    'SIMBA': {
        'SIMBA-m100n1024': {size: 100/0.7, m_g: 1.82e7, m_dm: 9.6e7, n_g_part: 1024, n_dm_part: 1024, code: 'GIZMO', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2019, month: 'June', ads: 'https://arxiv.org/abs/1901.10203', dust: true},
        'SIMBA-m50n1024': {size: 50/0.7, m_g: 2.28e6, m_dm: 1.2e7, n_g_part: 1024, n_dm_part: 1024, code: 'GIZMO', 'radiative-transfer': false, complete: true, redshift_end: 1.0, periodic: true, year: 2019, month: 'June', ads: 'https://arxiv.org/abs/1901.10203', dust: true},
        'SIMBA-m25n1024': {size: 25/0.7, m_g: 2.85e5, m_dm: 1.5e6, n_g_part: 1024, n_dm_part: 1024, code: 'GIZMO', 'radiative-transfer': false, complete: true, redshift_end: 2.0, periodic: true, year: 2019, month: 'June', ads: 'https://arxiv.org/abs/1901.10203', dust: true}
    },
    'MUFASA': {
        'MUFASA-m50n512': {size: 50/0.7, m_g: 1.82e7, m_dm: 9.6e7, n_g_part: 512, n_dm_part: 512, code: 'GIZMO', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2019, month: 'June', ads: 'https://arxiv.org/abs/1604.01418'},
        'MUFASA-m25n512': {size: 25/0.7, m_g: 2.28e6, m_dm: 1.2e7, n_g_part: 512, n_dm_part: 512, code: 'GIZMO', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2019, month: 'June', ads: 'https://arxiv.org/abs/1604.01418'},
        'MUFASA-m12.5n512': {size: 12.5/0.7, m_g: 2.85e5, m_dm: 1.5e6, n_g_part: 512, n_dm_part: 512, code: 'GIZMO', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2019, month: 'June', ads: 'https://arxiv.org/abs/1604.01418'}
    },
    'THESAN': {
        'THESAN-1': {size: 95.5, m_g: 5.82e5, m_dm: 3.12e6, n_g_part: 2100, n_dm_part: 2100, code: 'Arepo', 'radiative-transfer': true, complete: true, redshift_end: 5.5, periodic: true, year: 2022, month: 'April', dust: true, ads: 'https://ui.adsabs.harvard.edu/abs/2022MNRAS.511.4005K/abstract'},
        'THESAN-2': {size: 95.5, m_g: 4.66e6, m_dm: 2.49e7, n_g_part: 1050, n_dm_part: 1050, code: 'Arepo', 'radiative-transfer': true, complete: true, redshift_end: 5.5, periodic: true, year: 2022, month: 'April', dust: true, ads: 'https://ui.adsabs.harvard.edu/abs/2022MNRAS.511.4005K/abstract'}
    },
    'FLAMINGO': {
        'FLAMINGO-L1_m8': {size: 1000, m_g: 1.34e8, m_dm: 7.06e8, n_g_part: 3600, n_dm_part: 3600, code: 'SWIFT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', dust: false, ads: 'https://arxiv.org/abs/2306.04024'},
        'FLAMINGO-L1_m9': {size: 1000, m_g: 1.07e9, m_dm: 5.65e9, n_g_part: 1800, n_dm_part: 1800, code: 'SWIFT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', dust: false, ads: 'https://arxiv.org/abs/2306.04024'},
        'FLAMINGO-L1_m10': {size: 1000, m_g: 8.56e9, m_dm: 4.52e10, n_g_part: 900, n_dm_part: 500, code: 'SWIFT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', dust: false, ads: 'https://arxiv.org/abs/2306.04024'},
        'FLAMINGO-L2p8_m9': {size: 2800, m_g: 1.07e9, m_dm: 5.65e9, n_g_part: 5040, n_dm_part: 5040, code: 'SWIFT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', dust: false, ads: 'https://arxiv.org/abs/2306.04024'}
    },
    'MillenniumTNG': {
        'MTNG740': {size: 740, m_g: 3.1e7, m_dm: 1.7e8, n_g_part: 4320, n_dm_part: 4320, code: 'Arepo', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', ads: 'https://arxiv.org/abs/2210.10060', dust: false},
        'MTNG185': {size: 185, m_g: 3.1e7, m_dm: 1.7e8, n_g_part: 1080, n_dm_part: 1080, code: 'Arepo', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', ads: 'https://arxiv.org/abs/2210.10059', dust: false}
    },
    'Millennium': {
        'Millennium': {size: 500/0.7, m_g: 0, m_dm: 8.6e8/0.7, n_g_part: 0, n_dm_part: 2160, code: 'Gadget-2', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2005, month: '', ads: 'https://arxiv.org/abs/astro-ph/0504097', dust: false},
        'Milli-Millennium': {size: 62.5/0.7, m_g: 0, m_dm: 6.9e6/0.7, n_g_part: 0, n_dm_part: 2160, code: 'Gadget-2', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2009, month: '', ads: 'https://arxiv.org/abs/0903.3041', dust: false}
    },
    'COLIBRE': {
        // 'COLIBRE-L050m5': {size: 50, m_g: 2.3e5, code: 'SWIFT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2025, month: '', ads: 'https://arxiv.org/abs/2508.21126'},
        'COLIBRE-L100m5': {size: 100, m_g: 2.3e5, m_dm: 3.03e5, n_g_part: 3008, n_dm_part: 4*3008, code: 'SWIFT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dust: true, year: 2025, month: '', ads: 'https://arxiv.org/abs/2508.21126'},
        'COLIBRE-L200m6': {size: 200, m_g: 1.84e6, m_dm: 2.42e6, n_g_part: 3008, n_dm_part: 4*3008, code: 'SWIFT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dust: true, year: 2025, month: '', ads: 'https://arxiv.org/abs/2508.21126'},
        'COLIBRE-L400m7': {size: 400, m_g: 1.47e7, m_dm: 1.94e7, n_g_part: 3008, n_dm_part: 4*3008, code: 'SWIFT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dust: true, year: 2025, month: '', ads: 'https://arxiv.org/abs/2508.21126'}
    },
    'MassiveBlack': {
        // Masses in h^-1 M_sun converted with h=0.7; box in h^-1 Mpc / 0.7
        'MassiveBlack': {size: 533.3/0.7, m_g: 5.65e7/0.7, m_dm: 2.78e8, n_g_part: 3200, n_dm_part: 3200, code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 4.75, periodic: true, year: 2012, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2012MNRAS.424..605D'},
        'MassiveBlack-II': {size: 100/0.704, m_g: 2.2e6/0.704, m_dm: 1.1e7/0.704, n_g_part: 1792, n_dm_part: 1792, code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2015MNRAS.450.1349K'}
    },
    'Magneticum Pathfinder': {
        // Magneticum Pathfinder suite; box sizes in h^-1 Mpc (h=0.704, WMAP7); masses in M_sun
        'Magneticum-Box0':   {size: 2688/0.704, m_g: 2.6e9/0.704, m_dm: 1.3e10/0.704, code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: '', ads: 'https://arxiv.org/abs/2504.01061'},
        'Magneticum-Box1':   {size: 896/0.704,  m_g: 2.6e9/0.704,  m_dm: 1.3e10/0.704, code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: '', ads: 'https://arxiv.org/abs/2504.01061'},
        'Magneticum-Box2bhr':  {size: 640/0.704,  m_g: 1.4e8/0.704,  m_dm: 6.9e8/0.704, code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 0.2, periodic: true, year: 2015, month: '', ads: 'https://arxiv.org/abs/2504.01061'},
        'Magneticum-Box2hr': {size: 352/0.704,  m_g: 1.4e8/0.704,  m_dm: 6.9e8/0.704, code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: '', ads: 'https://arxiv.org/abs/2504.01061'},
        'Magneticum-Box3hr':   {size: 128/0.704,  m_g: 1.4e8/0.704,  m_dm: 6.9e8/0.704, code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 1.7, periodic: true, year: 2015, month: '', ads: 'https://arxiv.org/abs/2504.01061'},
        'Magneticum-Box3uhr':   {size: 128/0.704,  m_g: 7.3e6/0.704,  m_dm: 3.6e7/0.704, code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 1.7, periodic: true, year: 2015, month: '', ads: 'https://arxiv.org/abs/2504.01061'},
        'Magneticum-Box4uhr':   {size: 48/0.704,   m_g: 7.3e6/0.704,  m_dm: 3.6e7/0.704, code: 'Gadget-3',  'radiative-transfer': false, dust: false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: '', ads: 'https://arxiv.org/abs/2504.01061'},
        'Magneticum-Box5xhr':   {size: 18/0.704,  m_g: 3.9e5/0.704,  m_dm: 1.9e6/0.704,  code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 0.0, periodic: true, year: 2015, month: '', ads: 'https://arxiv.org/abs/2504.01061'}
    },
    'CAMELS': {
        'CAMELS-1st gen': {size: 25/0.7, m_g: 1.27e7/0.7, m_dm: 6.49e7/0.7, n_g_part: 256, n_dm_part: 256, 'radiative-transfer': false, dust: false, complete: true, redshift_end: 0.0, periodic: true, suite: true, n_sims: 4233, year: 2021, month: '', ads: 'https://arxiv.org/abs/2010.00619'},
        'CAMELS-2nd gen': {size: 50/0.7, m_g: 1.27e7/0.7, m_dm: 6.49e7/0.7, n_g_part: 512, n_dm_part: 512, 'radiative-transfer': false, dust: false, complete: true, redshift_end: 0.0, periodic: true, suite: true, n_sims: 1102, year: 2026, month: '', ads: 'https://arxiv.org/abs/2010.00619'}
    },
    'Quijote': {
        // m_dm = 2.775e11 * omega_m * L^3 / N^3 (Msun/h), divided by h to get Msun
        // omega_m=0.3175, h=0.6711, L=1000 Mpc/h
        'Quijote-512':  {size: 1000/0.6711, m_dm: 2.775e11 * 0.3175 * 1e9 / Math.pow(512,  3) / 0.6711, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 44100, year: 2020, month: '', ads: 'https://arxiv.org/abs/1909.05273'},
        'Quijote-1024': {size: 1000/0.6711, m_dm: 2.775e11 * 0.3175 * 1e9 / Math.pow(1024, 3) / 0.6711, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 2000, year: 2020, month: '', ads: 'https://arxiv.org/abs/1909.05273'}
    },
    'FIREbox': {
        // Feldmann et al. (2023); FIRE-2 cosmological periodic volume; h=0.677 (Planck 2015)
        'FB1024': {size: 22.1, m_g: 6.26e4, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.3831F'},
        'FB512':  {size: 22.1, m_g: 5.01e5, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.3831F'},
        'FB256':  {size: 22.1, m_g: 4.01e6, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.3831F'}
    },
    'OWLS': {
        // Schaye et al. (2010); box sizes in h^-1 Mpc and masses in h^-1 M_sun (h=0.73, WMAP3)
        'OWLS-L100': {size: 100/0.73, m_g: 8.66e7/0.73, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2010, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2010MNRAS.402.1536S'},
        'OWLS-L25':  {size: 25/0.73,  m_g: 1.35e6/0.73, 'radiative-transfer': false, complete: true, redshift_end: 2.0, periodic: true, year: 2010, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2010MNRAS.402.1536S'}
    },
    'Romulus': {
        // Tremmel et al. (2017); masses in M_sun
        'Romulus25': {size: 25, m_g: 2.12e5, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2017, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2017MNRAS.470.1121T'},
        'Romulus50': {size: 50, m_g: 2.12e5, 'radiative-transfer': false, complete: true, redshift_end: 2.0, periodic: true, year: 2017, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2017MNRAS.470.1121T'},
        'Romulus8':  {size: 8,  m_g: 2.12e5, 'radiative-transfer': false, complete: true, redshift_end: 0.5, periodic: true, year: 2017, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2017MNRAS.470.1121T'}
    },
    'SLOW': {
        // Dolag et al.; constrained simulation of local Universe; box = 500 h^-1 Mpc (h=0.6777, Planck)
        // Gas particle masses from Table 1 of respective papers (in h^-1 M_sun, converted to M_sun)
        'SLOW-AGN1536': {size: 500/0.6777, m_g: 4.6e8/0.6777, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2023, month: '', ads: 'https://arxiv.org/abs/2302.10960'},
        'SLOW-AGN3072': {size: 500/0.6777, m_g: 5.5e7/0.6777, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2024, month: '', ads: 'https://arxiv.org/abs/2402.01834'}
    },
    'Virgo Consortium': {
        // Jenkins et al. 1998 (astro-ph/9709010): 256^3 Hydra AP3M, 239.5 h^-1 Mpc. SCDM/tauCDM use h=0.5 (m_p 2.27e11 h^-1 Msun),
        // LCDM/OCDM use h=0.7 (m_p 6.86e10 h^-1 Msun); the tauCDM and OCDM boxes share the SCDM and LCDM setups and are omitted.
        'Virgo-LCDM':  {size: 239.5/0.7, m_dm: 6.86e10/0.7, n_dm_part: 256, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1998, month: '', ads: 'https://arxiv.org/abs/astro-ph/9709010'},
        'Virgo-SCDM':  {size: 239.5/0.5, m_dm: 2.27e11/0.5, n_dm_part: 256, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1998, month: '', ads: 'https://arxiv.org/abs/astro-ph/9709010'},
        // GIF: Kauffmann et al. 1999 (astro-ph/9805283); 256^3 in 141.3 h^-1 Mpc (LCDM, h=0.7, 1.4e10 h^-1 Msun) and 84.5 h^-1 Mpc (SCDM, h=0.5, 1.0e10 h^-1 Msun)
        'GIF-LCDM':    {size: 141.3/0.7, m_dm: 1.4e10/0.7, n_dm_part: 256, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9805283'},
        'GIF-SCDM':    {size: 84.5/0.5,  m_dm: 1.0e10/0.5, n_dm_part: 256, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9805283'},
        // Hubble Volume: Evrard et al. 2002 (astro-ph/0110246), Colberg et al. 2000 (astro-ph/0005259); 10^9 particles, parallel P3M (Hydra-derived)
        'HubbleVolume-tauCDM': {size: 2000/0.5, m_dm: 2.22e12/0.5, n_dm_part: 1000, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2000, month: '', ads: 'https://arxiv.org/abs/astro-ph/0005259'},
        'HubbleVolume-LCDM':   {size: 3000/0.7, m_dm: 2.25e12/0.7, n_dm_part: 1000, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2002, month: '', ads: 'https://arxiv.org/abs/astro-ph/0110246'},
        // Jenkins et al. 2001 (astro-ph/0005260) Table 1: tauCDM-512 (320.7 h^-1 Mpc, h=0.5) and LCDM-512 "VLS" (479 h^-1 Mpc, h=0.7; Yoshida, Sheth & Diaferio 2001, astro-ph/0104332), both 6.82e10 h^-1 Msun
        'Virgo-tauCDM-512': {size: 320.7/0.5, m_dm: 6.82e10/0.5, n_dm_part: 512, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2001, month: '', ads: 'https://arxiv.org/abs/astro-ph/0005260'},
        'Virgo-VLS':        {size: 479/0.7,   m_dm: 6.82e10/0.7, n_dm_part: 512, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2001, month: '', ads: 'https://arxiv.org/abs/astro-ph/0104332'},
        // GIF2: Gao et al. 2004 (astro-ph/0404589); 400^3 in 110 h^-1 Mpc, 1.73e9 h^-1 Msun, h=0.7; Hydra to z=2.2 then GADGET
        'GIF2':        {size: 110/0.7, m_dm: 1.73e9/0.7, n_dm_part: 400, code: 'Gadget', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0404589'},
        // Virgo hydro runs (parallel Hydra AP3M-SPH unless stated)
        'Pearce-1999':   {size: 100, m_g: 2e9, m_dm: 1.75e10, n_g_part: 128, n_dm_part: 128, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9905160'}, // LCDM; box is 100 Mpc (70 h^-1 Mpc) with h=0.7; gas mass "~2e9 Msun"; DM mass computed
        'daSilva-2000':  {size: 150/0.71, m_g: 4.85e10/0.71, m_dm: 4.45e11/0.71, n_g_part: 90, n_dm_part: 90, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2000, month: '', ads: 'https://arxiv.org/abs/astro-ph/9907224'}, // adiabatic SZ maps; LCDM, h=0.71; final redshift not stated
        'Muanwong-2001': {size: 100/0.71, m_g: 2.6e9/0.71, m_dm: 2.1e10/0.71, n_g_part: 160, n_dm_part: 160, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2001, month: '', ads: 'https://arxiv.org/abs/astro-ph/0102048'}, // non-radiative / radiative / preheating trio; h=0.71
        'Kay-2003':      {size: 50/0.71, m_g: 6.3e8/0.71, m_dm: 5.2e9/0.71, n_g_part: 128, n_dm_part: 128, code: 'Hydra', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2003, month: '', ads: 'https://arxiv.org/abs/astro-ph/0210560'}, // Kay, Thomas & Theuns; h=0.71
        'Kay-2004':      {size: 120/0.7, m_g: 1.3e9/0.7, m_dm: 7.3e9/0.7, n_g_part: 256, n_dm_part: 256, code: 'Gadget-2', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0407058'}  // non-radiative and feedback runs; h=0.7
    },
    'ART': {
        // Adaptive Refinement Tree runs (Klypin, Kravtsov et al.); LCDM boxes with h=0.7, masses in h^-1 Msun
        'ART-LCDM15-1997': {size: 15/0.7, m_dm: 1.06e9/0.7, n_dm_part: 64,  code: 'ART', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1997, month: '', ads: 'https://arxiv.org/abs/astro-ph/9701195'},
        'ART-LCDM15-1999': {size: 15/0.7, m_dm: 1.33e8/0.7, n_dm_part: 128, code: 'ART', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9708191'},
        'ART-LCDM60':      {size: 60/0.7, m_dm: 1.1e9/0.7,  n_dm_part: 256, code: 'ART', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9809202'},
        'ART-LCDM80':      {size: 80/0.7, m_dm: 3.16e8/0.7, n_dm_part: 512, code: 'ART', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0308519'}
    },
    'Jing & Suto P3M': {
        // Vectorised/parallel P3M runs (Jing & Suto 1998, Jing 1998, Jing & Suto 2002, Jing 2002); LCDM values, h not stated in the papers (Gamma=0.2 implies h~0.7)
        'Jing-1998-L100':      {size: 100/0.7, m_dm: 5.0e9/0.7,  n_dm_part: 256, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 3, year: 1998, month: '', ads: 'https://arxiv.org/abs/astro-ph/9710090'},
        'Jing-1998-L300':      {size: 300/0.7, m_dm: 4.5e11*0.3/0.7, n_dm_part: 256, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 4, year: 1998, month: '', ads: 'https://arxiv.org/abs/astro-ph/9805202'},
        'Jing+Suto-2002-L100': {size: 100/0.7, m_dm: 6.2e8/0.7,  n_dm_part: 512, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2002, month: '', ads: 'https://arxiv.org/abs/astro-ph/0202064'},
        'Jing-2002-L300':      {size: 300/0.7, m_dm: 1.7e10/0.7, n_dm_part: 512, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 4, year: 2002, month: '', ads: 'https://arxiv.org/abs/astro-ph/0206098'}
    },
    'HOT': {
        // Seljak & Warren 2004 (astro-ph/0403698); Hashed Oct-Tree code, LCDM h=0.7, masses in h^-1 Msun (HOT-1024 mass computed from box and N)
        'HOT1':      {size: 96/0.7,   m_dm: 5.5e8/0.7,  n_dm_part: 512,  code: 'HOT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0403698'},
        'HOT2':      {size: 288/0.7,  m_dm: 4.4e9/0.7,  n_dm_part: 768,  code: 'HOT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0403698'},
        'HOT3':      {size: 1152/0.7, m_dm: 2.8e11/0.7, n_dm_part: 768,  code: 'HOT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0403698'},
        'HOT-1024':  {size: 768/0.7,  m_dm: 3.5e10/0.7, n_dm_part: 1024, code: 'HOT', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0403698'}
    },
    'Springel & Hernquist G-series': {
        // Springel & Hernquist 2003 (astro-ph/0206395) Table 1; highest-resolution run of each box size (the 1 h^-1 Mpc Z-series is omitted as it falls off the plot). GADGET, h=0.7, masses in h^-1 Msun.
        // G6 (2x486^3) first appears in Nagamine et al. 2004 (astro-ph/0311295).
        'SH03-R4': {size: 3.375/0.7, m_g: 4.24e4/0.7, m_dm: 2.75e5/0.7, n_g_part: 216, n_dm_part: 216, code: 'Gadget', 'radiative-transfer': false, complete: true, redshift_end: 4.0,  periodic: true, year: 2003, month: '', ads: 'https://arxiv.org/abs/astro-ph/0206395'},
        'SH03-Q5': {size: 10/0.7,    m_g: 3.26e5/0.7, m_dm: 2.12e6/0.7, n_g_part: 324, n_dm_part: 324, code: 'Gadget', 'radiative-transfer': false, complete: true, redshift_end: 2.75, periodic: true, year: 2003, month: '', ads: 'https://arxiv.org/abs/astro-ph/0206395'},
        'SH03-D5': {size: 33.75/0.7, m_g: 1.26e7/0.7, m_dm: 8.15e7/0.7, n_g_part: 324, n_dm_part: 324, code: 'Gadget', 'radiative-transfer': false, complete: true, redshift_end: 1.0,  periodic: true, year: 2003, month: '', ads: 'https://arxiv.org/abs/astro-ph/0206395'},
        'SH03-G4': {size: 100/0.7,   m_g: 1.10e9/0.7, m_dm: 7.16e9/0.7, n_g_part: 216, n_dm_part: 216, code: 'Gadget', 'radiative-transfer': false, complete: true, redshift_end: 0.0,  periodic: true, year: 2003, month: '', ads: 'https://arxiv.org/abs/astro-ph/0206395'},
        'SH03-G5': {size: 100/0.7,   m_g: 3.26e8/0.7, m_dm: 2.12e9/0.7, n_g_part: 324, n_dm_part: 324, code: 'Gadget', 'radiative-transfer': false, complete: true, redshift_end: 0.0,  periodic: true, year: 2003, month: '', ads: 'https://arxiv.org/abs/astro-ph/0206395'},
        'G6':      {size: 100/0.7,   m_g: 9.67e7/0.7, m_dm: 6.29e8/0.7, n_g_part: 486, n_dm_part: 486, code: 'Gadget', 'radiative-transfer': false, complete: true, redshift_end: 0.0,  periodic: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0311295'}
    },
    'Cen & Ostriker TVD': {
        // Princeton Eulerian lineage (Cen 1992 code, then the Ryu et al. 1993 TVD code). n_g_part is grid cells per side, m_g the mean baryon mass per cell.
        // Pre-arXiv papers link to ADS; "computed" masses use m = Omega_x * 2.775e11 * (L/N)^3 h^-1 Msun.
        'Cen-1990':             {size: 30/0.5, m_g: 0.08*2.775e11*Math.pow(30/100, 3)/0.5, n_g_part: 100, code: 'Eulerian', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1990, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1990ApJ...362L..41C/abstract'}, // "The universe in a box": 10^6 cells, 30 h^-1 Mpc, h=0.5, Omega_b=0.08; mass computed, DM particle number not stated
        'Cen+Ostriker-1992':    {size: 64/0.5, m_g: 0.06*2.775e11*Math.pow(64/128, 3)/0.5, m_dm: 0.94*2.775e11*Math.pow(64/128, 3)/0.5, n_g_part: 128, n_dm_part: 128, code: 'Eulerian', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1992, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1992ApJ...393...22C/abstract'}, // largest of four boxes (64, 16, 4, 1 h^-1 Mpc), 128^3 cells + 128^3 DM, h=0.5, Omega_b=0.06, all run to z=0; masses computed
        'Cen+Ostriker-1993':    {size: 80/0.5, m_g: 0.06*2.775e11*Math.pow(80/200, 3)/0.5, m_dm: 0.94*2.775e11*Math.pow(80/200, 3)/0.5, n_g_part: 200, n_dm_part: 200, code: 'Eulerian', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1993, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1992ApJ...399L.113C/abstract'}, // 80 h^-1 Mpc, 200^3 cells, h=0.5, with star formation (Cen & Ostriker 1992 ApJL 399, L113; analysed in 1993 ApJ 417, 404/415); masses computed
        'Cen+Gnedin+Ostriker-1993': {size: 64/(2/3), m_g: 0.034*2.775e11*Math.pow(64/128, 3)/(2/3), m_dm: 0.266*2.775e11*Math.pow(64/128, 3)/(2/3), n_g_part: 128, n_dm_part: 128, code: 'Eulerian', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1993, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1993ApJ...417..387C/abstract'}, // early LCDM hydro box: Omega=0.3, lambda=0.7, h=2/3, Omega_b=0.034; masses computed
        'Kang-1994':            {size: 85/0.5, m_g: 0.06*2.775e11*Math.pow(85/270, 3)/0.5, m_dm: 0.94*2.775e11*Math.pow(85/135, 3)/0.5, n_g_part: 270, n_dm_part: 135, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1994, month: '', ads: 'https://arxiv.org/abs/astro-ph/9404013'}, // Kang, Cen, Ostriker & Ryu; adiabatic X-ray clusters; 85 h^-1 Mpc, h=0.5, Omega_b=0.06; masses computed
        'Cen+Ostriker-1994':    {size: 85/0.6, m_g: 0.043*2.775e11*Math.pow(85/270, 3)/0.6, m_dm: 0.407*2.775e11*Math.pow(85/135, 3)/0.6, n_g_part: 270, n_dm_part: 135, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1994, month: '', ads: 'https://arxiv.org/abs/astro-ph/9404012'}, // LCDM (Omega=0.45, lambda=0.55, h=0.6, Omega_b=0.043), adiabatic; masses computed
        'CMOR-1994':            {size: 3/0.65, m_g: 1.7e4, m_dm: 0.3645*2.775e11*Math.pow(3/144, 3)/0.65, n_g_part: 288, n_dm_part: 144, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 2.0, periodic: true, year: 1994, month: '', ads: 'https://arxiv.org/abs/astro-ph/9409017'}, // Cen, Miralda-Escude, Ostriker & Rauch Lyman-alpha forest; 3 h^-1 Mpc, h=0.65; gas mass per cell stated in Msun, DM computed
        'MCOR-1996':            {size: 10/0.65, m_g: 6.3e5, n_g_part: 288, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 2.0, periodic: true, year: 1996, month: '', ads: 'https://arxiv.org/abs/astro-ph/9511013'}, // Miralda-Escude et al. L10 run; 10 h^-1 Mpc, h=0.65; gas mass per cell stated in Msun
        'Cen+Ostriker-1999':    {size: 100/0.7, m_g: 1.0e8/0.7, m_dm: 5.3e9/0.7, n_g_part: 512, n_dm_part: 256, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9806281'}, // "Where are the baryons?"; masses from the companion letter ApJ 519, L109 (astro-ph/9903207); Omega_m=0.37, h=0.7
        'Cen+Ostriker-1999-L50': {size: 50/0.7, m_g: 1.3e7/0.7, m_dm: 6.6e8/0.7, n_g_part: 512, n_dm_part: 256, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9903207'}, // 50 h^-1 Mpc twin of the run above
        'Nagamine-2001-N768L25': {size: 25/0.67, m_g: 3.35e5/0.67, m_dm: 2.03e7/0.67, n_g_part: 768, n_dm_part: 384, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2001, month: '', ads: 'https://arxiv.org/abs/astro-ph/0011472'}, // Nagamine, Fukugita, Cen & Ostriker; 25 h^-1 Mpc, h=0.67
        'Ryu-2003':             {size: 100/0.7, m_g: 0.043*2.775e11*Math.pow(100/1024, 3)/0.7, m_dm: 0.227*2.775e11*Math.pow(100/512, 3)/0.7, n_g_part: 1024, n_dm_part: 512, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2003, month: '', ads: 'https://arxiv.org/abs/astro-ph/0305164'}, // Ryu, Kang, Hallman & Jones; adiabatic cosmic shocks; 1024^3 cells, 512^3 DM, 100 h^-1 Mpc, h=0.7; masses computed
        'Nagamine-2004-N864L22': {size: 22/0.7, m_g: 2.2e5/0.7, m_dm: 8.9e6/0.7, n_g_part: 864, n_dm_part: 432, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0311294'}  // Nagamine et al. 2004; 22 h^-1 Mpc, h=0.7
    },
    'TreeSPH (Katz, Weinberg & Hernquist)': {
        // Katz/Hernquist/Weinberg TreeSPH lineage and its parallel successor PTreeSPH (Dave et al.). Boxes quoted in Mpc at h=0.5 for the 1990s runs.
        'KHW-1992':             {size: 22.222, m_g: 1.16e9, m_dm: 2.20e10, n_g_part: 32, n_dm_part: 32, code: 'TreeSPH', 'radiative-transfer': false, complete: true, redshift_end: 0.375, periodic: true, year: 1992, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1992ApJ...399L.109K/abstract'}, // Katz, Hernquist & Weinberg; 22.222 Mpc at h=0.5; hydro stopped at z=0.375
        'Katz-1996':            {size: 22.222, m_g: 1.2e9, m_dm: 2.2e10, n_g_part: 32, n_dm_part: 32, code: 'TreeSPH', 'radiative-transfer': false, complete: true, redshift_end: 0.0,  periodic: true, year: 1996, month: '', ads: 'https://arxiv.org/abs/astro-ph/9509107'}, // Katz, Weinberg & Hernquist z=0 runs; 22.222 Mpc at h=0.5 (11.11 h^-1 Mpc). The 2x64^3 runs (m_g 1.45e8) stop at z=2
        'Hernquist-1996':       {size: 22.222, m_g: 1.45e8, m_dm: 2.8e9, n_g_part: 64, n_dm_part: 64, code: 'TreeSPH', 'radiative-transfer': false, complete: true, redshift_end: 2.0,  periodic: true, year: 1996, month: '', ads: 'https://arxiv.org/abs/astro-ph/9509105'}, // Lyman-alpha forest; 22.222 Mpc at h=0.5
        'Dave-1999':            {size: 11.111/0.65, m_g: 1.06e8, m_dm: 7.9e8, n_g_part: 64, n_dm_part: 64, code: 'PTreeSPH', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9807177'}, // LCDM run of Dave, Hernquist, Katz & Weinberg; 11.111 h^-1 Mpc, h=0.65; masses stated in Msun
        'Dave-2001-L50':        {size: 50/0.65, m_g: 8.5e8, m_dm: 6.3e9, n_g_part: 144, n_dm_part: 144, code: 'PTreeSPH', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2001, month: '', ads: 'https://arxiv.org/abs/astro-ph/0007217'}, // L50/144 (Dave et al. 2001 run D1; reused by Murali 2002, Weinberg 2004); h=0.65; masses stated in Msun
        'Murali-2002-L11':      {size: 11.11/0.65, m_g: 1.3e7, n_g_part: 128, n_dm_part: 128, code: 'PTreeSPH', 'radiative-transfer': false, complete: true, redshift_end: 3.0, periodic: true, year: 2002, month: '', ads: 'https://arxiv.org/abs/astro-ph/0106282'}, // L11/128; stopped at z=3
        'Weinberg-2004-L22':    {size: 22.22/0.65, m_g: 1.04e8, n_g_part: 128, n_dm_part: 128, code: 'PTreeSPH', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0212356'}  // L22/128
    },
    'Individual Hydrodynamical Simulations': {
        'Astrid': {size: 250/0.7, m_g: 1.27e6/0.7, m_dm: 9.63e6, n_g_part: 5500, n_dm_part: 5500, code: 'Gadget-3', 'radiative-transfer': false, dust: false, complete: true, redshift_end: 3.0, periodic: true, year: 2022, month: '', ads: 'https://arxiv.org/abs/2111.01160'},
        'Horizon-AGN': {size: 120, m_g: 4e6, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2014, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2014MNRAS.444.1453D'},
        'BAHAMAS': {size: 560, m_g: 1.5e9, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2017, month: ''},
        'SPHINX': {size: 20, m_g: 3.8e4, 'radiative-transfer': true, complete: true, redshift_end: 4.6, periodic: true, year: 2018, month: ''},
        'FRONTIER-E': {size: 4700, m_g: 1e8, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2025, month: '', ads: 'https://arxiv.org/abs/2510.03557'},
        // ── Legacy hydrodynamical runs, 1990-2004 (see also the Cen & Ostriker TVD, TreeSPH, Virgo and Springel & Hernquist families).
        // Grid codes: n_g_part is cells per side and m_g the baryon mass per cell. Pre-arXiv papers link to ADS.
        // "computed" masses use m = Omega_x * 2.775e11 * (L/N)^3 h^-1 Msun.
        'Ryu-1990':             {size: 9.6/0.5, m_g: 0.1*2.775e11*Math.pow(9.6/32, 3)/0.5, m_dm: 0.9*2.775e11*Math.pow(9.6/32, 3)/0.5, n_g_part: 32, n_dm_part: 32, code: 'Eulerian', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1990, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1990ApJ...354..389R/abstract'}, // Ryu, Vishniac & Chiang; 9.6 h^-1 Mpc, h=0.5; masses computed
        'Carlberg-1990':        {size: 40, m_g: 1.69e9, m_dm: 3.21e10, code: 'P3M-SPH', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1990, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1990ApJ...352L..29C/abstract'}, // Carlberg, Couchman & Thomas; 262,144 particles, half gas; 40 Mpc at H0=50
        'Evrard-1994':          {size: 16, m_g: 1.08e8, m_dm: 9.72e8, n_g_part: 64, n_dm_part: 64, code: 'P3M-SPH', 'radiative-transfer': false, complete: true, redshift_end: 1.0, periodic: true, year: 1994, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1994ApJ...422...11E/abstract'}, // Evrard, Summers & Davis; 16 Mpc at h=0.5, constrained to form a poor cluster; stopped at z=1
        'Bryan-1994':           {size: 85/0.5, m_g: 0.06*2.775e11*Math.pow(85/270, 3)/0.5, m_dm: 0.94*2.775e11*Math.pow(85/135, 3)/0.5, n_g_part: 270, n_dm_part: 135, code: 'PPM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1994, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1994ApJ...428..405B/abstract'}, // same initial conditions as Kang-1994, run with PPM (KRONOS)
        'Bryan-1994-CHDM':      {size: 85/0.5, m_g: 0.1*2.775e11*Math.pow(85/256, 3)/0.5, n_g_part: 256, n_dm_part: 128, code: 'PPM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1994, month: '', ads: 'https://arxiv.org/abs/astro-ph/9409091'}, // 256^3 cells, 128^3 cold + 2x128^3 hot particles, Omega_b=0.1, h=0.5; mass computed
        'Gnedin-1996':          {size: 64/0.65, m_g: 0.036*2.775e11/0.65, m_dm: 0.364*2.775e11/0.65, n_g_part: 64, n_dm_part: 64, code: 'SLH', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1996, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1996ApJ...456....1G/abstract'}, // softened Lagrangian hydro; 64^3 cells in 64 h^-1 Mpc, LCDM Omega=0.4, h=0.65; masses computed
        'Pildis-1996':          {size: 16, m_g: 1.08e8, m_dm: 9.72e8, n_g_part: 64, n_dm_part: 64, code: 'P3M-SPH', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1996, month: '', ads: 'https://arxiv.org/abs/astro-ph/9604145'}, // Pildis, Evrard & Bregman; unconstrained 16 Mpc (h=0.5) box run to z=0
        'Tissera-1997':         {size: 10, m_g: 2.6e8, m_dm: 2.6e8, code: 'AP3M-SPH', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1997, month: '', ads: 'https://arxiv.org/abs/astro-ph/9603153'}, // 64^3 particles in total, ~10% gas, equal masses; 10 Mpc at H0=50
        'Yepes-1997':           {size: 5, m_g: 4e6*0.08/0.92, m_dm: 4e6, n_g_part: 128, n_dm_part: 128, code: 'PPM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1997, month: '', ads: 'https://arxiv.org/abs/astro-ph/9605182'}, // Yepes, Kates, Khokhlov & Klypin; 5 Mpc at H0=50, Omega_b=0.08; gas mass scaled from the stated DM mass
        'Zhang-1997':           {size: 9.6, m_g: 1.8e6, m_dm: 2.9e7, n_g_part: 128, n_dm_part: 128, code: 'HERCULES', 'radiative-transfer': false, complete: true, redshift_end: 0.5, periodic: true, year: 1997, month: '', ads: 'https://arxiv.org/abs/astro-ph/9609194'}, // Zhang, Anninos, Norman & Meiksin Lyman-alpha forest; nested grid, top level 128^3; 9.6 Mpc at h=0.5
        'Gnedin+Ostriker-1997': {size: 2/0.7, m_g: 3.2e4/0.7, m_dm: 3.7e5/0.7, n_g_part: 128, n_dm_part: 128, code: 'SLH', 'radiative-transfer': true, complete: true, redshift_end: 4.0, periodic: true, year: 1997, month: '', ads: 'https://arxiv.org/abs/astro-ph/9612127'}, // reionisation with an approximate self-consistent radiation field; 2 h^-1 Mpc, h=0.7; stopped at z=4
        'Bryan+Norman-1998':    {size: 50/0.5, m_g: 0.075*2.775e11*Math.pow(50/512, 3)/0.5, n_g_part: 512, n_dm_part: 256, code: 'PPM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 1998, month: '', ads: 'https://arxiv.org/abs/astro-ph/9710107'}, // CHDM512: 512^3 cells + 3x256^3 particles, 50 h^-1 Mpc, h=0.5, Omega_b=0.075; mass computed
        'Theuns-1998':          {size: 22.22, m_g: 1.4e8, m_dm: 1.4e8*19, n_g_part: 64, n_dm_part: 64, code: 'P3M-SPH', 'radiative-transfer': false, complete: true, redshift_end: 2.0, periodic: true, year: 1998, month: '', ads: 'https://arxiv.org/abs/astro-ph/9805119'}, // largest of the 22.22/11.11/5.5/2.5 Mpc (h=0.5) Lyman-alpha boxes; DM mass = 19 x gas (Omega_b=0.05)
        'Bryan-1999-L9.6':      {size: 9.6/0.5, m_g: 0.06*2.775e11*Math.pow(9.6/256, 3)/0.5, n_g_part: 256, code: 'PPM', 'radiative-transfer': false, complete: true, redshift_end: 2.0, periodic: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9805340'}, // Bryan, Machacek, Anninos & Norman Lyman-alpha forest; 256^3 cells in 9.6 h^-1 Mpc, h=0.5; DM particle number not stated; mass computed
        'Gnedin-2000':          {size: 4/0.7, m_g: Math.pow(10, 5.7), m_dm: Math.pow(10, 6.6) - Math.pow(10, 5.7), n_g_part: 128, n_dm_part: 128, code: 'SLH', 'radiative-transfer': true, complete: true, redshift_end: 4.0, periodic: true, year: 2000, month: '', ads: 'https://arxiv.org/abs/astro-ph/9909383'}, // run N128_L4_A: reionisation with the local optical depth approximation; 4 h^-1 Mpc, h=0.7; stopped at z=4
        'Machacek-2000':        {size: 9.6, m_g: 2.2e5, m_dm: 1.8e7, n_g_part: 256, n_dm_part: 128, code: 'PPM', 'radiative-transfer': false, complete: true, redshift_end: 2.0, periodic: true, year: 2000, month: '', ads: 'https://arxiv.org/abs/astro-ph/9906297'}, // Kronos LCDM run; 9.6 Mpc comoving; masses computed
        'Yoshikawa-2000':       {size: 150/0.7, m_g: 2.0e10, m_dm: 1.7e11, n_g_part: 128, n_dm_part: 128, code: 'P3M-SPH', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2000, month: '', ads: 'https://arxiv.org/abs/astro-ph/0001076'}, // Yoshikawa, Jing & Suto L150 series; h=0.7; masses stated in Msun
        'Springel-2001-134A':   {size: 134/0.67, m_g: 2.4e9/0.67, m_dm: 1.5e10/0.67, n_g_part: 224, n_dm_part: 224, code: 'Gadget', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2001, month: '', ads: 'https://arxiv.org/abs/astro-ph/0008133'}, // Springel, White & Hernquist; adiabatic SZ run, h=0.67
        'Gnedin+Abel-2001':     {size: 2/0.7, m_g: Math.pow(10, 5.7), n_g_part: 64, n_dm_part: 64, code: 'SLH', 'radiative-transfer': true, complete: true, redshift_end: 4.0, periodic: true, year: 2001, month: '', ads: 'https://arxiv.org/abs/astro-ph/0106278'}, // OTVET radiative transfer rerun of Gnedin 2000 run N64_L2_A; final redshift assumed from the parent run
        'Yoshikawa-2001':       {size: 75/0.7, m_g: 2.4e9, m_dm: 2.2e10, n_g_part: 128, n_dm_part: 128, code: 'P3M-SPH', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2001, month: '', ads: 'https://arxiv.org/abs/astro-ph/0104361'}, // Yoshikawa, Taruya, Jing & Suto; h=0.7; masses stated in Msun
        'Croft-2002':           {size: 33.5/0.67, m_g: 1.5e7, m_dm: 1e8, n_g_part: 300, n_dm_part: 300, code: 'Gadget', 'radiative-transfer': false, complete: true, redshift_end: 3.0, periodic: true, year: 2002, month: '', ads: 'https://arxiv.org/abs/astro-ph/0204460'}, // Lyman-break galaxies; analysed at z=3, final redshift not stated
        'Teyssier-2002':        {size: 100/0.7, m_g: 0.039*2.775e11*Math.pow(100/256, 3)/0.7, m_dm: 0.261*2.775e11*Math.pow(100/256, 3)/0.7, n_g_part: 256, n_dm_part: 256, code: 'RAMSES', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2002, month: '', ads: 'https://arxiv.org/abs/astro-ph/0111367'}, // RAMSES code paper run P256L5 (256^3 base grid, 5 AMR levels), adiabatic; masses computed
        'Borgani-2004':         {size: 192/0.7, m_g: 9.9e8, m_dm: 6.6e9, n_g_part: 480, n_dm_part: 480, code: 'Gadget-2', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0310794'}, // h=0.7; masses stated in Msun
        'Viel-2004':            {size: 60/0.7, m_g: 4.3e7/0.7, m_dm: 2e8/0.7, n_g_part: 400, n_dm_part: 400, code: 'Gadget-2', 'radiative-transfer': false, complete: true, redshift_end: 2.0, periodic: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0404600'}, // Viel, Haehnelt & Springel Lyman-alpha forest; analysed at z~2.1-2.75, final redshift not stated
        'Zhang+Pen+Trac-2004':  {size: 100/0.71, m_g: 0.044*2.775e11*Math.pow(100/1024, 3)/0.71, m_dm: 5.6e8, n_g_part: 1024, n_dm_part: 512, code: 'TVD', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0402115'}, // Trac & Pen TVD code, adiabatic; gas mass computed
        'Tytler-2004':          {size: 54.528/0.71, m_g: 0.044*2.775e11*Math.pow(54.528/1024, 3)/0.71, n_g_part: 1024, code: 'Enzo', 'radiative-transfer': false, complete: true, redshift_end: 1.9, periodic: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0403688'}, // 1024^3 Enzo Lyman-alpha forest run, analysed at z=1.9; DM particle number not stated; mass computed
        'MareNostrum-Univ':   {size: 500/0.7,   m_g: 1.5e9/0.7,   'radiative-transfer': false, complete: true, redshift_end: 0.0,  periodic: true, year: 2006, month: '', ads: 'https://arxiv.org/abs/astro-ph/0610622'},
        'Popping-2009':       {size: 32/0.7,    m_g: 3.35e6/0.7,  'radiative-transfer': false, complete: true, redshift_end: 0.0,  periodic: true, year: 2009, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/2009A%26A...504...15P'}
    },
    'Individual DMO Simulations': {
        // ── Legacy N-body runs, 1983-2004. Pre-arXiv papers link to ADS. h^-1 units converted with the h quoted in each paper
        // (h=0.5 for the Omega=1 CDM era unless stated). Masses marked "computed" use m = 2.775e11 * Omega_m * (L/N^(1/3))^3 h^-1 Msun.
        'Klypin+Shandarin-1983': {size: 160/0.5, m_dm: 1.2e18/32768/0.5, n_dm_part: 32, code: 'PM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1983, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1983MNRAS.204..891K/abstract'}, // HDM; 160 h^-1 Mpc, cube mass 1.2e18 h^-1 Msun
        'DEFW-1985':             {size: 130, m_dm: 4.6e12, n_dm_part: 32, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 5, year: 1985, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1985ApJ...292..371D/abstract'}, // EdS1-5: L = 32.5 h^-2 Mpc, m_p = 2.9e-4 x 1e15 (Omega h^2)^-2 Msun, at h=0.5
        'WFDE-1987-C36':         {size: 360, m_dm: 1.5e13, n_dm_part: 60, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1987, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1987ApJ...313..505W/abstract'}, // 216,000 particles, 360 Mpc at h=0.5
        'Frenk-1988-EFLAT':      {size: 14, m_dm: 5.8e9, n_dm_part: 32, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 3, year: 1988, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1988ApJ...327..507F/abstract'}, // 14 Mpc comoving at H0=50, z=6 to 0
        'Centrella-1988-HDM':    {size: 105/0.75, m_dm: 2.775e11*Math.pow(105/64, 3)/0.75, n_dm_part: 64, code: 'PM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1988, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1988ApJ...333...24C/abstract'}, // 105 h^-1 Mpc, h=0.75; mass computed
        'Park-1990':             {size: 307.2/0.5, m_dm: 2.775e11*Math.pow(307.2/128, 3)/0.5, n_dm_part: 128, code: 'PM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1990, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1990MNRAS.242P..59P/abstract'}, // 128^3 on a 256^3 mesh, 307.2 h^-1 Mpc, h=0.5; mass computed
        'Frenk-1990':            {size: 360, m_dm: 1.2e13, n_dm_part: 64, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 5, year: 1990, month: '', ads: 'https://ui.adsabs.harvard.edu/abs/1990ApJ...351...10F/abstract'}, // 5 x 262,144 particles, 360 Mpc at h=0.5
        'Gelb+Bertschinger-1994': {size: 100, m_dm: 2.3e10, n_dm_part: 144, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1994, month: '', ads: 'https://arxiv.org/abs/astro-ph/9408028'}, // run CDM16: 144^3, 100 Mpc (h=0.5, quoted in Mpc)
        'Klypin-1997-CDM':       {size: 100, m_dm: 2.07e9/0.5, n_dm_part: 256, code: 'PM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1997, month: '', ads: 'https://arxiv.org/abs/astro-ph/9502062'}, // Klypin, Nolthenius & Primack; 50 h^-1 Mpc, h=0.5, 512^3 mesh
        'Cole-1997':             {size: 345.6/0.5, m_dm: 1.62e12/0.5, n_dm_part: 192, code: 'AP3M', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 12, year: 1997, month: '', ads: 'https://arxiv.org/abs/astro-ph/9702082'}, // 12 COBE-normalised models; values for E1 (Omega=1, h=0.5); mass computed
        'Gross-1998':            {size: 75/0.5, m_dm: 2.09e9/0.5, n_dm_part: 384, code: 'PM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, suite: true, n_sims: 5, year: 1998, month: '', ads: 'https://arxiv.org/abs/astro-ph/9712142'}, // 5 CDM variants, 384^3 on 1152^3 mesh in 75 h^-1 Mpc; SCDM values (h=0.5)
        'Governato-1999':        {size: 500/0.75, m_dm: 2.2e11/0.75, n_dm_part: 360, code: 'PKDGRAV', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 1999, month: '', ads: 'https://arxiv.org/abs/astro-ph/9810189'}, // O3CDM run (Omega=0.3, h=0.75), 47 million particles in 500 h^-1 Mpc
        'Bode-2001-WDM':         {size: 20/0.67, m_dm: 4e7/0.67, n_dm_part: 256, code: 'P3M', 'radiative-transfer': false, complete: true, redshift_end: 1.0, periodic: true, dmo: true, suite: true, n_sims: 3, year: 2001, month: '', ads: 'https://arxiv.org/abs/astro-ph/0010389'}, // LCDM + two LWDM runs, 20 h^-1 Mpc, h=0.67, stopped at z=1
        'White-2002-TreePM':     {size: 300/0.7, m_dm: 2.775e11*0.3*Math.pow(300/512, 3)/0.7, n_dm_part: 512, code: 'TreePM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2002, month: '', ads: 'https://arxiv.org/abs/astro-ph/0207185'}, // mass computed
        'Reed-2003':             {size: 50/0.7, m_dm: 1.3e8/0.7, n_dm_part: 432, code: 'PKDGRAV', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2003, month: '', ads: 'https://arxiv.org/abs/astro-ph/0301270'}, // h not stated; 0.7 assumed
        'GalICS-2003':           {size: 100/0.667, m_dm: 8.27e9, n_dm_part: 256, code: 'Tree', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2003, month: '', ads: 'https://arxiv.org/abs/astro-ph/0309186'}, // Hatton et al.; mass quoted in Msun
        'Yahagi-2004-L140':      {size: 140/0.7, m_dm: 1.70e9/0.7, n_dm_part: 512, code: 'AMR', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0401097'}, // largest of five 512^3 runs (35-140 h^-1 Mpc)
        'Wambsganss-2004-TPM':   {size: 320/0.7, m_dm: 2.54e9/0.7, n_dm_part: 1024, code: 'TPM', 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2004, month: '', ads: 'https://arxiv.org/abs/astro-ph/0306088'}, // 1024^3 TPM, 320 h^-1 Mpc, h=0.7; final redshift not stated in the letter
        'SMDPL':         {size: 400/0.6711,  m_dm: 9.6e7/0.6711,  'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2016, month: ''},
        'Chinchilla':    {size: 400/0.6711,  m_dm: 5.9e8/0.6711,  'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2019, month: ''},
        'MDPL2':         {size: 1000/0.6711, m_dm: 1.5e9/0.6711,  'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2016, month: ''},
        'Abacus Summit': {size: 2000/0.6711, m_dm: 2.1e9/0.6711,  'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2021, month: ''},
        'Outer Rim':     {size: 3000/0.6711, m_dm: 1.8e9/0.6711,  'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2019, month: ''},
        'Flagship':      {size: 3600/0.6711, m_dm: 1.0e9/0.6711,  'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2017, month: ''},
        'HalfDome':      {size: 3750/0.6711, m_dm: 2.0e10/0.6711, 'radiative-transfer': false, complete: true, redshift_end: 0.0, periodic: true, dmo: true, year: 2024, month: ''}
    }
};

// Optional emoji per suite. Value is a Unicode emoji string, or a PNG filename
// loaded from the emoji/ folder (e.g. 'colibre.png'). Omit a suite to use default markers.
const familyEmoji = {
    'EAGLE':         '🦅',
    'IllustrisTNG':  'picard.png',
    'Illustris':     '🔆',
    'Simba':         '🦁',
    'FLAMINGO':      '🦩',
    'FLARES':        '👖',
    'MillenniumTNG': '🎆',
    'COLIBRE':       '🐦',
    'MassiveBlack':  '🖤',
    'Magneticum Pathfinder':    '🧲',
    'CAMELS':        '🐪',
    'FIREbox':       '🔥',
    'OWLS':          '🦉',
    'SLOW':          '🐌',
    'Quijote':       '🏇',
};

// Optional emoji per numerical code. Value is a Unicode emoji or PNG filename from emoji/ folder.
const codeEmoji = {
    'SWIFT': 'swift.png',
    'Arepo': '🅰️',
    'Gadget-3': '🇬3',
    'GIZMO': 'gizmo.png',
    'Gadget-2': '🇬2',
};

// Flatten simulations for backward compatibility
const simulations = {};
Object.entries(simulationFamilies).forEach(([suite, sims]) => {
    Object.entries(sims).forEach(([name, data]) => {
        simulations[name] = data;
    });
});

// Default code to 'Other' for any simulation without one
Object.values(simulations).forEach(sim => { if (!sim.code) sim.code = 'Other'; });

// Survey data
const surveys = {
    'All Sky': {area: 4 * Math.PI * Math.pow(180 * 60 / Math.PI, 2), redshift: 7}, // Full sky in arcmin²
    'Euclid/Wide': {area: 15000 * 3600, redshift: 7},  // 15,000 deg² → arcmin²
    'Euclid/Deep': {area: 40 * 3600, redshift: 7},     // 40 deg² → arcmin²
    'Webb/COSMOS-Web': {area: 0.6 * 3600, redshift: 7}, // 0.6 deg² → arcmin²
    'Webb/NGDEEP': {area: 8, redshift: 7}              // Already in arcmin²
};

// Planck 2015 cosmology parameters
const cosmology = {
    H0: 67.74,           // km/s/Mpc
    Om0: 0.3089,         // Matter density
    Ode0: 0.6911,        // Dark energy density
    c: 299792.458        // Speed of light in km/s
};
