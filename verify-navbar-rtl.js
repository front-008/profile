// Verification script for navbar RTL functionality
// This script can be run in the browser console to test RTL features

console.log('🔍 Starting Navbar RTL Verification...');

// Test 1: Check if language context is available
function testLanguageContext() {
  console.log('\n📋 Test 1: Language Context');
  
  const languageButtons = document.querySelectorAll('button[aria-label*="Switch to"]');
  if (languageButtons.length >= 2) {
    console.log('✅ Language toggle buttons found');
    return true;
  } else {
    console.log('❌ Language toggle buttons not found');
    return false;
  }
}

// Test 2: Check dropdown positioning
function testDropdownPositioning() {
  console.log('\n📋 Test 2: Dropdown Positioning');
  
  const dropdowns = document.querySelectorAll('.group .absolute.top-full');
  let rtlAware = true;
  
  dropdowns.forEach((dropdown, index) => {
    const hasRTLPositioning = dropdown.className.includes('right-1/2') || 
                             dropdown.className.includes('left-1/2');
    if (!hasRTLPositioning) {
      console.log(`❌ Dropdown ${index + 1} missing RTL positioning`);
      rtlAware = false;
    }
  });
  
  if (rtlAware && dropdowns.length > 0) {
    console.log('✅ Dropdown positioning is RTL-aware');
    return true;
  } else {
    console.log('❌ Dropdown positioning needs RTL adaptation');
    return false;
  }
}

// Test 3: Check ExternalLink icon positioning
function testIconPositioning() {
  console.log('\n📋 Test 3: Icon Positioning');
  
  const iconContainers = document.querySelectorAll('.absolute.top-4');
  let rtlAware = true;
  
  iconContainers.forEach((container, index) => {
    const hasRTLPositioning = container.className.includes('right-4') || 
                             container.className.includes('left-4');
    if (!hasRTLPositioning) {
      console.log(`❌ Icon container ${index + 1} missing RTL positioning`);
      rtlAware = false;
    }
  });
  
  if (rtlAware && iconContainers.length > 0) {
    console.log('✅ Icon positioning is RTL-aware');
    return true;
  } else {
    console.log('❌ Icon positioning needs RTL adaptation');
    return false;
  }
}

// Test 4: Check mobile menu layout
function testMobileMenuLayout() {
  console.log('\n📋 Test 4: Mobile Menu Layout');
  
  const mobileMenu = document.querySelector('.md\\:hidden.fixed');
  if (mobileMenu) {
    const hasRTLLayout = mobileMenu.className.includes('right-4') || 
                        mobileMenu.className.includes('left-4');
    if (hasRTLLayout) {
      console.log('✅ Mobile menu has RTL-aware layout');
      return true;
    } else {
      console.log('❌ Mobile menu missing RTL layout');
      return false;
    }
  } else {
    console.log('⚠️ Mobile menu not currently visible');
    return true; // Not an error if not visible
  }
}

// Test 5: Check space-x-reverse usage
function testSpacingUtilities() {
  console.log('\n📋 Test 5: Spacing Utilities');
  
  const elementsWithSpacing = document.querySelectorAll('[class*="space-x-reverse"]');
  if (elementsWithSpacing.length > 0) {
    console.log(`✅ Found ${elementsWithSpacing.length} elements with RTL spacing`);
    return true;
  } else {
    console.log('❌ No RTL spacing utilities found');
    return false;
  }
}

// Test 6: Check HTML dir attribute
function testDirectionAttribute() {
  console.log('\n📋 Test 6: Direction Attribute');
  
  const htmlElement = document.documentElement;
  const dirAttribute = htmlElement.getAttribute('dir');
  
  if (dirAttribute === 'ltr' || dirAttribute === 'rtl') {
    console.log(`✅ HTML dir attribute is set to: ${dirAttribute}`);
    return true;
  } else {
    console.log('❌ HTML dir attribute not properly set');
    return false;
  }
}

// Run all tests
function runAllTests() {
  console.log('🚀 Running Navbar RTL Verification Tests...\n');
  
  const tests = [
    testLanguageContext,
    testDropdownPositioning,
    testIconPositioning,
    testMobileMenuLayout,
    testSpacingUtilities,
    testDirectionAttribute
  ];
  
  let passedTests = 0;
  const totalTests = tests.length;
  
  tests.forEach(test => {
    if (test()) {
      passedTests++;
    }
  });
  
  console.log(`\n📊 Results: ${passedTests}/${totalTests} tests passed`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All navbar RTL tests passed!');
  } else {
    console.log('⚠️ Some tests failed. Check the output above for details.');
  }
  
  return passedTests === totalTests;
}

// Auto-run tests
runAllTests();

// Export for manual testing
window.verifyNavbarRTL = runAllTests;