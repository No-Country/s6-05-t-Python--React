import React from "react";
import TwitterIcon from "../Icons/TwitterIcon";
import GoogleIcon from "../Icons/GoogleIcon";
import ArrowIcon from "../Icons/ArrowIcon";

export default function Login() {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <figure>
              <img src="/login.png" alt="" className="h-[535px]" />
            </figure>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-10 bg-slate-100">
            <div className="card-body rounded-tr-lg-none rounded-br-lg">
              <h1 className="text-center text-black">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered-none bg-slate-200"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered-none bg-slate-200"
                />
              </div>
              <div className="flex-column justify-center mt-2">
                <p className="text-center underline underline-offset-2 text-black">
                  Do you have forgot your password?
                </p>
              </div>
              <div className="flex justify-center mt-2">
                <button className="btn btn-success text-white rounded-[16px]">
                  Are you new here?
                </button>
              </div>
              <div className="flex justify-around">
                <div className="form-control mt-6">
                  <button className="btn gap-2 rounded-[16px]">
                    <GoogleIcon />
                    Google
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-info text-white rounded-[16px] gap-2">
                    <TwitterIcon />
                    Twitter
                  </button>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="btn btn-success text-white rounded-[16px]">
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
