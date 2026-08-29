// import React from 'react';
import { UserOutlined } from "@ant-design/icons";
import { Flex, Input } from "antd";
import img from "../logo/M-A_Logo.svg";
import "./Navbar.css";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
function GradientText(props){
  const [active , setActive] = useState(false)
  return (
    <h1
      className={`gradientText  ${active ? "active " : ""} ${props.cName}` }
      onClick={() => {
        setActive(!active);
      }}
    >
      Academy
    </h1>
  );
}
function Button(props) {
  return <button className={props.cName}>{props.title}</button>;
}
export default function Navbar() {
  return (
    <>
      <div className="mainNavContainer">
        <div className="fir">
          <div className="logoImg">
            <img src={img} alt="error" className="imgLogo img-fluid" />
          </div>
          <div className="textLogo">
            {/* <i className="H1DedignNav">Academy</i> */}
            <GradientText cName="H1DedignNav" />
          </div>
        </div>
        <div className="sec">
          <Flex vertical gap="medium">
            <Input placeholder="default size" prefix={<UserOutlined />} />
          </Flex>
        </div>
        <div className="thi">
          <Button title={<FaBell />} cName="notificationBell" />
          <Button title={<UserOutlined />} cName="Btncircle" />
          {/* <Button title="sunicon" cName="Btnnormal" /> */}
        </div>
      </div>
    </>
  );
}
