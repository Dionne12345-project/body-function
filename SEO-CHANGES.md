# Body Function SEO changes

- Updated existing CMS SEO titles and meta descriptions for homepage, blog and three service area pages.
- Added unique meta descriptions to FAQ and legal pages.
- Added canonical URLs to nine indexable pages.
- Added a MedicalBusiness JSON-LD entity using only confirmed public information.
- Added contextual internal links between homepage, local area pages, services, booking and blog.
- Added noindex to thank-you page.
- Preserved CMS placeholders and existing Pages CMS configuration.

## Deployment
Copy the files from this ZIP into your existing project folder, retaining its `.git` directory. Run `node build.js`, then `git add -A`, `git commit -m "Improve on-page SEO"`, `git pull --rebase origin main`, and `git push origin main`. Stop if Git reports conflicts.

## Important
The site currently uses the Netlify subdomain as its canonical URL. Update all canonical URLs, sitemap and schema when moving to a custom domain. The homepage's existing branded H1 was preserved rather than replacing visible marketing copy. Verify that all service claims reflect the services actually offered. SEO does not guarantee rankings.
