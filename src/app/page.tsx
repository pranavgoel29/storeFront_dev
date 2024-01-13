"use client";

import { SubmitCard } from "@/components/submit-card";
import ProductCardList from "../../components/CardsList/ProductCardList";
import { Navbars } from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbars />
      <main>
       
        <SubmitCard />
        <ProductCardList />
      </main>
    </>
  );
}
