# 💧 EcoTrack — Food & Water Footprint Tracker

**MSUM Honors Program Project**

A multi-page web application that tracks personal food and water use, visualizes the "hidden" water in everyday food choices, and helps users understand and reduce their water footprint.

**Live Demo:** [GitHub Pages link goes here]

---

## 📋 Features

| Page | Description |
|------|-------------|
| **Dashboard** | Real-time charts: weekly drinking water, food footprint trend, food category breakdown, household water use. Fun facts comparing your footprint to everyday objects. |
| **Log Entry** | Log drinking water (with visual glasses UI), search and add food items with automatic water footprint calculation, track household water use (shower, toilet, laundry, etc.) |
| **History** | Filterable table of all past entries, date range filter, trend chart for multiple entries, CSV export |
| **Goals** | Set daily goals for water intake, food footprint, and household use. See 7-day progress bars and personalized recommendations based on your actual habits. |
| **About** | Full explanation of water footprints, why they matter, data sources, and how-to guide |

---

## 📊 What It Tracks

### 1. Drinking Water
Personal water consumption logged in liters, with a visual glasses interface and goal tracking.

### 2. Food Water Footprint (Virtual Water)
50+ common foods with pre-computed water footprint values (liters per serving) from the Water Footprint Network. Categories include:
- 🥩 Red Meat (beef: 2,310 L/serving)
- 🍗 Poultry (chicken: 649 L/serving)
- 🥦 Vegetables (broccoli: 35 L/serving)
- 🫘 Legumes, 🥛 Dairy, 🍚 Grains, 🍎 Fruits, ☕ Beverages, and more

### 3. Household Water Use
- 🚿 Shower (7.6 L/min)
- 🚽 Toilet flushes (6 L/flush)
- 👕 Laundry loads (75 L/load)
- 🍽 Dishwasher (23 L/load)
- 🧽 Hand-washing dishes (38 L/session)
- 🚰 Running faucet (7.6 L/min)

---

## 🗂 Project Structure

```
/
├── index.html       # Dashboard — charts and overview stats
├── log.html         # Daily log entry form
├── history.html     # History table with filters and trend chart
├── goals.html       # Goals editor, progress bars, recommendations
├── about.html       # Project info, data sources, how-to guide
├── css/
│   └── style.css    # Shared stylesheet (CSS variables, responsive)
└── js/
    └── data.js      # Data layer: localStorage CRUD, food database,
                     # computed totals, shared utilities
```

---

## 🚀 Hosting on GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)`
4. Click **Save** — your site will be live at `https://yourusername.github.io/repo-name/`

No build step, no dependencies to install — it runs directly in the browser.

---

## 🔧 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 (custom properties, grid, flexbox) | Styling and responsive layout |
| Vanilla JavaScript (ES6+) | App logic, data management |
| [Chart.js 4.4](https://www.chartjs.org) | Interactive data charts |
| `localStorage` | Client-side data persistence — no server needed |
| Google Fonts (Poppins + Inter) | Typography |

---

## 📚 Data Sources

- **Water Footprint Network** — [waterfootprint.org](https://waterfootprint.org)
- Mekonnen & Hoekstra (2011) — *The green, blue and grey water footprint of crops and derived crop products.* Hydrology and Earth System Sciences, 15, 1577–1600.
- Mekonnen & Hoekstra (2012) — *A global assessment of the water footprint of farm animal products.* Ecosystems, 15(3), 401–415.
- US EPA WaterSense — household flow rates
- ENERGY STAR — appliance water use averages
- USGS Water Science School — US residential water use data

---

## 🎓 Academic Context

This project was developed as part of the **Honors Program** at **Minnesota State University Moorhead (MSUM)**. The project goal is to raise awareness about how everyday food choices translate into real freshwater demand — both visible household water and "virtual water" embedded invisibly in the food supply chain.

**Key research questions addressed:**
- How much water does a typical American diet consume per day?
- How does animal agriculture compare to plant-based foods in water demand?
- Can a simple tracking app help people make more water-conscious choices?

---

## ⚠️ Privacy

All data is stored exclusively in your browser's `localStorage`. No data is transmitted to any server. Clearing your browser data will erase all logged entries.

---

*EcoTrack — Making the invisible water in our food visible.*
