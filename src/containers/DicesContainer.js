import React from "react";
import Dices from "../components/Dices";

const DicesContainer = () => {
  const rollDice=()=> {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
  }

  const toggleClasses=(die)=> {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  const getRandomNumber=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <Dices />
      <button type="button" id="roll-button" onClick={rollDice}>
        Roll Dice
      </button>
    </>
  );
};

export default DicesContainer;
