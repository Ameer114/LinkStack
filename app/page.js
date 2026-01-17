"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [text, settext] = useState("")
  const router = useRouter();

  const createStack = () => {
    router.push(`/generate?handle=${text}`);
  }

  return (
    <main className="w-full">

     {/* HERO SECTION */}
<section className="min-h-screen flex bg-gradient-to-br from-indigo-100 to-purple-200 pt-28">

  {/* CENTER WRAPPER */}
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 gap-20 md:grid-cols-2 items-center min-h-[80vh]">

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center gap-6">

        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          One Link. <br />
          All Your Content. <br />
          <span className="text-indigo-600">Powered by LinkStack</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-md">
          Create your personal link page to share all your social profiles,
          websites and important links in one beautiful place.
        </p>

        {/* CTA */}
        <div className="flex gap-3 mt-4">

          <input
            type="text"
            value={text}
            placeholder="Enter your handle"
            onChange={(e) => settext(e.target.value)}
            className="md:px-4 md:py-3 px-1 py-1 rounded-lg outline-none border border-gray-400 md:w-64 focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={() => createStack()}
            className="md:px-6 md:py-3 md:text-lg px-2 py-1 text-[12px] rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Claim Your LinkStack
          </button>

        </div>

      </div>

      {/* RIGHT PREVIEW */}
      <div className="hidden md:flex justify-end">

        <div className="bg-white p-8 rounded-2xl shadow-xl w-[320px]">

          <div className="w-20 h-20 bg-indigo-500 rounded-full mx-auto mb-4"></div>

          <h3 className="text-center font-semibold">yourname.linkstack</h3>

          <div className="flex flex-col gap-3 mt-4">
            <div className="bg-gray-200 h-10 rounded-md"></div>
            <div className="bg-gray-200 h-10 rounded-md"></div>
            <div className="bg-gray-200 h-10 rounded-md"></div>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>




     {/* FEATURES SECTION */}
<section id="features" className="min-h-screen bg-white px-12 py-20 flex flex-col justify-center">

  <h2 className="text-4xl font-bold text-center mb-12">
    Powerful Features
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    <div className="p-8 min-h-[260px] flex flex-col justify-center rounded-2xl shadow-xl hover:scale-105 transition text-center bg-white">
      <h3 className="font-semibold text-xl mb-3">Custom Profile</h3>
      <p className="text-gray-600">
        Personalize your page with profile image, description and links.
      </p>
    </div>

    <div className="p-8 min-h-[260px] flex flex-col justify-center rounded-2xl shadow-xl hover:scale-105 transition text-center bg-white">
      <h3 className="font-semibold text-xl mb-3">Fast Sharing</h3>
      <p className="text-gray-600">
        Share one link everywhere and reach your audience faster.
      </p>
    </div>

    <div className="p-8 min-h-[260px] flex flex-col justify-center rounded-2xl shadow-xl hover:scale-105 transition text-center bg-white">
      <h3 className="font-semibold text-xl mb-3">Mobile Friendly</h3>
      <p className="text-gray-600">
        Optimized design for all devices and screen sizes.
      </p>
    </div>

  </div>

</section>


      {/* HOW IT WORKS SECTION */}
      <section id="how" className="min-h-screen bg-gray-100 px-12 py-20 flex flex-col justify-center">

        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center">

          <div>
            <div className="text-3xl font-bold text-indigo-600">1</div>
            <p className="mt-2 font-medium">Claim your handle</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-indigo-600">2</div>
            <p className="mt-2 font-medium">Add your links</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-indigo-600">3</div>
            <p className="mt-2 font-medium">Share everywhere</p>
          </div>

        </div>

      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="min-h-screen bg-white px-12 py-20 flex flex-col justify-center">

        <h2 className="text-4xl font-bold text-center mb-12">
          Simple Pricing
        </h2>

        <div className="flex justify-center">

          <div className="bg-indigo-600 text-white p-10 rounded-2xl shadow-xl text-center">

            <h3 className="text-2xl font-semibold">Free Forever</h3>

            <p className="mt-3 text-indigo-100">
              No credit card required
            </p>

            <button
              onClick={() => createStack()}
              className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </button>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen bg-gray-900 text-white px-12 py-20 flex flex-col justify-center">
      
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="max-w-md mx-auto text-center">

          <p className="text-gray-400 mb-6">
            Have questions? Want partnerships? Reach out anytime.
          </p>
          <Link href={'mailto:ameernagarasi6@gmail.com'}>
          <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
            Email Support
          </button>
          </Link>
          <p className="text-gray-400 mt-6">
           Fueled By- <Link href={"https://ameernagarasiportfolio.netlify.app/"} className="font-black text-white">@Ameer N.</Link>
          </p>
          <p className="text-gray-400 mb-6">
           © 2026 coderWithCoffee all rights reserved.
          </p>  
        </div>

      </section>

    </main>
  );
}
