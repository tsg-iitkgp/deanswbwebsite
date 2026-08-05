import { useReveal } from '../hooks/useReveal';

const Cta = () => {
  const { ref, className } = useReveal();
  
  return (
    <section className="cta section">
      <div ref={ref} className={`cta-container glass-panel ${className}`}>
        <h2>Ready to make a difference?</h2>
        <p>Join the student committees, volunteer for mentorship, or reach out to us with your innovative ideas to improve campus life.</p>
        <a href="#contact" className="btn btn-primary btn-large cta-btn">Get Involved Now</a>
      </div>
    </section>
  );
};

export default Cta;
