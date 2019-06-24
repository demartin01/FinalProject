import React from "react";
import "./Home.css";
// import PropertyTable from "../../components/PropertyTable";

const Home = () => (
  <div className="homeDiv">
    <div className="container">
      <h1 className="header">StayorGo</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, corrupti quo repellendus alias deleniti nostrum accusamus nihil a! Non eos, quidem sequi necessitatibus eius nobis, excepturi unde repellendus quisquam odit aut dolorum ut assumenda? Fuga sint quae saepe cum quas minima aut numquam. Illum, recusandae beatae assumenda velit voluptas alias?

        {/* <PropertyTable /> */}
      </p>
    </div>
    <a href="/beach"><div className="top-image"></div></a>

    <div className="section white">
      <div className="container">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, corrupti quo repellendus alias deleniti nostrum accusamus nihil a! Non eos, quidem sequi necessitatibus eius nobis, excepturi unde repellendus quisquam odit aut dolorum ut assumenda? Fuga sint quae saepe cum quas minima aut numquam. Illum, recusandae beatae assumenda velit voluptas alias?</p>
      </div>
    </div>
    <a href="/snow"><div className="bottom-image"></div></a>
    <div className="container">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, corrupti quo repellendus alias deleniti nostrum accusamus nihil a! Non eos, quidem sequi necessitatibus eius nobis, excepturi unde repellendus quisquam odit aut dolorum ut assumenda? Fuga sint quae saepe cum quas minima aut numquam. Illum, recusandae beatae assumenda velit voluptas alias?</p>
    </div>
  </div>

)

export default Home;