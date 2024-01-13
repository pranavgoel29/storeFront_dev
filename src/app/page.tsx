"use client";

import { SubmitCard } from "@/components/submit-card";
import ProductCardList from "../../components/CardsList/ProductCardList";
import { Navbars } from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbars />
      <main>
        <h1 className="text-3xl font-bold underline bg-red-300">
          Hello world!
        </h1>
        <SubmitCard />
        <ProductCardList />
      </main>
    </>
  );
}
