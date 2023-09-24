import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import './otp.css'
import OtpInput from "otp-input-react";
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

const Otp = () => {
    const [counting, setCounting] = useState(30)
    const [otp, setOtp] = useState("")
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




    const onOtpChangeHandler = () => {

    }
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (counting > 1) {
                setCounting(counting - 1);
            } else {
                clearInterval(interval); // Stop the interval when counting reaches 0
                setCounting("00")
            }
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [counting]);

    return (
        <div>

            <div style={{ padding: "0px 20px 10px 20px" }}>
                <div className='pt-3 pb-3'>
                    <button type="button" className="btn btn-primary btn-sm" onClick={onToggleButton}>
                        {currentLanguage}
                    </button>

                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 backgroundimage">
                            <img src="midpic.png" alt="Description of the image" style={{ height: "300px" }} />

                        </div>


                        <div className="col-lg-4" style={{ paddingLeft: "60px", paddingRight: "0px" }}  >
                            <p style={{ color: "#767D87", textAlign: "right", font: "inter", fontWeight: 'bold', fontSize: "20px", paddingTop: "110px", margin: "0px" }}>{t("just texted")}</p>
                            <p style={{ textAlign: "right", color: "#767D87", fontSize: "14px", }}>{t("code")}<br />
                                <span style={{ color: "#078C61" }}>+966987654321</span></p>
                            <div></div>
                            <div style={{ textAlign: "right" }} className='pb-4' >
                                <button type="button" class="btn btn-primary btn-sm">00</button>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary btn-sm">{counting}</button>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <OtpInput OTPLength={4} otpType="number" value={otp} onChange={setOtp} disabled={false} autoFocus className="otp-container" />
                            </div>
                            <div className='pt-4' >
                            <Button buttonvalue={t("verify")} />

                            </div>
                            <div className='pt-4' style={{ textAlign: "right" }}>
                                <p style={{ color: "#767D87", fontSize: "14px" }}>{t("otp")}<span style={{ color: "#078C61" }}>{t("resend")}</span></p>

                            </div>








                        </div>



                    </div>

                </div>





            </div>
            <p className='text-center textcolor'>{t('alrightreserve')}</p>
        </div>
    )
}
export default Otp;