import { useContext } from 'react';
import LanguageContext from './LanguageContext';

const DisplayLanguage = () => {
    const language = useContext(LanguageContext);

    return (
        <div>
            <h1>Selected Language: {language}</h1>
        </div>
    );
};

export default DisplayLanguage;
