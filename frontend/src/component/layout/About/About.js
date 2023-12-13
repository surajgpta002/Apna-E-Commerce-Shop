import React from "react";
import "./AboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import Profile from "../../../images/Me.jpeg";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  const visitLikedin = () => {
    window.location = "https://www.linkedin.com/in/surajgupta02/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={Profile}
              alt="Founder"
            />
            <Typography>Suraj Gupta</Typography>
            <Button onClick={visitLikedin} color="primary">
              Visit Linkedin
            </Button>

            <span>
              This is a sample wesbite made by @srkian_suraj. An online
              destination where buyers shop for goods and sellers offer products
              and services.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>

            <a href="https://www.instagram.com/srkian_suraj/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
