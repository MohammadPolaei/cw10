import { Header } from "./component/header/header.js";
import { Hero } from "./component/hero/hero.js";
import { IntroCards } from "./component/intro-cards/intro-cards.js";
import "./style.css";

const app = document.getElementById("app");

app.append(Header(), Hero(), IntroCards());
