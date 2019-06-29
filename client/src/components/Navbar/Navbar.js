import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./Navbar.css";
import Login from "../Login";
import Signup from "../Signup";

const MainNavbar = () => (

  <Navbar variant="dark" className="fixed-top d-flex">
    <Navbar.Brand href="/" className="flex-shrink-0">Should I Stay or Should I go?</Navbar.Brand>
      <Button variant="info" className="flex-shrink-0">Your Home/Condo</Button>
      <Button variant="info" className="flex-shrink-0">Get More Info</Button>
      <Login />
      <Signup />
      {/* <Form inline> */}
        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2 flex-shrink-0" /> */}
        
        <a href="/search"><Button variant="outline-info"  className="flex-shrink-0">Search</Button></a>
      {/* </Form> */}
  </Navbar>

)

export default MainNavbar;