import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/fontawesome-free-solid";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

export default function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">
          <FontAwesomeIcon icon={Icons.faQuoteLeft} /> You can’t fall if you
          don’t climb. But there’s no joy in living your whole life on the
          ground.
        </div>
        <div className="bottom">
          <div id="author">-Unknown</div>
          <a id="tweet-quote" href="#">
            <FontAwesomeIcon
              id="twitter"
              color="white"
              size="2x"
              icon={["fab", "twitter"]}
            />
          </a>
          <button id="new-quote">new quote</button>
        </div>
        <p id="credit">made with &#10084; by sabilimaulana</p>
      </div>
    </div>
  );
}
