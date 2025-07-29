import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const TranslationTest: React.FC = () => {
    const { t, isLoading, translations } = useTranslation();
    const { language, switchLanguage } = useLanguage();

    console.log('TranslationTest Debug:', {
        language,
        isLoading,
        translations: Object.keys(translations),
        jobsSection: translations.jobs,
    });

    if (isLoading) {
        return <div>Loading translations...</div>;
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
            <h3>Translation Test Component</h3>
            <p>Current Language: {language}</p>
            <button onClick={() => switchLanguage(language === 'en' ? 'ar' : 'en')}>
                Switch to {language === 'en' ? 'Arabic' : 'English'}
            </button>

            <div style={{ marginTop: '20px' }}>
                <h4>Jobs Translations:</h4>
                <p>jobs.title: "{t('jobs.title')}"</p>
                <p>jobs.titleHighlight: "{t('jobs.titleHighlight')}"</p>
                <p>jobs.subtitle: "{t('jobs.subtitle')}"</p>
                <p>jobs.culture.remote: "{t('jobs.culture.remote')}"</p>
                <p>jobs.applyNow: "{t('jobs.applyNow')}"</p>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h4>Raw Translations Object:</h4>
                <pre style={{ fontSize: '12px', background: '#f5f5f5', padding: '10px' }}>
                    {JSON.stringify(translations.jobs, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default TranslationTest;