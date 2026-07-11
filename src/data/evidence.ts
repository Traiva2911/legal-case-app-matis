import type { Evidence } from "../types";

export const rawEvidence: Omit<Evidence, "relatedPersonIds">[] = [
  {
    "id": "e-whatsapp",
    "title": "WhatsApp 20. 5. 2021",
    "type": "Komunikace",
    "date": "20. 5. 2021",
    "strength": 5,
    "proves": [
      "podmínky odměňování k pozici produktové/obchodní manažerky",
      "první zmínka o podílu na výsledcích do budoucna",
      "moje osobní iniciativa"
    ],
    "risk": "Export chatu zajištěn na Drive (zpráva 20. 5. 2021, 13:20: „probereme odměnu za duben a podíl na výsledcích do budoucna“). Konkrétní podíly 5 % / 10 % přišly až e-mailem 4. 8. 2023.",
    "file": "https://drive.google.com/file/d/17-QQlBM_O_F5DwRXIPcWHScBjr2GoIf4/view",
    "tags": [
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ]
  },
  {
    "id": "e-potvrzeni",
    "title": "Formální potvrzení 1. 1. 2024",
    "type": "Dokument / e-mail",
    "date": "1. 1. 2024",
    "strength": 5,
    "proves": [
      "potvrzení slibu",
      "záměr pana Ospalíka",
      "moje jmenování",
      "návrh mi pan Ospalík poslal e-mailem už 4. 8. 2023"
    ],
    "risk": "Kopie zajištěna — dokument Odměny a smlouva Andrea i originál e-mailu ze 4. 8. 2023 (.msg s hlavičkami) jsou na Drive.",
    "file": "https://drive.google.com/file/d/10c_dDHxW25JV8M8YPoEYFLROQOmIoX0S/view",
    "tags": [
      "jednatel",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ]
  },
  {
    "id": "e-usneseni",
    "title": "Usnesení 24. 6. 2024",
    "type": "Firemní dokument",
    "date": "24. 6. 2024",
    "strength": 5,
    "proves": [
      "moje jmenování jednatelkou č. 2 (NZ 160/2024)",
      "samostatné zastupování do 1 mil. Kč — prodej SsangYong za 330 000 Kč byl v mém oprávnění",
      "funkci jsem vykonávala bez smlouvy"
    ],
    "risk": "Notářský zápis zajištěn na Drive. Smlouva o výkonu funkce nikdy nevznikla — zeptat se, co to znamená.",
    "file": "https://drive.google.com/file/d/1eCAa25alrAYcvMjsaBmiR_GSXIW1OhTj/view",
    "tags": [
      "jednatel",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-odoo-prislib",
    "title": "Projektový plán Odoo 23. 6. 2025 — příslib prémie",
    "type": "Projektový plán (dokument)",
    "date": "23. 6. 2025",
    "strength": 5,
    "proves": [
      "písemný příslib prémie 200 000 Kč (sekce 9)",
      "termín dokončení oprav 30. 9. 2025",
      "při částečném splnění poměrné krácení"
    ],
    "risk": "Dokument zajištěn na Drive. Termín 30. 9. 2025 byl nereálný: kvůli nezdokumentované práci původního dodavatele nikdo opravy nechtěl převzít (kapacity až od září, doporučení stavět znovu) — Origamis jsem po 3 měsících jednání získala do 09/2025 jen jako poradce. Prémie nevyplacena.",
    "tags": [
      "Odoo",
      "mzda"
    ],
    "file": "https://drive.google.com/file/d/1FrVQQwA-fRW6GJwdnDmo0kXz7wYg4tvI/view",
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ]
  },
  {
    "id": "e-rekonciliace",
    "title": "Finanční rekonciliace 30. 4. 2026",
    "type": "Finanční podklad",
    "date": "30. 4. 2026",
    "strength": 4,
    "proves": [
      "optimalizace 25-27 mil. Kč",
      "podklad pro výpočet 5 % podílu"
    ],
    "risk": "Vytvořila jsem si to jako vlastní poznámky pro sebe — nikdy je nikdo neviděl, jsou přísně důvěrné. Vycházím ale výhradně z účetních uzávěrek, daňových přiznání a stavu účtů firmy — všechno je to doložitelné, nejde o odhad od oka.",
    "file": "https://drive.google.com/file/d/1PRXtPPldc0yY25mBHotKh7fITXUa45Ax/view",
    "tags": [
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-paska",
    "title": "Výplatní pásky HPP + DPP 04/2025",
    "type": "Mzdový dokument",
    "date": "duben 2025",
    "strength": 4,
    "proves": [
      "průměrný výdělek 549,18 Kč/h",
      "moje mzdová základna",
      "3 souběžné smlouvy"
    ],
    "risk": "Musím dohledat DPP smlouvy — na těch pozicích jsem fakticky nepracovala.",
    "tags": [
      "mzda",
      "DPP",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-dpp",
    "title": "DPP smlouvy TRAIVA + Traiva Safety",
    "type": "Smlouvy",
    "date": "2021-2026",
    "strength": 4,
    "proves": [
      "mzda byla rozdělena mezi 1× HPP a 2× DPP — TRAIVA: „kompletace a úpravy výrobků“, Safety: „správa webu“",
      "šlo o standardní nastavení pro všechny zaměstnance, které jsem znala a akceptovala",
      "limit 300 h/rok, 25 h/měsíc, výplata na můj běžný účet"
    ],
    "risk": "Kopie zajištěny — 4 podepsané dohody (2025 + 2026) na Drive.",
    "file": "https://drive.google.com/drive/folders/1YLt0OQusVLWSpipF4unEdlyQHfjx130M",
    "tags": [
      "DPP",
      "mzda",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-oip",
    "title": "OIP podnět připraven",
    "type": "Úřední podání",
    "date": "2026",
    "strength": 3,
    "proves": [
      "souhrn toho, co považuji za porušení vůči mně"
    ],
    "risk": "Zatím neodesláno — chci se poradit, zda a kdy podat (OIP Ostrava).",
    "tags": [
      "OIP",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-vyzva",
    "title": "Výzva 30. 4. 2026",
    "type": "Výzva / přehled požadavků",
    "date": "30. 4. 2026",
    "strength": 5,
    "proves": [
      "moje požadavky vznesené písemně",
      "poté začaly kroky proti mně"
    ],
    "risk": "Časovou návaznost považuji za důležitou — posoudí advokát.",
    "tags": [
      "pracovněprávní",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ]
  },
  {
    "id": "e-email-208",
    "title": "E-mail 11. 6. 2026",
    "type": "E-mail",
    "date": "11. 6. 2026",
    "strength": 5,
    "proves": [
      "moje žádost o přístupy",
      "ochota pracovat"
    ],
    "risk": "Odesláno z mé soukromé adresy ve 23:59 — firemní mi byla odebrána.",
    "tags": [
      "mzda",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ]
  },
  {
    "id": "e-timely",
    "title": "Timely report 673h 43m",
    "type": "Evidence pracovní doby",
    "date": "3-5/2026",
    "strength": 4,
    "proves": [
      "moje přesčasy",
      "noční práce",
      "rozsah práce"
    ],
    "risk": "O používání Timely jsem zaměstnavatele dříve informovala. Ke každému záznamu Timely automaticky generuje log a časové razítko — nejde tedy o dodatečně sepsaný odhad, ale o průběžně strojově zaznamenávanou evidenci.",
    "tags": [
      "mzda",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-gps",
    "title": "SMS T-Mobile — lokalizace SIM 12.–20. 5. 2026",
    "type": "SMS (screenshot zajištěn)",
    "date": "12. 5. 2026",
    "strength": 4,
    "proves": [
      "12. 5. 11:23 — zapnuta lokalizace mé SIM (služba Kde je) bez mého souhlasu",
      "13. 5. 9:00 — lokalizace vypnuta",
      "20. 5. 10:14 — zapnuta další služba na mém čísle"
    ],
    "risk": "SMS výslovně říká „O lokalizaci nebudete vědět“ — o aktivaci jsem se dozvěděla jen z této zprávy. Screenshot zajištěn na Drive.",
    "file": "https://drive.google.com/file/d/1R_K_qFHMwjBQb-WXERUERcWfWPgll4zT/view",
    "tags": [
      "GPS",
      "GDPR",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ]
  },
  {
    "id": "e-maralik",
    "title": "E-mail Maralíka 4. 5. 2026",
    "type": "E-mail",
    "date": "4. 5. 2026",
    "strength": 3,
    "proves": [
      "loajalita pana Maralíka k panu Ospalíkovi"
    ],
    "risk": "Nepočítám s ním jako se svědkem v můj prospěch.",
    "tags": [
      "Odoo",
      "pracovněprávní"
    ],
    "personRefs": [
      "Tomáš Maralík",
      "Karel Ospalík"
    ]
  },
  {
    "id": "e-doruceni",
    "title": "Prohlášení o doručení 21. 5. 2026",
    "type": "Prohlášení",
    "date": "21. 5. 2026",
    "strength": 3,
    "proves": [
      "průběh doručení",
      "podpis rozhodnutí o odvolání jsem odmítla a kopii mi nepředali — dokument jsem si ale sama stáhla (z justice.cz nebo firemního serveru, ještě když jsem měla přístupy)"
    ],
    "risk": "Zeptat se, zda byl postup formálně v pořádku a zda původ kopie něčemu vadí. Dokument je na Drive.",
    "file": "https://drive.google.com/file/d/1ChNAkLj2o5Cvjbc2JfRfXQN6oVFFCr4R/view",
    "tags": [
      "jednatel",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-paska-2025-05",
    "title": "Výplatní páska 05/2025 — prémie na vrcholu (61 907 Kč)",
    "type": "Mzdové dokumenty (HPP)",
    "date": "05/2025",
    "strength": 5,
    "proves": [
      "hrubá mzda 112 771 Kč, z toho prémie 61 907 Kč",
      "průměr pro náhrady 549,18 Kč/h — hodnota, ze které později došlo k poklesu"
    ],
    "risk": "Zajištěno na Drive. Referenční bod pro srovnání s pozdějším poklesem.",
    "tags": [
      "mzda"
    ],
    "file": "https://drive.google.com/file/d/1tVyS-yASuMZFa4vXXTNCkkctzyOePVtD/view",
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-paska-2025-06-08",
    "title": "Výplatní pásky 06–08/2025 — prémie 0 Kč dva měsíce, pak částečné doplacení",
    "type": "Mzdové dokumenty (HPP)",
    "date": "06-08/2025",
    "strength": 4,
    "proves": [
      "červen 2025: prémie 0 Kč — přesně měsíc zahájení projektového plánu Odoo (23. 6. 2025)",
      "červenec 2025: prémie také 0 Kč (podle mě — skutečná červencová páska zatím nedohledána, e-mail „7/2025“ obsahuje duplicitně červnová data)",
      "srpen 2025: mi bylo 31 000 Kč vráceno/doplaceno — ne nová prémie, ale částečné narovnání za předchozí dva nulové měsíce"
    ],
    "risk": "Zajištěno na Drive (červen, srpen). Souvisí to podle mě s projektovým plánem Odoo z 23. 6. 2025 — ten sice váže krácení standardní odměny až na vyhodnocení k 30. 9. 2025, ale moje běžná odměna klesla na nulu už v měsíci zahájení projektu. Chci probrat s advokátem, jestli to bylo v souladu s plánem — a najít skutečnou červencovou pásku.",
    "tags": [
      "mzda",
      "Odoo"
    ],
    "file": "https://drive.google.com/drive/folders/10cYncs-DqJjerMVHXjwAdaNLvDQOKl4V",
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-paska-2025-12",
    "title": "Výplatní páska 12/2025 — prémie už klesla na 14 800 Kč",
    "type": "Mzdové dokumenty (HPP)",
    "date": "12/2025",
    "strength": 4,
    "proves": [
      "prémie klesla z 61 907 Kč (05/2025) na 14 800 Kč — pokles začal dřív, než jsem čekala",
      "čerpáno 27 dní / 216 h dovolené v prosinci"
    ],
    "risk": "Zajištěno na Drive. Podle mě tlak nezačal až mým e-mailem z 11. 3. 2026 — začal už v červnu 2025 a zesílil v září 2025, kdy byl najat nový IT kolega. Chci probrat s advokátem, jak se tahle dřívější časová linie promítá do posouzení.",
    "tags": [
      "mzda"
    ],
    "file": "https://drive.google.com/file/d/1Cq_4cxc_w9ySSvTbgx5HkdjjdWT-8aRi/view",
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-paska-2026",
    "title": "Výplatní pásky 2-5/2026 — prémie 0 a pokles průměru",
    "type": "Mzdové dokumenty",
    "date": "2-5/2026",
    "strength": 5,
    "proves": [
      "prémie 0 Kč (úplný pokles ze 61 907 Kč v 05/2025)",
      "průměr pro náhrady klesl na 457,63 Kč/h (z 549,18)",
      "květen 2026: měsíc krytý převážně náhradami (dovolená + placené volno, 43 932 Kč) — řádek překážek zaměstnavatel nevykazuje, přestože mi odebral přístupy"
    ],
    "risk": "Zajištěno na Drive (7 pásek 2-5/2026). Dovolená mi byla NAŘÍZENA 12. 5. 2026 — v den odvolání, ze dne na den, bez předchozího upozornění na termín; nařízení jsem podepsala, ale vlastní kopii mi nepředali. Rozhodnutí o odvolání jsem naopak odmítla podepsat. Zeptat se advokáta: smí se dovolená nařizovat takto, a smí firma dobu bez přístupů vykazovat jako mou dovolenou místo překážek na své straně?",
    "tags": [
      "mzda",
      "pracovněprávní"
    ],
    "file": "https://drive.google.com/drive/folders/10cYncs-DqJjerMVHXjwAdaNLvDQOKl4V",
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-obdobi1",
    "title": "Fio banka + smlouvy — Období I",
    "type": "Bankovní a smluvní dokumentace",
    "date": "2021-2024",
    "strength": 4,
    "proves": [
      "jednala jsem s bankou za firmu už v 8/2023",
      "29. 4. 2024 jsem podepsala rámcovou kupní smlouvu se Západoslovenskou distribučnou za firmu — 2 měsíce před jmenováním",
      "podepisovala jsem i další smlouvy (pracovnělékařské služby)",
      "faktický výkon funkce před 24. 6. 2024"
    ],
    "risk": "Doklady zajištěny na Drive (složka 6 Období I). Doplnit jména svědků.",
    "tags": [
      "jednatel",
      "obchodní"
    ],
    "file": "https://drive.google.com/drive/folders/1HNxdu3BUiVnsyqLsz3beE1RdfzDHrNYv",
    "personRefs": [
      "Andrea Matis"
    ]
  },
  {
    "id": "e-vozidla-doklady",
    "title": "Doklady k vozidlům + pokladní doklad",
    "type": "Smlouvy / účetní doklady",
    "date": "2026",
    "strength": 4,
    "proves": [
      "prodej SsangYong 330 000 Kč",
      "čistý výtěžek 237 593 Kč",
      "rozpor dokladu se skutečností",
      "Příloha č. 1 — já jako výhradní řidič BMW"
    ],
    "risk": "Musím doložit smlouvy, předávací protokol, plnou moc a doklady, že jsem SsangYong splácela ze svých odměn.",
    "tags": [
      "vozidla",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík",
      "Karel Neffe"
    ]
  },
  {
    "id": "e-incident",
    "title": "Záznam incidentu s vozidlem",
    "type": "Vlastní záznam + WhatsApp",
    "date": "5/2026",
    "strength": 3,
    "proves": [
      "zadržení BMW",
      "zrušení home office týž den",
      "podmínění vydání vrácením hotovosti",
      "odpojení GPS"
    ],
    "risk": "Jednání proběhlo beze svědků; musím zajistit screenshoty WhatsApp s datem/časem a záznam GPS o pohybu BMW.",
    "tags": [
      "vozidla",
      "pracovněprávní",
      "GPS"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ]
  },
  {
    "id": "e-smernice",
    "title": "Vnitřní směrnice verze 1 + 2",
    "type": "Interní směrnice",
    "date": "2026",
    "strength": 4,
    "proves": [
      "pravidla odměňování",
      "manažerský režim",
      "změny podmínek"
    ],
    "risk": "Verze 1 z doby slibu je podle mě důležitá pro základ bonusu.",
    "tags": [
      "mzda",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ]
  }
];
