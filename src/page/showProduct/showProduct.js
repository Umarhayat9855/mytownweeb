// import React, { useState } from 'react'
// import './new.scss'
// import Sidebar from '../../components/sidebar/Sidebar'
// import Navbar from '../../components/navbar/Navbar'
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { doc, onSnapshot, collection, query, where, addDoc } from "firebase/firestore";
// import db from '../../db';
// const ShowProduct = () => {
//     const [file, setFile] = useState("")
//     // const AddValue = async () => {
//     //     // const docRef = await addDoc(collection(db, "cities"), {
//     //     //     name: "Tokyo",
//     //     //     country: "Japan"
//     //     //   });
//     //     //   console.log("Document written with ID: ", docRef.id);
//     //     // const userRef = db.collection("addingThing").add({
//     //     //     fullname: 'fullname',
//     //     //     email: "email",
//     //     //   });

//     // }
//     const Fetchdata = async ()=>{
//         console.log('Fetchdata ready');
//       //   const q = query(collection(db, "Users"))
//       // const unsub = onSnapshot(q, (querySnapshot) => {
//       //   console.log("Data", querySnapshot.docs.map(d => d.data()));
//       // });
//       const docRef = await addDoc(collection(db, "cities"), {
//         name: "Tokyo",
//         country: "Japan"
//       });
//       console.log("Document written with ID: ", docRef.id);
//     }

//     return (
//         <div className='new'>
//             <Sidebar />
//             <div className='newContainer'>
//                 <Navbar />
//                 {/* <div className='top'>
//                     {title}
//                 </div> */}
//                 <div className='bottom'>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ShowProduct

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PlanProduct from "./planProduct";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ShowProduct() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="bottom">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="By Plan" {...a11yProps(0)} />
                <Tab label="By Ship" {...a11yProps(1)} />
                <Tab label="Private Sale" {...a11yProps(2)} />
                <Tab label="On Demand" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <PlanProduct />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Boat Product
            </TabPanel>
            <TabPanel value={value} index={2}>
              Private Sale
            </TabPanel>
            <TabPanel value={value} index={3}>
              On Demand Product
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
}
