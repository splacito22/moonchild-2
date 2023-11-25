import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-form">
        <form>
          <ul>
            <li>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="user-name" />
            </li>
            <li>
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="user-email" />
            </li>
          </ul>
          <div className="text-center">
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
