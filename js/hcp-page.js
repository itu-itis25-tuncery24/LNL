// HCP Page specific functionality
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize theme toggle functionality
  initializeThemeToggle();
  
  // Initialize language switcher
  initializeLanguageSwitcher();
  
  // Initialize navigator functionality
  initializeNavigator();
  
  // Initialize countries list
  initializeCountriesList();
});

// Theme toggle functionality
function initializeThemeToggle() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  darkModeToggle.checked = savedTheme === 'dark';
  
  // Theme toggle event listener
  darkModeToggle.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
}

// Language switcher functionality
function initializeLanguageSwitcher() {
  const floatingLangBtn = document.getElementById('floatingLangBtn');
  const langOptions = document.getElementById('langOptions');
  const langSwitcher = document.getElementById('floatingLangSwitcher');
  
  // Toggle language options
  floatingLangBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitcher.classList.toggle('open');
  });
  
  // Close language options when clicking outside
  document.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove('open');
    }
  });
  
  // Language option click handlers
  const langButtons = document.querySelectorAll('.lang-option-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      
      // Remove active class from all buttons
      langButtons.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Close the language switcher
      langSwitcher.classList.remove('open');
      
      // Update page content based on selected language
      updatePageLanguage(lang);
      console.log('Language switched to:', lang);
    });
  });
  
  // Set default active language
  const defaultLang = 'en';
  const defaultBtn = document.querySelector(`[data-lang="${defaultLang}"]`);
  if (defaultBtn) {
    defaultBtn.classList.add('active');
  }
  
  // Initialize with default language
  updatePageLanguage(defaultLang);
}

// Translation object for dynamic content
const translations = {
  en: {
    'Healthcare Providers in': 'Healthcare Providers in',
    'No healthcare providers found for this country.': 'No healthcare providers found for this country.',
    'Provider Details': 'Provider Details',
    'Name': 'Name',
    'Specialty': 'Specialty',
    'Location': 'Location',
    'Hospital/Institution': 'Hospital/Institution',
    'Contact Information': 'Contact Information',
    'Additional Information': 'Additional Information',
    'Notes': 'Notes',
    'Recommended by': 'Recommended by',
    'Not provided': 'Not provided',
    'Not specified': 'Not specified',
    'Specialty not specified': 'Specialty not specified',
    'Name not provided': 'Name not provided',
    'View Providers': 'View Providers',
    'provider': 'provider',
    'providers': 'providers'
  },
  tr: {
    'Healthcare Providers in': 'Sağlık Hizmet Sağlayıcıları:',
    'No healthcare providers found for this country.': 'Bu ülke için sağlık hizmet sağlayıcısı bulunamadı.',
    'Provider Details': 'Sağlayıcı Detayları',
    'Name': 'İsim',
    'Specialty': 'Uzmanlık',
    'Location': 'Konum',
    'Hospital/Institution': 'Hastane/Kurum',
    'Contact Information': 'İletişim Bilgisi',
    'Additional Information': 'Ek Bilgiler',
    'Notes': 'Notlar',
    'Recommended by': 'Tavsiye eden',
    'Not provided': 'Belirtilmemiş',
    'Not specified': 'Belirtilmemiş',
    'Specialty not specified': 'Uzmanlık belirtilmemiş',
    'Name not provided': 'İsim belirtilmemiş',
    'View Providers': 'Sağlayıcıları Gör',
    'provider': 'sağlayıcı',
    'providers': 'sağlayıcı'
  },
  it: {
    'Healthcare Providers in': 'Fornitori di Assistenza Sanitaria in',
    'No healthcare providers found for this country.': 'Nessun fornitore di assistenza sanitaria trovato per questo paese.',
    'Provider Details': 'Dettagli del Fornitore',
    'Name': 'Nome',
    'Specialty': 'Specialità',
    'Location': 'Posizione',
    'Hospital/Institution': 'Ospedale/Istituzione',
    'Contact Information': 'Informazioni di Contatto',
    'Additional Information': 'Informazioni Aggiuntive',
    'Notes': 'Note',
    'Recommended by': 'Raccomandato da',
    'Not provided': 'Non fornito',
    'Not specified': 'Non specificato',
    'Specialty not specified': 'Specialità non specificata',
    'Name not provided': 'Nome non fornito',
    'View Providers': 'Visualizza Fornitori',
    'provider': 'fornitore',
    'providers': 'fornitori'
  }
};

// Get translation for current language
function getTranslation(key, lang = null) {
  const currentLang = lang || getCurrentLanguage();
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

// Get current language from active button
function getCurrentLanguage() {
  const activeBtn = document.querySelector('.lang-option-btn.active');
  return activeBtn ? activeBtn.getAttribute('data-lang') : 'en';
}

// Update page content based on selected language
function updatePageLanguage(lang) {
  // Update all elements with data attributes
  const elements = document.querySelectorAll('[data-en], [data-tr], [data-it]');
  elements.forEach(element => {
    const text = element.getAttribute(`data-${lang}`);
    if (text) {
      element.textContent = text;
    }
  });
  
  // Update placeholder attributes
  const inputs = document.querySelectorAll('[data-en-placeholder], [data-tr-placeholder], [data-it-placeholder]');
  inputs.forEach(input => {
    const placeholder = input.getAttribute(`data-${lang}-placeholder`);
    if (placeholder) {
      input.placeholder = placeholder;
    }
  });
  
  // Update HCP search placeholder if visible
  const hcpSearchInput = document.getElementById('hcpSearch');
  if (hcpSearchInput && hcpSearchInput.offsetParent !== null) {
    const hcpPlaceholder = hcpSearchInput.getAttribute(`data-${lang}-placeholder`);
    if (hcpPlaceholder) {
      hcpSearchInput.placeholder = hcpPlaceholder;
    }
  }
  
  // Update dynamic HCP content if visible
  if (window.hcpMap && window.hcpMap.currentCountry) {
    const countryTitle = document.getElementById('countryTitle');
    if (countryTitle) {
      countryTitle.textContent = `${getTranslation('Healthcare Providers in', lang)} ${window.hcpMap.currentCountry}`;
    }
  }
  
  // Update country cards
  updateCountryCards();
}

// Navigator functionality
function initializeNavigator() {
  const countrySearch = document.getElementById('countrySearch');
  const resetFilters = document.getElementById('resetFilters');
  
  // Update statistics
  updateStatistics();
  
  // Search functionality
  countrySearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterCountries(searchTerm);
  });
  
  // Reset search
  resetFilters.addEventListener('click', () => {
    countrySearch.value = '';
    resetCountryFilters();
  });
}

function updateStatistics() {
  const countries = getAllCountries();
  let totalProviders = 0;
  let activeCountries = 0;
  
  countries.forEach(country => {
    const providers = getCountryData(country);
    totalProviders += providers.length;
    if (providers.length > 0) {
      activeCountries++;
    }
  });
  
  document.getElementById('totalCountries').textContent = countries.length;
  document.getElementById('totalProviders').textContent = totalProviders;
  document.getElementById('activeCountries').textContent = activeCountries;
}

function filterCountries(searchTerm) {
  const countries = getAllCountries();
  const searchLower = searchTerm.toLowerCase();
  
  // Country name mapping from CSV to SVG
  const countryNameMap = {
    'Turkey': 'Türkiye', // CSV'de Türkiye, SVG'de Turkey
    'United Kingdom': 'England / Great Britain', // CSV'de England / Great Britain
    'Netherlands': 'The Netherlands / Nederland', // CSV'de The Netherlands / Nederland
    'Czech Republic': 'Czech republic' // CSV'de Czech republic
  };
  
  countries.forEach(country => {
    // Get the search name (CSV name)
    const searchName = countryNameMap[country] || country;
    
    // Find country elements by both class and id
    let countryElements = document.querySelectorAll(`.${country}`);
    
    // Special case for United Kingdom (has space in class name)
    if (country === 'United Kingdom') {
      countryElements = document.querySelectorAll('path[class="United Kingdom"]');
    }
    
    // Special case for United States (has space in class name)
    if (country === 'United States') {
      countryElements = document.querySelectorAll('path[class="United States"]');
    }
    
    // Special case for New Zealand (has space in class name)
    if (country === 'New Zealand') {
      countryElements = document.querySelectorAll('path[class="New Zealand"]');
    }
    
    // If no elements found by class, try by id (country code mapping)
    if (countryElements.length === 0) {
      const countryCodeMap = {
        'Austria': 'AT',
        'Brazil': 'BR',
        'Germany': 'DE',
        'Spain': 'ES',
        'Italy': 'IT',
        'Netherlands': 'NL',
        'Poland': 'PL',
        'Portugal': 'PT',
        'Slovenia': 'SI',
        'Sweden': 'SE',
        'Switzerland': 'CH',
        'Czech Republic': 'CZ',
        'Colombia': 'CO',
        'Israel': 'IL',
        'Argentina': 'AR',
        'Australia': 'AU',
        'Canada': 'CA',
        'Chile': 'CL',
        'Denmark': 'DK',
        'Greece': 'GR',
        'Japan': 'JP',
        'New Zealand': 'NZ',
        'Norway': 'NO',
        'Saudi Arabia': 'SA',
        'South Korea': 'KR',
        'Turkey': 'TR',
        'United Arab Emirates': 'AE',
        'United States': 'US'
      };
      
      const countryCode = countryCodeMap[country];
      if (countryCode) {
        countryElements = document.querySelectorAll(`#${countryCode}`);
      }
    }
    
    // Filter based on search term - search both country name and CSV name
    const shouldShow = searchTerm === '' || 
      country.toLowerCase().includes(searchLower) || 
      searchName.toLowerCase().includes(searchLower);
    
    // Show/hide country
    countryElements.forEach(element => {
      if (shouldShow) {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
      } else {
        element.style.opacity = '0.3';
        element.style.pointerEvents = 'none';
      }
    });
  });
  
  // Also filter the countries list below the map
  filterCountriesList(searchTerm);
}

function filterCountriesList(searchTerm) {
  const countryCards = document.querySelectorAll('.country-card');
  const searchLower = searchTerm.toLowerCase();
  
  // Country name mapping from CSV to SVG
  const countryNameMap = {
    'Turkey': 'Türkiye', // CSV'de Türkiye, SVG'de Turkey
    'United Kingdom': 'England / Great Britain', // CSV'de England / Great Britain
    'Netherlands': 'The Netherlands / Nederland', // CSV'de The Netherlands / Nederland
    'Czech Republic': 'Czech republic' // CSV'de Czech republic
  };
  
  countryCards.forEach(card => {
    const countryName = card.querySelector('.country-name').textContent;
    const searchName = countryNameMap[countryName] || countryName;
    
    const shouldShow = searchTerm === '' || 
      countryName.toLowerCase().includes(searchLower) || 
      searchName.toLowerCase().includes(searchLower);
    
    card.style.display = shouldShow ? 'block' : 'none';
  });
}

function resetCountryFilters() {
  const countries = getAllCountries();
  
  countries.forEach(country => {
    // Find country elements by both class and id
    let countryElements = document.querySelectorAll(`.${country}`);
    
            // Special case for United Kingdom (has space in class name)
            if (country === 'United Kingdom') {
              countryElements = document.querySelectorAll('path[class="United Kingdom"]');
            }
            
            // Special case for United States (has space in class name)
            if (country === 'United States') {
              countryElements = document.querySelectorAll('path[class="United States"]');
            }
            
            // Special case for New Zealand (has space in class name)
            if (country === 'New Zealand') {
              countryElements = document.querySelectorAll('path[class="New Zealand"]');
            }
    
    // If no elements found by class, try by id (country code mapping)
    if (countryElements.length === 0) {
              const countryCodeMap = {
                'Austria': 'AT',
                'Brazil': 'BR',
                'Germany': 'DE',
                'Spain': 'ES',
                'Italy': 'IT',
                'Netherlands': 'NL',
                'Poland': 'PL',
                'Portugal': 'PT',
                'Slovenia': 'SI',
                'Sweden': 'SE',
                'Switzerland': 'CH',
                'Czech Republic': 'CZ',
                'Colombia': 'CO',
                'Israel': 'IL',
                'Argentina': 'AR',
                'Australia': 'AU',
                'Canada': 'CA',
                'Chile': 'CL',
                'Denmark': 'DK',
                'Greece': 'GR',
                'Japan': 'JP',
                'New Zealand': 'NZ',
                'Norway': 'NO',
                'Saudi Arabia': 'SA',
                'South Korea': 'KR',
                'Turkey': 'TR',
                'United Arab Emirates': 'AE',
                'United States': 'US'
              };
      
      const countryCode = countryCodeMap[country];
      if (countryCode) {
        countryElements = document.querySelectorAll(`#${countryCode}`);
      }
    }
    
    countryElements.forEach(element => {
      element.style.opacity = '1';
      element.style.pointerEvents = 'auto';
    });
  });
  
  // Also reset the countries list below the map
  const countryCards = document.querySelectorAll('.country-card');
  countryCards.forEach(card => {
    card.style.display = 'block';
  });
}

// Countries list functionality
function initializeCountriesList() {
  const countriesGrid = document.getElementById('countriesGrid');
  const countries = getAllCountries();
  
  // Sort countries by provider count (descending)
  const sortedCountries = countries.sort((a, b) => {
    const aCount = getCountryData(a).length;
    const bCount = getCountryData(b).length;
    return bCount - aCount;
  });
  
  // Create country cards
  sortedCountries.forEach(country => {
    const providers = getCountryData(country);
    const providerCount = providers.length;
    
    if (providerCount > 0) {
      const card = createCountryCard(country, providerCount);
      countriesGrid.appendChild(card);
    }
  });
}

function createCountryCard(country, providerCount) {
  const card = document.createElement('div');
  card.className = 'country-card';
  
  // Get color based on provider count
  const getColorIntensity = (count) => {
    if (count === 0) return '#f0f0f0';
    if (count <= 2) return '#d4f4dd';
    if (count <= 5) return '#a7f3d0';
    if (count <= 10) return '#6ee7b7';
    if (count <= 20) return '#34d399';
    return '#22c55e';
  };
  
  const color = getColorIntensity(providerCount);
  
  // Get current language for translations
  const currentLang = getCurrentLanguage();
  
  // Get color label with translation support
  const getColorLabel = (count, lang) => {
    if (count === 0) return getTranslation('No Providers', lang);
    if (count <= 2) return getTranslation('Limited', lang);
    if (count <= 5) return getTranslation('Some', lang);
    if (count <= 10) return getTranslation('Good', lang);
    if (count <= 20) return getTranslation('Excellent', lang);
    if (count <= 50) return getTranslation('Very Good', lang);
    if (count <= 100) return getTranslation('Outstanding', lang);
    return getTranslation('Exceptional', lang);
  };
  
  const colorLabel = getColorLabel(providerCount, currentLang);
  const providerText = providerCount === 1 ? 
    getTranslation('provider', currentLang) : 
    getTranslation('providers', currentLang);
  
  card.innerHTML = `
    <div class="country-header">
      <h4 class="country-name">${country}</h4>
      <div class="provider-count">${providerCount}</div>
    </div>
    <div class="country-info">
      <div class="color-indicator" style="background-color: ${color};"></div>
      <span class="color-label">${colorLabel} (${providerCount} ${providerText})</span>
    </div>
    <div class="country-action">
      <span class="action-text">${getTranslation('View Providers', currentLang)}</span>
    </div>
  `;
  
  // Add click event
  card.addEventListener('click', () => {
    if (window.hcpMap) {
      window.hcpMap.showHCPList(country);
    }
  });
  
  return card;
}

// Update country cards when language changes
function updateCountryCards() {
  const countriesGrid = document.getElementById('countriesGrid');
  if (!countriesGrid) return;
  
  // Clear and rebuild all cards
  countriesGrid.innerHTML = '';
  initializeCountriesList();
}
