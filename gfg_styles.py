import re
import os

css_path = 'styles.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update variables for Green/Blue theme
vars_replacement = """:root {
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --bg-card-hover: #f1f5f9;
    --bg-glass: #ffffff;
    --border: #e2e8f0;
    --border-hover: #cbd5e1;
    --text-primary: #1e293b;
    --text-secondary: #475569;
    --text-muted: #64748b;
    --accent: #15803d;     /* GfG Green */
    --accent-light: #16a34a;
    --accent-glow: rgba(21, 128, 61, 0.1);
    --banner-bg: #5a7bb5;  /* GfG Blue */
    --success: #15803d;
    --warning: #b45309;
    --danger: #dc2626;
    --gradient-hero: #5a7bb5;
    --gradient-card: transparent;
    --shadow-card: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-glow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --radius: 8px;
    --radius-sm: 4px;
    --radius-xs: 2px;
    --transition: all 0.2s ease-in-out;
}"""
css = re.sub(r':root\s*\{[^}]*\}', vars_replacement, css)


# Top Nav
new_header = """header.top-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: #ffffff;
    border-bottom: 1px solid var(--border);
    padding: 0 24px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.desktop-nav {
    display: flex;
    gap: 24px;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
}

.nav-link:hover {
    color: var(--accent);
}

.caret {
    font-size: 10px;
    color: var(--text-muted);
}

.icon-btn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: var(--text-secondary);
    position: relative;
}

.notification-dot {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 6px;
    height: 6px;
    background: var(--danger);
    border-radius: 50%;
}

.btn-signin {
    background: #1e293b;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: var(--radius-sm);
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
}"""

# Hero Banner
new_hero = """.hero-banner {
    background: var(--banner-bg);
    color: white;
    padding: 40px 24px 0;
    text-align: left;
    position: relative;
    margin-bottom: 60px; /* Space for absolute search bar */
}

.hero-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
}

.hero-content h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
    background: none;
    -webkit-text-fill-color: white;
}

.hero-content p {
    font-size: 15px;
    opacity: 0.9;
    margin-bottom: 8px;
}

.contact-info {
    font-size: 13px;
    opacity: 0.8;
}

.hero-offer {
    text-align: center;
}

.offer-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
}

.countdown {
    display: flex;
    gap: 8px;
    align-items: center;
    font-weight: 600;
}

.time-block {
    background: rgba(0,0,0,0.3);
    padding: 6px 10px;
    border-radius: var(--radius-sm);
    font-size: 14px;
}

.banner-search-container {
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 800px;
    z-index: 10;
}

.search-bar {
    display: flex;
    background: white;
    border-radius: var(--radius-sm);
    padding: 4px;
    box-shadow: var(--shadow-card);
}

.search-bar input {
    flex: 1;
    border: none;
    padding: 12px 16px;
    font-size: 15px;
    outline: none;
    background: transparent;
    color: var(--text-primary);
}

.search-btn {
    background: var(--accent);
    color: white;
    border: none;
    padding: 0 24px;
    border-radius: var(--radius-sm);
    font-weight: 600;
    cursor: pointer;
}

.main-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px 60px;
}

.view-all-link {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    text-decoration: none;
}"""

# Inject new CSS
css += "\n\n/* ─── NEW GFG LAYOUT STYLES ─── */\n" + new_header + "\n\n" + new_hero

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
print("CSS Updated")
