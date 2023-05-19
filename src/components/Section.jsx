import React  from "react";
import Provide from "./pages/Provide";
import BestSeller from "./pages/BestSeller";
import OurLatest from "./pages/OurLatest";
import Newcomer from "./pages/Newcomer";
import ClientsSay from "./pages/ClientsSay";
import PayDetails from "./pages/PayDetails";

export default function Section() {
  return (
    <section className="w-full">
      <Provide />
      <BestSeller />
      <OurLatest />
      <Newcomer />
      <ClientsSay/>
      <PayDetails/>
    </section>
  );
}
