import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useTheme from "../../../hooks/useTheme";

const Login = () => {
    const [unHidePass, setUnHidePass] = useState(false);
    const {isDarkMode} = useTheme();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-darkcolor' : 'bg-white'}`}>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className={`relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20 ${isDarkMode ? 'bg-darkcolor' : 'bg-white'}`}>
            <div className="max-w-md mx-auto">
              <div>
                <h1 className={`text-2xl font-semibold font-kanit ${isDarkMode ? 'text-white' : 'text-gray-900'}`} >
                  Welcome back! Please Login
                </h1>
              </div>
              <div className={`pb-4 pt-7 `}>
                <form onSubmit={handleSubmit(onSubmit)} className=" text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className={`peer placeholder-transparent h-10 w-full border-b-2 focus:outline-none focus:borer-rose-600 ${isDarkMode ? 'text-white border-gray-700 bg-darkcolor' : ' border-gray-300 text-gray-900'}`}
                      placeholder="Email address"
                      {...register("email", { required: true })}
                    />
                    <label
                      htmlFor="email"
                      className={`input-label ${isDarkMode ? 'text-white peer-placeholder-shown:text-gray-200 peer-focus:text-gray-200' : 'text-gray-600 peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600'}`}
                    >
                      Email
                    </label>
                    {errors.email && <span className="text-xs font-kanit text-primary">This field is required *</span>}
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={unHidePass ? 'text' : 'password' }
                      className={`peer placeholder-transparent h-10 w-full border-b-2 focus:outline-none focus:borer-rose-600 ${isDarkMode ? 'text-white border-gray-700 bg-darkcolor' : ' border-gray-300 text-gray-900'}`}
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                    <label
                      htmlFor="password"
                      className={`input-label ${isDarkMode ? 'text-white peer-placeholder-shown:text-gray-200 peer-focus:text-gray-200' : 'text-gray-600 peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600'}`}
                    >
                      Password
                    </label>
                    {errors.password && <span className="text-xs font-kanit text-primary">This field is required *</span>}
                    <div className={`absolute right-2 top-3 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                        {
                            unHidePass ? <BsFillEyeFill onClick={()=> setUnHidePass(!unHidePass)}></BsFillEyeFill> : <BsFillEyeSlashFill onClick={()=> setUnHidePass(!unHidePass)}></BsFillEyeSlashFill>
                        }
                    </div>
                  </div>
                  {/* TODO: button color change to blue */}
                  <div className="relative">
                    <button className={`my-btn hover:text-white w-full`} type="submit">
                      Login
                    </button>
                  </div>
                  
                </form>
                <div>
                <button
                    className="border border-primary py-2 rounded-full flex items-center gap-2 text-blue-700 w-full mt-5 justify-center hover:text-white hover:bg-primary duration-300 font-kanit text-base"
                  >
                    <FaGoogle className="w-5 h-5 "></FaGoogle> Sign in with
                    Google
                  </button>
                  <p className="text-sm font-kanit text-center mt-3">Don't have an account? Please <Link to="/registration" className="text-primary hover:underline">Registration</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
