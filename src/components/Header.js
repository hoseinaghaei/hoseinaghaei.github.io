import React, {Component} from 'react';

//import react pro sidebar components
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader} from "react-pro-sidebar";

import {SocialIcon} from "react-social-icons";

//import icons from react icons
import {FiEdit, FiEdit2, FiEdit3, FiHome} from "react-icons/fi";

import {BiBook, BiBookContent} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import {Link} from 'react-router-dom';
import ReactRoundedImage from "react-rounded-image";
import photo from '../photos/me_1.jpg';
import cv from '../file/cv-hossein-aghaei.pdf';

function Mailto({email, subject, body, ...props}) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`} className="link">
      {props.children}
    </a>
  );
}

class Header extends Component {
  render() {
    return (
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar>
          <SidebarHeader>
            <MenuItem className="menuitem">
              <div className="photo">
                <ReactRoundedImage image={photo} roundedSize="1" imageWidth="150" imageHeight="150"
                                   roundedColor="white"/>
              </div>
              {/* <img src={photo} width="200" height="200" alt="" className="photo" /> */}
              <div className="logotext">
                <p>Hossein Aghaei</p>
              </div>
              <div className="department">
                <p>Sharif University Of Technology</p>
              </div>
              <div className="department">
                <p>Computer Engineering Department</p>
              </div>
              {/*<div className="department">*/}
              {/*    <p>Database Group</p>*/}
              {/*</div>*/}
            </MenuItem>
          </SidebarHeader>
          <SidebarContent style={{flexGrow: 1, overflowY: 'auto'}}>
            <Menu iconShape="square" style={{height: '100%'}}>
              <MenuItem className="hover" icon={<FiHome/>}>
                <Link to="/" className="link">
                  Home
                </Link>
              </MenuItem>
              <MenuItem className="hover" icon={<FiEdit/>}>
                <Link to="/pub" className="link">
                  Publications
                </Link>
              </MenuItem>
              <MenuItem className="hover" icon={<FiEdit3/>}>
                <Link to="/exp" className="link">
                  Experience
                </Link>
              </MenuItem>
              <MenuItem className="hover" icon={<FiEdit2/>}>
                <Link to="/project" className="link">
                  Project
                </Link>
              </MenuItem>
              {/*<MenuItem className="hover" icon={<BiBookContent/>}>*/}
              {/*  <a href={cv} className="link">*/}
              {/*    Resume*/}
              {/*  </a>*/}
              {/*</MenuItem>*/}
              <MenuItem className="hover" icon={<BiBook/>}>
                <a href={transcript} className="link">
                  Transcript
                </a>
              </MenuItem>
              <MenuItem className="hover" icon={<AiOutlineMail/>}>
                <Mailto email="h.aghaei.araei@gmail.com">
                  Contact me
                </Mailto>
              </MenuItem>
              <MenuItem>
                <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                <div class="elfsight-app-d207b586-e6ac-4708-8898-8ebb0d3bee79"></div>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem className="menuitem">
                <SocialIcon url="https://github.com/hoseinaghaei" className="social-buttons" network="github"
                            bgColor="white"
                            fgColor="#000" style={{height: 50, width: 50}}/>
                {/*<SocialIcon url="https://www.linkedin.com/in/hossein-aghaei-araei/" className="social-buttons"*/}
                {/*            network="linkedin" bgColor="white"*/}
                {/*            fgColor="#000" style={{height: 50, width: 50}}/>*/}
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    );
  }
};

export default Header;
