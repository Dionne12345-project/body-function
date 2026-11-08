// Build static HTML from Pages CMS JSON, keeping the original HTML structure.
const fs = require('fs');
const path = require('path');
const root = __dirname;
const out = path.join(root, 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
function copy(src, dst) { const stat = fs.statSync(src); if (stat.isDirectory()) { fs.mkdirSync(dst, { recursive: true }); for (const f of fs.readdirSync(src)) copy(path.join(src, f), path.join(dst, f)); } else { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(src, dst); } }
for (const file of fs.readdirSync(root)) { if (['.git', '.netlify', 'node_modules', 'dist', 'templates', 'content', '.pages.yml', 'build.js', 'netlify.toml', 'README.md', '.gitignore'].includes(file)) continue; copy(path.join(root, file), path.join(out, file)); }
copy(path.join(root, 'content'), path.join(out, 'content'));
const values = {};
for (const file of fs.readdirSync(path.join(root, 'content'))) { if (!file.endsWith('.json')) continue; const group = file.slice(0, -5); const data = JSON.parse(fs.readFileSync(path.join(root, 'content', file), 'utf8')); if (Array.isArray(data.items)) { for (const item of data.items) { values[group + ':' + item.id] = String(item.value ?? ''); } } else { for (const [id, value] of Object.entries(data)) { values[group + ':' + id] = String(value ?? ''); } } }
function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
for (const file of fs.readdirSync(path.join(root, 'templates'))) { let page = fs.readFileSync(path.join(root, 'templates', file), 'utf8'); page = page.replace(/\{\{CMS:([a-z0-9_]+):([a-z0-9_]+)\}\}/g, (whole, group, id) => { const key = group + ':' + id; if (!(key in values)) throw new Error('Missing CMS content: ' + key); return escapeHtml(values[key]); }); fs.writeFileSync(path.join(out, file), page); }
console.log('Built Body Function website into dist/');
