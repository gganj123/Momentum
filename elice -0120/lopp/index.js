import App from "./App";
import "./index.css";

const run = () => {
  window.addEventListener("DOMContentLoaded", () => {
    App();
  });

  // 올라가기(up)와 내려가기(down) 메서드를 제공하는 객체 ladder가 있습니다.
  App.up();
  App.up();
  App.down();
  App.up();
  App.down();
  App.showStep();
};

run();
