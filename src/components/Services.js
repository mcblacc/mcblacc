import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";

import Header from "../snippets/Header";

export default function Services() {
  const scrollRef = React.createRef();

  useEffect(() => {
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  return (
    <div>
      <section className="scroll" ref={scrollRef}>
        <Header />
      </section>
      <section className="scroll" ref={scrollRef}>
        Services
      </section>
    </div>
  );
}