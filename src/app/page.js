"use client";

import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const goToCutomer = () => {
    router.push("/User");
  };

  const goToVerifier = () => {
    router.push("/Verifier");
  };

  const goToAdmin = () => {
    router.push("/admin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6 px-4 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to
        <span className="font-bold text-4xl text-green-600">CREDIT APP</span>
      </h1>

      <Button
        variant="outlined"
        onClick={goToCutomer}
        className="w-64 bg-blue-600 hover:bg-blue-700 text-white mb-7 font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300"
      >
        Go to Customer Portal!
      </Button>

      <Button
        variant="outlined"
        onClick={goToVerifier}
        className="w-64 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300"
      >
        Go to Verifier Portal!
      </Button>

      <Button
        variant="outlined"
        onClick={goToAdmin}
        className="w-64 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300"
      >
        Go to Admin Portal!
      </Button>
    </div>
  );
};

export default page;
