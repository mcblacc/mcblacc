import React from "react";

import Header from "../snippets/Header";
import Jumbo from "../snippets/Jumbo";
import Aref from "../snippets/Aref";
import Footer from "../snippets/Footer";
import Loader from "../snippets/Loader";
import { Controller, Scene } from "scrollmagic";
import Magic from "./Magic";

export default function Home() {
  return (
    <div>
      {/* <Loader /> */}
      <div id="rel">
        <section>
          <Header />
        </section>
        <section>
          <Jumbo />
        </section>
        <section>
          <Aref />
        </section>
        <section>
          <Magic />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}