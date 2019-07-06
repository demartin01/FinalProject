import React from "react";
import "./Home.css";
// import PropertyTable from "../../components/PropertyTable";

const Home = () => (
  <div className="homeDiv">

    <div className= "logoHeader">
      <img src= "/assets/images/logo.png" alt="StayOrGo"></img> 
    </div>

    {/* <a href="/"><div className="logo-header"></div></a> */}
    <div className="container">
   
      {/* <h1 className="header">StayorGo</h1> */}

      <p>StayorGo is designed to help simply the decision making process. StayorGo is Moving app that helps you make decisions as to whether or not you should move or stay. If you decide to move where does your money go farther. Nashville is booming if I sell my house and obtain cash equity. Where can I have an improved quality of living or should I just stay at my current home. 

        {/* <PropertyTable /> */}
      </p>
    </div>
    <a href="/snapshot"><div className="top-image"></div></a>

    <div className="section white">
      <div className="container">
        <p>Sign-in to create your personalized searches using active properties on Zillow.</p>
      </div>
    </div>
    <a href="/favorites"><div className="bottom-image"></div></a>
    <div className="container">
      <p>Sign-up or log-in to gain access to your favorited properties</p>
    </div>
  </div>

)

export default Home;