import React from "react";
import TwitterIcon from "../Icons/TwitterIcon";
import GoogleIcon from "../Icons/GoogleIcon";
import ArrowIcon from "../Icons/ArrowIcon";

export const Register = () => {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <figure>
              <img src="/register.png" alt="" className="h-[510px]" />
            </figure>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-10 bg-slate-100">
            <div className="card-body rounded-tr-lg-none rounded-br-lg">
              <h1 className="text-center text-black">Sign Up</h1>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="usermane"
                    className="input input-bordered-none bg-slate-200"
                  />
                </div>
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
};
