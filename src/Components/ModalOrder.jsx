import React, {useEffect, useState}from "react";
import axios  from 'axios';

axios.defaults.baseURL='http://localhost:3333';
axios.defaults.withCredentials = true

const ModalOrder = ({ CloseModal , isClicked}) => {
  const [Meal, setMeal] = useState(null)
  const [Extra, setExtra] = useState(null)


useEffect(() => {
  const baseURL = '/meal'
  axios.get(baseURL).then((response) => {
    const data = response.data.meals[0]
    setMeal(data.strMeal)
    setExtra(data.strIngredient1)
  });
}, []);

  console.log(isClicked);
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative p-4 w-full max-w-7xl h-full md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Extra Large modal
                  </h3>
                  <button
                  onClick={CloseModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="extralarge-modal"
                  >
                    <svg
                      ariaHidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-6 space-y-6">
                  <section>
                    <h1 className="sr-only">Checkout</h1>

                    <div className="relative mx-auto max-w-screen-2xl">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="bg-gray-50 py-12 md:py-24">
                          <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <div className="flex items-center">
                            <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/fork-and-knife-with-plate_1f37d-fe0f.png"
                className="mr-3 h-6 sm:h-9"
                alt="FML Logo"
              />

                              <h2 className="ml-4 font-medium">{isClicked.properties.address_line1}</h2>
                            </div>

                            <div className="mt-8">
                              <p className="text-2xl font-medium tracking-tight">
                                $14.99
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                For the purchase of
                              </p>
                            </div>

                            <div className="mt-12">
                              <div className="flow-root">
                                <ul className="-my-4 divide-y divide-gray-200">
                                  <li className="flex items-center justify-between py-4">
                                    <div className="flex items-start">
                                      <img
                                        alt="Trainer"
                                        src="https://source.unsplash.com/random?pasta"
                                        className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                      />

                                      <div className="ml-4">
                                        <p className="text-sm">
                                          {Meal}
                                        </p>

                                        <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                          <div>
                                            <dt className="inline">Extra:</dt>
                                            <dd className="inline">{Extra}</dd>
                                          </div>

                                          <div>
                                            <dt className="inline">Size:</dt>
                                            <dd className="inline">L CUP</dd>
                                          </div>
                                        </dl>
                                      </div>
                                    </div>

                                    <div>
                                      <p className="text-sm">
                                        $8.25
                                        <small className="text-gray-500">
                                          x1
                                        </small>
                                      </p>
                                    </div>
                                  </li>

                                  <li className="flex items-center justify-between py-4">
                                    <div className="flex items-start">
                                      <img
                                        alt="Lettuce"
                                        src="https://source.unsplash.com/random?soda"
                                        className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                      />

                                      <div className="ml-4">
                                        <p className="text-sm">Drink Soda</p>

                                        <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                          <div>
                                            <dt className="inline">Size:</dt>
                                            <dd className="inline">Big</dd>
                                          </div>
                                        </dl>
                                      </div>
                                    </div>

                                    <div>
                                      <p className="text-sm">
                                        $6,74
                                        <small className="text-gray-500">
                                          x1
                                        </small>
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white py-12 md:py-24">
                          <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <form className="grid grid-cols-6 gap-4">
                              <div className="col-span-3">
                                <label
                                  className="mb-1 block text-sm text-gray-600"
                                  for="first_name"
                                >
                                  First Name
                                </label>

                                <input
                                  className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                  type="text"
                                  id="first_name"
                                />
                              </div>

                              <div className="col-span-3">
                                <label
                                  className="mb-1 block text-sm text-gray-600"
                                  for="last_name"
                                >
                                  Last Name
                                </label>

                                <input
                                  className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                  type="text"
                                  id="last_name"
                                />
                              </div>

                              <div className="col-span-6">
                                <label
                                  className="mb-1 block text-sm text-gray-600"
                                  for="email"
                                >
                                  Email
                                </label>

                                <input
                                  className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                  type="email"
                                  id="email"
                                />
                              </div>

                              <div className="col-span-6">
                                <label
                                  className="mb-1 block text-sm text-gray-600"
                                  for="phone"
                                >
                                  Phone
                                </label>

                                <input
                                  className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                  type="tel"
                                  id="phone"
                                />
                              </div>

                              <fieldset className="col-span-6">
                                <legend className="mb-1 block text-sm text-gray-600">
                                  Card Details
                                </legend>

                                <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                  <div>
                                    <label
                                      className="sr-only"
                                      for="card-number"
                                    >
                                      Card Number
                                    </label>

                                    <input
                                      className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                      type="text"
                                      name="card-number"
                                      id="card-number"
                                      placeholder="Card number"
                                    />
                                  </div>

                                  <div className="flex -space-x-px">
                                    <div className="flex-1">
                                      <label
                                        className="sr-only"
                                        for="card-expiration-date"
                                      >
                                        Expiration Date
                                      </label>

                                      <input
                                        className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                        type="text"
                                        name="card-expiration-date"
                                        id="card-expiration-date"
                                        placeholder="MM / YY"
                                      />
                                    </div>

                                    <div className="flex-1">
                                      <label className="sr-only" for="card-cvc">
                                        CVC
                                      </label>

                                      <input
                                        className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                        type="text"
                                        name="card-cvc"
                                        id="card-cvc"
                                        placeholder="CVC"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </fieldset>

                              <fieldset className="col-span-6">
                                <legend className="mb-1 block text-sm text-gray-600">
                                  Billing Address
                                </legend>

                                <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                  <div>
                                    <label className="sr-only" for="country">
                                      Country
                                    </label>

                                    <select
                                      className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                                      id="country"
                                      name="country"
                                      autocomplete="country-name"
                                    >
                                      <option>England</option>
                                      <option>Wales</option>
                                      <option>Scotland</option>
                                      <option>France</option>
                                      <option>Belgium</option>
                                      <option>Japan</option>
                                    </select>
                                  </div>

                                  <div>
                                    <label
                                      className="sr-only"
                                      for="postal-code"
                                    >
                                      ZIP/Post Code
                                    </label>

                                    <input
                                      className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                      type="text"
                                      name="postal-code"
                                      id="postal-code"
                                      autocomplete="postal-code"
                                      placeholder="ZIP/Post Code"
                                    />
                                  </div>
                                </div>
                              </fieldset>

                              <div className="col-span-6">
                                <button
                                  className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                                  type="submit"
                                >
                                  Pay Now
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                {/* <!-- Modal footer --> */}
                {/* <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="extralarge-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-toggle="extralarge-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOrder;
