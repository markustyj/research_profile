# Yongjian Tang — Research Profile

A responsive academic profile for Yongjian Tang, focused on large language
models, self-evolving agents, and software engineering. Four separate pages
share the same profile sidebar and navigation: About, Publications, Patents,
and Experience.

## Preview locally

Open [index.html](index.html) directly in a browser. No build step or server is
required. To preview over HTTP instead:

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Structure

- [index.html](index.html) — About: introduction, news, selected publications, and awards
- [publications.html](publications.html) — complete publication list
- [patents.html](patents.html) — placeholder for upcoming patent information
- [experience.html](experience.html) — professional experience and education
- `styles.css` — responsive academic layout and motion
- `script.js` — icons, current year, and scroll reveals
- `assets/yongjian-tang.jpg` — public Google Scholar portrait

Selected publications on About also appear in the complete publication list.
When editing a selected paper, update its entry on both pages.

Profile facts and links are based on the public Google Scholar and LinkedIn
pages. Publication metadata and DOI links were cross-checked against Google
Scholar, OpenAlex, arXiv, and publisher records. Replace the portrait with a
higher-resolution square headshot when one is available.

## Publish with GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, and
select the `main` branch and `/ (root)` folder. The site requires no build step.
