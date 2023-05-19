/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React, { useState } from "react";
import Select from "react-select";
import Image from "next/image";

export default function Home() {
  const options = [{ value: "balkon", label: "Balkon" }];
  const [plant, setPlant] = useState(null);
  const interval = 30;
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main className="w-full h-screen flex flex-col justify-center items-center bg-green-100">
        <div className="md:w-2/6 w-4/6 h-5/6 flex flex-col items-center justify-start rounded-md border border-black">
          <div
            id="header"
            className="flex items-end justify-center w-full h-1/6 my-8"
          >
            <div>
              <Select
                className="w-48 rounded-md border border-black "
                options={options}
                placeholder="Select your plant"
                value="balkon"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly w-full h-2/6 my-24">
            <p className="text-2xl font-bold mb-4">Your Plant's Latest Stage</p>
            <div>
              <Image
                src="/hp.jpeg"
                width={250}
                height={250}
                alt="Latest picture of the plant"
              />
            </div>
            <div className="flex flex-row items-center justify-center w-full my-6">
              <p className="font-bold text-xl mx-6">Ph: 5.2</p>
              <p className="font-bold text-xl mx-6">EC: 2.6</p>
            </div>
            <div>
              <p className="font-bold text-xl">{`Snapshot interval ${interval} minutes`}</p>
            </div>
            <div>
              <p className="font-bold text-xl">
                Plants have no NPK malnutrition detected
              </p>
            </div>
          </div>
          <div className="w-full h-3/6 flex items-center justify-evenly flex-col"></div>
        </div>
      </main>
    </>
  );
}
