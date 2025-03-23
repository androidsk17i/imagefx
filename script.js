// Common photographic terms and qualities to include in descriptions
const photoElements = {
    // Using more lightweight objects with minimal comments to reduce parsing time
    styles: [
        'portrait photography', 'lifestyle photography', 'documentary photography', 
        'editorial photography', 'street photography', 'fashion photography',
        'fine art photography', 'candid photography', 'environmental portrait',
        'black and white photography', 'high fashion photography', 'commercial photography',
        'natural light photography', 'studio portrait', 'glamour photography',
        'conceptual photography',
        // 20 more options
        'beauty photography', 'cinematic portrait', 'architectural photography',
        'minimalist portrait', 'silhouette portrait', 'close-up portrait',
        'vintage style portrait', 'surreal portrait', 'golden hour portrait',
        'film noir style', 'double exposure portrait', 'infrared photography',
        'tonal portrait', 'contour photography', 'urban portrait', 
        'underwater photography', 'drone photography', 'lens flare photography',
        'pop art style', 'color splash technique',
        // 20 additional options
        'boudoir photography', 'still life photography', 'abstract photography',
        'photographic collage', 'low light portraiture', 'panoramic portrait',
        'fisheye perspective', 'split-tone portrait', 'experimental photography',
        'photorealistic style', 'hyper-detailed realism', 'artistic nude',
        'retro Polaroid style', 'psychedelic style', 'multiple exposure technique',
        'glitch art style', 'holographic effect', 'lomography style',
        'daguerreotype style', 'tintype reproduction'
    ],
    
    settings: [
        'rustic outdoor setting', 'modern urban environment', 'pristine beach setting', 
        'lush green park', 'tranquil garden', 'professional studio', 'city street', 
        'mountain landscape', 'countryside setting', 'traditional wooden house',
        'luxury indoor space', 'industrial warehouse', 'historic architecture',
        'minimalist white room', 'abandoned building', 'rooftop with city skyline',
        'natural forest', 'desert landscape', 'cozy cafe interior',
        'elegant hotel lobby', 'vintage train station',
        // 20 more options
        'misty lake', 'medieval castle', 'futuristic cityscape', 'dimly lit bar',
        'art gallery', 'neon-lit street', 'ancient ruins', 'botanical garden',
        'subway station', 'victorian mansion', 'coastal cliffs', 'japanese zen garden',
        'tropical rainforest', 'retro diner', 'cobblestone alley', 'grand theater',
        'luxury yacht', 'private jet interior', 'artist loft', 'winter wonderland scene',
        // 20 additional options
        'underwater cave', 'hot air balloon', 'space station interior', 'crystal cave',
        'enchanted forest', 'carnival at night', 'cyberpunk street', 'floating market',
        'glacial landscape', 'derelict amusement park', 'middle eastern bazaar',
        'antique library', 'gothic cathedral', 'desert oasis', 'mountain hot spring',
        'bamboo forest', 'volcanic landscape', 'misty waterfall', 'coral reef',
        'mediterranean villa'
    ],
    
    lighting: [
        'soft natural daylight', 'golden hour sunlight', 'low-key dramatic shadows', 
        'high-key bright lighting', 'cinematic lighting', 'rim lighting with backlight',
        'studio three-point lighting', 'moody directional lighting', 'split lighting',
        'butterfly lighting', 'blue hour twilight', 'harsh midday sun',
        'dramatic chiaroscuro', 'diffused window light', 'neon accent lighting',
        'silhouette backlighting', 'soft box lighting', 'subtle gradient lighting',
        // 20 more options
        'clamshell lighting', 'broad lighting', 'short lighting', 'rembrandt lighting',
        'loop lighting', 'paramount lighting', 'cross lighting', 'ambient fill light', 
        'subtractive lighting', 'dramatic film noir lighting', 'mixed color temperature',
        'practical lighting', 'key light only', 'bounce lighting', 'ring light effect',
        'spotlighting', 'fresnel lighting', 'northern light', 'candlelight ambience',
        'hard directional lighting',
        // 20 additional options
        'sunset rim lighting', 'fractured light through trees', 'underwater lighting',
        'light painting technique', 'starlight exposure', 'fire-lit scene',
        'bioluminescent lighting', 'light leak effect', 'cathedral window light',
        'cave lighting', 'dappled light pattern', 'city light pollution glow',
        'moonlight only', 'double rainbow lighting', 'fairy light bokeh',
        'projector light pattern', 'lightning strike illumination', 'colored gel lighting',
        'anamorphic lens flare', 'misty fog diffusion'
    ],
    
    atmospheres: [
        'joyful', 'serene', 'dramatic', 'mysterious', 'vibrant', 'energetic', 
        'relaxed', 'intimate', 'powerful', 'nostalgic', 'melancholic', 'ethereal',
        'majestic', 'contemplative', 'playful', 'sophisticated', 'inspiring',
        'dreamy', 'intense',
        // 20 more options
        'somber', 'whimsical', 'tranquil', 'suspenseful', 'exotic', 'adventurous',
        'mystical', 'tender', 'crisp', 'warm', 'cool', 'romantic', 'dynamic',
        'elegant', 'raw', 'moody', 'enchanting', 'bold', 'surreal', 'idyllic',
        // 20 additional options
        'haunting', 'celestial', 'primal', 'hypnotic', 'fantastical', 'euphoric',
        'evocative', 'transcendent', 'divine', 'chaotic', 'harmonious', 'foreboding',
        'ethereal', 'eclectic', 'opulent', 'minimalist', 'atmospheric', 'timeless',
        'futuristic', 'nostalgic'
    ],
    
    cameras: [
        'Sony Alpha a7R III', 'Canon EOS R5', 'Nikon Z7 II', 'Fujifilm GFX 100S', 
        'Leica Q2', 'Hasselblad X1D II', 'Sony Alpha a9 II', 'Canon EOS-1D X Mark III',
        'Hasselblad X2D 100C', 'Canon EOS 5D Mark IV', 'Sony A1', 'Nikon D850',
        'Fujifilm X-T5', 'Panasonic Lumix S1R', 'Leica M11', 'Phase One XT',
        'Pentax K-1 Mark II', 'Olympus OM-1',
        // 20 more options
        'Sony Alpha a7S III', 'Canon EOS R3', 'Nikon Z9', 'Fujifilm GFX 50S II',
        'Leica SL2', 'Hasselblad 907X', 'Ricoh GR III', 'Canon EOS R6 Mark II',
        'Sony Alpha a6600', 'Nikon Z6 II', 'Fujifilm X-Pro3', 'Panasonic Lumix GH6',
        'Leica M10-R', 'Phase One IQ4', 'Pentax 645Z', 'Olympus E-M1X',
        'DJI Hasselblad X2D', 'Sigma fp L', 'RED Komodo', 'Blackmagic Pocket Cinema Camera 6K',
        // 20 additional options
        'Leica M Monochrom', 'Canon EOS C70', 'Nikon Z7 III', 'Fujifilm X-H2S',
        'Sony FX3', 'ARRI ALEXA Mini', 'RED V-Raptor', 'Canon EOS R1', 
        'Hasselblad 503CW', 'Mamiya RZ67', 'Contax 645', 'Plaubel Makina 67',
        'Sony Venice', 'Leica S3', 'Pentax 67II', 'Rolleiflex 2.8F',
        'Linhof Technorama', 'Sinar P2', 'Intrepid 4×5', 'Horseman SW612'
    ],
    
    lenses: [
        '85mm f/1.4', '50mm f/1.2', '35mm f/1.8', '70-200mm f/2.8', 
        '24-70mm f/2.8', '135mm f/2', '28mm f/2', '135mm f/1.8',
        '105mm macro lens', '16-35mm wide angle', '100-400mm zoom', '58mm f/1.4',
        '24mm f/1.4', '90mm tilt-shift', '200mm f/2.0', '40mm pancake lens',
        '14mm ultra-wide',
        // 20 more options
        '300mm f/2.8', '85mm f/1.2', '35mm f/1.4', '24-105mm f/4', '18-55mm kit lens',
        '600mm super telephoto', '45mm tilt-shift', '8mm fisheye', '70-300mm variable aperture',
        '120mm macro f/4', '50mm f/0.95', '17-40mm ultra-wide zoom', '100mm f/2.8',
        '400mm f/4', '20mm f/1.8', '180mm f/3.5 macro', '65mm f/2 medium format',
        '150-600mm super zoom', '56mm f/1.2 portrait lens', '28-300mm travel zoom',
        // 20 additional options
        '15mm f/2.8 diagonal fisheye', '800mm f/5.6 super telephoto', '10mm rectilinear',
        '90mm macro tilt-shift', '135mm soft focus', '200-600mm f/5.6-6.3',
        '30mm f/1.4 art lens', '300mm f/4 DO IS', '500mm f/4 prime',
        '1200mm f/5.6 extreme telephoto', '2x teleconverter', '120-300mm f/2.8 sports',
        '60mm f/2.8 1:1 macro', '75mm f/0.85 nocturnus', '18mm f/2.0 pancake',
        '45mm perspective control', '24mm f/3.5 tilt-shift', '400mm f/2.8 sports prime',
        '35mm f/0.95 manual focus', '100-500mm f/4.5-7.1'
    ],
    
    technical: [
        'rule of thirds composition', 'shallow depth of field', 'motion blur', 
        'bokeh background', 'wide aperture', 'narrow aperture', 'high dynamic range',
        'perfect focus', 'f/1.4 aperture', 'long exposure', 'center-weighted composition',
        'symmetrical framing', 'leading lines composition', 'high contrast',
        'low ISO', 'HDR technique', 'diagonal composition', 'golden ratio framing',
        // 20 more options
        'deep depth of field', 'multiple exposure technique', 'focus stacking',
        'spot metering', 'hyperfocal distance', 'bulb exposure', 'panoramic stitching',
        'pixel shift technology', 'bracketed exposure', 'flash sync', 'radial composition',
        'triangular composition', 'S-curve composition', 'contre-jour technique',
        '1/1000s shutter speed', 'focus pulling', 'selective focus', 'tilt-shift effect',
        'vignette effect', 'macro magnification',
        // 20 additional options
        'zero distortion', 'exposure blending', 'luminosity masking', 'reflector fill',
        'frequency separation', 'compositing technique', 'dodging and burning',
        'white balance shift', 'diffraction compensation', 'chromatic aberration control',
        'perspective correction', 'dehaze technique', 'neutral density gradient',
        'backlit subject compensation', 'flash fill balance', 'leaf shutter sync',
        'high-speed sync', 'HSL adjustment', 'zone system exposure', 'lens compression effect'
    ],
    
    resolution: [
        'high resolution', 'ultra high definition', '4K quality', '8K quality', 
        'HD clarity', 'sharp detail', 'perfect clarity', 'extremely detailed',
        '100 megapixel detail', 'medium format quality', '45MP full-frame sensor',
        'tack-sharp resolution', '12K cinematic resolution', 'lossless RAW quality',
        'fine detail capture', 'large format equivalent', '16-bit color depth',
        'crystal clear definition',
        // 20 more options
        'micro detail', 'cinematic resolution', 'textural clarity', 'razor sharp',
        'hyper detailed', 'pixel-perfect clarity', 'super-resolution', 'film grain detail',
        'pristine image quality', 'beyond 8K clarity', 'next-gen detail level',
        'magazine print quality', 'billboard-sized clarity', 'microscopic detail',
        'studio master quality', 'retina resolution', 'impeccable sharpness',
        'ultra-fine grain texture', 'commercial print clarity', 'infinite detail',
        // 20 additional options
        'photorealistic textures', 'lifelike detail', 'molecular level detail',
        'superlative sharpness', 'quantum resolution', 'extreme magnification clarity',
        'image stacking detail', 'reference monitor quality', 'color-accurate detail',
        'unsurpassed definition', 'cinema DCP quality', 'exhibition print clarity',
        'photogrammetric precision', 'uncompressed RAW detail', 'ultra-high MTF sharpness',
        'pixel-binning clarity', 'gigapixel resolution', 'artifact-free rendering',
        'scientific imaging clarity', 'archival reproduction detail'
    ],
    
    aesthetics: [
        'vibrant colors', 'monochrome', 'desaturated tones', 'rich contrast', 
        'vintage film look', 'lifestyle photography aesthetic', 'cinematic color grading',
        'photojournalistic style', 'minimalist', 'high contrast', 'matte finish',
        'film emulation', 'vintage color grading', 'classic portraiture',
        'moody tone', 'clean and crisp', 'dramatic processing', 'fine art style',
        // 20 more options
        'sepia toning', 'cross-processing effect', 'split toning', 'faded film look',
        'HDR style', 'blue hour tones', 'infrared effect', 'duotone treatment',
        'soft pastel colors', 'analog film grain', 'bleach bypass look', 'low saturation',
        'high clarity', 'contrasty shadows', 'luminous highlights', 'complementary colors',
        'color harmony', 'retro color science', 'black and white with color accents',
        'technical color grading',
        // 20 additional options
        'teal and orange color grading', 'Kodachrome emulation', 'Polaroid color shift',
        'cinematic anamorphic look', 'daguerreotype aesthetic', 'cyanotype processing',
        'platinum print look', 'wet plate collodion style', 'autochrome color palette',
        'vivid saturated colors', 'noir aesthetic', 'fujifilm superia palette',
        'kodak portra emulation', 'lomography aesthetic', 'expired film look',
        'selective color isolation', 'solarization effect', 'posterization treatment',
        'luminance priority editing', 'tone-mapped HDR'
    ],
    
    qualityExtras: [
        'intricate details', 'magazine quality', 'textured skin', 'professional photography', 
        'award winning', 'fashion magazine quality', 'Vogue cover quality',
        'National Geographic quality', 'studio quality', 'flawless execution',
        'impeccable lighting', 'perfect composition', 'photographic excellence',
        'gallery worthy', 'pristine quality', 'commercial grade', 'extraordinary detail',
        'premium finish',
        // 20 more options
        'masterful execution', 'fashion editorial worthy', 'archival quality',
        'art exhibition standard', 'museum quality', 'luxury aesthetic',
        'technical perfection', 'attention to detail', 'expertly edited',
        'balanced exposure', 'cinematic quality', 'perfectly exposed',
        'true-to-life colors', 'master craftsmanship', 'competition level',
        'refined post-processing', 'prestige quality', 'advertising grade',
        'elite standard', 'professional retouching',
        // 20 additional options
        'artisanal processing', 'sublime aesthetics', 'rarified execution',
        'photo contest winner', 'iconic imagery', 'signature style',
        'collector\'s item quality', 'photographic purity', 'portfolio centerpiece',
        'immaculate detail preservation', 'exacting standards', 'visual storytelling',
        'calculated spontaneity', 'cultivated authenticity', 'painterly quality',
        'curated aesthetics', 'international award-winning', 'unparalleled clarity',
        'compelling composition', 'visual mastery'
    ]
};

// Pre-compile regex patterns for better performance
const REGEX = {
    beautyPortrait: /beautiful portrait of\s*/gi,
    portraitOf: /portrait of\s*/gi,
    beautiful1: /^beautiful\s+/i,
    beautiful2: /\s+beautiful\s+/gi,
    beautiful3: /\s+beautiful$/i,
    multipleSpaces: /\s{2,}/g,
    duplicatePortrait1: /beautiful portrait of beautiful/gi,
    duplicatePortrait2: /portrait of portrait/gi,
    punctuation: /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
    spaces: /\s+/,
    commaSpaces: /\s+,/g,
    commaEndSpace: /,\s+\./g
};

// Cache DOM elements and common string lists for optimization
let cachedElements = {};

// Common words to ignore in duplicate checking (memoized)
const commonWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'of', 'in', 'on', 'with', 
    'at', 'from', 'to', 'for', 'by', 'about', 'as', 'shot'
]);

// Words/phrases allowed to appear multiple times (memoized)
const allowedDuplicates = new Set([
    'portrait', 'photography', 'quality', 'high', 'ultra', 'detail', 'setting'
]);

// Common adjectives for duplicate detection (memoized)
const commonAdjectives = [
    'cute', 'pretty', 'gorgeous', 'attractive', 'handsome', 'lovely', 
    'muscular', 'athletic', 'slender', 'curvy', 'fit', 'toned',
    'young', 'mature', 'old', 'teenage', 'middle-aged', 'elderly',
    'tall', 'short', 'petite', 'plus-size', 'thick', 'thin',
    'strong', 'powerful', 'elegant', 'graceful', 'slim'
];

// Initialize history from localStorage or create empty array
let promptHistory = JSON.parse(localStorage.getItem('promptHistory')) || [];
const MAX_HISTORY_ITEMS = 10;

// Function to save a prompt to history
function saveToHistory(subject, prompt) {
    const historyItem = {
        subject: subject,
        prompt: prompt,
        timestamp: new Date().toLocaleString()
    };
    
    // Add to the beginning of the array
    promptHistory.unshift(historyItem);
    
    // Keep only the most recent MAX_HISTORY_ITEMS
    if (promptHistory.length > MAX_HISTORY_ITEMS) {
        promptHistory = promptHistory.slice(0, MAX_HISTORY_ITEMS);
    }
    
    // Save to localStorage
    localStorage.setItem('promptHistory', JSON.stringify(promptHistory));
    
    // Update the UI
    displayHistory();
}

// Function to display history
function displayHistory() {
    const historyList = document.querySelector('.history-list');
    if (!historyList) return;
    
    // Clear current history
    historyList.innerHTML = '';
    
    if (promptHistory.length === 0) {
        historyList.innerHTML = '<div class="empty-history">No history yet. Generate some prompts!</div>';
        return;
    }
    
    // Add each history item
    promptHistory.forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        historyItem.innerHTML = `
            <div class="history-subject">${item.subject}</div>
            <div class="history-prompt">${item.prompt}</div>
            <div class="history-timestamp">${item.timestamp}</div>
            <span class="history-copy-icon" title="Copy prompt">📋</span>
        `;
        
        historyList.appendChild(historyItem);
        
        // Add copy functionality
        const copyIcon = historyItem.querySelector('.history-copy-icon');
        copyIcon.addEventListener('click', () => {
            navigator.clipboard.writeText(item.prompt)
                .then(() => {
                    // Show copied status
                    copyIcon.textContent = '✓';
                    setTimeout(() => {
                        copyIcon.textContent = '📋';
                    }, 1500);
                })
                .catch(err => {
                    console.error('Could not copy text: ', err);
                });
        });
    });
}

// Function to clear history
function clearHistory() {
    promptHistory = [];
    localStorage.removeItem('promptHistory');
    displayHistory();
}

// Optimize the subject description enhancement
function enhanceSubjectDescription(subject) {
    // Use cached regex for better performance
    let enhancedSubject = subject.replace(REGEX.beautyPortrait, '');
    enhancedSubject = enhancedSubject.replace(REGEX.portraitOf, '');
    
    // Convert to lowercase once for all checks
    const lowerSubject = enhancedSubject.toLowerCase();
    
    // Pre-defined arrays for checking
    const ethnicities = ['asian', 'caucasian', 'african', 'latina', 'middle eastern', 'indian', 'malay', 'chinese', 'japanese'];
    const physiques = ['muscular', 'athletic', 'slender', 'curvy', 'fit', 'toned'];
    
    // Use faster some() method with array checking
    const hasEthnicity = ethnicities.some(ethnicity => lowerSubject.includes(ethnicity));
    const hasPhysique = physiques.some(physique => lowerSubject.includes(physique));
    
    // Specific replacement for better performance
    if (lowerSubject.includes('bodybuilder') && !hasPhysique) {
        enhancedSubject = enhancedSubject.replace(/bodybuilder/i, 'muscular bodybuilder');
    }
    
    // More efficient conditionals for physique addition
    if (!hasPhysique && !enhancedSubject.includes('muscular')) {
        if (lowerSubject.includes('athlete') || lowerSubject.includes('runner') || lowerSubject.includes('sports')) {
            enhancedSubject = `athletic ${enhancedSubject}`;
        } else if (lowerSubject.includes('model')) {
            enhancedSubject = `slender ${enhancedSubject}`;
        }
    }
    
    // Remove "beautiful" using cached regex
    enhancedSubject = enhancedSubject.replace(REGEX.beautiful1, '');
    enhancedSubject = enhancedSubject.replace(REGEX.beautiful2, ' ');
    enhancedSubject = enhancedSubject.replace(REGEX.beautiful3, '');
    
    // More efficient adjective duplicate removal
    for (const adj of commonAdjectives) {
        // Create regex only when needed
        const pattern = new RegExp(`\\b${adj}\\b.*\\b${adj}\\b`, 'gi');
        if (pattern.test(enhancedSubject)) {
            const wordPattern = new RegExp(`\\b${adj}\\b`, 'gi');
            let matched = false;
            enhancedSubject = enhancedSubject.replace(wordPattern, match => {
                if (!matched) {
                    matched = true;
                    return match;
                }
                return '';
            });
        }
    }
    
    // Clean up multiple spaces
    return enhancedSubject.replace(REGEX.multipleSpaces, ' ').trim();
}

// Optimized full description builder
function buildFullDescription(subject) {
    if (!subject || !subject.trim()) {
        console.log("Empty subject provided to buildFullDescription");
        return 'Please enter a subject description first.';
    }
    
    console.log("Building description for subject:", subject);
    
    try {
        // Randomly decide whether to include "portrait of" or not - more variance
        const portraitStyle = Math.random();
        let subjectDescription = subject;
        
        if (portraitStyle < 0.3 && !subject.toLowerCase().includes('portrait')) {
            subjectDescription = `beautiful portrait of ${subject}`;
        } else if (portraitStyle < 0.5 && !subject.toLowerCase().includes('portrait')) {
            subjectDescription = `portrait of ${subject}`;
        }
        // Otherwise just use the subject as-is
        
        // Check if each category has items before selecting
        if (!photoElements.styles || !photoElements.styles.length) {
            console.error("Missing styles array in photoElements");
            return "Error: Missing styles data. Please refresh the page.";
        }
        
        // Verify all necessary categories exist before destructuring
        const hasAllCategories = 
            Array.isArray(photoElements.styles) && 
            Array.isArray(photoElements.technical) &&
            Array.isArray(photoElements.lighting) &&
            Array.isArray(photoElements.atmospheres) &&
            Array.isArray(photoElements.cameras) &&
            Array.isArray(photoElements.lenses);
        
        if (!hasAllCategories) {
            console.error("Missing one or more required categories in photoElements", photoElements);
            return "Error: Missing photo elements data. Please refresh the page.";
        }
        
        console.log("All categories present, selecting random elements");
        
        // Create a description template with randomized structure
        const descriptionParts = [];
        
        // Randomize which elements to include with even more variability
        const elementProbabilities = {
            style: Math.random() * 0.2 + 0.7,     // 70-90% chance
            setting: Math.random() * 0.3 + 0.6,   // 60-90% chance
            lighting: Math.random() * 0.3 + 0.6,  // 60-90% chance
            atmosphere: Math.random() * 0.4 + 0.4, // 40-80% chance
            camera: Math.random() * 0.5 + 0.3,    // 30-80% chance
            lens: Math.random() * 0.5 + 0.3,      // 30-80% chance
            technical: Math.random() * 0.3 + 0.6,  // 60-90% chance
            resolution: Math.random() * 0.3 + 0.6, // 60-90% chance
            aesthetic: Math.random() * 0.3 + 0.6,  // 60-90% chance
            quality: Math.random() * 0.2 + 0.7    // 70-90% chance
        };
        
        // Randomly decide where to place the subject (start, middle, end)
        const subjectPosition = Math.random();
        
        if (subjectPosition < 0.7) {
            // 70% chance - place subject at the beginning
            descriptionParts.push(subjectDescription);
        }
        
        // Add style with probability
        if (Math.random() < elementProbabilities.style) {
            // 20% chance to add multiple styles (1-2)
            if (Math.random() < 0.2) {
                const styleCount = Math.floor(Math.random() * 2) + 1;
                descriptionParts.push(getRandomElements(photoElements.styles, styleCount).join(' with '));
            } else {
                descriptionParts.push(getRandomElement(photoElements.styles));
            }
        }
        
        // Add setting with probability
        if (Math.random() < elementProbabilities.setting) {
            // Get setting from either settings or technical arrays
            const useSettings = Math.random() < 0.7;
            if (useSettings && photoElements.settings) {
                descriptionParts.push(getRandomElement(photoElements.settings));
            } else {
                // Use a technical element as a setting sometimes
                descriptionParts.push(getRandomElement(photoElements.technical));
            }
        }
        
        // Maybe add subject in the middle (15% chance)
        if (subjectPosition >= 0.7 && subjectPosition < 0.85 && !descriptionParts.includes(subjectDescription)) {
            descriptionParts.push(subjectDescription);
        }
        
        // Add lighting with probability
        if (Math.random() < elementProbabilities.lighting) {
            const lighting = getRandomElement(photoElements.lighting);
            
            // 30% chance to add some variety to the lighting description
            if (Math.random() < 0.3) {
                const lightingFormats = [
                    `illuminated with ${lighting}`,
                    `with ${lighting}`,
                    `using ${lighting}`,
                    lighting
                ];
                descriptionParts.push(getRandomElement(lightingFormats));
            } else {
                descriptionParts.push(lighting);
            }
        }
        
        // Add atmosphere with probability
        if (Math.random() < elementProbabilities.atmosphere) {
            const atmosphere = getRandomElement(photoElements.atmospheres);
            
            // Different ways to include atmosphere
            const atmosphereFormats = [
                `${atmosphere} atmosphere`,
                `${atmosphere} mood`,
                `${atmosphere} feeling`,
                atmosphere
            ];
            
            // Choose a random format with weights
            const formatChoice = Math.random();
            if (formatChoice < 0.4) {
                descriptionParts.push(atmosphereFormats[0]); // 40% atmosphere
            } else if (formatChoice < 0.6) {
                descriptionParts.push(atmosphereFormats[1]); // 20% mood
            } else if (formatChoice < 0.7) {
                descriptionParts.push(atmosphereFormats[2]); // 10% feeling
            } else {
                descriptionParts.push(atmosphereFormats[3]); // 30% just the word
            }
        }
        
        // Add camera and lens with probability
        if (Math.random() < elementProbabilities.camera) {
            const camera = getRandomElement(photoElements.cameras);
            
            if (Math.random() < elementProbabilities.lens) {
                const lens = getRandomElement(photoElements.lenses);
                
                // Different ways to include camera and lens
                const cameraLensFormats = [
                    `shot on ${camera} with ${lens}`,
                    `captured with ${camera} using ${lens}`,
                    `photographed on ${camera} with ${lens}`,
                    `taken on ${camera} with ${lens}`,
                    `${camera} with ${lens}`,
                    `${camera}, ${lens}`
                ];
                
                descriptionParts.push(getRandomElement(cameraLensFormats));
            } else {
                // Camera only variations
                const cameraFormats = [
                    `shot on ${camera}`,
                    `captured with ${camera}`,
                    `photographed with ${camera}`,
                    `${camera}`
                ];
                descriptionParts.push(getRandomElement(cameraFormats));
            }
        } else if (Math.random() < elementProbabilities.lens) {
            // Lens only variations
            const lens = getRandomElement(photoElements.lenses);
            const lensFormats = [
                `shot with ${lens}`,
                `using ${lens}`,
                `with ${lens}`,
                lens
            ];
            descriptionParts.push(getRandomElement(lensFormats));
        }
        
        // Add technical setting with probability
        if (Math.random() < elementProbabilities.technical) {
            // Sometimes add multiple technical aspects
            if (Math.random() < 0.25) {
                const techCount = Math.floor(Math.random() * 2) + 1;
                descriptionParts.push(getRandomElements(photoElements.technical, techCount).join(', '));
            } else {
                descriptionParts.push(getRandomElement(photoElements.technical));
            }
        }
        
        // Add resolution with probability
        if (Math.random() < elementProbabilities.resolution) {
            descriptionParts.push(getRandomElement(photoElements.resolution));
        }
        
        // Add aesthetic with probability
        if (Math.random() < elementProbabilities.aesthetic) {
            // Sometimes add multiple aesthetics
            if (Math.random() < 0.15) {
                const aestheticCount = Math.floor(Math.random() * 2) + 1;
                descriptionParts.push(getRandomElements(photoElements.aesthetics, aestheticCount).join(' with '));
            } else {
                descriptionParts.push(getRandomElement(photoElements.aesthetics));
            }
        }
        
        // Maybe add subject at the end (15% chance)
        if (subjectPosition >= 0.85 && !descriptionParts.includes(subjectDescription)) {
            descriptionParts.push(subjectDescription);
        }
        
        // Add quality descriptors with probability
        if (Math.random() < elementProbabilities.quality) {
            // Vary the number of quality descriptors even more (1-4)
            const qualityCount = Math.floor(Math.random() * 4) + 1;
            const qualityParts = getRandomElements(photoElements.qualityExtras, qualityCount);
            
            // Sometimes join with "and" for the last element
            if (Math.random() < 0.3 && qualityParts.length > 1) {
                const lastQuality = qualityParts.pop();
                descriptionParts.push(`${qualityParts.join(', ')} and ${lastQuality}`);
            } else {
                descriptionParts.push(qualityParts.join(', '));
            }
        }
        
        // Ensure subject is included somewhere if it wasn't added yet
        if (!descriptionParts.some(part => part === subjectDescription)) {
            // Insert at a random position
            const randomPos = Math.floor(Math.random() * (descriptionParts.length + 1));
            descriptionParts.splice(randomPos, 0, subjectDescription);
        }
        
        // Randomize order of all the parts completely - 30% chance
        if (Math.random() < 0.3) {
            for (let i = descriptionParts.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [descriptionParts[i], descriptionParts[j]] = [descriptionParts[j], descriptionParts[i]];
            }
        }
        
        console.log("All elements selected, building description");
        
        // Join with commas or other connectors
        let description = '';
        if (Math.random() < 0.9) {
            // 90% chance: Join with commas
            description = descriptionParts.join(', ');
        } else {
            // 10% chance: Mix of commas and semicolons
            description = descriptionParts.map((part, i) => {
                // Every third part, use semicolon instead
                return (i > 0 && i % 3 === 0) ? `; ${part}` : part;
            }).join(', ');
        }
        
        // Ensure it ends with a period
        if (!description.endsWith('.')) {
            description += '.';
        }
        
        console.log("Description before duplicate removal:", description);
        
        // Remove duplicates and return
        const finalDescription = removeDuplicateWords(description);
        console.log("Final description:", finalDescription);
        
        // Save to history
        saveToHistory(subject, finalDescription);
        
        return finalDescription;
    } catch (error) {
        console.error("Error in buildFullDescription:", error);
        return "Error generating description. Please try again.";
    }
}

// Optimized duplicate word removal
function removeDuplicateWords(text) {
    // More efficient segment splitting
    const segments = text.split(',');
    
    // Process each segment with better pattern recognition
    for (let i = 0; i < segments.length; i++) {
        let segment = segments[i].trim();
        segment = segment.replace(REGEX.duplicatePortrait1, 'beautiful portrait of');
        segment = segment.replace(REGEX.duplicatePortrait2, 'portrait of');
        segments[i] = segment;
    }
    
    // Rejoin with global filtering
    return filterGlobalDuplicates(segments.join(', '));
}

// More efficient global duplicate filtering
function filterGlobalDuplicates(text) {
    // Split into words with regex for better performance
    let words = text.toLowerCase().split(REGEX.spaces);
    const wordCounts = new Map();
    
    // Count unique words more efficiently
    for (const word of words) {
        // Remove punctuation once
        const cleanWord = word.replace(REGEX.punctuation, '');
        // Use Set.has() for faster lookups
        if (cleanWord && !commonWords.has(cleanWord) && !allowedDuplicates.has(cleanWord)) {
            wordCounts.set(cleanWord, (wordCounts.get(cleanWord) || 0) + 1);
        }
    }
    
    // Replace duplicates more efficiently
    let result = text;
    
    for (const [word, count] of wordCounts.entries()) {
        if (count > 1) {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            let matches = 0;
            
            result = result.replace(regex, match => {
                return ++matches === 1 ? match : '';
            });
            
            // Only clean spaces when needed
            if (matches > 1) {
                result = result.replace(REGEX.multipleSpaces, ' ');
            }
        }
    }
    
    // Final cleanup
    return result.replace(REGEX.commaSpaces, ',').replace(REGEX.commaEndSpace, '.');
}

// More efficient random element selection
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Optimized random unique elements selection
function getRandomElements(array, count) {
    // Fisher-Yates shuffle for better randomization
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

// Function to generate description
function generateDescription() {
    try {
        console.log("Generate button clicked");
        
        // Get subject from input
        const subject = document.getElementById('subject').value.trim();
        console.log("Subject input value:", subject);
        
        if (!subject) {
            document.getElementById('output').value = "Please enter a subject for the description.";
            return;
        }

        // Generate the description
        const enhancedSubject = enhanceSubjectDescription(subject);
        console.log("Enhanced subject:", enhancedSubject);
        
        const description = buildFullDescription(enhancedSubject);
        console.log("Built description:", description);
        
        // Display the result
        const outputElement = document.getElementById('output');
        console.log("Output element found:", !!outputElement);
        
        if (outputElement) {
            outputElement.value = description;
            console.log("Set output value to description");
        } else {
            console.error("Output element not found");
        }
        
        // Automatically copy to clipboard
        navigator.clipboard.writeText(description)
            .then(() => {
                // Update copy button
                const copyBtn = document.getElementById('copy-btn');
                if (copyBtn) {
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy to Clipboard';
                    }, 1500);
                }
                
                // Show copy status
                const copyStatus = document.getElementById('copy-status');
                if (copyStatus) {
                    copyStatus.textContent = 'Copied to clipboard!';
                    copyStatus.style.color = '#28a745';
                    copyStatus.classList.add('visible');
                    
                    // Hide the status after a delay
                    setTimeout(() => {
                        copyStatus.classList.remove('visible');
                    }, 3000);
                }
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
                
                // Show error in status
                const copyStatus = document.getElementById('copy-status');
                if (copyStatus) {
                    copyStatus.textContent = 'Could not copy automatically';
                    copyStatus.style.color = '#dc3545';
                    copyStatus.classList.add('visible');
                    
                    setTimeout(() => {
                        copyStatus.classList.remove('visible');
                    }, 3000);
                }
            });
        
    } catch (error) {
        console.error('Error generating description:', error);
        document.getElementById('output').value = "An error occurred while generating the description.";
    }
}

// Format the final output
function formatFinalOutput(enhancedSubject, descriptionParts) {
    return removeDuplicateWords(descriptionParts);
}

// Initialize DOM-dependent functionality with performance optimization
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    // Fix technical settings collision issue right at the start
    const tempSettings = photoElements.settings;
    photoElements.technical = photoElements.technical || []; // Make sure technical exists
    
    // Merge settings into technical (in case settings contains unique values)
    for (const setting of tempSettings) {
        if (!photoElements.technical.includes(setting)) {
            photoElements.technical.push(setting);
        }
    }
    
    // Remove settings array to avoid confusion
    delete photoElements.settings;
    
    console.log("Set up event listeners");
    
    // Set up event listeners directly
    const generateBtn = document.getElementById('generate-btn');
    if (generateBtn) {
        console.log("Found generate button, adding click handler");
        generateBtn.addEventListener('click', function() {
            console.log("Generate button clicked directly");
            generateDescription();
        });
    } else {
        console.error("Generate button not found with ID 'generate-btn'");
    }
    
    const copyBtn = document.getElementById('copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const output = document.getElementById('output');
            if (output && output.value) {
                navigator.clipboard.writeText(output.value)
                    .then(() => {
                        copyBtn.textContent = 'Copied!';
                        setTimeout(() => {
                            copyBtn.textContent = 'Copy to Clipboard';
                        }, 1500);
                    })
                    .catch(err => {
                        console.error('Could not copy text: ', err);
                        copyBtn.textContent = 'Failed to copy';
                        setTimeout(() => {
                            copyBtn.textContent = 'Copy to Clipboard';
                        }, 1500);
                    });
            }
        });
    }
    
    const subjectInput = document.getElementById('subject');
    if (subjectInput) {
        subjectInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                generateDescription();
            }
        });
    }
    
    // Setup clear history button
    const clearHistoryBtn = document.querySelector('.clear-history-btn');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', clearHistory);
    }
    
    // Display history on load
    displayHistory();
    
    console.log("Event listeners set up successfully");
}); 