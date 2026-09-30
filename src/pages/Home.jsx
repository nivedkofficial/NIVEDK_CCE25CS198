
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div>
        <img src={profile} alt="NIVED K" />
      <h1>Hi, I'm NIVED K</h1>

      <h2>Computer Science Engineering Student</h2>

      <p>
        Welcome to my personal portfolio. I am a passionate student
        interested in technology, web development, filmmaking and creative work.
      </p>

      <button>View My Work</button>
      <button>Contact Me</button>

      <h2>Technical Skills</h2>

      <ul>
        <li>Java</li>
        <li>Python</li>
        <li>C Programming</li>
        <li>React.js</li>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
      </ul>

      <h2>Featured Projects</h2>

      <p>Personal Portfolio Website</p>
      <p>INTERVAL - Film Project</p>
    </div>
  );
}

export default Home;