import React, { Component } from "react";

// images
import html from "../images/html.svg";
import css from "../images/css.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import git from "../images/git.svg";
import github from "../images/github.svg";
import npm from "../images/npm.svg";
import typescript from "../images/typescript.svg";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    skills: [
      { id: 1, image: html, nick: "HTML", handle: "html5" },
      { id: 2, image: css, nick: "CSS", handle: "css3" },
      { id: 3, image: javascript, nick: "JAVASCRIPT", handle: "javascript" },
      { id: 4, image: react, nick: "REACT", handle: "reactjs" },
      { id: 5, image: git, nick: "GIT", handle: "git" },
      { id: 6, image: github, nick: "GITHUB", handle: "github" },
      { id: 7, image: npm, nick: "NPM", handle: "npm" },
      { id: 8, image: typescript, nick: "TYPESCRIPT", handle: "typescript" },
    ],
    scrolled: false,
  };
  handleScroll = () => {
    let offset = window.pageYOffset;
    let { height } = this.myRef.current.getBoundingClientRect();
    let myTop = this.myRef.current.offsetTop;
    let myBottom = myTop + height - 10;
    if (offset >= myTop && offset < myBottom) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <>
        <section className="section" id="skills" ref={this.myRef}>
          <div
            className={
              this.state.scrolled
                ? "section-title title-sticky"
                : "section-title"
            }>
            <h2>Skills</h2>
          </div>
          <div className="help-sticky">
            {this.state.skills.map((skill) => {
              const { id, image, nick, handle } = skill;
              return (
                <div className="skills tweet-grid" key={id}>
                  <div className="you-retweet">
                    <svg viewBox="0 0 24 24" className="retweet-svg twit-svg">
                      <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                    </svg>
                    <h5>You Retweeted</h5>
                  </div>
                  <div className="skills-img">
                    <img src={image} alt={handle} />
                  </div>
                  <div className="twit-handle">
                    <h4>{nick}</h4>
                    <p>@{handle}</p>
                    <p>
                      <span>.</span> Sep 2020
                    </p>
                    <svg viewBox="0 0 92 92" className="arrow-svg twit-svg">
                      <path d="M46,63c-1.1,0-2.1-0.4-2.9-1.2l-25-26c-1.5-1.6-1.5-4.1,0.1-5.7c1.6-1.5,4.1-1.5,5.7,0.1l22.1,23l22.1-23c1.5-1.6,4.1-1.6,5.7-0.1c1.6,1.5,1.6,4.1,0.1,5.7l-25,26C48.1,62.6,47.1,63,46,63z" />
                    </svg>
                  </div>
                  <div className="skills-b-img">
                    <img src={image} alt={handle} />
                  </div>
                  <div className="tweet-icons">
                    <ul>
                      <li>
                        <svg
                          viewBox="0 0 24 24"
                          className="comment-svg twit-svg">
                          <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                        </svg>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 24 24"
                          className="retweet-svg twit-svg">
                          <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                        </svg>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" className="like-svg twit-svg">
                          <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default Skills;
