import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    age: yup
      .number()
      .required("Age is required")
      .positive("Age must be positive")
      .integer("Age must be an integer"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    alert("Form submitted! Check console for data.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="fullName"
        placeholder="Please enter name"
        {...register("fullName")}
      />
      {errors.fullName && (
        <p style={{ color: "red" }}>{errors.fullName.message}</p>
      )}

      <input
        type="number"
        name="age"
        placeholder="Please enter age"
        {...register("age")}
      />
      {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}

      <input
        type="email"
        name="email"
        placeholder="Please enter email"
        {...register("email")}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <input
        type="password"
        name="password"
        placeholder="Please enter password"
        {...register("password")}
      />
      {errors.password && (
        <p style={{ color: "red" }}>{errors.password.message}</p>
      )}

      <input
        type="password"
        name="confirmPassword"
        placeholder="Please confirm password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
