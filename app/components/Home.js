"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Home({ adminId, posterId }) {
  const [homepage, setHomepage] = useState(false);
  return (
    <>
      {!homepage ? (
        <div className="">
          <img src="/images/main.jpeg" />
          <button
            className="w-3/4 flex  flex-col justify-center items-center mx-auto text-[#ffff] mt -3 px-3 py-2 rounded bg-[#00aaff]"
            onClick={() => setHomepage(true)}
          >
            Post list Check
          </button>
        </div>
      ) : (
        <LoginForm adminId={adminId} posterId={posterId} />
      )}
    </>
  );
}