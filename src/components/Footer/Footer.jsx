import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const company = "Dream Solutions";
  const socialMediaLinks = [
    { title: "Facebook", url: "https://www.facebook.com/mycompany" },
    { title: "Twitter", url: "https://www.twitter.com/mycompany" },
    { title: "Instagram", url: "https://www.instagram.com/mycompany" },
  ];

  return (
    <footer>
      <div className="mb-3 px-36 mt-10 bg-purple-950 text-white py-10 grid grid-cols-2 gap-36 ">
        <div className="footer-left ">
          <h2 className="text-3xl underline pb-5">{company}</h2>
          <p>We are a leading company customers.</p>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-right">
          <h2 className="text-3xl underline pb-5">Connect with us</h2>
          <ul className="social-media-links">
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className=" text-center pb-10">
          <p>
            &copy; {currentYear} {company}. All rights reserved. |{" "}
            <a href="/terms">Terms of Service</a> |{" "}
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
