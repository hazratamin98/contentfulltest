import React, { useState } from "react";
import client from "@/contents";
import Image from "next/image";

export async function getStaticProps() {
  // Fetch content from Contentful
  const entries = await client.getEntries({
    content_type: "blog",
    tag: "E-Unicycles",
  });

  return {
    props: {
      content: entries.items.map((item: any) => item.fields),
    },
  };
}

const ContentPage = ({ content }: any) => {
  console.log(content);

  const [filteredProducts, setFilteredProducts] = useState(content);

  // const handleProductTypeFilter = (productType: string) => {
  //   if (productType === "all") {
  //     setFilteredProducts(content);
  //   } else {
  //     const filtered = content.filter(
  //       (product: any) => product.tag.fields.title === productType
  //     );
  //     setFilteredProducts(filtered);
  //   }
  // };

  return (
    <div>
      {/* <div>
        <button onClick={() => handleProductTypeFilter("all")}>All</button>{" "}
        <br />
        <button onClick={() => handleProductTypeFilter("E-Unicycles")}>
          E-Unicycles
        </button>{" "}
        <br />
        <button onClick={() => handleProductTypeFilter("E-bikes")}>
          E-bikes
        </button>
      </div> */}
      {content?.map((item: any, index: any) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <h1>{item.publishedDate}</h1>
          {/* Other fields */}
          <h1>{item.tag.fields.title}</h1>
          {/* Rest of the fields */}
          <Image
            src={item.author.map(
              (author: any) => author.fields.authorImage.fields.file.url
            )}
            alt="user profile picture"
            width={300}
            height={300}
          />
          a{/* Render other content fields here */}
        </div>
      ))}
    </div>
  );
};

export default ContentPage;
