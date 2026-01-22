// HCP Data from map.docx
// This data represents healthcare providers who are Loop-friendly
const hcpData = {
  "Argentina": [
    {
      "id": 1,
      "country": "Argentina",
      "state": "Córdoba",
      "city": "Córdoba",
      "specialty": "Diabetologist",
      "name": "",
      "hospital": "Ferreyra, Hospital Privado",
      "contact": "Website",
      "info": "They respect my/our knowledge",
      "notes": "",
      "recommender": ""
    }
  ],
  "Australia": [
    {
      "id": 2,
      "country": "Australia",
      "state": "Queensland",
      "city": "Townsville",
      "specialty": "Other",
      "name": "Dr Kenny Clark",
      "hospital": "James Cook University",
      "contact": "Admin@diabeticgp.com.au",
      "info": "They respect my/our knowledge, They understand how…themselves, They use Loop for their own treatment",
      "notes": "Completing a PhD on DIYAPS and has helped >50 loopers set up their systems",
      "recommender": "Kenny clark, drclark@diabeticgp.com.au"
    },
    {
      "id": 3,
      "country": "Australia",
      "state": "Queensland",
      "city": "Brisbane",
      "specialty": "Other",
      "name": "Julie Leary",
      "hospital": "Private CDE",
      "contact": "julie@australiandiabetestechnology.com",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "Has a son who has used AAPS",
      "recommender": ""
    },
    {
      "id": 4,
      "country": "Australia",
      "state": "Queensland",
      "city": "Sunshine Coast",
      "specialty": "Endocrinologist",
      "name": "Dr Ali Shirashi",
      "hospital": "Buderim Private Hospital",
      "contact": "(07) 5430 3303",
      "info": "They respect my/our knowledge",
      "notes": "Only had one appointment with him so far as of Nov…sychological. Open minded and took lots of notes.",
      "recommender": "Gemma Collins - gemma.collins95@gmail.com"
    },
    {
      "id": 5,
      "country": "Australia",
      "state": "NSW",
      "city": "Nowra",
      "specialty": "Endocrinologist",
      "name": "Dr Jack Morris",
      "hospital": "Private practice / Honorary Clinical Lecturer University of Wollongong",
      "contact": "admin@scshc.com.au 02 4445 3858",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "",
      "recommender": ""
    },
    {
      "id": 6,
      "country": "Australia",
      "state": "South Australia",
      "city": "Adelaide",
      "specialty": "Endocrinologist",
      "name": "Tony Roberts",
      "hospital": "Royal Adelaide and a few others",
      "contact": "08 82977755",
      "info": "They respect my/our knowledge",
      "notes": "Sees many of Adelaide/SA's loopers. Loves the conc…ings, but happy to let people do their own thing.",
      "recommender": ""
    },
    {
      "id": 7,
      "country": "Australia",
      "state": "South Australia",
      "city": "Adelaide",
      "specialty": "Other",
      "name": "Dr Ali Murphy",
      "hospital": "N/A",
      "contact": "https://www.hotdoc.com.au/medical-centres/everard-…-SA-5035/diabetes-base-camp/doctors/dr-ali-murphy",
      "info": "They respect my/our knowledge, They understand how…themselves, They use Loop for their own treatment",
      "notes": "Highly experienced, compassionate, Diabetes focuse…tice, plenty of appointments available currently.",
      "recommender": ""
    },
    {
      "id": 8,
      "country": "Australia",
      "state": "Victoria",
      "city": "Melbourne",
      "specialty": "Pediatric Endocrinologist",
      "name": "Dr Anton Harding",
      "hospital": "Unsure, but we consult him privately",
      "contact": "",
      "info": "They respect my/our knowledge, They actively engage to learn more about Looping",
      "notes": "Dr harding has been supportive of us using the DIY system and Waa keen to learn more about aaps",
      "recommender": "Priya Sanyal, 0450037793"
    },
    {
      "id": 9,
      "country": "Australia",
      "state": "Victoria",
      "city": "Melbourne",
      "specialty": "Endocrinologist",
      "name": "Dr Ben Nash",
      "hospital": "Austin Health, University of Melbourne",
      "contact": "Website: drbennash.com.au Email: hello@drbennash.com.au",
      "info": "They respect my/our knowledge, They understand how…themselves, They use Loop for their own treatment",
      "notes": "Awesome provider with lived experience. Friendly, …vocacy and research community outside of practice",
      "recommender": ""
    },
    {
      "id": 10,
      "country": "Australia",
      "state": "Victoria",
      "city": "Melbourne",
      "specialty": "Deputy Director, Clinical Psychologist",
      "name": "Christel Hendrieckx, PhD",
      "hospital": "Australian Center for Behavioural Research in Diabetes, Deakin University",
      "contact": "Email: chendrieckx@acbrd.org.au",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    },
    {
      "id": 11,
      "country": "Australia",
      "state": "New South Wales",
      "city": "Sydney",
      "specialty": "Conjoint Associate Professor",
      "name": "Tien-Ming Hng, MBBS PhD FRACP",
      "hospital": "Head, Diabetes and Endocrinology Blacktown Mt Druitt Hospital",
      "contact": "Email: tien-ming.hng@health.nsw.gov.au",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    },
    {
      "id": 12,
      "country": "Australia",
      "state": "Western Australia",
      "city": "Perth",
      "specialty": "Other",
      "name": "Amy Rush",
      "hospital": "Private",
      "contact": "https://www.type1familycentre.org.au/clinical-care",
      "info": "They respect my/our knowledge, They actively engage to learn more about Looping",
      "notes": "Also a dietitan. Has a family member with T1 diabe… i.e. pump, looping, MDI, low carb, high carb etc",
      "recommender": "Messenger: Lauren Cee"
    }
  ],
  "Austria": [
    {
      "id": 13,
      "country": "Austria",
      "state": "Niederösterreich",
      "city": "Mödling",
      "specialty": "Diabetologist",
      "name": "Dr. Ingrid Schütz-Fuhrmann",
      "hospital": "Krankenhaus Hietzing, 3. Medizinische Abteilung fü…nologie, Stoffwechselerkrankungen und Nephrologie",
      "contact": "https://www.stoffwechsel-diabetes.at/dr-ingrid-schütz-fuhrmann-insulinpumpe/",
      "info": "They respect my/our knowledge, They understand how Loop works",
      "notes": "",
      "recommender": ""
    },
    {
      "id": 14,
      "country": "Austria",
      "state": "Styria",
      "city": "Graz",
      "specialty": "Associate Professor, Endocrinologist",
      "name": "Julia Mader, MD",
      "hospital": "Medical University of Graz",
      "contact": "Email: julia.mader@medunigraz.at",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    },
    {
      "id": 15,
      "country": "Austria",
      "state": "Vienna",
      "city": "Wien",
      "specialty": "Diabetologist",
      "name": "Dr Müller-Korbsch",
      "hospital": "Wilhelminenspital in Wien/ Klinik Otterkring",
      "contact": "https://www.diabetestherapie.at/",
      "info": "They respect my/our knowledge, They understand how…themselves, They use Loop for their own treatment",
      "notes": "One of the best specialist of DIA in Vienna, DT1 h…creas systems including DYI Loop and APS systems.",
      "recommender": "renaud.chatelus@gmail.com"
    },
    {
      "id": 16,
      "country": "Austria",
      "state": "Vienna",
      "city": "Hietzing",
      "specialty": "Senior Physician, Endocrinologist",
      "name": "Ingrid Schütz-Fuhrmann, MD",
      "hospital": "Department of Endocrinology and Nephrology Clinic Hietzing, Vienna Health Care Group",
      "contact": "Email: ingrid.schuetz-fuhrmann@aon.at",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    },
    {
      "id": 17,
      "country": "Austria",
      "state": "Vienna",
      "city": "Vienna",
      "specialty": "Other",
      "name": "Dr. Alexander MICHEL",
      "hospital": "Senior physician: Klinik Donaustadt",
      "contact": "https://www.drmichel.at",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "Alexander Michel is very engaged pediatric and in contact with parents of loopers",
      "recommender": "Martin Pattera, martin@pattera.at"
    },
    {
      "id": 18,
      "country": "Austria",
      "state": "Vienna",
      "city": "Vienna",
      "specialty": "Medical Doctor",
      "name": "Martin Tauschmann, MD PhD",
      "hospital": "Department of Pediatrics and Adolescent Medicine, Medical University of Vienna",
      "contact": "Email: martin.tauschmann@meduniwien.ac.at",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    }
  ],
  "Brazil": [
    {
      "id": 19,
      "country": "Brazil",
      "state": "",
      "city": "Maceió",
      "specialty": "Endocrinologist",
      "name": "Edson Perrotti, MD",
      "hospital": "Medical Coordinator of CEDOHC, Center for Chronic …ertension, Municipal Health Department of, Maceió",
      "contact": "Email: edsonperrotti@hotmail.com",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    },
    {
      "id": 20,
      "country": "Brazil",
      "state": "Santa Catarina",
      "city": "Itajai",
      "specialty": "Pediatric Endocrinologist",
      "name": "Julia La Pastina",
      "hospital": "Private practice",
      "contact": "+55-47-99235-3426 +55-47-98807-9132 instagram drajulia.endocrinoped",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "Understands and speaks some English, but our visit…ts on Loop and AAPS. Up to date on diabetes tech.",
      "recommender": ""
    }
  ],
  "Canada": [
    {
      "id": 21,
      "country": "Canada",
      "state": "Alberta",
      "city": "Edmonton",
      "specialty": "Endocrinologist",
      "name": "Dr. Peter Senior and staff, by referral only",
      "hospital": "Kaye Clinic, University of Alberta",
      "contact": "780-492-3626",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "DIY Researcher and Endocrinologist. Staff is excel…as was instrumental in convincing me to try Loop.",
      "recommender": "Arnie. arnie@weisbrot.ca"
    },
    {
      "id": 22,
      "country": "Canada",
      "state": "Alberta",
      "city": "Edmonton",
      "specialty": "Endocrinologist",
      "name": "Jennifer Jacquier/Sarah Cawsey/Anna Rogers",
      "hospital": "University of Alberta",
      "contact": "Garneauendocrinology.com 780-250-4880",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "Open minded!",
      "recommender": "Robin rlucciantonio@gmail.com"
    },
    {
      "id": 23,
      "country": "Canada",
      "state": "Alberta",
      "city": "Edmonton",
      "specialty": "Endocrinologist",
      "name": "Dr. Rosolowsky",
      "hospital": "Stollery children's hospital",
      "contact": "mailto:pdec.uah@albertahealthservices.ca, 7804077033",
      "info": "They respect my/our knowledge, They actively engage to learn more about Looping",
      "notes": "She is ona working group to learn more about loopi…willing to gain knowledge to assist her patients.",
      "recommender": ""
    },
    {
      "id": 24,
      "country": "Canada",
      "state": "Alberta",
      "city": "Edmonton",
      "specialty": "Endocrinologist",
      "name": "Dr. Rose Yeung and staff by referral",
      "hospital": "Kaye Edmonton Clinic",
      "contact": "780-492-3623",
      "info": "They respect my/our knowledge, They understand how Loop works",
      "notes": "",
      "recommender": ""
    },
    {
      "id": 25,
      "country": "Canada",
      "state": "Alberta",
      "city": "Airdrie",
      "specialty": "Endocrinologist",
      "name": "Linda Sandercock",
      "hospital": "",
      "contact": "https://c-endo.ca/contact-us/",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "She totally respects my knowledge and says all the…y to Airdrie and I still choose to stay with her.",
      "recommender": "Silvi - silvimichelle@gmail.com"
    },
    {
      "id": 26,
      "country": "Canada",
      "state": "Alberta",
      "city": "Calgary",
      "specialty": "Endocrinologist",
      "name": "Dr. Buki Ajala",
      "hospital": "LMC Healthcare",
      "contact": "403-288-3224",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "",
      "recommender": ""
    },
    {
      "id": 27,
      "country": "Canada",
      "state": "Alberta",
      "city": "Calgary",
      "specialty": "Endocrinologist",
      "name": "Dr. Amish Parikh",
      "hospital": "Alberta Health Services",
      "contact": "4032214476 and https://associateclinic.com/endocrinology/",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "They are great endocrinologists, they're both genu… systems and helping patients optimize their T1D.",
      "recommender": "Kathryn Watson Kathrynwatson@me.com 403-466-2355"
    },
    {
      "id": 28,
      "country": "Canada",
      "state": "British Columbia",
      "city": "Vancouver",
      "specialty": "Endocrinologist",
      "name": "Dr. Tom Elliott",
      "hospital": "BC Diabetes in Vancouver",
      "contact": "http://bcdiabetes.ca/",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "This is an important update of the entry for BC Di…e rely on them for your primary support for Loop.",
      "recommender": "Jim McIvor / jimmcivor@gmail.com"
    },
    {
      "id": 29,
      "country": "Canada",
      "state": "British Columbia",
      "city": "Vancouver",
      "specialty": "Endocrinologist",
      "name": "Dr. Tom Elliot",
      "hospital": "BC Diabetes in Vancouver",
      "contact": "http://bcdiabetes.ca/",
      "info": "",
      "notes": "Runs BC's largest diabetes clinic, which offers B…e rely on them for your primary support for Loop.",
      "recommender": "Stuart Hertzog"
    },
    {
      "id": 30,
      "country": "Canada",
      "state": "British Columbia",
      "city": "Vancouver",
      "specialty": "Endocrinologist",
      "name": "Jason King",
      "hospital": "Vancouver General Hospital Diamond Medical Clinic",
      "contact": "",
      "info": "",
      "notes": "While he cannot officially condone the Loop system…scout for reporting which has been super helpful.",
      "recommender": ""
    },
    {
      "id": 31,
      "country": "Canada",
      "state": "British Columbia",
      "city": "New Westminster",
      "specialty": "Endocrinologist",
      "name": "Dr. Agnieskza Barts",
      "hospital": "University of British Columbia",
      "contact": "(604) 787-8808",
      "info": "They respect my/our knowledge",
      "notes": "Very supportive and kind",
      "recommender": "Alison Hunter Modenese, figureskatemom@gmail.com"
    },
    {
      "id": 32,
      "country": "Canada",
      "state": "Nova Scotia",
      "city": "Halifax",
      "specialty": "Endocrinologist",
      "name": "Dr. Barna De",
      "hospital": "Dalhousie University / QEII Health Sciences",
      "contact": "I do not have the contact info",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "They were excited to learn I was looping and open …t and working with me. It is a great partnership.",
      "recommender": ""
    },
    {
      "id": 33,
      "country": "Canada",
      "state": "Nova Scotia",
      "city": "Halifax",
      "specialty": "Endocrinologist",
      "name": "Dr Chern-Ern Yip",
      "hospital": "QE2 Health Sciences Centre",
      "contact": "https://medicine.dal.ca/departments/department-sit…docrinology/our-people/faculty/churn-ern-yip.html",
      "info": "They respect my/our knowledge, They understand how Loop works",
      "notes": "",
      "recommender": ""
    },
    {
      "id": 34,
      "country": "Canada",
      "state": "Ontario",
      "city": "Ajax",
      "specialty": "Diabetologist",
      "name": "Dr. Ian Blumer",
      "hospital": "",
      "contact": "",
      "info": "",
      "notes": "He's VERY well versed in diabetes and is super sup…he patient's lives, not just clinical guidelines.",
      "recommender": ""
    },
    {
      "id": 35,
      "country": "Canada",
      "state": "Ontario",
      "city": "Hamilton",
      "specialty": "Endocrinologist",
      "name": "Dr. Susan Teschke",
      "hospital": "",
      "contact": "https://steelcitymedical.ca/",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "Nothing but supportive and loves using Nightscout too!",
      "recommender": "Andreas Helmer, +15194007110, dre.helmer@gmail.com"
    },
    {
      "id": 36,
      "country": "Canada",
      "state": "Ontario",
      "city": "Mississauga",
      "specialty": "Endocrinologist",
      "name": "Dr. Amish Parikh",
      "hospital": "Trillium Health Partners",
      "contact": "905-848-7545",
      "info": "They respect my/our knowledge, They understand how…more about Looping, They live with T1D themselves",
      "notes": "They will trust you to loop if you can show that y…orks with as well who are both looped in on loop.",
      "recommender": ""
    },
    {
      "id": 37,
      "country": "Canada",
      "state": "Ontario",
      "city": "Newmarket",
      "specialty": "Endocrinologist",
      "name": "Mohamed Abdullahi Hussein",
      "hospital": "Southlake",
      "contact": "905-895-4521",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "He reviewed and adjusted my Loop settings before I… be teaching us stuff about diabetes management!",
      "recommender": "Charli charlizubs@gmail.com"
    },
    {
      "id": 38,
      "country": "Canada",
      "state": "Ontario",
      "city": "Ottawa",
      "specialty": "Endocrinologist",
      "name": "Zachary Zytner",
      "hospital": "CHEO",
      "contact": "6138375454",
      "info": "They respect my/our knowledge",
      "notes": "Supports us using Loop but can not help with set up or adjusting settings.",
      "recommender": ""
    },
    {
      "id": 39,
      "country": "Canada",
      "state": "Ontario",
      "city": "Toronto",
      "specialty": "Endocrinologist",
      "name": "Dr. Bruce Perkins",
      "hospital": "Mount Sinai",
      "contact": "https://www.lunenfeld.ca/?page=perkins-bruce",
      "info": "They understand how Loop works, They live with T1D themselves",
      "notes": "Caring, extremely knowledgeable, never judgemental",
      "recommender": ""
    },
    {
      "id": 40,
      "country": "Canada",
      "state": "Ontario",
      "city": "Toronto",
      "specialty": "Endocrinologist",
      "name": "Dr. Ilana Halperin",
      "hospital": "Sunnybrook Health Sciences Center (Hospital)",
      "contact": "",
      "info": "",
      "notes": "Dr. Halperin has a few loop patients other than me…betic women that might be looking to have a baby.",
      "recommender": ""
    },
    {
      "id": 41,
      "country": "Canada",
      "state": "Ontario",
      "city": "Toronto",
      "specialty": "Endocrinologist",
      "name": "Dr. Ilana Halperin",
      "hospital": "Sunnybrook Health Sciences Centre",
      "contact": "https://sunnybrook.ca/team/member.asp?m=532&page=1… assistant: 416-480-6056. angela.uy@sunnybrook.ca",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "Dr. Halperin is AMAZING. She 💯 supports the Loopi…r they live. I live remotely and do virtual care.",
      "recommender": "laurashilliday.rmt@gmail.com"
    },
    {
      "id": 42,
      "country": "Canada",
      "state": "Ontario",
      "city": "Toronto",
      "specialty": "Other",
      "name": "Sharon Khoo",
      "hospital": "University Health Network - Toronto General Hospital",
      "contact": "Referral to the Endocrinologist at the site.",
      "info": "They actively engage to learn more about Looping",
      "notes": "",
      "recommender": ""
    },
    {
      "id": 43,
      "country": "Canada",
      "state": "Ontario",
      "city": "Windsor",
      "specialty": "Diabetologist",
      "name": "Dr. Jacob Bender",
      "hospital": "",
      "contact": "5192584143",
      "info": "They respect my/our knowledge, They understand how…themselves, They use Loop for their own treatment",
      "notes": "They require a referral from an endocrinologist or family physician",
      "recommender": ""
    },
    {
      "id": 44,
      "country": "Canada",
      "state": "Quebec",
      "city": "Montreal",
      "specialty": "Endocrinologist",
      "name": "Rémi Rabasa-Lhoret",
      "hospital": "CHUM",
      "contact": "https://www.ircm.qc.ca/en/contact-ircm-clinic",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "",
      "recommender": "audebandini@gmail.com"
    },
    {
      "id": 45,
      "country": "Canada",
      "state": "Quebec",
      "city": "Montreal",
      "specialty": "Postdoctoral Fellow",
      "name": "Zekai Wu, MD (Hons) PhD",
      "hospital": "Institut de recherches cliniques de Montréal, Divi…dicine, Department of Medicine, McGill University",
      "contact": "Email: zekai.wu@mail.mcgill.ca",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    },
    {
      "id": 46,
      "country": "Canada",
      "state": "Quebec",
      "city": "Montreal",
      "specialty": "Endocrinologist",
      "name": "Céline Huot",
      "hospital": "Hopital Ste Justine",
      "contact": "celine.huot.hsj@ssss.gouv.qc.ca",
      "info": "They respect my/our knowledge, They understand how Loop works",
      "notes": "",
      "recommender": "parascandolav@gmail.com"
    },
    {
      "id": 47,
      "country": "Canada",
      "state": "Quebec",
      "city": "Quebec City",
      "specialty": "Endocrinologist",
      "name": "Dre. Marie-Eve Domingue",
      "hospital": "CHUL",
      "contact": "(418) 654-2169",
      "info": "They respect my/our knowledge",
      "notes": "Elle est très sympathique et très ouverte aux systèmes DIY.",
      "recommender": ""
    },
    {
      "id": 48,
      "country": "Canada",
      "state": "Quebec",
      "city": "Montreal",
      "specialty": "Pediatric Endocrinologist",
      "name": "Dr Marie-Laurence Brunet",
      "hospital": "Montreal Children's Hospital / CHU Sainte Justine",
      "contact": "marie-laurence.brunet@mail.mcgill.ca",
      "info": "They respect my/our knowledge, They understand how…themselves, They use Loop for their own treatment",
      "notes": "Dr Brunet is passionate about looping. She is EXTR… enough for changing the lives of countless T1Ds.",
      "recommender": ""
    },
    {
      "id": 49,
      "country": "Canada",
      "state": "Saskatchewan",
      "city": "Regina",
      "specialty": "Endocrinologist",
      "name": "Dr Jeremy Fitzgerald",
      "hospital": "Saskatchewan Health Authority",
      "contact": "306-565-1414",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "Very progressive and proactive, open to suggestions and discussion.",
      "recommender": "Andrew Woodrow. wood66@me.com"
    }
  ],
  "Chile": [
    {
      "id": 50,
      "country": "Chile",
      "state": "",
      "city": "Santiago",
      "specialty": "Pediatrician, Researcher and Advisor",
      "name": "Franco Giraudo, MD",
      "hospital": "Institute of Maternal and Child Research (IDIMI), …ty of Chile Juvenile Diabetes Foundation of Chile",
      "contact": "Email: fgiraudoabarca@gmail.com",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    }
  ],
  "Colombia": [
    {
      "id": 51,
      "country": "Colombia",
      "state": "",
      "city": "Pereira",
      "specialty": "Endocrinologist",
      "name": "Santiago Vallejo, MD",
      "hospital": "Hospital Universitario San Jorge de Pereira Universidad Tecnológica de Pereira, Clínica Comfamiliar",
      "contact": "Email: santivallejog@hotmail.com",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    }
  ],
  "Czech Republic": [
    {
      "id": 52,
      "country": "Czech Republic",
      "state": "Czech republic",
      "city": "Prague",
      "specialty": "Pediatric Endocrinologist",
      "name": "Jan Vosáhlo",
      "hospital": "FN Královské Vinohrady",
      "contact": "I cant give",
      "info": "They respect my/our knowledge, They actively engage to learn more about Looping",
      "notes": "He didnt want to know so much. He couldnt tell us …(basal, carbs). We speak about it every 3 months.",
      "recommender": ""
    },
    {
      "id": 53,
      "country": "Czech Republic",
      "state": "Czech republic",
      "city": "Prague",
      "specialty": "Pediatric Endocrinologist",
      "name": "Lenka Petruželková",
      "hospital": "Motol University Hospital",
      "contact": "tel. 702 001 940, lenkapetruzelkova@gmail.com",
      "info": "They understand how Loop works, They actively engage to learn more about Looping",
      "notes": "Lenka Petruželková, Ph.D., is a graduate of the Fi…the head of the Artificial- Pancreas4ALL project.",
      "recommender": ""
    }
  ],
  "Denmark": [
    {
      "id": 54,
      "country": "Denmark",
      "state": "The Capital Region of Denmark",
      "city": "Copenhagen",
      "specialty": "Senior Researcher and Team Leader",
      "name": "Signe Schmidt, MD PhD",
      "hospital": "Steno Diabetes Center Copenhagen",
      "contact": "Email: signe.schmidt@regionh.dk Phone: +45 51174785",
      "info": "",
      "notes": "From K. Braune's list",
      "recommender": ""
    }
  ],
  "United Kingdom": [
    {
      "id": 55,
      "country": "England",
      "state": "East of England",
      "city": "Cambridge",
      "specialty": "Endocrinologist",
      "name": "Mark Evans",
      "hospital": "Addenbrookes",
      "contact": "His secretary Sharon Coe 01223 586505",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "Mark is very active in promoting better care. He d…ouble shooting but I think that will change soon.",
      "recommender": "Sarah.loddick@gmail.com"
    },
    {
      "id": 56,
      "country": "England",
      "state": "London",
      "city": "London",
      "specialty": "Endocrinologist",
      "name": "Dr Brackenridge and Dr S Hussain",
      "hospital": "Guys and St Thomas's",
      "contact": "Email and website",
      "info": "They respect my/our knowledge, They understand how… They actively engage to learn more about Looping",
      "notes": "Excellent for pregnancy care. They keep up to date… new dash developments. Just great at their job!!",
      "recommender": "Rebecca Knight 07816865710 knight.rebecca@hotmail.com"
    }
  ],
  "Germany": [
    {
      "id": 57,
      "country": "Germany",
      "state": "Bavaria",
      "city": "Nuremberg",
      "specialty": "Pediatric Endocrinologist",
      "name": "Dr. Lwosky",
      "hospital": "Diabetes Zentrum Suedklinikum Nuremberg",
      "contact": "+49 911 398-5263",
      "info": "They respect my/our knowledge, They live with T1D themselves",
      "notes": "They acknowledge and are open to Loop as it seems to work for our girl (born 2014, T1D since 2017)",
      "recommender": "Ivana Tusch, ivana.tusch@yahoo.com"
    },
    {
      "id": 58,
      "country": "Germany",
      "state": "Berlin",
      "city": "Berlin",
      "specialty": "Diabetologist",
      "name": "Dr. Katarina Braune",
      "hospital": "Charité – Universitätsmedizin Berlin",
      "contact": "katarina.braune@charite.de",
      "info": "They respect my/our knowledge, They understand how…themselves, They use Loop for their own treatment",
      "notes": "",
      "recommender": ""
    }
  ],
  "Greece": [
    {
      "id": 59,
      "country": "Greece",
      "state": "ATTIKI",
      "city": "ATHENS",
      "specialty": "Pediatric Endocrinologist",
      "name": "NIKOLAOS KEFALAS",
      "hospital": "",
      "contact": "00 30 693 2260356",
      "info": "They respect my/our knowledge, They understand how Loop works, They live with T1D themselves",
      "notes": "",
      "recommender": "niklevedopoulos@gmail.com"
    }
  ],
  "Israel": [
    {
      "id": 60,
      "country": "Israel",
      "state": "",
      "city": "Heryzliya",
      "specialty": "Diabetologist",
      "name": "Dr. Eitan Roitman",
      "hospital": "",
      "contact": "",
      "info": "",
      "notes": "Amazing person!",
      "recommender": ""
    }
  ]
};

// Country coordinates for map markers
const countryCoordinates = {
  "Argentina": [-34.6037, -58.3816],
  "Australia": [-25.2744, 133.7751],
  "Austria": [47.5162, 14.5501],
  "Brazil": [-14.2350, -51.9253],
  "Canada": [56.1304, -106.3468],
  "Chile": [-35.6751, -71.5430],
  "Colombia": [4.5709, -74.2973],
  "Czech Republic": [49.8175, 15.4730],
  "Denmark": [56.2639, 9.5018],
  "United Kingdom": [55.3781, -3.4360],
  "Germany": [51.1657, 10.4515],
  "Greece": [39.0742, 21.8243],
  "Israel": [31.0461, 34.8516],
  "Italy": [41.8719, 12.5674],
  "Netherlands": [52.1326, 5.2913],
  "Norway": [60.4720, 8.4689],
  "Poland": [51.9194, 19.1451],
  "Portugal": [39.3999, -8.2245],
  "Slovenia": [46.1512, 14.9955],
  "Spain": [40.4637, -3.7492],
  "Sweden": [60.1282, 18.6435],
  "Switzerland": [46.8182, 8.2275],
  "Turkey": [38.9637, 35.2433],
  "United States": [37.0902, -95.7129]
};

// Helper function to get country data
function getCountryData(countryName) {
  return hcpData[countryName] || [];
}

// Helper function to get all countries with data
function getAllCountries() {
  return Object.keys(hcpData);
}

// Helper function to get country coordinates
function getCountryCoordinates(countryName) {
  return countryCoordinates[countryName] || null;
}
