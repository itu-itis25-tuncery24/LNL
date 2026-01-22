/**
 * Modern Video Subtitle System
 * Clean, reliable subtitle management with word highlighting
 */

class SubtitleManager {
  constructor() {
    this.video = null;
    this.videoId = null;
    this.language = 'en';
    this.subtitles = [];
    this.currentSubtitleIndex = -1;
    this.isActive = false;
    this.subtitleElement = null;
    this.subtitleArea = null;
  }

  /**
   * Initialize subtitle system for a video
   * @param {HTMLVideoElement} videoElement - The video element
   * @param {string} videoId - Unique identifier for the video
   * @param {string} language - Language code (en, it, tr)
   */
  init(videoElement, videoId, language = 'en') {
    console.log('🎬 Initializing SubtitleManager:', { videoId, language });
    
    // Validate inputs
    if (!videoElement) {
      console.error('❌ Video element is required');
      return false;
    }
    
    if (!videoId) {
      console.error('❌ Video ID is required');
      return false;
    }

    // Store references
    this.video = videoElement;
    this.videoId = videoId;
    this.language = language;

    // Load subtitles and setup UI
    this.loadSubtitles();
    this.setupSubtitleUI();
    this.bindEvents();

    console.log('✅ SubtitleManager initialized successfully');
    return true;
  }

  /**
   * Load subtitle data for the current video
   */
  async loadSubtitles() {
    try {
      // Use embedded subtitle data to avoid CORS issues
      const data = this.getEmbeddedSubtitleData();
      // Always resolve subtitles by base video id + selected subtitle language
      const baseId = this.videoId && this.videoId.includes('-')
        ? this.videoId.split('-')[0]
        : this.videoId;

      const preferred = this.language ? this.language.toUpperCase() : 'EN';
      // If user explicitly selects TR, do NOT silently fallback; show no-subtitle message instead
      const tryOrder = preferred === 'TR' ? ['TR'] : [preferred, ...['EN','IT'].filter(l => l !== preferred)];

      console.log('📝 Subtitle try order:', tryOrder.join(' → '));

      this.subtitles = [];
      for (const lang of tryOrder) {
        const key = `${baseId}-${lang}`;
        if (data.videos[key]?.subtitles?.length) {
          this.subtitles = data.videos[key].subtitles;
          console.log(`✅ Loaded ${this.subtitles.length} subtitles for ${key}`);
          break;
        } else {
          console.warn(`⚠️ No subtitles found for ${key}`);
        }
      }
      
    } catch (error) {
      console.error('❌ Failed to load subtitles:', error);
      this.subtitles = [];
    }
  }

  /**
   * Get embedded subtitle data
   * This avoids CORS issues when opening files directly in browser
   */
  getEmbeddedSubtitleData() {
    return {
      "videos": {
        "1-EN": {
          "title": "Opening – Introduction to the Program",
          "subtitles": [
            {"start": 0.06, "end": 0.22, "text": "Welcome!"},
            {"start": 0.22, "end": 5.00, "text": "In this module, we'll explore Loop—an open-source automated"},
            {"start": 5.00, "end": 6.14, "text": "insulin delivery system."},
            {"start": 6.14, "end": 10.24, "text": "Developed by the diabetes community, Loop offers a flexible,"},
            {"start": 10.24, "end": 15.07, "text": "customizable approach to managing blood sugar, providing an alternative"},
            {"start": 15.07, "end": 18.14, "text": "to commercial automated insulin delivery systems."},
            {"start": 18.14, "end": 23.01, "text": "Whether you're a healthcare professional, a caregiver, or a person with diabetes,"},
            {"start": 23.01, "end": 27.09, "text": "understanding Loop will help you make informed decisions about its use."},
            {"start": 27.09, "end": 28.00, "text": "Let's dive in!"}
          ]
        },
        "1-IT": {
          "title": "Apertura – Introduzione al Programma",
          "subtitles": [
            {"start": 0.04, "end": 5.17, "text": "Benvenuto! In questo modulo, esploreremo Loop—un sistema open-source di"},
            {"start": 5.17, "end": 7.19, "text": "sconsegna automatica di insulina"},
            {"start": 7.19, "end": 11.05, "text": "sviluppato dalla comunità diabetica."},
            {"start": 11.05, "end": 16.06, "text": "Loop offre un approccio flessibile e personalizzabile per gestire la glicemia,"},
            {"start": 16.06, "end": 21.11, "text": "fornendo un'alternativa ai sistemi commerciali di consegna automatica di insulina."},
            {"start": 21.11, "end": 23.51, "text": "Che tu sia un professionista sanitario,"},
            {"start": 23.51, "end": 27.36, "text": "un assistente o una persona con diabete, comprendere Loop ti aiuterà"},
            {"start": 27.36, "end": 32.18, "text": "a prendere decisioni informate sul suo utilizzo. Iniziamo!"}
          ]
        },
        "2-EN": {
          "title": "1.1 What is Loop? Core Principles",
          "subtitles": [
            {"start": 0.04, "end": 6.00, "text": "Loop automates insulin delivery using three key components: a CGM that continuously monitors"},
            {"start": 6.00, "end": 9.03, "text": "glucose levels, an insulin pump that delivers precise"},
            {"start": 9.03, "end": 13.02, "text": "doses of insulin, and an algorithm running on a smartphone to adjust"},
            {"start": 13.02, "end": 14.22, "text": "insulin delivery dynamically."},
            {"start": 14.22, "end": 19.05, "text": "This process helps maintain stable blood sugar levels with minimal manual input."}
          ]
        },
        "2-IT": {
          "title": "1.1 Cos'è Loop? Principi Fondamentali",
          "subtitles": [
            {"start": 0.01, "end": 0.20, "text": "Loop"},
            {"start": 0.20, "end": 7.13, "text": "automatizza la somministrazione di insulina utilizzando tre componenti chiave: un CGM"},
            {"start": 7.13, "end": 12.04, "text": "che monitora continuamente i livelli di glucosio, una pompa di insulina"},
            {"start": 12.04, "end": 17.21, "text": "che eroga dosi precise di insulina e un algoritmo in esecuzione su uno smartphone"},
            {"start": 17.21, "end": 22.15, "text": "per regolare dinamicamente la somministrazione di insulina. Questo processo"},
            {"start": 22.15, "end": 26.12, "text": "aiuta a mantenere livelli di zucchero nel sangue stabili con un"},
            {"start": 26.12, "end": 28.04, "text": "minimo intervento manuale."}
          ]
        },
        "3-EN": {
          "title": "1.2 Why Choose Automated Insulin Delivery (AID) Systems?",
          "subtitles": [
            {"start": 0.04, "end": 4.20, "text": "Automated insulin delivery systems, including Loop, help people with diabetes"},
            {"start": 4.20, "end": 8.10, "text": "by reducing the burden of constant manual insulin adjustments."},
            {"start": 8.10, "end": 13.15, "text": "Unlike Multiple Daily Injections (MDI), which require frequent corrections,"},
            {"start": 13.15, "end": 18.15, "text": "AID systems adjust insulin delivery in real-time, responding to glucose trends"},
            {"start": 18.15, "end": 21.15, "text": "and helping maintain stability throughout the day and night."}
          ]
        },
        "3-IT": {
          "title": "1.2 Perché scegliere i sistemi di somministrazione automatizzata di insulina (AID)?",
          "subtitles": [
            {"start": 0.00, "end": 4.19, "text": "I sistemi di somministrazione automatizzata di insulina (AID), incluso"},
            {"start": 4.19, "end": 9.15, "text": "Loop, aiutano le persone con diabete riducendo il carico delle correzioni"},
            {"start": 9.15, "end": 12.03, "text": "manuali continui dell'insulina."},
            {"start": 12.03, "end": 17.02, "text": "A differenza delle iniezioni multiple giornaliere (MDI), che richiedono frequenti"},
            {"start": 17.02, "end": 21.23, "text": "correzioni, i sistemi AID regolano la somministrazione di insulina in tempo"},
            {"start": 21.23, "end": 26.18, "text": "reale, rispondendo alle variazioni della glicemia e contribuendo a mantenere la"},
            {"start": 26.18, "end": 29.04, "text": "stabilità durante tutto il giorno e la notte."}
          ]
        },
        "4-EN": {
          "title": "1.3 Comparing Commercial AID Systems vs. Loop",
          "subtitles": [
            {"start": 0.04, "end": 4.20, "text": "Both commercial aid systems and Loop automate insulin delivery, helping"},
            {"start": 4.20, "end": 7.09, "text": "users maintain stable glucose levels."},
            {"start": 7.09, "end": 10.02, "text": "The main difference is accessibility and control."},
            {"start": 10.02, "end": 13.17, "text": "Commercial aid systems are regulated, provide structured support,"},
            {"start": 13.17, "end": 15.13, "text": "and require subscriptions."},
            {"start": 15.13, "end": 19.19, "text": "In contrast, Loop offers a flexible open source alternative,"},
            {"start": 19.19, "end": 24.08, "text": "allowing users to customize their settings but requiring them to take full"},
            {"start": 24.08, "end": 28.10, "text": "responsibility for installation, maintenance, and troubleshooting."}
          ]
        },
        "4-IT": {
          "title": "1.3 Confronto tra sistemi AID commerciali e Loop",
          "subtitles": [
            {"start": 0.00, "end": 5.10, "text": "Boseyunti e i sistemi AID commerciali che loop automatizzano la somministrazione di"},
            {"start": 5.10, "end": 10.06, "text": "insulina aiutando gli utenti a mantenere i livelli di glucosio stabili."},
            {"start": 10.06, "end": 14.07, "text": "La principale differenza riguarda l'accessibilità e il controllo."},
            {"start": 14.07, "end": 19.00, "text": "I sistemi AID commerciali sono regolati, offrono supporto strutturato"},
            {"start": 19.00, "end": 20.23, "text": "e richiedono abbonamenti."},
            {"start": 20.23, "end": 27.00, "text": "Al contrario, Loop rappresenta un'alternativa open source più flessibile,"},
            {"start": 27.00, "end": 32.08, "text": "permettendo agli utenti di personalizzare le impostazioni, ma richiedendo loro piena"},
            {"start": 32.08, "end": 35.14, "text": "responsabilità per l'installazione, la manutenzione e la"},
            {"start": 35.14, "end": 37.01, "text": "risoluzione dei problemi."}
          ]
        },
        "5-EN": {
          "title": "1.4 Who Can Use Loop? (Eligibility & Considerations)",
          "subtitles": [
            {"start": 0.04, "end": 3.18, "text": "Loop is an excellent choice for individuals who are comfortable"},
            {"start": 3.18, "end": 7.05, "text": "with technology, self management and troubleshooting."},
            {"start": 7.05, "end": 10.20, "text": "However, it requires a commitment to learning and maintenance."},
            {"start": 10.20, "end": 14.17, "text": "Unlike commercial aid systems, Loop users must build and update"},
            {"start": 14.17, "end": 16.16, "text": "their app independently."},
            {"start": 16.16, "end": 19.21, "text": "Before starting Loop, it's essential to evaluate whether this"},
            {"start": 19.21, "end": 23.19, "text": "level of involvement suits your lifestyle and diabetes management needs."}
          ]
        },
        "5-IT": {
          "title": "1.4 Chi può utilizzare Loop? (Idoneità e considerazioni)",
          "subtitles": [
            {"start": 0.00, "end": 6.08, "text": "Loop è un'ottima scelta per chi è a proprio agio con la tecnologia, la"},
            {"start": 6.08, "end": 13.08, "text": "gestione autonoma e la risoluzione dei problemi Tuttavia, richiede un impegno"},
            {"start": 13.08, "end": 16.17, "text": "nell'apprendimento e nella manutenzione."},
            {"start": 16.17, "end": 22.08, "text": "A differenza dei sistemi AIDE commerciali, gli utenti di Loop devono costruire e"},
            {"start": 22.08, "end": 25.18, "text": "aggiornare l'app in modo indipendente."},
            {"start": 25.18, "end": 30.10, "text": "Prima di iniziare a usare Loop, è fondamentale valutare se questo livello di"},
            {"start": 30.10, "end": 34.11, "text": "coinvolgimento si adatta al proprio stile di vita e alle esigenze"},
            {"start": 34.11, "end": 36.03, "text": "di gestione del diabete."}
          ]
        },
        "6-EN": {
          "title": "1.5 Safe Use & Best Practices for Loop Users",
          "subtitles": [
            {"start": 0.04, "end": 4.04, "text": "Loop is a reliable and effective tool for managing insulin delivery,"},
            {"start": 4.04, "end": 8.09, "text": "but like any technology, it requires some attention to ensure"},
            {"start": 8.09, "end": 10.10, "text": "it is functioning correctly."},
            {"start": 10.10, "end": 13.16, "text": "Checking your settings, making sure your phone and connected"},
            {"start": 13.16, "end": 17.07, "text": "devices are working, and being prepared to manage insulin"},
            {"start": 17.07, "end": 21.21, "text": "manually if needed will help ensure a safe and smooth experience."},
            {"start": 21.21, "end": 25.12, "text": "If something doesn't seem right, simple troubleshooting steps can"},
            {"start": 25.12, "end": 27.01, "text": "often resolve the issue quickly."}
          ]
        },
        "6-IT": {
          "title": "1.5 Uso sicuro e migliori pratiche per gli utenti di Loop",
          "subtitles": [
            {"start": 0.00, "end": 3.12, "text": "Loop è uno strumento affidabile ed efficace per la gestione della"},
            {"start": 3.12, "end": 8.05, "text": "somministrazione di insulina, ma, come qualsiasi tecnologia, richiede un po' di"},
            {"start": 8.05, "end": 12.05, "text": "attenzione per assicurarsi che funzioni correttamente."},
            {"start": 12.05, "end": 17.09, "text": "Controllare le impostazioni, verificare che il telefono e i dispositivi connessi"},
            {"start": 17.09, "end": 23.18, "text": "siano operativi e essere pronti a gestire l'insulina manualmente, se necessario,"},
            {"start": 23.18, "end": 27.21, "text": "contribuirà a garantire un'esperienza sicura e senza intoppi."},
            {"start": 27.21, "end": 32.22, "text": "Se qualcosa non sembra funzionare come dovrebbe, semplici passaggi di risoluzione"},
            {"start": 32.22, "end": 36.23, "text": "dei problemi possono spesso risolvere rapidamente la situazione."}
          ]
        },
        "7-EN": {
          "title": "Summary & Closing",
          "subtitles": [
            {"start": 0.02, "end": 3.17, "text": "Loop represents a new level of empowerment in diabetes management."},
            {"start": 3.17, "end": 7.15, "text": "By understanding its components, comparing it to commercial aid systems,"},
            {"start": 7.15, "end": 11.16, "text": "and evaluating safety considerations, users and healthcare providers"},
            {"start": 11.16, "end": 13.09, "text": "can make informed decisions."},
            {"start": 13.09, "end": 17.05, "text": "Stay connected with the Loop Docs and Loop and Learn community for ongoing support."}
          ]
        },
        "7-IT": {
          "title": "Riassunto e chiusura",
          "subtitles": [
            {"start": 0.04, "end": 5.07, "text": "Lupe rappresenta un nuovo L' ivelo di autonomia ne l' agestione del diabete"},
            {"start": 5.07, "end": 11.09, "text": "comprendendo issoi componenti confrontando lo conisistemi aid commerciali evalutando"},
            {"start": 11.09, "end": 14.12, "text": "le considerazioni sula sicurezza lutenti."},
            {"start": 14.12, "end": 19.14, "text": "Ei professionisti sanitari possono prendere decisioni informate rimani con"},
            {"start": 19.14, "end": 24.42, "text": "nesso con loop docs ela comuniti di loop and learn per un suporto continuo."}
          ]
        },
        "1-TR": {
          "title": "Açılış – Programa Giriş",
          "subtitles": [
            {"start": 0, "end": 3, "text": "Hoş geldiniz! Bu modülde."},
            {"start": 3, "end": 6, "text": "Loop'u keşfedeceğiz—diyabet topluluğu tarafından geliştirilen açık kaynaklı otomatik insülin dağıtım sistemi."},
            {"start": 6, "end": 9, "text": "Loop, kan şekeri yönetiminde esnek ve özelleştirilebilir bir yaklaşım sunar."},
            {"start": 9, "end": 12, "text": "ticari otomatik insülin dağıtım sistemlerine alternatif sağlar."},
            {"start": 12, "end": 15, "text": "İster sağlık profesyoneli, ister bakıcı, ister diyabetli bir kişi olun."},
            {"start": 15, "end": 18, "text": "Loop'u anlamak, kullanımı hakkında bilinçli kararlar vermenize yardımcı olacaktır."},
            {"start": 18, "end": 21, "text": "Hadi başlayalım!"}
          ]
        },
        "2-TR": {
          "title": "1.1 Loop Nedir? Temel İlkeler",
          "subtitles": [
            {"start": 0, "end": 4, "text": "Loop, üç temel bileşen kullanarak insülin dağıtımını otomatikleştirir."},
            {"start": 4, "end": 7, "text": "bir CGM, bir insülin pompası ve iPhone'da çalışan bir algoritma."},
            {"start": 7, "end": 10, "text": "Loop sadece Apple cihazları için tasarlanmıştır."},
            {"start": 10, "end": 13, "text": "çalışması için iPhone gerektirir."},
            {"start": 13, "end": 16, "text": "Loop, üç temel bileşen kullanarak insülin dağıtımını otomatikleştirir."},
            {"start": 16, "end": 19, "text": "sürekli glikoz seviyelerini izleyen bir CGM."},
            {"start": 19, "end": 22, "text": "hassas insülin dozları veren bir insülin pompası."},
            {"start": 22, "end": 25, "text": "ve insülin dağıtımını dinamik olarak ayarlamak için akıllı telefonda çalışan bir algoritma."},
            {"start": 25, "end": 28, "text": "Bu süreç, minimal manuel girişle stabil kan şekeri seviyelerini korumaya yardımcı olur."}
          ]
        },
        "3-TR": {
          "title": "1.2 Neden Otomatik İnsülin Dağıtım Sistemleri?",
          "subtitles": [
            {"start": 0.04, "end": 4.20, "text": "Otomatik insülin dağıtım sistemleri, Loop dahil,"},
            {"start": 4.20, "end": 8.10, "text": "sürekli manuel ayarlama yükünü azaltmaya yardımcı olur."},
            {"start": 8.10, "end": 13.15, "text": "MDI'ye kıyasla daha az düzeltme gerektirir."},
            {"start": 13.15, "end": 18.15, "text": "AID sistemleri glikoz eğilimlerine göre gerçek zamanlı ayarlamalar yapar"},
            {"start": 18.15, "end": 21.15, "text": "ve gün boyu/gece boyunca dengeyi korumaya yardımcı olur."}
          ]
        },
        "4-TR": {
          "title": "1.3 Ticari AID Sistemleri vs. Loop",
          "subtitles": [
            {"start": 0.04, "end": 4.20, "text": "Hem ticari AID sistemleri hem de Loop insülin dağıtımını otomatikleştirir,"},
            {"start": 4.20, "end": 7.09, "text": "kullanıcıların glikozu stabil tutmasına yardımcı olur."},
            {"start": 7.09, "end": 10.02, "text": "Ana fark erişilebilirlik ve kontroldür."},
            {"start": 10.02, "end": 13.17, "text": "Ticari sistemler regüle edilir ve yapılandırılmış destek sağlar."},
            {"start": 13.17, "end": 19.19, "text": "Loop ise esnek, açık kaynaklı bir alternatiftir"},
            {"start": 19.19, "end": 24.08, "text": "ve kurulum/bakım/sorun giderme sorumluluğu kullanıcıdadır."}
          ]
        },
        "5-TR": {
          "title": "1.4 Kimler Loop Kullanabilir?",
          "subtitles": [
            {"start": 0.04, "end": 3.18, "text": "Loop teknoloji, öz-yönetim ve sorun giderme konusunda rahat olanlar için iyidir."},
            {"start": 3.18, "end": 7.05, "text": "Ancak öğrenme ve bakım taahhüdü gerektirir."},
            {"start": 7.05, "end": 10.20, "text": "Ticari sistemlerden farklı olarak uygulamayı kendiniz oluşturup güncellersiniz."},
            {"start": 10.20, "end": 14.17, "text": "Başlamadan önce yaşam tarzınıza uyup uymadığını değerlendirin."}
          ]
        },
        "6-TR": {
          "title": "1.5 Güvenli Kullanım ve En İyi Uygulamalar",
          "subtitles": [
            {"start": 0.04, "end": 4.04, "text": "Loop etkilidir ancak teknolojide her zaman dikkat gerekir."},
            {"start": 4.04, "end": 8.09, "text": "Ayarları kontrol edin, bağlı cihazların çalıştığını doğrulayın."},
            {"start": 8.09, "end": 10.10, "text": "Gerekirse manuel insülin için hazır olun."},
            {"start": 10.10, "end": 17.07, "text": "Basit sorun giderme adımları çoğu sorunu hızlıca çözebilir."}
          ]
        },
        "7-TR": {
          "title": "Özet ve Kapanış",
          "subtitles": [
            {"start": 0.02, "end": 3.17, "text": "Loop diyabet yönetiminde güçlenmeyi temsil eder."},
            {"start": 3.17, "end": 7.15, "text": "Bileşenleri anlamak ve ticari sistemlerle karşılaştırmak"},
            {"start": 7.15, "end": 11.16, "text": "güvenlik hususlarını değerlendirmek karar vermeye yardımcı olur."},
            {"start": 11.16, "end": 13.09, "text": "Sürekli destek için doküman ve topluluğa bağlı kalın."}
          ]
        }
      }
    };
  }

  /**
   * Setup the subtitle UI elements
   */
  setupSubtitleUI() {
    // Find or create subtitle area
    this.subtitleArea = document.querySelector(`.subtitle-area[data-video-id="${this.videoId}"]`);
    
    if (!this.subtitleArea) {
      console.warn(`⚠️ No subtitle area found for video ${this.videoId}, creating one...`);
      this.createSubtitleArea();
    }

    if (this.subtitleArea) {
      this.subtitleElement = this.subtitleArea.querySelector('.subtitle-text');
    
    if (!this.subtitleElement) {
        console.warn(`⚠️ No subtitle text element found, creating one...`);
        this.createSubtitleElement();
    }

    // Show the subtitle area
      this.subtitleArea.style.display = 'block';
      
      // Display initial message
      this.displayInitialMessage();
    }
  }

  /**
   * Create subtitle area if it doesn't exist
   */
  createSubtitleArea() {
    const videoContainer = this.video.closest('.video-container');
    if (videoContainer) {
      const subtitleArea = document.createElement('div');
      subtitleArea.className = 'subtitle-area';
      subtitleArea.setAttribute('data-video-id', this.videoId);
      
      const subtitleText = document.createElement('div');
      subtitleText.className = 'subtitle-text';
      subtitleArea.appendChild(subtitleText);
      
      videoContainer.parentNode.insertBefore(subtitleArea, videoContainer.nextSibling);
      
      this.subtitleArea = subtitleArea;
      this.subtitleElement = subtitleText;
    }
  }

  /**
   * Create subtitle text element if it doesn't exist
   */
  createSubtitleElement() {
    if (this.subtitleArea) {
      const subtitleText = document.createElement('div');
      subtitleText.className = 'subtitle-text';
      this.subtitleArea.appendChild(subtitleText);
      this.subtitleElement = subtitleText;
    }
  }

  /**
   * Display initial message based on subtitle availability
   */
  displayInitialMessage() {
    if (!this.subtitleElement) return;

    if (this.subtitles.length === 0) {
      this.subtitleElement.innerHTML = `
        <div class="subtitle-status">
          <span class="status-icon">⚠️</span>
          <span class="status-text">Alt yazı bulunamadı</span>
          <div class="status-details">Video: ${this.videoId}, Dil: ${this.language}</div>
        </div>
      `;
    } else {
      // Clear the element - no status message when subtitles are available
      this.subtitleElement.innerHTML = '';
    }
  }

  /**
   * Bind video events
   */
  bindEvents() {
    if (!this.video) return;

    // Time update event for subtitle synchronization
    this.video.addEventListener('timeupdate', () => {
      this.updateSubtitles();
    });

    // Play event
    this.video.addEventListener('play', () => {
      this.isActive = true;
      this.hideStatusMessage();
    });

    // Pause event
    this.video.addEventListener('pause', () => {
      this.isActive = false;
    });

    // Ended event
    this.video.addEventListener('ended', () => {
      this.isActive = false;
      this.clearSubtitles();
    });

    // Seeking event
    this.video.addEventListener('seeked', () => {
      this.updateSubtitles();
    });
  }

  /**
   * Update subtitles based on current video time
   */
  updateSubtitles() {
    if (!this.isActive || !this.subtitleElement || this.subtitles.length === 0) {
      return;
    }

    const currentTime = this.video.currentTime;
    const subtitleIndex = this.findCurrentSubtitle(currentTime);

    if (subtitleIndex !== -1) {
      // Always update the display for the current subtitle to show word progression
      this.currentSubtitleIndex = subtitleIndex;
      this.displaySubtitle(subtitleIndex);
    } else if (this.currentSubtitleIndex !== -1) {
      // No subtitle for current time, clear display
      this.clearSubtitles();
      this.currentSubtitleIndex = -1;
    }
  }

  /**
   * Find the subtitle that should be displayed at the given time
   * @param {number} currentTime - Current video time in seconds
   * @returns {number} Index of the subtitle or -1 if none found
   */
  findCurrentSubtitle(currentTime) {
    return this.subtitles.findIndex(subtitle => 
      currentTime >= subtitle.start && currentTime <= subtitle.end
    );
  }

  /**
   * Display a specific subtitle with word highlighting
   * @param {number} index - Index of the subtitle to display
   */
  displaySubtitle(index) {
    const subtitle = this.subtitles[index];
    if (!subtitle || !this.subtitleElement) return;

    const words = subtitle.text.split(' ');
    const currentTime = this.video.currentTime;
    const subtitleDuration = subtitle.end - subtitle.start;
    const elapsedTime = currentTime - subtitle.start;
    
    // Calculate progress (0 to 1)
    const progress = Math.max(0, Math.min(1, elapsedTime / subtitleDuration));
    
    // Calculate which word should be active based on progress
    // This ensures all words get highlighted progressively
    const activeWordIndex = Math.floor(progress * words.length);
    
    // Ensure we don't go beyond the word count
    const finalActiveIndex = Math.min(activeWordIndex, words.length - 1);

    const html = words.map((word, i) => {
      const isActive = i <= finalActiveIndex;
      const className = isActive ? 'word active' : 'word';
      return `<span class="${className}">${word}</span>`;
    }).join(' ');

    this.subtitleElement.innerHTML = html;
    
    // Debug logging for troubleshooting
    console.log(`🎬 Subtitle ${index}: "${subtitle.text}"`);
    console.log(`⏱️ Time: ${currentTime.toFixed(2)}s, Elapsed: ${elapsedTime.toFixed(2)}s, Duration: ${subtitleDuration.toFixed(2)}s`);
    console.log(`📊 Progress: ${(progress * 100).toFixed(1)}%, Active word: ${finalActiveIndex + 1}/${words.length}`);
    console.log(`🔤 Words: [${words.map((w, i) => i <= finalActiveIndex ? `"${w}"` : w).join(', ')}]`);
    console.log(`🎯 Active words: ${words.slice(0, finalActiveIndex + 1).join(' ')}`);
    console.log(`⏭️ Remaining words: ${words.slice(finalActiveIndex + 1).join(' ')}`);
  }

  /**
   * Clear current subtitle display
   */
  clearSubtitles() {
    if (this.subtitleElement) {
        this.subtitleElement.innerHTML = '';
      }
    }

  /**
   * Hide status message when video starts playing
   */
  hideStatusMessage() {
    // No longer needed since we don't show status messages when subtitles are available
    // This function is kept for compatibility but does nothing
  }

  /**
   * Show status message
   */
  showStatusMessage() {
    // No longer needed since we don't show status messages when subtitles are available
    // This function is kept for compatibility but does nothing
  }

  /**
   * Update language and reload subtitles
   * @param {string} newLanguage - New language code
   */
  async updateLanguage(newLanguage) {
    if (newLanguage !== this.language) {
      this.language = newLanguage;
      await this.loadSubtitles();
      this.displayInitialMessage();
    }
  }

  /**
   * Get current subtitle information
   * @returns {Object} Current subtitle data
   */
  getCurrentSubtitle() {
    if (this.currentSubtitleIndex >= 0 && this.currentSubtitleIndex < this.subtitles.length) {
      return this.subtitles[this.currentSubtitleIndex];
    }
    return null;
  }

  /**
   * Get all subtitles for the current video
   * @returns {Array} Array of subtitle objects
   */
  getAllSubtitles() {
    return [...this.subtitles];
  }

  /**
   * Check if subtitles are available
   * @returns {boolean} True if subtitles are loaded
   */
  hasSubtitles() {
    return this.subtitles.length > 0;
  }

  /**
   * Destroy the subtitle manager and clean up
   */
  destroy() {
    if (this.subtitleArea) {
      this.subtitleArea.style.display = 'none';
    }
    
    if (this.subtitleElement) {
      this.subtitleElement.innerHTML = '';
    }

    this.video = null;
    this.subtitles = [];
    this.currentSubtitleIndex = -1;
    this.isActive = false;
  }
}

// Export for global usage
window.SubtitleManager = SubtitleManager;

// Auto-initialize subtitle system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Subtitle system ready');
});