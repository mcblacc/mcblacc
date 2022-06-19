import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";

import Header from "../snippets/Header";
import Loader from "../snippets/Loader";

export default function Pricing() {
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
        <section>
          <Header />
        </section>
        <section>
          About
        </section>
      </div>
    </div>
  );
}