import { ReactNode } from "react";

type HomeProps = {
    children: ReactNode
}

const Home = ({children}: HomeProps) => {
    return ( 
        <>
    <div>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fill-opacity=".5"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".577"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
       {children} 
      </div>
      <main>
        <div className="relative px-1 lg:px-1">
          <div className="mx-auto max-w-7xl py-32 sm:py-32 lg:py-32">
            <div className="text-center ">
              <h1
                className="font-sans text-8xl font-bold tracking-tighter text-neutral-900 sm:text-8xl"
              >
                Learn. Develop.
                <span
                  className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  > Grow.</span
                >
              </h1>
              <p className="text-neutral-400 mt-6 mx-8 text-lg leading-8 text-gray-600">
              Growify is a decentralized platform that gives developers the chance to earn cryptocurrency by solving problems. 
              <br/>It is built on secure blockchain technology.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="btn rounded-none bg-neutral-900 px-5 py-3 text-white font-semibold normal-case hover:bg-purple-50  hover:ring-2 hover:ring-black hover:text-black"
                  >Join the waitlist
                  </a
                >
                <a
                  href="#"
                  className="text-black font-semibold leading-7 text-gray-900"
                  >Learn More <span aria-hidden="true">→</span></a
                >
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fill-opacity=".6"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
        </>
     );
}
 
export default Home;