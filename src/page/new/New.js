import React, { useState } from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { doc, onSnapshot, collection, query, where, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage, } from "firebase/storage";
import db from '../../db';
import LoadingSpin from "react-loading-spin";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
const New = () => {
    const [file, setFile] = useState("")
    const [Name, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Occuption, setOccupation] = useState('');
    const [Phonenumber, setPhonenumber] = useState('');
    const [Gender, setGender] = useState('')
    const [Tehsil, setTehsil] = useState('');
    const [Mahala, setMahala] = useState('');
    const [imgUrl, setImgUrl] = useState("");
    const [Loader, setLoader] = useState(true);
    const { t } = useTranslation(["sidebar"])
    const Adddata = async () => {
        if (
            Name === "" &&
            Occuption === "" &&
            Phonenumber === "" &&
            Tehsil === "" &&
            Mahala === "" &&
            imgUrl === "") {
            toast.error("Please Enter Detail")
        }
        else {
            const docRef = await addDoc(collection(db, "All Peoples"), {
                Peoplename: Name,
                // Lastname: LastName,
                Occuption: Occuption,
                Phonenumber: Phonenumber,
                // Gender: Gender,
                userid: Math.random().toString(32).substring(1, 18),
                Tehsil: Tehsil,
                Checkno: Mahala,
                Profile: imgUrl,
            });
            toast.success("Add Seccessfull")
            setName("");
            setOccupation("");
            setPhonenumber("");
            setTehsil("");
            setMahala("");
            setImgUrl("");
            setFile("");
        }

    }
    const uploadImage = async (e) => {
        e.preventDefault();
        if (file === "") {
            toast.error("Please Upload Image")
            return;
        }
        setLoader(false);
        if (
            Name === ""

        ) {
            setLoader(true);
            toast.error("Please enter details first ")
        } else {

            const storage = getStorage();
            const storageRef = ref(storage, `/file/${Name}`);
            await uploadBytes(storageRef, file).then((snapshot) => {
                toast.success("File upload Successfully")
                setLoader(true);
            });
            await getDownloadURL(ref(storage, `/file/${Name}`))
                .then((url) => {
                    setImgUrl(url);
                })
                .catch((error) => {
                    alert("error")
                });
        }
    };

    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                {/* <div className='top'>
                    {title}
                </div> */}
                <div className='bottom'>
                    {/* <div className='left'>
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                        <button
                            className="imagebutton"
                            onClick={(e) => uploadImage(e)}
                        >
                            {t("Upload Image")}
                        </button>
                    </div> */}
                    {/* <div className='right'>
                        <form>
                            <div className='formInput'>
                                <label htmlFor='file'>
                                    {t("Image")}: <DriveFolderUploadOutlinedIcon className='icon' />
                                </label>
                                <input
                                    type='file' id='file'
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }} />
                            </div>

                            <div className="formInput">
                                <label>{t("Name")}</label>
                                <input placeholder={t('Enter Name')}
                                    onChange={event => setName(event.target.value)} required
                                ></input>
                                
                                <label>{t("Phone Number")}</label>
                                <input placeholder={t('Phone Number')} onChange={event => setPhonenumber(event.target.value)} required></input>
                                <label for="Occupation">{t("Occupation")}</label>
                                <select id="Occupation" name="Occupation" onChange={event => setOccupation(event.target.value)} required>
                                    <option value="Labour">{t("Labour")}</option>
                                    <option value="farmor">{t("farmor")}</option>
                                    <option value="Other">{t("Other")}</option>
                                </select>
                                <label for="Tehsil">{t("Tehsil")}</label>
                                <select id="Tehsil" name="Tehsil" onChange={event => setTehsil(event.target.value)} required>
                                    <option value="Gojra">{t("Gojra")}</option>
                                    <option value="Toba">{t("Toba")}</option>
                                    <option value="Other">{t("Other")}</option>
                                </select>
                                <label for="Check No">{t("Check No")}</label>
                                <select id="Check No" name="Check No" onChange={event => setMahala(event.target.value)} required>
                                    <option value="155">{t("155")}</option>
                                    <option value="156">{t("156")}</option>
                                    <option value="158">{t("158")}</option>
                                </select>
                            </div>
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" onClick={Adddata}>{t("Add")}</Button>
                            </Stack>
                        </form>
                    </div> */}
                    <form class="card">
                        <div class="containeer">
                            {/* <div class="card-title">
                                <h2>{t("User Information")}</h2>
                            </div> */}
                            {!Loader ? (
                                <div className="loader">
                                    <LoadingSpin size={50} />
                                </div>
                            ) : (
                                <div class="card-body">
                                    <div className='left'>
                                        <img
                                            src={
                                                file
                                                    ? URL.createObjectURL(file)
                                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                            }
                                            alt=""
                                        />
                                        <div className='formInput'>
                                            <label htmlFor='file'>
                                                <b>{t("Image")}</b>: <DriveFolderUploadOutlinedIcon className='icon' style={{ marginBottom: "-8PX" }} />
                                            </label>
                                            <input
                                                type='file' id='file'
                                                onChange={(e) => setFile(e.target.files[0])}
                                                style={{ display: "none" }} />
                                        </div>
                                        <button
                                            className="imagebutton"
                                            onClick={(e) => uploadImage(e)}
                                        >
                                            {t("Upload Image")}
                                        </button>
                                    </div>

                                    <div class="payment-info flex justify-space-between">
                                        <div class="column billing">
                                            <div class="field full">
                                                <label>{t("Name")}</label>
                                                <input id="name" type="text" className='user__inpt' placeholder={t('Enter Name')}
                                                    onChange={event => setName(event.target.value)} value={Name} required
                                                />
                                            </div>
                                            <div class="field full">
                                                <label for="Occupation">{t("Occupation")}</label>
                                                <select id="Occupation" name="Occupation"
                                                    onChange={event => setOccupation(event.target.value)} value={Occuption} required>
                                                    <option value="Labour">{t("Labour")}</option>
                                                    <option value="farmor">{t("farmor")}</option>
                                                    <option value="Other">{t("Other")}</option>
                                                </select>
                                            </div>
                                            <div class="flex justify-space-between">
                                                <div class="field half">
                                                    <label for="Check No">{t("Check No")}</label>
                                                    <select id="Check No" name="Check No"
                                                        onChange={event => setMahala(event.target.value)} value={Mahala} required>
                                                        <option value="155">{t("155")}</option>
                                                        <option value="156">{t("156")}</option>
                                                        <option value="158">{t("158")}</option>
                                                    </select>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="column shipping">

                                            <div class="field full">
                                                <label>{t("Phone Number")}</label>
                                                <input id="Phone Number" type="text" className='user__inpt' placeholder={t("Phone Number")}
                                                    onChange={event => setPhonenumber(event.target.value)} value={Phonenumber}
                                                    required
                                                />
                                            </div>
                                            <div class="field full">
                                                <label for="Tehsil">{t("Tehsil")}</label>
                                                <select id="Tehsil" name="Tehsil" value={Tehsil} onChange={event => setTehsil(event.target.value)} required>
                                                    <option value="Gojra">{t("Gojra")}</option>
                                                    <option value="Toba">{t("Toba")}</option>
                                                    <option value="Other">{t("Other")}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <Stack spacing={2} direction="row" style={{ justifyContent: "center" }}>
                                <Button variant="contained" onClick={Adddata}>{t("Add")}</Button>
                            </Stack>
                        </div>
                    </form>
                </div>
                <Toaster />
            </div>
        </div>
    )
}

export default New