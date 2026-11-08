# Body Function CMS

Pages CMS edits `content/*.json` through `.pages.yml`. Do not edit the `id` values in content entries.

Netlify must be connected to the GitHub repository, with build command `node build.js` and publish directory `dist`. The included `netlify.toml` provides these settings.

To preview locally, run `node build.js`, then serve `dist` with a local HTTP server. Never deploy the repository root directly: it contains templates rather than built HTML.

All original homepage sections, text, images and key links are editable as labeled entries grouped by page/section. This is a structured content editor, not a visual drag-and-drop designer. Adding or deleting whole service cards and rearranging layouts still requires code changes.

Legal and FAQ pages use `content/*.json` and are loaded by `legal-pages.js`.

Important: Verify the booking form recipient URL under Booking Form & Text before going live; the original supplied site sends booking enquiries to a developer email address. Never collect sensitive medical details through that form.
