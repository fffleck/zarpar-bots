const ports = [
  {
    c: "DKAAL",
    n: "Aalborg, DK, DKAAL",
  },
  {
    c: "NOAES",
    n: "Aalesund, NO, NOAES",
  },
  {
    c: "DKAAR",
    n: "Aarhus, DK, DKAAR",
  },
  {
    c: "GLJEG",
    n: "Aasiaat (Egedesminde), GL, GLJEG",
  },
  {
    c: "GBABD",
    n: "Aberdeen, GB, GBABD",
  },
  {
    c: "CIABJ",
    n: "Abidjan, CI, CIABJ",
  },
  {
    c: "AEAUH",
    n: "Abu Dhabi, AE, AEAUH",
  },
  {
    c: "SVAQJ",
    n: "Acajutla, SV, SVAQJ",
  },
  {
    c: "AUADL",
    n: "Adelaide, AU, AUADL",
  },
  {
    c: "YEADE",
    n: "Aden, YE, YEADE",
  },
  {
    c: "MAAGA",
    n: "Agadir, MA, MAAGA",
  },
  {
    c: "INAMD",
    n: "Ahmedabad, IN, INAMD",
  },
  {
    c: "SEAHU",
    n: "Ahus, SE, SEAHU",
  },
  {
    c: "EGAIS",
    n: "Ain Sukhna, EG, EGAIS",
  },
  {
    c: "CKAIT",
    n: "Aitutaki, CK, CKAIT",
  },
  {
    c: "AEAJM",
    n: "AJMAN, AE, AEAJM",
  },
  {
    c: "JPAXT",
    n: "Akita, JP, JPAXT",
  },
  {
    c: "ISAKU",
    n: "Akureyri, IS, ISAKU",
  },
  {
    c: "USKQA",
    n: "Akutan, US, USKQA",
  },
  {
    c: "EGALY",
    n: "Alexandria, EG, EGALY",
  },
  {
    c: "AEFJR",
    n: "Al Fujayrah, AE, AEFJR",
  },
  {
    c: "ESALG",
    n: "Algeciras, ES, ESALG",
  },
  {
    c: "DZALG",
    n: "Algiers, DZ, DZALG",
  },
  {
    c: "TRALI",
    n: "Aliaga, TR, TRALI",
  },
  {
    c: "ESALC",
    n: "Alicante, ES, ESALC",
  },
  {
    c: "ESLEI",
    n: "Almeria, ES, ESLEI",
  },
  {
    c: "PAPAM",
    n: "Almirante, PA, PAPAM",
  },
  {
    c: "MXATM",
    n: "Altamira, MX, MXATM",
  },
  {
    c: "TRAMR",
    n: "Ambarli, TR, TRAMR",
  },
  {
    c: "IDAMQ",
    n: "Ambon, Molucas, ID, IDAMQ",
  },
  {
    c: "JOAMM",
    n: "Amman, JO, JOAMM",
  },
  {
    c: "IDAMP",
    n: "Ampenan, Bali, ID, IDAMP",
  },
  {
    c: "NLAMS",
    n: "Amsterdam, NL, NLAMS",
  },
  {
    c: "USANC",
    n: "Anchorage, US, USANC",
  },
  {
    c: "ITAOI",
    n: "Ancona, IT, ITAOI",
  },
  {
    c: "AIAXA",
    n: "Anguilla, AI, AIAXA",
  },
  {
    c: "DZAAE",
    n: "Annaba, DZ, DZAAE",
  },
  {
    c: "CNAQG",
    n: "Anqing, CN, CNAQG",
  },
  {
    c: "TRAYT",
    n: "Antalya, TR, TRAYT",
  },
  {
    c: "SVCUS",
    n: "Antiguo Cuscatlan, SV, SVCUS",
  },
  {
    c: "CLANF",
    n: "Antofagasta, CL, CLANF",
  },
  {
    c: "MGDIE",
    n: "Antsiranana, MG, MGDIE",
  },
  {
    c: "BEANR",
    n: "Antwerpen, BE, BEANR",
  },
  {
    c: "NGAPP",
    n: "Apapa, NG, NGAPP",
  },
  {
    c: "WSAPW",
    n: "Apia, WS, WSAPW",
  },
  {
    c: "JOAQJ",
    n: "Aqaba, JO, JOAQJ",
  },
  {
    c: "PEAQP",
    n: "Arequipa, PE, PEAQP",
  },
  {
    c: "CANWP",
    n: "Argentia, CA, CANWP",
  },
  {
    c: "CLARI",
    n: "Arica, CL, CLARI",
  },
  {
    c: "AWAUA",
    n: "Aruba, AW, AWAUA",
  },
  {
    c: "ILASH",
    n: "Ashdod, IL, ILASH",
  },
  {
    c: "PYASU",
    n: "Asuncion, PY, PYASU",
  },
  {
    c: "USATL",
    n: "Atlanta, GA, US, USATL",
  },
  {
    c: "NZAKL",
    n: "Auckland, NZ, NZAKL",
  },
  {
    c: "FRYUH",
    n: "AUMELAS, FR, FRYUH",
  },
  {
    c: "USAUS",
    n: "Austin, TX, US, USAUS",
  },
  {
    c: "PTAVE",
    n: "Aveiro, PT, PTAVE",
  },
  {
    c: "GBAVO",
    n: "Avonmouth, GB, GBAVO",
  },
  {
    c: "ARBHI",
    n: "Bahia Blanca, AR, ARBHI",
  },
  {
    c: "PABLB",
    n: "Balboa, PA, PABLB",
  },
  {
    c: "IDBPN",
    n: "Balikpapan, ID, IDBPN",
  },
  {
    c: "USBAL",
    n: "Baltimore, MD, US, USBAL",
  },
  {
    c: "RUBLT",
    n: "Baltiysk, RU, RUBLT",
  },
  {
    c: "CDBNW",
    n: "Banana, CD, CDBNW",
  },
  {
    c: "IRBND",
    n: "Bandar Abbas, IR, IRBND",
  },
  {
    c: "IRBKM",
    n: "Bandar Khomeini, IR, IRBKM",
  },
  {
    c: "IDTKG",
    n: "Bandar Lampung, ID, IDTKG",
  },
  {
    c: "IRBSR",
    n: "Bandar Shahid Rejaie, IR, IRBSR",
  },
  {
    c: "IDBDO",
    n: "Bandung, ID, IDBDO",
  },
  {
    c: "INBLR",
    n: "Bangalore, IN, INBLR",
  },
  {
    c: "THBKK",
    n: "Bangkok, TH, THBKK",
  },
  {
    c: "THBMT",
    n: "Bangkok Modern Terminals, TH, THBMT",
  },
  {
    c: "IDBDJ",
    n: "Banjarmasin, ID, IDBDJ",
  },
  {
    c: "GMBJL",
    n: "Banjul, GM, GMBJL",
  },
  {
    c: "MEBAR",
    n: "Bar, ME, MEBAR",
  },
  {
    c: "AWBAR",
    n: "Barcadera, AW, AWBAR",
  },
  {
    c: "ESBCN",
    n: "Barcelona, ES, ESBCN",
  },
  {
    c: "ITBRI",
    n: "Bari, IT, ITBRI",
  },
  {
    c: "VN7BR",
    n: "Ba Ria, VN, VN7BR",
  },
  {
    c: "COBAQ",
    n: "Barranquilla, CO, COBAQ",
  },
  {
    c: "CHBSL",
    n: "Basel, CH, CHBSL",
  },
  {
    c: "IQBSR",
    n: "Basra, IQ, IQBSR",
  },
  {
    c: "FRBAS",
    n: "Bassens, FR, FRBAS",
  },
  {
    c: "KNBAS",
    n: "Basseterre, KN, KNBAS",
  },
  {
    c: "GQBSG",
    n: "Bata, GQ, GQBSG",
  },
  {
    c: "IDBTH",
    n: "Batam (ex Batu Besar), ID, IDBTH",
  },
  {
    c: "IDBTM",
    n: "Batam Island, ID, IDBTM",
  },
  {
    c: "PHBTG",
    n: "Batangas Port, PH, PHBTG",
  },
  {
    c: "GEBUS",
    n: "Batumi, GE, GEBUS",
  },
  {
    c: "CNBAY",
    n: "Bayuquan, CN, CNBAY",
  },
  {
    c: "CNBHY",
    n: "Beihai, CN, CNBHY",
  },
  {
    c: "CNYQS",
    n: "Beijiao, CN, CNYQS",
  },
  {
    c: "MZBEW",
    n: "Beira, MZ, MZBEW",
  },
  {
    c: "LBBEY",
    n: "Beirut, LB, LBBEY",
  },
  {
    c: "DZBJA",
    n: "Bejaia, DZ, DZBJA",
  },
  {
    c: "IDBLW",
    n: "Belawan, ID, IDBLW",
  },
  {
    c: "GBBEL",
    n: "Belfast, GB, GBBEL",
  },
  {
    c: "BZBZE",
    n: "Belize City, BZ, BZBZE",
  },
  {
    c: "IDBEN",
    n: "BENETE, ID, IDBEN",
  },
  {
    c: "CNBFU",
    n: "Bengbu, CN, CNBFU",
  },
  {
    c: "LYBEN",
    n: "Benghazi, LY, LYBEN",
  },
  {
    c: "IDBOA",
    n: "Benoa, ID, IDBOA",
  },
  {
    c: "SOBBO",
    n: "Berbera, SO, SOBBO",
  },
  {
    c: "NOBGO",
    n: "Bergen, NO, NOBGO",
  },
  {
    c: "BZBGK",
    n: "Big Creek, BZ, BZBGK",
  },
  {
    c: "ESBIO",
    n: "Bilbao, ES, ESBIO",
  },
  {
    c: "VNBDG",
    n: "Binh Duong, VN, VNBDG",
  },
  {
    c: "MYBTU",
    n: "Bintulu, MY, MYBTU",
  },
  {
    c: "USBHM",
    n: "Birmingham, AL, US, USBHM",
  },
  {
    c: "GWOXB",
    n: "Bissau, GW, GWOXB",
  },
  {
    c: "IDBIT",
    n: "Bitung, ID, IDBIT",
  },
  {
    c: "TNBIZ",
    n: "Bizerte, TN, TNBIZ",
  },
  {
    c: "COBOG",
    n: "Bogota, CO, COBOG",
  },
  {
    c: "CDBOA",
    n: "Boma, CD, CDBOA",
  },
  {
    c: "USBOS",
    n: "Boston, MA, US, USBOS",
  },
  {
    c: "SKBTS",
    n: "Bratislava, SK, SKBTS",
  },
  {
    c: "DEBRE",
    n: "Bremen, DE, DEBRE",
  },
  {
    c: "DEBRV",
    n: "Bremerhaven, DE, DEBRV",
  },
  {
    c: "FRBES",
    n: "Brest, FR, FRBES",
  },
  {
    c: "NOBVK",
    n: "Brevik, NO, NOBVK",
  },
  {
    c: "BBBGI",
    n: "Bridgetown, BB, BBBGI",
  },
  {
    c: "AUBNE",
    n: "Brisbane, AU, AUBNE",
  },
  {
    c: "USBOY",
    n: "Brooklyn, NY, US, USBOY",
  },
  {
    c: "ROBUH",
    n: "Bucuresti, RO, ROBUH",
  },
  {
    c: "HUBUD",
    n: "Budapest, HU, HUBUD",
  },
  {
    c: "COBUN",
    n: "Buenaventura, CO, COBUN",
  },
  {
    c: "ARBUE",
    n: "Buenos Aires, AR, ARBUE",
  },
  {
    c: "BGBOJ",
    n: "Burgas, BG, BGBOJ",
  },
  {
    c: "TRBTZ",
    n: "Bursa, TR, TRBTZ",
  },
  {
    c: "KRPUS",
    n: "Busan, KR, KRPUS",
  },
  {
    c: "IRBUZ",
    n: "Bushehr, IR, IRBUZ",
  },
  {
    c: "AOCAB",
    n: "Cabinda, AO, AOCAB",
  },
  {
    c: "FRCFR",
    n: "Caen, FR, FRCFR",
  },
  {
    c: "PHCGY",
    n: "Cagayan De Oro, PH, PHCGY",
  },
  {
    c: "ITCAG",
    n: "Cagliari, IT, ITCAG",
  },
  {
    c: "VNCLN",
    n: "Cai Lan, VN, VNCLN",
  },
  {
    c: "VNTOT",
    n: "Cai Mep, VN, VNTOT",
  },
  {
    c: "VNCMT",
    n: "Cai Mep International Terminal, VN, VNCMT",
  },
  {
    c: "INCCU",
    n: "Calcutta, IN, INCCU",
  },
  {
    c: "CRCAL",
    n: "Caldera, CR, CRCAL",
  },
  {
    c: "CAYYC",
    n: "Calgary, AB, CA, CAYYC",
  },
  {
    c: "PECLL",
    n: "Callao, PE, PECLL",
  },
  {
    c: "USCDE",
    n: "Camden, US, USCDE",
  },
  {
    c: "VCCRP",
    n: "Campden Park, VC, VCCRP",
  },
  {
    c: "TRCKZ",
    n: "Canakkale Strait Passage, TR, TRCKZ",
  },
  {
    c: "ZACPT",
    n: "Cape Town, ZA, ZACPT",
  },
  {
    c: "HTCAP",
    n: "Cap-Haitien, HT, HTCAP",
  },
  {
    c: "COCTG",
    n: "Cartagena, CO, COCTG",
  },
  {
    c: "ESCAR",
    n: "Cartagena, ES, ESCAR",
  },
  {
    c: "MACAS",
    n: "Casablanca, MA, MACAS",
  },
  {
    c: "ESCST",
    n: "Casatejada, ES, ESCST",
  },
  {
    c: "ITOPM",
    n: "Casorate Primo, IT, ITOPM",
  },
  {
    c: "ITZHA",
    n: "CASORATE SEMPIONE, IT, ITZHA",
  },
  {
    c: "ITCRZ",
    n: "CASOREZZO, IT, ITCRZ",
  },
  {
    c: "ITCXR",
    n: "Casoria, IT, ITCXR",
  },
  {
    c: "ITCZ2",
    n: "Casorzo, IT, ITCZ2",
  },
  {
    c: "ESCAS",
    n: "Castellon de la Plana, ES, ESCAS",
  },
  {
    c: "LCCAS",
    n: "Castries, LC, LCCAS",
  },
  {
    c: "ITCTA",
    n: "Catania, IT, ITCTA",
  },
  {
    c: "VNCLI",
    n: "Cat Lai, VN, VNCLI",
  },
  {
    c: "DOCAU",
    n: "Caucedo, DO, DOCAU",
  },
  {
    c: "FRCVQ",
    n: "Cavan, FR, FRCVQ",
  },
  {
    c: "AUCAV",
    n: "Cavan, AU, AUCAV",
  },
  {
    c: "IECAV",
    n: "Cavan, IE, IECAV",
  },
  {
    c: "ITNPO",
    n: "Cavanella Po, IT, ITNPO",
  },
  {
    c: "PHCEB",
    n: "Cebu, PH, PHCEB",
  },
  {
    c: "CLCHB",
    n: "Chacabuco, CL, CLCHB",
  },
  {
    c: "IRZBR",
    n: "Chah Bahar, IR, IRZBR",
  },
  {
    c: "CNCSX",
    n: "Changsha, CN, CNCSX",
  },
  {
    c: "CNCNA",
    n: "Changsha, CN, CNCNA",
  },
  {
    c: "CNCGU",
    n: "Changshu, CN, CNCGU",
  },
  {
    c: "CNCZX",
    n: "Changzhou, CN, CNCZX",
  },
  {
    c: "USCHS",
    n: "Charleston, SC, US, USCHS",
  },
  {
    c: "VICHA",
    n: "Charlotte Amalie, VI, VICHA",
  },
  {
    c: "USCLT",
    n: "Charlotte, NC, US, USCLT",
  },
  {
    c: "USCHO",
    n: "Charlottesville, US, USCHO",
  },
  {
    c: "CNCTU",
    n: "Chengdu, CN, CNCTU",
  },
  {
    c: "INMAA",
    n: "Chennai, IN, INMAA",
  },
  {
    c: "USCHT",
    n: "Chester, US, USCHT",
  },
  {
    c: "JPCHB",
    n: "Chiba, JP, JPCHB",
  },
  {
    c: "USCHI",
    n: "Chicago, IL, US, USCHI",
  },
  {
    c: "USCPF",
    n: "Chippewa Falls, WI, US, USCPF",
  },
  {
    c: "BDCGP",
    n: "Chittagong, BD, BDCGP",
  },
  {
    c: "CNCWN",
    n: "Chiwan, CN, CNCWN",
  },
  {
    c: "CNCKG",
    n: "Chongqing, CN, CNCKG",
  },
  {
    c: "VICTD",
    n: "Christiansted, VI, VICTD",
  },
  {
    c: "FMTKK",
    n: "Chuuk, FM, FMTKK",
  },
  {
    c: "USCVG",
    n: "Cincinnati, OH, US, USCVG",
  },
  {
    c: "CNCIV",
    n: "Civet, CN, CNCIV",
  },
  {
    c: "ITCVV",
    n: "Civitavecchia, IT, ITCVV",
  },
  {
    c: "IDCIW",
    n: "Ciwandan, ID, IDCIW",
  },
  {
    c: "USICL",
    n: "Clarinda, US, USICL",
  },
  {
    c: "USQCO",
    n: "Clarion, US, USQCO",
  },
  {
    c: "USLRI",
    n: "Clarion, US, USLRI",
  },
  {
    c: "USCXE",
    n: "Clarita, US, USCXE",
  },
  {
    c: "USCLE",
    n: "Cleveland, OH, US, USCLE",
  },
  {
    c: "INCOK",
    n: "Cochin, IN, INCOK",
  },
  {
    c: "ZAZBA",
    n: "Coega, ZA, ZAZBA",
  },
  {
    c: "LKCMB",
    n: "Colombo, LK, LKCMB",
  },
  {
    c: "PAONX",
    n: "Colon Container Terminal, PA, PAONX",
  },
  {
    c: "USCMH",
    n: "Columbus, OH, US, USCMH",
  },
  {
    c: "GNCKY",
    n: "Conakry, GN, GNCKY",
  },
  {
    c: "ROCND",
    n: "Constanta, RO, ROCND",
  },
  {
    c: "DKCPH",
    n: "Copenhagen, DK, DKCPH",
  },
  {
    c: "NICIO",
    n: "Corinto, NI, NICIO",
  },
  {
    c: "IEORK",
    n: "Cork, IE, IEORK",
  },
  {
    c: "CLCNL",
    n: "Coronel, CL, CLCNL",
  },
  {
    c: "USCRP",
    n: "Corpus Christi, US, USCRP",
  },
  {
    c: "BJCOO",
    n: "Cotonou, BJ, BJCOO",
  },
  {
    c: "PACTB",
    n: "Cristobal, PA, PACTB",
  },
  {
    c: "VICZB",
    n: "Cruz Bay, St. John, VI, VICZB",
  },
  {
    c: "CWCUR",
    n: "Curacao, CW, CWCUR",
  },
  {
    c: "DECUX",
    n: "Cuxhaven, DE, DECUX",
  },
  {
    c: "CNDCB",
    n: "Da Chan Bay, CN, CNDCB",
  },
  {
    c: "INDRI",
    n: "Dadri, IN, INDRI",
  },
  {
    c: "KRTSN",
    n: "Daesan, KR, KRTSN",
  },
  {
    c: "CNDFE",
    n: "Dafeng, CN, CNDFE",
  },
  {
    c: "CNDLN",
    n: "Dailingshan, CN, CNDLN",
  },
  {
    c: "SNDKR",
    n: "Dakar, SN, SNDKR",
  },
  {
    c: "CNDLC",
    n: "Dalian, CN, CNDLC",
  },
  {
    c: "USDAL",
    n: "Dallas, TX, US, USDAL",
  },
  {
    c: "EGDAM",
    n: "Damietta, EG, EGDAM",
  },
  {
    c: "SADMM",
    n: "Dammam, SA, SADMM",
  },
  {
    c: "VNDAD",
    n: "Da Nang, VN, VNDAD",
  },
  {
    c: "TZDAR",
    n: "Dar Es Salaam, TZ, TZDAR",
  },
  {
    c: "AUDRW",
    n: "Darwin, AU, AUDRW",
  },
  {
    c: "PHDVO",
    n: "Davao, PH, PHDVO",
  },
  {
    c: "HUDEB",
    n: "Debrecen, HU, HUDEB",
  },
  {
    c: "GFDDC",
    n: "Degrad Des Cannes, GF, GFDDC",
  },
  {
    c: "INDEL",
    n: "Delhi, IN, INDEL",
  },
  {
    c: "USDEN",
    n: "Denver, CO, US, USDEN",
  },
  {
    c: "USDET",
    n: "Detroit, MI, US, USDET",
  },
  {
    c: "BDDAC",
    n: "Dhaka, BD, BDDAC",
  },
  {
    c: "TLDIL",
    n: "Dili, TL, TLDIL",
  },
  {
    c: "DJJIB",
    n: "Djibouti, DJ, DJJIB",
  },
  {
    c: "QADOH",
    n: "Doha, QA, QADOH",
  },
  {
    c: "CNDGG",
    n: "Dongguan, CN, CNDGG",
  },
  {
    c: "VNDNA",
    n: "Dong Nai, VN, VNDNA",
  },
  {
    c: "CMDLA",
    n: "Douala, CM, CMDLA",
  },
  {
    c: "CNDOU",
    n: "Doumen, CN, CNDOU",
  },
  {
    c: "GBDVR",
    n: "Dover, GB, GBDVR",
  },
  {
    c: "NODRM",
    n: "Drammen, NO, NODRM",
  },
  {
    c: "AEDXB",
    n: "Dubai \t, AE, AEDXB",
  },
  {
    c: "IEDUB",
    n: "Dublin, IE, IEDUB",
  },
  {
    c: "USDLH",
    n: "Duluth, MN, US, USDLH",
  },
  {
    c: "FRDKK",
    n: "Dunkerque, FR, FRDKK",
  },
  {
    c: "ZADUR",
    n: "Durban, ZA, ZADUR",
  },
  {
    c: "ALDRZ",
    n: "Durres, AL, ALDRZ",
  },
  {
    c: "USDUT",
    n: "Dutch Harbor, US, USDUT",
  },
  {
    c: "MHQEE",
    n: "Ebeye, MH, MHQEE",
  },
  {
    c: "CAYEG",
    n: "Edmonton, AB, CA, CAYEG",
  },
  {
    c: "NOEGE",
    n: "Egersund, NO, NOEGE",
  },
  {
    c: "MGEHL",
    n: "Ehoala (Tolagnaro), MG, MGEHL",
  },
  {
    c: "EGEDK",
    n: "El Dekheila, EG, EGEDK",
  },
  {
    c: "VEEGU",
    n: "El Guamache, VE, VEEGU",
  },
  {
    c: "USEZA",
    n: "Elizabeth, NJ, US, USEZA",
  },
  {
    c: "USELP",
    n: "El Paso, TX, US, USELP",
  },
  {
    c: "MXESE",
    n: "Ensenada, MX, MXESE",
  },
  {
    c: "ECESM",
    n: "Esmeraldas, EC, ECESM",
  },
  {
    c: "PTETR",
    n: "Estarreja, PT, PTETR",
  },
  {
    c: "TREYP",
    n: "Evyap Port, TR, TREYP",
  },
  {
    c: "CYFMG",
    n: "Famagusta, CY, CYFMG",
  },
  {
    c: "CNFAN",
    n: "Fangcheng, CN, CNFAN",
  },
  {
    c: "CNFCN",
    n: "Fang Cun, CN, CNFCN",
  },
  {
    c: "GBFXT",
    n: "Felixstowe, GB, GBFXT",
  },
  {
    c: "NOFRO",
    n: "Floroe, NO, NOFRO",
  },
  {
    c: "BRFOR",
    n: "Fortaleza, BR, BRFOR",
  },
  {
    c: "MQFDF",
    n: "Fort-de-france, MQ, MQFDF",
  },
  {
    c: "USFWT",
    n: "Fort Worth, TX, US, USFWT",
  },
  {
    c: "CNFOS",
    n: "Foshan, CN, CNFOS",
  },
  {
    c: "CNFRT",
    n: "Foshan New Pt, CN, CNFRT",
  },
  {
    c: "FRFOS",
    n: "Fos sur Mer, FR, FRFOS",
  },
  {
    c: "DKFRC",
    n: "Fredericia, DK, DKFRC",
  },
  {
    c: "NOFRK",
    n: "Fredrikstad, NO, NOFRK",
  },
  {
    c: "BMFPT",
    n: "Freeport, BM, BMFPT",
  },
  {
    c: "BSFPO",
    n: "Freeport, Grand Bahama, BS, BSFPO",
  },
  {
    c: "USFPO",
    n: "Freeport, TX, US, USFPO",
  },
  {
    c: "SLFNA",
    n: "Freetown, SL, SLFNA",
  },
  {
    c: "AUFRE",
    n: "Fremantle, AU, AUFRE",
  },
  {
    c: "USFRR",
    n: "Front Royal, VA, US, USFRR",
  },
  {
    c: "JPFUK",
    n: "Fukuoka, JP, JPFUK",
  },
  {
    c: "JPFKY",
    n: "Fukuyama, JP, JPFKY",
  },
  {
    c: "TVFUN",
    n: "Funafuti, TV, TVFUN",
  },
  {
    c: "CNFUG",
    n: "Fuqing, CN, CNFUG",
  },
  {
    c: "WFFUT",
    n: "Futuna Island Airport, WF, WFFUT",
  },
  {
    c: "CNFOC",
    n: "Fuzhou, CN, CNFOC",
  },
  {
    c: "USGLS",
    n: "Galveston, US, USGLS",
  },
  {
    c: "CNGLN",
    n: "Gaolan, CN, CNGLN",
  },
  {
    c: "CNGON",
    n: "Gaolan, CN, CNGON",
  },
  {
    c: "CNGOM",
    n: "Gaoming, CN, CNGOM",
  },
  {
    c: "CNGAS",
    n: "Gaosha, CN, CNGAS",
  },
  {
    c: "CNGAY",
    n: "Gaoyao, CN, CNGAY",
  },
  {
    c: "SEGVX",
    n: "Gavle, SE, SEGVX",
  },
  {
    c: "PLGDN",
    n: "Gdansk, PL, PLGDN",
  },
  {
    c: "PLGDY",
    n: "Gdynia, PL, PLGDY",
  },
  {
    c: "TRGEB",
    n: "Gebze, TR, TRGEB",
  },
  {
    c: "AUGEX",
    n: "Geelong, AU, AUGEX",
  },
  {
    c: "TRGEM",
    n: "Gemlik, TR, TRGEM",
  },
  {
    c: "PHGES",
    n: "General Santos, PH, PHGES",
  },
  {
    c: "ITGOA",
    n: "Genoa, IT, ITGOA",
  },
  {
    c: "GYGEO",
    n: "Georgetown, GY, GYGEO",
  },
  {
    c: "KYGEC",
    n: "Georgetown Grand Cayman, KY, KYGEC",
  },
  {
    c: "DZGHZ",
    n: "Ghazaouet, DZ, DZGHZ",
  },
  {
    c: "ESGIJ",
    n: "Gijon, ES, ESGIJ",
  },
  {
    c: "ITGIT",
    n: "Gioia tauro, IT, ITGIT",
  },
  {
    c: "AUGLT",
    n: "Gladstone, AU, AUGLT",
  },
  {
    c: "NOGLO",
    n: "Glomfjord, NO, NOGLO",
  },
  {
    c: "CNGGY",
    n: "Gongyi, CN, CNGGY",
  },
  {
    c: "IDGTO",
    n: "Gorontalo, Sulawesi, ID, IDGTO",
  },
  {
    c: "SEGOT",
    n: "Gothenburg, SE, SEGOT",
  },
  {
    c: "GBGRG",
    n: "Grangemouth, GB, GBGRG",
  },
  {
    c: "GBGRK",
    n: "Greenock, GB, GBGRK",
  },
  {
    c: "USGBO",
    n: "Greensboro, NC, US, USGBO",
  },
  {
    c: "USGXX",
    n: "Greer, SC, US, USGXX",
  },
  {
    c: "ISGRT",
    n: "Grundartangi, IS, ISGRT",
  },
  {
    c: "GUGUM",
    n: "Guam, GU, GUGUM",
  },
  {
    c: "CNCAN",
    n: "Guangzhou, CN, CNCAN",
  },
  {
    c: "CNGGZ",
    n: "Guangzhou, CN, CNGGZ",
  },
  {
    c: "VEGUT",
    n: "Guanta, VE, VEGUT",
  },
  {
    c: "VEGUA",
    n: "Guaranao, VE, VEGUA",
  },
  {
    c: "VEGUB",
    n: "Guaranao Bay, VE, VEGUB",
  },
  {
    c: "GTGUA",
    n: "Guatemala City, GT, GTGUA",
  },
  {
    c: "ECGYE",
    n: "Guayaquil, EC, ECGYE",
  },
  {
    c: "USGPT",
    n: "Gulfport, US, USGPT",
  },
  {
    c: "GPGUS",
    n: "Gustavia, GP, GPGUS",
  },
  {
    c: "KRKAN",
    n: "Gwangyang, KR, KRKAN",
  },
  {
    c: "KRGIN",
    n: "Gyeongin, KR, KRGIN",
  },
  {
    c: "JPHHE",
    n: "Hachinohe, JP, JPHHE",
  },
  {
    c: "ILHFA",
    n: "Haifa, IL, ILHFA",
  },
  {
    c: "CNHAK",
    n: "Haikou, CN, CNHAK",
  },
  {
    c: "VNHPH",
    n: "Hai Phong, VN, VNHPH",
  },
  {
    c: "JPHKT",
    n: "Hakata, JP, JPHKT",
  },
  {
    c: "JPHTD",
    n: "Hakata, JP, JPHTD",
  },
  {
    c: "JPHKD",
    n: "Hakodate, JP, JPHKD",
  },
  {
    c: "INHAL",
    n: "Haldia, IN, INHAL",
  },
  {
    c: "CAHAL",
    n: "Halifax, NS, CA, CAHAL",
  },
  {
    c: "SEHAD",
    n: "Halmstad, SE, SEHAD",
  },
  {
    c: "QAHMD",
    n: "Hamad, QA, QAHMD",
  },
  {
    c: "JPHMD",
    n: "Hamada, JP, JPHMD",
  },
  {
    c: "DEHAM",
    n: "Hamburg, DE, DEHAM",
  },
  {
    c: "BMBDA",
    n: "Hamilton, BM, BMBDA",
  },
  {
    c: "CNHGH",
    n: "Hangzhou Xiaoshan International Apt, CN, CNHGH",
  },
  {
    c: "VNHAN",
    n: "Hanoi, VN, VNHAN",
  },
  {
    c: "NOHRI",
    n: "Hareid, NO, NOHRI",
  },
  {
    c: "GBHRW",
    n: "Harwich, GB, GBHRW",
  },
  {
    c: "USHXC",
    n: "Haslet, TX, US, USHXC",
  },
  {
    c: "NOHAU",
    n: "Haugesund, NO, NOHAU",
  },
  {
    c: "NOHVI",
    n: "Havik, NO, NOHVI",
  },
  {
    c: "TRHAY",
    n: "Haydarpasa, TR, TRHAY",
  },
  {
    c: "INHZA",
    n: "Hazira Port/Surat, IN, INHZA",
  },
  {
    c: "CNHFE",
    n: "Hefei, CN, CNHFE",
  },
  {
    c: "SEHEL",
    n: "Helsingborg, SE, SEHEL",
  },
  {
    c: "FIHEL",
    n: "Helsinki, FI, FIHEL",
  },
  {
    c: "CNHSN",
    n: "Heshan, CN, CNHSN",
  },
  {
    c: "JPHBK",
    n: "Hibikishinko, JP, JPHBK",
  },
  {
    c: "USITO",
    n: "Hilo, US, USITO",
  },
  {
    c: "JPHIJ",
    n: "Hiroshima, JP, JPHIJ",
  },
  {
    c: "JPHIC",
    n: "Hitachinaka, JP, JPHIC",
  },
  {
    c: "VNSGN",
    n: "Ho Chi Minh City, VN, VNSGN",
  },
  {
    c: "VNVIC",
    n: "Ho Chi Minh, VICT, VN, VNVIC",
  },
  {
    c: "YEHOD",
    n: "Hodeidah, YE, YEHOD",
  },
  {
    c: "INHON",
    n: "Honavar, IN, INHON",
  },
  {
    c: "HKHKG",
    n: "Hong Kong, HK, HKHKG",
  },
  {
    c: "CNHGW",
    n: "Hongwan, CN, CNHGW",
  },
  {
    c: "SBHIR",
    n: "Honiara, SB, SBHIR",
  },
  {
    c: "USHNL",
    n: "Honolulu, US, USHNL",
  },
  {
    c: "JPHSM",
    n: "Hososhima, JP, JPHSM",
  },
  {
    c: "USHOU",
    n: "Houston, TX, US, USHOU",
  },
  {
    c: "NOHYR",
    n: "Hoyanger, NO, NOHYR",
  },
  {
    c: "TWHSZ",
    n: "HSINCHU, TW, TWHSZ",
  },
  {
    c: "CNHDU",
    n: "Huadu, CN, CNHDU",
  },
  {
    c: "CNHUD",
    n: "Hua Du, CN, CNHUD",
  },
  {
    c: "CNHUA",
    n: "Huangpu, CN, CNHUA",
  },
  {
    c: "CNHSI",
    n: "Huangshi, CN, CNHSI",
  },
  {
    c: "ESHUV",
    n: "Huelva, ES, ESHUV",
  },
  {
    c: "GBHUL",
    n: "Hull, GB, GBHUL",
  },
  {
    c: "CNHMN",
    n: "Humen, CN, CNHMN",
  },
  {
    c: "USHSV",
    n: "Huntsville, AL, US, USHSV",
  },
  {
    c: "ISHUS",
    n: "Husavik - hofn, IS, ISHUS",
  },
  {
    c: "NOHUS",
    n: "Husnes, NO, NOHUS",
  },
  {
    c: "INHYD",
    n: "Hyderabad, IN, INHYD",
  },
  {
    c: "VNSTR",
    n: "Icd Sotrans, VN, VNSTR",
  },
  {
    c: "VNTAM",
    n: "ICD TANAMEXCO, VN, VNTAM",
  },
  {
    c: "NOIKR",
    n: "Ikornnes, NO, NOIKR",
  },
  {
    c: "PEILQ",
    n: "Ilo, PE, PEILQ",
  },
  {
    c: "JPIMB",
    n: "Imabari, JP, JPIMB",
  },
  {
    c: "JPIMI",
    n: "Imari, JP, JPIMI",
  },
  {
    c: "BRIBB",
    n: "Imbituba, BR, BRIBB",
  },
  {
    c: "GBIMM",
    n: "Immingham, GB, GBIMM",
  },
  {
    c: "KRINC",
    n: "Incheon, KR, KRINC",
  },
  {
    c: "KRICN",
    n: "INCHEON INTL APT/SEOUL, KR, KRICN",
  },
  {
    c: "USIND",
    n: "Indianapolis, IN, US, USIND",
  },
  {
    c: "INIDR",
    n: "Indore, IN, INIDR",
  },
  {
    c: "GBIPS",
    n: "Ipswich, GB, GBIPS",
  },
  {
    c: "CLIQQ",
    n: "Iquique, CL, CLIQQ",
  },
  {
    c: "ISISA",
    n: "ISAFJORDUR, IS, ISISA",
  },
  {
    c: "TRISK",
    n: "Iskenderun, TR, TRISK",
  },
  {
    c: "VEIDM",
    n: "Isla de Margarita, VE, VEIDM",
  },
  {
    c: "TRIST",
    n: "Istanbul, TR, TRIST",
  },
  {
    c: "BRSPB",
    n: "Itaguai, BR, BRSPB",
  },
  {
    c: "BRITJ",
    n: "Itajai, BR, BRITJ",
  },
  {
    c: "BRIOA",
    n: "Itapoa, BR, BRIOA",
  },
  {
    c: "JPIWK",
    n: "Iwakuni, JP, JPIWK",
  },
  {
    c: "JPIYM",
    n: "Iyomishima, JP, JPIYM",
  },
  {
    c: "TRIZM",
    n: "Izmir, TR, TRIZM",
  },
  {
    c: "TRIZT",
    n: "Izmit, TR, TRIZT",
  },
  {
    c: "USJAX",
    n: "Jacksonville, FL, US, USJAX",
  },
  {
    c: "INJAI",
    n: "Jaipur, IN, INJAI",
  },
  {
    c: "IDJKT",
    n: "Jakarta, ID, IDJKT",
  },
  {
    c: "LKJCT",
    n: "Jaya Container Terminal, LK, LKJCT",
  },
  {
    c: "IDDJJ",
    n: "Jayapura, Irian Jaya, ID, IDDJJ",
  },
  {
    c: "AEJEA",
    n: "Jebel Ali, AE, AEJEA",
  },
  {
    c: "SAJED",
    n: "Jeddah, SA, SAJED",
  },
  {
    c: "CNJMN",
    n: "Jiangmen, CN, CNJMN",
  },
  {
    c: "CNJGY",
    n: "Jiangyin, CN, CNJGY",
  },
  {
    c: "CNJIA",
    n: "Jiangyin, CN, CNJIA",
  },
  {
    c: "CNJXN",
    n: "Jiaoxin, CN, CNJXN",
  },
  {
    c: "CNJAX",
    n: "Jiaxing, CN, CNJAX",
  },
  {
    c: "CNJJG",
    n: "Jiujiang, CN, CNJJG",
  },
  {
    c: "SAGIZ",
    n: "Jizan, SA, SAGIZ",
  },
  {
    c: "INJDG",
    n: "Jodhpur, IN, INJDG",
  },
  {
    c: "ZAJNB",
    n: "Johannesburg, ZA, ZAJNB",
  },
  {
    c: "MYJHB",
    n: "Johor Bahru, MY, MYJHB",
  },
  {
    c: "USJOT",
    n: "Joliet, IL, US, USJOT",
  },
  {
    c: "SAJUB",
    n: "Jubail, SA, SAJUB",
  },
  {
    c: "USOGG",
    n: "Kahului, US, USOGG",
  },
  {
    c: "CNKAP",
    n: "Kaiping, CN, CNKAP",
  },
  {
    c: "RUKGD",
    n: "Kaliningrad, RU, RUKGD",
  },
  {
    c: "DKKAL",
    n: "Kalundborg, DK, DKKAL",
  },
  {
    c: "JPKIS",
    n: "Kamaishi, JP, JPKIS",
  },
  {
    c: "JPKNZ",
    n: "Kanazawa, JP, JPKNZ",
  },
  {
    c: "INIXY",
    n: "Kandla, IN, INIXY",
  },
  {
    c: "INKNU",
    n: "Kanpur, IN, INKNU",
  },
  {
    c: "USKCK",
    n: "Kansas City, KS, US, USKCK",
  },
  {
    c: "USMKC",
    n: "Kansas City, MO, US, USMKC",
  },
  {
    c: "TWKHH",
    n: "Kaohsiung, TW, TWKHH",
  },
  {
    c: "PKKHI",
    n: "Karachi, PK, PKKHI",
  },
  {
    c: "INKAT",
    n: "Kattupalli, IN, INKAT",
  },
  {
    c: "USKWH",
    n: "Kawaihae, US, USKWH",
  },
  {
    c: "JPKWS",
    n: "Kawasaki, JP, JPKWS",
  },
  {
    c: "TWKEL",
    n: "Keelung, TW, TWKEL",
  },
  {
    c: "IDKDI",
    n: "Kendari, Sulawesi, ID, IDKDI",
  },
  {
    c: "BHKBS",
    n: "Khalifa Bin Salman, BH, BHKBS",
  },
  {
    c: "BHBAH",
    n: "KHALIFA BIN SALMAN PORT, BH, BHBAH",
  },
  {
    c: "SDKRT",
    n: "Khartoum, SD, SDKRT",
  },
  {
    c: "LYKHO",
    n: "Khoms (Al Khums), LY, LYKHO",
  },
  {
    c: "AEKLF",
    n: "Khor al Fakkan, AE, AEKLF",
  },
  {
    c: "IRKHO",
    n: "Khorramshahr, IR, IRKHO",
  },
  {
    c: "PKKIA",
    n: "Kiamari, PK, PKKIA",
  },
  {
    c: "DEKEL",
    n: "Kiel, DE, DEKEL",
  },
  {
    c: "DECKL",
    n: "Kiel Canal, DE, DECKL",
  },
  {
    c: "IDKID",
    n: "Kijang, ID, IDKID",
  },
  {
    c: "PGKIM",
    n: "Kimbe, PG, PGKIM",
  },
  {
    c: "SAKAC",
    n: "King Abdullah City, SA, SAKAC",
  },
  {
    c: "JMKIN",
    n: "Kingston, JM, JMKIN",
  },
  {
    c: "VCKTN",
    n: "Kingstown, VC, VCKTN",
  },
  {
    c: "JPKKJ",
    n: "Kitakyushu, JP, JPKKJ",
  },
  {
    c: "LTKLJ",
    n: "Klaipeda, LT, LTKLJ",
  },
  {
    c: "USTYS",
    n: "Knoxville, TN, US, USTYS",
  },
  {
    c: "JPUKB",
    n: "Kobe, JP, JPUKB",
  },
  {
    c: "INKOC",
    n: "Kochi, IN, INKOC",
  },
  {
    c: "USADQ",
    n: "Kodiak, US, USADQ",
  },
  {
    c: "FOKOL",
    n: "Kollafjordur, FO, FOKOL",
  },
  {
    c: "SIKOP",
    n: "Koper, SI, SIKOP",
  },
  {
    c: "PWROR",
    n: "Koror, PW, PWROR",
  },
  {
    c: "RUKOR",
    n: "Korsakov, RU, RUKOR",
  },
  {
    c: "FMKSA",
    n: "Kosrae (ex Kusaie), FM, FMKSA",
  },
  {
    c: "MYBKI",
    n: "Kota Kinabalu, MY, MYBKI",
  },
  {
    c: "FIKTK",
    n: "Kotka, FI, FIKTK",
  },
  {
    c: "CMKBI",
    n: "Kribi, CM, CMKBI",
  },
  {
    c: "INKRI",
    n: "Krishnapatnam, IN, INKRI",
  },
  {
    c: "NOKRS",
    n: "Kristiansand, NO, NOKRS",
  },
  {
    c: "MYKUA",
    n: "Kuantan, MY, MYKUA",
  },
  {
    c: "MYKCH",
    n: "Kuching, MY, MYKCH",
  },
  {
    c: "TRKMX",
    n: "Kumport, TR, TRKMX",
  },
  {
    c: "IDKOE",
    n: "Kupang, Timor, ID, IDKOE",
  },
  {
    c: "JPKUH",
    n: "Kushiro, JP, JPKUH",
  },
  {
    c: "KWKWI",
    n: "Kuwait, KW, KWKWI",
  },
  {
    c: "MHKWA",
    n: "Kwajalein, MH, MHKWA",
  },
  {
    c: "AUKWI",
    n: "Kwinana, AU, AUKWI",
  },
  {
    c: "MYLBU",
    n: "Labuan, MY, MYLBU",
  },
  {
    c: "PGLAE",
    n: "Lae, PG, PGLAE",
  },
  {
    c: "THLCH",
    n: "Laem Chabang, TH, THLCH",
  },
  {
    c: "HTLFF",
    n: "Lafiteau, HT, HTLFF",
  },
  {
    c: "NGLOS",
    n: "Lagos, NG, NGLOS",
  },
  {
    c: "TNLGN",
    n: "La Goulette Nord, TN, TNLGN",
  },
  {
    c: "VELAG",
    n: "La Guaira, VE, VELAG",
  },
  {
    c: "CNLNS",
    n: "Lanshi, CN, CNLNS",
  },
  {
    c: "FRLPE",
    n: "La Pallice, FR, FRLPE",
  },
  {
    c: "USLRD",
    n: "Laredo, TX, US, USLRD",
  },
  {
    c: "FRLRH",
    n: "La rochelle, FR, FRLRH",
  },
  {
    c: "NOLAR",
    n: "Larvik, NO, NOLAR",
  },
  {
    c: "ESLPA",
    n: "Las Palmas de Gran Canaria, ES, ESLPA",
  },
  {
    c: "ITSPE",
    n: "La Spezia, IT, ITSPE",
  },
  {
    c: "USLAS",
    n: "Las Vegas, NV, US, USLAS",
  },
  {
    c: "THLKR",
    n: "Lat Krabang, TH, THLKR",
  },
  {
    c: "SYLTK",
    n: "Lattakia, SY, SYLTK",
  },
  {
    c: "FJLTK",
    n: "Lautoka, FJ, FJLTK",
  },
  {
    c: "MXLZC",
    n: "Lazaro Cardenas, MX, MXLZC",
  },
  {
    c: "FRLEH",
    n: "Le Havre, FR, FRLEH",
  },
  {
    c: "PTLEI",
    n: "Leixoes, PT, PTLEI",
  },
  {
    c: "CNLUU",
    n: "Leliu, CN, CNLUU",
  },
  {
    c: "RELPT",
    n: "Le Port, RE, RELPT",
  },
  {
    c: "ITLEG",
    n: "Lesignana, IT, ITLEG",
  },
  {
    c: "FRLTT",
    n: "Le Trait, FR, FRLTT",
  },
  {
    c: "CNLIH",
    n: "Lianhuashan, CN, CNLIH",
  },
  {
    c: "CNLYG",
    n: "Lianyungang, CN, CNLYG",
  },
  {
    c: "GALBV",
    n: "Libreville, GA, GALBV",
  },
  {
    c: "PELIM",
    n: "Lima, PE, PELIM",
  },
  {
    c: "CYLMS",
    n: "Limassol, CY, CYLMS",
  },
  {
    c: "CLLQN",
    n: "Lirquen, CL, CLLQN",
  },
  {
    c: "PTLIS",
    n: "Lisboa, PT, PTLIS",
  },
  {
    c: "GBLIV",
    n: "Liverpool, GB, GBLIV",
  },
  {
    c: "ITLIV",
    n: "Livorno, IT, ITLIV",
  },
  {
    c: "AOLOB",
    n: "Lobito, AO, AOLOB",
  },
  {
    c: "TGLFW",
    n: "Lome, TG, TGLFW",
  },
  {
    c: "GBLON",
    n: "London, GB, GBLON",
  },
  {
    c: "GBLGP",
    n: "London Gateway Port, GB, GBLGP",
  },
  {
    c: "USLGB",
    n: "Long Beach, CA, US, USLGB",
  },
  {
    c: "YTLON",
    n: "Longoni, YT, YTLON",
  },
  {
    c: "USLAX",
    n: "Los Angeles, CA, US, USLAX",
  },
  {
    c: "USLUI",
    n: "Louisville, KY, US, USLUI",
  },
  {
    c: "AOLAD",
    n: "Luanda, AO, AOLAD",
  },
  {
    c: "GQLUB",
    n: "Luba, GQ, GQLUB",
  },
  {
    c: "NALUD",
    n: "Luderitz, NA, NALUD",
  },
  {
    c: "INLUH",
    n: "Ludhiana, IN, INLUH",
  },
  {
    c: "CNLUZ",
    n: "Lushan, CN, CNLUZ",
  },
  {
    c: "NZLYT",
    n: "Lyttelton, NZ, NZLYT",
  },
  {
    c: "BRMCP",
    n: "Macapa, BR, BRMCP",
  },
  {
    c: "MOMFM",
    n: "Macau, MO, MOMFM",
  },
  {
    c: "PGMAG",
    n: "Madang, PG, PGMAG",
  },
  {
    c: "ESMAD",
    n: "Madrid, ES, ESMAD",
  },
  {
    c: "MGMJN",
    n: "Majunga, MG, MGMJN",
  },
  {
    c: "MHMAJ",
    n: "Majuro, MH, MHMAJ",
  },
  {
    c: "IDMAK",
    n: "Makassar, ID, IDMAK",
  },
  {
    c: "GQSSG",
    n: "Malabo, GQ, GQSSG",
  },
  {
    c: "ESAGP",
    n: "Malaga, ES, ESAGP",
  },
  {
    c: "MVMLE",
    n: "Male, MV, MVMLE",
  },
  {
    c: "SEMMA",
    n: "Malmo, SE, SEMMA",
  },
  {
    c: "AOMAL",
    n: "Malongo, AO, AOMAL",
  },
  {
    c: "NOMAY",
    n: "Maloy, NO, NOMAY",
  },
  {
    c: "MTDIS",
    n: "Malta Freeport, MT, MTDIS",
  },
  {
    c: "NIMGA",
    n: "Managua, NI, NIMGA",
  },
  {
    c: "BRMAO",
    n: "Manaus, BR, BRMAO",
  },
  {
    c: "INIXE",
    n: "Mangalore, IN, INIXE",
  },
  {
    c: "PHMNL",
    n: "Manila, PH, PHMNL",
  },
  {
    c: "PHMNN",
    n: "Manila North Harbour, PH, PHMNN",
  },
  {
    c: "PHMNS",
    n: "Manila South Harbour, PH, PHMNS",
  },
  {
    c: "IDMKW",
    n: "Manokwari, Irian Jaya, ID, IDMKW",
  },
  {
    c: "MXZLO",
    n: "Manzanillo, MX, MXZLO",
  },
  {
    c: "PAMIT",
    n: "Manzanillo, PA, PAMIT",
  },
  {
    c: "DOMAN",
    n: "Manzanillo, DO, DO, DOMAN",
  },
  {
    c: "MZMPM",
    n: "Maputo, MZ, MZMPM",
  },
  {
    c: "VEMAR",
    n: "Maracaibo, VE, VEMAR",
  },
  {
    c: "TRMAD",
    n: "Mardas, TR, TRMAD",
  },
  {
    c: "ARMDQ",
    n: "Mar del Plata, AR, ARMDQ",
  },
  {
    c: "ITPMA",
    n: "Marghera, IT, ITPMA",
  },
  {
    c: "CUMAR",
    n: "Mariel, CU, CUMAR",
  },
  {
    c: "ESMPG",
    n: "Marin, ES, ESMPG",
  },
  {
    c: "ITMDC",
    n: "Marina di Carrara, IT, ITMDC",
  },
  {
    c: "INMRM",
    n: "Marmagao (Marmugao), IN, INMRM",
  },
  {
    c: "TRMPT",
    n: "Marport, TR, TRMPT",
  },
  {
    c: "MTMSA",
    n: "Marsa, MT, MTMSA",
  },
  {
    c: "LYLMQ",
    n: "Marsa Brega, LY, LYLMQ",
  },
  {
    c: "MTMAR",
    n: "Marsaxlokk, MT, MTMAR",
  },
  {
    c: "NZMAP",
    n: "Marsden Point, NZ, NZMAP",
  },
  {
    c: "FRMRS",
    n: "Marseille, FR, FRMRS",
  },
  {
    c: "KRMAS",
    n: "Masan, KR, KRMAS",
  },
  {
    c: "ERMSW",
    n: "Massawa, ER, ERMSW",
  },
  {
    c: "CDMAT",
    n: "Matadi, CD, CDMAT",
  },
  {
    c: "VEMTV",
    n: "Matanzas, VE, VEMTV",
  },
  {
    c: "PEMRI",
    n: "Matarani, PE, PEMRI",
  },
  {
    c: "WFMAU",
    n: "Mata'utu, WF, WFMAU",
  },
  {
    c: "JPMYJ",
    n: "Matsuyama, JP, JPMYJ",
  },
  {
    c: "IDMOF",
    n: "Maumere, Flores, ID, IDMOF",
  },
  {
    c: "CNMWN",
    n: "Mawan, CN, CNMWN",
  },
  {
    c: "CNMAW",
    n: "Mawei, CN, CNMAW",
  },
  {
    c: "MXMZT",
    n: "Mazatlan, MX, MXMZT",
  },
  {
    c: "IDMES",
    n: "Medan, ID, IDMES",
  },
  {
    c: "CLMJS",
    n: "Mejillones, CL, CLMJS",
  },
  {
    c: "AUMEL",
    n: "Melbourne, AU, AUMEL",
  },
  {
    c: "USMEM",
    n: "Memphis, TN, US, USMEM",
  },
  {
    c: "TRMER",
    n: "Mersin, TR, TRMER",
  },
  {
    c: "QAMES",
    n: "Mesaieed, QA, QAMES",
  },
  {
    c: "MXMEX",
    n: "Mexico City, MX, MXMEX",
  },
  {
    c: "USMIA",
    n: "Miami, FL, US, USMIA",
  },
  {
    c: "ITMIL",
    n: "Milano, IT, ITMIL",
  },
  {
    c: "USMKE",
    n: "Milwaukee, WI, US, USMKE",
  },
  {
    c: "AEKHL",
    n: "Mina Khalifa, AE, AEKHL",
  },
  {
    c: "BHMIN",
    n: "Mina Sulman Port, BH, BHMIN",
  },
  {
    c: "CVMIN",
    n: "Mindelo, CV, CVMIN",
  },
  {
    c: "USMES",
    n: "Minneapolis, MN, US, USMES",
  },
  {
    c: "MYMYY",
    n: "Miri, MY, MYMYY",
  },
  {
    c: "LYMRA",
    n: "Misurata, LY, LYMRA",
  },
  {
    c: "JPMIZ",
    n: "Mizushima, JP, JPMIZ",
  },
  {
    c: "CUMOA",
    n: "Moa, CU, CUMOA",
  },
  {
    c: "USMOB",
    n: "Mobile, AL, US, USMOB",
  },
  {
    c: "SOMGQ",
    n: "Mogadishu, SO, SOMGQ",
  },
  {
    c: "CRMOB",
    n: "Moin, CR, CRMOB",
  },
  {
    c: "JPMOJ",
    n: "Moji, JP, JPMOJ",
  },
  {
    c: "KEMBA",
    n: "Mombasa, KE, KEMBA",
  },
  {
    c: "BDMGL",
    n: "Mongla, BD, BDMGL",
  },
  {
    c: "LRMLW",
    n: "Monrovia, LR, LRMLW",
  },
  {
    c: "JMMBJ",
    n: "Montego Bay, JM, JMMBJ",
  },
  {
    c: "UYMVD",
    n: "Montevideo, UY, UYMVD",
  },
  {
    c: "FRMTX",
    n: "Montoir De Bretagne, FR, FRMTX",
  },
  {
    c: "CAMTR",
    n: "Montreal, QC, CA, CAMTR",
  },
  {
    c: "USMRH",
    n: "Morehead City, US, USMRH",
  },
  {
    c: "KMYVA",
    n: "Moroni, KM, KMYVA",
  },
  {
    c: "NOMSS",
    n: "Moss, NO, NOMSS",
  },
  {
    c: "DZMOS",
    n: "Mostaganem, DZ, DZMOS",
  },
  {
    c: "NZMMU",
    n: "Mount Maunganui, NZ, NZMMU",
  },
  {
    c: "BNMUA",
    n: "Muara, BN, BNMUA",
  },
  {
    c: "INBOM",
    n: "Mumbai, IN, INBOM",
  },
  {
    c: "INMUN",
    n: "Mundra, IN, INMUN",
  },
  {
    c: "JPMUR",
    n: "Muroran, JP, JPMUR",
  },
  {
    c: "KMMUT",
    n: "Mutsamudu, KM, KMMUT",
  },
  {
    c: "EEMUG",
    n: "Muuga, EE, EEMUG",
  },
  {
    c: "MZMNC",
    n: "Nacala, MZ, MZMNC",
  },
  {
    c: "JPNGO",
    n: "Nagoya, JP, JPNGO",
  },
  {
    c: "INNAG",
    n: "Nagpur, IN, INNAG",
  },
  {
    c: "JPNAH",
    n: "Naha, JP, JPNAH",
  },
  {
    c: "RUNJK",
    n: "Nakhodka, RU, RUNJK",
  },
  {
    c: "AOMSZ",
    n: "Namibe, AO, AOMSZ",
  },
  {
    c: "CNKHN",
    n: "Nanchang, CN, CNKHN",
  },
  {
    c: "CNNAH",
    n: "Nanhai, CN, CNNAH",
  },
  {
    c: "CNNKG",
    n: "Nanjing, CN, CNNKG",
  },
  {
    c: "GLJNN",
    n: "Nanortalik, GL, GLJNN",
  },
  {
    c: "CNNSA",
    n: "Nansha, CN, CNNSA",
  },
  {
    c: "CNNNP",
    n: "Nansha New Port, CN, CNNNP",
  },
  {
    c: "CNNTG",
    n: "Nantong, CN, CNNTG",
  },
  {
    c: "NZNPE",
    n: "Napier, NZ, NZNPE",
  },
  {
    c: "ITNAP",
    n: "Naples, IT, ITNAP",
  },
  {
    c: "GLJNS",
    n: "Narsaq, GL, GLJNS",
  },
  {
    c: "USBNA",
    n: "Nashville, TN, US, USBNA",
  },
  {
    c: "BRNAT",
    n: "Natal, BR, BRNAT",
  },
  {
    c: "BRNVT",
    n: "Navegantes, BR, BRNVT",
  },
  {
    c: "USNIJ",
    n: "Nawiliwili, US, USNIJ",
  },
  {
    c: "NZNSN",
    n: "Nelson, NZ, NZNSN",
  },
  {
    c: "KNNEV",
    n: "Nevis (Charlestown), KN, KNNEV",
  },
  {
    c: "USEWR",
    n: "Newark, NJ, US, USEWR",
  },
  {
    c: "AUNTL",
    n: "Newcastle, AU, AUNTL",
  },
  {
    c: "INICD",
    n: "New Delhi, IN, INICD",
  },
  {
    c: "USMSY",
    n: "New Orleans, LA, US, USMSY",
  },
  {
    c: "USNYC",
    n: "New York, NY, US, USNYC",
  },
  {
    c: "INNSA",
    n: "Nhava Sheva, IN, INNSA",
  },
  {
    c: "INNHV",
    n: "Nhave, IN, INNHV",
  },
  {
    c: "JPKIJ",
    n: "Niigata, JP, JPKIJ",
  },
  {
    c: "CNNGB",
    n: "Ningbo, CN, CNNGB",
  },
  {
    c: "NUIUE",
    n: "Niue Island, NU, NUIUE",
  },
  {
    c: "NFNLK",
    n: "Norfolk Island, NF, NFNLK",
  },
  {
    c: "USORF",
    n: "Norfolk, VA, US, USORF",
  },
  {
    c: "SENRK",
    n: "Norrkoping, SE, SENRK",
  },
  {
    c: "MGNOS",
    n: "Nosy-be, MG, MGNOS",
  },
  {
    c: "MRNDB",
    n: "Nouadhibou, MR, MRNDB",
  },
  {
    c: "MRNKC",
    n: "Nouakchott, MR, MRNKC",
  },
  {
    c: "NCNOU",
    n: "Noumea, NC, NCNOU",
  },
  {
    c: "RUNVS",
    n: "Novorossiysk, RU, RUNVS",
  },
  {
    c: "TOTBU",
    n: "Nuku Alofa, TO, TOTBU",
  },
  {
    c: "GLGOH",
    n: "Nuuk (Godthaab), GL, GLGOH",
  },
  {
    c: "USOAK",
    n: "Oakland, CA, US, USOAK",
  },
  {
    c: "UAODS",
    n: "Odessa, UA, UAODS",
  },
  {
    c: "JPOIT",
    n: "Oita, JP, JPOIT",
  },
  {
    c: "USOKC",
    n: "Oklahoma City, OK, US, USOKC",
  },
  {
    c: "USOMA",
    n: "Omaha, NE, US, USOMA",
  },
  {
    c: "JPONA",
    n: "Onahama, JP, JPONA",
  },
  {
    c: "NGONN",
    n: "Onne, NG, NGONN",
  },
  {
    c: "DZORN",
    n: "Oran, DZ, DZORN",
  },
  {
    c: "AWORJ",
    n: "Oranjestad, AW, AWORJ",
  },
  {
    c: "NOORK",
    n: "Orkanger, NO, NOORK",
  },
  {
    c: "JPOSA",
    n: "Osaka, JP, JPOSA",
  },
  {
    c: "NOOSL",
    n: "Oslo, NO, NOOSL",
  },
  {
    c: "JPOTK",
    n: "Otake, JP, JPOTK",
  },
  {
    c: "GLJFR",
    n: "Paamiut (Fredrikshaab), GL, GLJFR",
  },
  {
    c: "IDPDG",
    n: "Padang, ID, IDPDG",
  },
  {
    c: "ASPPG",
    n: "Pago Pago, AS, ASPPG",
  },
  {
    c: "PEPAI",
    n: "Paita, PE, PEPAI",
  },
  {
    c: "EEPLA",
    n: "Paldiski, EE, EEPLA",
  },
  {
    c: "IDPLM",
    n: "Palembang, ID, IDPLM",
  },
  {
    c: "USPAB",
    n: "Palm Beach, US, USPAB",
  },
  {
    c: "VEPLA",
    n: "Palua, VE, VEPLA",
  },
  {
    c: "PAPCN",
    n: "Panama Canal, PA, PAPCN",
  },
  {
    c: "USPFN",
    n: "Panama City, US, USPFN",
  },
  {
    c: "PAPTY",
    n: "Panama City, PA, PAPTY",
  },
  {
    c: "IDPNJ",
    n: "Panjang, ID, IDPNJ",
  },
  {
    c: "IDPTL",
    n: "Pantoloan, Sv, ID, IDPTL",
  },
  {
    c: "CNPYU",
    n: "Panyu, CN, CNPYU",
  },
  {
    c: "PFPPT",
    n: "Papeete, PF, PFPPT",
  },
  {
    c: "SRPBM",
    n: "Paramaribo, SR, SRPBM",
  },
  {
    c: "BRPNG",
    n: "Paranagua, BR, BRPNG",
  },
  {
    c: "FRPAR",
    n: "Paris, FR, FRPAR",
  },
  {
    c: "MYPGU",
    n: "Pasir Gudang, MY, MYPGU",
  },
  {
    c: "BRPEC",
    n: "Pecem, BR, BRPEC",
  },
  {
    c: "MZPOL",
    n: "Pemba, MZ, MZPOL",
  },
  {
    c: "MYPEN",
    n: "Penang, MY, MYPEN",
  },
  {
    c: "USPHL",
    n: "Philadelphia, US, USPHL",
  },
  {
    c: "SXPHI",
    n: "Philipsburg, SX, SXPHI",
  },
  {
    c: "KHPNH",
    n: "Phnom Penh, KH, KHPNH",
  },
  {
    c: "USPHX",
    n: "Phoenix, AZ, US, USPHX",
  },
  {
    c: "THHKT",
    n: "Phuket, TH, THHKT",
  },
  {
    c: "VNPHG",
    n: "Phuoc Long, VN, VNPHG",
  },
  {
    c: "INPAV",
    n: "Pipavav, IN, INPAV",
  },
  {
    c: "GRPIR",
    n: "Piraeus, GR, GRPIR",
  },
  {
    c: "USPIT",
    n: "Pittsburgh, PA, US, USPIT",
  },
  {
    c: "USPAF",
    n: "Plainfield, IN, US, USPAF",
  },
  {
    c: "HRPLE",
    n: "Ploce, HR, HRPLE",
  },
  {
    c: "FMPNI",
    n: "Pohnpei(Ex Ponape), FM, FMPNI",
  },
  {
    c: "GPPTP",
    n: "Pointe-a-pitre, GP, GPPTP",
  },
  {
    c: "CGPNR",
    n: "Pointe Noire, CG, CGPNR",
  },
  {
    c: "TTPTS",
    n: "Point Lisas, TT, TTPTS",
  },
  {
    c: "BRPOU",
    n: "Ponta Ubu, BR, BRPOU",
  },
  {
    c: "IDPNK",
    n: "Pontianak, ID, IDPNK",
  },
  {
    c: "HTPAP",
    n: "Port-Au-Prince, HT, HTPAP",
  },
  {
    c: "NZPOE",
    n: "Port Chalmers, NZ, NZPOE",
  },
  {
    c: "REPDG",
    n: "Port De Pointe Des Galets, RE, REPDG",
  },
  {
    c: "ZAPLZ",
    n: "Port Elizabeth, ZA, ZAPLZ",
  },
  {
    c: "USPEB",
    n: "Port Elizabeth, US, USPEB",
  },
  {
    c: "USPEF",
    n: "Port Everglades, US, USPEF",
  },
  {
    c: "GAPOG",
    n: "Port Gentil, GA, GAPOG",
  },
  {
    c: "NGPHC",
    n: "Port Harcourt, NG, NGPHC",
  },
  {
    c: "AUPHE",
    n: "Port Hedland, AU, AUPHE",
  },
  {
    c: "USNTD",
    n: "Port Hueneme, US, USNTD",
  },
  {
    c: "MYPKG",
    n: "Port Klang, MY, MYPKG",
  },
  {
    c: "MYLPK",
    n: "Port Klang north port, MY, MYLPK",
  },
  {
    c: "USPWM",
    n: "Portland, US, USPWM",
  },
  {
    c: "USPDX",
    n: "Portland, OR, US, USPDX",
  },
  {
    c: "MUPLU",
    n: "Port Louis, MU, MUPLU",
  },
  {
    c: "PGPOM",
    n: "Port Moresby, PG, PGPOM",
  },
  {
    c: "TTPOS",
    n: "Port of Spain, TT, TTPOS",
  },
  {
    c: "PKBQM",
    n: "Port Qasim / Port Muhammad Bin Qasim, PK, PKBQM",
  },
  {
    c: "EGPSD",
    n: "Port Said, EG, EGPSD",
  },
  {
    c: "EGPSW",
    n: "Port Said West, EG, EGPSW",
  },
  {
    c: "GBPME",
    n: "Portsmouth, GB, GBPME",
  },
  {
    c: "USPTM",
    n: "Portsmouth, US, USPTM",
  },
  {
    c: "SDPZU",
    n: "Port Sudan, SD, SDPZU",
  },
  {
    c: "FRPOV",
    n: "Port Vendres, FR, FRPOV",
  },
  {
    c: "VUVLI",
    n: "Port Vila, VU, VUVLI",
  },
  {
    c: "ECPSJ",
    n: "Posorja, EC, ECPSJ",
  },
  {
    c: "GEPTI",
    n: "Poti, GE, GEPTI",
  },
  {
    c: "CZPRG",
    n: "Praha, CZ, CZPRG",
  },
  {
    c: "CVRAI",
    n: "Praia, CV, CVRAI",
  },
  {
    c: "CAPRR",
    n: "Prince Rupert, BC, CA, CAPRR",
  },
  {
    c: "MXPGO",
    n: "Progreso, MX, MXPGO",
  },
  {
    c: "NCPNY",
    n: "Prony, NC, NCPNY",
  },
  {
    c: "TCPLS",
    n: "Providenciales, TC, TCPLS",
  },
  {
    c: "CLPAG",
    n: "Puerto Angamos, CL, CLPAG",
  },
  {
    c: "GTPBR",
    n: "Puerto Barrios, GT, GTPBR",
  },
  {
    c: "COPBO",
    n: "Puerto Bolivar, CO, COPBO",
  },
  {
    c: "ECPBO",
    n: "Puerto Bolivar, EC, ECPBO",
  },
  {
    c: "VEPBL",
    n: "Puerto Cabello, VE, VEPBL",
  },
  {
    c: "CRPTC",
    n: "Puerto Caldera, CR, CRPTC",
  },
  {
    c: "HNPCA",
    n: "Puerto Castilla, HN, HNPCA",
  },
  {
    c: "HNPCR",
    n: "Puerto Cortes, HN, HNPCR",
  },
  {
    c: "ARPUD",
    n: "Puerto Deseado, AR, ARPUD",
  },
  {
    c: "CRLIO",
    n: "Puerto Limon, CR, CRLIO",
  },
  {
    c: "MXPMD",
    n: "Puerto Madero, MX, MXPMD",
  },
  {
    c: "ARPMY",
    n: "Puerto Madryn, AR, ARPMY",
  },
  {
    c: "MXPMS",
    n: "Puerto Morelos, MX, MXPMS",
  },
  {
    c: "DOPOP",
    n: "Puerto Plata, DO, DOPOP",
  },
  {
    c: "GTPRQ",
    n: "Puerto Quetzal, GT, GTPRQ",
  },
  {
    c: "GTSTC",
    n: "Puerto Santo Tomas de Castilla, GT, GTSTC",
  },
  {
    c: "VEPSU",
    n: "Puerto Sucre, VE, VEPSU",
  },
  {
    c: "CLPUQ",
    n: "Punta Arenas, CL, CLPUQ",
  },
  {
    c: "KRPTK",
    n: "Pyeongtaek, KR, KRPTK",
  },
  {
    c: "GLJJU",
    n: "Qaqortoq (Julianehaab), GL, GLJJU",
  },
  {
    c: "CNTAO",
    n: "Qingdao, CN, CNTAO",
  },
  {
    c: "CNQYN",
    n: "Qingyuan, CN, CNQYN",
  },
  {
    c: "CNSHP",
    n: "Qinhuangdao, CN, CNSHP",
  },
  {
    c: "CNQZH",
    n: "Qinzhou, CN, CNQZH",
  },
  {
    c: "CNQZJ",
    n: "Quanzhou, CN, CNQZJ",
  },
  {
    c: "MZUEL",
    n: "Quelimane, MZ, MZUEL",
  },
  {
    c: "VNUIH",
    n: "Qui Nhon, VN, VNUIH",
  },
  {
    c: "ECUIO",
    n: "Quito, EC, ECUIO",
  },
  {
    c: "PGRAB",
    n: "Rabaul, PG, PGRAB",
  },
  {
    c: "TNRDS",
    n: "Rades/tunis, TN, TNRDS",
  },
  {
    c: "INRAJ",
    n: "Rajkot, IN, INRAJ",
  },
  {
    c: "CKRAR",
    n: "Rarotonga, CK, CKRAR",
  },
  {
    c: "FIRAU",
    n: "Rauma, FI, FIRAU",
  },
  {
    c: "ITRAN",
    n: "Ravenna, IT, ITRAN",
  },
  {
    c: "REREU",
    n: "Reunion, RE, REREU",
  },
  {
    c: "ISREY",
    n: "Reykjavik, IS, ISREY",
  },
  {
    c: "ZARCB",
    n: "Richards Bay, ZA, ZARCB",
  },
  {
    c: "USRIC",
    n: "Richmond, VA, US, USRIC",
  },
  {
    c: "LVRIX",
    n: "Riga, LV, LVRIX",
  },
  {
    c: "HRRJK",
    n: "Rijeka, HR, HRRJK",
  },
  {
    c: "BRRIO",
    n: "Rio de Janeiro, BR, BRRIO",
  },
  {
    c: "BRRIG",
    n: "Rio Grande, BR, BRRIG",
  },
  {
    c: "DOHAI",
    n: "Rio Haina, DO, DOHAI",
  },
  {
    c: "SARUH",
    n: "RIYADH, SA, SARUH",
  },
  {
    c: "CNRZH",
    n: "Rizhao, CN, CNRZH",
  },
  {
    c: "VGRAD",
    n: "Road Town, Tortola, VG, VGRAD",
  },
  {
    c: "CNROQ",
    n: "Rong qi, CN, CNROQ",
  },
  {
    c: "ARROS",
    n: "Rosario, AR, ARROS",
  },
  {
    c: "DMRSU",
    n: "Roseau, DM, DMRSU",
  },
  {
    c: "NLRTM",
    n: "Rotterdam, NL, NLRTM",
  },
  {
    c: "FRURO",
    n: "Rouen, FR, FRURO",
  },
  {
    c: "ESSAG",
    n: "Sagunt, ES, ESSAG",
  },
  {
    c: "THSCS",
    n: "Sahathai Coastal Seaport, TH, THSCS",
  },
  {
    c: "CASAT",
    n: "Saint-Anthony, CA, CASAT",
  },
  {
    c: "VISTX",
    n: "Saint Croix, VI, VISTX",
  },
  {
    c: "GDSTG",
    n: "Saint George's, GD, GDSTG",
  },
  {
    c: "CASJB",
    n: "Saint-John, CA, CASJB",
  },
  {
    c: "AGSJO",
    n: "Saint John's, AG, AGSJO",
  },
  {
    c: "RUFCT",
    n: "Saint Petersburg FCT terminal , RU, RUFCT",
  },
  {
    c: "RULED",
    n: "Saint Petersburg PLP, RU, RULED",
  },
  {
    c: "VISTT",
    n: "Saint Thomas, VI, VISTT",
  },
  {
    c: "VCSVD",
    n: "Saint Vincent, VC, VCSVD",
  },
  {
    c: "MPSPN",
    n: "Saipan, MP, MPSPN",
  },
  {
    c: "JPSMN",
    n: "Sakaiminato, JP, JPSMN",
  },
  {
    c: "JPSKT",
    n: "Sakata, JP, JPSKT",
  },
  {
    c: "OMSLL",
    n: "Salalah, OM, OMSLL",
  },
  {
    c: "ITSAL",
    n: "Salerno, IT, ITSAL",
  },
  {
    c: "USSLC",
    n: "Salt Lake City, UT, US, USSLC",
  },
  {
    c: "JMSRI",
    n: "Salt River, JM, JMSRI",
  },
  {
    c: "BRSSA",
    n: "Salvador, BR, BRSSA",
  },
  {
    c: "IDSRI",
    n: "Samarinda, ID, IDSRI",
  },
  {
    c: "IDSMQ",
    n: "Sampit, ID, IDSMQ",
  },
  {
    c: "TRSSX",
    n: "Samsun, TR, TRSSX",
  },
  {
    c: "THSPS",
    n: "Samut Prakan Sahathai Terminal, TH, THSPS",
  },
  {
    c: "CLSAI",
    n: "San Antonio, CL, CLSAI",
  },
  {
    c: "USSAT",
    n: "San Antonio, TX, US, USSAT",
  },
  {
    c: "MYSDK",
    n: "Sandakan, MY, MYSDK",
  },
  {
    c: "USSAN",
    n: "San Diego, US, USSAN",
  },
  {
    c: "CRSJO",
    n: "San Jose , CR, CRSJO",
  },
  {
    c: "PRSJU",
    n: "San Juan, PR, PRSJU",
  },
  {
    c: "USWSJ",
    n: "San Juan, US, USWSJ",
  },
  {
    c: "HNSLO",
    n: "San Lorenzo, HN, HNSLO",
  },
  {
    c: "CISPY",
    n: "San-Pedro, CI, CISPY",
  },
  {
    c: "USSPQ",
    n: "San Pedro, CA, US, USSPQ",
  },
  {
    c: "HNSAP",
    n: "San Pedro Sula, HN, HNSAP",
  },
  {
    c: "SVSAL",
    n: "San Salvador, SV, SVSAL",
  },
  {
    c: "CNSJQ",
    n: "Sanshui, CN, CNSJQ",
  },
  {
    c: "BOSRZ",
    n: "Santa Cruz, BO, BOSRZ",
  },
  {
    c: "ESSCT",
    n: "Santa Cruz De Tenerife, ES, ESSCT",
  },
  {
    c: "COSMR",
    n: "Santa Marta, CO, COSMR",
  },
  {
    c: "USSXT",
    n: "Santa Teresa, NM, US, USSXT",
  },
  {
    c: "CLSCL",
    n: "Santiago, CL, CLSCL",
  },
  {
    c: "CUSCU",
    n: "Santiago de Cuba, CU, CUSCU",
  },
  {
    c: "VUSAN",
    n: "Santo, VU, VUSAN",
  },
  {
    c: "DOSDQ",
    n: "Santo Domingo , DO, DOSDQ",
  },
  {
    c: "BRSSZ",
    n: "Santos, BR, BRSSZ",
  },
  {
    c: "CLSVE",
    n: "San Vicente, CL, CLSVE",
  },
  {
    c: "STTMS",
    n: "Sao Tome Island, ST, STTMS",
  },
  {
    c: "AEMSA",
    n: "Saqr, AE, AEMSA",
  },
  {
    c: "CASAK",
    n: "Saskatoon, CA, CASAK",
  },
  {
    c: "ISSAU",
    n: "Saudarkrokur, IS, ISSAU",
  },
  {
    c: "USSAV",
    n: "Savannah, GA, US, USSAV",
  },
  {
    c: "GBSCR",
    n: "Scrabster, GB, GBSCR",
  },
  {
    c: "USSEA",
    n: "Seattle, WA, US, USSEA",
  },
  {
    c: "IDSRG",
    n: "Semarang, ID, IDSRG",
  },
  {
    c: "JPSDJ",
    n: "Sendai, JP, JPSDJ",
  },
  {
    c: "JPSDS",
    n: "Sendaishinko, JP, JPSDS",
  },
  {
    c: "ITPE4",
    n: "Sesto al Reghena, IT, ITPE4",
  },
  {
    c: "ITSEE",
    n: "Sesto Calende, IT, ITSEE",
  },
  {
    c: "ITSTF",
    n: "Sesto Fiorentino, IT, ITSTF",
  },
  {
    c: "ITSSG",
    n: "Sesto San Giovanni, IT, ITSSG",
  },
  {
    c: "ITSUL",
    n: "Sesto Ulteriano, IT, ITSUL",
  },
  {
    c: "FRSET",
    n: "Sete, FR, FRSET",
  },
  {
    c: "PTSET",
    n: "Setubal, PT, PTSET",
  },
  {
    c: "TNSFA",
    n: "Sfax, TN, TNSFA",
  },
  {
    c: "IRSRP",
    n: "Shahid Rajaee Pt, IR, IRSRP",
  },
  {
    c: "CNSAD",
    n: "Shandong, CN, CNSAD",
  },
  {
    c: "CNSHA",
    n: "Shanghai, CN, CNSHA",
  },
  {
    c: "CNSWA",
    n: "Shantou, CN, CNSWA",
  },
  {
    c: "CNSTG",
    n: "Shantou Pt, CN, CNSTG",
  },
  {
    c: "AESHJ",
    n: "Sharjah, AE, AESHJ",
  },
  {
    c: "CNSHS",
    n: "Shashi, CN, CNSHS",
  },
  {
    c: "CNSHK",
    n: "Shekou, CN, CNSHK",
  },
  {
    c: "CNSNW",
    n: "Shenwan, CN, CNSNW",
  },
  {
    c: "CNSZX",
    n: "Shenzhen, CN, CNSZX",
  },
  {
    c: "JPSBS",
    n: "Shibushi, JP, JPSBS",
  },
  {
    c: "JPSMZ",
    n: "Shimizu, JP, JPSMZ",
  },
  {
    c: "KWSAA",
    n: "Shuaiba, KW, KWSAA",
  },
  {
    c: "CNSDG",
    n: "Shuidong, CN, CNSDG",
  },
  {
    c: "CNSUD",
    n: "Shunde, CN, CNSUD",
  },
  {
    c: "KWSWK",
    n: "Shuwaikh, KW, KWSWK",
  },
  {
    c: "IDSLG",
    n: "Sibolga, Sumatra, ID, IDSLG",
  },
  {
    c: "MYSBW",
    n: "Sibu, MY, MYSBW",
  },
  {
    c: "WFSIG",
    n: "Sigave, WF, WFSIG",
  },
  {
    c: "KHKOS",
    n: "Sihanoukville, KH, KHKOS",
  },
  {
    c: "PTSIE",
    n: "Sines, PT, PTSIE",
  },
  {
    c: "SGSIN",
    n: "Singapore, SG, SGSIN",
  },
  {
    c: "GLJHS",
    n: "Sisimiut (Holsteinsborg), GL, GLJHS",
  },
  {
    c: "DKSKA",
    n: "Skagen, DK, DKSKA",
  },
  {
    c: "DZSKI",
    n: "Skikda, DZ, DZSKI",
  },
  {
    c: "RUSKA",
    n: "Slavyanka, RU, RUSKA",
  },
  {
    c: "OMSOH",
    n: "Sohar, OM, OMSOH",
  },
  {
    c: "EGSOK",
    n: "Sokhna Port, EG, EGSOK",
  },
  {
    c: "THSGZ",
    n: "Songkhla, TH, THSGZ",
  },
  {
    c: "CASOR",
    n: "Sorel, CA, CASOR",
  },
  {
    c: "IDSOQ",
    n: "Sorong, ID, IDSOQ",
  },
  {
    c: "TNSUS",
    n: "Sousse, TN, TNSUS",
  },
  {
    c: "GBSOU",
    n: "Southampton, GB, GBSOU",
  },
  {
    c: "GBSSH",
    n: "South Shields, GB, GBSSH",
  },
  {
    c: "AOSZA",
    n: "Soyo, AO, AOSZA",
  },
  {
    c: "HRSPU",
    n: "Split, HR, HRSPU",
  },
  {
    c: "THSRI",
    n: "Sriracha, TH, THSRI",
  },
  {
    c: "THSIR",
    n: "Sri Racha, TH, THSIR",
  },
  {
    c: "USSTL",
    n: "St. Louis, MO, US, USSTL",
  },
  {
    c: "SESTO",
    n: "Stockholm, SE, SESTO",
  },
  {
    c: "NOSKN",
    n: "Stokmarknes, NO, NOSKN",
  },
  {
    c: "USSTP",
    n: "St. Paul, MN, US, USSTP",
  },
  {
    c: "BRSUA",
    n: "Suape, BR, BRSUA",
  },
  {
    c: "PHSFS",
    n: "Subic Bay, PH, PHSFS",
  },
  {
    c: "EGSUZ",
    n: "Suez, EG, EGSUZ",
  },
  {
    c: "NOSUN",
    n: "Sunndalsora, NO, NOSUN",
  },
  {
    c: "USSUT",
    n: "Sunny Point, US, USSUT",
  },
  {
    c: "IDSUB",
    n: "Surabaya, ID, IDSUB",
  },
  {
    c: "FJSUV",
    n: "Suva, FJ, FJSUV",
  },
  {
    c: "CNSZH",
    n: "Suzhou, CN, CNSZH",
  },
  {
    c: "NOSVE",
    n: "Svelgen, NO, NOSVE",
  },
  {
    c: "PLSWI",
    n: "Swinoujscie, PL, PLSWI",
  },
  {
    c: "AUSYD",
    n: "Sydney, AU, AUSYD",
  },
  {
    c: "PLSZZ",
    n: "Szczecin, PL, PLSZZ",
  },
  {
    c: "USTIW",
    n: "Tacoma, WA, US, USTIW",
  },
  {
    c: "CNTAG",
    n: "Taicang, CN, CNTAG",
  },
  {
    c: "TWTXG",
    n: "Taichung, TW, TWTXG",
  },
  {
    c: "TWTPE",
    n: "Taipei, TW, TWTPE",
  },
  {
    c: "CNTIS",
    n: "Taishan, CN, CNTIS",
  },
  {
    c: "CNTZO",
    n: "Taizhou, CN, CNTZO",
  },
  {
    c: "GHTKD",
    n: "Takoradi, GH, GHTKD",
  },
  {
    c: "EETLL",
    n: "Tallinn, EE, EETLL",
  },
  {
    c: "MGTMM",
    n: "Tamatave (Toamasina), MG, MGTMM",
  },
  {
    c: "USTPA",
    n: "Tampa, FL, US, USTPA",
  },
  {
    c: "MXTAM",
    n: "Tampico, MX, MXTAM",
  },
  {
    c: "NOTAE",
    n: "Tananger, NO, NOTAE",
  },
  {
    c: "VNTCG",
    n: "Tan Cang, VN, VNTCG",
  },
  {
    c: "VNHPP",
    n: "Tan cang Hiep Phuoc, VN, VNHPP",
  },
  {
    c: "MAPTM",
    n: "Tanger Med, MA, MAPTM",
  },
  {
    c: "MATNG",
    n: "Tangier, MA, MATNG",
  },
  {
    c: "MYTMP",
    n: "Tanjung Manis, MY, MYTMP",
  },
  {
    c: "MYTPP",
    n: "Tanjung Pelepas, MY, MYTPP",
  },
  {
    c: "VNTTH",
    n: "Tan Thanh, VN, VNTTH",
  },
  {
    c: "TWTYN",
    n: "Taoyuan, TW, TWTYN",
  },
  {
    c: "IDTRK",
    n: "Tarakan, ID, IDTRK",
  },
  {
    c: "ITTAR",
    n: "Taranto, IT, ITTAR",
  },
  {
    c: "KITRW",
    n: "Tarawa, KI, KITRW",
  },
  {
    c: "ESTAR",
    n: "Tarragona, ES, ESTAR",
  },
  {
    c: "SYTTS",
    n: "Tartus, SY, SYTTS",
  },
  {
    c: "GLAGM",
    n: "Tasiilaq, GL, GLAGM",
  },
  {
    c: "NZTRG",
    n: "Tauranga, NZ, NZTRG",
  },
  {
    c: "MYTWU",
    n: "Tawau, MY, MYTWU",
  },
  {
    c: "GBTEE",
    n: "Teesport, GB, GBTEE",
  },
  {
    c: "TRTEK",
    n: "Tekirdag, TR, TRTEK",
  },
  {
    c: "GHTEM",
    n: "Tema, GH, GHTEM",
  },
  {
    c: "IDTTE",
    n: "TERNATE, ID, IDTTE",
  },
  {
    c: "THTPT",
    n: "Thai Prosperity Terminal, TH, THTPT",
  },
  {
    c: "GRSKG",
    n: "Thessaloniki, GR, GRSKG",
  },
  {
    c: "FOTHO",
    n: "Thorshavn, FO, FOTHO",
  },
  {
    c: "VNITX",
    n: "Thu Duc, VN, VNITX",
  },
  {
    c: "CNTSN",
    n: "Tianjin, CN, CNTSN",
  },
  {
    c: "GBTIL",
    n: "Tilbury, GB, GBTIL",
  },
  {
    c: "NZTIU",
    n: "Timaru, NZ, NZTIU",
  },
  {
    c: "NGTIN",
    n: "Tincan/lagos, NG, NGTIN",
  },
  {
    c: "MGTOA",
    n: "Toamasina, MG, MGTOA",
  },
  {
    c: "JPTKY",
    n: "Tokuyama, JP, JPTKY",
  },
  {
    c: "JPTYO",
    n: "Tokyo, JP, JPTYO",
  },
  {
    c: "MGTLE",
    n: "Toliara, MG, MGTLE",
  },
  {
    c: "JPTMK",
    n: "Tomakomai, JP, JPTMK",
  },
  {
    c: "CATOR",
    n: "Toronto, ON, CA, CATOR",
  },
  {
    c: "VGTOV",
    n: "Tortola, VG, VGTOV",
  },
  {
    c: "AUTSV",
    n: "Townsville, AU, AUTSV",
  },
  {
    c: "JPTOY",
    n: "Toyama, JP, JPTOY",
  },
  {
    c: "JPTOS",
    n: "Toyamashinko, JP, JPTOS",
  },
  {
    c: "ITTPS",
    n: "Trapani, IT, ITTPS",
  },
  {
    c: "ITTRS",
    n: "Trieste, IT, ITTRS",
  },
  {
    c: "LYTIP",
    n: "Tripoli, LY, LYTIP",
  },
  {
    c: "TNTUN",
    n: "Tunis, TN, TNTUN",
  },
  {
    c: "COTRB",
    n: "Turbo, CO, COTRB",
  },
  {
    c: "FITKU",
    n: "Turku, FI, FITKU",
  },
  {
    c: "INTUT",
    n: "Tuticorin, IN, INTUT",
  },
  {
    c: "MXTUX",
    n: "Tuxpan, MX, MXTUX",
  },
  {
    c: "KRUSN",
    n: "Ulsan, KR, KRUSN",
  },
  {
    c: "AEQIW",
    n: "UMM AL QUWAIN, AE, AEQIW",
  },
  {
    c: "IQUQR",
    n: "Umm Qasr North Port, IQ, IQUQR",
  },
  {
    c: "IQUQK",
    n: "Umm Qasr South Port, IQ, IQUQK",
  },
  {
    c: "QAUMS",
    n: "Umm Sa'id (Mesaieed), QA, QAUMS",
  },
  {
    c: "RUULU",
    n: "Ust-Luga, RU, RUULU",
  },
  {
    c: "ITVDL",
    n: "Vado Ligure, IT, ITVDL",
  },
  {
    c: "ESVLC",
    n: "Valencia, ES, ESVLC",
  },
  {
    c: "MTMLA",
    n: "Valletta, MT, MTMLA",
  },
  {
    c: "CLVAP",
    n: "Valparaiso, CL, CLVAP",
  },
  {
    c: "CAVAN",
    n: "Vancouver, BC, CA, CAVAN",
  },
  {
    c: "USVAN",
    n: "Vancouver, WA, US, USVAN",
  },
  {
    c: "SEVAG",
    n: "Varberg, SE, SEVAG",
  },
  {
    c: "BGVAR",
    n: "Varna, BG, BGVAR",
  },
  {
    c: "TOVAV",
    n: "Vava'u, TO, TOVAV",
  },
  {
    c: "FRVMB",
    n: "Vemars, FR, FRVMB",
  },
  {
    c: "ITVCE",
    n: "Venezia, IT, ITVCE",
  },
  {
    c: "MXVER",
    n: "Veracruz, MX, MXVER",
  },
  {
    c: "ISVES",
    n: "VESTMANNAEYJAR - HOFN, IS, ISVES",
  },
  {
    c: "PTVDC",
    n: "Viana Do Castelo, PT, PTVDC",
  },
  {
    c: "SCPOV",
    n: "Victoria, SC, SCPOV",
  },
  {
    c: "LCVIF",
    n: "Vieux Fort, LC, LCVIF",
  },
  {
    c: "ESVGO",
    n: "Vigo, ES, ESVGO",
  },
  {
    c: "VGVIJ",
    n: "Virgin Gorda, VG, VGVIJ",
  },
  {
    c: "INVTZ",
    n: "Visakhapatnam, IN, INVTZ",
  },
  {
    c: "BRVIX",
    n: "Vitoria, BR, BRVIX",
  },
  {
    c: "RUVVO",
    n: "Vladivostok, RU, RUVVO",
  },
  {
    c: "NLVLI",
    n: "Vlissingen, NL, NLVLI",
  },
  {
    c: "MGVOH",
    n: "Vohemar, MG, MGVOH",
  },
  {
    c: "RUVYP",
    n: "Vostochniy, RU, RUVYP",
  },
  {
    c: "VNVUT",
    n: "Vung Tau, VN, VNVUT",
  },
  {
    c: "CNWIH",
    n: "Waihai, CN, CNWIH",
  },
  {
    c: "JPWAK",
    n: "Wakayama, JP, JPWAK",
  },
  {
    c: "WFWLS",
    n: "Wallis Island Airport, WF, WFWLS",
  },
  {
    c: "NAWVB",
    n: "Walvis Bay, NA, NAWVB",
  },
  {
    c: "NGWAR",
    n: "Warri, NG, NGWAR",
  },
  {
    c: "CNWEI",
    n: "Weihai, CN, CNWEI",
  },
  {
    c: "NZWLG",
    n: "Wellington, NZ, NZWLG",
  },
  {
    c: "CNWNZ",
    n: "Wenzhou, CN, CNWNZ",
  },
  {
    c: "CAWVR",
    n: "West Vancouver, CA, CAWVR",
  },
  {
    c: "ATVIE",
    n: "Wien, AT, ATVIE",
  },
  {
    c: "DEWVN",
    n: "Wilhelmshaven, DE, DEWVN",
  },
  {
    c: "CWWIL",
    n: "Willemstad, CW, CWWIL",
  },
  {
    c: "USILG",
    n: "Wilmington, US, USILG",
  },
  {
    c: "USILM",
    n: "Wilmington, NC, US, USILM",
  },
  {
    c: "CAYWG",
    n: "Winnipeg, MB, CA, CAYWG",
  },
  {
    c: "USGIF",
    n: "Winter Haven, FL, US, USGIF",
  },
  {
    c: "CNWUH",
    n: "Wuhan, CN, CNWUH",
  },
  {
    c: "CNWHI",
    n: "Wuhu, CN, CNWHI",
  },
  {
    c: "TWWTU",
    n: "Wutu, TW, TWWTU",
  },
  {
    c: "CNWUX",
    n: "Wuxi, CN, CNWUX",
  },
  {
    c: "CNWUZ",
    n: "Wuzhou, CN, CNWUZ",
  },
  {
    c: "CNXMN",
    n: "Xiamen, CN, CNXMN",
  },
  {
    c: "CNXIA",
    n: "Xian, CN, CNXIA",
  },
  {
    c: "CNSIA",
    n: "Xian Xianyang International Apt, CN, CNSIA",
  },
  {
    c: "CNXIL",
    n: "Xiaolan, CN, CNXIL",
  },
  {
    c: "CNTXG",
    n: "Xingang, CN, CNTXG",
  },
  {
    c: "CNXIN",
    n: "Xinhui, CN, CNXIN",
  },
  {
    c: "CNYCG",
    n: "Yancheng, CN, CNYCG",
  },
  {
    c: "MMRGN",
    n: "Yangon, MM, MMRGN",
  },
  {
    c: "CNYPG",
    n: "Yangpugang, CN, CNYPG",
  },
  {
    c: "CNYZH",
    n: "Yangzhou, CN, CNYZH",
  },
  {
    c: "CNYNT",
    n: "Yantai, CN, CNYNT",
  },
  {
    c: "CNYTN",
    n: "Yantian, CN, CNYTN",
  },
  {
    c: "FMYAP",
    n: "Yap, FM, FMYAP",
  },
  {
    c: "TRYAR",
    n: "Yarimca, TR, TRYAR",
  },
  {
    c: "CNYIB",
    n: "Yibin, CN, CNYIB",
  },
  {
    c: "TRYPO",
    n: "Yilport, TR, TRYPO",
  },
  {
    c: "CNYIK",
    n: "Yingkou, CN, CNYIK",
  },
  {
    c: "CNYIW",
    n: "Yiwu, CN, CNYIW",
  },
  {
    c: "JPYKK",
    n: "Yokkaichi, JP, JPYKK",
  },
  {
    c: "JPYOK",
    n: "Yokohama, JP, JPYOK",
  },
  {
    c: "CNYUY",
    n: "Yueyang, CN, CNYUY",
  },
  {
    c: "CNYNF",
    n: "Yunfu, CN, CNYNF",
  },
  {
    c: "PHZAM",
    n: "Zamboanga, PH, PHZAM",
  },
  {
    c: "TZZNZ",
    n: "Zanzibar, TZ, TZZNZ",
  },
  {
    c: "ARZAE",
    n: "Zarate, AR, ARZAE",
  },
  {
    c: "BEZEE",
    n: "Zeebrugge, BE, BEZEE",
  },
  {
    c: "CNZJG",
    n: "Zhangjiagang, CN, CNZJG",
  },
  {
    c: "CNZZU",
    n: "Zhangzhou, CN, CNZZU",
  },
  {
    c: "CNZHA",
    n: "Zhanjiang, CN, CNZHA",
  },
  {
    c: "CNZQG",
    n: "Zhaoqing, CN, CNZQG",
  },
  {
    c: "CNZAP",
    n: "Zhapu, CN, CNZAP",
  },
  {
    c: "CNCGO",
    n: "Zhengzhou Xinzheng International Apt, CN, CNCGO",
  },
  {
    c: "CNZHE",
    n: "Zhenjiang, CN, CNZHE",
  },
  {
    c: "CNZSN",
    n: "Zhongshan, CN, CNZSN",
  },
  {
    c: "CNZOS",
    n: "Zhoushan, CN, CNZOS",
  },
  {
    c: "CNZUH",
    n: "Zhuhai, CN, CNZUH",
  },
  {
    c: "CNZGZ",
    n: "Zhuhaigang, CN, CNZGZ",
  },
  {
    c: "CNZUU",
    n: "Zhuzhou, CN, CNZUU",
  },
  {
    c: "THBKKALL",
    n: "Bangkok (All Ports)",
    l: ["THBKK", "THLCH"],
  },
  {
    c: "VNBDGALL",
    n: "Ho Chi Minh (All Ports)",
    l: ["VNBDG", "VNHPP", "VNSGN"],
  },
  {
    c: "KWKWIALL",
    n: "Kuwait (All Ports)",
    l: ["KWKWI", "KWSAA", "KWSWK"],
  },
  {
    c: "USLAXALL",
    n: "Los Angeles (All Ports)",
    l: ["USLAX", "USLGB"],
  },
  {
    c: "PHMNNALL",
    n: "Manila (All Ports)",
    l: ["PHMNN", "PHMNS"],
  },
  {
    c: "USEWRALL",
    n: "New York (All Ports)",
    l: ["USEWR", "USEZA", "USNYC"],
  },
  {
    c: "INBOMALL",
    n: "Nhava Sheva (All Ports)",
    l: ["INBOM", "INNSA"],
  },
  {
    c: "MYLPKALL",
    n: "Port Klang (All Ports)",
    l: ["MYLPK", "MYPKG"],
  },
  {
    c: "CNTSNALL",
    n: "Tianjin (All Ports)",
    l: ["CNTSN", "CNTXG"],
  },
];

export default ports;
