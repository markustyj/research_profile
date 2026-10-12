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
- `script.js` — icons, current year, figure sizes, news scroll fades, and scroll reveals
- `assets/yongjian-tang.jpg` — public Google Scholar portrait
- [assets/agent4re-overview.png](assets/agent4re-overview.png) — Agent4RE overview (Figure 1)
- [assets/agent4cs-overview.png](assets/agent4cs-overview.png) - Agent4CS overview (Figure 1)
- [assets/agentic-se-preview.png](assets/agentic-se-preview.png) - survey title and abstract excerpt
- [assets/few-shot-overview.png](assets/few-shot-overview.png) - Few-shot Dilemma prompting framework (Figure 1)
- [assets/fsponer-overview.png](assets/fsponer-overview.png) - FsPONER TF-IDF few-shot selection (Figure 3)

Selected publications on About include figure previews and also appear in the
text-only complete publication list. When editing a selected paper, update its
entry on both pages.

Yongjian Tang's name is bold in all author lists. Small tags below the venue
mark his first-author and corresponding-author roles.

The Agent4RE preview is Figure 1 from
[Tang, Li, and Runkler's paper](https://arxiv.org/abs/2610.10628), used under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Other preview sources:

- Agent4CS: [original Figure 1](https://arxiv.org/html/2607.01425v2/figures/agent_flow_modified.png).
- LLM-Based Agentic Systems for Software Engineering: title and abstract cropped from the [first page](https://arxiv.org/pdf/2601.09822v2). This text-only paper has no overview figure.
- The Few-shot Dilemma: [original Figure 1](https://arxiv.org/html/2509.13196v2/methods_overview.png).
- FsPONER: [original Figure 3](https://arxiv.org/html/2407.08035v2/embedding_tfidf_vectors.png).

Refer to each source paper for its licensing terms.

Profile facts and links are based on the public Google Scholar and LinkedIn
pages. Publication metadata and DOI links were cross-checked against Google
Scholar, OpenAlex, arXiv, and publisher records. Replace the portrait with a
higher-resolution square headshot when one is available.

## Publish with GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, and
select the `main` branch and `/ (root)` folder. The site requires no build step.
