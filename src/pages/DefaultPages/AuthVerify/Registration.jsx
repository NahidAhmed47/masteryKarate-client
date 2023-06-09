import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Registration = () => {
  const [unHidePass, setUnHidePass] = useState(false);
  const { isDarkMode } = useTheme();
  const { signUp, updateUser, logInWithGoogle, setControl, control } = useAuth();
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.from?.state?.pathname || '/';
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    
    // Minimum length of 6 characters
    if (data.password.length < 6) {
        return setError('Password must be at least 6 characters long');
      }
  
      // At least one capital letter
      if (!/[A-Z]/.test(data.password)) {
        return setError('Password must contain at least one capital letter');
      }
  
      // At least one special character
      if (!/[!@#$%^&*]/.test(data.password)) {
        return setError('Password must contain at least one special character');
      }
      if(data.confirmPassword !== data.password){
        return setError("Alert! Confirm password doesn't matched!")
    }
    signUp(data.email, data.password)
      .then(() => {
        updateUser(data.name, data.photoUrl)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Account Created Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            setControl(!control)
            navigate(from, {replace:true});
            reset();
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
   // sign in with google
   const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account Created Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, {replace:true});
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handleCheckboxChange = (value) => {
    const currentValue = watch("gender");

    if (currentValue === value) {
      setValue("gender", ""); 
    } else {
      setValue("gender", value);
    }
  };
  return (
    <div className={` w-full ${isDarkMode ? "bg-darkcolor" : "bg-white"}`}>
      <div className="min-h-screen mx-auto py-8 flex flex-col justify-center sm:pt-28 sm:pb-16">
        <div className="relative py-3 my-8 md:my-24 md:w-[600px] lg:w-[800px] sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div
            className={`relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20 ${
              isDarkMode ? "bg-darkcolor" : "bg-white"
            }`}
          >
            <div className="max-w-md mx-auto">
                <p className="mb-3 text-primary text-sm">{error}</p>
              <div>
                <h1
                  className={`text-2xl font-semibold font-kanit ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Welcome! Please Register
                </h1>
              </div>
              <div className={`pb-4 pt-7 `}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="text-sm leading-6 space-y-5 text-gray-700 sm:text-base sm:leading-7"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-7">
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className={`peer placeholder-transparent h-8 w-full border-b-2 focus:outline-none focus:borer-rose-600 ${
                            isDarkMode
                              ? "text-white border-gray-700 bg-darkcolor"
                              : " border-gray-300 text-gray-900"
                          }`}
                          placeholder="Your name"
                          {...register("name", { required: true })}
                        />
                        <label
                          htmlFor="name"
                          className={`input-label ${
                            isDarkMode
                              ? "text-white peer-placeholder-shown:text-gray-200 peer-focus:text-gray-200"
                              : "text-gray-600 peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600"
                          }`}
                        >
                          Name
                        </label>
                        {errors.name && (
                          <span className="text-xs font-kanit text-primary">
                            This field is required *
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          className={`peer placeholder-transparent h-8 w-full border-b-2 focus:outline-none focus:borer-rose-600 ${
                            isDarkMode
                              ? "text-white border-gray-700 bg-darkcolor"
                              : " border-gray-300 text-gray-900"
                          }`}
                          placeholder="Email address"
                          {...register("email", { required: true })}
                        />
                        <label
                          htmlFor="email"
                          className={`input-label ${
                            isDarkMode
                              ? "text-white peer-placeholder-shown:text-gray-200 peer-focus:text-gray-200"
                              : "text-gray-600 peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600"
                          }`}
                        >
                          Email
                        </label>
                        {errors.email && (
                          <span className="text-xs font-kanit text-primary">
                            This field is required *
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={unHidePass ? "text" : "password"}
                          className={`peer placeholder-transparent h-8 w-full border-b-2 focus:outline-none focus:borer-rose-600 ${
                            isDarkMode
                              ? "text-white border-gray-700 bg-darkcolor"
                              : " border-gray-300 text-gray-900"
                          }`}
                          placeholder="Password"
                          {...register("password", { required: true })}
                        />
                        <label
                          htmlFor="password"
                          className={`input-label ${
                            isDarkMode
                              ? "text-white peer-placeholder-shown:text-gray-200 peer-focus:text-gray-200"
                              : "text-gray-600 peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600"
                          }`}
                        >
                          Password
                        </label>
                        {errors.password && (
                          <span className="text-xs font-kanit text-primary">
                            This field is required *
                          </span>
                        )}
                        <div
                          className={`absolute right-2 top-3 ${
                            isDarkMode ? "text-gray-300" : "text-black"
                          }`}
                        >
                          {unHidePass ? (
                            <BsFillEyeFill
                              onClick={() => setUnHidePass(!unHidePass)}
                            ></BsFillEyeFill>
                          ) : (
                            <BsFillEyeSlashFill
                              onClick={() => setUnHidePass(!unHidePass)}
                            ></BsFillEyeSlashFill>
                          )}
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={unHidePass ? "text" : "password"}
                          className={`peer placeholder-transparent h-8 w-full border-b-2 focus:outline-none focus:borer-rose-600 ${
                            isDarkMode
                              ? "text-white border-gray-700 bg-darkcolor"
                              : " border-gray-300 text-gray-900"
                          }`}
                          placeholder="Confirm password"
                          {...register("confirmPassword", { required: true })}
                        />
                        <label
                          htmlFor="confirmPassword"
                          className={`input-label ${
                            isDarkMode
                              ? "text-white peer-placeholder-shown:text-gray-200 peer-focus:text-gray-200"
                              : "text-gray-600 peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600"
                          }`}
                        >
                          Confirm Password
                        </label>
                        {errors.confirmPassword && (
                          <span className="text-xs font-kanit text-primary">
                            This field is required *
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="space-y-7">
                      <div className="relative">
                        <input
                          id="photoUrl"
                          name="photoUrl"
                          type="text"
                          className={`peer placeholder-transparent h-8 w-full border-b-2 focus:outline-none focus:borer-rose-600 ${
                            isDarkMode
                              ? "text-white border-gray-700 bg-darkcolor"
                              : " border-gray-300 text-gray-900"
                          }`}
                          placeholder="Photo url"
                          {...register("photoUrl", { required: true })}
                        />
                        <label
                          htmlFor="photoUrl"
                          className={`input-label ${
                            isDarkMode
                              ? "text-white peer-placeholder-shown:text-gray-200 peer-focus:text-gray-200"
                              : "text-gray-600 peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600"
                          }`}
                        >
                          Photo Url
                        </label>
                        {errors.photoUrl && (
                          <span className="text-xs font-kanit text-primary">
                            This field is required *
                          </span>
                        )}
                      </div>
                      {/* gender start from here */}
                      <div>
                        <h1
                          className={`text-base font-kanit font-medium ${
                            isDarkMode ? "text-gray-200" : "text-black"
                          }`}
                        >
                          Gender:
                        </h1>
                        <div
                          className={`flex gap-4 text-sm font-kanit ${
                            isDarkMode
                              ? "text-gray-200"
                              : "text-black items-center "
                          }`}
                        >
                          <div>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                value="male"
                                checked={watch("gender") === "male"}
                                onChange={() => handleCheckboxChange("male")}
                                className="mr-1"
                              />
                              Male
                            </label>
                          </div>
                          <div>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                value="female"
                                checked={watch("gender") === "female"}
                                onChange={() => handleCheckboxChange("female")}
                                className="mr-1"
                              />
                              Female
                            </label>
                          </div>
                          <div>
                            <label className="mr-1">
                              <input
                                type="checkbox"
                                value="other"
                                checked={watch("gender") === "other"}
                                onChange={() => handleCheckboxChange("other")}
                                className="mr-1"
                              />
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          id="number"
                          name="number"
                          type="number"
                          className={`peer placeholder-transparent h-8 w-full border-b-2 focus:outline-none focus:borer-rose-600 ${
                            isDarkMode
                              ? "text-white border-gray-700 bg-darkcolor"
                              : " border-gray-300 text-gray-900"
                          }`}
                          placeholder="Photo url"
                          {...register("number")}
                        />
                        <label
                          htmlFor="number"
                          className={`input-label ${
                            isDarkMode
                              ? "text-white peer-placeholder-shown:text-gray-200 peer-focus:text-gray-200"
                              : "text-gray-600 peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600"
                          }`}
                        >
                          Phone Number
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          id="address"
                          name="address"
                          type="text"
                          className={`peer placeholder-transparent h-8 w-full border-b-2 focus:outline-none focus:borer-rose-600 ${
                            isDarkMode
                              ? "text-white border-gray-700 bg-darkcolor"
                              : " border-gray-300 text-gray-900"
                          }`}
                          placeholder="address"
                          {...register("address")}
                        />
                        <label
                          htmlFor="number"
                          className={`input-label ${
                            isDarkMode
                              ? "text-white peer-placeholder-shown:text-gray-200 peer-focus:text-gray-200"
                              : "text-gray-600 peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600"
                          }`}
                        >
                          Your Address
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* TODO: button color change to blue */}
                  <div className="relative">
                    <button
                      className={`my-btn hover:text-white w-full`}
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div>
                  <button className="border border-primary py-2 rounded-full flex items-center gap-2 text-blue-700 w-full mt-5 justify-center hover:text-white hover:bg-primary duration-300 font-kanit text-base" onClick={handleGoogleSignIn}>
                    <FaGoogle className="w-5 h-5 "></FaGoogle> Sign in with
                    Google
                  </button>
                  <p className="text-sm font-kanit text-center mt-3">
                    Don't have an account? Please{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
