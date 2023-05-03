import React, { useState, useEffect } from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Charts from '../../components/charts/Charts'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'
import { doc, onSnapshot, collection, query, where, } from "firebase/firestore";
import db from '../../db';
import LoadingSpin from "react-loading-spin";
const Home = () => {
  const [user, setuser] = useState([]);
  const [cart, setcart] = useState([]);
  const [Loader, serLoader] = useState(false)
  useEffect(() => {
    async function fetchUserAPI() {
      console.log('Fetchdata');
      const q = query(collection(db, "All Peoples"))
      const unsub = onSnapshot(q, (querySnapshot) => {
        console.log("Data", querySnapshot.docs.map(d => d.data()));
        setuser(querySnapshot.docs.map(d => d.data()));
        serLoader(true)
      });
    }


    fetchUserAPI()
  }, [])
  return (
    <div>
      {
        Loader === false ?
          <div className="loader">
            <LoadingSpin size={50} />
          </div>
          :
          <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
              <Navbar />
              <div className='widgets'>
                <Widgets type="user" value={user.length} />
              </div>
              <div className='charts'>
                <Featured />
                <Charts title="Last 6 Months (Revenue)" aspect={2 / 1} />
              </div>
              {/* <div className='listContainer'>
        <div className='listTitle'>Latest Orders</div>
        <Table value={cart}/>
    </div> */}
            </div>
          </div>
      }
    </div>

  )
}

export default Home