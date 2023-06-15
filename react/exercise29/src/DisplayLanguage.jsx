import LanguageContext from './LanguageContext';

const DisplayLanguage = () => {
    return (
        <div>
            <h2>Display Language:</h2>
            <LanguageContext.Consumer>
                {(selectedLanguage) => (
                    <h1>Selected Language: {selectedLanguage}</h1>
                )}
            </LanguageContext.Consumer>
        </div>
    );
};

export default DisplayLanguage;