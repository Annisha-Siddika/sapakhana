import React from "react";
import Container from "../Container";
import Headings from "../Headings";
import Image from "next/image";

export default function Categories() {
  return (
    <Container>
      <div>
        <Headings heading={"Product Categories"} />
        {/* product categories cards  */}
        <div className="flex justify-between items-center gap-4">
            {/* card-1  */}
            <div className="flex flex-col items-center">
            
              <Image
                className="w-52 h-52 2xl:w-72 2xl:h-72  rounded-full shadow-lg"
                width={268}
                height={268}
                src={"/images/brand-cover/1.png"}
                alt="product category"
              />
            <h1 className="text-xl font-bold py-4">Wearable Wonders</h1>
            </div>
          

            {/* card-2  */}
            <div className="flex flex-col items-center">
            
              <Image
                className="w-52 h-52 2xl:w-72 2xl:h-72 rounded-full"
                width={268}
                height={268}
                src={"/images/brand-cover/2.png"}
                alt="product category"
              />
            <h1 className="text-xl font-bold py-4">Office Essentials</h1>
            </div>
          

            {/* card-3  */}
            <div className="flex flex-col items-center">
            
              <Image
                className="w-52 h-52 2xl:w-72 2xl:h-72 rounded-full"
                width={268}
                height={268}
                src={"/images/brand-cover/3.png"}
                alt="product category"
              />
            <h1 className="text-xl font-bold py-4">Décor Delights</h1>
            </div>
          

            {/* card-4  */}
            <div className="flex flex-col items-center">
            
              <Image
                className="w-52 h-52 2xl:w-72 2xl:h-72 rounded-full"
                width={268}
                height={268}
                src={"/images/brand-cover/4.png"}
                alt="product category"
              />
            <h1 className="text-xl font-bold py-4">Drinkware Designs</h1>
            </div>
          

            {/* card-5  */}
          <div className="flex flex-col items-center">
            
              <Image
                className="w-52 h-52 2xl:w-72 2xl:h-72 rounded-full"
                width={268}
                height={268}
                src={"/images/brand-cover/5.png"}
                alt="product category"
              />
            <h1 className="text-xl font-bold py-4">Tech Accessories</h1>
            </div>
          
        </div>
      </div>
    </Container>
  );
}
