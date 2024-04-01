"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[80%] m-auto pt-14 ">
      <div className="grid grid-cols-3 grid-rows-6 gap-4">
        <div className="col-span-2 ">
          <h1 className="text-7xl font-bold italic">" Best of the week "</h1>
        </div>
        <div className="row-span-3 col-start-3 rounded-xl bg-slate-500">
          //Post#2
        </div>
        <div className="col-span-2 row-span-5 row-start-2 rounded-xl bg-slate-500">
          //Post#1
        </div>
        <div className="row-span-3 col-start-3 row-start-4 rounded-xl bg-slate-500">
          //Post#3
        </div>
      </div>
      <div className="h-[100vh] p-10">
        <h1 className="text-7xl font-bold text-center italic">
          end yu shaah ve bodjin
        </h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-5 gap-4 pb-[10%]">
        <div className="row-span-4 rounded-xl bg-slate-500"></div>
        <div className="col-start-1 row-start-5">
          <h1 className="text-7xl font-bold italic">Title</h1>
        </div>
        <div className="row-span-5 col-start-2 row-start-1 rounded-xl bg-slate-500 overflow-hidden">
          <div className="relative w-full h-full">
            <video
              src="/video1.mp4"
              type="video/mp4"
              className="absolute inset-0 w-full h-full rounded-xl object-cover"
              controlsList="nodownload"
              autoPlay
              muted
              loop
            ></video>
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold italic pointer-events-none">
              VIDEO HERE
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
