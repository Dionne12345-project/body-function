document.getElementById('year').textContent = new Date().getFullYear();
const slug = window.BODY_FUNCTION_PAGE;
fetch(`content/${slug}.json`, { cache: 'no-store' })
  .then(response => { if (!response.ok) throw new Error('Page content unavailable'); return response.json(); })
  .then(data => {
    document.title = `${data.title || 'Information'} | Body Function`;
    document.getElementById('page-title').textContent = data.heading || data.title || '';
    document.getElementById('page-intro').textContent = data.intro || '';
    const container = document.getElementById('page-sections');
    (data.sections || []).forEach(item => {
      const section = document.createElement('section'); section.className = 'legal-section';
      const h2 = document.createElement('h2'); h2.textContent = item.heading || '';
      const p = document.createElement('p'); p.textContent = item.body || '';
      section.append(h2, p); container.append(section);
    });
  })
  .catch(() => { document.getElementById('page-intro').textContent = 'Page content could not be loaded. Please try again later.'; });
