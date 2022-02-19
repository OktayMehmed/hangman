import React from "react";
import './styles.css'

const Gallow = () => {
  return (
    <>
      <article className="gallow-container">
        {false && <img src="/images/one.jpg" />}
        {false && <img src="/images/two.jpg" />}
        {false && <img src="/images/third.jpg" />}
        {false && <img src="/images/four.jpg" />}
        {false && <img src="/images/five.jpg" />}
        {false && <img src="/images/six.jpg" />}
        {false && <img src="/images/seven.jpg" />}
        {false && <img src="/images/eight.jpg" />}
        {false && <img src="/images/nine.jpg" />}
        {true && <img src="/images/ten.jpg" />}
      </article>
    </>
  );
};

export default Gallow;
