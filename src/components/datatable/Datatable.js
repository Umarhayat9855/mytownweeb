import React, { useState,useEffect } from 'react'
import '../table/table.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { onSnapshot, collection, query, where, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import User from "../Image/icon.png";
import { Link } from "react-router-dom";
import './datatable.scss'
import db from '../../db';
import { useTranslation } from "react-i18next";
const Datatable = () => {
    const [data, setData] = useState([]);
    const { t } = useTranslation(["sidebar"])
        useEffect(() => {
        async function fetchMyAPI() {
            const q = query(collection(db, "All Peoples"))
          const unsub = onSnapshot(q, (querySnapshot) => {
            setData(querySnapshot.docs.map(d => d.data()));
            // serLoader(true)
          });
        }
    
        fetchMyAPI()
      }, [])
      const handleDelete = async (row) => {
        const q = query(collection(db, "All Peoples"), where('Peoplename', '==', row.Peoplename))
        const docs = await getDocs(q)
        docs.forEach((querySnapshot) => {
          deleteDoc(doc(db, "All Peoples", querySnapshot.ref._key.path.segments[6]))
        })
      }
    return (
        <div className="datatable">
        <div className="datatableTitle">
            {t("Add New User")}
            <Link to="/users/new" className="link">
                {t("Add New")}
            </Link>
        </div>
            <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell">ID</TableCell> */}
            <TableCell className="tableCell">{t("Name")}</TableCell>
            <TableCell className="tableCell">{t("Phone Number")}</TableCell>
            <TableCell className="tableCell">{t("Check No")}</TableCell>
            <TableCell className="tableCell">{t("Tehsil")}</TableCell>
            <TableCell className="tableCell">{t("Occuption")}</TableCell>
            <TableCell className="tableCell">{t("Delete")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.userid}>
              {/* <TableCell className="tableCell">{row.id}</TableCell> */}
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.Profile} alt="" className="image" />
                  {row.Peoplename}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.Phonenumber}</TableCell>
              <TableCell className="tableCell">{row.Checkno}</TableCell>
              <TableCell className="tableCell">{row.Tehsil}</TableCell>
              <TableCell className="tableCell">{row.Occuption}</TableCell>
              <TableCell >
                  <button type="button" className="btn btn-dander btn-sm" onClick={() => handleDelete(row)}
                    style={{ color: 'white', backgroundColor: "darkred" }}>{t("Delete")}</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}

export default Datatable;
