"use client";
import { ToastContainer, toast } from "react-toastify";


const ShareButton = () => {

  const shareProfile = () => {
    const url = window.location.href;
      navigator.clipboard.writeText(url);
      toast.success("copied to clipboard")
    }


  return (
    <>
    
    <button
      onClick={shareProfile}
      className="mt-2 px-4 py-2 rounded-full cursor-pointer bg-gray-300 hover:bg-gray-300 text-sm font-medium transition"
    >
      🔗 Copy Profile URL
    </button>
    <ToastContainer />
    </>
  );
};

export default ShareButton;
