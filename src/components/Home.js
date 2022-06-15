import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";

import Header from "../snippets/Header";
import Jumbo from "../snippets/Jumbo";

export default function Home() {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  return (
      <section className="scroll" ref={scrollRef}>
        <Header />
        <Jumbo />
      </section>
  );
}