// ============================================================
//  EcoTrack — Data Management Layer
//  All data is stored in localStorage under ECOTRACK_KEY.
// ============================================================

const ECOTRACK_KEY = 'ecotrack_v1';

// ────────────────────────────────────────────────────────────
//  Food Database
//  waterFootprint values are in LITERS PER SERVING
//  Sources: Water Footprint Network, Mekonnen & Hoekstra (2011)
// ────────────────────────────────────────────────────────────
const FOOD_DATABASE = [
  // Red Meat
  { id: 'beef',      name: 'Beef (150 g serving)',        category: 'red-meat',  label: 'Red Meat',     wfp: 2310, icon: '🥩' },
  { id: 'lamb',      name: 'Lamb (150 g serving)',        category: 'red-meat',  label: 'Red Meat',     wfp: 1950, icon: '🥩' },
  // Pork
  { id: 'pork',      name: 'Pork (150 g serving)',        category: 'pork',      label: 'Pork',         wfp:  898, icon: '🍖' },
  { id: 'bacon',     name: 'Bacon (3 strips, 45 g)',      category: 'pork',      label: 'Pork',         wfp:  269, icon: '🥓' },
  { id: 'ham',       name: 'Ham (150 g serving)',         category: 'pork',      label: 'Pork',         wfp:  700, icon: '🍖' },
  // Poultry
  { id: 'chicken',   name: 'Chicken (150 g serving)',     category: 'poultry',   label: 'Poultry',      wfp:  649, icon: '🍗' },
  { id: 'turkey',    name: 'Turkey (150 g serving)',      category: 'poultry',   label: 'Poultry',      wfp:  638, icon: '🍗' },
  // Fish & Seafood
  { id: 'salmon',    name: 'Salmon (150 g serving)',      category: 'fish',      label: 'Fish & Seafood',wfp: 550, icon: '🐟' },
  { id: 'tuna',      name: 'Tuna (150 g serving)',        category: 'fish',      label: 'Fish & Seafood',wfp: 407, icon: '🐟' },
  { id: 'shrimp',    name: 'Shrimp (150 g serving)',      category: 'fish',      label: 'Fish & Seafood',wfp: 590, icon: '🦐' },
  // Dairy
  { id: 'milk',      name: 'Milk (1 cup, 240 ml)',        category: 'dairy',     label: 'Dairy',        wfp:  255, icon: '🥛' },
  { id: 'cheese',    name: 'Cheese (1 slice, 30 g)',      category: 'dairy',     label: 'Dairy',        wfp:  152, icon: '🧀' },
  { id: 'yogurt',    name: 'Yogurt (1 cup, 240 g)',       category: 'dairy',     label: 'Dairy',        wfp:  378, icon: '🥛' },
  { id: 'butter',    name: 'Butter (1 tbsp, 14 g)',       category: 'dairy',     label: 'Dairy',        wfp:  138, icon: '🧈' },
  { id: 'ice-cream', name: 'Ice Cream (1 cup, 130 g)',    category: 'dairy',     label: 'Dairy',        wfp:  540, icon: '🍦' },
  // Eggs
  { id: 'egg',       name: 'Egg (1 large)',               category: 'eggs',      label: 'Eggs',         wfp:  196, icon: '🥚' },
  // Grains
  { id: 'white-rice',name: 'White Rice (1 cup cooked)',   category: 'grains',    label: 'Grains',       wfp:  370, icon: '🍚' },
  { id: 'brown-rice',name: 'Brown Rice (1 cup cooked)',   category: 'grains',    label: 'Grains',       wfp:  390, icon: '🍚' },
  { id: 'bread',     name: 'Bread (1 slice, 30 g)',       category: 'grains',    label: 'Grains',       wfp:   40, icon: '🍞' },
  { id: 'pasta',     name: 'Pasta (1 cup cooked)',        category: 'grains',    label: 'Grains',       wfp:  174, icon: '🍝' },
  { id: 'oatmeal',   name: 'Oatmeal (1 cup cooked)',      category: 'grains',    label: 'Grains',       wfp:  193, icon: '🥣' },
  { id: 'cereal',    name: 'Cereal (1 cup)',              category: 'grains',    label: 'Grains',       wfp:  155, icon: '🥣' },
  { id: 'tortilla',  name: 'Tortilla (1 medium, 45 g)',   category: 'grains',    label: 'Grains',       wfp:   72, icon: '🫓' },
  // Legumes
  { id: 'black-beans',name:'Black Beans (1 cup cooked)',  category: 'legumes',   label: 'Legumes',      wfp:  424, icon: '🫘' },
  { id: 'lentils',   name: 'Lentils (1 cup cooked)',      category: 'legumes',   label: 'Legumes',      wfp:  302, icon: '🫘' },
  { id: 'chickpeas', name: 'Chickpeas (1 cup cooked)',    category: 'legumes',   label: 'Legumes',      wfp:  424, icon: '🫘' },
  { id: 'tofu',      name: 'Tofu (½ cup, 126 g)',         category: 'legumes',   label: 'Legumes',      wfp:  302, icon: '🫘' },
  { id: 'edamame',   name: 'Edamame (1 cup)',             category: 'legumes',   label: 'Legumes',      wfp:  250, icon: '🫘' },
  // Nuts & Seeds
  { id: 'almonds',   name: 'Almonds (1 oz, 28 g)',        category: 'nuts',      label: 'Nuts & Seeds', wfp:  385, icon: '🥜' },
  { id: 'walnuts',   name: 'Walnuts (1 oz, 28 g)',        category: 'nuts',      label: 'Nuts & Seeds', wfp:  374, icon: '🥜' },
  { id: 'peanut-butter',name:'Peanut Butter (2 tbsp)',    category: 'nuts',      label: 'Nuts & Seeds', wfp:  453, icon: '🥜' },
  { id: 'cashews',   name: 'Cashews (1 oz, 28 g)',        category: 'nuts',      label: 'Nuts & Seeds', wfp:  353, icon: '🥜' },
  // Vegetables
  { id: 'broccoli',  name: 'Broccoli (1 cup)',            category: 'vegetables',label: 'Vegetables',   wfp:   35, icon: '🥦' },
  { id: 'spinach',   name: 'Spinach (1 cup)',             category: 'vegetables',label: 'Vegetables',   wfp:   29, icon: '🥬' },
  { id: 'tomato',    name: 'Tomato (1 medium)',           category: 'vegetables',label: 'Vegetables',   wfp:   63, icon: '🍅' },
  { id: 'potato',    name: 'Potato (1 medium)',           category: 'vegetables',label: 'Vegetables',   wfp:   56, icon: '🥔' },
  { id: 'carrot',    name: 'Carrot (1 medium)',           category: 'vegetables',label: 'Vegetables',   wfp:   25, icon: '🥕' },
  { id: 'lettuce',   name: 'Lettuce (1 cup)',             category: 'vegetables',label: 'Vegetables',   wfp:   13, icon: '🥬' },
  { id: 'corn',      name: 'Corn (1 ear)',                category: 'vegetables',label: 'Vegetables',   wfp:  160, icon: '🌽' },
  { id: 'bell-pepper',name:'Bell Pepper (1 medium)',      category: 'vegetables',label: 'Vegetables',   wfp:   52, icon: '🫑' },
  { id: 'cucumber',  name: 'Cucumber (1 medium)',         category: 'vegetables',label: 'Vegetables',   wfp:   28, icon: '🥒' },
  { id: 'onion',     name: 'Onion (1 medium)',            category: 'vegetables',label: 'Vegetables',   wfp:   33, icon: '🧅' },
  { id: 'sweet-potato',name:'Sweet Potato (1 medium)',    category: 'vegetables',label: 'Vegetables',   wfp:   59, icon: '🍠' },
  // Fruits
  { id: 'apple',     name: 'Apple (1 medium)',            category: 'fruits',    label: 'Fruits',       wfp:  125, icon: '🍎' },
  { id: 'banana',    name: 'Banana (1 medium)',           category: 'fruits',    label: 'Fruits',       wfp:  160, icon: '🍌' },
  { id: 'orange',    name: 'Orange (1 medium)',           category: 'fruits',    label: 'Fruits',       wfp:   80, icon: '🍊' },
  { id: 'strawberries',name:'Strawberries (1 cup)',       category: 'fruits',    label: 'Fruits',       wfp:   58, icon: '🍓' },
  { id: 'grapes',    name: 'Grapes (1 cup)',              category: 'fruits',    label: 'Fruits',       wfp:  121, icon: '🍇' },
  { id: 'avocado',   name: 'Avocado (½ medium)',          category: 'fruits',    label: 'Fruits',       wfp:  151, icon: '🥑' },
  { id: 'mango',     name: 'Mango (1 medium)',            category: 'fruits',    label: 'Fruits',       wfp:  220, icon: '🥭' },
  { id: 'blueberries',name:'Blueberries (1 cup)',         category: 'fruits',    label: 'Fruits',       wfp:   45, icon: '🫐' },
  // Beverages
  { id: 'coffee',    name: 'Coffee (1 cup brewed)',       category: 'beverages', label: 'Beverages',    wfp:  140, icon: '☕' },
  { id: 'tea',       name: 'Tea (1 cup brewed)',          category: 'beverages', label: 'Beverages',    wfp:   30, icon: '🍵' },
  { id: 'orange-juice',name:'Orange Juice (1 cup)',       category: 'beverages', label: 'Beverages',    wfp:  190, icon: '🍊' },
  { id: 'beer',      name: 'Beer (12 oz can)',            category: 'beverages', label: 'Beverages',    wfp:  185, icon: '🍺' },
  { id: 'wine',      name: 'Wine (5 oz glass)',           category: 'beverages', label: 'Beverages',    wfp:  470, icon: '🍷' },
  { id: 'soda',      name: 'Soda (12 oz can)',            category: 'beverages', label: 'Beverages',    wfp:  200, icon: '🥤' },
];

// ────────────────────────────────────────────────────────────
//  Household Water Defaults (liters)
// ────────────────────────────────────────────────────────────
const HOUSEHOLD = {
  showerPerMin:   7.6,   // liters per minute
  toiletPerFlush: 6.0,   // liters per flush
  laundryPerLoad: 75,    // liters per load (avg HE machine)
  dishwasherPerLoad: 23, // liters per dishwasher load
  handDishesPerSession: 38, // liters
  faucetPerMin:   7.6,   // running faucet
};

// ────────────────────────────────────────────────────────────
//  Category Color Map (for charts)
// ────────────────────────────────────────────────────────────
const CATEGORY_COLORS = {
  'red-meat':  '#E53935',
  'pork':      '#FB8C00',
  'poultry':   '#FDD835',
  'fish':      '#1E88E5',
  'dairy':     '#26C6DA',
  'eggs':      '#F9A825',
  'grains':    '#8D6E63',
  'legumes':   '#66BB6A',
  'nuts':      '#A1887F',
  'vegetables':'#43A047',
  'fruits':    '#EC407A',
  'beverages': '#7E57C2',
};

// ────────────────────────────────────────────────────────────
//  Storage Helpers
// ────────────────────────────────────────────────────────────
function _loadStore() {
  try {
    const raw = localStorage.getItem(ECOTRACK_KEY);
    return raw ? JSON.parse(raw) : _defaultStore();
  } catch {
    return _defaultStore();
  }
}

function _saveStore(store) {
  localStorage.setItem(ECOTRACK_KEY, JSON.stringify(store));
}

function _defaultStore() {
  return {
    entries: [],
    goals: {
      dailyWaterLiters:      2.5,
      maxFoodFootprintLiters: 4000,
      maxHouseholdLiters:    200,
      maxMeatPerWeek:        5,
    },
  };
}

// ────────────────────────────────────────────────────────────
//  Public API — Entries
// ────────────────────────────────────────────────────────────
function getEntries() {
  return _loadStore().entries;
}

function getEntryByDate(dateStr) {
  return getEntries().find(e => e.date === dateStr) || null;
}

function saveEntry(entry) {
  const store = _loadStore();
  const idx = store.entries.findIndex(e => e.id === entry.id);
  if (idx >= 0) {
    store.entries[idx] = entry;
  } else {
    store.entries.push(entry);
  }
  store.entries.sort((a, b) => b.date.localeCompare(a.date));
  _saveStore(store);
}

function deleteEntry(id) {
  const store = _loadStore();
  store.entries = store.entries.filter(e => e.id !== id);
  _saveStore(store);
}

function newEntry(dateStr) {
  return {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    date: dateStr,
    drinkingWater: 0,      // liters
    foods: [],             // [{ foodId, name, icon, category, wfp, qty }]
    household: {
      showerMin:        0,
      toiletFlushes:    0,
      laundryLoads:     0,
      dishwasherLoads:  0,
      handDishesSession:0,
      faucetMin:        0,
    },
    notes: '',
  };
}

// ────────────────────────────────────────────────────────────
//  Public API — Goals
// ────────────────────────────────────────────────────────────
function getGoals() {
  return _loadStore().goals;
}

function saveGoals(goals) {
  const store = _loadStore();
  store.goals = goals;
  _saveStore(store);
}

// ────────────────────────────────────────────────────────────
//  Computed Totals
// ────────────────────────────────────────────────────────────
function calcTotals(entry) {
  const foodFP = entry.foods.reduce((sum, f) => sum + f.wfp * f.qty, 0);
  const h = entry.household;
  const householdL =
    h.showerMin        * HOUSEHOLD.showerPerMin       +
    h.toiletFlushes    * HOUSEHOLD.toiletPerFlush      +
    h.laundryLoads     * HOUSEHOLD.laundryPerLoad      +
    h.dishwasherLoads  * HOUSEHOLD.dishwasherPerLoad   +
    h.handDishesSession* HOUSEHOLD.handDishesPerSession+
    h.faucetMin        * HOUSEHOLD.faucetPerMin;
  return {
    foodFP,
    householdL,
    drinkingL: entry.drinkingWater,
    totalL: foodFP + householdL + entry.drinkingWater,
  };
}

// ────────────────────────────────────────────────────────────
//  Date Utilities
// ────────────────────────────────────────────────────────────
function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function last7Days() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().split('T')[0]);
  }
  return days;
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[+m - 1]} ${+d}`;
}

function formatDateLong(dateStr) {
  const [y, m, d] = dateStr.split('-');
  const months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  return `${months[+m - 1]} ${+d}, ${y}`;
}

// ────────────────────────────────────────────────────────────
//  Number Formatting
// ────────────────────────────────────────────────────────────
function fmtL(liters, decimals = 0) {
  return liters.toLocaleString('en-US', { maximumFractionDigits: decimals });
}

// ────────────────────────────────────────────────────────────
//  Food Search
// ────────────────────────────────────────────────────────────
function searchFoods(query) {
  const q = query.toLowerCase().trim();
  if (!q) return FOOD_DATABASE.slice(0, 20);
  return FOOD_DATABASE.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.label.toLowerCase().includes(q) ||
    f.category.toLowerCase().includes(q)
  );
}

// ────────────────────────────────────────────────────────────
//  Shared Toast Notification
// ────────────────────────────────────────────────────────────
function showToast(message, type = 'success') {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${type === 'success' ? '✅' : '❌'}</span> ${message}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3200);
}

// ────────────────────────────────────────────────────────────
//  Shared Nav — highlight active link
// ────────────────────────────────────────────────────────────
function initNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
      }
    });
  }
}
