import * as React from "react";
import "./accordion.css";
import { useState } from "react";
import { faqData } from "./data";

function Accordion({}) {
  // const [faq, setFaq] = useState(false);
  const [selected, setSelected] = useState("");

  const faqList = faqData.map((e, index) => {
    return (
      <div
        className={`accordion-container ${
          selected === e.title ? "active" : ""
        }`}
        onClick={() => {
          if (selected === e.title) {
            return setSelected("");
          }
          setSelected(e.title);
        }}
      >
        <div className="accordion-grid">
          <div className="accordion-txt">
            <p>{e.title}</p>
          </div>
          <div className="accordion-svg">
            <Arrow />
          </div>
        </div>

        <div className="hidden-box">
          <p>{e.answer}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="sec-4">
        <div className="sec-4-container">
          <div className="faq-txt">
            <h3 className=""> Frequently Asked Questions</h3>
          </div>
          <div className="accordion-grid-session">{faqList}</div>
        </div>
      </div>
    </>
  );
}

export const Arrow = (props) => (
  <svg
    className="svg-inline--fa fa-chevron-down"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="chevron-down"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    data-fa-i2svg=""
    width={"20px"}
    {...props}
  >
    <path
      fill="currentColor"
      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
    />
  </svg>
);

export default Accordion;
