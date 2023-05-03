import React, { useState } from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { doc, onSnapshot, collection, query, where, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage, } from "firebase/storage";
import db from '../../db';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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

    const Adddata = async () => {

        const docRef = await addDoc(collection(db, "All Peoples"), {
            Peoplename: Name,
            Lastname: LastName,
            Occuption: Occuption,
            Phonenumber: Phonenumber,
            Gender: Gender,
            Tehsil: Tehsil,
            Checkno: Mahala,
            Profile: imgUrl,
        });
        console.log("Document written with ID: ", file);
    }
    const uploadImage = async (e) => {
        console.log("The error ois,", file);
        e.preventDefault();
        // if (imgUrl === "") {
        //   toast.error("Please upload the image first")
        //   return
        // }
        if (file === "") {
            // toast.error("Please Upload Image");
            alert("Please Upload Image")
            return;
        }
        // setLoader(false);
        if (
            Name === ""

        ) {
            // setLoader(true);
            alert("Please enter product details first ")
            // toast.error("Please enter product details first ");
        } else {
            // Add loader variable here ;

            const storage = getStorage();
            const storageRef = ref(storage, `/file/${Name}`);
            await uploadBytes(storageRef, file).then((snapshot) => {
                alert("File uploaded")
                // toast.success("File uploaded success");
                // setLoader(true);
            });
            await getDownloadURL(ref(storage, `/file/${Name}`))
                .then((url) => {
                    setImgUrl(url);
                })
                .catch((error) => {
                    alert("error")
                    // toast.error("Error");
                });
            // console.log("selectedDate", date);
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
                    <div className='left'>
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
                            Upload image
                        </button>
                    </div>
                    <div className='right'>
                        <form>
                            <div className='formInput'>
                                <label htmlFor='file'>
                                    Image: <DriveFolderUploadOutlinedIcon className='icon' />
                                </label>
                                <input
                                    type='file' id='file'
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }} />
                            </div>

                            <div className="formInput">
                                {/* <label>{input.label}</label> */}
                                <label>First Name</label>
                                {/* <input type={input.type} placeholder={input.placeholder} /> */}
                                <input placeholder='First Name'
                                    onChange={event => setName(event.target.value)} required
                                ></input>
                                <label>Last Name</label>
                                <input placeholder='Last Name' onChange={event => setLastName(event.target.value)} required></input>
                                <label>Phone</label>
                                <input placeholder='Phone' onChange={event => setPhonenumber(event.target.value)} required></input>
                                <label for="Occupation">Occupation</label>
                                <select id="Occupation" name="Occupation" onChange={event => setOccupation(event.target.value)} required>
                                    <option value="Labour">Labour</option>
                                    <option value="farmor">farmor</option>
                                    <option value="Other">Other</option>
                                </select>
                                {/* <label>State</label>
                                <input placeholder='State'onChange={event => setName(event.target.value)}></input> */}
                                <label>Tehsil</label>
                                <input placeholder='Tehsil' onChange={event => setTehsil(event.target.value)} required></input>
                                <label>Check No</label>
                                <input placeholder='Check No' onChange={event => setMahala(event.target.value)} required></input>
                                {/* <label for="Gender">Gender:</label>
                                <select id="Gender" name="Gender" onChange={event => setGender(event.target.value)} required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select> */}
                            </div>

                            {/* <button onClick={Adddata}>Add</button> */}
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" onClick={Adddata}>Add</Button>
                            </Stack>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New