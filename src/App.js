import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/fontawesome-free-solid";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

library.add(fab);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: "",
      quoteList: [
        {
          quote:
            "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
          author: "Unknown"
        },
        {
          quote:
            "Life isn’t about getting and having, it’s about giving and being.",
          author: "Kevin Kruse"
        },
        {
          quote:
            "Your time is limited, so don’t waste it living someone else’s life.",
          author: "Steve Jobs"
        },
        {
          quote: "Dream big and dare to fail.",
          author: "Norman Vaughan"
        },
        {
          quote:
            "Whether you think you can or you think you can’t, you’re right.",
          author: "Henry Ford"
        },
        {
          quote: "Change your thoughts and you change your world.",
          author: "Norman Vincent Peale"
        },
        {
          quote: "An unexamined life is not worth living.",
          author: "Socrates"
        },
        {
          quote: "It is never too late to be what you might have been.",
          author: "George Eliot"
        },
        {
          quote:
            "The most common way people give up their power is by thinking they don’t have any.",
          author: "Alice Walker"
        },
        {
          quote: "Life is 10% what happens to me and 90% of how I react to it.",
          author: "Charles Swindoll"
        },
        {
          quote: "Et dah.",
          author: "Sofyan"
        }
      ]
    };

    this.handleQuote = this.handleQuote.bind(this);
  }

  handleQuote() {
    let randomNumber = Math.floor(Math.random() * 11);
    this.setState((state) => {
      return {
        quote: state.quoteList[randomNumber]["quote"],
        author: state.quoteList[randomNumber]["author"]
      };
    });
  }

  componentWillMount() {
    let randomNumber = Math.floor(Math.random() * 10);
    this.setState((state) => {
      return {
        quote: state.quoteList[randomNumber]["quote"],
        author: state.quoteList[randomNumber]["author"]
      };
    });
  }

  render() {
    const linkTweet =
      "https://twitter.com/intent/tweet?hashtags=quotes&related=lala&text=" +
      this.state.quote;
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text">
            <FontAwesomeIcon icon={Icons.faQuoteLeft} /> {this.state.quote}
          </div>
          <div className="bottom">
            <div id="author">- {this.state.author}</div>
            <a id="tweet-quote" target="_blank" href={linkTweet}>
              <FontAwesomeIcon
                id="twitter"
                color="white"
                size="2x"
                icon={["fab", "twitter"]}
              />
            </a>
            <button onClick={this.handleQuote} id="new-quote">
              new quote
            </button>
          </div>
          <p id="credit">made with &#10084; by sabilimaulana</p>
        </div>
      </div>
    );
  }
}

export default App;
