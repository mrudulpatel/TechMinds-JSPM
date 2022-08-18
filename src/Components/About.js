import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                src={profilepic}
                style={{ marginLeft: "50px" }}
                alt={name}
                className="profile-pic"
              />
              <h2 style={{ textAlign: "center" }}>Atharva Kurumbhatte</h2>
              <p style={{ textAlign: "center" }}>PRESIDENT</p>
              <p style={{ textAlign: "center", marginTop: "0px" }}>
                Web Developer, <br /> Game Developer
              </p>
            </div>
            <div className="three columns">
              <img
                style={{ marginLeft: "50px" }}
                src={profilepic}
                className="profile-pic"
              />
              <h2 style={{ textAlign: "center" }}>Mrudul Patel</h2>
              <p style={{ textAlign: "center", marginTop: "40px" }}>
                VICE PRESIDENT
              </p>
              <p style={{ textAlign: "center", marginTop: "30px" }}>
                Full Stack Web Developer
              </p>
            </div>
            <div className="three columns">
              <img
                style={{ marginLeft: "50px" }}
                src={profilepic}
                className="profile-pic"
              />
              <h2 style={{ textAlign: "center" }}>Mukund Patel</h2>
              <p style={{ textAlign: "center", marginTop: "40px" }}>
                SOCIAL MEDIA LEAD
              </p>
              <p style={{ textAlign: "center", marginTop: "30px" }}>
                UI/ UX Designing
              </p>
            </div>
            <div className="three columns">
              <img
                style={{ marginLeft: "50px" }}
                src={profilepic}
                className="profile-pic"
              />
              <h2 style={{ textAlign: "center" }}>Sakshi Bherde</h2>
              <p style={{ textAlign: "center", marginTop: "40px" }}>
                GIRLS REPRESENTATIVE
              </p>
              <p style={{ textAlign: "center", marginTop: "30px" }}>
                Coming soon
              </p>
            </div>
            {/* <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
