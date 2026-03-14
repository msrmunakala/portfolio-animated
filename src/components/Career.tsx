import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Applying 2 years in web development and design, creating impactful solutions for top brands.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance UI/UX Designer</h4>
                <h5>Logique</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              From wireframes to prototypes, ensuring every detail enhances the user experience while aligning with brand visions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Web Designer</h4>
                <h5>Optimal</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Revolutizing design and tech with bold creativity and cutting-edge solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Web Developer</h4>
                <h5>Waveline</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Started mission to craft responsive, high-performance websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
