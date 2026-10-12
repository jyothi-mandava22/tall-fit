# SPIKE.md

**Rule:** sections 1–7 are fixed before any data is pulled. After the first data pull, change them only by adding a dated line to section 9, never by editing in place.

Commit this file **before** pulling any brand data.

---

## 1. Budget

- Total hours available (spike + 6-week build): **about 65** (10–12 for the spike + ~54 for the build)
- Weekly cap: **9** (1 hr a day + one longer weekend block)
- Rule: below 70 total → 3 brands and ~30 test charts. We are at 2 brands (see below).
- Brands in scope: 1 confirmed, 3 pending
  - Deniverse — CONFIRMED IN WRITING (11 Oct 2026)
  - Yoho — pending (10-day window closes ~21 Oct)
  - At Long Last — pending (email sent 12 Oct)
  - Mystella — pending (email sent 12 Oct)
  - BlissClub — dropped (data: body-only charts, no length)
  - TJL Collection — swapped (terms + robots both forbid automated access)
  - eShakti — dropped (blanket robots block + insolvency)
  - Sizyx — dropped (data: body-only charts)
  - Impakto — held (absolute IP clause, no permission route)
- LLM spending ceiling: **$0** (free tier)
  - The extract script must enforce a max-calls-per-run limit and a daily call cap (e.g. 50/day).
  - A dry-run mode must print the estimated call count before spending.
  - If free-tier limits are hit: log in §9 and cut the test set, not the protocol.
  - **Superseded by §9 entry 2026-10-11 — LLM extraction removed from this project.** All values are hand-entered. The ceiling and call-cap rules no longer apply.

---

## 2. Brands and terms check (done before any data pull)

| Brand | Date checked | Terms say | robots.txt says | Decision |
|---|---|---|---|---|
| **BlissClub** | 5 Oct 2026 | Account Policies: "You shall not use any automated system, including... 'robots,' 'spiders,' 'offline readers,' 'scrapers'... to access BlissClub for any purpose without BFPL's prior written approval." | `/products.json` not disallowed. Blanket block only for Nutch. OAI-SearchBot allowed. | **DROP (data)** — topwear and bottomwear charts are body-only, no length, no inseam. Fit engine has no comparable field. Permission email not sent. |
| **TJL Collection** | 5 Oct 2026 | §12(i): "you are prohibited from using the site or its content: ... to spam, phish, pharm, pretext, spider, crawl, or scrape." | `/products.json`, `/collections.json`, `/search.json` explicitly disallowed. | **SWAP** — both terms and robots close the automated route. No permission route offered. |
| **Deniverse** | 5 Oct 2026 | §6: "These Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce... download, store, or transmit any of the material... without our prior written consent." §13(d): prohibits spider/crawl/scrape. | `/products.json` not disallowed. Header names UCP/MCP as intended agent channel. | **CONFIRMED IN WRITING, 11 Oct 2026** — brand replied "Confirmed - team Deniverse." Permission granted subject to the conditions listed on 10 Oct (factual measurements only; link to product page; no automated scraping or crawling; no images/descriptions/logos; non-commercial student project; no implied endorsement; accurate units; right to request corrections/removal). Deniverse values may be hand-entered under these terms. |
| **eShakti** | 5 Oct 2026 | Not re-read — decision made on earlier reading. | `beta.eshakti.com` ends with blanket `User-agent: * / Disallow: /`. | **DROP** — blanket robots block + reported insolvency. |
| **Yoho** | 5 Oct 2026 | No anti-automation clause in either terms page. `spider`, `scrape`, `crawl`, `robot`, `automated` all absent. License clause: "You may not copy, reproduce, transmit, distribute, or create derivative works of such content or information without express written authorization." | `User-agent: * → Allow: /`. Header: "Public product, collection, page, blog, policy, cart, and localized HTML is crawlable." Names UCP/MCP endpoint. | **ASK PERMISSION** — first email 10 Oct 2026 to listen@ CC sarab@ and nodal-officer@ (bounce + typo). Resent 11 Oct 2026 to listen@ CC sarab@ only, with prototype preview. Awaiting reply. |
| **At Long Last** | 12 Oct 2026 | §6: "All content on our website... is the property of At Long Last... You may not use, reproduce, or distribute any content from our website without our prior written consent." No anti-automation clause. | Same Shopify 2025 agent-friendly template. `/products.json` not disallowed. Header names UCP/MCP. | **ASK PERMISSION** — email sent 12 Oct 2026 to info@atlonglastatelier.com. Length guide is HTML text (skirts 46/48 in, dresses 62/64 in, pants 36/38 in inseam). Site localizes to India. Awaiting reply. |
| **Mystella** | 12 Oct 2026 | Second paragraph: "You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organisation's or entity's written permission." No anti-automation clause. | Same Shopify 2025 agent-friendly template. `/products.json` not disallowed. | **ASK PERMISSION** — email sent 12 Oct 2026 to yash.stella@gmail.com CC info.mystella@gmail.com. Four size charts publish garment length (Pants & Trousers 43, Jeans 30–31 inseam / 43 length, Cargo 32 inseam / 43 length, Dress 58). All images. Awaiting reply. |

**Full detail, keyword counts and verbatim clauses:** see `docs/terms-scan.md`.

---

## 3. Definition of "parseable"

A chart is **parseable** if it is one of:

- an HTML table or text in the page
- a PDF with selectable text
- an image where **all** of these hold:
  - natural width is at least 800 px
  - at 100% zoom, with no zooming in, you can transcribe every number in one pass without guessing a digit
  - no cells are cropped, overlapped by text, or hidden behind a toggle

**Not parseable:** scanned or low-resolution images, anything that needs zooming or guessing, charts behind logins.

Why the bar is this strict: you are the labeler. A chart you can't read with confidence gives unreliable ground truth.

Record the **format per chart** (HTML / image / PDF) so image-based passes are visible separately. Validator coverage is weaker on images.

---

## 4. Counting rules (three different units, keep them separate)

- **Products (sampled):** used for the pass/fail decision in section 5.
- **Structural template:** same fields and layout; the numbers may differ. Used to map a product to its chart for pass/fail, and to keep test charts away from the layouts you tuned on.
- **Content-distinct chart:** identical charts (numbers included) count once. Used to size the test set. You can't test the same chart twice.

Always label which count you are reporting. Hash normalised chart content across each brand's **full catalogue** in week 1 to get both counts.

**Per-source dimension (added 5 Oct 2026):** every data entry carries its source — `chart`, `tag`, or `description`. With the LLM extraction path removed (§9, 11 Oct 2026), this dimension now serves data-quality reporting rather than an accuracy claim. Each stored value still records where it came from.

Categories: bottoms (need inseam or garment length), kurtas and dresses (need garment length and sleeve length), footwear (need foot length in cm).

For each published field, record whether it is **body-type** or **garment-type**.

---

## 5. Kill criteria

- For each brand and category, take its sampled in-category products. Use at least 5. If the 10-product sample has fewer, add products from the catalogue listing until you have 5.
- Map each product to its chart's structural template. Pull a chart only for a product whose template you haven't seen yet; a product on an already-seen template inherits that template's result.
- A brand **passes a category** if at least half of those products map to a template that publishes the required field in parseable form.
- **Proceed** if at least 3 of the 5 brands pass (2 of 3 if on 3 brands; both if on 2 brands). With 2 brands, each brand is a single point of failure for its categories, and you still need at least 2 categories passing.
- Keep only passing categories.
- If **fewer than 2 categories pass, drop the project** and pick a different one.

Why products and not templates: one template covering 500 products and one covering 2 products should not count the same. The criterion asks how much of the catalogue the engine can actually serve.

---

## 6. Fallback scope

If some categories fail, keep only the passing categories and the brands that pass them.

### 6.1 Body-only dominance rule (decided now, applied on Day 2.5)

Let G = the share of passing in-category products whose qualifying field is garment-type (not body-type).

- **G at least 50%:** proceed as planned.
- **G between 20% and 50%:** proceed, but describe the app as a size-chart comparison with inferred lengths. The week-3 inferred-vs-measured check becomes a gate: if its decision rule fails, narrow to the garment-measurement categories.
- **G below 20%:** narrow to the brands and categories with garment measurements. If fewer than 2 categories remain, drop the project.

G is **provisional** on the spike: with 5–10 products per brand-category, one product flipping moves it by 10–20 points. Recompute it in week 1 from the full catalogue and apply section 7.1.

These thresholds are defaults, not derived. Reviewed 10 Oct 2026 — kept at 20% / 50% unchanged. Deniverse G = 100% and Yoho footwear is garment-measurement by construction, so the first branch applies. The commit of this file is the sign-off; later changes go in section 9.

---

## 7. Test-set rule

- Target: 40–50 content-distinct test charts, at least 10 with a key field missing.
- If fewer than 40 exist: report the true N with a per-brand breakdown. **Do not pad with near-duplicates.**
- Split by N: about 20% dev and 80% test, with at least 5 dev (N = 15 gives 5 dev and 10 test; N = 25 gives 5 and 20; N = 40 gives 8 and 32).
- If N is below 10: a frozen blind test isn't meaningful. Report extraction as a preliminary case study with N charts stated in every mention, and **don't put an extraction-accuracy figure on the resume as a headline claim**. This also triggers the revisit in section 7.1.
- Fields within one chart aren't independent. Always state N charts next to "X of Y fields".
- If charts are image-heavy: cut the test set to about 30.
- Prefer test charts whose structural template the dev set didn't use. Where that isn't possible, report test accuracy separately for seen and unseen layouts.
- Test charts are quarantined in `/data/test`. The model is never run on them, and model output is never viewed for them, until the freeze.
- Chart files and raw HTML are **gitignored**. Commit the content hashes, labels and extracted JSON only. State the data position in the README limitations (what you pulled, how much, and that raw brand content isn't redistributed). Read the terms you recorded in section 2.

**Superseded by §9 entry 2026-10-11.** With LLM extraction removed, there is no extraction-accuracy claim and therefore no test set of the kind described here. The rule text is retained for historical context and in case the decision is reversed.

### 7.1 When week-1 counts contradict the spike

The go decision is made on the spike sample. Week 1 recomputes counts on the full catalogue. Revisit the go decision, record it in section 9, and say so in the README if any of these happen:

- a brand stops passing a category on the full catalogue, and that drops the project below the section 5 threshold
- G crosses a section 6.1 threshold
- content-distinct charts N falls below 10 (the project's one measured number can't be produced)

If the revisit changes the decision, apply sections 5 and 6 as written.

**Revisit done: 11 Oct 2026 (§9).** N = 2 triggered the rule. Decision: proceed without an extraction-accuracy claim.

---

## 8. Mini extraction test and result

**Rules (fixed now):**

- Freeze schema and prompt before the run. Don't change either between charts.
- Run 5 mixed-format charts (at least one image, one HTML). Score at the field level.
- Log each failure as **wrong value / null when present / hallucinated**.
- About 70% is a smoke test, not a kill switch. Low scores first mean fix the schema or prompt.
- Scoring 40–60 fields takes longer than expected. If Day 2 slips, log it in section 9 and let the spike run to 3 days. Don't compress the scoring.

**Status as of 11 Oct 2026: not run, superseded.** Per §9 entry 2026-10-11, LLM extraction is removed from this project. All chart, tag, and description values are entered by hand. The mini extraction test therefore does not apply as written.

### Spike findings (pre-mini-extraction)

**Brands assessed:**

| Brand | Terms decision | Data verdict | Notes |
|---|---|---|---|
| BlissClub | DROP (data) | Body-only charts, no length | Permission not sent |
| TJL Collection | SWAP | Terms + robots both forbid | No permission route |
| Deniverse | **CONFIRMED IN WRITING** | Bottoms PASS — 6/6 with length data | Emailed 10 Oct; replied 10 Oct; confirmed in writing 11 Oct |
| eShakti | DROP | Blanket robots + insolvency | — |
| Yoho | ASK PERMISSION | Footwear PASS — 5/5 sample | First email 10 Oct (bounce + typo); resent 11 Oct with preview; awaiting reply |
| At Long Last | ASK PERMISSION | Skirts, dresses, pants — length guide (HTML text) | Email sent 12 Oct; awaiting reply |
| Mystella | ASK PERMISSION | Bottoms (3 charts), Skirts/Dresses (1 chart) — all image format | Email sent 12 Oct; awaiting reply |

**Categories passing:**

- **Footwear — Yoho.** Foot length in cm and inches. Chart image `Wind.jpg` (900×900) present in page HTML. Shared across women's footwear sub-collections.
- **Bottoms — Deniverse.** Inseam and outseam as garment measurements. Chart image `Deniverse_Bootcut_Jeans_Size_Chart.png` (1587×2245). Tags on cargo products (`34 inseam`, `45 length`). Descriptions state total length (43"–45").

Two categories pass → **§5 satisfied. Decision: PROCEED.**

**Content-distinct charts found:**

- Yoho: **1** (`Wind.jpg` shared sitewide).
- Deniverse: **1** (bootcut template shared by Sapphire and Skyline).
- Combined: **2**.

This triggered the §7.1 revisit (see §9 entry 11 Oct).

**Sample bias logged:**

Yoho footwear sample (5 products) was selected because they were known to carry `Wind.jpg`. This is not a random draw and cannot establish the catalogue-wide pass rate for §5. Full-catalogue coverage deferred to week 1 dedupe.

**Deniverse conditions (confirmed in writing, 11 Oct 2026):**

- Factual measurements from size charts only
- Each entry links to the Deniverse product page
- No automated scraping or crawling — manual collection only
- No images, descriptions, or logos reproduced
- Non-commercial student project, clearly identified
- No implied endorsement or affiliation
- Accurate units and measurement types
- Brand may request corrections or removal at any time

**RESULT table (data-quality record, not an accuracy claim):**

| Brand | Format | Measurement type | Fields present | Structural templates | Products with usable length data | Garment-type share (G) | Data-quality status |
|---|---|---|---|---|---|---|---|
| Deniverse Sapphire | image | garment | waist, hip, thigh, inseam, outseam | 1 (bootcut) | 6/6 (via chart/tag/description) | 100% | Hand-entered; double-entry check pending |
| Deniverse Skyline | image | garment | (shares bootcut chart) | 1 (bootcut) | — | — | Hand-entered; double-entry check pending |
| Deniverse Glacier Ice | description | garment | outseam 43 | — | — | — | Hand-entered; double-entry check pending |
| Deniverse Blueform | tag | garment | inseam 34, outseam 45 | — | — | — | Hand-entered; double-entry check pending |
| Yoho Lola | image | footwear | foot length cm + inches | 1 (Wind.jpg) | 5/5 | 100% | Pending Yoho permission |

- Charts by measurement type: body [0], garment [4], both [0]
- G (garment-type share of passing products): **100%**
- Categories passing: **2** (bottoms, footwear)
- Brands passing: **2** (Deniverse confirmed in writing; Yoho pending)
- Structural templates found: Deniverse 1 (bootcut), Yoho 1 (Wind.jpg)
- Content-distinct charts found (N): **2**
- Body-only rule outcome (section 6.1): **first branch — G ≥ 50%, proceed as planned**
- **Decision: PROCEED** as a full-stack fit tool with hand-entered data. No extraction-accuracy claim (see §9, 11 Oct).

---

## 9. Change log

| Date | Change | Reason |
|---|---|---|
| 2026-10-05 | §4: added per-source dimension (chart / tag / description). | Deniverse publishes length in three places: tags, description, chart. The original three units were all chart-flavoured. Split so tag/description accuracy is reported separately and doesn't inflate the headline extraction number. |
| 2026-10-10 | §6.1 thresholds reviewed before commit — kept at 20% / 50%. | Deniverse G = 100%, Yoho footwear is garment-measurement by construction. First branch applies. |
| 2026-10-10 | §2: BlissClub dropped on data grounds, not terms. | Topwear and bottomwear charts both body-only, no garment length or inseam. Fit engine has no comparable field. Permission email not sent. |
| 2026-10-10 | §2: Permission emails sent to Deniverse and Yoho. | Deniverse — admin@deniverse.co. Yoho — listen@yoholife.in, CC sarab@ and nodal-officer@. Reply window: 10 days, then treat silence as no. |
| 2026-10-10 | §8: Yoho footwear result logged with sample-bias caveat. | 5/5 products checked carry `Wind.jpg`. Sample was selected for having the chart, so it does not establish catalogue-wide coverage. Full-catalogue pass rate deferred to week 1 (§7.1). |
| 2026-10-10 | §8: Deniverse length-data check complete. | Chart: 1587×2245, parseable, garment measurements, inseam 34 / outseam 45 constant across sizes 28–38. Tags match chart. Descriptions state 43"–45". Full catalogue: 6 products, all bottoms. 6/6 have at least one length source. Bottoms PASS. |
| 2026-10-10 | SPIKE.md committed as first commit. | Terms reading and chart checks happened via manual browser review before this commit; no automated pull was run and no data was collected. Criteria (sections 1–7) were fixed before the manual review began and are unchanged. |
| 2026-10-10 | §2: Deniverse replied same day — "open to considering permission, subject to conditions." | Brand requested product list, fields, and mock-up. Conditions recorded in §2 and §8. |
| 2026-10-10 | §2: Reply sent to Deniverse with product list, fields, and prototype preview. | All three items requested by the brand delivered. |
| 2026-10-10 | §2: Yoho email bounced. | Original CC contained `arab@yoholife.in` (typo — should be sarab@) and `nodal-officer@yoholife.in` (Google Group, bounced). Only `listen@` likely received the original. |
| 2026-10-11 | §2: Yoho email resent with corrected addresses and preview. | Resent to `listen@yoholife.in`, CC `sarab@` only. Added prototype preview video (Lola X01 with real chart values: UK 3 → 23.8 cm, UK 8 → 27.8 cm). Awaiting reply. |
| 2026-10-11 | §7.1 revisit triggered. N=2 content-distinct charts (< 10). | §7.1 requires a revisit when N falls below 10. §8 previously said PROCEED without a corresponding §9 revisit entry. This entry records it. |
| 2026-10-11 | §2: Deniverse permission **confirmed in writing**. | Reply received: "Confirmed - team Deniverse." Permission granted for the use of publicly available garment measurements, subject to the conditions listed on 10 Oct. Deniverse values may now be hand-entered. |
| 2026-10-11 | **LLM extraction removed from this project. All chart, tag and description values are entered by hand.** Supersedes §1 LLM ceiling, §4 chart-accuracy framing, §7 N<10 accuracy rule, and §8 mini extraction test (not run). | Gemini's free tier uses submitted content to improve products and permits human review, so real brand charts cannot be sent without brand permission — and the brands haven't granted that for image transmission. Only 2 content-distinct real charts exist, so no meaningful accuracy number is possible at this scale. Hand entry is feasible for ~6 products plus one footwear chart. |
| 2026-10-11 | **Project reframed as full-stack demonstration, not AI-integration.** | The AI-integration story is carried by a separate, stronger project (KneeSense). This project's role is to demonstrate full-stack engineering: rules-based engine, unit tests, deployed app, honest README. Splitting the two stories produces two deeper projects rather than two that are medium on everything. |
| 2026-10-11 | **Yoho-refusal contingency decided: narrow to bottoms-only.** If Yoho declines or does not reply by 21 Oct, the project continues with Deniverse bottoms as a single-category demonstration. | §5's 2-category rule is retained for the extraction-accuracy framing that no longer applies. With the project now framed as full-stack, a single well-executed category with a working engine, tests, and deploy is a stronger artifact than dropping the project. Decision pre-registered before Yoho's reply arrives. |
| 2026-10-11 | §4 per-source dimension reframed as data-quality reporting. | With no accuracy claim, source labels serve traceability rather than accuracy splitting. Each stored value still records its source. |
| 2026-10-11 | §7 test-set rule marked superseded; text retained. | No extraction-accuracy claim means no blind test set is required. Retained for context and in case the decision is reversed. |
| 2026-10-11 | §8 mini extraction test marked not run / superseded. RESULT table repurposed as data-quality record. | Same reason as §7. The table now documents what data exists per product, not extraction performance. |
| 2026-10-12 | §2: Mystella evaluated — ask permission. | Terms have no anti-automation clause; second paragraph names "written permission" as the route. Clause explicitly covers "public" purpose; email addresses this word directly and offers a private-demo fallback. robots.txt is the Shopify agent-friendly template. Four size charts publish garment length (images). Covers Bottoms (three charts) and Skirts/Dresses (Dress). Email sent to yash.stella@gmail.com CC info.mystella@gmail.com. |
| 2026-10-12 | §1, §2: At Long Last and Mystella added to brand scope. | Two new brands in flight. If both confirm, the project's category coverage expands to 4 brands across 3–4 categories. §1 budget line updated to reflect confirmed + pending. |
| 2026-10-12 | §2: Evidence folders for At Long Last (12 Oct) and Mystella (12 Oct) saved. | Six PNGs each: terms header, robots header, and (ALD) length guide / (Mystella) four size charts. Committed to docs/terms-evidence/. |
