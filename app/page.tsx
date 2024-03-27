"use client";
import React from "react";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>Hello, <b>{session?.user?.name}</b></h2>
        <div className="flex gap-1 text-black bg-gray-300 rounded-lg">
          <img src={session?.user?.image} alt="admin image" className="w-10 h-10 rounded-lg"/>
          <span className="p-2">
          {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
