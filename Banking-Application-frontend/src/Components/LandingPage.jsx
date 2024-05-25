import React from "react";
import "./LandingPage.css";
import Card from "../Components/Card/Card";
import "../App.css";
import NumberTicker from "../Common/NumberTicker";
import Video from "../assets/Card_rotation.mp4";

function LandingPage() {
  const data = [
    {
      header: "Mobile Banking",
      description: "Secure and easy banking",
      button: "Download App",
    },
    {
      header: "Personal Banking:",
      description: "Manage your Acocunt",
      button: "View details",
    },
    {
      header: "Wealth Management",
      description: "Expert  management",
      button: "Invest Now",
    },
  ];

  return (
    <>
      {/* <NavBar /> */}
      <div className="container">
        <section className="Hero">
          <div className="heading">
            <h1 className="poppins-bold">Elevate Your Finance Experience</h1>
          </div>
          <span className="poppins-medium">
            Raising the bar for your Financial journey
          </span>
          <div className="info ">
            <div>
              <h2>{<NumberTicker value={500} />}k</h2>
              <h3>Customers globaly</h3>
            </div>
            <div>
              <h2>${<NumberTicker value={15} />}M+</h2>
              <h3>Transaction Completed</h3>
            </div>
            <div>
              <h2> {<NumberTicker value={20} />}Y+</h2>
              <h3>Years Of Experience</h3>
            </div>
          </div>
        </section>
        <section className="main-sec">
          <Card {...data[0]} />
          <Card {...data[1]} />
          <Card {...data[2]} />
        </section>
        <section className="page2">
          <div className="left-div">
            <div>
              <h1 className="poppins-bold">Get Credit Card</h1>
            </div>
            <div>
              <p className="poppins-medium ">
                A co-branded credit card that is exclusive,<br></br> and
                exquisitely crafted with metal,<br></br> because you deserve
                only the best.<br></br> Why settle for plastic cards anymore?
              </p>
            </div>
          </div>
          <div className="right-div">
            <video
              style={{ width: "500px", height: "550px", float: "left" }}
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
