import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";

import Header from "../snippets/Header";
import Jumbo from "../snippets/Jumbo";
import Aref from "../snippets/Aref";
import Footer from "../snippets/Footer";
import Loader from "../snippets/Loader";
import Magic from "../snippets/Magic";
import Faq from "../snippets/Faq";
import Jref from "../snippets/Jref";

export default function Home() {
  const scrollRef = React.createRef();

  useEffect(() => {
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 3
    });
  });

  return (
    <div class="o-scroll" id="js-scroll" ref={scrollRef}>
      <Loader />
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
          <Jref />
        </section>
        <section>
          <Faq />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}