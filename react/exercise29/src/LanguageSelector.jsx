import { useState } from 'react';
import LanguageContext from './LanguageContext';
import DisplayLanguage from './DisplayLanguage';

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div>
            <h2>Select Language:</h2>
            <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="">Select</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
            </select>
            <LanguageContext.Provider value={selectedLanguage}>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>
    );
};

export default LanguageSelector;
