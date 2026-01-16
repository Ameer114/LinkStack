export const dynamic = "force-dynamic";


import clientPromise from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import { Buffer } from "buffer";

export async function POST(request) {
  let links;

  try {
    // const body=await request.json()
    const formData = await request.formData();
    const handle = formData.get("handle");
    const desc = formData.get("desc");
    const linksRaw  = formData.get("links");
    const file = formData.get("pic");

         // VALIDATIONS
    if (!handle || !linksRaw  || !file) {
      return Response.json({
        success: false,
        message: "Missing required fields"
      });
    }

if (typeof linksRaw === "string") {
  links = JSON.parse(linksRaw);
} else {
  links = linksRaw;
}

    console.log("RAW LINKS:", linksRaw);


 
    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const client = await clientPromise;
    const db = client.db("linkstack");
    const collection = db.collection("links");

    const doc = await collection.findOne({ handle });

    if (doc)
      return Response.json({
        success: false,
        error: true,
        message: "handle already exists, try another handle.",
        result: null,
      });

    // Upload to cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "linkstack" }, (error, result) => {
          if (error) reject(error);
          resolve(result);
        })
        .end(buffer);
    });

    const imageUrl = uploadResult.secure_url;

    const data = {
      handle,
      desc,
      links,
      pic: imageUrl,
    };

    const result = await collection.insertOne(data);

    return Response.json({
      success: true,
      error: false,
      message: "your LinkStack has been generated!",
      result: result,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return Response.json({
      success: false,
      message: "Server error",
    });
  }
}
