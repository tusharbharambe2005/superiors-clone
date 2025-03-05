import React, { useState } from "react";
import "./static/Hero.css";
import Video from "../assets/video.mp4";
import logo1 from "../assets/Logo-1.png";
import logo2 from "../assets/Logo-2.png";
import logo3 from "../assets/Logo-3.png";
import logo4 from "../assets/Logo-4.png";
import placeholder from "../assets/placeholder.png";
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const faqs = [
  'How do your services ensure a strong brand identity?',
  'What makes your advertising solutions effective?',
  'How does financial analysis benefit my business?',
  'Can you customize your services for my specific industry?',
  'How do you measure the success of your campaigns?',
  'Why should I choose your company over others?',
  'How do you stay ahead of marketing trends?',
  'How do you handle client communication throughout a project?'
];

const Hero = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <button className="tag-btn">New product release →</button>
          <h1>
            Design future of <br />
            <span>your</span> business
          </h1>
          <p>
            We craft innovative solutions to shape your brand's future, blending
            creativity, strategy, and technology to drive long-term success.
          </p>
          <div className="buttons">
            <button className="btn primary-btn">Get Started</button>
            <button className="btn secondary-btn">Learn More</button>
          </div>
          <p className="rating">★★★★★ 200+ clients</p>
        </div>

        <div className="video">
          <video src={Video} controls muted playsInline alt="Video Preview" />
        </div>
      </section>

      {/* Section Footer Logos */}
      <div className="section-footer-logos">
        <span><img src={logo1} alt="logo1" /></span>
        <span><img src={logo2} alt="logo2" /></span>
        <span><img src={logo3} alt="logo3" /></span>
        <span><img src={logo4} alt="logo4" /></span>
        <span><img src={logo1} alt="logo1" /></span>
        <span><img src={logo2} alt="logo2" /></span>
      </div>

      {/* Tools Section */}
      <div className="tools-section">
        <h6>EVERYTHING YOU NEED</h6>
        <div className="h1business">
          <h1>The most powerful tools for </h1>
          <h1 className="yourbusiness">your business</h1>
        </div>
        <div className="tools-container">
          {/* Analytics */}
          <div className="tool-box">
            <div className="icon">
              <img src="/analytics-icon.png" alt="Analytics" />
            </div>
            <h3>Analytics</h3>
            <p>
              Unlock the potential of your business with data-driven insights. Track performance, spot trends, and make informed decisions effortlessly.
            </p>
          </div>

          {/* Automation */}
          <div className="tool-box">
            <div className="icon">
              <img src="/automation-icon.png" alt="Automation" />
            </div>
            <h3>Automation</h3>
            <p>
              Simplify your workflows with smart automation. Save time, reduce manual effort, and focus on growing your business.
            </p>
          </div>

          {/* Collaboration */}
          <div className="tool-box">
            <div className="icon">
              <img src="/collaboration-icon.png" alt="Collaboration" />
            </div>
            <h3>Collaboration</h3>
            <p>
              Boost teamwork and productivity with seamless collaboration tools. Stay connected, aligned, and achieve more together.
            </p>
          </div>
        </div>
      </div>

      {/* Focus Section */}
      <div className="focus-section">
        <div className="focus-content">
          <h2>Helping you focus on what really matters</h2>
          <p>
            We simplify operations, enabling you to focus on growth. With data-driven insights, 
            efficient collaboration, and task automation, we handle the details while you drive success.
          </p>
          <ul>
            <li>Smarter Decisions</li>
            <li>Seamless Collaboration</li>
            <li>Effortless Automation</li>
            <li>Growth Acceleration</li>
          </ul>
        </div>
        
        <div className="focus-img">
          <img className="placeholderImg" src={placeholder} alt="Dashboard" />
          <div className="badge" style={{ position: "absolute", top: "10%", right: "-10%" }}>
            <img src="smarter-icon.png" alt="Smarter Decisions" />
            <div>
              <p className="badge-title">Smarter Decisions</p>
              <p>Data-Driven Decisions</p>
            </div>
          </div>

          <div className="badge" style={{ position: "absolute", bottom: "10%", left: "-10%" }}>
            <img src="collab-icon.png" alt="Collaboration" />
            <div>
              <p className="badge-title">Seamless Collaboration</p>
              <p>Efficient Teamwork Tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scale Section */}
      <div className="scale-section">
        <div className="stats-cards">
          <div className="card-1">
            <div className="card">
              <div className="card-icon">
                <img src="/cloud.png" alt="Projects" />
              </div>
              <h3>100+</h3>
              <p>Successful Projects</p>
            </div>
          </div>  

          <div className="card">
            <div className="card-icon">
              <img src="/business.png" alt="Business" />
            </div>
            <h3>5++</h3>
            <p>Years in Business</p>
          </div>

          <div className="card-1">
            <div className="card">
              <div className="card-icon">
                <img src="/team.png" alt="Team" />
              </div>
              <h3>5+</h3>
              <p>Team Members</p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon">
              <img src="/products.png" alt="Products" />
            </div>
            <h3>3+</h3>
            <p>Products Build</p>
          </div>
        </div>

        <div className="scale-content">
          <h2>Designed to scale when your business grows</h2>
          <p>
            Our solutions are crafted with scalability in mind, ensuring that as your business evolves, we're right there with you.
          </p>
          <ul>
            <li>Flexible Solutions</li>
            <li>Seamless Integration</li>
            <li>Robust Infrastructure</li>
            <li>Future-Ready Strategies</li>
          </ul>
        </div>
      </div>

      {/* Compatible Section */}
      <div className="compatible-section">
        <div className="compatible-content">
          <h2>Compatible with All Your Needs and Favorite Tools</h2>
          <p className="compatible-description">
            Our services are tailored to work seamlessly with your requirements.
            Whether it's marketing, branding, or strategy, we ensure everything aligns
            perfectly to achieve your goals.
          </p>
          <div className="compatible-list">
            <ul>
              <li>Brand Development & Strategy</li>
              <li>Marketing & Advertising</li>
              <li>Financial Analysis & Reporting</li>
              <li>Innovation & Product Development</li>
            </ul>
          </div>
        </div>
        <div className="compatible-cards">
          <div className="cardcompatible1">
            <div className="cardcompatible">
              <div className="card-logo-wrapper">
                <img src="/automation-icon.png" alt="Brand Building" className="card-logo" />
              </div>
              <div>
                <h3>Brand Building</h3>
                <p>Creating strong and memorable identities.</p>
              </div>
            </div>
          </div>

          <div className="cardcompatible">
            <div className="card-logo-wrapper">
              <img src="/automation-icon.png" alt="Advertise Creation" className="card-logo" />
            </div>
            <div>
              <h3>Advertise Creation</h3>
              <p>Designing impactful and engaging ads.</p>
            </div>
          </div>

          <div className="cardcompatible3">
            <div className="cardcompatible">
              <div className="card-logo-wrapper">
                <img src="/automation-icon.png" alt="Financial Analysis" className="card-logo" />
              </div>
              <div>
                <h3>Financial Analysis</h3>
                <p>Providing insights for smarter decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h4>FAQS</h4>
        <h2>Frequently asked questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                {faq}
                <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && <div className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="background"></div>
        <p className="cta-question">Question not answered above? <a href="#">Contact us →</a></p>
        <h2 className="cta-heading">Ready to take your business on next <span> level?</span></h2>
        <p className="cta-subtext">There has never been a better time than right now.</p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Get Started</button>
          <button className="cta-btn secondary">Learn More</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src="../" alt="Superiors.in" className="footer-logo" />
            <p>Empowering your business with innovative solutions and results-driven strategies.</p>
            <p className="CopyrightP">© Copyright 2025 • <strong>Superiors.in</strong> • All rights reserved.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Pages</h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <h4>Store</h4>
              <ul>
                <li>Shop</li>
                <li>Product</li>
                <li>Cart</li>
                <li>Checkout</li>
                <li>Account</li>
              </ul>
            </div>
            <div>
              <h4>Content</h4>
              <ul>
                <li>Blog</li>
                <li>Blog Post</li>
                <li>Masonry</li>
                <li>Author</li>
                <li>Search</li>
              </ul>
            </div>
            <div>
              <h4>Extra</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>Error 404</li>
                <li>Style Guide ↗</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-icons">
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Hero;
