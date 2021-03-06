import React from "react";
import { navigateTo } from "gatsby-link";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
            <h2>Get In Touch</h2>
            <p></p>
            <div className="row">
                <div className="8u 12u$(small)">
                    <form action="https://formspree.io/jonnyn@live.com" method="POST">
                        <div className="row uniform 50%">
                            <input type="hidden" name="_subject" value="Contact from Jonnyn.com" />
                            <div className="6u 12u$(xsmall)"><input type="text" name="name" placeholder="Name" /></div>
                            <div className="6u 12u$(xsmall)"><input type="email" name="_replyto" placeholder="Email" /></div>
                            <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4" ></textarea></div>
                            <div className="6u 12u$(xsmall)"><input type="submit" value="Send Message" /></div>
                        </div>
                    </form>
                </div>
                <div className="4u 12u$(small)">
                    <ul className="labeled-icons">
                        <li>
                            <h3 className="icon fa-home"><span className="label">Address</span></h3>
                            Coquitlam<br/>British Columbia, Canada<br />
                        </li>
                        <li>
                            <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                            <a href="mailto:jonnyn@live.com">jonnyn@live.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}