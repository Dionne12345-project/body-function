Body Function Pages CMS: clean field editing for all 11 sections.
Copy .pages.yml and content/*.json into the project. Keep the existing build.js from your uploaded project, which already supports flat JSON fields.
Run node build.js, then git add .pages.yml content; git commit -m "Simplify all CMS sections"; git pull --rebase origin main; git push origin main.
Do not overwrite any content edited in Pages CMS since the uploaded ZIP was created without first reconciling those changes.
