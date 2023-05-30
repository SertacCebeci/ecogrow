/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import getData from "@/firebase/firestore/getData";

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
    <div className="md:w-2/6 w-4/6 h-5/6 flex flex-col items-center justify-start rounded-md border border-black">
      <div
        id="header"
        className="flex items-end justify-center w-full h-1/6 my-8"
      ></div>

      <div className="flex flex-col items-center justify-evenly w-full h-2/6 my-24">
        <p className="text-2xl font-bold mb-4">Your Plant's Latest Stage</p>
        <div>
          <Image
            src={"data:image/gif;base64," + measurement["String Photo"]}
            width={400}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-row items-center justify-center w-full my-6">
          <p className="font-bold text-xl mx-6">Ec: {measurement.ph}</p>
          <p className="font-bold text-xl mx-6">pH: {measurement.Ec}</p>
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
  );
};

export default ProductDetails;
