import support from "@/public/icon-support.svg"
import coding from "@/public/icon-code.svg"
import transparency from "@/public/icon-transparency.svg"
import Image from "next/image"

export default function ChooseSection() {
  return (

    <div className="bg-gradient-to-b from-background to-accent p-10  sm:p-20">
        <div className="container mx-auto">
            <h2 className="text-center font-bricolage text-4xl font-bold lg:text-5xl">Why Choose Us?</h2>
        </div>
      <ul className="mt-10 grid grid-cols-1 gap-y-6 overflow-hidden max-lg:mx-auto max-lg:max-w-[500px] lg:grid-cols-3 lg:rounded-3xl">
        <li className="relative bg-background isolate px-6 py-8 backdrop-blur-lg lg:px-7 max-lg:h-full lg:h-[500px] max-lg:rounded-xl max-lg:overflow-hidden __gradient_2 lg:__gradient_1">
          {/* <p className="text-center font-bricolage text-lg font-medium text-accent">

            [ 1 ]
          </p> */}
          <h3 className="mt-3 text-center font-bricolage text-3xl font-bold lg:text-4xl">
            Coding Standards
          </h3>
          <Image
            src={coding}
            alt="Icon"
            className="mx-auto mt-7 max-w-20 md:mt-10 md:max-w-[100px]"
          />
          <p className="mt-6 text-center font-light text-gray-400 md:mt-8 md:text-lg">
            We adhere to best coding practices, staying current with the latest
            updates to deliver fully optimized, bug-free code.
          </p>
        </li>
        <li className="relative bg-gradient-to-b from-purple-100 to-purple-500 isolate px-6 py-8 backdrop-blur-lg lg:px-7 max-lg:h-full lg:h-[500px] max-lg:rounded-xl max-lg:overflow-hidden __gradient_2 lg:__gradient_1">
          {/* <p className="text-center font-bricolage text-lg font-medium text-accent">
            [ 2 ]
          </p> */}

          <h3 className="mt-3 text-center text-background font-bricolage text-3xl font-bold lg:text-4xl">
            Clear &amp; Transparent
          </h3>
          <Image
            src={transparency}
            alt="Icon"
            className="mx-auto mt-7 max-w-20 md:mt-10 md:max-w-[100px]"
          />
          <p className="mt-6 text-center font-light text-muted md:mt-8 md:text-lg">
            Our React applications are optimized for speed and performance,
            ensuring fast load times and a smooth user experience.
          </p>
        </li>
        <li className="relative bg-background isolate px-6 py-8 backdrop-blur-lg lg:px-7 max-lg:h-full lg:h-[500px] max-lg:rounded-xl max-lg:overflow-hidden __gradient_2 lg:__gradient_1">
          {/* <p className="text-center font-bricolage text-lg font-medium text-accent">
            [ 3 ]
          </p> */}

          <h3 className="mt-3 text-center font-bricolage text-3xl font-bold lg:text-4xl">
            Continuous Support
          </h3>
          <Image
            src={support}
            alt="Icon"
            className="mx-auto mt-7 max-w-20 md:mt-10 md:max-w-[100px]"
          />
          <p className="mt-6 text-center text-gray-400 font-light  md:mt-8 md:text-lg">
            We provide 1 month of free support after closing the deal, ensuring
            a smooth transition and ongoing assistance as needed.
          </p>



        </li>
      </ul>
    </div>
  );
}
