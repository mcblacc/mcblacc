import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";

import Header from "../snippets/Header";
import Jumbo from "../snippets/Jumbo";
import Aref from "../snippets/Aref";
import Footer from "../snippets/Footer";

export default function Home() {
  const scrollRef = React.createRef();

  useEffect(() => {
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <div>
      <section className="scroll" ref={scrollRef}>
        <Header />
      </section>
      <section className="scroll" ref={scrollRef}>
        <Jumbo />
      </section>
      <section>
        <Aref />
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}