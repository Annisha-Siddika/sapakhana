import React from "react";
import Container from "../Container";
import Headings from "../Headings";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { FaMedal } from "react-icons/fa";

export default function Featured() {
  return (
    <Container>
      <div className="relative">
        <Headings heading={"Featured Brands"} />
        <div className="flex absolute top-5 right-0 font-bold text-2xl text-gray-500">
          <MdKeyboardArrowLeft />
          <MdKeyboardArrowRight />
        </div>
        {/* brands cards */}

        <div className="flex justify-between items-center w-full py-6">
          {/* card-1  */}
          <div className="bg-gray-100 p-2 rounded-lg flex flex-col items-center justify-between h-full w-[200px]">
            <div className="relative">
              <Image
                width={177}
                height={125}
                src={"/images/brand-cover/2.png"}
                alt="brand-cover"
                className="rounded-lg border-2 border-gray-500"
              />
              <div className="bg-gray-300 w-[64px] h-[64px] flex justify-center items-center rounded-full outline-4 outline-gray-300 outline-double absolute -bottom-1/3 left-14">
                <Image
                  width={100}
                  height={100}
                  src={"/images/brand-logo/2.png"}
                  alt="brand-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#57729B] pt-14 pb-6 font-semibold">
              <FaMedal />
              Platinum{" "}
            </div>
            <div className="pb-4">
              <button
                className="bg-[#DAF0F9] text-lg px-6 py-1 font-semibold rounded-full">
                view shop
              </button>
            </div>
          </div>

          {/* card-2  */}
          <div className="bg-gray-100 p-2 rounded-lg flex flex-col items-center justify-between h-full w-[200px]">
            <div className="relative">
              <Image
                width={177}
                height={125}
                src={"/images/brand-cover/3.png"}
                alt="brand-cover"
                className="rounded-lg border-2 border-gray-500 w-44 h-32"
              />
              <div className="bg-gray-300 w-[64px] h-[64px] flex justify-center items-center rounded-full outline-4 outline-gray-300 outline-double absolute -bottom-1/3 left-14">
                <Image
                  width={100}
                  height={100}
                  src={"/images/brand-logo/3.png"}
                  alt="brand-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#E8A82C] pt-14 pb-6 font-semibold">
              <FaMedal />
              Gold{" "}
            </div>
            <div className="pb-4">
              <button
                className="bg-[#DAF0F9] text-lg px-6 py-1 font-semibold rounded-full">
                view shop
              </button>
            </div>
          </div>

          {/* card-3  */}
          <div className="bg-gray-100 p-2 rounded-lg flex flex-col items-center justify-between h-full w-[200px]">
            <div className="relative">
              
                <Image
                width={177}
                height={125}
                src={"/images/brand-cover/4.png"}
                alt="brand-cover"
                className="rounded-lg border-2 border-gray-500 w-44 h-32"
              />
              
              <div className="bg-gray-300 w-[64px] h-[64px] flex justify-center items-center rounded-full outline-4 outline-gray-300 outline-double absolute -bottom-1/3 left-14">
                <Image
                  width={100}
                  height={100}
                  src={"/images/brand-logo/4.png"}
                  alt="brand-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#57729B] pt-14 pb-6 font-semibold">
              <FaMedal />
              Platinum{" "}
            </div>
            <div className="pb-4">
              <button
                className="bg-[#DAF0F9] text-lg px-6 py-1 font-semibold rounded-full">
                view shop
              </button>
            </div>
          </div>

          {/* card-4  */}
          <div className="bg-gray-100 p-2 rounded-lg flex flex-col items-center justify-between h-full w-[200px]">
            <div className="relative">
              <Image
                width={177}
                height={125}
                src={"/images/brand-cover/5.png"}
                alt="brand-cover"
                className="rounded-lg border-2 border-gray-500 w-44 h-32"
              />
              <div className="bg-gray-300 w-[64px] h-[64px] flex justify-center items-center rounded-full outline-4 outline-gray-300 outline-double absolute -bottom-1/3 left-14">
                <Image
                  width={100}
                  height={100}
                  src={"/images/brand-logo/5.png"}
                  alt="brand-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#57729B] pt-14 pb-6 font-semibold">
              <FaMedal />
              Platinum{" "}
            </div>
            <div className="pb-4">
              <button
                className="bg-[#DAF0F9] text-lg px-6 py-1 font-semibold rounded-full">
                view shop
              </button>
            </div>
          </div>

          {/* card-5  */}
          <div className="bg-gray-100 p-2 rounded-lg flex flex-col items-center justify-between h-full w-[200px]">
            <div className="relative">
              <Image
                width={177}
                height={125}
                src={"/images/brand-cover/1.png"}
                alt="brand-cover"
                className="rounded-lg border-2 border-gray-500"
              />
              <div className="bg-gray-300 w-[64px] h-[64px] flex justify-center items-center rounded-full outline-4 outline-gray-300 outline-double absolute -bottom-1/3 left-14">
                <Image
                  width={100}
                  height={100}
                  src={"/images/brand-logo/1.png"}
                  alt="brand-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#868E9B] pt-14 pb-6 font-semibold">
              <FaMedal />
              Silver{" "}
            </div>
            <div className="pb-4">
              <button
                className="bg-[#DAF0F9] text-lg px-6 py-1 font-semibold rounded-full">
                view shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
