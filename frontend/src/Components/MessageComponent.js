function MessageComponent() {
  return (
    <div className="flex h-screen w-screen">
      <div
        style={{ flex: 0.04 }}
        className="bg-sidebarBlue h-full flex flex-col justify-between py-5"
      >
        <div className="flex flex-col space-y-10 items-center">
          <div>
            <svg
              className="bg-white h-10"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="#004E96"
            >
              <path d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.752514 12.564938 30.494647 15.060547 33.859375 A 3.5 3.5 0 0 0 18.5 38 A 3.5 3.5 0 1 0 18.5 31 A 3.5 3.5 0 0 0 17.931641 31.050781 C 16.143565 28.387233 15 24.611465 15 20.486328 C 15 12.633328 19.122 6 24 6 C 28.119 6 31.689125 10.7375 32.703125 16.9375 C 34.125125 17.3455 35.541688 17.897453 36.929688 18.564453 C 36.251687 9.2704531 30.712 2 24 2 z M 22.5 17 A 3.5 3.5 0 1 0 22.5 24 A 3.5 3.5 0 0 0 25.640625 22.041016 C 28.890379 21.837485 32.64609 22.840116 36.113281 24.917969 C 42.973281 29.030969 46.703812 36.223047 44.257812 40.623047 C 43.453812 42.069047 42.005359 43.108953 40.068359 43.626953 C 37.279359 44.372953 33.859234 43.993672 30.490234 42.638672 C 29.421234 43.632672 28.245891 44.565828 26.962891 45.423828 C 30.290891 47.104828 33.8105 47.996094 37.0625 47.996094 C 38.4725 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.337906 36.117406 47.127922 26.858281 38.169922 21.488281 C 33.907448 18.931871 29.185543 17.753815 25.035156 18.09375 A 3.5 3.5 0 0 0 22.5 17 z M 9.1601562 23.324219 C 2.0791563 28.795219 -0.95795312 36.799406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.685234 8.8984375 47.490234 C 10.169438 47.830234 11.527453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.910031 46.789672 24.707031 44.513672 C 28.954867 41.96696 32.09575 38.543722 33.876953 34.962891 C 35.628054 34.772138 37 33.301038 37 31.5 C 37 29.57 35.43 28 33.5 28 C 31.57 28 30 29.57 30 31.5 C 30 32.040225 30.132082 32.546629 30.351562 33.003906 C 28.907628 35.978686 26.213448 38.945387 22.650391 41.082031 C 18.354391 43.658031 13.599641 44.609953 9.9316406 43.626953 C 7.9956406 43.108953 6.5481406 42.069047 5.7441406 40.623047 C 3.8101406 37.143047 5.7462969 31.923469 10.029297 27.855469 C 9.6182969 26.415469 9.3241562 24.899219 9.1601562 23.324219 z"></path>
            </svg>
          </div>
          <div className="w-full bg-white flex justify-center items-center py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 text-center "
              viewBox="0 0 20 20"
              fill="#004E96"
            >
              <path
                fillRule="evenodd"
                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="w-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 "
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </div>
          <div className="flex w-full justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-12"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex relative justify-center items-center">
          <img
            className="rounded-full shadow-md h-10"
            src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4268890229824877&height=50&width=50&ext=1631131169&hash=AeQFUd99yGLFVSm_rxU"
            alt=""
          />
          <div
            className="absolute bottom-0 right-4 z-50 h-3 w-3 rounded-full"
            style={{ backgroundColor: "#00d921" }}
          ></div>
        </div>
      </div>
      <div style={{ flex: 0.3 }} className="bg-gray-50 h-full flex flex-col">
        <div className="flex justify-between items-center py-6 px-2 bg-white border border-l-0 border-gray-300">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 -mb-1 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <h2 className="select-none text-4xl font-bold">Conversations</h2>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
      </div>
      <div
        style={{ flex: 0.5 }}
        className="bg-gray-100 h-full flex flex-col relative"
      >
        <div className="py-6 bg-white px-2 border border-l-0 border-r-0 border-gray-300">
          <h2 className="select-none text-4xl font-bold">Amit RG</h2>
        </div>
        <div className="w-full px-4 absolute bottom-10">
          <input
            type="text"
            placeholder="Message Amit RG"
            className="w-full border border-gray-300 rounded-md px-3 py-3 shadow-md  focus:ring focus:outline-none"
          />
        </div>
      </div>
      <div
        style={{ flex: 0.2 }}
        className="bg-gray-200 h-full flex flex-col items-center  "
      >
        <div className="flex flex-col w-full justify-center items-center space-y-3 py-20 border border-gray-300 bg-white">
          <div className="relative">
            <img
              className="rounded-full shadow-md h-20"
              src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4268890229824877&height=50&width=50&ext=1631131169&hash=AeQFUd99yGLFVSm_rxU"
              alt=""
            />
          </div>

          <h4 className="text-xl font-medium">Amit RG</h4>
          <div className="flex justify-center items-center text-gray-400">
            <div className="h-2 w-2 mr-2 rounded-full bg-gray-400"></div>
            <p>Offline</p>
          </div>
          <div className="flex justify-center items-center">
            <button className="px-2 py-1 border mr-3 hover:opacity-75 border-gray-400 shadow-sm rounded-md">
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call
              </div>
            </button>
            <button className="px-2 py-1 border border-gray-400 hover:opacity-75 shadow-sm rounded-md">
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                Profile
              </div>
            </button>
          </div>
        </div>
        <div className="bg-white w-11/12 mt-3 p-4 rounded-md shadow-md">
          <h5 className="text-xl font-semibold mb-4">Customer details</h5>
          <div className="flex w-full justify-between items-center">
            <p className="text-md text-gray-400">Email</p>
            <p className="text-md font-semibold">amit@richpanel.com</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="text-md text-gray-400">First Name</p>
            <p className="text-md font-semibold">Amit</p>
          </div>
          <div className="flex w-full justify-between items-center mb-4">
            <p className="text-md text-gray-400">Last Name</p>
            <p className="text-md font-semibold">RG</p>
          </div>
          <h4 className="text-blue-500 cursor-pointer select-none font-semibold">
            View more details
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
