"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();

  const [link, setlink] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState(null);
  const [desc, setdesc] = useState("");
  const [load, setload] = useState(false);


  const submitLink = async () => {
    setload(!load)
    const formData = new FormData();
    formData.append("handle", handle);
    formData.append("desc", desc);
    formData.append("pic", pic);
    formData.append("links", JSON.stringify(link));

    const r = await fetch("http://localhost:3000/api/add", {
      method: "POST",
      body: formData,
    });

    const result = await r.json();
    setload(!load)

    if (result.success) {
      toast.success(result.message);
      sethandle("");
      setlink([]);
      setpic(null);

      toast("Redirecting in few seconds");

      setTimeout(() => {
        redirect(`/${handle}`);
      }, 3000);
    } else toast.error(result.message);
  };

  const handleChange = (index, link, linktext) => {
    setlink((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) return { link, linktext };
        else return item;
      });
    });
  };

  const addLink = () => {
    setlink(link.concat([{ link: "", linktext: "" }]));
  };

  return (
    <div className="min-h-screen  md:pt-18 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-indigo-100 to-purple-200">

      {/* LEFT FORM PANEL */}
      <div className="flex items-center justify-center md:justify-end  p-10">

        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-6">

          <div className="text-center">
            <h1 className="text-2xl font-bold">Create Your LinkStack</h1>
            <p className="text-gray-500 text-sm">Claim your unique handle</p>
          </div>

          {/* Handle Input */}
          <input
            type="text"
            placeholder="Choose a Handle"
            className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
            value={handle || ""}
            onChange={(e) => sethandle(e.target.value)}
          />
                  {/* Upload Image */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              className="border rounded-lg px-3 py-2"
              onChange={(e) => setpic(e.target.files[0])}
            />
          </div>

          {/* Description */}
          <input
            type="text"
            placeholder="Enter Description"
            value={desc || ""}
            className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setdesc(e.target.value)}
          />


          {/* Dynamic Links */}
          {link &&
            link.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">

                  <input
                    type="text"
                    placeholder="Enter Link"
                    className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                    value={item.link || ""}
                    onChange={(e) =>
                      handleChange(index, e.target.value, item.linktext)
                    }
                  />

                  <input
                    type="text"
                    placeholder="Enter Link Text"
                    className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                    value={item.linktext || ""}
                    onChange={(e) =>
                      handleChange(index, item.link, e.target.value)
                    }
                  />

                </div>
              );
            })}

          {/* Add Link Button */}
          <button
            onClick={() => addLink()}
            className="text-indigo-600 font-medium hover:underline"
          >
            + Add Another Link
          </button>

  
          {/* Submit Button */}

          <button
            disabled={pic == null || handle == "" || link[0].linktext == ""}
            className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-400"
            onClick={() => submitLink()}
          >
          {!load?  "Create Your LinkStack": <p>LOADING... </p>}
          </button>
          

          <ToastContainer />

        </div>

      </div>

      {/* RIGHT PREVIEW PANEL */}
      <div className="hidden md:flex items-center justify-start ml-20">

        <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] min-h-[350px]">

          {/* IMAGE PREVIEW */}
          {pic ? (
            <img
              src={URL.createObjectURL(pic)}
              alt="preview"
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border"
            />
          ) : (
            <div className="w-20 h-20 bg-indigo-500 rounded-full mx-auto mb-4"></div>
          )}

          <h3 className="text-center font-semibold">
            @{handle || "yourhandle"}
          </h3>

          <p className="text-center text-sm text-gray-500 mb-4">
            {desc || "Your bio will appear here"}
          </p>

          <div className="flex flex-col gap-3">
            {link.map((item, i) => (
              <div
                key={i}
                className="bg-gray-200 h-10 rounded-md flex items-center justify-center text-sm"
              >
                {item.linktext || "Your Link"}
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default page;
