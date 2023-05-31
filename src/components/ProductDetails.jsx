/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import getData from "@/firebase/firestore/getData";

//            src={"data:image/gif;base64," + measurement["String Photo"]}

const ProductDetails = () => {
  const interval = 30;
  const [measurement, setMeasurement] = useState({});
  useEffect(() => {
    async function measurementQuery() {
      const mQuery = await getData("measurements", "mak");
      if (!mQuery?.result?._document) return false;
      const result = await mQuery.result.data();
      setMeasurement(result);
      return true;
    }

    measurementQuery();
  }, []);

  return (
    <div className="md:w-2/6 w-4/6 h-5/6 flex flex-col items-center justify-start rounded-md">
      <div
        id="header"
        className="flex items-end justify-center w-full h-1/6 my-8"
      ></div>

      <div className="flex flex-col items-center justify-evenly w-full h-2/6 my-24">
        <p className="text-xl md:text-2xl font-bold mb-4">
          Your Plant's Latest Stage
        </p>
        <div className="m-4">
          <Image
            src="/taken.jpeg"
            width={400}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col  items-center justify-around my-6 w-9/12">
          <div>
            <p className="text-xl my-1">
              <span className="font-bold text-green-900">
                {measurement.name}
              </span>
            </p>
          </div>
          <div className="flex flex-row  items-center justify-around my-6 w-full">
            <p className="text-xl my-1">
              <span className="font-bold ">Ec: </span>
              <span className="font-bold text-green-900">
                {measurement.Ec} ppm
              </span>
            </p>
            <p className="text-xl my-1">
              <span className="font-bold">pH: </span>
              <span className="font-bold text-green-900">{measurement.ph}</span>
            </p>
            <p className="text-xl my-1">
              <span className="font-bold">Water Height: </span>
              <span className="font-bold text-green-900">
                {1023 - measurement.height}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold md:text-xl text-center">{`Snapshot interval ${interval} minutes`}</p>
        </div>
        <div>
          <p className="font-bold md:text-xl text-normal text-center text-green-800">
            Plants have no NPK malnutrition detected
          </p>
        </div>
      </div>
      <div className="w-full h-3/6 flex items-center justify-evenly flex-col"></div>
    </div>
  );
};

export default ProductDetails;
