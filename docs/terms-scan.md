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

Screenshots of each terms page header and robots.txt header, with the date captured, live in `docs/terms-evidence/<brand>-2026-10-05/`.

## Notes

- The keyword list was fixed before any scan began.
- Dates reflect when each page was read in a browser. Terms and robots.txt can change; the screenshots are the dated record.
- Deniverse's page contains template placeholders (`[LINK]`, `[INSERT BUSINESS REGISTRATION NUMBER]`). The page appears unfinished; the clauses still bind.
- All scans were performed by hand in a browser, not by an automated tool. See `docs/hours.md` for time spent.