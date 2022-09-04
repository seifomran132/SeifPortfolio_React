import React, { useState } from "react";
import { TESTINOMIALS_DATA } from "./TESTINOMIALSDATA";
import "../../style/css/testinomials.css";

function Testinomials(props) {
  const testinomialItems = TESTINOMIALS_DATA.map((t, index) => (
    <div className="testinomial active" data-index={index + 1} key={index}>
      <blockquote>{t.message}</blockquote>
      <div className="customer">
        {t.name}, {t.project}
      </div>
    </div>
  ));

  let [testinomialItem, setTestinomialItem] = useState(testinomialItems[0]);
  let [counter, setCounter] = useState(0);

  function changeTestinomialHandler(dir) {
    if (dir === "inc") {
      setCounter((counter = counter + 1));
      let newIndex = counter % testinomialItems.length;
      setTestinomialItem(testinomialItems[newIndex]);
    }
    if (dir === "dec") {
      setCounter((counter = (counter - 1) + testinomialItems.length));
      let newIndex = counter % testinomialItems.length;
      setTestinomialItem(testinomialItems[newIndex]);
    }
  }

  return (
    <section id="testinomials">
      <div className="container">
        <div className="section-heading">
          <h2>Testinomials</h2>
        </div>

        <div className="testinomials-container">
          <div
            id="left-arrow"
            onClick={() => {
              changeTestinomialHandler("dec");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </div>

          <div className="testinomials-wrapper">{testinomialItem}</div>

          <div
            id="right-arrow"
            onClick={() => {
              changeTestinomialHandler("inc");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              className="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testinomials;
