// import hiragana from "../mock_data/hiragana";
// import selectRandomItemsFromObject from "./select_alphabets";

// const lang = "hiragana";

// const quiz = selectRandomItemsFromObject(hiragana, 10);

// export default quiz;

import selectRandomItemsFromObject from "./select_alphabets";

const quiz = (language) => {
  let langData;

  switch (language.toLowerCase()) {
    case "hiragana":
      langData = require("../mock_data/hiragana").default;
      break;
    case "katakana":
      langData = require("../mock_data/katakana").default;
      break;
    case "hindi":
      langData = require("../mock_data/hindi").default;
      break;

    default:
      langData = {};
  }

  return selectRandomItemsFromObject(langData, 10);
};

export default quiz;
