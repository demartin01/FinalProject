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

      <p>StayorGo is designed to help simplify the decision making process. StayorGo is a Moving app that helps you make decisions as to whether or not you should move or stay. If you decide to move where does your money go farther? If I sell my house and obtain cash equity, where can I have an improved quality of living or should I just stay at my current home. 

        {/* <PropertyTable /> */}
      </p>
    </div>
    <a href="/beach"><div className="top-image"></div></a>

    <div className="section white">
      <div className="container">
        <p>Sign-in to create your personalized searches using active properties on Zillow.</p>
      </div>
    </div>
    <a href="/snow"><div className="bottom-image"></div></a>
    <div className="container">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, corrupti quo repellendus alias deleniti nostrum accusamus nihil a! Non eos, quidem sequi necessitatibus eius nobis, excepturi unde repellendus quisquam odit aut dolorum ut assumenda? Fuga sint quae saepe cum quas minima aut numquam. Illum, recusandae beatae assumenda velit voluptas alias?</p>
    </div>
  </div>

)

export default Home;