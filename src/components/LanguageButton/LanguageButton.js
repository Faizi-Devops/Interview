import { useState } from "react";

const LanguageButton = () => {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const onToggleButton = () => {
    if (currentLanguage === 'English') {
      setCurrentLanguage('Arabic');
    } else {
      setCurrentLanguage('English');
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-primary btn-sm" onClick={onToggleButton}>
        {currentLanguage}
      </button>
    </div>
  );
};

export default LanguageButton;





