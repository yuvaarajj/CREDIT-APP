import React from "react";

const Header = () => {
  return (
    <div className="p-2 m-1 flex flex-row justify-between items-center">
      <h1 className="text-2xl font-bold text-green-700">CREDIT APP</h1>
      <div className="flex gap-3 justify-center items-center">
        <h2 className="flex text-xl font-bold gap-3 text-green-700">
          <img src="home.png" className="h-6 " alt="" />
          Home
        </h2>
        <h2 className="flex text-xl font-bold text-green-700 gap-3">
          <img src="payments.png" className="h-6" alt="" />
          Payments
        </h2>
        <h2 className="flex text-xl font-bold text-green-700 gap-3">
          <img src="budget.png" className="h-6" alt="" />
          Budget
        </h2>
        <h2 className="flex text-xl font-bold text-green-700 gap-3">
          <img src="card.png" className="h-6" alt="" />
          Card
        </h2>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <h2>
          <img src="notification.png" className="h-6" alt="" />
        </h2>
        <h2>
          <img src="msg.png" className="h-6" alt="" />
        </h2>
        <h2>
          <img src="user.png" className="h-6" alt="" />
        </h2>
        <select name="panal" id="" className="text-xl font-bold text-green-700">
          <option value="user">User</option>
          <option value="Verifier">Verifier</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
