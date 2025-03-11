"use client"

const Checks = () => {

  return (
    <section className="">
      <div className="container grid grid-cols-12 h-screen mx-auto lg:max-w-full bg-[url('/assets/Checks/Niyyah_Check.svg')] bg-cover bg-center bg-no-repeat">


        <div className="col-span-2 flex flex-col items-start justify-center">
        </div>

        <div className="col-span-5 grid grid-rows-1 flex flex-col items-center justify-left text-white">
          <div className="row-span-1 mb-4">
            <span className="text-5xl font-bold text-left leading-tight flex flex-col justify-center mb-8">Niyyah Check</span>
            <span className="text-3xl text-left leading-tight flex flex-col justify-center mb-4">
              Discover your Intentions.
            </span>
            <span className="text-lg text-left leading-tight flex flex-col justify-center" style={{ lineHeight: '1.5' }}>
              Niyyah means an intention in one's heart to perform an action for the sake of Allah.<br />
              Niyyah Check is a self-assessment and personalised experience designed to help  <br />
              you reflect on your business intentions, motivations, and mindset.
            </span>
            <div className="flex items-center justify-center mt-8 relative">
              <img src="/assets/Checks/Check1.svg" alt="Image 1" className="w-24 h-24" />
              <div className="w-36 h-1 bg-yellow-500"></div>
              <img src="/assets/Checks/Check2.svg" alt="Image 3" className="w-24 h-24" />
              <div className="w-36 h-1 bg-yellow-500"></div>
              <img src="/assets/Checks/Check3.svg" alt="Image 5" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 relative mb-6">
              <div className="grid grid-cols-6 gap-x-0 text-white items-center">
                <div className="col-span-1 flex items-center justify-center text-5xl font-bold">1.</div>
                <div className="col-span-5 flex items-center justify-center text-medium">
                  Answer Insightful<br />Questions To Uncover<br /> Your True Drive.
                </div>
              </div>

              <div className="grid grid-cols-6 gap-x-0 text-white items-center ">
                <div className="col-span-1 flex items-center justify-center text-5xl font-bold">2.</div>
                <div className="col-span-5 flex items-center justify-center text-medium">
                  Use Emotion Tracking <br />To Understand Decision<br />-Making Patterns.
                </div>
              </div>

              <div className="grid grid-cols-6 gap-x-0 text-white items-center">
                <div className="col-span-1 flex items-center justify-center text-5xl font-bold">3.</div>
                <div className="col-span-5 flex items-center justify-center text-medium">
                  Get Personalised<br />Feedback & Tailored <br />Growth Strategies.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-left gap-4">
              <input
                type="text"
                placeholder="Your name*"
                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
              />

              <input
                type="email"
                placeholder="Your email*"
                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
              />

              <input
                type="tel"
                placeholder="Your phone number*"
                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
              />

              <button className="p-2 bg-yellow-600 text-black font-bold hover:bg-purple-700 transition-all w-40">
                Join Waiting List
              </button>
            </div>

          </div>


        </div>

        <div className="col-span-4 mt-10">
          <img
            src="/assets/Checks/book.svg"
            alt=""
            className="w-4/5 h-auto object-cover justify-right"
          />
        </div>

        <div className="col-span-1 flex flex-col">
        </div>
      </div>

      {/* <div className="row-sapn-10">
      </div>

      <div
        className="row-span-2 bg-gradient-to-b from-black to-transparent p-6"
        style={{
          background: "linear-gradient(180deg, #001427 0%, rgba(0, 20, 39, 0) 100%)",
          transform: "matrix(1, 0, 0, -1, 0, 0)",
        }}
      >
      </div> */}
    </section >
  );
};

export default Checks;
