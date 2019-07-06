import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "./Navbar.css";
import Login from "../Login";
import Signup from "../Signup";

const MainNavbar = () => (

  <Navbar variant="dark" className="fixed-top d-flex">
    <Navbar.Brand href="/" className="flex-shrink-0">StayOrGo</Navbar.Brand>
      <a href="/snapshot"> <Button variant="info" className="flex-shrink-0">Investment Snapshot</Button> </a>
      <a href="/favorites"> <Button variant="info" className="flex-shrink-0">Favorites</Button> </a>
      <Login />
      <Signup />
        <a href="/search"><Button variant="outline-info"  className="flex-shrink-0">Search</Button></a>
  </Navbar>

)

export default MainNavbar;