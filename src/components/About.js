import React, { Component } from "react";
import profile from "../images/profile.jpg";
import coverImg from "../images/cover-img.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      scrolled: false,
      following: false,
    };
  }
  handleClick = (e) => {
    this.setState((state) => ({
      following: !state.following,
    }));
    // this.setState({ following: true });
    if (!this.state.following) {
      e.target.style.background = "#1da1f2";
      e.target.style.color = "#fff";
      e.target.style.width = "110px";
      e.target.innerText = "Following";
    } else {
      e.target.style.background = "none";
      e.target.style.color = "#1da1f2";
      e.target.style.width = "100px";
      e.target.innerText = "Follow";
    }
  };
  handleScroll = () => {
    let offset = window.pageYOffset;
    let { height } = this.myRef.current.getBoundingClientRect();
    let myTop = this.myRef.current.offsetTop;
    let myBottom = myTop + height;

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
        <section className="section" id="about" ref={this.myRef}>
          <div
            className={
              this.state.scrolled
                ? "section-title title-sticky"
                : "section-title"
            }>
            <h2>About</h2>
          </div>
          <div className="cover-photo">
            <div className="cov-div">
              <img src={coverImg} alt="jude" className="cover-photo-img" />
            </div>
            <div className="about-img">
              <img src={profile} alt="jude" />
            </div>
          </div>
          <div className="about-div-clear">
            <div className="dm-container">
              <a
                href="https://twitter.com/messages/compose?recipient_id=1062460769005199362"
                rel="noreferrer"
                target="_blank">
                <svg viewBox="0 0 24 24" className="dm-svg">
                  <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
                </svg>
              </a>
            </div>
            <h4 className="follow-btn" onClick={this.handleClick}>
              Follow
            </h4>
          </div>
          <div className="about-user">
            <h2>
              Jude{" "}
              <span>
                <svg viewBox="0 0 24 24" className="verified-svg">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                </svg>
              </span>
            </h2>
            <p>@No_lose_focus</p>
          </div>
          <div className="about-desc">
            <p>
              Hi, My name is <b>Jude Nnadi</b>, I'm a Front-End Developer en
              route to Full-Stack Web Developement😉.
              <br />
              My love for tech brought me this far, and I'm open for mentorship
              and growth. I have great passion for learning and creating dynamic
              user experiences and also bringing ideas to life.
            </p>
            <div className="about-svg">
              <svg viewBox="0 0 24 24">
                <path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path>
                <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path>
              </svg>
              <p>Nigeria</p>
            </div>
            <div className="about-svg">
              <svg viewBox="0 0 24 24">
                <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                <circle cx="7.032" cy="8.75" r="1.285"></circle>
                <circle cx="7.032" cy="13.156" r="1.285"></circle>
                <circle cx="16.968" cy="8.75" r="1.285"></circle>
                <circle cx="16.968" cy="13.156" r="1.285"></circle>
                <circle cx="12" cy="8.75" r="1.285"></circle>
                <circle cx="12" cy="13.156" r="1.285"></circle>
                <circle cx="7.032" cy="17.486" r="1.285"></circle>
                <circle cx="12" cy="17.486" r="1.285"></circle>
              </svg>
              <p>Joined the Dev Community in 2020</p>
            </div>
            <p className="followers-p">
              <span className="followers">293</span> Following
              <span className="followers f1">500K</span> Followers
            </p>
          </div>
          <div className="tweets-div">
            <ul className="tweets">
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default About;
