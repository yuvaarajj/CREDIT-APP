"use client";

import React, { useEffect, useState } from "react";
import Header from "../Header/page";
import { Button } from "@mui/material";
import BasicLineChart from "../LineChart/page";

const Verifier = () => {
  const [totalLoans, setTotalLoans] = useState(0);
  const [totalBorrowers, setTotalBorrowers] = useState(0);
  const [totalCash, setTotalCash] = useState(0);
  const [vloanlist, setvloanlist] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    getTotalLoans();
    getTotalBorrowers();
    getTotalCashDistribution();
    vloan_Stats();
  }, []);

  const getTotalLoans = async () => {
    try {
      const result = await fetch(
        "https://credit-app-backend-nvo2.onrender.com/User/request/loans"
      );
      const resultTotal = await result.json();
      setTotalLoans(resultTotal.total);
    } catch (error) {
      console.error("Error fetching total loans:", error);
    }
  };

  const getTotalBorrowers = async () => {
    try {
      const BRessult = await fetch(
        "https://credit-app-backend-nvo2.onrender.com/User/request/borrowers"
      );
      const TotalBR = await BRessult.json();
      console.log(TotalBR);
      setTotalBorrowers(TotalBR.totalB.length);
    } catch (err) {
      console.log("error fetching total borrowers:", err);
    }
  };

  const vloan_Stats = async () => {
    const getLoanDetails = await fetch(
      "https://credit-app-backend-nvo2.onrender.com/user/request/all-request"
    );
    const getResponse = await getLoanDetails.json();
    console.log(getResponse);
    setvloanlist(getResponse);
    getResponse.map((e) => console.log(e.fullname));
    console.log(getResponse);
  };

  const getColorByStatus = () => {
    switch (status) {
      case "pending":
        return "#facc15"; // yellow
      case "approved":
        return "#60a5fa"; // blue
      case "rejected":
        return "#f87171"; // red
      default:
        return "lightgreen"; // gray
    }
  };

  const getTotalCashDistribution = async () => {
    try {
      const CResult = await fetch(
        "https://credit-app-backend-nvo2.onrender.com/User/request/amount"
      );
      const TotalC = await CResult.json();
      setTotalCash(TotalC.totalLoanAmount);
    } catch (err) {
      console.log("error fetching total Amount:", err);
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <div>
        <aside className="bg-green-900 float-left">
          <div className="flex p-2 m-1 gap-3 flex-col">
            <div className="flex gap-2">
              <img src="account.png" alt="" className="h-8 w-8" />
              <h2 className="text-2xl text-green-400 font-bold items-center">
                John (Verifier)
              </h2>
            </div>
            <div className="flex gap-2">
              <img src="dashboard1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">DashBoard</h2>
            </div>
            <div className="flex gap-2">
              <img src="borrower1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Borrowers</h2>
            </div>
            <div className="flex gap-2">
              <img src="repayments1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Repayments</h2>
            </div>
            <div className="flex gap-2">
              <img src="loanp1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Loan Parameters</h2>
            </div>
            <div className="flex gap-2">
              <img src="accounting1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Accounting</h2>
            </div>
            <div className="flex gap-2">
              <img src="reports1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Reports</h2>
            </div>
            <div className="flex gap-2">
              <img src="collateral1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Collateral</h2>
            </div>
            <div className="flex gap-2">
              <img src="accessc1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Access Configuration</h2>
            </div>
            <div className="flex gap-2">
              <img src="saving1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Saving</h2>
            </div>
            <div className="flex gap-2">
              <img src="expenses1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Expenses</h2>
            </div>
            <div className="flex gap-2">
              <img src="e-signature1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">E-signature</h2>
            </div>
            <div className="flex gap-2">
              <img src="investora1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Investor Accounts</h2>
            </div>
            <div className="flex gap-2">
              <img src="calender1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">calender</h2>
            </div>
            <div className="flex gap-2">
              <img src="setting1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Setting</h2>
            </div>
            <div className="flex gap-2">
              <img src="signout1.png" alt="" className="h-6 w-6" />
              <h2 className="font-bold text-white">Sign Out</h2>
            </div>
          </div>
        </aside>
        <div className="ml-60 p-2 ">
          <div>
            <h2>Dashboard</h2>
          </div>
          <div>
            <div className="m-2 flex gap-10 flex-row flex-wrap">
              <div className="border-2 w-60 h-30 flex flex-row">
                <div className="bg-green-800 flex flex-row justify-center items-center p-3">
                  <img src="11.png" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-2xl font-bold">{totalLoans}</div>
                  <h2 className="text-2xl font-bold">Loans</h2>
                </div>
              </div>

              <div className="border-2 w-60 h-30 flex flex-row">
                <div className="bg-green-800 flex flex-row justify-center items-center p-3">
                  <img src="12.png" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-bold">Borrowers</h2>
                  <div className="text-2xl font-bold">{totalBorrowers}</div>
                </div>
              </div>
              <div className="border-2 w-60 h-30 flex flex-row">
                <div className="bg-green-800 flex flex-row justify-center items-center p-3">
                  <img src="13.png" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-bold">Total Cash Distributed</h2>
                  <div className="text-2xl font-bold">{totalCash}</div>
                </div>
              </div>

              <div className="border-2 w-60 h-30 flex flex-row">
                <div className="bg-green-800 flex flex-row justify-center items-center p-3">
                  <img src="14.png" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-2xl font-bold">650,000</div>
                  <h2 className="text-2xl font-bold">Saving</h2>
                </div>
              </div>

              <div className="border-2 w-60 h-30 flex flex-row">
                <div className="bg-green-800 flex flex-row justify-center items-center p-3">
                  <img src="15.png" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-bold">09</h2>
                  <div className="text-2xl font-bold">Repaid Loans</div>
                </div>
              </div>

              <div className="border-2 w-60 h-30 flex flex-row">
                <div className="bg-green-800 flex flex-row justify-center items-center p-3">
                  <img src="16.png" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-bold">1000000</h2>
                  <div className="text-2xl font-bold">Total Cash Received</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-62 bg-white">
          <h2 className="font-bold">Applied Loans</h2>
          <div className="flex flex-row justify-between w-2xl ml-5 font-medium text-gray-500">
            <h2 className="">User</h2>
            {/* <h2 className="">Amount</h2> */}
            <h2 className="">date Applied</h2>
            <h2 className="">Status</h2>
          </div>
          <div>
            {vloanlist?.map((e, index) => (
              <div
                className="flex flex-row justify-between w-2xl p-2"
                key={index}
              >
                <h2 className="w-40 font-medium">{e.fullname}</h2>

                <h2 className="w-40">{Date(e.date)}</h2>
                <Button
                  variant="outlined"
                  className={
                    e.status === "pending"
                      ? "bg-yellow-300"
                      : e.status === "VERIFIED"
                      ? "bg-green-300"
                      : e.status === "Requesting"
                      ? "bg-red-400"
                      : e.status === "Approved"
                      ? "bg-blue-400"
                      : "bg-fuchsia-300"
                  }
                >
                  {e.status}
                </Button>
              </div>
            ))}
          </div>
          <div>
            <h2 className="font-bold">Loans Released Monthly</h2>
            <BasicLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifier;
