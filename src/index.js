import _ from "lodash";
import "./style.css";
import printMe from "./print";

const Message = (text) => {
    return `${text}`
}

let learning_dom = document.querySelector("#learning");
learning_dom.innerHTML = `<h1>${Message("Hello World")}</h1>`

printMe();