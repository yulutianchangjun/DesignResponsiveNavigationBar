import { useState, type ReactNode } from "react";

type IconName =
  | "activity" | "arrow" | "blog" | "camera" | "check" | "chevron"
  | "chip" | "cloud" | "code" | "device" | "github" | "grid" | "key"
  | "lock" | "logout" | "mail" | "menu" | "moon" | "more" | "profile"
  | "refresh" | "search" | "sensor" | "settings" | "shield" | "wifi" | "x";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    activity: <><path d="M3 12h4l2-7 4 14 2-7h6" /></>,
    arrow: <><path d="m9 18 6-6-6-6" /></>,
    blog: <><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
    camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    chevron: <><path d="m7 10 5 5 5-5" /></>,
    chip: <><rect x="6" y="6" width="12" height="12" rx="1" /><path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4M9 9h6v6H9z" /></>,
    cloud: <><path d="M7 18h11a4 4 0 0 0 .5-7.97A7 7 0 0 0 5.2 8.2 5 5 0 0 0 7 18Z" /></>,
    code: <><path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12" /></>,
    device: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 7h6M9 11h6M10 17h4" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.1.5S18 0 15 1.8a13.4 13.4 0 0 0-7 0C5 0 3.9.5 3.9.5A5.1 5.1 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></>,
    grid: <><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><rect x="14" y="14" width="6" height="6" /></>,
    key: <><circle cx="8" cy="15" r="4" /><path d="m11 12 9-9m-4 4 3 3" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    logout: <><path d="M10 17l5-5-5-5m5 5H3m11-9h6v18h-6" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    moon: <><path d="M21 13a9 9 0 1 1-10-10 7 7 0 0 0 10 10Z" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></>,
    profile: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    refresh: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M18.5 9A7 7 0 0 0 6 6.5L4 9m2 6a7 7 0 0 0 12 2l2-2" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    sensor: <><circle cx="12" cy="12" r="2" /><path d="M8.5 8.5a5 5 0 0 0 0 7m7-7a5 5 0 0 1 0 7M5.5 5.5a9 9 0 0 0 0 13m13-13a9 9 0 0 1 0 13" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    wifi: <><path d="M5 12.5a10 10 0 0 1 14 0M8 16a6 6 0 0 1 8 0M11 19.5a2 2 0 0 1 2 0" /></>,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const announcements = [
  { tag: "UPDATE", title: "Edge runtime v4.8 is now live", time: "12 min ago", tone: "cyan" },
  { tag: "NOTICE", title: "EU cluster maintenance window", time: "Today, 02:00 UTC", tone: "purple" },
  { tag: "SYSTEM", title: "New API rate limits published", time: "Yesterday", tone: "blue" },
  { tag: "SECURITY", title: "Rotate legacy access tokens", time: "Mar 18", tone: "orange" },
];

function Logo() {
  return <button className="brand" onClick={() => location.reload()} aria-label="Nexgrid home">
    <span className="brand-mark"><span /></span>
    <span className="brand-name">NEX<span>GRID</span></span>
    <i className="pixel-badge">PX</i>
  </button>;
}

function Header({ page, setPage, authed, setAuthed, minimalist, setMinimalist }: { page: string; setPage: (p: string) => void; authed: boolean; setAuthed: (v: boolean) => void; minimalist: boolean; setMinimalist: (v: boolean) => void }) {
  const [mobile, setMobile] = useState(false);
  const [language, setLanguage] = useState<"zh" | "en">("en");
  return <header className="header">
    <div className="header-inner">
      <Logo />
      <nav className={mobile ? "main-nav open" : "main-nav"}>
        <button className={page === "home" ? "nav-item active" : "nav-item"} onClick={() => { setPage("home"); setMobile(false); }}>Home</button>
        <div className="nav-group">
          <div className="nav-item service-label">Services <Icon name="chevron" size={14} /></div>
          <div className="dropdown services-menu">
            <span className="dropdown-kicker">EXPLORE SERVICES</span>
            <button onClick={() => setPage("devices")}><Icon name="device" /><span><b>My Devices</b><small>Manage your connected fleet</small></span><Icon name="arrow" size={14} /></button>
            <button><Icon name="blog" /><span><b>Tutorials</b><small>Build your first integration</small></span><Icon name="arrow" size={14} /></button>
            <button><Icon name="key" /><span><b>Purchase Services</b><small>Scale your infrastructure</small></span><Icon name="arrow" size={14} /></button>
          </div>
        </div>
      </nav>
      <div className="header-actions">
        <button className="icon-btn tip" data-tip="GitHub repository" aria-label="GitHub"><Icon name="github" /></button>
        <button className="icon-btn tip" data-tip="Read our blog" aria-label="Blog"><Icon name="blog" /></button>
        <button className={`language-switch ${language}`} onClick={() => setLanguage(language === "en" ? "zh" : "en")} aria-label={`Switch language to ${language === "en" ? "Chinese" : "English"}`}>
          <i />
          <span>中</span>
          <span>EN</span>
        </button>
        <div className="profile-group">
          <button className="avatar" aria-label="Profile menu">{authed ? "AD" : <Icon name="profile" />}</button>
          <div className="dropdown profile-menu">
            <div className="profile-head"><span className="avatar small">{authed ? "AD" : <Icon name="profile" size={16} />}</span><span><b>{authed ? "Admin Operator" : "Guest User"}</b><small>{authed ? "admin@nexgrid.io" : "Not signed in"}</small></span></div>
            <button><Icon name="profile" /><span>{language === "zh" ? "个人信息" : "Profile"}<small>{language === "zh" ? "Profile" : "个人信息"}</small></span></button>
            <button onClick={() => setAuthed(!authed)}><Icon name="logout" /><span>{language === "zh" ? (authed ? "退出登录" : "立即登录") : (authed ? "Log Out" : "Log In")}<small>{language === "zh" ? (authed ? "Log Out" : "Log In") : (authed ? "退出登录" : "立即登录")}</small></span></button>
            <button className="theme-row" onClick={() => setMinimalist(!minimalist)}><Icon name="moon" /><span>{minimalist ? "Minimalist Black" : "Cyber Pixel"}<small>{language === "zh" ? "风格切换" : "Theme / 风格切换"}</small></span><span className={`toggle ${minimalist ? "minimal" : ""}`}><i /></span></button>
          </div>
        </div>
        <button className="mobile-toggle" onClick={() => setMobile(!mobile)} aria-label="Toggle navigation"><Icon name={mobile ? "x" : "menu"} /></button>
      </div>
    </div>
  </header>;
}

function Announcements() {
  return <aside className="announce panel">
    <div className="panel-title"><div><span className="eyebrow">NETWORK FEED</span><h2>Site Announcements</h2></div><button>View all <Icon name="arrow" size={13} /></button></div>
    <div className="timeline">
      {announcements.map((item, i) => <div className="timeline-item" key={item.title}>
        <span className={`timeline-dot ${item.tone}`} />
        <div><div className="tag-row"><span className={`tag ${item.tone}`}>{item.tag}</span>{i === 0 && <span className="live-mark">PINNED</span>}</div><h3>{item.title}</h3><time>{item.time}</time></div>
      </div>)}
    </div>
    <div className="network-status"><span><i /> All systems operational</span><b>99.99%</b></div>
  </aside>;
}

function LoginHero({ onLogin }: { onLogin: () => void }) {
  return <section className="login-hero panel">
    <div className="hero-copy">
      <span className="eyebrow"><i /> INDUSTRIAL IOT CLOUD / EST. 2024</span>
      <h1>CONTROL THE <em>PHYSICAL</em><br />WORLD. IN REAL TIME.</h1>
      <p>Connect, observe and command your entire device fleet from one secure, low-latency platform.</p>
      <div className="hero-stats"><span><b>18.4M</b><small>MESSAGES / DAY</small></span><span><b>42ms</b><small>AVG. LATENCY</small></span><span><b>99.99%</b><small>UPTIME SLA</small></span></div>
    </div>
    <form className="login-card" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
      <div className="login-title"><span><Icon name="key" /></span><div><h2>Quick Login</h2><p>Enter your command center</p></div></div>
      <label><span>EMAIL OR USERNAME</span><div className="input-shell"><Icon name="mail" size={16} /><input placeholder="operator@nexgrid.io" /></div></label>
      <label><span>PASSWORD</span><div className="input-shell"><Icon name="lock" size={16} /><input type="password" placeholder="••••••••••••" /></div></label>
      <div className="login-options"><label className="check"><input type="checkbox" defaultChecked /><i><Icon name="check" size={11} /></i> Remember me</label><button type="button">Forgot password?</button></div>
      <button className="primary-btn" type="submit"><span>SIGN IN TO CONSOLE</span><Icon name="arrow" /></button>
      <div className="divider"><span>OR CONTINUE WITH</span></div>
      <div className="oauth"><button type="button"><Icon name="github" /> GitHub</button><button type="button"><span className="google">G</span> Google</button></div>
      <p className="create-account">New to Nexgrid? <button type="button">Create an account</button></p>
    </form>
  </section>;
}

const features = [
  { icon: "sensor" as IconName, index: "01", title: "Universal IoT Fabric", text: "Provision any protocol or hardware through one unified device layer.", meta: "MQTT · COAP · HTTP" },
  { icon: "cloud" as IconName, index: "02", title: "Cloud Telemetry", text: "Stream, transform and store billions of data points with zero ops.", meta: "18.4M EVENTS / DAY" },
  { icon: "activity" as IconName, index: "03", title: "Low-Latency Control", text: "Issue secure commands across the globe with sub-50ms response.", meta: "42MS AVG. LATENCY" },
  { icon: "code" as IconName, index: "04", title: "Built for Developers", text: "Ship faster with clean APIs, webhooks and first-class SDK support.", meta: "8 CLIENT SDKS" },
];

function Features() {
  return <section className="features-section">
    <div className="section-head"><div><span className="eyebrow">PLATFORM CAPABILITIES</span><h2>Infrastructure that moves at machine speed.</h2></div><p>From first prototype to millions of endpoints, Nexgrid gives your team a resilient foundation.</p></div>
    <div className="features-grid">{features.map((f) => <article className="feature-card" key={f.title}>
      <span className="card-index">/{f.index}</span><div className="feature-icon"><Icon name={f.icon} size={25} /></div><h3>{f.title}</h3><p>{f.text}</p><span className="feature-meta"><i /> {f.meta}</span>
    </article>)}</div>
  </section>;
}

function Sparkline({ color = "cyan" }: { color?: string }) {
  return <svg className={`spark ${color}`} viewBox="0 0 120 36" preserveAspectRatio="none"><path d="M0 28 12 23 24 26 36 13 48 18 60 8 72 14 84 5 96 12 108 7 120 9" /></svg>;
}

function AuthDashboard() {
  const kpis = [
    { label: "TOTAL DEVICES", value: "28", delta: "+3 this month", icon: "device" as IconName },
    { label: "MESSAGE RATE", value: "2.4k", unit: "/sec", delta: "+12.8%", icon: "activity" as IconName },
    { label: "BANDWIDTH", value: "84.2", unit: "GB", delta: "61% quota", icon: "wifi" as IconName },
    { label: "UPTIME", value: "99.99", unit: "%", delta: "Last 30 days", icon: "shield" as IconName },
  ];
  return <>
    <section className="profile-banner panel">
      <div className="user-summary"><span className="big-avatar">AD<i /></span><div><span className="eyebrow">OPERATOR SESSION / SECURE</span><h1>Welcome back, Admin</h1><p>Infrastructure Operator <b>PRO TIER</b></p></div></div>
      <div className="summary-data"><div><span>DEVICE NETWORK</span><b><em>24</em> / 28 Active</b><small><i /> 85.7% availability</small></div><div><span>ACCOUNT SECURITY</span><b><Icon name="shield" /> Protected</b><small>MFA · SSO Enabled</small></div></div>
    </section>
    <section className="dashboard">
      <div className="dashboard-head"><div><span className="eyebrow">LIVE COMMAND CENTER</span><h2>Network overview</h2></div><div className="live-pill"><i /> LIVE DATA <span>UTC 14:32:08</span></div></div>
      <div className="kpi-grid">{kpis.map((k, i) => <article className="kpi panel" key={k.label}><div><span className="kpi-icon"><Icon name={k.icon} /></span><span className="kpi-label">{k.label}</span></div><b>{k.value}<small>{k.unit}</small></b><div><span>{k.delta}</span><Sparkline color={i === 2 ? "purple" : "cyan"} /></div></article>)}</div>
      <div className="telemetry panel">
        <div className="chart-head"><div><span className="eyebrow">REAL-TIME TELEMETRY</span><h3>System throughput</h3></div><div className="legend"><span><i className="cpu" />CPU</span><span><i className="memory" />MEMORY</span><span><i className="data" />DATA</span></div></div>
        <div className="chart-wrap">
          <div className="y-axis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
          <svg className="line-chart" viewBox="0 0 800 260" preserveAspectRatio="none">
            <defs><linearGradient id="fillCyan" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#00e5ff" stopOpacity=".2" /><stop offset="1" stopColor="#00e5ff" stopOpacity="0" /></linearGradient></defs>
            <path className="area" d="M0 190 C60 170 80 200 140 145S220 120 270 150 350 105 410 115 490 60 550 95 640 45 700 70 760 40 800 52V260H0Z" />
            <path className="line cpu" d="M0 190 C60 170 80 200 140 145S220 120 270 150 350 105 410 115 490 60 550 95 640 45 700 70 760 40 800 52" />
            <path className="line memory" d="M0 130 C70 100 110 135 170 112S270 125 330 90 440 135 510 115 610 125 680 88 750 105 800 75" />
            <path className="line data" d="M0 220 C70 210 110 185 160 204S260 165 320 180 400 140 470 158 570 112 630 135 720 105 800 118" />
          </svg>
          <div className="x-axis"><span>14:20</span><span>14:23</span><span>14:26</span><span>14:29</span><span>14:32</span></div>
        </div>
      </div>
      <div className="dashboard-bottom">
        <article className="distribution panel"><div className="chart-head"><div><span className="eyebrow">FLEET ANALYSIS</span><h3>Device distribution</h3></div><button><Icon name="more" /></button></div><div className="donut-area"><div className="donut"><div><b>28</b><span>TOTAL</span></div></div><div className="donut-legend"><span><i className="sensors" />Sensors <b>12</b></span><span><i className="gateways" />Gateways <b>7</b></span><span><i className="relays" />Relays <b>6</b></span><span><i className="cameras" />Cameras <b>3</b></span></div></div></article>
        <article className="event-log panel"><div className="chart-head"><div><span className="eyebrow">STREAM / EVENTS</span><h3>Live event log</h3></div><span className="live-pill"><i /> STREAMING</span></div><div className="terminal">
          <p><time>14:32:08.448</time><b className="ok">INFO</b><span>gateway-eu-04</span> heartbeat_received</p>
          <p><time>14:32:07.182</time><b className="cyan-text">DATA</b><span>temp-sensor-18</span> value=22.4°C</p>
          <p><time>14:32:06.921</time><b className="warn">WARN</b><span>relay-west-02</span> latency=86ms</p>
          <p><time>14:32:05.104</time><b className="ok">INFO</b><span>camera-lobby</span> state=online</p>
          <p><time>14:32:03.772</time><b className="cyan-text">DATA</b><span>air-quality-07</span> co2=412ppm</p>
        </div></article>
      </div>
    </section>
  </>;
}

const devices = [
  { name: "Factory Gateway A1", model: "NX-GW-420", ip: "10.24.8.120", type: "gateway", online: true, active: "2 sec ago" },
  { name: "Air Quality Sensor", model: "ENV-AQ-08", ip: "10.24.8.086", type: "sensor", online: true, active: "8 sec ago" },
  { name: "Main Floor Relay", model: "RL-880-PRO", ip: "10.24.9.042", type: "relay", online: true, active: "14 sec ago" },
  { name: "Loading Bay Camera", model: "CAM-X4-2K", ip: "10.24.9.105", type: "camera", online: false, active: "3 hr ago" },
  { name: "Cold Storage Temp", model: "ENV-TMP-2", ip: "10.24.8.214", type: "sensor", online: true, active: "31 sec ago" },
  { name: "Warehouse Gateway", model: "NX-GW-320", ip: "10.24.10.010", type: "gateway", online: false, active: "2 days ago" },
];

function HardwareArt({ type }: { type: string }) {
  return <div className={`hardware ${type}`}><div className="device-shadow" /><div className="device-body"><span className="device-light" /><i /><i /><i />{type === "camera" && <b />}</div><span className="art-code">NX/{type.toUpperCase()}</span></div>;
}

function DevicesPage() {
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All Devices");
  const categories = [["All Devices", "28"], ["Environmental Sensors", "12"], ["Gateways", "7"], ["Smart Relays", "6"], ["Cameras", "3"]];
  const shown = devices.filter((d) => status === "All" || (status === "Online" ? d.online : !d.online));
  return <main className="devices-layout">
    <aside className="category-sidebar panel">
      <div><span className="eyebrow">DEVICE LIBRARY</span><h2>Categories</h2></div>
      <div className="input-shell"><Icon name="search" size={16} /><input placeholder="Search device types..." /></div>
      <div className="category-list">{categories.map(([name, count], i) => <button className={category === name ? "active" : ""} onClick={() => setCategory(name)} key={name}><span><Icon name={i === 0 ? "grid" : i === 1 ? "sensor" : i === 2 ? "wifi" : i === 3 ? "chip" : "camera"} />{name}</span><b>{count}</b></button>)}</div>
      <div className="category-pager"><button disabled><Icon name="arrow" /></button><span>01 / 01</span><button disabled><Icon name="arrow" /></button></div>
      <div className="sidebar-note"><Icon name="activity" /><div><span>FLEET HEALTH</span><b>24 devices online</b><small>4 require attention</small></div></div>
    </aside>
    <section className="device-content">
      <div className="device-topbar">
        <div><div className="breadcrumb"><span>Console</span><Icon name="arrow" size={12} /><b>My Devices</b></div><h1>Device Fleet <span>28 TOTAL</span></h1></div>
        <div className="device-actions"><div className="input-shell device-search"><Icon name="search" size={16} /><input placeholder="Search name or IP..." /></div><div className="status-filter">{["All", "Online", "Offline"].map((s) => <button className={status === s ? "active" : ""} onClick={() => setStatus(s)} key={s}>{s}</button>)}</div><button className="primary-btn add-btn">+ ADD DEVICE</button></div>
      </div>
      <div className="fleet-meta"><span>SHOWING <b>{shown.length}</b> OF 28 DEVICES</span><button>Last active <Icon name="chevron" size={13} /></button></div>
      <div className="device-grid">{shown.map((d) => <article className={`device-card panel ${!d.online ? "offline" : ""}`} key={d.name}>
        <div className="device-visual"><HardwareArt type={d.type} /><span className={`status ${d.online ? "online" : "offline"}`}><i />{d.online ? "ONLINE" : "OFFLINE"}</span></div>
        <div className="device-info"><span className="device-type">{d.type.toUpperCase()} / NODE</span><h3>{d.name}</h3><p>{d.model}</p><div className="device-spec"><span>IP ADDRESS <b>{d.ip}</b></span><span>LAST ACTIVE <b>{d.active}</b></span></div></div>
        <div className="device-footer"><button><Icon name="settings" size={15} /> Configure</button><button><Icon name="refresh" size={15} /> Restart</button><button aria-label="More"><Icon name="more" /></button></div>
      </article>)}</div>
      <div className="pagination"><span>Showing 1–{shown.length} of 28 devices</span><div><button disabled>PREV</button><button className="active">1</button><button>2</button><button>3</button><span>…</span><button>5</button><button>NEXT</button></div><label>JUMP TO <input defaultValue="1" /></label></div>
    </section>
  </main>;
}

export default function App() {
  const [page, setPage] = useState("home");
  const [authed, setAuthed] = useState(false);
  const [minimalist, setMinimalist] = useState(false);
  return <div className={`app ${minimalist ? "minimalist" : "cyber"}`}>
    <Header page={page} setPage={setPage} authed={authed} setAuthed={setAuthed} minimalist={minimalist} setMinimalist={setMinimalist} />
    {page === "devices" ? <DevicesPage /> : <main className="home-layout"><div className="main-column">{authed ? <AuthDashboard /> : <><LoginHero onLogin={() => setAuthed(true)} /><Features /></>}</div><Announcements /></main>}
    <footer><Logo /><span>© 2025 NEXGRID SYSTEMS</span><span>STATUS: <b>OPERATIONAL</b></span></footer>
  </div>;
}
