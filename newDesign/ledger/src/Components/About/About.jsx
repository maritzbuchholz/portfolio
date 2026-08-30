import Section from '../Section/Section';
import './About.scss';

function About() {
  return (
    <Section id="about" folio="01" label="About" title={<>About <em>me</em></>}>
      <div className="about__body">
        <p>
          I am a backend engineer who strives to write robust and efficient
          code. With a background in finance and math, I approach every project
          with analytical rigor and a commercial mindset.
        </p>
        <p>
          When I'm not coding, you'll find me playing drums, watching reality
          TV, or rooting for the Mets.
        </p>
      </div>
    </Section>
  );
}

export default About;
