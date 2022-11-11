import React from "react";
import logo from "../assets/images/inside.png";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { footerLinks } from "../assets/pagesData/data";
import Footer from "../components/Footer";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async () => {

  };
  return (
    <div className="h-[screen]">
      <div className="h-[13vh] z-100">
        <Nav />
      </div>
      <div className=" h-[40vh] z-20 ">
        <div className=" mx-auto grid   items-center w-[100%] h-[100vh] ">
          <div className="border grid w-[97%]  shadow-lg bg-white  rounded md:w-[27%] pb-4 mx-auto h-[80%] text-black">
            <form
              onSubmit={(e) => login()}
              className="md:w-[80%] grid items-center mx-auto"
            >
              <div className="w-[90%] h-[20%]  mx-auto">
                <p className="font-bold text-center my-2">Mukesha Metax</p>
                <img className="w-[30%] mx-auto" alt="" />
                <p className="text-center font-sans">
                  Join and book you own
                </p>
              </div>
              <div className="h-[60%]">
                <div className="flex grid  items-center flex-col space-y-10">
                  {footerLinks.loginInputs.map((input, index) => (
                    <div key={index} className="w-[100%] h-[5vh] ">
                      <TextField
                        className="h-[100%] rounded-r-0   md:w-[100%] p-4"
                        label={input.name}
                        type={input.type}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    </div>
                  ))}
                  <div className="w-[100%] text-center bg-black text-white  h-[5vh] border">
                    <input
                      type="submit"
                      className="text-center focus:outline-0 p-2 w-[100%] h-[100%] bg-black p-2 "
                      value="Continue with email"
                    />
                  </div>
                  <div className="flex ">
                    <p className="w-[45%] border-b"></p>
                    <p className="text-center w-[10%]">OR</p>
                    <p className="w-[45%] border-b "></p>
                  </div>
                  <div className="w-[100%] text-center text-white  h-[6vh] border">
                    <div className="text-center flex  hover:cursor-pointer flex-row justify-center space-x-3 text-black items-center focus:outline-0 p-2 w-[100%] h-[100%] border p-2 ">
                      <p>Login with google</p>
                      <img
                        className="h-[80%]"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZGkl4huaCg0a5dWTyDjdWVqAdnW8zu1SR8qB3IhKadu100J94qcpf2OHT0EhXHYShrQ&usqp=CAU"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="grid items-center">
              <div className="flex mt-3 justify-between w-[80%] mx-auto">
                <p className="text-[0.70rem] mt-2">Don't you have an account ? </p>
                <Link to="/Register">
                  <p className="text-[#291E46] hover:font-bold hover:text-black">
                    Login
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh]">
      </div>
      <div className="w-[100%] mt-9 h-[40vh]">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
