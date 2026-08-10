# Yongjian Tang — Research Profile

A responsive academic profile for Yongjian Tang, focused on large language
models, multi-agent systems, and software engineering. Its information
architecture follows a conventional academic homepage: profile summary, news,
research focus, selected publications, affiliations, and service.

## Preview locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Structure

- `index.html` — profile content and metadata
- `styles.css` — responsive academic layout and motion
- `script.js` — icons, current year, and scroll reveals
- `assets/yongjian-tang.jpg` — public Google Scholar portrait

Profile facts and links are based on the public Google Scholar and LinkedIn
pages. Publication metadata and DOI links were cross-checked against OpenAlex,
arXiv, and IEEE records. Replace the portrait with a higher-resolution square
headshot when one is available.

## Publish with GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, and
select the `main` branch and `/ (root)` folder. The site requires no build step.
