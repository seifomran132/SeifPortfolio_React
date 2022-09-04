import React from "react";

function AboutText(props) {
  return (
    <div className="col-xs-12 col-md-6 right">
      <h3>Seif Omran</h3>
      <p>
        Computer science student and work as freelancer front end developer and
        tech enthusiast, I creared tens of websiet for many companies around the
        world and sold hundreds of services and templates on freelancing
        websites
      </p>

      <ul className="info">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#667db6"
            className="bi bi-compass-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7
                            0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538
                            7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828
                            2.828-4.95z"
            />
          </svg>
          <span> Obour City - Cairo - Egypt </span>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#667db6"
            className="bi bi-book"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
          </svg>
          <span>Faculty of Computer Science - Ain Shams University</span>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#667db6"
            className="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95
                                1.555L8 8.414.05 3.555zM0
                                4.697v7.104l5.803-3.558L0 4.697zM6.761
                                8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0
                                1.808-1.144l-6.57-4.027L8
                                9.586l-1.239-.757zm3.436-.586L16
                                11.801V4.697l-5.803 3.546z"
            />
          </svg>
          <span>
            <a href="mailto:me@seif.work">me@seif.work</a>
          </span>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#667db6"
            className="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.654 1.328a.678.678 0 0
                                  0-1.015-.063L1.605 2.3c-.483.484-.661
                                  1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608
                                  17.569 17.569 0 0 0 6.608 4.168c.601.211
                                  1.286.033 1.77-.45l1.034-1.034a.678.678 0 0
                                  0-.063-1.015l-2.307-1.794a.678.678 0 0
                                  0-.58-.122l-2.19.547a1.745 1.745 0 0
                                  1-1.657-.459L5.482 8.062a1.745 1.745 0 0
                                  1-.46-1.657l.548-2.19a.678.678 0 0
                                  0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745
                                  0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315
                                  1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457
                                  2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745
                                  1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905
                                  1.87.163 2.611l-1.034 1.034c-.74.74-1.846
                                  1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42
                                  18.634 18.634 0 0
                                  1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          <span>
            <a href="tel:+201015796783">+201015796783</a>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default AboutText;
