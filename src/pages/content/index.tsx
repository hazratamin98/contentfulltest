import React from "react";
import client from "@/contents";

export async function getStaticProps() {
  // Fetch content from Contentful
  const entries = await client.getEntries({ content_type: "Blog" });

  return {
    props: {
      content: entries,
    },
  };
}

const ContentPage = ({ content }: any) => {
  console.log(content);
  return (
    <></>
    // <div>
    //   {content.map((item: any, index: any) => (
    //     <div key={index}>
    //       <h1>{item.title}</h1>
    //       {/* Render other content fields here */}
    //     </div>
    //   ))}
    // </div>
  );
};

export default ContentPage;
