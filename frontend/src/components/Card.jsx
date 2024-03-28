import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "../CssFiles/Card.css"; // Import CSS file

const Card = (props) => {
  console.log(props.data);

  return (
    <div className="card mt-5 sm:mt-0 w-full mx-auto text-white ">
      <div className="background">
        {props.data.img && <img src={props.data.img} alt="" />}
      </div>
      <div className="name">
        <div className="px-10 bg-slate-400 bg-opacity-30 text-center py-1">
          <p className="text-sm">{props.data.name}</p>
        </div>
      </div>
      <div className="box box1">
        <span className="icon">
          <Link to={props.data.linkdin} target="_blank">
            <FaLinkedin className="text-2xl absolute hover:cursor-pointer " />
          </Link>
        </span>
      </div>
      <div className="box box2">
        <span className="icon">
          {props.data.git ? (
            <Link to={props.data.git} target="_blank">
              <FaGithub className="text-2xl absolute hover:cursor-pointer" />
            </Link>
          ) : (
            <Link to={props.data.insta} target="_blank">
              <FaInstagram className="text-2xl text-white absolute hover:cursor-pointer" />
            </Link>
          )}
        </span>
      </div>
      <div className="box box3">
        <span className="icon">
          <Link to={props.data.email} target="_blank">
            <MdEmail className="text-2xl absolute hover:cursor-pointer" />
          </Link>
        </span>
      </div>
      <div className="box box4"></div>
    </div>
  );
};

export default Card;
