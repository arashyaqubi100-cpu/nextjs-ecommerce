"use client";
import { redirect } from 'next/navigation';
import { ReactElement } from "react";

const Home = (): ReactElement => {
  redirect("/marketing")
}

export default Home;