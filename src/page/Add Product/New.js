import React, { useState } from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { doc, onSnapshot, collection, query, where, addDoc } from "firebase/firestore";
import db from '../../db';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const StateArray = [
  {
    value: 'New',
    label: 'New',
  },
  {
    value: 'Used',
    label: 'Used',
  },
];
const arrayOFF = Array.from(Array(100).keys());
const QuantityArray = arrayOFF.map(arrayOFF => {
  return { label: arrayOFF, value: arrayOFF };
});
const ByPlan = () => {
  const [file, setFile] = useState("")
  const [State, setState] = useState('New');
  const [Quantity, setQuantity] = useState(0);
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [NewPrice, setNewPrice] = useState('');

  const handleChangeState = (event) => {
    setState(event.target.value);
  };
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const SubmiteData = async () => {

    const docRef = await addDoc(collection(db, "ByPlan"), {
      name: Name,
      Price: Price,
      newPrice: NewPrice,
      // state:State,
      quantity: Quantity
    });
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={State}
          onChange={handleChangeState}
          helperText="Please select State"
        >
          {StateArray.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={Quantity}
              onChange={handleChangeQuantity}
              helperText="Please Select Quantity"
            >
              {QuantityArray.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              label="Product Name"
              onChange={event => setName(event.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Product Price"
              onChange={event => setPrice(event.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Product New Price"
              onChange={event => setNewPrice(event.target.value)}
            />
          </div>
        </Box>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={SubmiteData}>Add Product</Button>
        </Stack>
      </div>
    </div>
  )
}

export default ByPlan