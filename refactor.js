const fs = require('fs');

try {
    let css = fs.readFileSync('styles.css', 'utf-8');

    function replaceClass(cssText, className, newContent) {
        const regex = new RegExp('\\\\.' + className.replace(/\\./g, '\\\\.') + '\\\\s*\\\\{[^}]*\\\\}');
        return cssText.replace(regex, '.' + className + ' {\\n' + newContent + '\\n}');
    }

    // 1. Root variables
    css = css.replace(/:root\\s*\\{[^}]*\\}/, ":root {\\n" +
        "    --bg-primary: #f8fafc;\\n" +
        "    --bg-secondary: #ffffff;\\n" +
        "    --bg-card: #ffffff;\\n" +
        "    --bg-card-hover: #f1f5f9;\\n" +
        "    --bg-glass: #f1f5f9;\\n" +
        "    --border: #e2e8f0;\\n" +
        "    --border-hover: #cbd5e1;\\n" +
        "    --text-primary: #0f172a;\\n" +
        "    --text-secondary: #334155;\\n" +
        "    --text-muted: #64748b;\\n" +
        "    --accent: #1e3a8a;\\n" +
        "    --accent-light: #2563eb;\\n" +
        "    --accent-glow: rgba(30, 58, 138, 0.1);\\n" +
        "    --success: #15803d;\\n" +
        "    --warning: #b45309;\\n" +
        "    --danger: #b91c1c;\\n" +
        "    --gradient-hero: #f8fafc;\\n" +
        "    --gradient-card: #ffffff;\\n" +
        "    --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\\n" +
        "    --shadow-glow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\\n" +
        "    --radius: 8px;\\n" +
        "    --radius-sm: 4px;\\n" +
        "    --radius-xs: 2px;\\n" +
        "    --transition: all 0.2s ease-in-out;\\n" +
        "}");

    // 2. Class Replacements
    css = replaceClass(css, 'logo-icon', "    width: 40px;\\n    height: 40px;\\n    background: var(--accent);\\n    border-radius: var(--radius-sm);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 20px;\\n    color: #fff;\\n    box-shadow: var(--shadow-card);");

    css = replaceClass(css, 'logo-text', "    font-size: 18px;\\n    font-weight: 800;\\n    color: var(--text-primary);\\n    line-height: 1.2;");

    css = replaceClass(css, 'logo-sub', "    font-size: 10px;\\n    color: var(--text-muted);\\n    font-weight: 600;\\n    letter-spacing: 0.5px;\\n    display: block;");

    css = replaceClass(css, 'hero', "    padding: 56px 24px 40px;\\n    text-align: center;\\n    position: relative;\\n    background: var(--bg-secondary);\\n    border-bottom: 1px solid var(--border);\\n    margin-bottom: 32px;");

    css = css.replace(/\\.hero::before\\s*\\{[^}]*\\}/, ".hero::before {\\n    display: none;\\n}");
    css = css.replace(/\\.hero h1\\s*\\{[^}]*\\}/, ".hero h1 {\\n    font-size: clamp(28px, 5vw, 52px);\\n    font-weight: 800;\\n    line-height: 1.15;\\n    margin-bottom: 16px;\\n    color: var(--text-primary);\\n}");

    css = css.replace(/\\.job-card::before\\s*\\{[^}]*\\}/, '');
    css = css.replace(/\\.job-card:hover::before\\s*\\{[^}]*\\}/, '');

    css = replaceClass(css, 'job-card:hover', "    border-color: var(--border-hover);\\n    transform: translateY(-2px);\\n    box-shadow: var(--shadow-glow);");

    css = replaceClass(css, 'btn-view-details', "    width: 100%;\\n    padding: 11px;\\n    background: var(--bg-secondary);\\n    border: 1px solid var(--border);\\n    border-radius: var(--radius-sm);\\n    color: var(--text-primary);\\n    font-family: 'Inter', sans-serif;\\n    font-size: 14px;\\n    font-weight: 600;\\n    cursor: pointer;\\n    transition: var(--transition);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 6px;");

    css = replaceClass(css, 'btn-view-details:hover', "    background: var(--bg-glass);\\n    border-color: var(--border-hover);");

    css = replaceClass(css, 'tag', "    padding: 3px 10px;\\n    border-radius: var(--radius-xs);\\n    font-size: 11px;\\n    font-weight: 600;\\n    letter-spacing: 0.3px;");

    css = replaceClass(css, 'ai-chat-fab', "    position: fixed;\\n    bottom: 24px;\\n    right: 24px;\\n    width: 60px;\\n    height: 60px;\\n    background: var(--accent);\\n    border-radius: 50%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    box-shadow: var(--shadow-glow);\\n    cursor: pointer;\\n    z-index: 900;\\n    transition: transform 0.2s;");

    css = replaceClass(css, 'ai-avatar', "    width: 40px;\\n    height: 40px;\\n    background: var(--accent);\\n    border-radius: var(--radius-sm);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 20px;\\n    color: #fff;");

    css = replaceClass(css, 'ai-sent', "    align-self: flex-end;\\n    background: var(--accent);\\n    color: #ffffff;\\n    padding: 12px 16px;\\n    font-size: 14px;\\n    line-height: 1.5;\\n    border-radius: 18px;\\n    border-bottom-right-radius: 4px;");

    css = replaceClass(css, 'modal-icon', "    width: 60px;\\n    height: 60px;\\n    border-radius: var(--radius-sm);\\n    background: var(--bg-glass);\\n    border: 1px solid var(--border);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 30px;\\n    flex-shrink: 0;");

    css = replaceClass(css, 'salary-hero', "    background: var(--bg-glass);\\n    border: 1px solid var(--border);\\n    border-radius: var(--radius);\\n    padding: 24px;\\n    text-align: center;\\n    margin-bottom: 20px;");

    css = replaceClass(css, 'salary-amount', "    font-size: 32px;\\n    font-weight: 800;\\n    color: var(--text-primary);\\n    margin-bottom: 6px;");

    css = replaceClass(css, 'stage-number', "    width: 32px;\\n    height: 32px;\\n    background: var(--accent);\\n    color: #fff;\\n    border-radius: var(--radius-xs);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 13px;\\n    font-weight: 700;\\n    flex-shrink: 0;");

    css = replaceClass(css, 'cat-btn.active', "    background: var(--accent);\\n    border-color: var(--accent);\\n    color: #fff;\\n    box-shadow: var(--shadow-card);");

    css = replaceClass(css, 'suggestion-badge', "    font-size: 11px;\\n    padding: 2px 8px;\\n    border-radius: var(--radius-xs);\\n    background: var(--bg-glass);\\n    color: var(--text-secondary);\\n    border: 1px solid var(--border);\\n    font-weight: 600;\\n    flex-shrink: 0;");

    // Convert all 50px borders to var(--radius-sm);
    css = css.replace(/border-radius:\\s*50px;/g, "border-radius: var(--radius-sm);");

    fs.writeFileSync('styles.css', css);
    console.log('Update Complete');
} catch (e) {
    console.error(e);
}
