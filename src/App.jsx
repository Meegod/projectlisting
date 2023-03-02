import { useState } from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Search from './components/Search';
import Login from './components/Login';
import Signup from './components/Signup';
import { Container, Row, Col } from "react-bootstrap";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import Upload from './components/Upload';




function App() {
  return (
      <>
<AuthProvider>
<Routes>
  <Route exact path="/" element={
        <>
        <Main/>
        </>
      }/> 
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Signup" element={<Signup/>}/>
  <Route path="/Upload" element={<Upload/>}/>
</Routes>
</AuthProvider>


      </>

    

  )
}

export default App
