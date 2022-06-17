import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";

import Header from "../snippets/Header";
import Footer from "../snippets/Footer";
import Loader from "../snippets/Loader";

export default function Services() {
  const scrollRef = React.createRef();

  useEffect(() => {
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <div>
      <Loader />
      <div id="rel">
        <section className="scroll" ref={scrollRef}>
          <Header />
        </section>
        <section className="scroll" ref={scrollRef}>
          Services
        </section>
      </div>
    </div>
  );
}