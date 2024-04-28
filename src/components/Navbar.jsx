import React from "react";
import logo from "../assets/white-crown.png";
import logo1 from "../assets/Kalyan_Matka-logos_white.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="flex flex-row  bg-[#176B87]">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-3 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a>Home</a>
            </li>
            <hr />
            <li>
              <a>About Us</a>
            </li>
            <hr />
            {/* <li>
              <a>Contact Us</a>
            </li>
            <hr />
            <li>
              <a>Privacy Policy</a>
            </li>
            <hr />
            <li>
              <a>Terms & Condition </a>
            </li>
            <hr />
            <li>
              <a>Sitemap</a>
            </li> */}
            {/* <hr /> */}
            <li>
              {" "}
              <Link to="/user">Guessing Form</Link>
            </li>
          </ul>
        </div>
        <img
          src={logo1}
          alt=""
          class="px-3 lg:hidden "
          style={{ height: "50px" }}
        ></img>
        <img
          src={logo}
          alt=""
          class="px-3 hidden lg:block"
          style={{ height: "70px" }}
        ></img>

        <div class="navbar hidden lg:flex-row-reverse lg:flex pr-16">
          <ul class=" menu menu-horizontal text-white text-lg font-bold space-x-4  ">
            <li class="hover:bg-white rounded-lg hover:text-blue-700 px-3 py-2">
              Home
            </li>
            <li class="hover:bg-white rounded-lg hover:text-blue-700 px-3 py-2">
              About Us
            </li>
            {/* <li class="hover:bg-white rounded-lg hover:text-blue-700 px-3 py-2">
              Contact Us
            </li>
            <li class="hover:bg-white rounded-lg hover:text-blue-700 px-3 py-2">
              Privacy Policy
            </li>
            <li class="hover:bg-white rounded-lg hover:text-blue-700 px-3 py-2">
              Terms & Condition{" "}
            </li>
            <li class="hover:bg-white rounded-lg hover:text-blue-700 px-3 py-2">
              Sitemap
            </li> */}
            <Link
              to="/user"
              class="hover:bg-white rounded-lg hover:text-blue-700 px-3 py-2 border "
            >
              Guessing Form
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
