import React, { Component } from "react";
import emailjs from "emailjs-com";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";
import facebook from "../images/facebook.svg";

class Contact extends Component {
  state = {};
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j1gxiky",
        "template_e5ykfxh",
        e.target,
        "user_jTnIleR6R1dMVS54yLgAv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  render() {
    return (
      <>
        <section className="section" id="contact">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="form-container">
            <h3>Send me an Email</h3>
            <form onSubmit={this.sendEmail}>
              <div className="form-g">
                <h3>Name</h3>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Jude Nnadi"
                  name="name"
                />
              </div>
              <div className="form-g">
                <h3>Email</h3>
                <input
                  type="email"
                  className="form-control"
                  placeholder="judeonnadi@gmail.com"
                  name="email"
                />
              </div>
              <div className="form-g">
                <h3>Message</h3>
                <textarea
                  type="text"
                  className="form-textarea"
                  placeholder="Message"
                  name="message"></textarea>
              </div>
              <div className="form-g">
                <button type="submit" className="contact-btn">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="sm-icons">
            <div className="twitter">
              <a
                href="https://web.facebook.com/profile.php?id=100007061388634"
                target="_blank"
                rel="noreferrer">
                <img src={facebook} alt="facebook" className="fb-img" />
              </a>
            </div>
            <div className="twitter">
              <a
                href="https://twitter.com/No_lose_focus"
                target="_blank"
                rel="noreferrer">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
            <div className="github">
              <a
                href="https://github.com/judennadi"
                target="_blank"
                rel="noreferrer">
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
          <div className="footer">
            <h4>2021 copyright all right reserved</h4>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
