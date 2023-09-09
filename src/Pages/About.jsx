import React from "react";
import "../AllCss/About.css";
import lrpic from '../assets/pexels-arthur-brognoli-2260824.jpg'

const About = () => {
  return (
    <section className="About">
      <div className="AboutContainer">
        <div className="AboutTitle">
          <h2>ABOUT US</h2>
        </div>
      </div>
      <div className="AboutText">
        <div className="lrpic"><img src={lrpic} /></div>
        <div className="lrtext"><p>
          I am a passionate and driven individual with a deep enthusiasm for
          technology and innovation. My journey began with a curiosity about how
          things work, which led me to explore the world of computers and
          programming. As I delved into the realm of coding, I discovered my
          love for creating meaningful and impactful solutions through software.
          With a strong educational background in computer science and years of
          hands-on experience, I have honed my skills in various programming
          languages and frameworks. From crafting elegant and efficient code to
          solving complex problems, I thrive on challenges that push me to think
          critically and creatively. 
        </p></div>
      </div>
    </section>
  );
};

export default About;
