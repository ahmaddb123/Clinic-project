"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./header.css";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="container mx-auto flex justify-between items-center">
        {/* Container Logo */}
        <div className="">
          <Image src={"/logo.png"} alt="Logo" width={80} height={80} />
        </div>
        {/* Container Nav */}
        <div className="container-nav">
          <div onClick={toggle}>
            {isActive ? (
              <FontAwesomeIcon icon={faX} className="icon" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="icon" />
            )}
          </div>
          <Nav isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
    </div>
  );
};

export default Header;
