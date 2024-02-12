"use client";
import { Toaster } from "react-hot-toast";
const Toastprovider = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Toastprovider;
