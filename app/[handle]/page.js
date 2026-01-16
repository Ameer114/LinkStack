import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";
import Link from "next/link"; 
import ShareButton from "@/components/ShareButton";


const page = async ({ params }) => {
 const handle = decodeURIComponent((await params).handle);
  const client = await clientPromise;
  const db = client.db("linkstack")
  const collection = db.collection("links")
  

  const data = await collection.findOne({ handle: handle });
  if (!data) {
    return notFound();
  }

  return (
    <>
      {data &&
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex justify-center items-center px-6">

          {/* PROFILE CARD */}
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4">

            {/* PROFILE IMAGE */}
            <img
              src={data.pic}
              className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
              alt="profile"
            />

            {/* HANDLE */}
            <h1 className="text-xl font-bold text-gray-800">
              @{data.handle}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-center text-sm">
              {data.desc}
            </p>

            {/* LINKS */}
            <div className="w-full flex flex-col gap-3 mt-4">

              {data.links.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg text-center font-medium hover:bg-indigo-700 transition shadow-md"
                  >
                    {item.linktext}
                  </a>
                )
              })}
              <ShareButton />

            </div>

          </div>
          


        </div>
      }
       <div className="max-w-full min-h-full p-10 mx-auto bg-black text-center">

          <p className="text-gray-400 my-6">
            Create Your Own LinkStack here- <Link href={"/"} className="font-bold">LinkStack.com</Link>
          </p>
          <Link href={'mailto:ameernagarasi6@gmail.com'}>
          <button className="px-4 py-1 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
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
    </>
  )
}

export default page
