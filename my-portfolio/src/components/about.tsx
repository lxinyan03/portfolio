import "../styles/about.css"; 
import useFadeUp from "./fadeUp";

const About: React.FC = () => {
  useFadeUp(); 
  return (
    <section id="about" className="about-section element-fade-up" data-animation="fade-up">
      <h1>About Me</h1>
      <p className="element-fade-up faster" data-animation="fade-up">
        Predicted First-Class MEng Computer Science graduate from the University of Bristol (June 2026), with hands-on experience in deep learning research, full-stack development, and award-winning product engineering. Proven expertise in designing backend architectures, complex PostgreSQL schemas, and state-of-the-art low-light video enhancement systems.
      </p>
    </section>
  );
};

export default About;
