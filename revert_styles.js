const fs = require('fs');

try {
    let css = fs.readFileSync('styles.css', 'utf-8');

    // 1. Remove the injected GFG CSS at the bottom
    const gfgIndex = css.indexOf('/* ─── NEW GFG LAYOUT STYLES ─── */');
    if (gfgIndex !== -1) {
        css = css.substring(0, gfgIndex);
    }

    // 2. Restore Root Variables
    const vars_replacement = `:root {
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --bg-card-hover: #f1f5f9;
    --bg-glass: #f1f5f9;
    --border: #e2e8f0;
    --border-hover: #cbd5e1;
    --text-primary: #0f172a;
    --text-secondary: #334155;
    --text-muted: #64748b;
    --accent: #1e3a8a;
    --accent-light: #2563eb;
    --accent-glow: rgba(30, 58, 138, 0.1);
    --success: #15803d;
    --warning: #b45309;
    --danger: #b91c1c;
    --gradient-hero: #f8fafc;
    --gradient-card: #ffffff;
    --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-glow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --radius: 8px;
    --radius-sm: 4px;
    --radius-xs: 2px;
    --transition: all 0.2s ease-in-out;
}`;
    css = css.replace(/:root\s*\{[^}]*\}/, vars_replacement);

    // 3. Append the missing classes that were removed by the regex
    // They are safe to append since they were completely removed.
    const missingClasses = `

/* RESTORED BY REVERT SCRIPT */
.hero {
    padding: 56px 24px 40px;
    text-align: center;
    position: relative;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
    margin-bottom: 32px;
}

.hero h1 {
    font-size: clamp(28px, 5vw, 52px);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 16px;
    color: var(--text-primary);
}

.hero p {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto 32px;
    line-height: 1.6;
}

.job-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 24px;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

/* Ensure no hero::before since it was hidden in refactor */
.hero::before {
    display: none;
}
`;

    css += missingClasses;

    fs.writeFileSync('styles.css', css);
    console.log('Revert Complete');
} catch (e) {
    console.error(e);
}
