// import React, { useState,useEffect } from 'react'
// import './datatable.scss'
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
// import { Link } from "react-router-dom";
// import { doc, onSnapshot, collection, query, where, } from "firebase/firestore";
// import db from '../../db';
// const Datatable = () => {
//     // const [data, setData] = useState(userRows);
//     const [data, setData] = useState([{id:1}]);


//     const handleDelete = (id) => {
//         setData(data.filter((item) => item.id !== id));
//     };
//     const actionColumn = [
//         {
//             field: "action",
//             headerName: "Action",
//             width: 200,
//             renderCell: (params) => {
//                 return (
//                     <div className="cellAction">
//                         <Link to="/users/test" style={{ textDecoration: "none" }}>
//                             <div className="viewButton">View</div>
//                         </Link>
//                         {/* <div
//                             className="deleteButton"
//                             onClick={() => handleDelete(params.row.id)}
//                         >
//                             Delete
//                         </div> */}
//                     </div>
//                 );
//             },
//         },
//     ];
//     return (
//         <div className="datatable">
//             <div className="datatableTitle">
//                 Add New User
//                 <Link to="/users/new" className="link">
//                     Add New
//                 </Link>
//             </div>
//             <DataGrid
//                 className="datagrid"
//                 rows={data}
//                 columns={userColumns.concat(actionColumn)}
//                 pageSize={9}
//                 rowsPerPageOptions={[9]}
//                 checkboxSelection
//             />
//         </div>
//     )
// }

// export default Datatable





import React, { useState,useEffect } from 'react'
import '../table/table.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { doc, onSnapshot, collection, query, where, } from "firebase/firestore";
import User from "../Image/icon.png";
import { Link } from "react-router-dom";
import './datatable.scss'
import db from '../../db';
const Datatable = () => {
    const [data, setData] = useState([]);
        useEffect(() => {
        async function fetchMyAPI() {
            console.log('Fetchdata');
            const q = query(collection(db, "All Peoples"))
          const unsub = onSnapshot(q, (querySnapshot) => {
            console.log("Data", querySnapshot.docs.map(d => d.data()));
            setData(querySnapshot.docs.map(d => d.data()));
            // serLoader(true)
          });
        }
    
        fetchMyAPI()
      }, [])
    
    return (
        <div className="datatable">
        <div className="datatableTitle">
            Add New User
            <Link to="/users/new" className="link">
                Add New
            </Link>
        </div>
            <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell">ID</TableCell> */}
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Date of Birth</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell className="tableCell">{row.id}</TableCell> */}
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={User} alt="" className="image" />
                  {row.Peoplename}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.DateOfBirth}</TableCell>
              <TableCell className="tableCell">{row.Email}</TableCell>
              <TableCell className="tableCell">{row.Phonenumber}</TableCell>
              <TableCell className="tableCell"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}

export default Datatable;
