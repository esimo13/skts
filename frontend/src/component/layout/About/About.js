import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/esimo13/";
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
              src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/137037030_2809311529334524_2225477725407573069_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGH1LY10UXxkp6IVNo7Y3AyvQfxpuzljjO9B_Gm7OWOM-QK9Np5Sj4YFcqpwMO3ca8I-SfiQX1wfGy13G-jF0la&_nc_ohc=1jFczii3bNIAX9o-2lf&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_5p5Us52jZm_UF_9ebmXcdZ2DsuGQGtVFbY_DDM8MxNA&oe=637A0B8E"
              alt="Founder"
            />
            <Typography>SKTS Store</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a project website for IWT course. This is MERN Stack project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCNVfKZSqfb5vmotige2A0rA"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/esimo13/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
