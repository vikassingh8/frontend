import React, { useState } from "react";
import axios from "axios";
import config from "../config/config";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/state";
import { useNavigate } from "react-router-dom";

const auth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (values, type) => {
    setLoading(true);
    let endpoint = "";
    if (type == "login") {
      endpoint = "login";
    } else if (type == "register") {
      endpoint = "register";
    }
    try {
      const { data } = await axios.post(
        `${config.VITE_API_URL}/api/auth/${endpoint}`,
        values
      );
      if (data.status) {
        localStorage.setItem("token", data.token);
        dispatch(setToken(data.token));
        navigate("/");
        toast.dismiss();
        toast.success(data.message);
      } else {
        toast.dismiss();
        toast.error(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.dismiss();
      toast.error(error.response?.data?.message);
    }
  };
  const logout = () => {
    localStorage.clear();
    dispatch(setToken(null));
    navigate("/login");
    toast.success("Logout successfully.");
  };
  return { login, loading, logout };
};

export default auth;
