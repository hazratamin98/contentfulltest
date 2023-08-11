import Image from "next/image";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { type } from "os";

const inter = Inter({ subsets: ["latin"] });

const data = [
  {
    name: "jhn",
    titlle: "show something",
    type: "e-cycle",
  },

  {
    name: "ton",
    titlle: "show something",
    type: "b-cycle",
  },
  {
    name: "wan",
    titlle: "show something",
    type: "c-cycle",
  },
];

export default function Home() {
  const [filtered, setfilter] = useState(data);

  const handleProductTypeFilter = (productType: string) => {
    if (productType === "all") {
      setfilter(data);
    } else {
      const filteredData = data.filter((item) => item.type === productType);
      setfilter(filteredData);
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hello world</h1>

      <div>
        <button onClick={() => handleProductTypeFilter("all")}>All</button>{" "}
        <br />
        <button onClick={() => handleProductTypeFilter("b-cycle")}>
          b-cycle
        </button>{" "}
        <br />
        <button onClick={() => handleProductTypeFilter("c-cycle")}>
          c-cycle
        </button>
      </div>
      {filtered.map((item) => {
        return (
          <>
            <div className="py-8 px-8 bg-orange-200 m-4">
              <h1 className="font">{item.name}</h1>
              <h1>{item.titlle}</h1>
              <h1>{item.type}</h1>
            </div>
          </>
        );
      })}
    </main>
  );
}
