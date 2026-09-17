"use client";

import { useEffect, useState } from "react";

const facts = [
  { label: "Real name", value: "John Michael Osbourne", detail: "This is the name he was born with." },
  { label: "Born", value: "December 3, 1948", detail: "Born in Birmingham, England." },
  { label: "Died", value: "July 22, 2025", detail: "Died of cardiac arrest." },
  { label: "From", value: "Birmingham, England", detail: "This is part of his early background." },
  { label: "Nicknames", value: "Osbourne, Godfather of Heavy Metal", detail: "He was also called the Madman of Rock." },
  { label: "Rock Hall", value: "Inducted twice", detail: "Shows that Osbourne is a legendary figure in rock music." },
];

const timeline = [
  ["Age 14", "Beatles influence", "When he first heard the Beatles' first hit single, it inspired him to become a musician."],
  ["Age 17", "Rare Breed", "Geezer Butler formed Rare Breed and recruited Osbourne to be the singer."],
  ["Later", "Black Sabbath", "After Rare Breed disbanded, Osbourne and Geezer Butler reunited with Bill Ward and Tony Iommi under the name Black Sabbath."],
  ["Later albums", "Big catalog", "Over many years, Black Sabbath released albums like Black Sabbath, Paranoid, and Master of Reality."],
  ["Solo era", "Blizzard of Ozz", "Blizzard of Ozz was Osbourne's first solo project."],
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = window.localStorage.getItem("hall-theme");
    if (savedMode === "light") setDarkMode(false);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("hall-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <main className="ozzy-page">
      <div className="announcement">
        <span>HALL OF FAME CASE</span>
        <span>OZZY OSBOURNE</span>
        <span className="announcement-mark">✦</span>
      </div>

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Ozzy home"><span>THE</span><strong>HALL</strong></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#music">Music</a>
          <a href="#audio">Audio</a>
          <a href="#hall-of-fame">Hall of Fame</a>
        </div>
        <button className="theme-toggle" onClick={() => setDarkMode((current) => !current)} aria-label="Toggle dark and light mode">
          <span className="theme-icon">{darkMode ? "☀" : "☾"}</span>
          {darkMode ? "Light" : "Dark"}
        </button>
      </nav>

      <section className="hero shell reveal" id="top">
        <div className="hero-copy">
          <p className="kicker"><span className="dot" /> Ozzy Osbourne</p>
          <h1>Ozzy<br /><em>Osbourne.</em></h1>
          <p className="hero-intro">He helped pioneer heavy metal, reshaped the genre, and inspired many people.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#about">Read the bio <span>↗</span></a>
            <a className="text-link" href="#hall-of-fame">Why he belongs <span>→</span></a>
          </div>
        </div>

        <div className="hero-art ozzy-hero" role="img" aria-label="Ozzy Osbourne portrait">

          <div className="hero-art-caption">Godfather of<br /><em>Heavy Metal</em></div>

        </div>
      </section>

      <div className="ticker" aria-label="Ozzy facts">
        <div className="ticker-track">
          {Array.from({ length: 2 }, () => ["OZZY OSBOURNE", "BLACK SABBATH", "CRAZY TRAIN", "BLIZZARD OF OZZ", "HEAVY METAL"]).flat().map((item, index) => (
            <span key={`${item}-${index}`}>{item}<b>✦</b></span>
          ))}
        </div>
      </div>

      <section className="bio shell reveal" id="about">
        <div className="section-stamp">EARLY LIFE<br />& CAREER</div>
        <div className="bio-copy">
          <p className="kicker">Basic info</p>
          <h2>Ozzy Osbourne<br /><em>the facts.</em></h2>
          <p>Osbourne was born on December 3, 1948. He was born in Birmingham, England, and got his nickname "Ozzy" from his childhood. He played in school plays and was inspired to become a musician after hearing the Beatles' first hit single at age 14.</p>
          <p>At 17, Geezer Butler formed Rare Breed and recruited Osbourne to be the singer. After they disbanded, Osbourne and Geezer reunited with Bill Ward and Tony Iommi under the name Black Sabbath.</p>
        </div>
      </section>

      <section className="facts reveal">
        <div className="shell facts-grid">
          {facts.map((fact) => (
            <article className="fact-card" key={fact.label}>
              <p className="kicker">{fact.label}</p>
              <h3>{fact.value}</h3>
              <p>{fact.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery reveal">
        <div className="shell gallery-head">
          <p className="kicker">Image gallery</p>
          <h2>Ozzy in focus</h2>
        </div>
        <div className="shell gallery-grid">
          <div className="gallery-photo" style={{ backgroundImage: "url('/osbourne.jpeg')" }}><span>01</span></div>
          <div className="gallery-photo" style={{ backgroundImage: "url('/osbourne.jpeg')" }}><span>02</span></div>
          <div className="gallery-photo" style={{ backgroundImage: "url('/osbourne.jpeg')" }}><span>03</span></div>
          <div className="gallery-photo" style={{ backgroundImage: "url('/osbourne.jpeg')" }}><span>04</span></div>
          <div className="gallery-photo" style={{ backgroundImage: "url('/osbourne.jpeg')" }}><span>05</span></div>
        </div>
      </section>

      <section className="music shell reveal" id="music">
        <div className="section-stamp">MUSICAL INFO</div>
        <div className="music-copy">
          <p className="kicker">Career and sound</p>
          <h2>Heavy metal<br /><em>in his hands.</em></h2>
          <p>Osbourne helped define the sound of Black Sabbath. Over the years, the band made albums including Black Sabbath, Paranoid, and Master of Reality.</p>
          <p>After leaving the band, he started a solo career. Blizzard of Ozz was his first solo project, and “Not Going Away” is another song included in our project.</p>
        </div>

        <div className="music-cards">
          <article className="music-card image-card">
            <div className="mini-photo" style={{ backgroundImage: "url('/osbourne.jpeg')" }} aria-hidden="true" />
            <p className="kicker">Signature sound</p>
            <h3>Voice and presence</h3>
            <p>His high-drama vocals and stage presence made him impossible to ignore.</p>
          </article>
          <article className="music-card image-card">
            <div className="mini-photo" style={{ backgroundImage: "url('/osbourne.jpeg')" }} aria-hidden="true" />
            <p className="kicker">Breakout moment</p>
            <h3>Blizzard of Ozz</h3>
            <p>His solo work proved that his influence stretched far beyond Black Sabbath.</p>
          </article>
          <article className="music-card image-card">
            <div className="mini-photo" style={{ backgroundImage: "url('/osbourne.jpeg')" }} aria-hidden="true" />
            <p className="kicker">Legacy</p>
            <h3>Peak of his career</h3>
            <p>His catalog and performance style still shape the sound of hard rock.</p>
          </article>
        </div>
      </section>

      <section className="timeline shell reveal" id="timeline">
        <div className="section-stamp">KEY MOMENTS</div>
        <div className="timeline-copy">
          <p className="kicker">Timeline</p>
          <h2>Important<br /><em>moments.</em></h2>
        </div>
        <div className="timeline-list">
          {timeline.map(([year, title, description]) => (
            <div className="timeline-item" key={year + title}>
              <span>{year}</span>
              <div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="audio-section shell reveal" id="audio">
        <p className="kicker">Three songs / performances</p>
        <h2>Listen to the<br /><em>song list.</em></h2>
        <div className="audio-grid">
          <article className="audio-card">
            <div className="album-cover" style={{ backgroundImage: "url('/osbourne.jpeg')" }}><span>OZZY<br />OSBOURNE</span></div>
            <div className="audio-details"><p className="kicker">Blizzard of Ozz</p><h3>Crazy Train</h3><p>Considered Osbourne's most famous solo song.</p><audio controls preload="none" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">Your browser does not support audio.</audio><small>Audio player for the project.</small></div>
          </article>
          <article className="audio-card">
            <div className="album-cover" style={{ backgroundImage: "url('/osbourne.jpeg')" }}><span>OZZY<br />OSBOURNE</span></div>
            <div className="audio-details"><p className="kicker">Black Sabbath</p><h3>Black Sabbath</h3><p>A song from the band he helped lead.</p><audio controls preload="none" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">Your browser does not support audio.</audio><small>Audio player for the project.</small></div>
          </article>
          <article className="audio-card">
            <div className="album-cover" style={{ backgroundImage: "url('/osbourne.jpeg')" }}><span>OZZY<br />OSBOURNE</span></div>
            <div className="audio-details"><p className="kicker">No More Tears</p><h3>No More Tears</h3><p>It was one of Osbourne's best-selling solo songs.</p><audio controls preload="none" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">Your browser does not support audio.</audio><small>Audio player for the project.</small></div>
          </article>
        </div>
      </section>

      <section className="hall-case shell reveal" id="hall-of-fame">
        <div className="hall-copy">
          <p className="kicker">The argument</p>
          <h2>Ozzy Osbourne should be in the Rock & Roll Hall of Fame because he helped pioneer heavy metal and reshaped the genre as a whole.</h2>
          <p>He also inspired many people through Black Sabbath, his solo career, and songs like “Crazy Train.” His eccentric personality, including the famous bat-biting story, made him one of rock’s most recognizable performers.</p>
        </div>
      </section>

      <footer className="footer shell">

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#music">Music</a>
          <a href="#audio">Audio</a>
        </div>
        <span className="copyright">© 2026</span>
      </footer>
    </main>
  );
}
