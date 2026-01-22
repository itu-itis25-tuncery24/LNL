(function () {
  const DEFAULT_LANG = localStorage.getItem('lnl-lang') || 'en';
  const DEFAULT_THEME = localStorage.getItem('lnl-theme') || 'light';
  const contentElement = document.getElementById('content');
  const yearElement = document.getElementById('year');

  const DEFAULT_VIDEO_LANG = (localStorage.getItem('lnl-video-lang') || 'en');
  const SAFE_VIDEO_LANG = (DEFAULT_VIDEO_LANG === 'en' || DEFAULT_VIDEO_LANG === 'it') ? DEFAULT_VIDEO_LANG : 'en';
  const DEFAULT_SUB_LANG = localStorage.getItem('lnl-subtitle-lang') || 'en';

  const state = { 
    lang: DEFAULT_LANG,
    theme: DEFAULT_THEME,
    videoLang: SAFE_VIDEO_LANG,
    subtitleLang: DEFAULT_SUB_LANG,
    // Per-video overrides, keyed by base id (e.g., '1','2',...)
    videoLangById: JSON.parse(localStorage.getItem('lnl-video-lang-by-id') || '{}'),
    subtitleLangById: JSON.parse(localStorage.getItem('lnl-subtitle-lang-by-id') || '{}')
  };

  const content = {
    en: {
      title: "Module 1: Introduction to the Loop System",
      sections: [
        {
          id: "opening",
          title: "Opening – Introduction to the Program",
          text: "Welcome! In this Module, we'll explore Loop—an open-source automated insulin delivery system developed by the diabetes community. Loop offers a flexible, customizable approach to managing blood sugar, providing an alternative to commercial automated insulin delivery systems. Whether you're a healthcare professional, a caregiver, or a person with diabetes, understanding Loop will help you make informed decisions about its use. Let's dive in!",
          videoUrl: "videos/1-EN.mp4"
        },
        {
          id: "what-is-loop",
          title: "1.1 What is Loop? Core Principles",
          text: "Loop automates insulin delivery using three key components: a CGM, an insulin pump, and an algorithm running on an iPhone. Loop is exclusively designed for Apple devices, requiring an iPhone to operate. Loop automates insulin delivery using three key components: a CGM that continuously monitors glucose levels, an insulin pump that delivers precise doses of insulin, and an algorithm running on a smartphone to adjust insulin delivery dynamically. This process helps maintain stable blood sugar levels with minimal manual input.",
          videoUrl: "videos/2-EN.mp4"
        },
        {
          id: "why-aid",
          title: "1.2 Why Choose Automated Insulin Delivery (AID) Systems?",
          text: "Visual: Side-by-side comparison of Multiple Daily Injections (MDI) vs. Loop<br><br><strong>MDI (Multiple Daily Injections):</strong><br>• Requires manual insulin dosing for meals and corrections.<br>• No automatic glucose adjustments.<br>• Higher risk of blood sugar fluctuations.<br><br><strong>AID Systems (Loop & Commercial Systems):</strong><br>• Adjust insulin delivery automatically based on CGM data.<br>• Reduces daily management burden by minimizing manual adjustments.<br>• Helps maintain glucose levels within a target range more effectively.",
          videoUrl: "videos/3-EN.mp4"
        },
        {
          id: "commercial-vs-loop",
          title: "1.3 Comparing Commercial AID Systems vs. Loop",
          text: "Both commercial AID systems and Loop automate insulin delivery, helping users maintain stable glucose levels. The main difference is accessibility and control—commercial AID systems are regulated, provide structured support, and require subscriptions. In contrast, Loop offers a flexible, open-source alternative, allowing users to customize their settings but requiring them to take full responsibility for installation, maintenance, and troubleshooting.",
          videoUrl: "videos/4-EN.mp4"
        },
        {
          id: "who-can-use",
          title: "1.4 Who Can Use Loop? (Eligibility & Considerations)",
          text: "Loop is an excellent choice for individuals who are comfortable with technology, self-management, and troubleshooting. However, it requires a commitment to learning and maintenance. Unlike commercial AID systems, Loop users must build and update their app independently. Before starting Loop, it's essential to evaluate whether this level of involvement suits your lifestyle and diabetes management needs.",
          videoUrl: "videos/5-EN.mp4"
        },
        {
          id: "safe-use",
          title: "1.5 Safe Use & Best Practices for Loop Users",
          text: "Loop is a reliable and effective tool for managing insulin delivery, but like any technology, it requires some attention to ensure it is functioning correctly. Checking your settings, making sure your phone and connected devices are working, and being prepared to manage insulin manually if needed will help ensure a safe and smooth experience. If something doesn't seem right, simple troubleshooting steps can often resolve the issue quickly.",
          videoUrl: "videos/6-EN.mp4"
        },
        {
          id: "summary",
          title: "Summary & Closing",
          text: "Loop represents a new level of empowerment in diabetes management. By understanding its components, comparing it to commercial AID systems, and evaluating safety considerations, users and healthcare providers can make informed decisions. Stay connected with the LoopDocs and Loop and Learn community for ongoing support.",
          videoUrl: "videos/7-EN.mp4"
        },
        {
          id: "quiz",
          title: "Quick Quiz (Q&A format)",
          text: "Test your understanding of Module 1 with this interactive quiz covering the main components of Loop, differences from commercial systems, safety considerations, and best practices.",
          videoUrl: "",
          isQuiz: true,
          questions: [
            {
              id: 1,
              question: "What are the three main components of the Loop system?",
              options: [
                "Insulin pump, CGM, and an algorithm running on iPhone",
                "Insulin pens, CGM, and a glucose meter",
                "Syringes, an insulin reservoir, and a smart insulin cap",
                "A smartwatch, a CGM, and a Bluetooth-enabled pump"
              ],
              correct: 0,
              explanation: "Loop operates using an insulin pump, a continuous glucose monitor (CGM), and an algorithm running on an iPhone to automate insulin delivery."
            },
            {
              id: 2,
              question: "What is the primary function of the Loop algorithm?",
              options: [
                "To manually deliver insulin based on user input",
                "To adjust insulin delivery automatically based on real-time CGM readings",
                "To monitor carbohydrate intake but not impact insulin delivery",
                "To replace the need for an insulin pump"
              ],
              correct: 1,
              explanation: "Loop dynamically adjusts insulin delivery using real-time glucose readings from a CGM."
            },
            {
              id: 3,
              question: "How does Loop differ from commercial AID systems?",
              options: [
                "Loop is FDA-approved, while commercial systems are not",
                "Loop uses a hidden proprietary algorithm, while commercial systems allow user modifications",
                "Loop is open-source, customizable, and requires DIY setup, while commercial systems are pre-packaged and regulated",
                "There is no difference; both systems operate the same way"
              ],
              correct: 2,
              explanation: "Loop is an open-source system requiring self-installation and maintenance, while commercial AID systems are regulated, pre-packaged, and come with customer support."
            },
            {
              id: 4,
              question: "Who is NOT an ideal candidate for using Loop?",
              options: [
                "A person with Type 1 diabetes who is comfortable with technology",
                "A caregiver managing diabetes for a child using an Omnipod pump",
                "A person with diabetes who wants a hands-off experience and manufacturer support",
                "A person using a compatible pump and CGM"
              ],
              correct: 2,
              explanation: "Loop requires DIY setup and maintenance, meaning users who prefer manufacturer-backed support may find commercial AID systems more suitable."
            },
            {
              id: 5,
              question: "What should Loop users always have as a backup?",
              options: [
                "An extra RileyLink/OrangeLink",
                "A secondary smartphone in case the app crashes",
                "Insulin pens or syringes for manual insulin delivery",
                "A second insulin pump"
              ],
              correct: 2,
              explanation: "Since Loop relies on technology, users must always have a manual insulin delivery method (pens or syringes) in case of system failure and know how to use them."
            },
            {
              id: 6,
              question: "True or False? Loop is FDA-approved and available as a commercial product.",
              options: ["True", "False"],
              correct: 1,
              explanation: "Loop is not FDA-approved and is a community-developed DIY Open-source system."
            },
            {
              id: 7,
              question: "True or False? Loop runs on iPhones and requires user installation.",
              options: ["True", "False"],
              correct: 0,
              explanation: "Loop is designed for iOS and must be installed by the user. The details of installation and setup will be covered in a later module."
            },
            {
              id: 8,
              question: "What safety precautions should Loop users follow? (Select all that apply.)",
              options: [
                "Regularly update Loop",
                "Monitor CGM and pump connectivity",
                "Have a backup plan, such as insulin pens or syringes",
                "Ensure insulin settings (basal rates, carb ratios, and sensitivity factors) are accurate"
              ],
              correct: [0, 1, 2, 3],
              explanation: "Safe and effective use of Loop requires keeping the system updated, monitoring device connectivity, and always being prepared to manage insulin manually if needed. Additionally, checking insulin settings regularly helps ensure accurate dosing and optimal glucose control."
            }
          ]
        }
      ]
    },
    it: {
      title: "Modulo 1: Introduzione al sistema Loop",
      sections: [
        {
          id: "opening",
          title: "Apertura – Introduzione al Programma",
          text: "Benvenuti! In questo modulo, esploreremo Loop, un sistema open-source di somministrazione automatizzata di insulina, sviluppato dalla diabetes community. Loop offre un approccio flessibile e personalizzabile alla gestione della glicemia, rappresentando un'alternativa ai sistemi commerciali di somministrazione automatizzata di insulina. Che tu sia un professionista sanitario, un caregiver o una persona con diabete, comprendere Loop ti aiuterà a prendere decisioni informate e consapevoli.",
          videoUrl: "videos/1-IT.mp4"
        },
        {
          id: "what-is-loop",
          title: "1.1 Cos'è Loop? Principi Fondamentali",
          text: "Loop automatizza la somministrazione di insulina utilizzando tre componenti chiave: un CGM, un microinfusore e un algoritmo installato su un iPhone. Loop è progettato esclusivamente per dispositivi Apple e richiede un iPhone per funzionare. Loop automatizza la somministrazione di insulina utilizzando tre componenti chiave: un CGM che monitora continuamente i livelli di glucosio, un microinfusore che eroga dosi precise di insulina e un algoritmo che gira su uno smartphone per regolare dinamicamente la somministrazione di insulina. Questo processo aiuta a mantenere stabili i livelli di glicemia con un intervento manuale minimo.",
          videoUrl: "videos/2-IT.mp4"
        },
        {
          id: "why-aid",
          title: "1.2 Perché scegliere i sistemi di somministrazione automatizzata di insulina (AID)?",
          text: "Visuale: Confronto affiancato tra iniezioni multiple giornaliere (MDI) e Loop<br><br><strong>MDI (Iniezioni Multiple Giornaliere):</strong><br>• Richiede la somministrazione manuale di insulina per i pasti e le correzioni.<br>• Nessuna regolazione automatica del glucosio.<br>• Maggiore rischio di fluttuazioni della glicemia.<br><br><strong>Sistemi AID (Loop e sistemi commerciali):</strong><br>• Regolano automaticamente l'erogazione di insulina in base ai dati del CGM.<br>• Riduce il carico della gestione quotidiana minimizzando gli aggiustamenti manuali.<br>• Aiuta a mantenere i livelli di glucosio entro un intervallo target in modo più efficace.",
          videoUrl: "videos/3-IT.mp4"
        },
        {
          id: "commercial-vs-loop",
          title: "1.3 Confronto tra sistemi AID commerciali e Loop",
          text: "Sia i sistemi AID commerciali che Loop automatizzano la somministrazione di insulina, aiutando gli utenti a mantenere livelli di glucosio stabili. La principale differenza riguarda l'accessibilità e il controllo: i sistemi AID commerciali sono regolati, offrono supporto strutturato e richiedono abbonamenti. Al contrario, Loop rappresenta un'alternativa open-source più flessibile, permettendo agli utenti di personalizzare le impostazioni, ma richiedendo loro piena responsabilità per l'installazione, la manutenzione e la risoluzione dei problemi.",
          videoUrl: "videos/4-IT.mp4"
        },
        {
          id: "who-can-use",
          title: "1.4 Chi può utilizzare Loop? (Idoneità e considerazioni)",
          text: "Loop è un'ottima scelta per chi è a proprio agio con la tecnologia, la gestione autonoma e la risoluzione dei problemi. Tuttavia, richiede un impegno nell'apprendimento e nella manutenzione. A differenza dei sistemi AID commerciali, gli utenti di Loop devono costruire e aggiornare l'app in modo indipendente. Prima di iniziare a usare Loop, è fondamentale valutare se questo livello di coinvolgimento si adatta al proprio stile di vita e alle esigenze di gestione del diabete.",
          videoUrl: "videos/5-IT.mp4"
        },
        {
          id: "safe-use",
          title: "1.5 Uso sicuro e migliori pratiche per gli utenti di Loop",
          text: "Loop è uno strumento affidabile ed efficace per la gestione della somministrazione di insulina, ma, come qualsiasi tecnologia, richiede un po' di attenzione per assicurarsi che funzioni correttamente. Controllare le impostazioni, verificare che il telefono e i dispositivi connessi siano operativi e essere pronti a gestire l'insulina manualmente, se necessario, contribuirà a garantire un'esperienza sicura e senza intoppi. Se qualcosa non sembra funzionare come dovrebbe, semplici passaggi di risoluzione dei problemi possono spesso risolvere rapidamente la situazione.",
          videoUrl: "videos/6-IT.mp4"
        },
        {
          id: "summary",
          title: "Riassunto e chiusura",
          text: "Loop rappresenta un nuovo livello di autonomia nella gestione del diabete. Comprendendo i suoi componenti, confrontandolo con i sistemi AID commerciali e valutando le considerazioni sulla sicurezza, gli utenti e i professionisti sanitari possono prendere decisioni informate. Rimani connesso con LoopDocs e la community di Loop and Learn per un supporto continuo.",
          videoUrl: "videos/7-IT.mp4"
        },
        {
          id: "quiz",
          title: "Quiz di verifica – Introduzione al sistema Loop",
          text: "Metti alla prova la tua comprensione del Modulo 1 con questo quiz interattivo che copre i componenti principali di Loop, le differenze rispetto ai sistemi commerciali, le considerazioni sulla sicurezza e le migliori pratiche.",
          videoUrl: "",
          isQuiz: true,
          questions: [
            {
              id: 1,
              question: "Quali sono i tre componenti principali del sistema Loop?",
              options: [
                "Microinfusore, CGM e un algoritmo installato su iPhone",
                "Penne per insulina, CGM e un glucometro",
                "Siringhe, un serbatoio di insulina e un tappo intelligente per insulina",
                "Uno smartwatch, un CGM e un microinfusore con connessione Bluetooth"
              ],
              correct: 0,
              explanation: "Loop funziona utilizzando un microinfusore, un monitor continuo della glicemia (CGM) e un algoritmo su iPhone per automatizzare l'erogazione di insulina."
            },
            {
              id: 2,
              question: "Qual è la funzione principale dell'algoritmo di Loop?",
              options: [
                "Somministrare insulina manualmente in base all'input dell'utente",
                "Regolare in modo automatico la somministrazione di insulina in base ai valori del CGM in tempo reale",
                "Monitorare l'assunzione di carboidrati senza influenzare la somministrazione di insulina",
                "Sostituire la necessità di un microinfusore"
              ],
              correct: 1,
              explanation: "Loop regola la somministrazione di insulina in modo dinamico utilizzando i valori della glicemia in tempo reale forniti dal CGM."
            },
            {
              id: 3,
              question: "In che modo Loop è diverso dai sistemi AID commerciali?",
              options: [
                "Loop è approvato dalla FDA, mentre i sistemi commerciali non lo sono",
                "Loop utilizza un algoritmo proprietario nascosto, mentre i sistemi commerciali consentono modifiche da parte dell'utente",
                "Loop è open-source, personalizzabile e richiede un'installazione fai-da-te, mentre i sistemi commerciali sono preconfigurati e regolamentati",
                "Non c'è alcuna differenza; entrambi i sistemi funzionano allo stesso modo"
              ],
              correct: 2,
              explanation: "Loop è un sistema open-source che richiede installazione e manutenzione autonoma, mentre i sistemi AID commerciali sono regolamentati, preconfigurati e supportati da un'assistenza clienti dedicata."
            },
            {
              id: 4,
              question: "Chi NON è un candidato ideale per l'uso di Loop?",
              options: [
                "Una persona con diabete di tipo 1 a proprio agio con la tecnologia",
                "Un caregiver che gestisce il diabete di un bambino con un microinfusore Omnipod",
                "Una persona con diabete che desidera un sistema preconfigurato con assistenza tecnica fornita dal produttore",
                "Una persona che utilizza un microinfusore e un CGM compatibili"
              ],
              correct: 2,
              explanation: "Loop richiede installazione e manutenzione fai-da-te, quindi gli utenti che preferiscono un sistema con supporto del produttore e un funzionamento più guidato potrebbero trovare più adatti i sistemi AID commerciali."
            },
            {
              id: 5,
              question: "Cosa dovrebbero sempre avere a disposizione gli utenti di Loop come piano di emergenza?",
              options: [
                "Un RileyLink/OrangeLink di riserva",
                "Uno smartphone secondario nel caso in cui l'app si arresti",
                "Penne per insulina o siringhe per la somministrazione manuale dell'insulina",
                "Un secondo microinfusore"
              ],
              correct: 2,
              explanation: "Poiché Loop si basa sulla tecnologia, gli utenti devono sempre avere un metodo alternativo per la somministrazione dell'insulina (penne o siringhe) in caso di malfunzionamenti del sistema e saperle usare correttamente."
            },
            {
              id: 6,
              question: "Vero o Falso? Loop è approvato dalla FDA ed è disponibile come prodotto commerciale.",
              options: ["Vero", "Falso"],
              correct: 1,
              explanation: "Loop non è approvato dalla FDA ed è un sistema open-source sviluppato dalla comunità, che richiede installazione fai-da-te da parte dell'utente."
            },
            {
              id: 7,
              question: "Vero o Falso? Loop funziona su iPhone e richiede l'installazione da parte dell'utente.",
              options: ["Vero", "Falso"],
              correct: 0,
              explanation: "Loop è progettato per iOS e deve essere installato manualmente dall'utente. I dettagli sull'installazione e sulla configurazione verranno trattati in un modulo successivo."
            },
            {
              id: 8,
              question: "Quali precauzioni di sicurezza dovrebbero seguire gli utenti di Loop? (Seleziona tutte le risposte corrette.)",
              options: [
                "Aggiornare regolarmente Loop",
                "Monitorare la connettività tra CGM e microinfusore",
                "Avere un piano di emergenza, come penne per insulina o siringhe",
                "Verificare che le impostazioni dell'insulina (basale, rapporti insulina/carboidrati e fattore di sensibilità) siano corrette"
              ],
              correct: [0, 1, 2, 3],
              explanation: "Un utilizzo sicuro ed efficace di Loop richiede di mantenere il sistema aggiornato, monitorare la connettività dei dispositivi e avere sempre un piano di emergenza per la somministrazione manuale dell'insulina. Inoltre, controllare regolarmente le impostazioni dell'insulina aiuta a garantire un dosaggio accurato e un migliore controllo della glicemia."
            }
          ]
        }
      ]
    }
    ,
    tr: {
      title: "Modül 1: Loop Sistemine Giriş",
      sections: [
        {
          id: "opening",
          title: "Açılış – Programa Giriş",
          text: "Hoş geldiniz! Bu modülde, diyabet topluluğu tarafından geliştirilen açık kaynaklı bir otomatik insülin dağıtım sistemi olan Loop'u keşfedeceğiz. Loop, kan şekeri yönetiminde esnek ve özelleştirilebilir bir yaklaşım sunarak ticari sistemlere alternatif sağlar. Sağlık profesyoneli, bakıcı veya diyabetli bir birey olun, Loop'u anlamak kullanımına dair bilinçli kararlar vermenize yardımcı olacaktır. Haydi başlayalım!",
          videoUrl: "videos/1-EN.mp4"
        },
        {
          id: "what-is-loop",
          title: "1.1 Loop Nedir? Temel İlkeler",
          text: "Loop, üç temel bileşen kullanarak insülin dağıtımını otomatikleştirir: sürekli glikoz izleme yapan bir CGM, hassas dozlar veren bir insülin pompası ve insülin dağıtımını dinamik olarak ayarlayan bir algoritma. Loop yalnızca Apple cihazları için tasarlanmıştır ve çalışması için bir iPhone gerektirir. Bu süreç, minimal manuel müdahale ile stabil kan şekeri seviyelerini korumaya yardımcı olur.",
          videoUrl: "videos/2-EN.mp4"
        },
        {
          id: "why-aid",
          title: "1.2 Neden Otomatik İnsülin Dağıtım (AID) Sistemleri?",
          text: "Görsel: Çoklu Günlük İnjeksiyon (MDI) ve Loop karşılaştırması<br><br><strong>MDI (Çoklu Günlük İnjeksiyonlar):</strong><br>• Öğünler ve düzeltmeler için manuel insülin gerektirir.<br>• Otomatik glikoz ayarı yoktur.<br>• Kan şekeri dalgalanma riski daha yüksektir.<br><br><strong>AID Sistemleri (Loop ve Ticari Sistemler):</strong><br>• CGM verilerine göre insülin dağıtımını otomatik ayarlar.<br>• Manuel ayarlamaları azaltarak günlük yönetim yükünü hafifletir.<br>• Hedef aralıkta glikozu tutmaya daha etkili yardımcı olur.",
          videoUrl: "videos/3-EN.mp4"
        },
        {
          id: "commercial-vs-loop",
          title: "1.3 Ticari AID Sistemleri vs. Loop Karşılaştırması",
          text: "Hem ticari AID sistemleri hem de Loop insülin dağıtımını otomatikleştirerek kullanıcıların stabil glikoz seviyelerini korumasına yardımcı olur. Ana fark, erişilebilirlik ve kontroldedir—ticari sistemler düzenlemelere tabidir, yapılandırılmış destek sağlar ve abonelik gerektirebilir. Loop ise açık kaynaklı ve esnektir; kullanıcıların kurulum, bakım ve sorun gidermeden sorumlu olmasını gerektirir.",
          videoUrl: "videos/4-EN.mp4"
        },
        {
          id: "who-can-use",
          title: "1.4 Kimler Loop Kullanabilir? (Uygunluk ve Değerlendirmeler)",
          text: "Loop, teknolojiyle arası iyi olan, kendi kendini yönetebilen ve sorun gidermeye istekli bireyler için uygundur. Ancak, öğrenme ve bakım gerektirir. Ticari AID sistemlerinden farklı olarak, Loop kullanıcılarının uygulamayı kendilerinin oluşturup güncellemesi gerekir. Başlamadan önce bu düzeydeki katılımın yaşam tarzınıza ve diyabet yönetimi ihtiyaçlarınıza uygun olup olmadığını değerlendirmek önemlidir.",
          videoUrl: "videos/5-EN.mp4"
        },
        {
          id: "safe-use",
          title: "1.5 Güvenli Kullanım ve En İyi Uygulamalar",
          text: "Loop, insülin dağıtımını yönetmede güvenilir ve etkilidir ancak her teknolojide olduğu gibi doğru çalıştığından emin olmak için dikkat gerektirir. Ayarlarınızı kontrol etmek, telefon ve bağlı cihazların çalıştığından emin olmak ve gerekirse manuel insülin yönetimine hazır olmak güvenli ve sorunsuz bir deneyim sağlar. Bir şeyler yolunda gitmiyorsa, basit sorun giderme adımları genellikle hızlıca çözebilir.",
          videoUrl: "videos/6-EN.mp4"
        },
        {
          id: "summary",
          title: "Özet ve Kapanış",
          text: "Loop, diyabet yönetiminde yeni bir güçlenme düzeyi sunar. Bileşenlerini anlamak, ticari AID sistemleriyle karşılaştırmak ve güvenlik hususlarını değerlendirmek; kullanıcıların ve sağlık profesyonellerinin bilinçli kararlar vermesine yardımcı olur. Sürekli destek için LoopDocs ve Loop and Learn topluluğuyla bağlantıda kalın.",
          videoUrl: "videos/7-EN.mp4"
        },
        {
          id: "quiz",
          title: "Hızlı Quiz (Soru–Cevap)",
          text: "Bu modülün ana kavramlarını ölçmek için etkileşimli kısa bir quiz. Loop'un bileşenleri, ticari sistemlerden farkları, güvenlik ve en iyi uygulamalar.",
          videoUrl: "",
          isQuiz: true,
          questions: [
            {
              id: 1,
              question: "Loop sisteminin üç ana bileşeni nelerdir?",
              options: [
                "İnsülin pompası, CGM ve iPhone'da çalışan algoritma",
                "İnsülin kalemleri, CGM ve glukometre",
                "Şırıngalar, insülin haznesi ve akıllı kapak",
                "Akıllı saat, CGM ve Bluetooth'lu pompa"
              ],
              correct: 0,
              explanation: "Loop; bir insülin pompası, CGM ve iPhone'da çalışan bir algoritma ile otomatik insülin dağıtımı yapar."
            },
            {
              id: 2,
              question: "Loop algoritmasının temel işlevi nedir?",
              options: [
                "Kullanıcı girdisine göre manuel insülin vermek",
                "Gerçek zamanlı CGM verilerine göre insülini otomatik ayarlamak",
                "Karbonhidrat alımını izlemek ama insülini etkilememek",
                "İnsülin pompası ihtiyacını ortadan kaldırmak"
              ],
              correct: 1,
              explanation: "Loop, CGM'den gelen gerçek zamanlı verileri kullanarak insülini dinamik biçimde ayarlar."
            },
            {
              id: 3,
              question: "Loop, ticari AID sistemlerinden nasıl farklıdır?",
              options: [
                "Loop FDA onaylıdır, ticari sistemler değildir",
                "Loop kapalı kaynaklıdır, ticari sistemler kullanıcıya özelleştirme sunar",
                "Loop açık kaynaklıdır ve DIY kurulum gerektirir; ticari sistemler paketli ve regüle edilir",
                "Fark yoktur; ikisi de aynı şekilde çalışır"
              ],
              correct: 2,
              explanation: "Loop açık kaynaklıdır, kullanıcı kurulum ve bakımdan sorumludur; ticari sistemler regüle edilmiştir ve destek sunar."
            },
            {
              id: 4,
              question: "Loop kullanımı için İDEAL OLMAYAN aday kimdir?",
              options: [
                "Teknolojiyle arası iyi Tip 1 diyabetli",
                "Omnipod kullanan bir çocuğu yöneten bakıcı",
                "Üretici desteğiyle 'hazır paket' deneyim isteyen kişi",
                "Uyumlu pompa ve CGM kullanan kişi"
              ],
              correct: 2,
              explanation: "Loop DIY kurulum ve bakım gerektirir; üretici destekli, yönlendirmeli deneyim isteyenler için ticari sistemler daha uygundur."
            },
            {
              id: 5,
              question: "Loop kullanıcılarının her zaman yedek olarak bulundurması gereken nedir?",
              options: [
                "Yedek RileyLink/OrangeLink",
                "İkinci bir akıllı telefon",
                "Manuel insülin için kalem veya şırınga",
                "İkinci bir insülin pompası"
              ],
              correct: 2,
              explanation: "Teknolojiye bağımlılık nedeniyle manuel insülin uygulaması için kalem/şırınga her zaman hazır olmalıdır."
            },
            {
              id: 6,
              question: "Doğru mu Yanlış mı? Loop FDA onaylıdır ve ticari bir üründür.",
              options: ["Doğru", "Yanlış"],
              correct: 1,
              explanation: "Loop FDA onaylı değildir; topluluk tarafından geliştirilen açık kaynaklı bir sistemdir."
            },
            {
              id: 7,
              question: "Doğru mu Yanlış mı? Loop iPhone'da çalışır ve kullanıcı tarafından kurulmalıdır.",
              options: ["Doğru", "Yanlış"],
              correct: 0,
              explanation: "Loop iOS için tasarlanmıştır ve kullanıcı tarafından kurulum gerekir. Kurulum ayrıntıları ilerideki modüllerde ele alınacaktır."
            },
            {
              id: 8,
              question: "Loop kullanıcılarının uyması gereken güvenlik önlemleri nelerdir? (Birden fazla)",
              options: [
                "Loop'u düzenli güncellemek",
                "CGM ve pompa bağlantısını izlemek",
                "Yedek plan (kalem/şırınga) bulundurmak",
                "İnsülin ayarlarının (bazal, KH oranı, duyarlılık) doğru olduğundan emin olmak"
              ],
              correct: [0, 1, 2, 3],
              explanation: "Güvenli kullanım için sistem güncel tutulmalı, bağlantılar izlenmeli, manuel insülin planı hazır olmalı ve ayarlar düzenli gözden geçirilmelidir."
            }
          ]
        }
      ]
    }
  };

  // UI labels for selector translations
  const uiText = {
    en: { video: 'Video', subtitles: 'Subtitles', play: 'Play', pause: 'Pause', download: 'Download', pip: 'Picture in Picture' },
    it: { video: 'Video', subtitles: 'Sottotitoli', play: 'Riproduci', pause: 'Pausa', download: 'Scarica', pip: 'Picture in Picture' },
    tr: { video: 'Video', subtitles: 'Altyazı', play: 'Oynat', pause: 'Duraklat', download: 'İndir', pip: 'Resim içinde resim' }
  };

  function updateSelectorLabels() {
    const labels = uiText[state.lang] || uiText.en;
    const videoTrigger = document.getElementById('videoLangTrigger');
    const subTrigger = document.getElementById('subtitleLangTrigger');
    if (videoTrigger) {
      videoTrigger.textContent = `${labels.video}: ${state.videoLang.toUpperCase()}`;
    }
    if (subTrigger) {
      subTrigger.textContent = `${labels.subtitles}: ${state.subtitleLang.toUpperCase()}`;
    }
  }

  function renderContent(lang) {
    const langContent = content[lang];
    if (!langContent) return;

    let html = `<h1>${langContent.title}</h1>`;
    
    langContent.sections.forEach((section, index) => {
      if (section.isQuiz) {
        html += renderQuiz(section, lang);
      } else {
        const originalVideoId = section.videoUrl ? section.videoUrl.split('/').pop().split('.')[0] : '';
        const baseId = originalVideoId ? originalVideoId.split('-')[0] : '';
        const perVideoLang = state.videoLangById[baseId] || state.videoLang;
        const computedVideoId = baseId ? `${baseId}-${perVideoLang.toUpperCase()}` : '';
        const computedVideoSrc = baseId ? `videos/${computedVideoId}.mp4` : '';
        html += `
          <section class="content-section" id="${section.id}">
            <h2>${section.title}</h2>
            <div class="text-content">
              <p>${section.text}</p>
            </div>
            <div class="video-container">
              ${section.videoUrl ? 
                `<video controls preload="metadata" playsinline controlslist="nodownload noplaybackrate noremoteplayback" disablepictureinpicture oncontextmenu="return false" style="width: 100%; height: auto; border-radius: 8px;" data-video-id="${computedVideoId}">
                  <source src="${computedVideoSrc}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>` :
                `<div class="video-placeholder">Video ${index + 1} - ${section.title} (${lang.toUpperCase()})</div>`
              }
            </div>
            ${section.videoUrl ? 
              `<div class="subtitle-area" data-video-id="${computedVideoId}">
                <div class="subtitle-text"></div>
              </div>
              <div class="video-controls" data-video-id="${computedVideoId}">
                <div class="lang-dropdown inline" data-type="video" data-scope="${computedVideoId}">
                  <button class="lang-trigger" aria-haspopup="listbox" aria-expanded="false">${(uiText[state.lang]||uiText.en).video}: ${perVideoLang.toUpperCase()}</button>
                  <ul class="lang-menu" role="listbox">
                    <li role="option" data-value="en" class="${perVideoLang==='en'?'active':''}">EN</li>
                    <li role="option" data-value="it" class="${perVideoLang==='it'?'active':''}">IT</li>
                  </ul>
                </div>
                <div class="lang-dropdown inline" data-type="subtitle" data-scope="${computedVideoId}">
                  <button class="lang-trigger" aria-haspopup="listbox" aria-expanded="false">${(uiText[state.lang]||uiText.en).subtitles}: ${(state.subtitleLangById[baseId]||state.subtitleLang).toUpperCase()}</button>
                  <ul class="lang-menu" role="listbox">
                    <li role="option" data-value="en" class="${(state.subtitleLangById[baseId]||state.subtitleLang)==='en'?'active':''}">EN</li>
                    <li role="option" data-value="it" class="${(state.subtitleLangById[baseId]||state.subtitleLang)==='it'?'active':''}">IT</li>
                    <li role="option" data-value="tr" class="${(state.subtitleLangById[baseId]||state.subtitleLang)==='tr'?'active':''}">TR</li>
                  </ul>
                </div>
              </div>` : ''
            }
          </section>
        `;
      }
    });

    contentElement.innerHTML = html;
    initSubtitleSystem(state.subtitleLang);
    bindExclusiveVideoPlayback();
    bindPerVideoLanguageControls();
  }

  function renderQuiz(section, lang) {
    const quizId = `quiz-${section.id}`;
    let html = `
      <section class="content-section quiz-section" id="${section.id}">
        <h2>${section.title}</h2>
        <div class="text-content">
          <p>${section.text}</p>
        </div>
        <div class="quiz-container" id="${quizId}">
          <div class="quiz-progress">
            <div class="progress-bar">
              <div class="progress-fill" id="progress-${quizId}"></div>
            </div>
            <span class="progress-text" id="progress-text-${quizId}">1 / ${section.questions.length}</span>
          </div>
          
          <div class="question-nav">
    `;
    
    // Question number navigation
    section.questions.forEach((question, qIndex) => {
      html += `
        <button class="question-nav-btn ${qIndex === 0 ? 'active' : ''}" 
                onclick="showQuestion('${quizId}', ${qIndex})" 
                data-question="${qIndex}">
          ${qIndex + 1}
        </button>
      `;
    });
    
    html += `
          </div>
          
          <div class="quiz-questions" id="questions-${quizId}">
    `;

    section.questions.forEach((question, qIndex) => {
      const isMultipleChoice = Array.isArray(question.correct);
      html += `
        <div class="question-card ${qIndex === 0 ? 'active' : ''}" data-question="${qIndex}">
          <h3 class="question-title">${question.question}</h3>
          <div class="question-options">
      `;
      
      question.options.forEach((option, oIndex) => {
        const inputType = isMultipleChoice ? 'checkbox' : 'radio';
        const inputName = `q${question.id}`;
        html += `
          <label class="option-label">
            <input type="${inputType}" name="${inputName}" value="${oIndex}" data-question="${qIndex}">
            <span class="option-text">${option}</span>
          </label>
        `;
      });
      
      html += `
          </div>
          <div class="question-actions">
            <div class="nav-buttons">
              ${qIndex > 0 ? `<button class="btn btn-secondary" onclick="showQuestion('${quizId}', ${qIndex - 1})">${lang === 'en' ? 'Previous' : 'Precedente'}</button>` : '<div></div>'}
              ${qIndex < section.questions.length - 1 ? `<button class="btn btn-primary" onclick="nextQuestion('${quizId}', ${qIndex}, ${section.questions.length})">${lang === 'en' ? 'Next' : 'Successivo'}</button>` : '<div></div>'}
            </div>
            <div class="finish-section">
              <button class="btn btn-finish" onclick="finishQuiz('${quizId}')">${lang === 'en' ? 'Finish Quiz' : 'Termina Quiz'}</button>
            </div>
          </div>
        </div>
      `;
    });

    html += `
          </div>
          <div class="quiz-results" id="results-${quizId}" style="display: none;">
            <div class="results-header">
            <h3>${lang === 'en' ? 'Quiz Results' : 'Risultati Quiz'}</h3>
              <button class="btn btn-secondary btn-stats" onclick="showQuizStats('${quizId}')">
                📊 ${lang === 'en' ? 'Statistics' : 'Statistiche'}
              </button>
            </div>
            <div class="score-display">
              <div class="score-circle">
                <span class="score-number" id="score-number-${quizId}">0</span>
                <span class="score-total">/ ${section.questions.length}</span>
              </div>
              <div class="score-message" id="score-message-${quizId}"></div>
            </div>
            <div class="detailed-results" id="detailed-results-${quizId}"></div>
            <div class="quiz-actions">
            <button class="btn btn-primary" onclick="restartQuiz('${quizId}')">${lang === 'en' ? 'Retake Quiz' : 'Riprova Quiz'}</button>
              <button class="btn btn-secondary" onclick="showQuizStats('${quizId}')">${lang === 'en' ? 'View Statistics' : 'Visualizza Statistiche'}</button>
            </div>
          </div>
        </div>
      </section>
    `;

    return html;
  }

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('lnl-lang', lang);
    document.documentElement.lang = lang;
    // Sync default video language to page language for EN/IT (per-video overrides stay)
    if (lang === 'it' || lang === 'en') {
      state.videoLang = lang;
      localStorage.setItem('lnl-video-lang', lang);
      // Floating switcher should update ALL videos → clear per-video overrides
      state.videoLangById = {};
      localStorage.setItem('lnl-video-lang-by-id', '{}');
    }
    // Global subtitle language default follows page language (tr/it/en)
    state.subtitleLang = lang;
    localStorage.setItem('lnl-subtitle-lang', lang);
    // Clear per-video subtitle overrides to apply globally; users can still override afterward
    state.subtitleLangById = {};
    localStorage.setItem('lnl-subtitle-lang-by-id', '{}');
    
    // Update active state
    const langButtons = document.querySelectorAll('.lang-option-btn');
    langButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });
    
    // Close dropdown
    const switcher = document.getElementById('floatingLangSwitcher');
    if (switcher) {
      switcher.classList.remove('open');
    }
    
    // Re-render content (text language) but keep video and subtitle languages
    renderContent(state.lang);
    updateSelectorLabels();
  }

  function bindLanguageButtons() {
    const floatingBtn = document.getElementById('floatingLangBtn');
    const langOptions = document.querySelectorAll('.lang-option-btn');
    
    if (floatingBtn) {
      floatingBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const switcher = document.getElementById('floatingLangSwitcher');
        switcher.classList.toggle('open');
      });
    }
    
    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        // If selected page language has no content, fallback to EN content while keeping html lang attribute
        const hasContent = !!content[lang];
        if (!hasContent) {
          document.documentElement.lang = lang;
          state.lang = 'en';
          localStorage.setItem('lnl-lang', 'en');
          renderContent('en');
        } else {
        setLanguage(lang);
        }
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const switcher = document.getElementById('floatingLangSwitcher');
      if (switcher && !switcher.contains(e.target)) {
        switcher.classList.remove('open');
      }
    });
  }

  // Quiz functions
  window.showQuestion = function(quizId, questionIndex) {
    const questions = document.querySelectorAll(`#${quizId} .question-card`);
    const navButtons = document.querySelectorAll(`#${quizId} .question-nav-btn`);
    
    questions.forEach((q, index) => {
      q.classList.toggle('active', index === questionIndex);
    });
    
    navButtons.forEach((btn, index) => {
      btn.classList.toggle('active', index === questionIndex);
      
      // Add visual indicators for answered questions
      const hasAnswer = document.querySelectorAll(`#${quizId} input[name="q${index + 1}"]:checked`).length > 0;
      btn.classList.toggle('answered', hasAnswer);
    });
    
    updateProgress(quizId, questionIndex + 1);
    
    // Scroll to question smoothly
    const activeQuestion = document.querySelector(`#${quizId} .question-card.active`);
    if (activeQuestion) {
      activeQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  window.nextQuestion = function(quizId, currentIndex, totalQuestions) {
    if (currentIndex < totalQuestions - 1) {
      showQuestion(quizId, currentIndex + 1);
    }
  };

  window.finishQuiz = function(quizId) {
    const lang = state.lang;
    const section = content[lang].sections.find(s => s.isQuiz);
    const questions = section.questions;
    
    let score = 0;
    let detailedResults = '';
    let correctAnswers = [];
    let incorrectAnswers = [];

    questions.forEach((question, qIndex) => {
      const selectedAnswers = [];
      const inputs = document.querySelectorAll(`#${quizId} input[name="q${question.id}"]:checked`);
      inputs.forEach(input => selectedAnswers.push(parseInt(input.value)));
      
      const isCorrect = Array.isArray(question.correct) 
        ? JSON.stringify(selectedAnswers.sort()) === JSON.stringify(question.correct.sort())
        : selectedAnswers.length === 1 && selectedAnswers[0] === question.correct;
      
      if (isCorrect) {
        score++;
        correctAnswers.push(qIndex + 1);
      } else {
        incorrectAnswers.push(qIndex + 1);
      }
      
      // Get selected options text
      let selectedText = '';
      if (selectedAnswers.length > 0) {
        selectedText = selectedAnswers.map(ans => question.options[ans]).join(', ');
      } else {
        selectedText = lang === 'en' ? 'No answer selected' : 'Nessuna risposta selezionata';
      }
      
      // Get correct options text
      const correctOptions = Array.isArray(question.correct) 
        ? question.correct.map(ans => question.options[ans]).join(', ')
        : question.options[question.correct];
      
      detailedResults += `
        <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
          <div class="result-header">
            <h4>Question ${qIndex + 1} ${isCorrect ? '✅' : '❌'}</h4>
            <span class="result-status">${isCorrect ? (lang === 'en' ? 'Correct' : 'Corretto') : (lang === 'en' ? 'Incorrect' : 'Sbagliato')}</span>
          </div>
          <p class="question-text">${question.question}</p>
          <div class="answer-comparison">
            <div class="selected-answer">
              <strong>${lang === 'en' ? 'Your answer:' : 'La tua risposta:'}</strong>
              <span class="answer-text ${isCorrect ? 'correct' : 'incorrect'}">${selectedText}</span>
            </div>
            ${!isCorrect ? `
              <div class="correct-answer">
                <strong>${lang === 'en' ? 'Correct answer:' : 'Risposta corretta:'}</strong>
                <span class="answer-text correct">${correctOptions}</span>
              </div>
            ` : ''}
          </div>
          <div class="explanation">
            <strong>${lang === 'en' ? 'Explanation:' : 'Spiegazione:'}</strong>
            <p>${question.explanation}</p>
          </div>
        </div>
      `;
    });

    const percentage = Math.round((score / questions.length) * 100);
    let message = '';
    let messageClass = '';
    let recommendation = '';
    
    // Enhanced scoring guide implementation
    if (score === questions.length) {
      message = lang === 'en' ? '🎉 Loop Expert! You\'re ready to move forward confidently.' : '🎉 Esperto di Loop! Sei pronto per andare avanti con sicurezza.';
      messageClass = 'expert';
      recommendation = lang === 'en' ? 'Excellent work! You have mastered all concepts in this module.' : 'Lavoro eccellente! Hai padroneggiato tutti i concetti di questo modulo.';
    } else if (score >= 6) {
      message = lang === 'en' ? '👍 Great job! Review missed questions and continue learning.' : '👍 Ottimo lavoro! Rivedi le domande sbagliate e continua ad apprendere.';
      messageClass = 'good';
      recommendation = lang === 'en' ? `You got ${score}/${questions.length} correct. Focus on questions ${incorrectAnswers.join(', ')} before moving forward.` : `Hai risposto correttamente a ${score}/${questions.length} domande. Concentrati sulle domande ${incorrectAnswers.join(', ')} prima di procedere.`;
    } else if (score >= 4) {
      message = lang === 'en' ? '📚 Consider revisiting some concepts before moving to the next module.' : '📚 Valuta di rivedere alcuni concetti prima di passare al prossimo modulo.';
      messageClass = 'review';
      recommendation = lang === 'en' ? `You got ${score}/${questions.length} correct. We recommend reviewing the video content and retaking this quiz.` : `Hai risposto correttamente a ${score}/${questions.length} domande. Ti consigliamo di rivedere il contenuto video e riprovare questo quiz.`;
    } else {
      message = lang === 'en' ? '🔄 Rewatch the video and review the supporting materials before retaking the quiz.' : '🔄 Riguarda il video e consulta i materiali di supporto prima di riprovare il quiz.';
      messageClass = 'retake';
      recommendation = lang === 'en' ? `You got ${score}/${questions.length} correct. Please review all module content thoroughly before attempting the quiz again.` : `Hai risposto correttamente a ${score}/${questions.length} domande. Ti preghiamo di rivedere tutto il contenuto del modulo prima di riprovare il quiz.`;
    }

    // Save quiz attempt to localStorage
    const quizAttempt = {
      date: new Date().toISOString(),
      score: score,
      total: questions.length,
      percentage: percentage,
      correctQuestions: correctAnswers,
      incorrectQuestions: incorrectAnswers,
      language: lang
    };
    
    const quizHistory = JSON.parse(localStorage.getItem('quiz-history') || '[]');
    quizHistory.push(quizAttempt);
    localStorage.setItem('quiz-history', JSON.stringify(quizHistory));

    // Show results with animation
    document.querySelector(`#${quizId} .quiz-questions`).style.display = 'none';
    document.querySelector(`#${quizId} .quiz-progress`).style.display = 'none';
    document.querySelector(`#${quizId} .question-nav`).style.display = 'none';
    
    const resultsDiv = document.querySelector(`#${quizId} .quiz-results`);
    resultsDiv.style.display = 'block';
    
    // Update score display
    document.querySelector(`#score-number-${quizId}`).textContent = score;
    document.querySelector(`#score-message-${quizId}`).textContent = message;
    document.querySelector(`#score-message-${quizId}`).className = `score-message ${messageClass}`;
    document.querySelector(`#detailed-results-${quizId}`).innerHTML = detailedResults;
    
    // Add recommendation
    const recommendationDiv = document.createElement('div');
    recommendationDiv.className = 'quiz-recommendation';
    recommendationDiv.innerHTML = `
      <div class="recommendation-content">
        <h4>${lang === 'en' ? 'Recommendation:' : 'Raccomandazione:'}</h4>
        <p>${recommendation}</p>
      </div>
    `;
    
    const resultsContainer = document.querySelector(`#${quizId} .quiz-results`);
    const existingRecommendation = resultsContainer.querySelector('.quiz-recommendation');
    if (existingRecommendation) {
      existingRecommendation.remove();
    }
    resultsContainer.insertBefore(recommendationDiv, resultsContainer.querySelector('.detailed-results'));
    
    // Animate score
    animateScore(quizId, score, questions.length);
  };

  window.restartQuiz = function(quizId) {
    document.querySelector(`#${quizId} .quiz-questions`).style.display = 'block';
    document.querySelector(`#${quizId} .quiz-progress`).style.display = 'flex';
    document.querySelector(`#${quizId} .question-nav`).style.display = 'flex';
    document.querySelector(`#${quizId} .quiz-results`).style.display = 'none';
    
    // Clear all selections
    document.querySelectorAll(`#${quizId} input`).forEach(input => {
      input.checked = false;
    });
    
    // Show first question
    showQuestion(quizId, 0);
  };

  function updateProgress(quizId, currentQuestion) {
    const totalQuestions = content[state.lang].sections.find(s => s.isQuiz).questions.length;
    const percentage = (currentQuestion / totalQuestions) * 100;
    
    document.querySelector(`#progress-${quizId}`).style.width = `${percentage}%`;
    document.querySelector(`#progress-text-${quizId}`).textContent = `${currentQuestion} / ${totalQuestions}`;
  }

  function animateScore(quizId, score, total) {
    const scoreElement = document.querySelector(`#score-number-${quizId}`);
    const scoreCircle = document.querySelector(`#${quizId} .score-circle`);
    
    // Animate the score number
    let currentScore = 0;
    const increment = score / 20; // 20 steps
    const timer = setInterval(() => {
      currentScore += increment;
      if (currentScore >= score) {
        currentScore = score;
        clearInterval(timer);
      }
      scoreElement.textContent = Math.floor(currentScore);
    }, 50);
    
    // Animate the score circle
    if (scoreCircle) {
      scoreCircle.style.transform = 'scale(1.1)';
      setTimeout(() => {
        scoreCircle.style.transform = 'scale(1)';
      }, 300);
    }
  }

  // Ensure only one video plays at a time
  function bindExclusiveVideoPlayback() {
    const videos = document.querySelectorAll('video');
    if (!videos || videos.length === 0) return;
    videos.forEach(current => {
      // Remove existing listener by cloning node to avoid duplicate bindings
      const newCurrent = current;
      if (!newCurrent.__exclusiveBound) {
        newCurrent.addEventListener('play', () => {
          videos.forEach(other => {
            if (other !== newCurrent && !other.paused) {
              other.pause();
            }
          });
        });
        newCurrent.__exclusiveBound = true;
      }
    });
  }

  // Add quiz statistics function
  window.showQuizStats = function(quizId) {
    const quizHistory = JSON.parse(localStorage.getItem('quiz-history') || '[]');
    const lang = state.lang;
    
    if (quizHistory.length === 0) {
      alert(lang === 'en' ? 'No quiz attempts found.' : 'Nessun tentativo di quiz trovato.');
      return;
    }
    
    const totalAttempts = quizHistory.length;
    const bestScore = Math.max(...quizHistory.map(attempt => attempt.score));
    const averageScore = Math.round(quizHistory.reduce((sum, attempt) => sum + attempt.score, 0) / totalAttempts);
    const lastAttempt = quizHistory[quizHistory.length - 1];
    
    const statsHtml = `
      <div class="quiz-stats-modal">
        <div class="stats-content">
          <h3>${lang === 'en' ? 'Quiz Statistics' : 'Statistiche Quiz'}</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-label">${lang === 'en' ? 'Total Attempts:' : 'Tentativi Totali:'}</span>
              <span class="stat-value">${totalAttempts}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${lang === 'en' ? 'Best Score:' : 'Miglior Punteggio:'}</span>
              <span class="stat-value">${bestScore}/8</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${lang === 'en' ? 'Average Score:' : 'Punteggio Medio:'}</span>
              <span class="stat-value">${averageScore}/8</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${lang === 'en' ? 'Last Attempt:' : 'Ultimo Tentativo:'}</span>
              <span class="stat-value">${lastAttempt.score}/8</span>
            </div>
          </div>
          <button class="btn btn-primary" onclick="closeQuizStats()">${lang === 'en' ? 'Close' : 'Chiudi'}</button>
        </div>
      </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.querySelector('.quiz-stats-modal');
    if (existingModal) {
      existingModal.remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', statsHtml);
  };

  window.closeQuizStats = function() {
    const modal = document.querySelector('.quiz-stats-modal');
    if (modal) {
      modal.remove();
    }
  };

  function setTheme(theme) {
    state.theme = theme;
    localStorage.setItem('lnl-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  function bindDarkModeButton() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        setTheme(newTheme);
      });
    }
  }

  function initSubtitleSystem(lang) {
    console.log('🎬 Initializing subtitle system for language:', lang);
    
    const videos = document.querySelectorAll('video[data-video-id]');
    console.log('📹 Found videos:', videos.length);
    
    if (videos.length === 0) {
      console.warn('⚠️ No videos found with data-video-id attribute');
      return;
    }
    
    videos.forEach((video, index) => {
      const videoId = video.getAttribute('data-video-id');
      console.log(`🎥 Processing video ${index + 1}:`, { videoId, lang });
      
      if (window.SubtitleManager) {
        try {
          const subtitleManager = new window.SubtitleManager();
          const success = subtitleManager.init(video, videoId, lang);
          
          if (success) {
            console.log(`✅ Subtitle system initialized for video: ${videoId}`);
            // Store reference for potential language updates
            video.subtitleManager = subtitleManager;
          } else {
            console.error(`❌ Failed to initialize subtitle system for video: ${videoId}`);
          }
        } catch (error) {
          console.error(`❌ Error initializing subtitle system for video ${videoId}:`, error);
        }
      } else {
        console.error('❌ SubtitleManager class not found!');
      }
    });
  }

  function bindPerVideoLanguageControls() {
    const labels = uiText[state.lang] || uiText.en;
    document.querySelectorAll('.video-controls').forEach(container => {
      const scopeId = container.getAttribute('data-video-id');
      const baseId = scopeId.split('-')[0];
      const videoDropdown = container.querySelector('.lang-dropdown[data-type="video"]');
      const subDropdown = container.querySelector('.lang-dropdown[data-type="subtitle"]');
      const videoTrigger = videoDropdown?.querySelector('.lang-trigger');
      const subTrigger = subDropdown?.querySelector('.lang-trigger');
      const videoEl = document.querySelector(`video[data-video-id="${scopeId}"]`);

      if (videoTrigger) {
        const vlang = state.videoLangById[baseId] || state.videoLang;
        videoTrigger.textContent = `${labels.video}: ${vlang.toUpperCase()}`;
        videoTrigger.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('.lang-dropdown.open').forEach(el => { if (el!==videoDropdown) el.classList.remove('open'); });
          videoDropdown.classList.toggle('open');
        });
        videoDropdown.querySelectorAll('li').forEach(li => {
          li.addEventListener('click', () => {
            const val = li.getAttribute('data-value');
            if (!['en','it'].includes(val)) return;
            state.videoLangById[baseId] = val;
            localStorage.setItem('lnl-video-lang-by-id', JSON.stringify(state.videoLangById));
            renderContent(state.lang);
          });
        });
      }

      if (subTrigger) {
        const subLang = state.subtitleLangById[baseId] || state.subtitleLang;
        subTrigger.textContent = `${labels.subtitles}: ${subLang.toUpperCase()}`;
        subTrigger.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('.lang-dropdown.open').forEach(el => { if (el!==subDropdown) el.classList.remove('open'); });
          subDropdown.classList.toggle('open');
        });
        subDropdown.querySelectorAll('li').forEach(li => {
          li.addEventListener('click', () => {
            const val = li.getAttribute('data-value');
            if (!['en','it','tr'].includes(val)) return;
            state.subtitleLangById[baseId] = val;
            localStorage.setItem('lnl-subtitle-lang-by-id', JSON.stringify(state.subtitleLangById));
            const video = document.querySelector(`video[data-video-id="${scopeId}"]`);
            if (video && video.subtitleManager) {
              video.subtitleManager.updateLanguage(val);
            }
            // Update active mark
            subDropdown.querySelectorAll('li').forEach(x => x.classList.remove('active'));
            li.classList.add('active');
            // Update trigger label to reflect new selection
            if (subTrigger) {
              const lbls = uiText[state.lang] || uiText.en;
              subTrigger.textContent = `${lbls.subtitles}: ${val.toUpperCase()}`;
            }
            subDropdown.classList.remove('open');
          });
        });
      }

      // Optional: localized tooltips for built-in controls
      if (videoEl) {
        videoEl.setAttribute('title', `${labels.play}/${labels.pause}`);
        // Add a download button label via aria if a controls list is customized later
        videoEl.setAttribute('aria-label', `${labels.play}`);
      }
    });

    // Close on outside click
    document.addEventListener('click', () => {
      document.querySelectorAll('.lang-dropdown.open').forEach(el => el.classList.remove('open'));
    });
  }

  function init() {
    yearElement.textContent = new Date().getFullYear();
    bindLanguageButtons();
    bindDarkModeButton();
    setLanguage(state.lang);
    setTheme(state.theme);
    updateSelectorLabels();

    // Reusable dropdown setup
    const setupDropdown = (dropdownEl, triggerEl, values, getVal, setVal, onChange) => {
      if (!dropdownEl || !triggerEl) return;
      dropdownEl.querySelectorAll('li').forEach(li => {
        li.classList.toggle('active', li.getAttribute('data-value') === getVal());
      });
      triggerEl.addEventListener('click', (e) => {
        e.stopPropagation();
        // Close other dropdowns first to ensure only one open
        document.querySelectorAll('.lang-dropdown.open').forEach(el => {
          if (el !== dropdownEl) el.classList.remove('open');
        });
        dropdownEl.classList.toggle('open');
        triggerEl.setAttribute('aria-expanded', dropdownEl.classList.contains('open'));
      });
      dropdownEl.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
          const val = li.getAttribute('data-value');
          if (!values.includes(val)) return;
          setVal(val);
          dropdownEl.querySelectorAll('li').forEach(x => x.classList.remove('active'));
          li.classList.add('active');
          updateSelectorLabels();
          onChange(val);
          dropdownEl.classList.remove('open');
          triggerEl.setAttribute('aria-expanded', 'false');
        });
      });
    };

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      document.querySelectorAll('.lang-dropdown.open').forEach(el => el.classList.remove('open'));
      if (videoTrigger) videoTrigger.setAttribute('aria-expanded', 'false');
      if (subTrigger) subTrigger.setAttribute('aria-expanded', 'false');
    });

    // Header language dropdowns removed; per-video controls will be bound after render
    
    // Set initial toggle state
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
      darkModeToggle.checked = state.theme === 'dark';
    }
    
    // Initialize subtitle system
    setTimeout(() => {
      console.log('🚀 Initializing subtitle system...');
      
      if (window.SubtitleManager) {
        console.log('✅ SubtitleManager found!');
        initSubtitleSystem(state.lang);
      } else {
        console.log('❌ SubtitleManager not found, retrying...');
        // Try again after a short delay
        setTimeout(() => {
          if (window.SubtitleManager) {
            console.log('✅ SubtitleManager found on retry!');
            initSubtitleSystem(state.lang);
          } else {
            console.error('❌ SubtitleManager still not found after retry!');
          }
        }, 500);
      }
    }, 100);
    
    // Add event listeners for quiz answer changes
    document.addEventListener('change', function(e) {
      if (e.target.matches('input[type="radio"], input[type="checkbox"]') && e.target.closest('.quiz-container')) {
        const quizId = e.target.closest('.quiz-container').id;
        const questionIndex = parseInt(e.target.getAttribute('data-question'));
        
        // Update the answered indicator for this question
        const navButton = document.querySelector(`#${quizId} .question-nav-btn[data-question="${questionIndex}"]`);
        if (navButton) {
          const hasAnswer = document.querySelectorAll(`#${quizId} input[name="${e.target.name}"]:checked`).length > 0;
          navButton.classList.toggle('answered', hasAnswer);
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();


