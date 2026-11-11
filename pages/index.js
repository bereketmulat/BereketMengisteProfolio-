import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const NAME = "BEREKET";
const SKILLS = ["React", "Next.js", "Node.js", "JavaScript", "Python", "HTML/CSS", "MongoDB", "MySQL / SQL"];
const PERSONAL = ["Collaboration", "Mentorship", "Knowledge sharing", "Architecture"];

const PROJECTS = [
  {
    title: "NFL Pick’em",
    href: "https://fantasy-football-app-mu.vercel.app",
    text: "Create a private lobby, share a 5-character code and pick every game. Picks stay hidden until locked, lock at kickoff, and the scoreboard updates live.",
    stack: ["React Native (Expo)", "Next.js", "Supabase"],
    cta: "View live ↗",
  },
  {
    title: "NightShift",
    href: "https://www.figma.com/proto/OcNAlL2jYjqRaOlFqSwvoq/Assignment-1-and-2-GUI-year-3-sem-1?node-id=722-640&t=QKhZEFwZSXYoL0se-1",
    text: "A streetwear e-commerce experience for millennials and Gen Z, built around exclusivity through its language, styling and colors.",
    stack: ["Figma", "UI/UX", "E-commerce"],
    cta: "View prototype ↗",
  },
  {
    title: "Jack Pot",
    href: "https://github.com/bereketmulat/project1",
    text: "A lottery system where users bet on a number sequence against randomly generated winning numbers, with payouts based on their wager.",
    stack: ["Probability", "Input validation", "RNG"],
    cta: "View on GitHub ↗",
  },
];

const CLUBS = [
  ["STRA Labs", "A student-led team at Seneca Polytechnic, passionate about the space innovation industry. We began in 2025 and, though we’re a very new group, our ambitions are massive."],
  ["Disruptive Technologies", "Student empowerment in IT audit & assurance, security and governance, taking standards, practices and certification beyond the classroom. We share techniques, track industry news and promote the controls behind sound IT governance."],
  ["Open Source", "Learning from open-source work with a focus on readable code: BEM naming across HTML and CSS, consistent patterns for interactive elements like accordions and tabs, and clear documentation that helps beginners and developers move fast."],
  ["Cyber Café", "Dive into hacking challenges, sharpen your skills, and join a community of students passionate about cybersecurity."],
  ["Wealth Management", "Educating and empowering Seneca students to build financial confidence through money management, investing and long-term wealth planning, in a supportive community that builds smart habits for lasting success."],
];

export default function Home() {
  const cvRef = useRef(null);
  const darkRef = useRef(null);
  const mRef = useRef(null);
  const zRef = useRef(null);
  const mkRef = useRef(null);
  const burstRef = useRef(() => {});
  const chestRef = useRef(null);
  const hRef = useRef(null);
  const pRef = useRef(null);
  const tRef = useRef(null);
  const lRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const cv = cvRef.current;
    const dk = darkRef.current;
    const gm = mRef.current;
    const gz = zRef.current;
    const mk = mkRef.current;
    const ctx = cv.getContext("2d");

    let W = 0, H = 0, t = 0, lx = 0, ly = 0, tx = 0, ty = 0, dep = 0;
    let px = -999, py = -999, raf = 0, last = 0, zi = 0;
    let sn = [], bb = [], jl = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // water colour by real depth (m): blue light survives longest, nothing below ~1,000 m
    const stops = [
      [0,    [45, 185, 220]],
      [100,  [38, 160, 205]],
      [200,  [30, 140, 190]],
      [500,  [25, 115, 170]],
      [1000, [20, 90, 145]],
      [1600, [15, 70, 120]]
    ];
    function col(x) {
      x = Math.max(0, Math.min(1600, x));
      for (let i = 1; i < stops.length; i++) {
        if (x <= stops[i][0]) {
          const a = stops[i - 1], b = stops[i], f = (x - a[0]) / (b[0] - a[0]);
          return [0, 1, 2].map((k) => Math.round(a[1][k] + (b[1][k] - a[1][k]) * f));
        }
      }
      return stops[stops.length - 1][1];
    }

    function size() {
      const r = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width = W * r;
      cv.height = H * r;
      ctx.setTransform(r, 0, 0, r, 0, 0);
      sn = [];
      for (let i = 0; i < (W < 700 ? 70 : 140); i++)
        sn.push({ x: Math.random() * W, y: Math.random() * H, z: Math.random() * 0.9 + 0.1, s: Math.random() * 8 + 3 });
      jl = [];
      for (let j = 0; j < (W < 700 ? 3 : 5); j++)
        jl.push({
          x: Math.random() * W, y: Math.random() * H, s: 22 + Math.random() * 26,
          h: 165 + Math.random() * 45, ph: Math.random() * 6, vx: (Math.random() - 0.5) * 0.4, vy: 0,
        });
      lx = tx = W / 2;
      ly = ty = H / 2;
    }

    function bubble(x, y, r) {
      bb.push({ x, y, r: r || 2 + Math.random() * 7, v: 0.5 + Math.random() * 1.4, ph: Math.random() * 6 });
    }
    function burst(x, y, n) {
      for (let i = 0; i < n; i++) bubble(x + (Math.random() - 0.5) * 30, y + (Math.random() - 0.5) * 20);
    }
    burstRef.current = burst;

    const onMove = (e) => {
      px = e.clientX; py = e.clientY; tx = px; ty = py;
      if (Math.random() < 0.12) bubble(px, py, 1.5 + Math.random() * 3);
    };
    const onDown = (e) => {
      if (!e.target.closest("a")) burst(e.clientX, e.clientY, 8);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);

    // scroll-reveal
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    // depth gauge: each section spans a real depth range (data-d0 → data-d1)
    const secs = Array.from(document.querySelectorAll("section"));
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const f = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const y = window.scrollY + f * window.innerHeight;
      let k = 0;
      secs.forEach((s, i) => { if (s.getBoundingClientRect().top + window.scrollY <= y) k = i; });
      const s = secs[k];
      const p = Math.min(1, Math.max(0, (y - (s.getBoundingClientRect().top + window.scrollY)) / s.offsetHeight));
      dep = +s.dataset.d0 + (+s.dataset.d1 - +s.dataset.d0) * p;
      const lt = 100 * Math.exp(-0.023 * dep); // 1% of surface light at 200 m
      if (k !== zi || !gz.textContent) { zi = k; gz.textContent = s.dataset.z; }
      gm.textContent = Math.round(dep).toLocaleString("en-US") + " m";
      pRef.current.textContent = Math.round(1 + dep / 10).toLocaleString("en-US") + " atm";
      tRef.current.textContent = (2 + 18 * Math.exp(-dep / 350)).toFixed(1) + " °C";
      lRef.current.textContent = dep >= 1000 ? "none" : lt >= 1 ? Math.round(lt) + " %" : "< 1 %";
      mk.style.top = ((k + p) / secs.length) * 100 + "%";
      hRef.current.style.setProperty("--p", (k + p) / secs.length);
    }
    const onResize = () => { size(); onScroll(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    function frame(ts) {
      const dt = Math.min((ts - last) / 1000 || 0, 0.05);
      last = ts;
      t += reduce ? 0 : dt;
      const scrollY = window.scrollY;

      const top = col(dep), bot = col(dep + 150);
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "rgb(" + top + ")");
      g.addColorStop(1, "rgb(" + bot + ")");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // light rays
      const ra = 0.09 * Math.max(0, 1 - dep / 250);
      if (ra > 0) {
        for (let i = 0; i < 5; i++) {
          const bx = W * (i / 5 + 0.08) + Math.sin(t * 0.4 + i * 1.7) * 50, wd = 40 + i * 8;
          ctx.fillStyle = "rgba(255,255,255," + ra + ")";
          ctx.beginPath();
          ctx.moveTo(bx, 0); ctx.lineTo(bx + wd, 0);
          ctx.lineTo(bx + wd * 3 + 120, H); ctx.lineTo(bx + wd * 1.2 - 40, H);
          ctx.fill();
        }
      }

      // marine snow
      for (let s = 0; s < sn.length; s++) {
        const p = sn[s];
        const y = (((p.y - scrollY * p.z * 0.5 + t * p.s * p.z) % H) + H) % H;
        ctx.fillStyle = "rgba(210,240,255," + (0.18 + p.z * 0.4) + ")";
        ctx.fillRect(p.x + Math.sin(t * 0.5 + p.s) * 6, y, p.z * 2.2, p.z * 2.2);
      }

      // jellyfish
      const ja = 0.15 + 0.7 * Math.min(1, dep / 700);
      jl.forEach((j) => {
        j.ph += dt * 1.6;
        j.x += j.vx + Math.sin(j.ph * 0.3) * 0.3;
        j.y += Math.sin(j.ph) * 0.5 - 0.12;
        const dx = j.x - px, dy = j.y - py, dd = Math.hypot(dx, dy);
        if (dd < 190 && dd > 0) { j.x += (dx / dd) * 2.2; j.y += (dy / dd) * 2.2; }
        if (j.x < -80) j.x = W + 60;
        if (j.x > W + 80) j.x = -60;
        if (j.y < -120) j.y = H + 80;
        if (j.y > H + 120) j.y = -80;
        const pl = 1 + Math.sin(j.ph * 2) * 0.07, sz = j.s * pl;
        ctx.save();
        ctx.shadowBlur = 26;
        ctx.shadowColor = "hsla(" + j.h + ",100%,65%," + ja + ")";
        ctx.strokeStyle = "hsla(" + j.h + ",100%,75%," + ja * 0.7 + ")";
        ctx.lineWidth = 1.4;
        for (let k = 0; k < 6; k++) {
          const tx2 = j.x - sz + k * ((sz * 2) / 5);
          ctx.beginPath();
          ctx.moveTo(tx2, j.y);
          for (let q = 1; q <= 6; q++) ctx.lineTo(tx2 + Math.sin(j.ph * 2 + q * 0.8 + k) * sz * 0.16, j.y + q * sz * 0.38);
          ctx.stroke();
        }
        const bg = ctx.createRadialGradient(j.x, j.y - sz * 0.4, 2, j.x, j.y, sz * 1.3);
        bg.addColorStop(0, "hsla(" + j.h + ",100%,85%," + ja + ")");
        bg.addColorStop(1, "hsla(" + j.h + ",100%,55%," + ja * 0.25 + ")");
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.moveTo(j.x - sz, j.y);
        ctx.bezierCurveTo(j.x - sz, j.y - sz * 1.5, j.x + sz, j.y - sz * 1.5, j.x + sz, j.y);
        ctx.quadraticCurveTo(j.x, j.y + sz * 0.35, j.x - sz, j.y);
        ctx.fill();
        ctx.restore();
      });

      // bubbles
      if (!reduce && Math.random() < 0.05) bubble(Math.random() * W, H + 10);
      for (let b = bb.length - 1; b >= 0; b--) {
        const u = bb[b];
        u.y -= u.v; u.ph += 0.05; u.x += Math.sin(u.ph) * 0.5;
        if (u.y < -20) { bb.splice(b, 1); continue; }
        ctx.strokeStyle = "rgba(210,245,255,.55)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(u.x, u.y, u.r, 0, 6.283);
        ctx.stroke();
        ctx.fillStyle = "rgba(255,255,255,.5)";
        ctx.fillRect(u.x - u.r * 0.4, u.y - u.r * 0.5, u.r * 0.3, u.r * 0.3);
      }

      // flashlight darkness
      lx += (tx - lx) * 0.12;
      ly += (ty - ly) * 0.12;
      dk.style.background =
        "radial-gradient(circle " + (W < 700 ? 200 : 300) + "px at " + lx + "px " + ly +
        "px,rgba(0,4,14,0) 0%,rgba(0,4,14," + 0.55 * Math.min(1, dep / 1000) + ") 100%)";
      raf = requestAnimationFrame(frame);
    }

    size();
    onScroll();
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Visitor counter: each browser is counted once, then it only reads the total.
  useEffect(() => {
    let off = false;
    (async () => {
      try {
        let seen = false;
        try {
          seen = localStorage.getItem("portfolio-counted") === "1";
          if (!seen) localStorage.setItem("portfolio-counted", "1");
        } catch (e) {}
        const r = await fetch("/api/visits", { method: seen ? "GET" : "POST" });
        const j = await r.json();
        if (!off && typeof j.count === "number") setVisits(j.count);
      } catch (e) {}
    })();
    return () => { off = true; };
  }, []);

  const pop = (el, n) => {
    const r = el.getBoundingClientRect();
    burstRef.current(r.left + r.width / 2, r.top + r.height / 2, n);
  };

  const toggleChest = () => {
    const next = !open;
    setOpen(next);
    const r = chestRef.current.getBoundingClientRect();
    burstRef.current(r.left + r.width / 2, r.top, next ? 26 : 6);
  };

  return (
    <>
      <Head>
        <title>Bereket Mengiste | Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta
          name="description"
          content="Bereket Mengiste, software developer and Seneca Polytechnic student, open to internships and co-op roles."
        />
      </Head>

      <canvas id="cv" ref={cvRef} aria-hidden="true" />
      <div id="dark" ref={darkRef} />
      <div id="gauge" aria-hidden="true">
        <div className="tr">
          {[null, "0", "200", "1,000", "4,000", "6,000"].map((t, i) => (
            <i key={i} style={{ top: (i / 6) * 100 + "%" }}>{t && <span>{t}</span>}</i>
          ))}
          <div className="mk" ref={mkRef} />
        </div>
      </div>
      <footer id="hud" ref={hRef}>
        <span>Depth <b ref={mRef}>0 m</b></span>
        <span>Pressure <b ref={pRef}>1 atm</b></span>
        <span>Temp <b ref={tRef}>20 °C</b></span>
        <span>Light <b ref={lRef}>100 %</b></span>
        <span className="zone"><b ref={zRef}>Surface</b></span>
        {visits !== null && (
          <span id="vis" title="Unique visitors">Visitors <b>{visits.toLocaleString("en-US")}</b></span>
        )}
      </footer>

      <main>
        <section data-z="Surface" data-d0="0" data-d1="0">
          <div className="in hero">
            <h1 id="name" aria-label="Bereket Mengiste">
              {NAME.split("").map((c, i) => (
                <span key={i} style={{ "--i": String(i) }}>{c}</span>
              ))}
            </h1>
            <dl className="plate">
              <div><dt>Surname</dt><dd>Mengiste</dd></div>
              <div><dt>Role</dt><dd>Software developer</dd></div>
              <div><dt>Status</dt><dd className="st">Open to internships &amp; co-op</dd></div>
            </dl>
            <p className="lead">Scroll to descend. Below 200 metres the sun is not enough, so move your cursor to shine a light.</p>
            <div className="cue mono">Descend ↓</div>
          </div>
        </section>

        <section data-z="Sunlight zone" data-d0="0" data-d1="200" id="about">
          <div className="in rv">
            <div className="lab">02 · Epipelagic · 0–200 m</div>
            <h2>Calm on the surface, curious below</h2>
            <p className="fact">The sunlit layer. Photosynthesis happens here, down to where light falls to 1% of the surface.</p>
            <p className="lead">
              A software engineer in training with a rigorous academic background and a deep appreciation for the
              craft of technology. I approach hard problems with precision, elegance and structured creativity.
            </p>
            <div className="li">
              <b>Seneca Polytechnic</b>
              <span>Honours Bachelor of Technology, Software Development</span>
              <em>Sept 2023 – Aug 2027</em>
            </div>
          </div>
        </section>

        <section data-z="Twilight zone" data-d0="200" data-d1="1000" id="skills">
          <div className="in rv">
            <div className="lab">03 · Mesopelagic · 200–1,000 m</div>
            <h2>A school of tools</h2>
            <p className="fact">Red light is absorbed within the first few metres, so only faint blue remains. Each night, much of this zone’s life migrates upward to feed.</p>
            <p className="lead">Tap a tag and bubbles rise.</p>
            {[["Technical", SKILLS, 0], ["Working style", PERSONAL, SKILLS.length]].map(([cap, list, off]) => (
              <div className="grp" key={cap}>
                <div className="cap mono">{cap}</div>
                <div className="school">
                  {list.map((s, j) => {
                    const i = j + off;
                    return (
                      <button
                        type="button"
                        key={s}
                        className="fish"
                        style={{
                          "--d": (3 + ((i * 7) % 30) / 10).toFixed(1) + "s",
                          "--dl": "-" + (((i * 13) % 40) / 10).toFixed(1) + "s",
                        }}
                        onClick={(e) => pop(e.currentTarget, 10)}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section data-z="Midnight zone" data-d0="1000" data-d1="4000" id="projects">
          <div className="in rv">
            <div className="lab">04 · Bathypelagic · 1,000–4,000 m</div>
            <h2>Lights in the dark</h2>
            <p className="fact">No sunlight. Roughly three-quarters of the animals here make their own, so each project hangs from a lure.</p>
            <div className="cards">
              {PROJECTS.map((p, i) => (
                <a key={p.title} className="lure" href={p.href} target="_blank" rel="noopener noreferrer">
                  <span className="no mono">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ul className="stack mono">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
                  <span className="go mono">{p.cta}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section data-z="Abyssal zone" data-d0="4000" data-d1="6000" id="clubs">
          <div className="in rv">
            <div className="lab">05 · Abyssopelagic · 4,000–6,000 m</div>
            <h2>Communities</h2>
            <p className="fact">Food arrives as marine snow, organic debris sinking slowly from above. Clubs I’m a member of:</p>
            <ol className="bio">
              {CLUBS.map(([title, text], i) => (
                <li className="orb" key={title}>
                  <span className="mono">0{i + 1}</span>
                  <div><b>{title}</b><span>{text}</span></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section data-z="Hadal zone" data-d0="6000" data-d1="10935" id="contact">
          <div className="in rv chest">
            <div className="lab">06 · Hadal · 6,000 m +</div>
            <h2>Open a channel</h2>
            <p className="fact">Named for Hades. The trenches reach their floor near 10,935 m at the Challenger Deep.</p>
            <p className="lead">Open to internships, co-op roles and collaborations.</p>
            <button id="chest" ref={chestRef} onClick={toggleChest} aria-expanded={open} aria-controls="loot">
              {open ? "Close channel" : "Open channel"}
            </button>
            <div id="loot" className={open ? "open" : ""}>
              <a className="btn" href="mailto:bereketmulat89@gmail.com"><span>Email</span>bereketmulat89@gmail.com</a>
              <a className="btn" href="tel:+12265014337"><span>Phone</span>226-501-4337</a>
              <a className="btn" href="https://www.linkedin.com/in/bereket-mulat-mengiste-b10156272/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span>Profile ↗</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
