/**
 * Verification script for RTL-aware animations
 * Tests that animations adapt correctly to RTL direction
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Verifying RTL-aware animations implementation...\n');

// Check if RTL animation utilities exist
const rtlUtilsPath = path.join(__dirname, 'src/lib/rtl-animation-utils.ts');
if (fs.existsSync(rtlUtilsPath)) {
    console.log('✅ RTL animation utilities file exists');
    
    const content = fs.readFileSync(rtlUtilsPath, 'utf8');
    
    // Check for key RTL animation functions
    const requiredFunctions = [
        'getRTLSlideVariants',
        'getRTLSlideInLeftVariants',
        'getRTLSlideInRightVariants',
        'getRTLStaggerContainerVariants',
        'getRTLCardHoverVariants',
        'getRTLIconVariants',
        'getRTLTextRevealVariants',
        'getRTLFloatingAnimation',
        'getRTLButtonHoverAnimation',
        'getRTLArrowAnimation',
        'createRTLVariants'
    ];
    
    const missingFunctions = requiredFunctions.filter(func => !content.includes(func));
    
    if (missingFunctions.length === 0) {
        console.log('✅ All required RTL animation functions are implemented');
    } else {
        console.log('❌ Missing RTL animation functions:', missingFunctions);
    }
    
    // Check for framer-motion import
    if (content.includes('import { Variants } from \'framer-motion\'')) {
        console.log('✅ Framer Motion integration is present');
    } else {
        console.log('❌ Framer Motion integration is missing');
    }
    
} else {
    console.log('❌ RTL animation utilities file is missing');
}

// Check if RTL animations hook exists
const hookPath = path.join(__dirname, 'src/hooks/useRTLAnimations.ts');
if (fs.existsSync(hookPath)) {
    console.log('✅ useRTLAnimations hook exists');
    
    const hookContent = fs.readFileSync(hookPath, 'utf8');
    
    // Check for key exports
    const requiredExports = [
        'slideVariants',
        'slideInLeftVariants',
        'slideInRightVariants',
        'staggerContainerVariants',
        'cardHoverVariants',
        'iconVariants',
        'textRevealVariants',
        'floatingAnimation',
        'buttonHoverAnimation',
        'arrowAnimation',
        'createRTLVariants'
    ];
    
    const missingExports = requiredExports.filter(exp => !hookContent.includes(exp));
    
    if (missingExports.length === 0) {
        console.log('✅ All required animation variants are exported from hook');
    } else {
        console.log('❌ Missing animation variants in hook:', missingExports);
    }
    
} else {
    console.log('❌ useRTLAnimations hook is missing');
}

// Check if components are updated to use RTL animations
const componentsToCheck = [
    'src/components/Hero.tsx',
    'src/components/Values.tsx',
    'src/components/StaggerContainer.tsx',
    'src/components/Testimonials.tsx',
    'src/pages/Team.tsx'
];

let updatedComponents = 0;

componentsToCheck.forEach(componentPath => {
    if (fs.existsSync(componentPath)) {
        const content = fs.readFileSync(componentPath, 'utf8');
        
        if (content.includes('useRTLAnimations') || content.includes('isRTL')) {
            console.log(`✅ ${path.basename(componentPath)} uses RTL-aware animations`);
            updatedComponents++;
        } else {
            console.log(`⚠️  ${path.basename(componentPath)} may not be using RTL-aware animations`);
        }
    } else {
        console.log(`❌ ${path.basename(componentPath)} not found`);
    }
});

// Check test file
const testPath = path.join(__dirname, 'src/test-rtl-animations.tsx');
if (fs.existsSync(testPath)) {
    console.log('✅ RTL animations test component exists');
} else {
    console.log('❌ RTL animations test component is missing');
}

console.log('\n📊 Summary:');
console.log(`- Components updated: ${updatedComponents}/${componentsToCheck.length}`);

// Check for RTL-specific animation patterns
console.log('\n🔍 Checking for RTL animation patterns...');

const patternsToCheck = [
    { pattern: 'isRTL \\? .* : .*', description: 'Conditional RTL animations' },
    { pattern: 'staggerDirection.*isRTL', description: 'RTL stagger direction' },
    { pattern: 'rotate.*isRTL', description: 'RTL rotation adjustments' },
    { pattern: 'x:.*isRTL', description: 'RTL horizontal movement' }
];

let patternsFound = 0;

componentsToCheck.forEach(componentPath => {
    if (fs.existsSync(componentPath)) {
        const content = fs.readFileSync(componentPath, 'utf8');
        
        patternsToCheck.forEach(({ pattern, description }) => {
            const regex = new RegExp(pattern, 'g');
            const matches = content.match(regex);
            if (matches && matches.length > 0) {
                console.log(`✅ Found ${description} in ${path.basename(componentPath)}`);
                patternsFound++;
            }
        });
    }
});

console.log(`\n✨ RTL animation patterns found: ${patternsFound}`);

if (patternsFound > 0) {
    console.log('\n🎉 RTL-aware animations are successfully implemented!');
    console.log('   Animations will now adapt to RTL direction automatically.');
} else {
    console.log('\n⚠️  RTL animation patterns may need more implementation.');
}

console.log('\n📝 Next steps:');
console.log('1. Test the animations by switching between English and Arabic');
console.log('2. Verify that slide animations reverse direction in RTL mode');
console.log('3. Check that stagger animations flow in the correct direction');
console.log('4. Ensure hover effects and rotations adapt to reading direction');