import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Coffee, Wind, Layers, Palette, Server, Database,
  Terminal, Globe, Zap, FolderOpen, Briefcase, User, X,
  ArrowLeft, ExternalLink, Phone, Mail, Github, Linkedin,
  Heart, ShoppingBag, MapPin, FileText, CheckCircle,
} from "lucide-react";

// ─── Orbit data ─────────────────────────────────────────────────────────────
const innerOrbit = [
  { Icon: Code2,    label: "React"      },
  { Icon: Terminal, label: "TypeScript" },
  { Icon: Wind,     label: "Tailwind"   },
  { Icon: Layers,   label: "Next.js"    },
  { Icon: Server,   label: "Node.js"    },
  { Icon: Coffee,   label: "Java"       },
];
const outerOrbit = [
  { Icon: Palette,  label: "CSS3"   },
  { Icon: Globe,    label: "shadcn" },
  { Icon: Database, label: "SQL"    },
  { Icon: Zap,      label: "Framer" },
  { Icon: FileText, label: ".NET"   },
  { Icon: Github,   label: "Git"    },
];

// ─── Portfolio data ──────────────────────────────────────────────────────────
const projects = [
  {
    id: 1, Icon: Heart,
    name: "Comfort Funeral Services",
    tagline: "Compassionate care, beautifully presented online",
    description:
      "A modern, trust-first website for families searching in difficult moments. Fast, clear, and always reachable — 24/7 contact is woven throughout so help is always one tap away. Built with Next.js 15 and smooth scroll animations.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://dylan-gorrah.github.io/Comfort-funiral-services/",
    year: "2026",
  },
  {
    id: 2, Icon: ShoppingBag,
    name: "Fen & Fern Creations",
    tagline: "Shop, customise, and order via WhatsApp",
    description:
      "A live e-commerce platform for a small business. Customers customise products across 6+ options and check out directly via WhatsApp — cutting order time by 85%. Delivery zones calculate automatically with Google Maps.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "WhatsApp API"],
    url: "https://fenferncreations.com/",
    year: "2025",
  },
  {
    id: 3, Icon: MapPin,
    name: "EJ Tours & Projects",
    tagline: "Cape Town tours, booked in seconds",
    description:
      "A tourism booking site for a Cape Town operator. Browse 10+ tour packages and book straight from WhatsApp. Built for trust and conversion, with structured data SEO, Open Graph tags, and geographic targeting for local search visibility.",
    tech: ["HTML5", "CSS3", "Vanilla JS", "WhatsApp API", "SEO"],
    url: "https://ejtoursandprojects.it.com",
    year: "2025",
  },
  {
    id: 4, Icon: Zap,
    name: "Success V3 – Web Studio",
    tagline: "Premium marketing site for a web agency",
    description:
      "A conversion-focused site with a premium SaaS feel. Services grid, draggable project carousel, trust badges, and WhatsApp with pre-filled messages so leads land in the right place instantly.",
    tech: ["React 18", "Vite 5", "Tailwind CSS", "Framer Motion"],
    url: null,
    year: "2026 — In Progress",
  },
  {
    id: 5, Icon: FileText,
    name: "Monthly Claims System",
    tagline: "Workflow automation for teaching contracts",
    description:
      "An internal approval tool for Rosebank College. Teaching claims flow Lecturer → Coordinator → Manager → HR, with automated rule checks, role-based login, status dashboards, and one-click HR report exports.",
    tech: ["C#", "ASP.NET Core", "Entity Framework", "SQLite"],
    url: null,
    year: "2025",
  },
];

// ─── Animation variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};
const overlayV = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit:    { opacity: 0, transition: { duration: 0.18 } },
};
const panelV = {
  hidden:  { opacity: 0, y: 52 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: 36, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
};
const cardV = {
  hidden:  { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.065, duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  }),
};
const detailV = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, x: -18, transition: { duration: 0.18 } },
};

// ─── CSS ─────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg:         #0d0c0a;
    --surface:    rgba(255,255,255,0.03);
    --surface-h:  rgba(201,169,110,0.07);
    --bdr:        rgba(201,169,110,0.1);
    --bdr-h:      rgba(201,169,110,0.26);
    --gold:       #c9a96e;
    --gold-dim:   rgba(201,169,110,0.58);
    --gold-faint: rgba(201,169,110,0.08);
    --txt:        #f0ece4;
    --txt-dim:    rgba(240,236,228,0.52);
    --txt-dimmer: rgba(240,236,228,0.28);
    --green:      #4ade80;
    --green-dim:  rgba(74,222,128,0.08);
    --green-bdr:  rgba(74,222,128,0.2);
  }
  body {
    font-family: 'Outfit', sans-serif;
    background: var(--bg); color: var(--txt);
    min-height: 100vh; overflow-x: hidden;
  }
  body::after {
    content: ''; position: fixed; inset: 0;
    pointer-events: none; z-index: 999; opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 300px;
  }
  .bg-grid {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(201,169,110,0.018) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,169,110,0.018) 1px, transparent 1px);
    background-size: 52px 52px;
  }
  .blob1 { position: fixed; top: -180px; right: -180px; width: 600px; height: 600px; pointer-events: none; z-index: 0; background: radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 62%); }
  .blob2 { position: fixed; bottom: -200px; left: -160px; width: 500px; height: 500px; pointer-events: none; z-index: 0; background: radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 62%); }

  /* Orbit */
  .orbit-scene { position: relative; width: 340px; height: 340px; margin: 0 auto; }
  .orbit-ring { position: absolute; top: 50%; left: 50%; border-radius: 50%; border-style: solid; transform: translate(-50%, -50%); }
  .orbit-cw  { position: absolute; top: 50%; left: 50%; width: 0; height: 0; animation: orbitCW  32s linear infinite; }
  .orbit-ccw { position: absolute; top: 50%; left: 50%; width: 0; height: 0; animation: orbitCCW 54s linear infinite; }
  .icon-inner {
    position: absolute;
    animation: counterInner 32s linear infinite;
    display: flex; align-items: center; justify-content: center;
    width: 34px; height: 34px; border-radius: 9px;
    background: rgba(13,12,10,0.92); border: 1px solid var(--bdr);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 2px 14px rgba(0,0,0,0.45); cursor: default;
    transition: border-color 0.25s;
  }
  .icon-inner:hover { border-color: var(--bdr-h); }
  .icon-outer {
    position: absolute;
    animation: counterOuter 54s linear infinite;
    display: flex; align-items: center; justify-content: center;
    width: 26px; height: 26px; border-radius: 7px;
    background: rgba(13,12,10,0.8); border: 1px solid rgba(201,169,110,0.07);
    opacity: 0.35;
  }
  .profile-circle {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 88px; height: 88px; border-radius: 50%;
    background: linear-gradient(150deg, #1c1a16, #231f19);
    border: 1px solid rgba(201,169,110,0.2);
    display: flex; align-items: center; justify-content: center; overflow: hidden;
    box-shadow: 0 0 0 7px rgba(201,169,110,0.04), 0 0 50px rgba(201,169,110,0.1), inset 0 1px 0 rgba(255,255,255,0.06);
  }
  .profile-circle img { width: 100%; height: 100%; object-fit: cover; }
  .profile-initials { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; font-style: italic; color: var(--gold); }

  @keyframes orbitCW  { to { transform: rotate(360deg);  } }
  @keyframes orbitCCW { to { transform: rotate(-360deg); } }
  @keyframes counterInner {
    from { transform: translateX(96px)  translateY(-50%) rotate(0deg);    }
    to   { transform: translateX(96px)  translateY(-50%) rotate(-360deg); }
  }
  @keyframes counterOuter {
    from { transform: translateX(145px) translateY(-50%) rotate(0deg);   }
    to   { transform: translateX(145px) translateY(-50%) rotate(360deg); }
  }
  @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

  /* Hero */
  .hero-name { font-family: 'Cormorant Garamond', serif; font-size: clamp(40px,9vw,60px); font-weight: 300; letter-spacing: -0.01em; color: var(--txt); line-height: 1.05; }
  .hero-name em { font-style: italic; color: var(--gold); }
  .hero-role { color: var(--txt-dimmer); font-size: 11px; font-weight: 500; margin-top: 10px; letter-spacing: 0.22em; text-transform: uppercase; }
  .avail-badge { display: inline-flex; align-items: center; gap: 9px; background: var(--green-dim); border: 1px solid var(--green-bdr); border-radius: 20px; padding: 7px 16px; margin-top: 18px; font-size: 11px; font-weight: 500; color: rgba(74,222,128,0.85); letter-spacing: 0.06em; }
  .avail-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); box-shadow: 0 0 7px var(--green); animation: pulse-dot 2.4s ease-in-out infinite; flex-shrink: 0; }

  /* Nav */
  .nav-btn { display: flex; align-items: center; gap: 8px; background: var(--surface); border: 1px solid var(--bdr); color: var(--txt-dim); padding: 11px 20px; border-radius: 50px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; letter-spacing: 0.05em; transition: background 0.25s, border-color 0.25s, color 0.25s, box-shadow 0.25s, transform 0.25s; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); white-space: nowrap; }
  .nav-btn:hover { background: var(--surface-h); border-color: var(--bdr-h); color: var(--gold); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(201,169,110,0.1); }
  .nav-btn.active { background: var(--gold-faint); border-color: rgba(201,169,110,0.28); color: var(--gold); }

  /* Overlay */
  .overlay { position: fixed; inset: 0; background: rgba(8,7,6,0.84); backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px); z-index: 100; display: flex; align-items: flex-end; justify-content: center; padding: 0 10px 10px; }
  @media (min-width: 600px) { .overlay { align-items: center; padding: 24px; } }
  .panel { background: rgba(15,14,12,0.98); border: 1px solid var(--bdr); border-top: 1px solid rgba(201,169,110,0.16); border-radius: 26px 26px 0 0; width: 100%; max-width: 560px; max-height: 84vh; overflow-y: auto; padding: 12px 20px 36px; scrollbar-width: thin; scrollbar-color: rgba(201,169,110,0.16) transparent; }
  @media (min-width: 600px) { .panel { border-radius: 22px; max-height: 88vh; padding: 36px 36px 40px; } }
  .panel::-webkit-scrollbar { width: 3px; }
  .panel::-webkit-scrollbar-thumb { background: rgba(201,169,110,0.16); border-radius: 2px; }
  .drag-handle { width: 34px; height: 3px; border-radius: 2px; background: rgba(240,236,228,0.1); margin: 10px auto 20px; }
  @media (min-width: 600px) { .drag-handle { display: none; } }

  /* Panel */
  .panel-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; }
  .eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-dim); margin-bottom: 7px; }
  .panel-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(22px,5vw,28px); font-weight: 300; font-style: italic; color: var(--txt); letter-spacing: -0.01em; line-height: 1.1; }
  .close-btn { background: var(--surface); border: 1px solid var(--bdr); color: var(--txt-dimmer); width: 30px; height: 30px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; }
  .close-btn:hover { background: rgba(255,75,75,0.08); border-color: rgba(255,75,75,0.2); color: #ff8888; }
  .lead-text { color: var(--txt-dim); font-size: 14px; line-height: 1.74; font-weight: 400; margin-bottom: 22px; }
  .divider { height: 1px; background: var(--bdr); margin: 22px 0; }
  .section-label { font-size: 9.5px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--txt-dimmer); margin-bottom: 12px; }

  /* Project list */
  .project-card { background: var(--surface); border: 1px solid var(--bdr); border-radius: 14px; padding: 17px; cursor: pointer; margin-bottom: 9px; display: flex; align-items: flex-start; gap: 14px; transition: background 0.22s, border-color 0.22s, transform 0.22s; }
  .project-card:hover { background: var(--surface-h); border-color: var(--bdr-h); transform: translateY(-2px); }
  .icon-pill { width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0; background: var(--gold-faint); border: 1px solid var(--bdr); display: flex; align-items: center; justify-content: center; margin-top: 1px; }
  .icon-pill svg { color: var(--gold); }
  .project-name { font-weight: 600; font-size: 14px; color: var(--txt); margin-bottom: 4px; line-height: 1.3; }
  .project-tagline { color: var(--txt-dim); font-size: 12.5px; line-height: 1.5; font-weight: 400; }
  .project-year { font-size: 10px; color: var(--txt-dimmer); font-weight: 500; flex-shrink: 0; margin-left: auto; padding-left: 10px; margin-top: 2px; white-space: nowrap; }

  /* Project detail */
  .back-btn { background: none; border: none; color: var(--txt-dimmer); font-family: 'Outfit', sans-serif; font-size: 12.5px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px; padding: 0; margin-bottom: 22px; transition: color 0.2s; letter-spacing: 0.02em; }
  .back-btn:hover { color: var(--gold); }
  .detail-icon { width: 48px; height: 48px; border-radius: 14px; background: var(--gold-faint); border: 1px solid var(--bdr); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
  .detail-icon svg { color: var(--gold); }
  .detail-title { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 300; color: var(--txt); letter-spacing: -0.01em; margin-bottom: 6px; line-height: 1.15; }
  .detail-year { font-size: 10px; color: var(--txt-dimmer); font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 18px; }
  .detail-desc { color: var(--txt-dim); font-size: 14px; line-height: 1.76; margin-bottom: 20px; font-weight: 400; }
  .tags-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 26px; }
  .tech-tag { background: var(--gold-faint); border: 1px solid var(--bdr); color: var(--gold-dim); padding: 4px 12px; border-radius: 20px; font-size: 10.5px; font-weight: 600; letter-spacing: 0.07em; }
  .cta-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--gold); color: #0d0c0a; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 13px; cursor: pointer; border: none; letter-spacing: 0.05em; transition: filter 0.22s, transform 0.22s, box-shadow 0.22s; box-shadow: 0 4px 24px rgba(201,169,110,0.22); }
  .cta-btn:hover { filter: brightness(1.08); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,169,110,0.3); }
  .cta-ghost { display: inline-flex; align-items: center; gap: 8px; background: var(--surface); border: 1px solid var(--bdr); color: var(--txt-dim); text-decoration: none; padding: 12px 22px; border-radius: 50px; font-family: 'Outfit', sans-serif; font-weight: 500; font-size: 13px; cursor: pointer; letter-spacing: 0.05em; transition: all 0.22s; }
  .cta-ghost:hover { background: var(--surface-h); border-color: var(--bdr-h); color: var(--gold); }
  .no-url { color: var(--txt-dimmer); font-size: 13px; font-style: italic; padding-top: 2px; }

  /* Services & contact */
  .service-card { background: var(--surface); border: 1px solid var(--bdr); border-radius: 14px; padding: 16px; margin-bottom: 9px; display: flex; gap: 14px; align-items: flex-start; }
  .service-title { font-weight: 600; font-size: 13.5px; color: var(--txt); margin-bottom: 4px; }
  .service-desc { color: var(--txt-dim); font-size: 12.5px; line-height: 1.55; font-weight: 400; }
  .contact-link { display: flex; align-items: center; gap: 14px; padding: 13px 16px; background: var(--surface); border: 1px solid var(--bdr); border-radius: 14px; margin-bottom: 9px; text-decoration: none; color: inherit; transition: background 0.22s, border-color 0.22s; }
  .contact-link:hover { background: var(--surface-h); border-color: var(--bdr-h); }
  .contact-label { font-weight: 600; font-size: 13px; color: var(--txt); margin-bottom: 2px; }
  .contact-val { color: var(--txt-dim); font-size: 12px; font-weight: 400; }

  /* About */
  .stat-pill { display: inline-flex; align-items: center; gap: 6px; background: var(--gold-faint); border: 1px solid var(--bdr); color: var(--gold-dim); padding: 5px 13px; border-radius: 20px; font-size: 11.5px; font-weight: 600; letter-spacing: 0.02em; }
  .skill-cat { font-size: 10px; font-weight: 600; color: var(--txt-dimmer); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 5px; }
  .skill-list { color: var(--txt-dim); font-size: 13.5px; line-height: 1.65; font-weight: 400; }
`;

// ─── Component ───────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [panel, setPanel] = useState(null);
  const [project, setProject] = useState(null);

  const open  = (p) => { setPanel(p); setProject(null); };
  const close = () => { setPanel(null); setProject(null); };

  return (
    <>
      <style>{css}</style>
      <div className="bg-grid" />
      <div className="blob1" />
      <div className="blob2" />

      {/* ── HERO ── */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        minHeight: "100vh", padding: "40px 24px 36px", textAlign: "center",
      }}>

        {/* Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="orbit-scene">
            {/* Decorative rings */}
            {[{ r: 88, o: 0.08 }, { r: 122, o: 0.05 }, { r: 158, o: 0.03 }].map(({ r, o }) => (
              <div key={r} className="orbit-ring" style={{ width: r * 2, height: r * 2, borderWidth: "1px", borderColor: `rgba(201,169,110,${o})` }} />
            ))}

            {/* Inner orbit — clockwise */}
            {innerOrbit.map(({ Icon, label }, i) => (
              <div key={label} className="orbit-cw" style={{ animationDelay: `-${(i / innerOrbit.length) * 32}s` }}>
                <div className="icon-inner" style={{ animationDelay: `-${(i / innerOrbit.length) * 32}s` }} title={label}>
                  <Icon size={14} strokeWidth={1.5} color="var(--gold)" />
                </div>
              </div>
            ))}

            {/* Outer orbit — counter-clockwise, faded */}
            {outerOrbit.map(({ Icon, label }, i) => (
              <div key={label} className="orbit-ccw" style={{ animationDelay: `-${(i / outerOrbit.length) * 54}s` }}>
                <div className="icon-outer" style={{ animationDelay: `-${(i / outerOrbit.length) * 54}s` }} title={label}>
                  <Icon size={11} strokeWidth={1.5} color="rgba(201,169,110,0.55)" />
                </div>
              </div>
            ))}

            {/* Profile — swap span for <img src="…" alt="Dylan" /> when ready */}
            <div className="profile-circle">
              <span className="profile-initials">DG</span>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} style={{ marginTop: 28 }}>
          <h1 className="hero-name">Dylan <em>Gorrah</em></h1>
          <p className="hero-role">Frontend Developer · South Africa</p>
        </motion.div>

        {/* Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="avail-badge">
            <div className="avail-dot" />
            Accepting new projects
          </div>
        </motion.div>

        {/* Nav buttons */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ display: "flex", gap: 10, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}
        >
          {[
            { id: "projects", Icon: FolderOpen, label: "Projects" },
            { id: "business", Icon: Briefcase,  label: "Business" },
            { id: "about",    Icon: User,        label: "About Me" },
          ].map(({ id, Icon, label }) => (
            <motion.button
              key={id}
              className={`nav-btn${panel === id ? " active" : ""}`}
              onClick={() => open(id)}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={14} strokeWidth={1.8} />
              {label}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* ── PANELS ── */}
      <AnimatePresence>
        {panel && (
          <motion.div
            className="overlay"
            variants={overlayV} initial="hidden" animate="visible" exit="exit"
            onClick={close}
          >
            <motion.div
              className="panel"
              variants={panelV} initial="hidden" animate="visible" exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="drag-handle" />

              {/* PROJECTS */}
              {panel === "projects" && (
                <AnimatePresence mode="wait">
                  {!project ? (
                    <motion.div key="list"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}
                    >
                      <div className="panel-header">
                        <div>
                          <p className="eyebrow">Portfolio</p>
                          <h2 className="panel-title">Projects</h2>
                        </div>
                        <button className="close-btn" onClick={close}><X size={13} strokeWidth={1.8} /></button>
                      </div>
                      <p className="lead-text">Real sites. Real clients. Tap any to see more.</p>
                      {projects.map((p, i) => (
                        <motion.div
                          key={p.id} className="project-card"
                          variants={cardV} initial="hidden" animate="visible" custom={i}
                          onClick={() => setProject(p)}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="icon-pill"><p.Icon size={16} strokeWidth={1.6} /></div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div className="project-name">{p.name}</div>
                            <div className="project-tagline">{p.tagline}</div>
                          </div>
                          <span className="project-year">{p.year}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div key="detail" variants={detailV} initial="hidden" animate="visible" exit="exit">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <motion.button className="back-btn" onClick={() => setProject(null)} whileTap={{ scale: 0.96 }}>
                          <ArrowLeft size={14} strokeWidth={1.8} /> All projects
                        </motion.button>
                        <button className="close-btn" onClick={close}><X size={13} strokeWidth={1.8} /></button>
                      </div>
                      <div className="detail-icon"><project.Icon size={22} strokeWidth={1.4} /></div>
                      <h2 className="detail-title">{project.name}</h2>
                      <p className="detail-year">{project.year}</p>
                      <p className="detail-desc">{project.description}</p>
                      <div className="tags-row">
                        {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                      </div>
                      {project.url
                        ? <a href={project.url} target="_blank" rel="noopener noreferrer" className="cta-btn">View Live Site <ExternalLink size={13} strokeWidth={2} /></a>
                        : <p className="no-url">{project.year.includes("Progress") ? "Currently in progress" : "Internal project — not publicly hosted"}</p>
                      }
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* BUSINESS */}
              {panel === "business" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                  <div className="panel-header">
                    <div>
                      <p className="eyebrow">My Business</p>
                      <h2 className="panel-title">Digital Tech Authority</h2>
                    </div>
                    <button className="close-btn" onClick={close}><X size={13} strokeWidth={1.8} /></button>
                  </div>
                  <p className="lead-text" style={{ marginTop: 10 }}>
                    I help businesses get online properly. Websites that convert, better search rankings,
                    custom-built systems, or a full app — B2B focused and results driven.
                  </p>
                  <div className="divider" />
                  <p className="section-label">Services</p>
                  {[
                    { Icon: Globe,       title: "Websites",       desc: "Fast, beautiful, built to convert. Mobile-first, always." },
                    { Icon: CheckCircle, title: "SEO",            desc: "Get found on Google. I handle the technical side so you rank." },
                    { Icon: Terminal,    title: "Custom Systems",  desc: "Booking flows, dashboards, approval workflows — whatever you need built." },
                    { Icon: Zap,         title: "App Development", desc: "Web apps and mobile-ready solutions built with modern, maintainable tech." },
                  ].map(({ Icon, title, desc }, i) => (
                    <motion.div key={title} className="service-card" variants={cardV} initial="hidden" animate="visible" custom={i}>
                      <div className="icon-pill" style={{ marginTop: 0 }}>
                        <Icon size={16} strokeWidth={1.6} color="var(--gold)" />
                      </div>
                      <div>
                        <div className="service-title">{title}</div>
                        <div className="service-desc">{desc}</div>
                      </div>
                    </motion.div>
                  ))}
                  <div className="divider" />
                  <p className="section-label">Get in Touch</p>
                  {[
                    { Icon: Phone,    href: "https://wa.me/27677020221",            label: "WhatsApp",  val: "067 702 0221 — quickest response" },
                    { Icon: Mail,     href: "mailto:dylangorrah3@gmail.com",         label: "Email",     val: "dylangorrah3@gmail.com" },
                    { Icon: Github,   href: "https://github.com/dylan-gorrah",       label: "GitHub",    val: "github.com/dylan-gorrah" },
                    { Icon: Linkedin, href: "https://linkedin.com/in/dylan-gorrah",  label: "LinkedIn",  val: "linkedin.com/in/dylan-gorrah" },
                  ].map(({ Icon, href, label, val }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
                      <div className="icon-pill" style={{ flexShrink: 0 }}>
                        <Icon size={15} strokeWidth={1.6} color="var(--gold)" />
                      </div>
                      <div>
                        <div className="contact-label">{label}</div>
                        <div className="contact-val">{val}</div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}

              {/* ABOUT */}
              {panel === "about" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                  <div className="panel-header">
                    <div>
                      <p className="eyebrow">The Developer</p>
                      <h2 className="panel-title">About Me</h2>
                    </div>
                    <button className="close-btn" onClick={close}><X size={13} strokeWidth={1.8} /></button>
                  </div>
                  <p className="lead-text" style={{ marginTop: 10 }}>
                    Hey — I'm Dylan. A frontend developer based in Bloemfontein, South Africa, with 4+ years
                    of experience and 2+ years building production apps that real people use every day —
                    including live e-commerce platforms handling real transactions.
                  </p>
                  <p className="lead-text" style={{ marginTop: -10 }}>
                    I specialise in React and TypeScript and care deeply about how things look and feel,
                    not just whether they work. I also lecture Software Development at Rosebank College,
                    teaching Java, C#, and real-world dev workflows to diploma students.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                    {[
                      { Icon: CheckCircle, label: "Best Tutor Award 2025" },
                      { label: "4+ Years Experience" },
                      { label: "Open to Relocate" },
                    ].map(({ Icon, label }) => (
                      <span key={label} className="stat-pill">
                        {Icon && <Icon size={12} strokeWidth={2} />}
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="divider" />
                  <p className="section-label">Skills</p>
                  {[
                    { cat: "Frontend", list: "React · TypeScript · Next.js · Tailwind CSS · Framer Motion · shadcn/ui · Vite" },
                    { cat: "Backend",  list: "Node.js · C# (.NET) · Java · REST APIs · ASP.NET Core" },
                    { cat: "Data",     list: "MySQL · SQLite · Supabase · Entity Framework" },
                    { cat: "Tooling",  list: "Git · SEO · Google Maps API · WhatsApp Business API" },
                  ].map((s, i) => (
                    <motion.div key={s.cat} style={{ marginBottom: 14 }} variants={cardV} initial="hidden" animate="visible" custom={i}>
                      <div className="skill-cat">{s.cat}</div>
                      <div className="skill-list">{s.list}</div>
                    </motion.div>
                  ))}
                  <div className="divider" />
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <a href="https://github.com/dylan-gorrah" target="_blank" rel="noopener" className="cta-btn">
                      <Github size={14} strokeWidth={2} /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/dylan-gorrah" target="_blank" rel="noopener" className="cta-ghost">
                      <Linkedin size={14} strokeWidth={1.8} /> LinkedIn
                    </a>
                  </div>
                </motion.div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
