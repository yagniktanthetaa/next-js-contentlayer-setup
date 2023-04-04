import React from "react";
import { allGuides } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";

export const getContent = async ({ slug }) => {
  const content = allGuides?.find((guide) => guide?.slug === slug);
  return content;
};

const Game = async ({ params }) => {
  const content = await getContent({ slug: `games/${params?.game}` });
  const { header } = content?.data;

  if (!content) return notFound();

  return (
    <>
      <div className="text-center text-5xl font-bold font-mono my-10">
        <h1>{header?.title}</h1>
        <h2>{header?.subtitle}</h2>
      </div>
    </>
  );
};

export default Game;
