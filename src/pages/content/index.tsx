import React from "react";
import client from "@/contents";
import Image from "next/image";

export async function getStaticProps() {
  // Fetch content from Contentful
  const entries = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      content: entries.items.map((item: any) => item.fields),
    },
  };
}

const ContentPage = ({ content }: any) => {
  console.log(content);
  return (
    <div>
      {content?.map((item: any, index: any) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <h1>{item.isFeatured}</h1>
          <h1>{item.publishedData}</h1>
          <Image
            src={item.heroImage.fields.file}
            alt="user profile picture"
            width={300}
            height={300}
          />

          {/* Render other content fields here */}
        </div>
      ))}
    </div>
  );
};

export default ContentPage;
