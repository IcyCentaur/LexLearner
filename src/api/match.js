import hiragana from "../mock_data/hiragana";
import selectRandomItemsFromObject from "./select_alphabets";

const hi = hiragana;

const match = (quiz, display_character, currentIndex) => {
  const inp = document.getElementById("alphabet").value;
  if (quiz[display_character[currentIndex]] === inp) {
    return true;
  } else return false;
};

export default match;
