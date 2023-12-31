"use client";

import React from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

export default function Home() {
  return (
    <div
      className="container
      flex
      w-screen
      h-screen
    "
    >
      <div
        className="window
        flex
        flex-col
        text-center
        items-center
        justify-center
        bg-gradient-to-r from-cyan-300 to-blue-300
        w-80
        h-96
        m-auto
        rounded-lg
        shadow-2xl
        shadow-indigo-500/50
      "
      >
        <div className="name">Name</div>
        <div className="pic">PICTURE</div>
        <div className="title">title</div>
        <div className="review">review</div>
        <div
          className="btn-container
          flex-1
          justify-items-center
          align-items-center
          mt-auto
        "
        >
          <CaretLeft
            color="indigo"
            size={32}
            className=" m-5
          "
          />
          <CaretRight
            color="indigo"
            size={32}
            className="m-5
          "
          />
        </div>
      </div>
    </div>
  );
}
