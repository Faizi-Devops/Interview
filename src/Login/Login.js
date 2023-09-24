import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import './login.css'
import OtpInput from "otp-input-react";
import { Codes } from '../components/Codes/Codes';
import { auth } from '../firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import LanguageButton from '../components/LanguageButton/LanguageButton';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from "../Locals/en.json";
import arTranslation from '../Locals/ar.json';
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: { translation: enTranslation },
            ar: { translation: arTranslation },
        },
        lng: 'en', // Default language
        fallbackLng: 'en', // Fallback language
        interpolation: {
            escapeValue: false, // React already handles escape
        },
    });
const Login = () => {
    const [counting, setCounting] = useState(30)
    const [otp, setOtp] = useState("")
    const [data, setData] = useState(Codes)
    const [selectedCountry, setSelectedCountry] = useState("+92"); // Default value
    const [dropdownClicked, setDropdownClicked] = useState(false);
    const [extra,setExtra]=useState()
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('English');
    const [currentLanguag, setCurrentLanguag] = useState('en');

    const onToggleButton = () => {
      const newLanguage = currentLanguage === 'English' ? 'Arabic' : 'English';
      setCurrentLanguage(newLanguage);
      i18n.changeLanguage(newLanguage === 'English' ? 'en' : 'ar');
      // if (currentLanguage === 'English') {
      //   setCurrentLanguage('Arabic');
      //   setCurrentLanguag('ar')
      // } else {
      //   setCurrentLanguage('English');
      //   setCurrentLanguag('en')
      // }
    };
  

    

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
        setDropdownClicked(true);
    }

    console.log(selectedCountry)
const onExtraHandler = (e) =>{
    setExtra(e.target.value)

}


let onSignup = () => {
    const phoneNumberWithCountryCode = selectedCountry + extra;

  // Create a new instance of reCAPTCHA
  const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    size: 'normal',
    callback: (response) => {
      // reCAPTCHA solved, allow sending the code
      signInWithPhoneNumber(auth, phoneNumberWithCountryCode, recaptchaVerifier)
        .then((confirmationResult) => {
          // OTP sent successfully
          console.log('OTP sent successfully');
          // Save the confirmationResult for future use, e.g., for verifying the OTP
          // confirmationResult can be used later to verify the OTP
        })
        .catch((error) => {
          console.error('Error sending OTP:', error);
        });
    },
    'expired-callback': () => {
      // reCAPTCHA expired, handle accordingly
      console.error('reCAPTCHA expired');
    },
  });

  recaptchaVerifier.render().then((widgetId) => {
    // You can use widgetId if needed
  });
   
  };
  
  


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};
    return (
        <div>

<div style={{padding:"0px 20px 15px 20px"}}>
                <div className='pt-3 pb-3'>
                
                    <button type="button" className="btn btn-primary btn-sm" onClick={onToggleButton}>
                        {currentLanguage}
                    </button>

                

                </div>
                <div id='recaptcha-container'></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 backgroundimage">
                            <img src="midpic.png" alt="Description of the image" style={{ height: "300px" }} />

                        </div>


                        <div className="col-lg-4" style={{ paddingLeft: "60px", paddingRight: "0px" }}  >
                            <p style={{ color: "#767D87", textAlign: "right", font: "inter", fontWeight: 'bold', fontSize: "20px", paddingTop: "200px", margin: "0px" }}>{t("phone")}</p>

                            <div></div>
                            <div id="recaptcha-container"></div>



                            <div className='row pt-4'>
                                <div className="col-3">
                                    <select
                                        id="inputState"
                                        className="form-control"
                                        style={{ height: "70px",color:"#B5B5B5",fontWeight:"bold",fontSize:"20px" }}

                                        value={dropdownClicked ? selectedCountry:"+92"}
                                        onChange={handleChange}
                                    >
                                        {data.map((option, index) => (
                                            <option key={index} value={option.code}>
                                                {selectedCountry === option.code ? option.code : option.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-9'><input type="number" class="form-control"  onChange={onExtraHandler} style={{ height: "70px" }} id="inputPassword2" placeholder="3xx xxxxxxx"></input></div>

                            </div>


                            <div className='pt-4' >
                                <Button buttonvalue={t("signin")} onClick={onSignup} />

                            </div>
                           








                        </div>



                    </div>

                </div>





            </div>
            <p className='text-center textcolor'>{t("alrightreserve")}</p>
        </div>
    )
}
export default Login;