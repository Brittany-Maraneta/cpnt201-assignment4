import "/styles/style.css";
import javascriptLogo from "/images/javascript.svg";
import viteLogo from "/images/vite.svg";
import { setupCounter } from "./counter.js";
import { currentTime } from "./day.js";
import { difference } from "./diff.js";

// import Carousel from "@zag-js/carousel";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>

    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>

    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>

    <p id="currentTime"></p>
    <p class>Start Date: 2023-09-23 <span> - Today's Date: 2023-10-30</span><p>
    <p id="difference"></p>
    </div>

   

   
 

`;

setupCounter(document.querySelector("#counter"));
currentTime(document.querySelector("#currentTime"));
difference(document.querySelector("#difference"));
