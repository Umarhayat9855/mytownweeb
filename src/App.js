import React, { useContext, useEffect, Suspense } from "react";
import "./style/dark.scss";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import List from "./page/list/List";
import SinglePage from "./page/single/Single";
import NewPage from "./page/new/New";
import AddData from "./page/Add Product/New";
import ShowProducts from "./page/showProduct/showProduct";
import { productInputs, userInputs } from "./formSource";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { auth } from './config'
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword } from "firebase/auth";
import db from './db';
import { doc, onSnapshot, collection, query, where, addDoc } from "firebase/firestore";
import * as firestore from 'firebase/firestore';
import LoadingSpin from "react-loading-spin";
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    // const unsuscribe =  auth.onAuthStateChanged(user=>{
    //       setCurrentUser(user)
    //   })
    // return unsuscribe
  }, [])
  const login = async () => {
    // const auth = getAuth();
    console.log("Auth", auth)
    createUserWithEmailAndPassword(auth, 'abc987@gmail.com', '123456')
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user", user, userCredential)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("errorCode", errorCode, errorMessage)
        // ..
      });

  };
  const Fetchdata = async () => {
    //   const q = query(collection(db, "Users"))
    // const unsub = onSnapshot(q, (querySnapshot) => {
    //   console.log("Data", querySnapshot.docs.map(d => d.data()));
    // });
    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan"
    });
  }
  return (
    <Suspense fallback={null}>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />


              <Route path="login" index element={<Login />} />
              <Route path='addusers' >
                <Route index element={<NewPage inputs={userInputs} title="Add New User" />} />
                <Route path=':userId' element={<SinglePage />} />
                <Route path='new' element={<NewPage inputs={userInputs} title="Add New User" />} />
              </Route>
              <Route path='users'>
                <Route index element={<List />} />
                <Route path=':productId' element={<SinglePage />} />
                <Route path='new' element={<NewPage inputs={productInputs} title="Add New Product" />} />
              </Route>
              <Route path='AddData' element={<AddData />} />
              <Route path='ShowProducts' element={<ShowProducts />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <button onClick={login}>ksjhcs</button>
      <button onClick={Fetchdata}>Fetchdata</button> */}

      </div>
    </Suspense>
  );
};

export default App;
