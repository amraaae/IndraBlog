"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[100%] m-auto pt-20 ">
      <div className="w-[80%] mx-auto grid grid-cols-3 grid-rows-6 gap-4">
        <div className="col-span-2 ">
          <h1 className="text-7xl font-bold italic">
            &quot; Best of the week &quot;
          </h1>
        </div>
        <div className="row-span-3 col-start-3 rounded-xl bg-slate-500 relative overflow-hidden">
          <img
            src="/postmain.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 p-4">
            <p className="text-white border rounded-xl w-20  text-center">
              Travel
            </p>
          </div>
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-white text-xl">Get to your dream now</p>
          </div>
        </div>

        <div className="col-span-2 row-span-5 row-start-2 rounded-xl bg-slate-500 relative overflow-hidden">
          <img
            src="/people.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 left-0 p-4 text-white">
            <p className="text-white border rounded-xl w-20  text-center">
              Travel
            </p>
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <p>Bottom Left Text</p>
          </div>
        </div>

        <div className="row-span-3 col-start-3 row-start-4 rounded-xl bg-slate-500 relative overflow-hidden">
          <img
            src="/fashin.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 left-0 p-4">
            <p className="text-white border rounded-xl w-20  text-center">
              Fashion
            </p>
          </div>
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-white">Bottom Left Text</p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto py-14 ">
        <h1 className="text-6xl font-bold italic text-center py-10">
          Categories
        </h1>
        <div className="grid grid-cols-5 grid-rows-5 gap-4 w-[80%] mx-auto">
          <div className=" w-[160px] h-[80px] flex justify-center items-center transition duration-300 hover:-translate-y-1 hover:scale-110">
            <img
              src="/fashin.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
            <img src="or.svg" alt="" className="absolute mx-auto" width={100} />
          </div>
          <div className=" w-[160px] h-[80px] flex justify-center items-center transition duration-300 hover:-translate-y-1 hover:scale-110">
            <img
              src="/fashin.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
            <img
              src="arrow.svg"
              alt=""
              className="absolute mx-auto"
              width={60}
            />
          </div>
          <div className=" w-[160px] h-[80px] flex justify-center items-center transition duration-300 hover:-translate-y-1 hover:scale-110">
            <img
              src="/fashin.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
            <img
              src="blueod.svg"
              alt=""
              className="absolute mx-auto"
              width={60}
            />
          </div>
          <div className=" w-[160px] h-[80px] flex justify-center items-center transition duration-300 hover:-translate-y-1 hover:scale-110">
            <img
              src="/fashin.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
            <img
              src="bra.svg"
              alt=""
              className="absolute mx-auto"
              width={100}
            />
          </div>
          <div className=" w-[160px] h-[80px] flex justify-center items-center transition duration-300 hover:-translate-y-1 hover:scale-110">
            <img
              src="/fashin.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
            <img
              src="up.svg"
              alt=""
              className="absolute mx-auto mb-4"
              width={80}
            />
          </div>
        </div>
      </div>

      

      <div className="h-auto mb-24">
        <h1 className="text-5xl font-bold italic py-14 text-center">
          Recent Posts
        </h1>
        <div className="w-[80%] m-auto grid grid-cols-4 grid-rows-5 gap-4">
          <div className="row-span-3 bg-slate-500">
            <div>
              <img src="/fb.svg" alt="" />
            </div>
            <div className="p-4 ">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>
          <div className="row-span-2 bg-slate-500">2</div>
          <div className="row-span-3 bg-slate-500">
            <div>
              <img src="/fb.svg" alt="" />
            </div>
            <div className="p-4 ">
              <h1 className="">Title</h1>
              <p>Description</p>
            </div>
          </div>
          <div className="row-span-3 col-start-2 row-start-3 bg-slate-500">
            <div>
              <img src="/fb.svg" alt="" />
            </div>
            <div className="p-4 ">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>
          <div className="row-span-2 col-start-3 row-start-4 bg-slate-500"></div>
          <div className="row-span-2 col-start-1 row-start-4 bg-slate-500"></div>
          <div className="row-span-3 col-start-4 row-start-3 bg-slate-500">
            <div>
              <img src="/fb.svg" alt="" />
            </div>
            <div className="p-4 ">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>
          <div className="row-span-2 col-start-4 row-start-1 bg-slate-500"></div>
        </div>
      </div>

      <div className="bg-slate-950 w-full h-auto flex justify-center items-center mb-24">
        <div className="grid grid-cols-4 grid-rows-6 gap-4 w-[80%] mx-auto h-auto py-10">
          <div className="row-span-2 col-start-4 row-start-1">
            <img src="/people.jpg" alt="" />
          </div>
          <div className="row-span-2 col-start-4 row-start-3">
            <img src="/people.jpg" alt="" />
          </div>
          <div className="row-span-2 col-start-4 row-start-5">
            <img src="/people.jpg" alt="" />
          </div>
          <div className="col-span-3 row-span-4 col-start-1 row-start-2">
            <img src="/people.jpg" alt="" />
          </div>
          <div className="col-span-3 col-start-1 row-start-1">
            <h1 className="text-7xl font-bold italic text-white">Gallery</h1>
          </div>
          <div className="col-span-3 row-start-6">
            <h1 className="text-7xl font-bold italic text-white">
              Shot by ShottaFlow.
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto grid grid-cols-2 grid-rows-5 gap-4 pb-[10%]">
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
