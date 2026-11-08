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

// Dynamic blog pages from Pages CMS article JSON.
const articleDir = path.join(root, 'content', 'articles');
const articleOut = path.join(out, 'articles');
fs.mkdirSync(articleOut, {recursive:true});
const articleFiles = fs.existsSync(articleDir) ? fs.readdirSync(articleDir).filter(f => f.endsWith('.json')).sort() : [];
const safe = v => escapeHtml(String(v ?? ''));
const safeUrl = v => { const s = String(v || ''); return /^(https?:\/\/|\/images\/|images\/)/i.test(s) ? safe(s) : ''; };
function markdown(text) {
  const lines = String(text || '').replace(/\r/g, '').split('\n'); let result='', inList=false;
  function inline(s) {return safe(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>');}
  for (const line of lines) {
    if (line.startsWith('- ')) {if(!inList){result+='<ul>';inList=true;}result+='<li>'+inline(line.slice(2))+'</li>';continue;}
    if(inList){result+='</ul>';inList=false;}
    if (!line.trim()) continue;
    const m = /^(#{1,3})\s+(.+)$/.exec(line);
    result += m ? '<h'+Math.min(4,m[1].length+1)+'>'+inline(m[2])+'</h'+Math.min(4,m[1].length+1)+'>' : '<p>'+inline(line)+'</p>';
  } if(inList)result+='</ul>';return result;
}
const articles = articleFiles.map(f => {const a=JSON.parse(fs.readFileSync(path.join(articleDir,f),'utf8'));return {...a, slug:path.basename(f,'.json')};}).filter(a => a.published === true);
const cards = articles.map(a => `<article class="jcard" data-category="${safe(a.category)}" onclick="location.href='/articles/${encodeURIComponent(a.slug)}.html'" role="link" tabindex="0" onkeydown="if(event.key==='Enter')location.href='/articles/${encodeURIComponent(a.slug)}.html'">${safeUrl(a.image) ? `<img src="${safeUrl(a.image)}" alt="${safe(a.title)}" loading="lazy">`:''}<div class="jbody"><span>${safe(a.category)}</span><h3>${safe(a.title)}</h3><p>${safe(a.summary)}</p><a class="jlink" href="/articles/${encodeURIComponent(a.slug)}.html">Read more</a></div></article>`).join('\n');
const homeFile = path.join(out,'index.html');
let home = fs.readFileSync(homeFile,'utf8').replace('<!--BLOG_CARDS-->', cards);
fs.writeFileSync(homeFile,home);
for(const a of articles){
 const url='/articles/'+encodeURIComponent(a.slug)+'.html';
 const img=safeUrl(a.image);
 const page=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${safe(a.title)} | Body Function</title><meta name="description" content="${safe(a.summary)}"><link rel="canonical" href="https://bodyfunction.netlify.app${url}"><link rel="stylesheet" href="/style.css"><style>body{background:#fff}.blog-article{max-width:820px;margin:80px auto;padding:24px;line-height:1.8}.blog-article h1{font-size:clamp(2rem,5vw,3.7rem);line-height:1.12}.blog-article h2{margin-top:2rem}.blog-article img{width:100%;border-radius:18px;max-height:420px;object-fit:cover}.blog-article a{color:#9e00c5}.blog-article ul{padding-left:24px}.blog-article p{margin:16px 0}</style></head><body><main class="blog-article"><a href="/#journal">← Back to journal</a><p>${safe(a.category)}</p><h1>${safe(a.title)}</h1>${img?`<img src="${img}" alt="${safe(a.title)}">`:''}${markdown(a.body)}<p><a href="/#booking">Book an appointment</a></p></main></body></html>`;
 fs.writeFileSync(path.join(articleOut,a.slug+'.html'),page);
}
// Update sitemap with generated article URLs.
const sitemapPath=path.join(out,'sitemap.xml');
if(fs.existsSync(sitemapPath)){let sitemap=fs.readFileSync(sitemapPath,'utf8'); const extra=articles.map(a=>`<url><loc>https://bodyfunction.netlify.app/articles/${encodeURIComponent(a.slug)}.html</loc></url>`).join(''); sitemap=sitemap.replace('</urlset>',extra+'</urlset>');fs.writeFileSync(sitemapPath,sitemap);}
console.log('Built '+articles.length+' published blog articles');
