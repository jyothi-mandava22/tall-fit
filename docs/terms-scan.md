# Terms and robots.txt scan

**Purpose:** supporting document for `docs/SPIKE.md` §2. Records what was read, when, and what each brand's terms and robots.txt say about automated access, copying, and permission.

**Rule:** the terms and robots.txt clauses below are recorded verbatim with section numbers and read dates. Verdicts and decisions match `SPIKE.md` §2 exactly.

**Read by:** Jyothi
**Scan date:** 5 Oct 2026
**Keyword list:** scrape, crawl, spider, robot, automated, copy, reproduce, download, store, derivative, written, commercial, use, grievance

---

## Summary table

| Brand | Date checked | Anti-automation clause? | JSON feed allowed? | Decision | Reason |
|---|---|---|---|---|---|
| BlissClub | 5 Oct 2026 | Yes — custom, names "robots / spiders / scrapers" | Not disallowed | DROP (data) | Body-only charts, no length. Terms question moot. |
| TJL Collection | 5 Oct 2026 | Yes — §12(i) spider / crawl / scrape | Disallowed | SWAP | Both terms and robots close the door |
| Deniverse | 5 Oct 2026 | Yes — §6 download/store, §13(d) spider/crawl/scrape | Not disallowed | APPROVED WITH CONDITIONS (pending final written confirmation) | §6 names "prior written consent" route; brand replied positively |
| eShakti | 5 Oct 2026 | Blanket robots block | Blocked | DROP | Insolvency + robots block |
| Yoho | 5 Oct 2026 | No — absent from both pages | Not disallowed | ASK PERMISSION | Terms restrict storage/display; robots clean |

---

## BlissClub

**Terms URL:** https://blissclub.com/policies/terms-of-service
**Last updated (page):** 10 March 2023
**Date checked:** 5 Oct 2026

### Terms — keyword counts

| Keyword | Count | Notes |
|---|---|---|
| `spider` | 2 | Both in Account Policies |
| `scraper` | 1 | Account Policies |
| `crawl` | 0 | Absent |
| `robots` | 2 | Both in Account Policies |
| `automated` | 3 | Account Policies (×2), Prohibitions on Submitted Content |
| `copy` | 24 | License to Access, Account Policies, IP Rights |
| `reproduce` | 2 | IP Rights (×2 sections) |
| `download` | 1 | IP Rights |
| `store` | 1 | Limitation of Liability |
| `stored` | 2 | Disclaimer of Warranties (×2) |
| `derivative` | 1 | License to Access |
| `written` | 7 | Account Policies, License to Access, IP Rights, Notice |
| `commercial` | 4 | Account Policies, Prohibitions on Submitted Content (×2), IP Rights |
| `use` | 188 | Pervasive |
| `grievance` | 1 | Customer Support |

### Clauses that bind

**1. Automated access — Account Policies**
> "You shall not use any automated system, including but not limited to, "robots," "spiders," "offline readers," "scrapers," etc., to access BlissClub for any purpose without BFPL's prior written approval."

**2. Rate limit — Account Policies**
> "You shall not in any way that transmits more request messages to BlissClub servers in a given period of time than a human can reasonably produce in the same period by using a conventional online web browser; provided, however, that the operators of public search engines may use spiders or robots to copy materials from the site for the sole purpose of creating publicly available searchable indices of the materials, but not caches or archives of such material."

**3. Personal use only — IP Rights**
> "Data on BlissClub is provided to you AS IS for your information and personal use only and may not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of the respective owners."

**4. No derivative works — License to Access**
> "you will not copy, distribute, or make derivative works of BlissClub or BlissClub Products in any medium without BFPL's prior written consent."

**5. Permission route.** The clause itself names the mechanism — "prior written approval."

### What the counts mean

- `store` / `stored` (3 total) are all in disclaimers, not restrictions. No storage prohibition for you.
- `use` (188) is not meaningful as a restriction count. The binding clause is the single "personal use only" phrase in IP Rights.
- `crawl` (0) and `spider` (2) — the clause names specific tools rather than generic verbs. Deliberate drafting.

### robots.txt

**URL:** https://blissclub.com/robots.txt
**Date checked:** 5 Oct 2026

| Keyword | Count |
|---|---|
| `spider` | 0 |
| `scraper` | 0 |
| `crawl` | 4 (AhrefsBot, AhrefsSiteAudit, MJ12bot, Pinterest — all `Crawl-delay` only) |
| `robot` / `robots` | 0 |
| `automated` | 0 |
| `copy` | 0 |

**Access posture:** `/products.json`, `/products`, `/collections` (base) not disallowed. `/policies/`, `/search`, `/account`, `/cart`, `/checkout` disallowed. Blanket block only for Nutch. `OAI-SearchBot` explicitly allowed.

### Robots vs terms

| | robots.txt | Terms |
|---|---|---|
| `/products.json` | Not disallowed | Automated access banned without prior written approval |
| `/products` | Not disallowed | Same |
| `/collections` (base) | Not disallowed | Same |
| `/policies/` | Disallowed | — |
| `/search` | Disallowed | — |

The two documents disagree. robots.txt is a crawl directive; it does not grant a license and cannot override a contract term.

### Contact routes found

| | |
|---|---|
| General | `hi@myblissclub.in` |
| WhatsApp / phone | +91 99000 01845 |
| Grievance Officer | Nisi Ann Mary — Director, `grievance@myblissclub.in` |
| CIN | U52520KA2020PTC133220 |
| Registered office | No. 145, UrbanVault, 5th Main Rd, Sector 6, HSR Layout, Bengaluru 560102 |

### Decision

**DROP (data, not terms).** Topwear and bottomwear charts both body-only — no garment length, no inseam. Fit engine has no comparable field. Permission email not sent; the decision supersedes the terms question.

---

## TJL Collection

**Terms URL:** https://www.tjlcollection.com/policies/terms-of-service
**Last updated (page):** not stated
**Date checked:** 5 Oct 2026

### Terms — keyword counts

| Keyword | Count | Notes |
|---|---|---|
| `spider` | 1 | §12(i) |
| `scrape` | 1 | §12(i) |
| `crawl` | 1 | §12(i) |
| `robot` | 0 | Absent |
| `automated` | 0 | Absent |
| `copy` | 2 | §2, §9 |
| `reproduce` | 1 | §2 |
| `download` | 0 | Absent |
| `store` | 5 | §0 (×2), §5 (×2), §6, §10 — all "our store", descriptive |
| `derivative` | 0 | Absent |
| `written` | 2 | §2, §17 |
| `commercial` | 0 | Absent |
| `use` | Many | Pervasive |
| `grievance` | 0 | Absent |

On `store` = 5: all five hits refer to "our store" as the Shopify shop, none are a storage prohibition. What binds is §2 and §12(i).

### Clauses that bind

**1. Prohibited uses — §12(i)**
> "you are prohibited from using the site or its content: ... (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; ..."

**2. No reproduction without permission — §2**
> "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us."

**3. Governing law — §18:** United States.

**4. No permission route named.** §20 offers `info@tjlcollection.com` for "questions about the Terms of Service" only.

### robots.txt

**URL:** https://www.tjlcollection.com/robots.txt
**Date checked:** 5 Oct 2026

| Keyword | Count |
|---|---|
| `spider` | 0 |
| `scraper` | 0 |
| `crawl` | 0 |
| `robot` | 0 |
| `automated` | 0 |
| `copy` | 0 |

**Access posture:**
Disallow: /products.json
Disallow: /collections.json
Disallow: /search.json
Disallow: /cart.js
Disallow: /cart/add.js
Disallow: /cart/change.js
Disallow: /search?q=
Disallow: /search?type=*&q=
JSON feed explicitly locked out. HTML `/products` and `/collections` base not disallowed. Named bots (GPTBot, PerplexityBot, ClaudeBot) get transactional-only disallows.

### Robots vs terms

| | robots.txt | Terms |
|---|---|---|
| `/products.json` | Disallowed | §12(i) prohibits spider/crawl/scrape |
| `/collections.json` | Disallowed | Same |
| `/search.json` | Disallowed | Same |
| `/products` (HTML) | Not disallowed | §12(i) still applies to automated access |

Both documents close the same door.

### Decision

**SWAP.** §12(i) names spider/crawl/scrape, and robots.txt explicitly disallows `/products.json` and `/collections.json`. No permission route offered.

---

## Deniverse

**Terms URL:** https://deniverse.co/policies/terms-of-service
**Last updated (page):** not stated
**Date checked:** 5 Oct 2026
**Platform:** Shopify Inc. (§0)

### Terms — keyword counts

| Keyword | Count | Notes |
|---|---|---|
| `spider` | 1 | §13(d) only |
| `scrape` | 1 | §13(d) only |
| `crawl` | 1 | §13(d) only |
| `robot` | 0 | Absent |
| `automated` | 0 | Absent |
| `copy` | 1 | §13(b) only |
| `copyright` | 3 | §6 (×2), §11 |
| `reproduce` | 3 | §6, §11, §13(b) |
| `download` | 2 | §6, §13(f) |
| `store` / `s-` | 13 | Mostly "our store(s)" (§0, §1, §2, §4, §9); binding one is §6 |
| `derivative` | 1 | §6 |
| `written` | 4 | §6 (×2), §19, §20 |
| `commercial` | 3 | §3, §6, §11 |
| `use` | Many | Pervasive |
| `grievance` | 0 | Absent |

On `store` = 13: almost all are "our store(s)" — descriptive. One is a prohibition: §6 lists `store` in the list of acts you may not do with Deniverse material. That single hit is the one that binds.

### Clauses that bind

**1. §6 — Intellectual Property (the strong one)**
> "These Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on the Services without our prior written consent."

**2. §13(d) — Prohibited Uses**
> "In addition, you agree not to: ... (d) spam, phish, pharm, pretext, spider, crawl, or scrape; ..."

**3. §13(b) — same section**
> "(b) reproduce, duplicate, copy, sell, resell or exploit any portion of the Services; ..."

**4. §3 — purchases only, not data**
> "You represent and warrant that your purchases are for your own personal or household use and not for commercial resale or export."

**5. Permission route — §6 names it:** "without our prior written consent." §24 gives `admin@deniverse.co`.

### robots.txt

**URL:** https://deniverse.co/robots.txt
**Date checked:** 5 Oct 2026

| Keyword | Count |
|---|---|
| `crawlable` | 1 |
| `crawlers` | 1 |
| `crawl` | 1 |
| `robots` | 1 |
| `store` | 1 |
| `spider` | 0 |
| `scraper` | 0 |
| `automated` | 0 |
| `copy` | 0 |

All `crawl` / `crawler` / `robots` hits are comments, not directives. No anti-crawling directive exists.

### Robots vs terms

| | robots.txt | Terms |
|---|---|---|
| `/products.json` | Not disallowed | §6 forbids download/store; §13(d) forbids spider/crawl/scrape |
| `/products` (HTML) | Allowed | Same §6/§13(d) restrictions |
| `/collections` (base) | Allowed | Same |
| `/api/ucp/mcp` | Named as intended catalog channel | Not addressed |

Same pattern as BlissClub: permissive robots.txt, restrictive ToS.

### Contact route

| | |
|---|---|
| Email | `admin@deniverse.co` (§24) |
| Phone | +91 8826535754 |
| Address | PR-306, Supertech Icon, Nyay Khand 1, Indirapuram, Ghaziabad 201014, UP |
| Grievance officer | None named |

**Drafting notes:** §24 contains `[INSERT BUSINESS REGISTRATION NUMBER]` and `[INSERT VAT NUMBER]`; §9 contains a leftover `[NOTE TO MERCHANT: ...]` editing note. Page appears unfinished.

### Decision

**APPROVED WITH CONDITIONS (pending final written confirmation).** Permission email sent 10 Oct 2026 to `admin@deniverse.co`. Brand replied positively, requested product list, fields, and a mock-up. All three provided. Awaiting final written confirmation.

Conditions the brand listed:
- Factual measurements from size charts only
- Each entry links to the Deniverse product page
- No automated scraping or crawling
- No images, descriptions, or logos reproduced
- Non-commercial student project, clearly identified
- No implied endorsement or affiliation
- Accurate units and measurement types
- Right to request corrections or removal

---

## eShakti

**Date checked:** not re-read on 5 Oct 2026 — decision made on earlier reading.

**Findings from earlier reading:** `beta.eshakti.com/robots.txt` ends with a blanket `User-agent: * / Disallow: /`. Public records indicate the company is in liquidation proceedings.

**Evidence:** none. The decision to drop was made on an earlier reading, before the evidence step was set up. No screenshot was taken, and re-taking one now would not reflect the state of the page at the time of the decision.

### Decision

**DROP.** Two independent reasons — blanket robots block, and corporate insolvency.

---

## Yoho

**Terms URL A:** https://yoholife.in/pages/terms-and-conditions (last update 19 Sep 2022)
**Terms URL B:** https://yoholife.in/policies/terms-of-service (last update 21 Jan 2022)
**Date checked:** 5 Oct 2026
**Company:** Innovative Lifestyle Technology Private Limited

### Terms — keyword counts

| Keyword | Page A | Page B | Notes |
|---|---|---|---|
| `spider` | 0 | 0 | — |
| `scrape` | 0 | 0 | — |
| `crawl` | 0 | 0 | — |
| `robot` | 0 | 0 | — |
| `automated` | 0 | 0 | — |
| `copy` (bare) | 4 | 3 | Page A's extra Product sentence accounts for the difference |
| `copyright` | 3 | 3 | Content/IP, IP-respect, Contact Us |
| `reproduce` | 2 | 2 | Proprietary Rights, License |
| `download` | 0 | 0 | Absent |
| `store` / `storing` / `stored` | 2 | 2 | Posting ("storing"), Chat ("stored") |
| `derivative` | 3 | 2 | Page A extra Product sentence |
| `written` | ~6 | ~6 | Opt-out, License, Indemnification, Disclaimer |
| `commercial` | 3 | 3 | "commercial messages"; "personal and non-commercial use" ×2 |
| `use` | Many | Many | Pervasive |
| `grievance` | 1 | 1 | Grievance officer entry |

**The finding is the absence.** No `spider`, `scrape`, `crawl`, `robot`, or `automated` in either version. Yoho's terms do not prohibit automated access.

### Two terms pages — diff summary

Page A is newer (19 Sep 2022) but sits at `/pages/`; Page B sits at `/policies/`, Shopify's canonical path. Substantively the same document. Differences:

- Page A has an extra Product clause (scoped to physical goods)
- Page A lists Shopify India and GOKWIK addresses in Privacy; Page B omits them
- Page A has an extra indemnification clause (g)
- Different opt-out and copyright contact emails (`support@` vs `listen@`)
- Different grievance officer email (`nodal-officer@` vs `sarab@`)
- Different business hours (9:00–6:00 vs 10:00–6:00)

**Substantive impact for the project: none.** The clauses that bind are identical in both.

### Clauses that bind (identical in both pages)

**1. License**
> "By using this Website, you are granted a limited, non-exclusive, non-transferable right to use the content and materials on the Website in connection with your personal, non-commercial use of the Website. You may not copy, reproduce, transmit, distribute, or create derivative works of such content or information without express written authorization from the Company or the applicable third party."

**2. Content / IP**
> "You acknowledge that your use of the content on this Website is for personal and non-commercial use."

**3. Site Security**
> "You are prohibited from violating or attempting to violate the security of the Website, including... overloading, 'flooding,' 'spamming,' 'mail bombing' or 'crashing'"

Scoped to rate-based abuse, not to reading.

**4. Page A only — extra Product clause (physical goods, not chart data)**
> "You shall not access, use, copy, adapt, modify, prepare derivative works based upon, distribute, license, sub license, transfer, display, perform or otherwise exploit any of the Products, or samples thereof."

### robots.txt

**URL:** https://yoholife.in/robots.txt
**Date checked:** 5 Oct 2026

| Keyword | Count |
|---|---|
| `crawlable` | 1 |
| `crawlers` | 1 |
| `crawl` | 1 |
| `robots` | 1 |
| `spider` | 0 |
| `scraper` | 0 |
| `automated` | 0 |
| `copy` | 0 |
| `store` | 1 |

**Access posture:** `User-agent: * → Allow: /`. Header names UCP/MCP as the intended agent endpoint. Transactional paths disallowed. Same Shopify 2025 agent-friendly template as Deniverse.

### Contact routes

| | |
|---|---|
| Customer service | `listen@yoholife.in` (both pages) |
| Grievance officer (Page B) | `sarab@yoholife.in` |
| Nodal officer (Page A) | `nodal-officer@yoholife.in` |
| Phone | +91 92051 62890 |
| Grievance officer | Sarab Pal Singh |

### Decision

**ASK PERMISSION.** robots.txt permits catalog access and names an agent endpoint, and terms have no anti-automation clause — but the License restricts copying, storing, and distributing content, and the project needs to store extracted data and display it in a public app.

Permission email sent 10 Oct 2026 to `listen@yoholife.in`, CC `sarab@yoholife.in` and `nodal-officer@yoholife.in`. Awaiting reply.

---

## Evidence

Screenshots of each terms page header and robots.txt header live in `docs/terms-evidence/<brand>-<date>/`.

**What the screenshots record.** Each screenshot captures the browser address bar, the page title, the opening lines of the document, and — where the page displays one — its own "last updated" line. The screenshot is the dated record of what the page said when read. Where a page does not display a last-updated date, the screenshot still serves as dated evidence of the read.

**Pages that display a "last updated" line:**
- BlissClub — 10 March 2023
- Yoho `/pages/terms-and-conditions` — 19 Sep 2022
- Yoho `/policies/terms-of-service` — 21 Jan 2022

**Pages that do not display a last-updated date:**
- TJL Collection
- Deniverse
- eShakti

**Read dates vs screenshot dates.** Terms pages were read and scanned on 5 Oct 2026. Screenshots were captured on 11 Oct 2026. Both dates are noted here so the record is complete. No terms page changed between the two dates.

**eShakti:** no screenshot — see the eShakti section above.

## Notes

- The keyword list was fixed before any scan began.
- Dates reflect when each page was read in a browser. Terms and robots.txt can change; the screenshots are the dated record.
- Deniverse's page contains template placeholders (`[LINK]`, `[INSERT BUSINESS REGISTRATION NUMBER]`). The page appears unfinished; the clauses still bind.
- All scans were performed by hand in a browser, not by an automated tool. See `docs/hours.md` for time spent.