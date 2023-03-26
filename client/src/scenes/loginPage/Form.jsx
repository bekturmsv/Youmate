import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "redux/state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

// Register validating
const registerSchema = yup.object().shape({
  firstName: yup.string().required("First name is required!"),
  lastName: yup.string().required("Last name is required!"),
  email: yup.string().email("invalid email").required("Email is required!"),
  password: yup.string().required("Password is required!"),
  location: yup.string().required("Location is required!"),
  occupation: yup.string().required("Occupation is required!"),
  picture: yup.string().required("Picture is required!"),
});

// Log in validating
const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("Email is required!"),
  password: yup.string().required("Password is required!"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  return <div></div>;
};

export default Form;
