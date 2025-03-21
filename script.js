// Common photographic terms and qualities to include in descriptions
const photoElements = {
    // Using more lightweight objects with minimal comments to reduce parsing time
    styles: [
        'portrait photography', 'lifestyle photography', 'documentary photography', 
        'editorial photography', 'street photography', 'fashion photography',
        'fine art photography', 'candid photography', 'environmental portrait',
        'black and white photography', 'high fashion photography', 'commercial photography',
        'natural light photography', 'studio portrait', 'glamour photography',
        'conceptual photography'
    ],
    
    settings: [
        'rustic outdoor setting', 'modern urban environment', 'pristine beach setting', 
        'lush green park', 'tranquil garden', 'professional studio', 'city street', 
        'mountain landscape', 'countryside setting', 'traditional wooden house',
        'luxury indoor space', 'industrial warehouse', 'historic architecture',
        'minimalist white room', 'abandoned building', 'rooftop with city skyline',
        'natural forest', 'desert landscape', 'cozy cafe interior',
        'elegant hotel lobby', 'vintage train station'
    ],
    
    lighting: [
        'soft natural daylight', 'golden hour sunlight', 'low-key dramatic shadows', 
        'high-key bright lighting', 'cinematic lighting', 'rim lighting with backlight',
        'studio three-point lighting', 'moody directional lighting', 'split lighting',
        'butterfly lighting', 'blue hour twilight', 'harsh midday sun',
        'dramatic chiaroscuro', 'diffused window light', 'neon accent lighting',
        'silhouette backlighting', 'soft box lighting', 'subtle gradient lighting'
    ],
    
    atmospheres: [
        'joyful', 'serene', 'dramatic', 'mysterious', 'vibrant', 'energetic', 
        'relaxed', 'intimate', 'powerful', 'nostalgic', 'melancholic', 'ethereal',
        'majestic', 'contemplative', 'playful', 'sophisticated', 'inspiring',
        'dreamy', 'intense'
    ],
    
    cameras: [
        'Sony Alpha a7R III', 'Canon EOS R5', 'Nikon Z7 II', 'Fujifilm GFX 100S', 
        'Leica Q2', 'Hasselblad X1D II', 'Sony Alpha a9 II', 'Canon EOS-1D X Mark III',
        'Hasselblad X2D 100C', 'Canon EOS 5D Mark IV', 'Sony A1', 'Nikon D850',
        'Fujifilm X-T5', 'Panasonic Lumix S1R', 'Leica M11', 'Phase One XT',
        'Pentax K-1 Mark II', 'Olympus OM-1'
    ],
    
    lenses: [
        '85mm f/1.4', '50mm f/1.2', '35mm f/1.8', '70-200mm f/2.8', 
        '24-70mm f/2.8', '135mm f/2', '28mm f/2', '135mm f/1.8',
        '105mm macro lens', '16-35mm wide angle', '100-400mm zoom', '58mm f/1.4',
        '24mm f/1.4', '90mm tilt-shift', '200mm f/2.0', '40mm pancake lens',
        '14mm ultra-wide'
    ],
    
    technical: [
        'rule of thirds composition', 'shallow depth of field', 'motion blur', 
        'bokeh background', 'wide aperture', 'narrow aperture', 'high dynamic range',
        'perfect focus', 'f/1.4 aperture', 'long exposure', 'center-weighted composition',
        'symmetrical framing', 'leading lines composition', 'high contrast',
        'low ISO', 'HDR technique', 'diagonal composition', 'golden ratio framing'
    ],
    
    resolution: [
        'high resolution', 'ultra high definition', '4K quality', '8K quality', 
        'HD clarity', 'sharp detail', 'perfect clarity', 'extremely detailed',
        '100 megapixel detail', 'medium format quality', '45MP full-frame sensor',
        'tack-sharp resolution', '12K cinematic resolution', 'lossless RAW quality',
        'fine detail capture', 'large format equivalent', '16-bit color depth',
        'crystal clear definition'
    ],
    
    aesthetics: [
        'vibrant colors', 'monochrome', 'desaturated tones', 'rich contrast', 
        'vintage film look', 'lifestyle photography aesthetic', 'cinematic color grading',
        'photojournalistic style', 'minimalist', 'high contrast', 'matte finish',
        'film emulation', 'vintage color grading', 'classic portraiture',
        'moody tone', 'clean and crisp', 'dramatic processing', 'fine art style'
    ],
    
    qualityExtras: [
        'intricate details', 'magazine quality', 'textured skin', 'professional photography', 
        'award winning', 'fashion magazine quality', 'Vogue cover quality',
        'National Geographic quality', 'studio quality', 'flawless execution',
        'impeccable lighting', 'perfect composition', 'photographic excellence',
        'gallery worthy', 'pristine quality', 'commercial grade', 'extraordinary detail',
        'premium finish'
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
        // Efficiently check for portrait in subject
        const subjectDescription = subject.toLowerCase().includes('portrait') ? 
                                subject : 
                                `beautiful portrait of ${subject}`;
        
        // Check if each category has items before selecting
        if (!photoElements.styles || !photoElements.styles.length) {
            console.error("Missing styles array in photoElements");
            return "Error: Missing styles data. Please refresh the page.";
        }
        
        // Verify all necessary categories exist before destructuring
        const hasAllCategories = 
            Array.isArray(photoElements.styles) && 
            (Array.isArray(photoElements.settings) || Array.isArray(photoElements.technical)) &&
            Array.isArray(photoElements.lighting) &&
            Array.isArray(photoElements.atmospheres) &&
            Array.isArray(photoElements.cameras) &&
            Array.isArray(photoElements.lenses);
        
        if (!hasAllCategories) {
            console.error("Missing one or more required categories in photoElements", photoElements);
            return "Error: Missing photo elements data. Please refresh the page.";
        }
        
        console.log("All categories present, selecting random elements");
        
        // Use destructuring for cleaner random selection
        const style = getRandomElement(photoElements.styles);
        
        // Use either settings or technical for the setting value
        const setting = Array.isArray(photoElements.settings) && photoElements.settings.length > 0 ? 
                        getRandomElement(photoElements.settings) : 
                        getRandomElement(photoElements.technical);
                        
        const lighting = getRandomElement(photoElements.lighting);
        const atmosphere = getRandomElement(photoElements.atmospheres);
        const camera = getRandomElement(photoElements.cameras);
        const lens = getRandomElement(photoElements.lenses);
        
        // Use technical instead of settings to avoid confusion with the settings array
        const technicalSetting = getRandomElement(photoElements.technical);
        const resolutionDesc = getRandomElement(photoElements.resolution);
        const aesthetic = getRandomElement(photoElements.aesthetics);
        
        // More efficient quality descriptor selection
        const qualityCount = Math.floor(Math.random() * 2) + 2; // 2 or 3
        const qualityDescriptors = getRandomElements(photoElements.qualityExtras, qualityCount).join(', ');
        
        console.log("All elements selected, building description");
        
        // Template literal for better string construction
        let description = `${style}, ${setting}, ${subjectDescription}, ${lighting}, ${atmosphere} atmosphere, shot on ${camera} with ${lens}, ${technicalSetting}, ${resolutionDesc}, ${aesthetic}, ${qualityDescriptors}.`;
        
        console.log("Description before duplicate removal:", description);
        
        // Remove duplicates and return
        const finalDescription = removeDuplicateWords(description);
        console.log("Final description:", finalDescription);
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

// Initialize DOM-dependent functionality with performance optimization
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Cache DOM elements for better performance
    function cacheElements() {
        cachedElements.subjectInput = document.getElementById('subjectInput');
        cachedElements.generatedOutput = document.getElementById('generatedOutput');
        cachedElements.copyStatus = document.getElementById('copyStatus');
        cachedElements.generateBtn = document.getElementById('generateBtn');
        cachedElements.clearBtn = document.getElementById('clearBtn');
    }
    
    // Generate description with debounce for responsiveness
    let generateTimeout;
    function generateDescription() {
        // Simple direct approach to fix the generation issue
        try {
            const subject = document.getElementById('subjectInput').value.trim();
            if (!subject) {
                alert('Please enter a subject description');
                return;
            }
            
            console.log("Generating description for:", subject);
            
            const enhancedSubject = enhanceSubjectDescription(subject);
            console.log("Enhanced subject:", enhancedSubject);
            
            const description = buildFullDescription(enhancedSubject);
            console.log("Built description:", description);
            
            // Update the output text
            document.getElementById('generatedOutput').textContent = description;
            
            // Automatically copy to clipboard
            navigator.clipboard.writeText(description)
                .then(() => {
                    // Show copy status
                    const copyStatus = document.getElementById('copyStatus');
                    copyStatus.textContent = 'Copied to clipboard!';
                    copyStatus.style.color = '#28a745';
                    copyStatus.classList.add('visible');
                    
                    // Hide the status after a delay
                    setTimeout(() => {
                        copyStatus.classList.remove('visible');
                    }, 3000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    const copyStatus = document.getElementById('copyStatus');
                    copyStatus.textContent = 'Could not copy automatically';
                    copyStatus.style.color = '#dc3545';
                    copyStatus.classList.add('visible');
                    
                    setTimeout(() => {
                        copyStatus.classList.remove('visible');
                    }, 3000);
                });
        } catch (error) {
            console.error("Error in generateDescription:", error);
            document.getElementById('generatedOutput').textContent = 'Error generating description. Please try again.';
        }
    }
    
    // Clear all input and output fields
    function clearAll() {
        // Use cached elements for better performance
        cachedElements.subjectInput.value = '';
        cachedElements.generatedOutput.textContent = '';
        cachedElements.copyStatus.textContent = '';
        cachedElements.copyStatus.classList.remove('visible');
        
        // Focus back on input for better UX
        cachedElements.subjectInput.focus();
    }
    
    // Set up event listeners with better performance
    function setupEventListeners() {
        // Use passive event listeners for better scrolling performance
        cachedElements.generateBtn.addEventListener('click', generateDescription, { passive: true });
        cachedElements.clearBtn.addEventListener('click', clearAll, { passive: true });
        
        // Add keyboard accessibility
        cachedElements.subjectInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                generateDescription();
            }
        });
        
        // Add mobile-friendly touch events
        if ('ontouchstart' in window) {
            cachedElements.generateBtn.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            }, { passive: true });
            
            cachedElements.generateBtn.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            }, { passive: true });
        }
    }
    
    // Initialize the application
    function init() {
        try {
            cacheElements();
            setupEventListeners();
            
            // Add direct event listeners as a fallback
            const generateBtn = document.getElementById('generateBtn');
            const clearBtn = document.getElementById('clearBtn');
            
            if (generateBtn) {
                console.log("Adding direct click handler to generate button");
                generateBtn.onclick = generateDescription;
            } else {
                console.error("Generate button not found");
            }
            
            if (clearBtn) {
                console.log("Adding direct click handler to clear button");
                clearBtn.onclick = clearAll;
            }
            
            console.log("Initialization complete");
        } catch (error) {
            console.error("Error during initialization:", error);
        }
    }
    
    // Start the application
    init();
}); 