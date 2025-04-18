import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;