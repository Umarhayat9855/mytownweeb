// // import React from 'react'
// // import './table.scss'
// // import Table from "@mui/material/Table";
// // import TableBody from "@mui/material/TableBody";
// // import TableCell from "@mui/material/TableCell";
// // import TableContainer from "@mui/material/TableContainer";
// // import TableHead from "@mui/material/TableHead";
// // import TableRow from "@mui/material/TableRow";
// // import Paper from "@mui/material/Paper";
// // const List = () => {
// //     const rows = [
// //         {
// //             id: 1143155,
// //             product: "Acer Nitro 5",
// //             img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
// //             customer: "John Smith",
// //             date: "1 March",
// //             amount: 785,
// //             method: "Cash on Delivery",
// //             status: "Approved",
// //         },
// //         {
// //             id: 2235235,
// //             product: "Playstation 5",
// //             img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
// //             customer: "Michael Doe",
// //             date: "1 March",
// //             amount: 900,
// //             method: "Online Payment",
// //             status: "Pending",
// //         },
// //         {
// //             id: 2342353,
// //             product: "Redragon S101",
// //             img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
// //             customer: "John Smith",
// //             date: "1 March",
// //             amount: 35,
// //             method: "Cash on Delivery",
// //             status: "Pending",
// //         },
// //         {
// //             id: 2357741,
// //             product: "Razer Blade 15",
// //             img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
// //             customer: "Jane Smith",
// //             date: "1 March",
// //             amount: 920,
// //             method: "Online",
// //             status: "Approved",
// //         },
// //         {
// //             id: 2342355,
// //             product: "ASUS ROG Strix",
// //             img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
// //             customer: "Harold Carol",
// //             date: "1 March",
// //             amount: 2000,
// //             method: "Online",
// //             status: "Pending",
// //         },
// //     ];
// //     return (
// //         <TableContainer component={Paper} className="table">
// //             <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //                 <TableHead>
// //                     <TableRow>
// //                         <TableCell className="tableCell">Tracking ID</TableCell>
// //                         <TableCell className="tableCell">Product</TableCell>
// //                         <TableCell className="tableCell">Customer</TableCell>
// //                         <TableCell className="tableCell">Date</TableCell>
// //                         <TableCell className="tableCell">Amount</TableCell>
// //                         <TableCell className="tableCell">Payment Method</TableCell>
// //                         <TableCell className="tableCell">Status</TableCell>
// //                     </TableRow>
// //                 </TableHead>
// //                 <TableBody>
// //                     {rows.map((row) => (
// //                         <TableRow key={row.id}>
// //                             <TableCell className="tableCell">{row.id}</TableCell>
// //                             <TableCell className="tableCell">
// //                                 <div className="cellWrapper">
// //                                     <img src={row.img} alt="" className="image" />
// //                                     {row.product}
// //                                 </div>
// //                             </TableCell>
// //                             <TableCell className="tableCell">{row.customer}</TableCell>
// //                             <TableCell className="tableCell">{row.date}</TableCell>
// //                             <TableCell className="tableCell">{row.amount}</TableCell>
// //                             <TableCell className="tableCell">{row.method}</TableCell>
// //                             <TableCell className="tableCell">
// //                                 <span className={`status ${row.status}`}>{row.status}</span>
// //                             </TableCell>
// //                         </TableRow>
// //                     ))}
// //                 </TableBody>
// //             </Table>
// //         </TableContainer>
// //     )
// // }

// // export default List

// import React, { useState, useEffect } from "react";
// import "./table.scss";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import User from "../Image/icon.png";
// const List = ({ value }) => {
//   console.log("Array", value);

//   return (
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             {/* <TableCell className="tableCell">ID</TableCell> */}
//             <TableCell className="tableCell">Name</TableCell>
//             <TableCell className="tableCell">Date of Birth</TableCell>
//             <TableCell className="tableCell">Email</TableCell>
//             <TableCell className="tableCell">Phone</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {value.map((row) => (
//             <TableRow key={row.id}>
//               {/* <TableCell className="tableCell">{row.id}</TableCell> */}
//               <TableCell className="tableCell">
//                 <div className="cellWrapper">
//                   <img src={User} alt="" className="image" />
//                   {row.Name}
//                 </div>
//               </TableCell>
//               <TableCell className="tableCell">{row.DateOfBirth}</TableCell>
//               <TableCell className="tableCell">{row.Email}</TableCell>
//               <TableCell className="tableCell">{row.Phone}</TableCell>
//               <TableCell className="tableCell"></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default List;








import React, { useState, useEffect } from "react";
import "../table/table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import db from "../../db";
const TableList = ({ value }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product Name</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">By Shipping Type</TableCell>
            <TableCell className="tableCell">State</TableCell>
            <TableCell className="tableCell">Value</TableCell>
            {/* <TableCell className="tableCell">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.ProductName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.Quantity}</TableCell>
              <TableCell className="tableCell">{row.ByShippingType}</TableCell>
              <TableCell className="tableCell">{row.State}</TableCell>
              <TableCell className="tableCell">{row.Value}</TableCell>
              {/* <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;