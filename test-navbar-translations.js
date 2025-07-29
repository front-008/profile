// Test script to verify navbar translations
import fs from 'fs';

// Read translation files
const enTranslations = JSON.parse(fs.readFileSync('src/translations/en.json', 'utf8'));
const arTranslations = JSON.parse(fs.readFileSync('src/translations/ar.json', 'utf8'));

console.log('Testing Navbar Translations...\n');

// Test all navbar translation keys
const navbarKeys = [
    'products', 'company', 'newsroom', 'getInTouch',
    'logistics', 'erp', 'ecommerce', 'pos',
    'ourStory', 'team', 'jobs',
    'logisticsDescription', 'erpDescription', 'ecommerceDescription', 'posDescription',
    'logisticsShort', 'erpShort', 'ecommerceShort', 'posShort',
    'switchToEnglish', 'switchToArabic'
];

let allTestsPassed = true;

navbarKeys.forEach(key => {
    const enValue = enTranslations.navbar[key];
    const arValue = arTranslations.navbar[key];
    
    if (!enValue) {
        console.log(`❌ Missing English translation for: ${key}`);
        allTestsPassed = false;
    }
    
    if (!arValue) {
        console.log(`❌ Missing Arabic translation for: ${key}`);
        allTestsPassed = false;
    }
    
    if (enValue && arValue) {
        console.log(`✅ ${key}: "${enValue}" -> "${arValue}"`);
    }
});

console.log('\n' + '='.repeat(50));
if (allTestsPassed) {
    console.log('🎉 All navbar translations are complete!');
} else {
    console.log('❌ Some translations are missing.');
}

// Test specific product descriptions
console.log('\n📋 Product Descriptions:');
console.log('English:');
console.log(`  Logistics: ${enTranslations.navbar.logisticsDescription}`);
console.log(`  ERP: ${enTranslations.navbar.erpDescription}`);
console.log(`  E-commerce: ${enTranslations.navbar.ecommerceDescription}`);
console.log(`  POS: ${enTranslations.navbar.posDescription}`);

console.log('\nArabic:');
console.log(`  اللوجستيات: ${arTranslations.navbar.logisticsDescription}`);
console.log(`  تخطيط موارد المؤسسة: ${arTranslations.navbar.erpDescription}`);
console.log(`  التجارة الإلكترونية: ${arTranslations.navbar.ecommerceDescription}`);
console.log(`  نقطة البيع: ${arTranslations.navbar.posDescription}`);

console.log('\n📱 Mobile Short Descriptions:');
console.log('English:');
console.log(`  Logistics: ${enTranslations.navbar.logisticsShort}`);
console.log(`  ERP: ${enTranslations.navbar.erpShort}`);
console.log(`  E-commerce: ${enTranslations.navbar.ecommerceShort}`);
console.log(`  POS: ${enTranslations.navbar.posShort}`);

console.log('\nArabic:');
console.log(`  اللوجستيات: ${arTranslations.navbar.logisticsShort}`);
console.log(`  تخطيط موارد المؤسسة: ${arTranslations.navbar.erpShort}`);
console.log(`  التجارة الإلكترونية: ${arTranslations.navbar.ecommerceShort}`);
console.log(`  نقطة البيع: ${arTranslations.navbar.posShort}`);