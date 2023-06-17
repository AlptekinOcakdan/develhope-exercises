import { useContext } from 'react';
import LanguageContext from './LanguageContext';

const DisplayLanguage = () => {
    const selectedLanguage = useContext(LanguageContext);

    return (
        <div>
            <h2>Display Language:</h2>
            <h1>Selected Language: {selectedLanguage}</h1>
        </div>
    );
};

export default DisplayLanguage;
