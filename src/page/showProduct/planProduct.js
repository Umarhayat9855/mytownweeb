import React, { useContext, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { doc, onSnapshot, collection, query, where, addDoc } from "firebase/firestore";
import db from '../../db';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function PlanProduct() {
    const [Array,setArray] = React.useState([])
    useEffect(() => {
        console.log('Fetchdata ready');
      const q = query(collection(db, "ByPlan"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      console.log("Data", querySnapshot.docs.map(d => d.data()));
      setArray(querySnapshot.docs.map(d => d.data()))
    });
      }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">New Price</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity Limit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.map((row) => (
            <StyledTableRow key={row.name} onClick={() =>alert(row.name)}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell >
              <StyledTableCell align="right" >€{row.newPrice}</StyledTableCell>
              <StyledTableCell align="right" style={{ textDecorationLine: 'line-through', }}>€{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
