import React from 'react';
import { useLanguage } from './contexts/LanguageContext';
import { useFontSwitching, getFontClass, getArabicFontWeight } from './hooks/use-font-switching';
import { getRTLAnimation, getRTLPosition, getRTLMargin, combineRTLClasses } from './lib/rtl-animation-utils';

/**
 * Test component for Cairo font integration and RTL CSS utilities
 * This component demonstrates all the implemented features
 */
export const TestFontRTLIntegration: React.FC = () => {
  const { language, isRTL, switchLanguage } = useLanguage();
  const { currentFont, isArabicFont, fontFamily } = useFontSwitching();

  const testClasses = combineRTLClasses(['ml-4', 'text-left', 'translate-x-full'], isRTL);
  const animationClass = getRTLAnimation('slide', 'left', isRTL);
  const positionClass = getRTLPosition('left-4', isRTL);
  const marginClass = getRTLMargin('ml-auto', isRTL);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Font & RTL Integration Test</h1>
      
      {/* Language Switching */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Language Controls</h2>
        <div className="flex gap-4">
          <button
            onClick={() => switchLanguage('en')}
            className={`px-4 py-2 rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            English
          </button>
          <button
            onClick={() => switchLanguage('ar')}
            className={`px-4 py-2 rounded ${language === 'ar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            عربي
          </button>
        </div>
      </div>

      {/* Font Information */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Font Information</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Current Language:</strong> {language}</p>
          <p><strong>Is RTL:</strong> {isRTL ? 'Yes' : 'No'}</p>
          <p><strong>Current Font:</strong> {currentFont}</p>
          <p><strong>Is Arabic Font:</strong> {isArabicFont ? 'Yes' : 'No'}</p>
          <p><strong>Font Family:</strong> {fontFamily}</p>
        </div>
      </div>

      {/* Font Display Test */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Font Display Test</h2>
        <div className={`p-4 border rounded ${getFontClass(language)}`}>
          {language === 'ar' ? (
            <div className="space-y-2">
              <p className="text-lg">هذا نص تجريبي باللغة العربية</p>
              <p className="text-base">يستخدم خط Cairo للنصوص العربية</p>
              <p className={getArabicFontWeight('font-bold')}>نص عريض بخط Cairo</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-lg">This is test text in English</p>
              <p className="text-base">Using Inter font for English text</p>
              <p className="font-bold">Bold text with Inter font</p>
            </div>
          )}
        </div>
      </div>

      {/* RTL Layout Test */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">RTL Layout Test</h2>
        <div className={`p-4 border rounded ${isRTL ? 'rtl:text-right' : 'text-left'}`}>
          <div className={`flex ${isRTL ? 'rtl:flex-row-reverse' : 'flex-row'} gap-4`}>
            <div className="bg-blue-200 p-2 rounded">Box 1</div>
            <div className="bg-green-200 p-2 rounded">Box 2</div>
            <div className="bg-red-200 p-2 rounded">Box 3</div>
          </div>
        </div>
      </div>

      {/* RTL Utilities Test */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">RTL Utilities Test</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Combined RTL Classes:</strong> {testClasses}</p>
          <p><strong>Animation Class:</strong> {animationClass}</p>
          <p><strong>Position Class:</strong> {positionClass}</p>
          <p><strong>Margin Class:</strong> {marginClass}</p>
        </div>
      </div>

      {/* Animation Test */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Animation Test</h2>
        <div className={`p-4 border rounded ${animationClass}`}>
          <p>This box should animate from the correct direction based on language</p>
        </div>
      </div>

      {/* Logical Properties Test */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Logical Properties Test</h2>
        <div className="space-y-2">
          <div className="ps-4 pe-8 bg-yellow-100 p-2 rounded">
            Padding Start: 1rem, Padding End: 2rem
          </div>
          <div className="ms-auto me-4 bg-purple-100 p-2 rounded w-fit">
            Margin Start: auto, Margin End: 1rem
          </div>
          <div className="text-start bg-pink-100 p-2 rounded">
            Text aligned to start
          </div>
          <div className="text-end bg-cyan-100 p-2 rounded">
            Text aligned to end
          </div>
        </div>
      </div>
    </div>
  );
};