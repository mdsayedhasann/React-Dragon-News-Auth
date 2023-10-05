import React, { useContext } from "react";
import Navbar from "../Home/shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
        .then(() => {
            console.log('Login Success');
        })
        .catch(error => {
            console.log('Login Failed');
        })
        console.log(email, password);
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h3 className="text-center text-3xl font-bold my-7">Login your account </h3>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
              <h3 className="text-center pb-5">Dontt Have An Account ? <Link to='/register' className="text-red-600 font-bold">Register</Link> </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
