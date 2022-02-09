/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuse_generator = document.getElementById("excuse");
  function onLoad() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let whoind = Math.floor(Math.random() * who.length);
    let actionind = Math.floor(Math.random() * action.length);
    let whatind = Math.floor(Math.random() * what.length);
    let whenind = Math.floor(Math.random() * when.length);

    return (
      who[whoind] +
      " " +
      action[actionind] +
      " " +
      what[whatind] +
      " " +
      when[whenind]
    );
  }
  excuse_generator.innerHTML = onLoad();
};
