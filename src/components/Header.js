import React from "react";
import "./Header.css";

export default function Header(props) {
  //initialize the props,properties that comes from parent

  return (
    //header is a html file symmantic tag
    <header className="block row center">
      <div className="hdr">
        <div>
          <a href="#/">
            <h1>E-Commerce</h1>
          </a>
        </div>
        <div className="search">
          <input
            style={{
              fontSize: "15px",
              width: "200px",
              height: "30px",
              borderRadius: "10px"
            }}
            placeholder="Search Movies"
          ></input>
          <button style={{ width: "50px", height: "33px" }}>Search</button>
        </div>

        <div>
          <div style={{ justifyContent: "space between" }}>
            <button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "blue",
                width: "50px"
              }}
            >
              Home
            </button>
            <a href="#/login"> LogIn</a> <a href="#/signin"> SignIn</a>
            <a href="#/"></a>
          </div>
          <a href="#/cart">
            Cart{" "}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ""
            )}
          </a>{" "}
        </div>
      </div>
    </header>
  );
}
