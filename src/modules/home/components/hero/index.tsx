import Image from "next/image"
import { AiOutlineRight, AiOutlineArrowDown } from "react-icons/ai"
import { Button } from "@medusajs/ui"
import hero from "/public/hero.png"

const Hero = () => {
  return (
    <div className=" bg-cover bg-no-repeat bg-center  h-auto mt-5 md:mt-0">
      <div className="py-2 mx-auto px-4 md:px-8 w-full max-w-7xl flex flex-col md:flex-row md:items-center md:justify-around ">
        <div className="w-full md:w-1/2 mt-12 mb-10 flex flex-col md:items-start gap-4">
          <div className="text-primary text-sm">SONY WH-H910N</div>
          <h1 className="text-3xl md:text-[56px] md:leading-[72px] font-bold">
            Best in Hi-Res and
            <br /> Noise Cancelling
          </h1>
          <p className=" text-sm">
            Experience finely tuned noise-canceling performance in a comfortable
            <br className="hidden md:block" />
            headphone. Long-lasting battery life plus quick charging keeps you
            <br className="hidden md:block" />
            listening for up to 35 hours since start.
          </p>
          <div className="flex space-x-4 mt-4">
            <Button className=" text-base font-bold py-2 px-8 border-0">
              Buy Now
            </Button>
            <button className="bg-transparent text-base text-purple border  rounded-lg font-bold py-2 px-6  hover:text-white">
              Learn More
            </button>
          </div>
          <AiOutlineArrowDown className="text-3xl text-lightGray mt-10 cursor-pointer" />
        </div>
        <div className="w-full md:w-1/3 flex place-items-center">
          <Image
            src={hero}
            alt="Hero Image"
            width={372}
            height={437}
            className="w-60 mx-auto md:w-[372px] md:h-[437px] max-w-full p-2 cursor-pointer object-cover"
          />
          <div className="bg-white py-4 px-4 rounded-full">
            <AiOutlineRight className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
