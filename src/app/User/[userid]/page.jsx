"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Header from "@/app/Header/page";
import { googleLogout } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Indi = ({ params }) => {
  const idsub = params.userid;
  const router = useRouter();
  console.log(idsub);

  const [userData, setUserData] = useState();
  const [open, setOpen] = useState(false);
  const [loanList, setLoanList] = useState();

  const logout = () => {
    googleLogout();
    router.push("/User");
  };

  const getLoan = () => {
    setOpen(true);
  };

  const submitloan = () => {
    requestLoan();
  };

  const loan_Stats = async () => {
    const getLoanDetails = await fetch(
      "https://credit-app-backend-nvo2.onrender.com/user/request/all-request"
    );
    const getResponse = await getLoanDetails.json();
    setLoanList(getResponse);
    getResponse.map((e) => console.log(e.fullname));
    console.log(getResponse);
  };

  const [fullname, setFullname] = useState();
  const [howmuch, sethowmuch] = useState();
  const [tenure, setTenure] = useState();
  const [employement_status, setEmployement_status] = useState();
  const [reason, setReason] = useState();
  const [employement_address, setEmployement_address] = useState();
  const [email, setEmail] = useState();
  const [status, setstatus] = useState("Requesting");
  const [date, setdate] = useState();

  const userFullName = (event) => {
    setFullname(event.target.value);
  };

  const userHowmuch = (event) => {
    sethowmuch(Number(event.target.value));
  };

  const userTenure = (event) => {
    setTenure(event.target.value);
  };

  const todayDate = (event) => {
    setdate(event.target.value);
  };

  const userEmployement_status = (event) => {
    setEmployement_status(event.target.value);
  };

  const userReason = (event) => {
    setReason(event.target.value);
  };

  const userEmployement_address = (event) => {
    setEmployement_address(event.target.value);
  };

  const userEmail = (event) => {
    setEmail(event.target.value);
  };

  const userstatus = (event) => {
    setstatus(event.target.value);
  };

  const requestLoan = async () => {
    const newrequestData = {
      fullname,
      howmuch,
      tenure,
      employement_status,
      reason,
      employement_address,
      email,
      status,
      date,
    };
    console.log(newrequestData);
    try {
      const submmission = await fetch(
        "https://credit-app-backend-nvo2.onrender.com/new_user/loan",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newrequestData),
        }
      );
      const res = await submmission.json();
      console.log("request sent", res);
      {
        res.ok ? (
          <h2>Loan Request Sent Successfully</h2>
        ) : (
          <h2>Loan Rejected</h2>
        );
      }
    } catch (err) {
      console.log("error submitting", err);
    }
  };

  useEffect(() => {
    getData();
    loan_Stats();
  }, []);
  const getData = async () => {
    try {
      const getD = await fetch(
        `https://credit-app-backend-nvo2.onrender.com/user/${idsub}`
      );
      console.log(getD);

      const result = await getD.json();
      // console.log(result);
      console.log("server response:", result);
      setUserData(result);
    } catch (error) {
      console.log("error submitting", error);
    }
  };

  const formClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header details={userData} />
      <div className="min-h-screen bg-green-50">
        <div className="flex flex-row  justify-around items-center ">
          <div className="flex flex-row justify-center items-center bg-amber-200 p-4 w-fit max-w">
            <img src="deficit.png" alt="" />
            <div>
              <h2>DEFICIT</h2>
              <img src="payments.png" alt="" />
            </div>
            <h2 className="text-2xl font-bold text-green-700">0.0</h2>
          </div>
          <h2 className="text-xl font-bold text-green-600">
            How are you Doing?..
            <span className="text-green-700 text-3xl underline">
              {userData?.name}
            </span>
          </h2>
          <div className="flex gap-3">
            <img
              src={userData?.picture}
              className="h-10 w-10 rounded-3xl"
              alt=""
            />
            <Button variant="outlined" onClick={logout}>
              Logout
            </Button>

            <Button variant="outlined" color="inherit" onClick={getLoan}>
              Get Loan
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center">
          <div className="flex flex-row justify-around gap-5 rounded-xl bg-white shadow-2xl shadow-gray-400">
            <h2 className="text-xl font-bold p-2 border-r-1 bg-green-100">
              Borrow Cash
            </h2>
            <h2 className="text-xl font-bold p-2 border-r-1">Transactions</h2>
            <h2 className="text-xl font-bold p-2">Deposit Cash</h2>
          </div>
          <div className="bg-white w-[450px] mt-5 flex flex-row justify-between items-center p-3">
            <img src="search.png" alt="" />
            <input type="search" placeholder="search for loans" className="" />
          </div>
        </div>
        <div className="flex flex-col min-h-fit justify-center items-center">
          <div className="flex flex-row justify-between w-2xl m-3 p-5 ">
            <h1 className="font-bold text-2xl">Applied Loans</h1>
            <div> </div>
          </div>
          <div className="flex flex-row justify-between w-2xl text-gray-500">
            <h2>Loan Officer</h2>
            <h2>Amount</h2>
            <h2>date Applied</h2>
            <h2>Status</h2>
          </div>
          {loanList?.map((e) => (
            <div className="grid grid-cols-4 gap-6 p-6" key={e._id}>
              <h2 className="bg-green-100 p-6 rounded-xl shadow-md text-center font-semibold">
                Pawan
              </h2>
              <h2 className="bg-green-100 p-6 rounded-xl shadow-md text-center font-semibold">
                {e.howmuch}
              </h2>
              <h2 className="bg-green-100 p-6 rounded-xl shadow-md text-center font-semibold">
                date updating.
              </h2>
              <h2
                className={`p-6 rounded-xl shadow-md text-center font-semibold ${
                  e.status === "Verified"
                    ? "bg-green-300"
                    : e.status === "rejected"
                    ? "bg-red-300"
                    : e.status === "Approved"
                    ? "bg-blue-300"
                    : e.status === "Requesting"
                    ? "bg-yellow-300"
                    : "bg-gray-200"
                }`}
              >
                {e.status}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <div>
            <Button variant="contained" color="inherit">
              Logoutt
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Dialog
          open={open}
          onClose={formClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <h2 className="text-black font-bold text-2xl pb-2">
                APPLY FOR A LOAN
              </h2>
              <form action="">
                <div className="flex flex-col text-xl p-2">
                  <label htmlFor="">
                    Full name as it appears on bank account
                  </label>
                  <input
                    type="text"
                    onChange={userFullName}
                    className="border-2 p-2 rounded"
                    placeholder="Full name as it appears on bank account"
                  />
                </div>
                <div className="flex flex-col text-xl p-2">
                  <label htmlFor="">How much do you need?</label>
                  <input
                    type="text"
                    className="border-2 p-2 rounded"
                    onChange={userHowmuch}
                  />
                </div>
                <div className="flex flex-col text-xl p-2">
                  <label htmlFor="">email</label>
                  <input
                    type="email"
                    className="border-2 p-2 rounded"
                    onChange={userEmail}
                  />
                </div>
                <div className="flex flex-col text-xl p-2">
                  <label htmlFor="">Loan tenure (in months)</label>
                  <input
                    type="text"
                    className="border-2 p-2 rounded"
                    onChange={userTenure}
                  />
                </div>
                <div className="flex flex-col text-xl p-2">
                  <label htmlFor="">Employement status</label>
                  <input
                    type="text"
                    className="border-2 p-2 rounded"
                    onChange={userEmployement_status}
                  />
                </div>

                <div className="flex flex-col text-xl p-2">
                  <label htmlFor="">Todays Date</label>
                  <input
                    type="date"
                    className="border-2 p-2 rounded"
                    onChange={todayDate}
                  />
                </div>

                <div className="flex flex-col text-xl p-2">
                  <label htmlFor="">Reason for loan</label>
                  <textarea
                    name="reason"
                    className="border-2 p-2 rounded"
                    id=""
                    onChange={userReason}
                  ></textarea>
                </div>
                <div className="flex flex-col text-xl p-2">
                  <label htmlFor="">Employment address</label>
                  <input
                    type="text"
                    className="border-2 p-2 rounded"
                    onChange={userEmployement_address}
                  />
                </div>

                <div className="flex flex-col text-xl p-2">
                  <label htmlFor="">loan status</label>
                  <select
                    name="status"
                    id=""
                    onChange={userstatus}
                    className="border-2 p-2 rounded"
                  >
                    <option value="Requesting">Requesting</option>
                  </select>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="aggrement"
                    id=""
                    onChange={employement_address}
                  />
                  <label htmlFor="">
                    I have read the important information and accept that by
                    completing the application, I will be bound by the terms
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">
                    Any personal and credit information obtained may be
                    disclosed from time to time to other lenders, credit bureaus
                    or other credit reportinf agencies.
                  </label>
                </div>
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={submitloan} variant="outlined">
              Submit
            </Button>
            <Button onClick={formClose} variant="outlined">
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Indi;
