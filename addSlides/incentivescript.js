// slides for sales
let flashSale = {
  slide1: {
    a: "ST. PATRICK'S DAY FLASH SALE – ",
    bold: "GLOW KIT 50% OFF",
    c: " – TODAY ONLY",
  },
  slide2: {
    a: "ENTER CODE ",
    "bold 1": "StPatty ",
    c: "at checkout for ",
    "bold 2": "50% OFF GLOW KITS",
  },
};

let easterSale = {
  slide1: {
    a: "EASTER SALE – ",
    "bold 1": "GLOW KIT 60% OFF",
    c: " – THIS WEEKEND ONLY",
  },
  slide2: {
    a: "ENTER CODE ",
    "bold 1": "QulEaster ",
    c: "at checkout for ",
    "bold 2": "60% OFF GLOW KITS",
  },
};

// function to add slides on specific day(s)
function sale(startMonth, startDay, messages, daysToRun = 1) {
  let now = new Date().getTime(); // convert to number so all dates are in the same format
  let start = new Date(
    new Date().getFullYear(),
    startMonth - 1,
    startDay
  ).getTime();
  let end = start + daysToRun * 86400000;

  if (now >= start && now <= end) {
    // if page is being viewed in the specified time range, add slides for sale
    for (let slide in messages) {
      // create new slide
      let sliderList = document.querySelector(".scrollingText");
      let newSlide = document.createElement("li");
      let saleText = document.createElement("p");
      for (let key in messages[slide]) {
        // add text to the slide by appending a span for each key onto the p
        if (key.split(" ").includes("bold")) {
          console.log(`key is bold`);
          // if the slide is bold, create a span with a selector that's bolded in the CSS
          let boldSpan = document.createElement("span");
          boldSpan.classList.add("boldSpan");
          boldSpan.textContent = messages[slide][key];
          saleText.appendChild(boldSpan);
        } else {
          //otherwise create a regular span and tack it on
          let regularSpan = document.createElement("span");
          regularSpan.textContent = messages[slide][key];
          saleText.appendChild(regularSpan);
        }
      }
      // append slide to slider
      sliderList.appendChild(newSlide);
      newSlide.appendChild(saleText);
    }
  }
}

sale(03, 17, stPattySale); // a one day default sale
sale(4, 2, easterSale, 3); // Easter weekend sale
