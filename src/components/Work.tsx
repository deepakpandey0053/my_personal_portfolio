import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectsData } from "../data/projectsData";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {
  useGSAP(() => {
    const workFlex = document.querySelector(".work-flex") as HTMLElement;
    if (!workFlex) return;

    const getScrollAmount = () => {
      const boxes = document.querySelectorAll(".work-box");
      if (boxes.length === 0) return 0;
      const lastBox = boxes[boxes.length - 1] as HTMLElement;
      const totalWidth = lastBox.offsetLeft + lastBox.offsetWidth;
      return Math.max(0, totalWidth - window.innerWidth + 200);
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${Math.max(getScrollAmount(), 1400)}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getScrollAmount(),
      ease: "none",
    });

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectsData.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    {project.link || project.github ? (
                      <a
                        href={project.link || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-title-link"
                        data-cursor="disable"
                      >
                        <h4>{project.title}</h4>
                      </a>
                    ) : (
                      <h4>{project.title}</h4>
                    )}
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>

                {(project.link || project.github) && (
                  <div className="work-action-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn"
                        data-cursor="disable"
                      >
                        <span>
                          {project.link.includes("1drv.ms") || project.link.includes("drive.google")
                            ? "View Project"
                            : "Live Demo"}
                        </span>
                        <MdArrowOutward />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn work-btn-secondary"
                        data-cursor="disable"
                      >
                        <span>GitHub</span>
                        <FaGithub />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link || project.github}
                video={project.video}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
