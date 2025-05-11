"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Header from "../Header/page";
import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";

const User = () => {
  const router = useRouter();

  const signIn = useGoogleLogin({
    onSuccess: (codeRes) => getUserProfile(codeRes),
    // onSuccess: (codeRes) => console.log(codeRes.data),
    onError: (err) => console.log(err),
    flow: "implicit",
  });

  useEffect(() => {
    signIn();
  });

  const [open, setOpen] = useState(false);

  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        // `https://www.googleapis.com/oauth2/v3/userinfo`
        `https://www.googleapis.com/oauth2/v3/userinfo`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        const userData = res;
        const uniqueId = res.data.sub;
        // localStorage.setItem("user", JSON.stringify(res.data));
        console.log(res.data.picture);
        console.log(res);
        setOpen(false);
        // generateTrip();

        router.push(`/User/${uniqueId}`);

        axios
          .post("http://localhost:4000/models/new_user", {
            GoogleId: userData.data.sub,
            name: userData.data.name,
            email: userData.data.email,
            password: userData.data.password,
            picture: userData.data.picture,
          })
          .then((response) => {
            console.log("user saved", response.data);
          });
      });
  };

  const sign_in = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header />
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
          <div>
            <Button variant="outlined" color="inherit" onClick={sign_in}>
              Sign-in/login
            </Button>
            <Button variant="outlined" color="inherit">
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
        <div>
          <h1>Applied Loans</h1>
          <div>sort&</div>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <Button variant="outlined" color="secondary" onClick={signIn}>
              Sign in With GOOGLE
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        <div>
          <div>
            <Button variant="contained" color="inherit">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
