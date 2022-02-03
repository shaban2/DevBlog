import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthStatus, fetchUser } from "../redux/authSlice";

/**
 * redirectLoggedIn() checks to see if a user is logged in:
 * If user is logged in, redirect them to user dashboard.
 * If user is not logged in, the page will render the passed-in component.
 *
 * @param {string} Component The name of the component that checks for authentication
 * @return {function} RedirectLoggedIn component wrapped around the passed-in Component
 */
export default function redirectLoggedIn() {
  return function RedirectLoggedIn() {
    const [status, setStatus] = useState(false);

    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/current_user`)
        .then((res) => {
          let data = res.data;

          if (data.length !== 0) {
            setStatus(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });

    if (status === true) {
      return <Redirect to="/home" />;
    } else {
      return <Redirect to="/" />;
    }
  };
}
