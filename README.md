# Bedside — Clinical Calculators

A clean, mobile-first, offline-capable medical calculator web app for nurses and the wider clinical team. Designed to feel trustworthy and unhurried — like a tool you can rely on at 3am.

**Live app:** https://Soumya001.github.io/bedside/

---

## Features

### 12 Calculators

| Calculator | Formula | Notes |
|---|---|---|
| **Drug dose** | (dose ÷ vial) × diluent | Warns if dose > vial strength |
| **IV drip rate** | (volume × drop factor) ÷ (time × 60) | 6 drop factors (10–60 gtt/mL) + bedside spot-check |
| **IV pump rate** | volume ÷ time | mL/hr |
| **Weight-based dose** | weight × mg/kg | Total/day + per dose |
| **Infusion time remaining** | volume ÷ rate | Hours and minutes |
| **Unit converter** | Various | kg↔lb, g→mg, mg→mcg, L→mL |
| **Oxygen / SpO₂** | Assessment tool | 4 evidence-based target ranges + status assessment |
| **Titration (µg/kg/min)** | Concentration + pump rate | High-risk banner + independent double-check |
| **Cannula gauge & flow** | Required rate → minimum gauge | Reference table + flow ceiling check |
| **Creatinine clearance** | Cockcroft–Gault | CKD staging (G1–G5) |
| **Reconstitution** | Drug ÷ diluent | Concentration + draw-up volume |
| **Body surface area** | Mosteller | m² for oncology/paediatric dosing |

### Safety Design
- **Shows working** for every result — no black-box answers
- **Refuses to display wrong answers** — invalid inputs show a clear error, never a bad number
- **Plausibility warnings** for implausible weights, high rates, dose-exceeds-vial
- **Titration double-check** — re-enter the pump rate to confirm before infusing
- **Persistent safety footer** on every tool

### UX
- Material 3 dark design — large tap targets, big readable results
- Per-tool colour themes with spring animations
- Pinned / recent tools on home screen (persisted to localStorage)
- Light + dark theme toggle
- 5 accent colours (Slate, Orange, Cyan, Violet, Green)
- Native Android-style slide transitions
- PWA — installable to home screen, works offline after first load

---

## Clinical Governance

This app is a **mathematical aid**, not a certified medical device. It has not been validated, registered, or approved under CE, FDA, TGA, or any other regulatory framework.

- The prescriber's order is the clinical authority
- Professional accountability stays with the clinician
- Local protocol takes precedence over any result shown here
- Paediatric use requires additional senior / pharmacist review
- See the **Reference tab** in-app for full legal and ethical framework

---

## Deployment

This app deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

```
main branch push → Actions build → GitHub Pages
```

To deploy manually:
1. Push to `main`
2. Actions runs `.github/workflows/deploy.yml`
3. App is live at your Pages URL

### PWA Installation
- **Android:** Open in Chrome → three-dot menu → "Add to Home Screen"
- **iOS:** Open in Safari → Share → "Add to Home Screen"
- Updates automatically when the site updates (no app store needed)

---

## Local Development

No build step required — plain HTML + JS.

```bash
git clone https://github.com/Soumya001/bedside.git
cd bedside
# Open Bedside Pro.dc.html in any modern browser
# Or use a local server:
npx serve .
```

---

## Formulas Reference

| Calculator | Formula | Source |
|---|---|---|
| Drug dose | (dose ÷ vial strength) × diluent volume | Standard nursing pharmacology |
| IV drip rate | (volume × drop factor) ÷ (time × 60) | Standard infusion calculation |
| Titration concentration | (mg × 1000) ÷ bag volume | Critical care pharmacology |
| Titration pump rate | (dose × weight × 60) ÷ concentration | Critical care pharmacology |
| Cockcroft-Gault CrCl | ((140 − age) × weight) ÷ (72 × SCr) × 0.85 (if female) | Cockcroft & Gault, 1976 |
| Mosteller BSA | √((height × weight) ÷ 3600) | Mosteller, 1987 |
| SpO₂ targets | 92–96% general; 88–92% COPD; 94–98% acutely ill | BTS/TSANZ guidelines |
| kg ↔ lb | × 2.20462 | Exact conversion factor |

---

## Disclaimer

This tool is provided as-is for educational and clinical support purposes. It does not replace professional clinical judgement, the prescriber's order, pharmacist advice, or local institutional protocol. The nurse or clinician using this tool remains professionally and legally responsible for all clinical decisions.

---

## License

MIT — free to use, modify, and deploy. Attribution appreciated but not required.

> Built with care for nurses and the clinical team. Accuracy first, speed second.
