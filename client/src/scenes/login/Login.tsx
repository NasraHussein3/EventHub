import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import axios from "axios";
import loginImage2 from "../../assets/images/tuva-mathilde-loland-7hhn4SmbnT8-unsplash 1.png";
import { loginUser } from "../../redux/userSlice";
import { setUser } from "../../redux/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import validation from "./LoginValidation";


interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const dispatch = useAppDispatch();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);

    // Wait for state to update, then check for errors
    setTimeout(() => {
      if (
        !Object.values(validationErrors).some(
          (error) => error !== undefined && error !== ""
        )
      ) {
        axios
          .post("/auth/login", values)
          .then((res) => {
            console.log(res);
            // Check for successful login response and redirect
            if (res.data) {
              // Redirect user to the home page
              dispatch(
                setUser(res.data)
              );
              localStorage.setItem("isLoggedIn", "true");
              navigate("/"); // Replace "/home" with your home page route
            }
          })
          .catch((err) => {
            console.log(err);
            if (err.response && err.response.status === 401) {
              // Handle 401 error (Unauthorized)
              console.log("Unauthorized access");
            } else {
              // Handle other error scenarios
              // setLoginError("An error occurred during login");
            }
          });
      }
    }, 0);
  };

  return (
    <div className="pt-18 flex flex-col lg:flex-row lg:h-screen">
      <div className="flex flex-col w-full lg:w-6/12 p-28  gap-y-10 pt-40">
        <h1 className="font-mukta items-center text-onyx text-4xl font-bold">
          Login
        </h1>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:w-8/12"
        >
          <input
            placeholder="Email"
            onChange={handleInput}
            name="email"
            className="border border-onyx p-3 rounded-md placeholder:font-roboto"
          />

          {errors.email && <span className="text-red-500">{errors.email}</span>}

          <input
            type="password"
            placeholder="Password"
            onChange={handleInput}
            name="password"
            className=" border border-onyx p-3 rounded-md placeholder:font-roboto"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          <button
            type="submit"
            className="bg-dutchWhite hover:bg-rosyBrown hover:text-black p-3 rounded-md text-white font-roboto"
          >
            LOGIN
          </button>
        </form>
      </div>
      {/* Hide the image on small screens (sm and smaller) */}
      <div className="flex-col w-full lg:w-6/12 pt-10">
        <img className="max-lg:hidden" src={loginImage2} alt="Login" />
      </div>
    </div>
  );
};


export default Login;




// isLoggedIn variable that represents the user's login status

// Created a function to generate the navigation links based on login status
// export const generateNavLinks = (isLoggedIn: boolean): NavLink[] => {
//   if (isLoggedIn) {
//     return [
//       { href: "/", label: "Home" },
//       { href: "/gallery", label: "Gallery" },
//       { href: "/services", label: "Services" },
//       { href: "/create-event", label: "Create Event" },
//       { href: "/account-dashboard", label: "Account Dashboard" },
//       { href: "/your-event-history", label: "Your Event History" },
//       { href: "/contact-us", label: "Contact Us" },
//     ];
//   } else {
//     return [
//       { href: "/", label: "Home" },
//       { href: "/gallery", label: "Gallery" },
//       { href: "/services", label: "Services" },
//       { href: "/contact-us", label: "Contact Us" },
//       { href: "/login", label: "Log In", icon: login },
//       { href: "/signup", label: "Sign Up", icon: signup },
//     ];
//   }
// };

// // Example usage:
// const isLoggedIn = true; // Replace this with your actual logic to determine user login status
// const navLinks: NavLink[] = generateNavLinks(isLoggedIn);
