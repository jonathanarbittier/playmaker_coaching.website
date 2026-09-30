import Image from "next/image";
import { Header } from "@/components/Header";
import { HeroVideo } from "@/components/HeroVideo";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { Reveal } from "@/components/Reveal";

const instagram = "https://www.instagram.com/playmaker_coaching/";
const services = [
  { title: "1-TO-1 COACHING", text: "Individual football coaching with attention on personal development and technique.", image: "/images/real-small-group.jpg", pos: "58% 50%" },
  { title: "SMALL GROUP TRAINING", text: "Train alongside others in focused sessions built around skill development and improvement.", image: "/images/real-one-to-one.jpg", pos: "40% 50%" },
  { title: "MINDSET & DEVELOPMENT", text: "Building confidence and a positive approach to football development.", image: "/images/real-mindset.jpg", pos: "50% 50%" },
];

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <main>
      <Header />

      <section id="home" className="hero" aria-labelledby="hero-title">
        <HeroVideo />
        <div className="hero-shade" />
        <div className="hero-content">
          <h1 id="hero-title">YOUR GAME<br />NEXT LEVEL</h1>
          <div className="hero-bottom">
            <p>Individual and small group football coaching focused on player development.</p>
            <a className="button button--acid" href={instagram} target="_blank" rel="noreferrer">ENQUIRE ABOUT TRAINING <ArrowUpRight /></a>
          </div>
        </div>
        <a className="scroll-cue" href="#approach"><span>SCROLL</span><i /></a>
      </section>

      <section id="approach" className="approach section-pad">
        <Reveal>
          <div className="approach-grid">
            <h2>MORE THAN<br />JUST TRAINING</h2>
            <div className="approach-copy">
              <span className="rule" />
              <p>Football development is about more than repetition. Playmaker focuses on individual progress, confidence and creating a positive environment for players to develop.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="coaching" className="coaching section-pad">
        <Reveal className="section-heading">
          <h2>FIND YOUR<br />NEXT LEVEL</h2>
        </Reveal>
        <div className="services">
          {services.map((service, index) => (
            <Reveal className="service" key={service.title}>
              <div className="service-image">
                <Image src={service.image} alt="Football training session" fill sizes="(min-width: 900px) 33vw, 100vw" style={{ objectPosition: service.pos }} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <Reveal>
          <h2>READY TO GET<br />TO WORK</h2>
          <div className="contact-bottom">
            <p>Interested in individual or small group football training? Get in touch with Playmaker to find out more.</p>
            <a className="button button--acid button--large" href={instagram} target="_blank" rel="noreferrer">GET IN TOUCH <ArrowUpRight /></a>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand"><span>PLAYMAKER</span><small>FOOTBALL COACHING</small></div>
          <div className="footer-links">
            <div><a href="#home">Home</a><a href="#coaching">Coaching</a><a href="#contact">Contact</a></div>
            <div><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>EST. 2020</span><span>© {year} PLAYMAKER FOOTBALL COACHING</span></div>
      </footer>
    </main>
  );
}
