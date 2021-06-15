import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiViewGridAdd } from "react-icons/hi";
import SimpleForm from "../components/SimpleForm";




export default function BuyerMain() {
  
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <p
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </p>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full bg-white mx-auto max-w-2xl px-3 py-3 md:py-8 md:px-8 lg:py-12 lg:px-12 overflow-hidden text-center align-middle transition-all transform  shadow-2xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-gray-900"
                >
                  Enter email to get notified about launch..
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Sounds interesting!!! Share your email to get Notification
                    about the latest updates, launch dates and more..
                  </p>
                </div>
                <SimpleForm />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <div className="relative  mb-10  overflow-hidden h-screen md:h-full xl:h-screen 2xl:h-full ">
        <div className="max-w-screen mx-auto h-screen md:h-full xl:h-screen 2xl:h-full">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-12 xl:pb-20 h-screen md:h-full xl:h-screen 2xl:h-full">
            <main className="mt-10 mx-auto px-4 h-full xl:h-screen 2xl:h-full ">
              <div className="flex flex-col lg:flex-row w-full  items-start justify-between md:justify-start h-screen md:h-1/2">
                <div
                  className="text-left -mt-10 s:-mt-12 xs:-mt-10  md:mt-16 lg:mt-20 lg:px-8 xl:mt-36  z-20 md:z-30 w-full md:w-1/2 
                    flex flex-col items-center  md:items-start justify-start md:justify-center h-full grid place-items-center "
                >
                  <div>
                    <h1
                      className="tracking-tight font-extrabold text-gradient bg-gradient-to-r from-green-500 via-blue-600 to-pink-400 
                        titleHome text-4xl xs:text-5xl lg:text-6xl xl:text-7xl"
                    >
                      New age Marketplace for <br />
                      <span
                        className="text-gradient  transition ease-in-out tracking-tight subpixel-antialiased
       font-extrabold   bg-gradient-to-r from-yellow-600 via-red-500 to-blue-600"
                      ></span>
                    </h1>

                    <h2 className="mt-3  text-gray-500 sm:mt-5 text-base  font-new sm:mx-auto md:mt-5  lg:mx-0">
                      Expand your reach and grow your business through thousands
                      of online retailers, dropshippers and businesses. Join
                      with AirGrow and get your products and services online
                      now.{" "}
                    </h2>

                    <div className="mt-16 xs:mt-12 sm:mt-8 sm:flex  justify-center md:justify-start w-full">
                      <div className="rounded-full shadow">
                        <button
                          onClick={openModal}
                          className="w-full focus:outline-none flex items-center uppercase justify-center px-8 py-3  text-base font-new rounded-full text-white bg-black "
                        >
                          Pre-Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="opacity-10 z-10 md:z-50 md:opacity-90 sm:text-center absolute  lg:text-left transform  w-full -right-10 -top-60  md:w-1/2">
                  <div className="flex gap-4 gap-y-1">
                    <div className="col-1">
                      <div className="mb-4">
                        <div className="shadow-lg rounded-2xl w-80 p-4 bg-white relative overflow-hidden">
                          <img
                            alt="moto"
                            src="/plant.jpg"
                            className="absolute -right-16 -bottom-16 h-40 w-40 mb-4"
                          />
                          <div className="w-4/6">
                            <p className="text-gray-800 text-lg font-medium mb-2">
                              Avg
                            </p>
                            <p className="text-gray-400 text-xs">
                              Detail is not an obsession, it is the very essence
                              of perfection.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="shadow-lg rounded-2xl p-4 bg-white  w-80 m-auto">
                          <div className="w-full h-full text-center">
                            <div className="flex h-full flex-col justify-between">
                              <svg
                                width="40"
                                height="40"
                                className="mt-4 w-12 h-12 m-auto text-indigo-500"
                                fill="currentColor"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
                              </svg>
                              <p className="text-gray-800  text-xl font-bold mt-4">
                                Request Quotation
                              </p>
                              <p className="text-gray-600 text-xs py-2 px-6">
                                Do you want to request quotation for your
                                product requirement?
                              </p>
                              <div className="flex items-center justify-between gap-4 w-full mt-4">
                                <button
                                  type="button"
                                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                  Post
                                </button>
                                <button
                                  type="button"
                                  className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-0">
                        <div className="flex flex-wrap items-center justify-center">
                          <div className="flex-shrink-0 mx-2 mb-4 relative overflow-hidden bg-yellow-500  rounded-lg max-w-xs shadow-lg">
                            <svg
                              className="absolute bottom-0 left-0 mb-4"
                              viewBox="0 0 375 283"
                              fill="none"
                            >
                              <rect
                                x="159.52"
                                y="175"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 159.52 175)"
                                fill="#f3c06b"
                              ></rect>
                              <rect
                                y="107.48"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 0 107.48)"
                                fill="#f3c06b"
                              ></rect>
                            </svg>
                            <div className="relative pt-8 px-10 flex items-center justify-center">
                            
                              <img width="220" height="220"
                                className="relative w-60"
                                src="/shop.svg"
                                alt="shopping"
                              />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">
                              <p className="block font-semibold text-xl">
                                Product
                              </p>
                              <div className="flex justify-between mt-1">
                                <p className="bg-white rounded-full text-yellow-500 text-sm font-bold px-3 py-2 leading-none flex items-center">
                                  Contact Supplier
                                </p>
                                <p className="bg-white rounded-full text-yellow-500 text-sm font-bold px-3 py-2 leading-none flex items-center">
                                  Request Quote
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="overflow-hidden shadow border  rounded-2xl  w-80  m-auto">
                        
                          <img width="320" height="220" alt="t-shirts" src="/buyerpage.jpg" className="  " />
                       
                        </div>
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="mb-4 flex gap-4">
                        <button
                          type="button"
                          className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Annuler
                        </button>
                        <button
                          type="button"
                          className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Confirmer
                        </button>
                      </div>
                      <div className="mb-3">
                        <div className="overflow-hidden   w-80 ">
                          <div className="rounded-t-lg h-32 w-full mb-4"></div>
                         
                          <img width="380" height="280"
                            alt="headphones"
                            src="/headphones.jpg"
                            className=" rounded-xl h-full mx-auto "
                          />
                      
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="shadow-lg border rounded-2xl w-80 bg-white dark:bg-gray-800">
                          <div className="flex flex-col items-center justify-center p-4 ">
                            <div className="block relative">
                            
                              <img width="60" height="60"
                                alt="profile"
                                src="/plant.jpg"
                                className="mx-auto rounded-full "
                              />
      
                            </div>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                              Connect with Supplier
                            </p>
                            <p className="text-gray-400 text-xs flex items-center">
                              as per required services
                            </p>

                            <div className="flex items-center justify-between  w-full mt-1">
                              <li className="mb-1 text-sm flex items-center ">
                                <svg
                                  className="h-4 w-4 mr-1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  stroke="currentColor"
                                  fill="#10b981"
                                  viewBox="0 0 1792 1792"
                                >
                                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                </svg>
                                Dropshipping
                              </li>
                              <li className="mb-1 text-sm flex items-center ">
                                <svg
                                  className="h-4 w-4 mr-1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  stroke="currentColor"
                                  fill="#10b981"
                                  viewBox="0 0 1792 1792"
                                >
                                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                </svg>
                                Customization
                              </li>
                            </div>
                            <div className="flex items-center justify-between  w-full mt-1">
                              <li className="mb-1 text-sm flex  ">
                                <svg
                                  className="h-4 w-4 mr-1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  stroke="currentColor"
                                  fill="#10b981"
                                  viewBox="0 0 1792 1792"
                                >
                                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                </svg>
                                On Demand
                              </li>
                              <li className="mb-1 text-sm flex  ">
                                <svg
                                  className="h-4 w-4 mr-1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  stroke="currentColor"
                                  fill="#10b981"
                                  viewBox="0 0 1792 1792"
                                >
                                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                </svg>
                                White labelling
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-2">
                        <div className="shadow-lg rounded-2xl p-4 bg-gradient-to-tr from-yellow-500 via-red-400 to-blue-500 w-80 m-auto relative">
                          <div className="w-full h-full text-center">
                            <div className="flex h-full flex-col justify-between">
                              <HiViewGridAdd className="mt-2 w-14 h-14 m-auto" />

                              <p className=" text-2xl mt-2">
                                Wide Variety of products
                              </p>
                              <p className=" text-sm  py-2 px-6">
                                Source products from AirGrow's ever increasing
                                trusted suppliers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="shadow-lg border rounded-2xl w-80 p-4 bg-white flex justify-between items-center">
                          <div className="w-2/6 text-right">
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 1792 1792"
                              className="text-indigo-500 h-8 w-8"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                            </svg>
                          </div>
                          <div className="w-full">
                            <p className="text-gray-500 text-base font-bold">
                              Manage quotations
                            </p>
                            <p className="text-gray-500 text-sm">
                              You have recieved 2 new quotations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
