const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85";

const defaultRecipes = [
  {id:1,name:"Butter Chicken",category:"Main Course",time:"45 min",image:"https://b.zmtcdn.com/data/dish_photos/9bc/75f5a8ef577ac9f3b706f3701d9539bc.jpeg",ingredients:["500g chicken","2 tbsp butter","1 cup tomato puree","1/2 cup cream","1 tsp garam masala","Salt to taste"],instructions:"Marinate the chicken with spices. Cook until lightly browned. Prepare a tomato-butter gravy, add the chicken, and simmer. Finish with cream and garam masala.",rating:5,favorite:false,custom:false},
  {id:2,name:"Masala Dosa",category:"Breakfast",time:"35 min",image:"https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/masala_dosa_with_sambar.jpg",ingredients:["Dosa batter","3 potatoes","1 onion","Mustard seeds","Curry leaves","Salt"],instructions:"Prepare potato masala with onion and spices. Spread dosa batter thinly on a hot pan. Cook until crisp and serve with the potato filling.",rating:4,favorite:false,custom:false},
  {id:3,name:"Chocolate Cake",category:"Dessert",time:"50 min",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",ingredients:["1.5 cups flour","1 cup sugar","1/2 cup cocoa powder","2 eggs","1/2 cup milk","1 tsp baking powder"],instructions:"Mix the dry ingredients. Add eggs and milk and whisk into a smooth batter. Pour into a greased pan and bake until a toothpick comes out clean.",rating:5,favorite:false,custom:false},
  {id:4,name:"Paneer Tikka",category:"Snack",time:"30 min",image:"https://d3aje69y3ox4sq.cloudfront.net/uploads/6EgvCYP7yHIbA0_soj59LUJp2zfcntuwhQmk.webp?fit=cover&height=400&width=400",ingredients:["250g paneer","1 capsicum","1 onion","1/2 cup yogurt","Tikka masala","Lemon juice"],instructions:"Mix yogurt, spices and lemon juice. Coat paneer and vegetables. Thread onto skewers and grill or bake until lightly charred.",rating:4,favorite:false,custom:false},
  {id:5,name:"Veg Fried Rice",category:"Main Course",time:"25 min",image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/2/21/7323c38f-eee6-48cb-b7de-d04f89106bb4_6c49bc84-6779-4cf0-b3dc-b35fbd8ad2c3.jpg",ingredients:["2 cups cooked rice","1 carrot","1/2 cup peas","1 capsicum","Soy sauce","Salt and pepper"],instructions:"Heat oil in a wok. Stir-fry vegetables, add cooked rice and soy sauce. Toss on high heat for a few minutes and serve hot.",rating:4,favorite:false,custom:false},
  {id:6,name:"Fruit Pancakes",category:"Breakfast",time:"20 min",image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",ingredients:["1 cup flour","1 egg","3/4 cup milk","1 tbsp sugar","1 tsp baking powder","Fresh fruits"],instructions:"Whisk flour, egg, milk, sugar and baking powder. Cook small pancakes on a greased pan. Top with fresh fruits and serve.",rating:5,favorite:false,custom:false},
{id:7,name:"Margherita Pizza",category:"Main Course",time:"30 min",image:"https://images.deliveryhero.io/image/talabat/MenuItems/EE7D85531CAEE4CA88C1C89C60223830",ingredients:["Pizza dough","Tomato sauce","Mozzarella","Fresh basil","Olive oil","Salt"],instructions:"Stretch the dough, spread tomato sauce, add mozzarella and bake in a very hot oven until the crust is crisp and golden. Finish with basil and olive oil.",rating:5,favorite:false,custom:false},
  {id:8,name:"Pesto Pasta",category:"Main Course",time:"20 min",image:"https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/pasta_with_pesto_sauce.jpg",ingredients:["200g pasta","Fresh basil","Pine nuts","Parmesan","Garlic","Olive oil"],instructions:"Cook pasta until al dente. Blend basil, pine nuts, Parmesan, garlic and olive oil into pesto. Toss with warm pasta and serve.",rating:5,favorite:false,custom:false},
  {id:9,name:"Mango Cheesecake",category:"Dessert",time:"40 min",image:"https://primary.jwwb.nl/public/p/z/v/temp-rstngbgejzacfbopffkj/mango-cheesecake-standard.jpg",ingredients:["Cream cheese","Mango pulp","Digestive biscuits","Butter","Sugar","Whipping cream"],instructions:"Make a biscuit-butter base. Beat cream cheese with sugar and mango pulp, fold in whipped cream, pour over the base and chill until set.",rating:5,favorite:false,custom:false},
  {id:10,name:"Chole Bhature",category:"Main Course",time:"60 min",image:"https://phoranmasala.com/cdn/shop/articles/also-for-below-3-chole-bhature-north-indian-breakfast-favorite-tandoori-chicken-perfect-for-bbq-parties-paneer-tikka-vegetarian-grilling-delight_1097bea0-706d-4b07-af5f-d07fa98ef560.png?v=1780995846&width=1100",ingredients:["Chickpeas","Flour","Yogurt","Onion","Tomato","Chole spices"],instructions:"Soak and pressure-cook chickpeas. Prepare a spiced onion-tomato gravy and simmer the chickpeas. Make bhature dough with flour and yogurt, roll and deep-fry.",rating:5,favorite:false,custom:false},
  {id:11,name:"Aloo Paratha",category:"Breakfast",time:"35 min",image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2026/1/19/28fb48f9-fe87-447c-b623-f5f9cfcd8b48_2e142958-9ab1-44c0-a89d-f1d0b0f4624e.jpg",ingredients:["Wheat flour","Potatoes","Green chilli","Coriander","Cumin","Butter"],instructions:"Prepare a spiced mashed-potato filling. Stuff it inside wheat dough, roll gently and cook on a hot tawa with butter until golden on both sides.",rating:5,favorite:false,custom:false},
  {id:12,name:"Tandoori Momos",category:"Snack",time:"35 min",image:"https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/tandoori_momos.jpg",ingredients:["Momos","Yogurt","Tandoori masala","Capsicum","Onion","Lemon juice"],instructions:"Coat steamed momos with seasoned yogurt and tandoori spices. Add onion and capsicum, then grill or air-fry until lightly charred.",rating:4,favorite:false,custom:false},
  {id:13,name:"Pav Bhaji",category:"Snack",time:"40 min",image:"https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/pav_bhaji.jpg",ingredients:["Potatoes","Peas","Cauliflower","Tomatoes","Pav bhaji masala","Pav"],instructions:"Boil and mash the vegetables. Cook them with buttery onion-tomato masala until thick and fragrant. Toast pav with butter and serve.",rating:5,favorite:false,custom:false},
  {id:14,name:"Gulab Jamun",category:"Dessert",time:"45 min",image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Gulab_Jamun%2C_New_Delhi.jpg",ingredients:["Khoya or milk powder","Flour","Milk","Sugar","Cardamom","Rose water"],instructions:"Prepare a soft dough and shape small balls. Fry gently until golden. Soak the warm balls in hot cardamom-rose sugar syrup.",rating:5,favorite:false,custom:false},
  {id:15,name:"Avocado Toast",category:"Breakfast",time:"10 min",image:"https://static.wixstatic.com/media/f31a85_0934e5a820cb45c798d3de717af86e7b~mv2.jpeg/v1/fill/w_520%2Ch_520%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/f31a85_0934e5a820cb45c798d3de717af86e7b~mv2.jpeg",ingredients:["Bread","Avocado","Lemon juice","Chilli flakes","Black pepper","Salt"],instructions:"Toast the bread until crisp. Mash ripe avocado with lemon juice, salt and pepper. Spread generously and finish with chilli flakes.",rating:4,favorite:false,custom:false},
  {id:16,name:"Greek Salad",category:"Snack",time:"15 min",image:"https://static1.squarespace.com/static/57e0a920e6f2e1f209bcf6ae/58487aa420099e814c8c8268/640cdcd0a0aa3d7ce46e7364/1740009686821/Greek-Salad-Recipe.jpeg?format=1500w",ingredients:["Cucumber","Tomatoes","Olives","Feta","Onion","Olive oil"],instructions:"Chop vegetables and combine with olives and feta. Dress with olive oil, lemon juice, salt and pepper. Toss gently and serve chilled.",rating:4,favorite:false,custom:false},
  {id:17,name:"Red Velvet Cupcake",category:"Dessert",time:"35 min",image:"https://images.unsplash.com/photo-1759524322472-3f146a43cf9a?auto=format&fit=crop&fm=jpg&q=85&w=1200",ingredients:["Flour","Cocoa","Sugar","Eggs","Buttermilk","Cream cheese"],instructions:"Mix the dry and wet ingredients separately, then combine without overmixing. Bake in cupcake liners and top with smooth cream-cheese frosting.",rating:5,favorite:false,custom:false},
  {id:18,name:"Thai Green Curry",category:"Main Course",time:"35 min",image:"https://fudi.no/cdn/shop/articles/oppskrift-kremet-thai-gr-nn-karri.png?crop=center&height=720&v=1782856487&width=1080",ingredients:["Green curry paste","Coconut milk","Mixed vegetables","Basil","Soy sauce","Lime"],instructions:"Cook curry paste in a little oil. Add coconut milk and vegetables and simmer until tender. Finish with basil, lime and soy sauce.",rating:5,favorite:false,custom:false}
];

let recipes = JSON.parse(localStorage.getItem("veloraRecipes")) || defaultRecipes;

// Keep older localStorage data, but migrate every built-in recipe to its
// correct food-specific image. User-created recipes are never overwritten.
const defaultById = new Map(defaultRecipes.map(recipe => [recipe.id, recipe]));
const mergedIds = new Set(recipes.map(recipe => recipe.id));

recipes = recipes.map(recipe => {
  const builtIn = defaultById.get(recipe.id);
  return builtIn && !recipe.custom
    ? {...recipe, image: builtIn.image}
    : recipe;
});

defaultRecipes.forEach(recipe => {
  if (!mergedIds.has(recipe.id)) recipes.push({...recipe});
});

save();

let activeModalId = null;
let showingFavorites = false;

const $ = id => document.getElementById(id);
const grid = $("recipeGrid");
const searchInput = $("searchInput");
const categoryFilter = $("categoryFilter");
const sortFilter = $("sortFilter");
const modal = $("modal");

function save() {
  localStorage.setItem("veloraRecipes", JSON.stringify(recipes));
}

function stars(rating) {
  if (!rating) return "☆☆☆☆☆";
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function timeNumber(time) {
  const n = parseInt(time, 10);
  return Number.isFinite(n) ? n : 999;
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  let filtered = recipes.filter(r => {
    const text = `${r.name} ${r.category} ${r.ingredients.join(" ")}`.toLowerCase();
    return text.includes(query) &&
      (category === "all" || r.category === category) &&
      (!showingFavorites || r.favorite);
  });

  if (sortFilter.value === "rating") filtered.sort((a,b) => b.rating - a.rating);
  if (sortFilter.value === "name") filtered.sort((a,b) => a.name.localeCompare(b.name));
  if (sortFilter.value === "time") filtered.sort((a,b) => timeNumber(a.time) - timeNumber(b.time));

  grid.innerHTML = filtered.map((r, index) => `
    <article class="recipe-card" style="animation-delay:${index * 45}ms">
      <div class="card-image">
        <img src="${escapeAttr(r.image || FALLBACK_IMAGE)}" alt="${escapeAttr(r.name)}"
          onerror="this.src='${FALLBACK_IMAGE}'">
        <button class="favorite-btn ${r.favorite ? "active" : ""}" onclick="toggleFavorite(${r.id})" title="Favorite">
          ${r.favorite ? "♥" : "♡"}
        </button>
      </div>
      <div class="card-content">
        <span class="badge">${escapeHtml(r.category)}</span>
        <h3>${escapeHtml(r.name)}</h3>
        <div class="meta"><span>⏱ ${escapeHtml(r.time)}</span><span>${r.rating ? `${r.rating}.0` : "New"}</span></div>
        <div class="card-rating">${stars(r.rating)}</div>
        <button class="view-btn" onclick="openRecipe(${r.id})">Open recipe →</button>
      </div>
    </article>
  `).join("");

  $("emptyState").classList.toggle("hidden", filtered.length > 0);
  $("resultCount").textContent = showingFavorites
    ? `${filtered.length} favorite${filtered.length !== 1 ? "s" : ""} saved`
    : `${filtered.length} recipe${filtered.length !== 1 ? "s" : ""} ready to explore`;

  updateStats();
}

function updateStats() {
  $("totalRecipes").textContent = recipes.length;
  $("totalFavorites").textContent = recipes.filter(r => r.favorite).length;
  $("favoriteCount").textContent = recipes.filter(r => r.favorite).length;
  const rated = recipes.filter(r => r.rating > 0);
  $("avgRating").textContent = rated.length
    ? (rated.reduce((sum,r) => sum + r.rating, 0) / rated.length).toFixed(1)
    : "0.0";
  $("categoriesCount").textContent = new Set(recipes.map(r => r.category)).size;
}

window.toggleFavorite = function(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;
  recipe.favorite = !recipe.favorite;
  save();
  render();
  if (activeModalId === id) updateFavoriteButton(recipe);
  showToast(recipe.favorite ? "Added to favorites" : "Removed from favorites", recipe.favorite ? "♥" : "×");
};

function updateFavoriteButton(recipe) {
  $("favoriteBtn").textContent = recipe.favorite ? "♥ Saved to favorites" : "♡ Save to favorites";
}

window.openRecipe = function(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;

  activeModalId = id;
  $("modalImage").src = r.image || FALLBACK_IMAGE;
  $("modalImage").onerror = () => $("modalImage").src = FALLBACK_IMAGE;
  $("modalTitle").textContent = r.name;
  $("modalCategory").textContent = r.category;
  $("modalTime").textContent = `⏱ ${r.time}`;
  $("modalIngredients").innerHTML = r.ingredients.map(x => `<li>${escapeHtml(x)}</li>`).join("");
  $("modalInstructions").textContent = r.instructions;

  document.querySelectorAll("#rating button").forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.star) <= r.rating);
    btn.onclick = () => rateRecipe(Number(btn.dataset.star));
  });

  $("ratingText").textContent = r.rating ? `Current rating: ${r.rating}/5` : "Not rated yet";
  updateFavoriteButton(r);
  $("deleteBtn").classList.toggle("hidden", !r.custom);

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeModalId = null;
}

function rateRecipe(value) {
  const r = recipes.find(x => x.id === activeModalId);
  if (!r) return;
  r.rating = value;
  save();
  render();
  openRecipe(r.id);
  showToast(`Rated ${value}/5`, "★");
}

$("favoriteBtn").addEventListener("click", () => {
  if (activeModalId !== null) toggleFavorite(activeModalId);
});

$("deleteBtn").addEventListener("click", () => {
  const r = recipes.find(x => x.id === activeModalId);
  if (!r || !r.custom) return;
  recipes = recipes.filter(x => x.id !== activeModalId);
  save();
  closeModal();
  render();
  showToast("Recipe deleted", "×");
});

$("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

searchInput.addEventListener("input", render);
$("searchBtn").addEventListener("click", render);
$("clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  render();
  searchInput.focus();
});
categoryFilter.addEventListener("change", render);
sortFilter.addEventListener("change", render);

document.querySelectorAll("[data-quick]").forEach(btn => {
  btn.addEventListener("click", () => {
    showingFavorites = false;
    categoryFilter.value = btn.dataset.quick;
    searchInput.value = "";
    render();
    document.querySelector(".section-head").scrollIntoView({behavior:"smooth", block:"start"});
  });
});

$("favoritesNav").addEventListener("click", () => {
  showingFavorites = !showingFavorites;
  $("favoritesNav").classList.toggle("active", showingFavorites);
  render();
  document.querySelector(".section-head").scrollIntoView({behavior:"smooth", block:"start"});
});

$("resetFilters").addEventListener("click", () => {
  showingFavorites = false;
  searchInput.value = "";
  categoryFilter.value = "all";
  sortFilter.value = "featured";
  render();
});

$("gridView").addEventListener("click", () => {
  grid.classList.remove("list-mode");
  $("gridView").classList.add("active");
  $("listView").classList.remove("active");
});
$("listView").addEventListener("click", () => {
  grid.classList.add("list-mode");
  $("listView").classList.add("active");
  $("gridView").classList.remove("active");
});

$("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("veloraDark", dark);
  $("themeBtn").textContent = dark ? "☀" : "☾";
});

if (localStorage.getItem("veloraDark") === "true") {
  document.body.classList.add("dark");
  $("themeBtn").textContent = "☀";
}

$("recipeForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = $("recipeName").value.trim();
  const ingredients = $("recipeIngredients").value.split(",").map(x => x.trim()).filter(Boolean);

  const recipe = {
    id: Date.now(),
    name,
    category: $("recipeCategory").value,
    time: $("recipeTime").value.trim(),
    image: $("recipeImage").value.trim() || FALLBACK_IMAGE,
    ingredients,
    instructions: $("recipeInstructions").value.trim(),
    rating: 0,
    favorite: false,
    custom: true
  };

  recipes.unshift(recipe);
  save();
  e.target.reset();
  showingFavorites = false;
  render();
  showToast(`${name} added to your cookbook`, "✓");
  setTimeout(() => openRecipe(recipe.id), 250);
});

function showToast(message, icon = "✓") {
  $("toastMessage").textContent = message;
  $("toastIcon").textContent = icon;
  $("toast").classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => $("toast").classList.remove("show"), 2300);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[char]));
}
function escapeAttr(value) { return escapeHtml(value); }

for (let i = 0; i < 22; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = `${Math.random()*100}%`;
  p.style.animationDuration = `${8 + Math.random()*12}s`;
  p.style.animationDelay = `${Math.random()*-15}s`;
  p.style.opacity = `${.1 + Math.random()*.25}`;
  $("particles").appendChild(p);
}

render();
