import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import LanguageButton from "../components/LanguageButton/LanguageButton";
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
const Users = () => {
    const [data, setData] = useState([]);
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
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {



        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
            // Update the state with the fetched data
            setData(response.data.data);
            console.log(response.data.data)
        } catch (err) {
            console.log(err)

        }
    };




    return (
        <div style={{ backgroundColor: "#f1f2f6", height: "100vh" }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <Navbar cont={t("hi")}/>
                        <div class="card mt-3" style={{ width: "100%", border: "none", margin: "0px !important" }}>
                            <div class="card-body" style={{ padding: "0px !important", margin: "0px !important" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <button type="button" class="btn  btn-sm" style={{backgroundColor:"#00b894"}}>{t("adduser")}&nbsp; <span style={{ color: "yellow" }}>+</span> </button>
                                    <span style={{ color: "#767D87", fontSize: "13px" }}>{t("users")} <img src="profile.png" alt="man" height={13} /></span>
                                </div>
                                <hr style={{ borderColor: '#E1E1E1' }} />
                                <p style={{ fontSize: "13px", textAlign: "right", margin: "0", padding: "0" }}>{t("search")}</p>
                                <div className="row pt-2">
                                    <div className="col-9">
                                        <div style={{ position: "relative" }}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder={t("searchid")}
                                                style={{
                                                    textAlign: "right",
                                                    color: "#B5B5B5",
                                                    fontSize: "13px",
                                                    paddingRight: "30px",
                                                }}
                                            />
                                            <span
                                                className="input-image"
                                                style={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    right: "10px",
                                                    transform: "translateY(-50%)",
                                                }}
                                            >
                                                <img
                                                    src="search.png"
                                                    alt="Search Icon"
                                                    height="15"
                                                    width="15"
                                                />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-3"><select id="inputState" class="form-control" style={{ color: "#B5B5B5", fontSize: "13px", textAlign: "right" }}>
                                        <option >{t("cost")}</option>
                                        <option>...</option>
                                    </select></div>


                                </div>
                                <hr style={{ borderColor: '#E1E1E1', padding: "0px !important" }} />


                                <table class="table ">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ fontSize: "12px", color: "#767D87" }}>{t("action")}</th>
                                            <th scope="col" style={{ fontSize: "12px", color: "#767D87" }}>{t("profileimage")}</th>
                                            <th scope="col" style={{ fontSize: "12px", color: "#767D87" }}>{t("employeeage")}</th>
                                            <th scope="col" style={{ fontSize: "12px", color: "#767D87" }}>{t("employeesalary")}</th>
                                            <th scope="col" style={{ fontSize: "12px", color: "#767D87" }}>{t("employeename")}</th>
                                        </tr>
                                    </thead>
                                    {
                                        data?.slice(0, 6)?.map((value, index) => {
                                            return (
                                                <tbody>
                                                    <tr key={index}>
                                                        <td style={{ color: "#767D87", fontSize: "13px" }}> <img src="delete.png" height={12} alt="api not provide" />&nbsp;&nbsp;<img src="edit.png" height={12} alt="api not provide" />&nbsp;&nbsp;<img src="show.png" height={12} alt="api not provide" /></td>
                                                        <td style={{ color: "#767D87", fontSize: "13px" }}> <img src={value.employee_age} alt={t("apinotprovided")} /></td>
                                                        <td style={{ color: "#767D87", fontSize: "13px" }}>{value.employee_age}</td>
                                                        <td style={{ color: "#767D87", fontSize: "13px" }}>{value.employee_salary}</td>
                                                        <td style={{ color: "#767D87", fontSize: "13px" }}>{value.employee_name}</td>

                                                    </tr>


                                                </tbody>

                                            )



                                        })
                                    }

                                </table>



                            </div>

                        </div>
                        <div class="card mt-2" style={{ width: "100%", border: "none", }}>

                            <div class="card-body">
                                <p className="text-center " style={{ fontSize: "12px", color: "#B5B5B5" }}>{t("alrightreserve")}</p>


                            </div>
                        </div>




                    </div>
                    <div className="col-2">
                        <div class="card" style={{ width: "100%", border: "none", borderRadius: "0px" }}>

                            <div class="card-body">
                                <div className="text-center ">
                                    <button type="button" className="btn btn-sm" style={{backgroundColor:"#81ecec"}} onClick={onToggleButton}>
                                        {currentLanguage}
                                    </button>
                                </div>
                                <hr style={{ borderColor: '#E1E1E1', padding: "0px !important" }} />
                                <div>
                                    <button type="button" class="btn  btn-sm w-100 mt-3" style={{ textAlign: 'right' }}><span style={{ color: "#767D87", fontSize: "13px" }}> {t("dashboard")}</span>&nbsp;&nbsp;<img src="Category.png" height={11} alt="kuch b " /> </button>
                                    <button type="button" class="btn btn-sm w-100 mt-3" style={{ textAlign: 'right' }}><span style={{ color: "#767D87", fontSize: "13px" }}> {t("profile")}</span>&nbsp;&nbsp;<img src="profile.png" height={11} alt="kuch b " /> </button>
                                    <button type="button" class="btn  btn-sm w-100 mt-3" style={{ textAlign: 'right' }}><span style={{ color: "#767D87", fontSize: "13px" }}> {t("inventory")}</span>&nbsp;&nbsp;<img src="Document.png" height={11} alt="kuch b " /> </button>
                                    <button type="button" class="btn  btn-sm w-100 mt-3" style={{ textAlign: 'right' }}><span style={{ color: "#767D87", fontSize: "13px" }}> {t("purchaserequests")}</span>&nbsp;&nbsp;<img src="purchase.png" height={11} alt="kuch b " /> </button>
                                    <button type="button" class="btn  btn-sm w-100 mt-3" style={{ textAlign: 'right' }}><span style={{ color: "#767D87", fontSize: "13px" }}> {t("itemrequest")}</span>&nbsp;&nbsp;<img src="item.png" height={11} alt="kuch b " /> </button>
                                    <button type="button" class="btn  btn-sm w-100 mt-3" style={{ textAlign: 'right' }}><span style={{ color: "#767D87", fontSize: "13px" }}> {t("meetings")}</span>&nbsp;&nbsp;<img src="group.png" height={11} alt="kuch b " /> </button>
                                    <button type="button" class="btn  btn-sm w-100 mt-3" style={{ textAlign: 'right' }}><span style={{ color: "#767D87", fontSize: "13px" }}> {t("messages")}</span>&nbsp;&nbsp;<img src="message.png" height={11} alt="kuch b " /> </button>
                                    <button type="button" class="btn  btn-sm w-100 mt-3" style={{ textAlign: 'right',backgroundColor:"#00b894" }}><span style={{ color: "#767D87", fontSize: "13px" }}> {t("users")}</span>&nbsp;&nbsp;<img src="profile.png" height={11} alt="kuch b " /> </button>
                                    <button type="button" class="btn btn-sm w-100 mt-3" style={{ textAlign: 'right' }}><span style={{ color: "#767D87", fontSize: "13px" }}> {t("setting")}</span>&nbsp;&nbsp;<img src="Setting.png" height={11} alt="kuch b " /> </button>
                                    <div className="text-center pt-4" style={{ paddingBottom: "44px" }}>


                                        <button type="button" class="btn  btn-sm" style={{backgroundColor:"#e17055"}}>{t("logout")}</button>
                                    </div>




                                </div>



                            </div>
                        </div>
                    </div>

                </div>

            </div>






        </div>
    )
}
export default Users;