import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const Products = () => {

  return (
    <Layout>
      <Link className="bg-green-700 text-white rounded-md py-1 px-2" href="/products/new">Add new product</Link>
    </Layout>
  );
};
export default Products;
