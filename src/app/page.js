"use client";

import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const goToCutomer = () => {
    router.push("/User");
  };
  return (
    <div>
      <div>
        <Button variant="outlined" color="primary" onClick={goToCutomer}>
          Customer
        </Button>
      </div>

      <div>
        <Button variant="outlined" color="primary">
          Verifier
        </Button>
      </div>

      <div>
        <Button variant="outlined" color="primary">
          Admin
        </Button>
      </div>
    </div>
  );
};

export default page;
