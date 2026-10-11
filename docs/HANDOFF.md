# Project handoff — current state

**Project:** Tall Fit — a fit-comparison tool for tall Indian women.
**Stage:** Pre-Phase 1. Spike complete, awaiting brand replies.
**Last updated:** 11 Oct 2026

---

## What the project is

A web app where a tall Indian woman enters her measurements and sees whether a specific brand's clothing will fit her in **length** (inseam, sleeve, hem), not just circumference. Built on an LLM pipeline that extracts garment measurements from brand size charts. The one measured number is extraction accuracy on a blind-labeled test set.

**Target role:** full-stack developer with AI integration, product companies and startups in India.

**Full plan:** see `docs/SPIKE.md` and the original project plan.

---

## Current status

### Spike — complete

| Item | Status |
|---|---|
| Terms and robots.txt read (5 brands) | ✅ |
| Keyword scans | ✅ in `docs/terms-scan.md` |
| Yoho footwear check | ✅ passing (5/5 sample, caveat logged) |
| Deniverse length-data check | ✅ passing (6/6) |
| BlissClub view-only check | ✅ dropped on data grounds |
| SPIKE.md committed | ✅ hash `64b2ad0` |
| Hours log | ✅ `docs/hours.md` |

### Brands

| Brand | Decision | Status |
|---|---|---|
| BlissClub | DROP (data) | Body-only charts, no length. No email sent. |
| TJL Collection | SWAP | Terms + robots both forbid. No email sent. |
| Deniverse | **APPROVED WITH CONDITIONS** | Emailed 10 Oct, replied same day. Product list, fields, and preview sent 10 Oct. Awaiting final written confirmation. |
| eShakti | DROP | Blanket robots + insolvency. |
| Yoho | ASK PERMISSION | First email 10 Oct (bounce + typo), resent 11 Oct with corrections and preview. Awaiting reply. |

### Categories passing

- **Footwear — Yoho.** Chart `Wind.jpg` (900×900, HTML, cm and inches).
- **Bottoms — Deniverse.** Chart `Deniverse_Bootcut_Jeans_Size_Chart.png` (1587×2245, garment, inches).

Two categories pass → §5 satisfied. Decision: **PROCEED**.

---

## Outreach status

### Deniverse

**Sent:** 10 Oct 2026 to `admin@deniverse.co`
**Reply:** 10 Oct 2026 (same day) — approved with conditions.

The reply:
> "We're open to considering permission for the use of publicly available garment measurements from a limited number of Deniverse products, subject to a few conditions."
>
> Conditions:
> - Factual measurements from size charts only
> - Every entry links to the Deniverse product page
> - No automated scraping or crawling — manual collection only
> - No images, descriptions, or logos reproduced
> - Non-commercial student project, clearly identified
> - No implied endorsement or affiliation
> - Accurate units and measurement types
> - Right to request corrections or removal at any time

They asked for: product list, fields to extract, and a mock-up. **All three were sent on 10 Oct 2026.** Awaiting final written confirmation of scope.

**Impact on pipeline:** Deniverse ingest becomes **manual browser collection**, not scripted. Six products only.

### Yoho

**First attempt:** 10 Oct 2026 to `listen@yoholife.in`, CC `sarab@` and `nodal-officer@`.
**Problem:** typo `arab@` (missing 's'), and `nodal-officer@` is a Google Group that bounced.
**Resend:** 11 Oct 2026 to `listen@yoholife.in`, CC `sarab@` only. Added a prototype preview video.
**Status:** awaiting reply. 10-day window closes ~21 Oct.

---

## What exists in the codebase
```
tall-fit/
├── apps/
│ ├── web/ ← empty (Phase 1)
│ └── api/ ← empty (Phase 1)
├── packages/
│ └── shared/
│ └── src/
│ ├── schema.ts ← extraction zod schema (frozen target)
│ ├── prompt.ts ← vision + text extraction prompts
│ └── index.ts
├── scripts/
│ └── eval.ts ← eval skeleton (not implemented yet)
├── data/
│ ├── raw/ ← gitignored
│ ├── extracted/ ← cached LLM output (empty)
│ ├── dev/
│ │ ├── labels/
│ │ │ ├── FORMAT.md
│ │ │ └── example-sapphire.json
│ │ └── failures.csv
│ └── test/ ← quarantined charts (empty)
└── docs/
├── SPIKE.md
├── hours.md
├── terms-scan.md
└── terms-evidence/
```

**Stack decided:** Vite + React + TypeScript + Tailwind frontend; Node + Express TypeScript API; Postgres on Neon or Supabase; one LLM API for extraction only (Gemini free tier); JWT auth.

---

## What's next (Phase 1)

Once Deniverse confirms and Yoho replies (or the 10-day window closes):

1. **Deploy a walking skeleton** — Vercel (frontend) + Render/Railway (API) + Neon (DB), one API route reading one DB row. Do this before any real feature.
2. **Database schema** — brands, products, size_charts, profiles.
3. **Ingestion** — manual collection for Deniverse (their condition), scripted or manual for Yoho. Store in `data/raw/`, commit hashes and extracted JSON only.
4. **Count distinct templates** across the full catalogue, recompute G (§6.1), apply §7.1 revisit.
5. **Mini extraction test** — 5 charts, frozen schema and prompt, tag `protocol-freeze`, score field-level, log failures.

---

## Key decisions and why

- **Why rules, not embeddings.** Fit matching is numeric comparison on structured data. Embeddings add no value.
- **Why only 2 brands.** §5 requires ≥2 categories. Yoho (footwear) + Deniverse (bottoms) satisfy it. BlissClub and TJL dropped on data and terms respectively.
- **Why N<10 means "preliminary case study."** With only 2 content-distinct charts, a frozen blind test isn't statistically meaningful. §7 says report honestly at the true N, don't pad.
- **Why manual collection for Deniverse.** Their written condition forbids automated scraping or crawling.

---

## Open questions / risks

- Yoho may decline or not reply. If so, only footwear passes and the project narrows.
- Yoho's chart `Wind.jpg` is shared across the women's footwear line — catalogue-wide coverage is unverified.
- Deniverse's catalogue is only 6 products. Even with approval, the extraction test set from Deniverse is 1 chart.
- The "N<10" rule means the headline extraction number is a **preliminary case study**, not a resume claim.

---

## Files to read for full context

1. `docs/SPIKE.md` — the plan and criteria
2. `docs/terms-scan.md` — brand decisions and clauses
3. `packages/shared/src/schema.ts` — the frozen extraction target
4. `packages/shared/src/prompt.ts` — the frozen extraction prompts

---

## Not in the repo (external)

- Prototype HTML files: `index.html` (Deniverse) and `yoho-preview.html` (Yoho) — kept locally, sent to brands as screen recordings
- Screen recordings: on Google Drive
- Permission correspondence: in Gmail