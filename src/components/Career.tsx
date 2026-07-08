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
                <h4>B.Tech (Computer Science)</h4>
                <h5>GL Bajaj Group of Institutions, Mathura</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a focus on computer science
              fundamentals, software development, data structures, algorithms,
              and modern web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>Fresher / Self-Developed Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed responsive user interfaces using React.js, HTML, CSS,
              and JavaScript. Built and integrated RESTful APIs with Python and
              Node.js. Collaborated on team projects, conducted code reviews,
              and maintained high coding standards across the full stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
