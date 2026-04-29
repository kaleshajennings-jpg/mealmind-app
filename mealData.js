// ============================================================
// MEALMIND — MEAL DATABASE v3.0
// 300+ meals across 8 cuisines, fully categorized
// Drop this file into your /src folder and import in App.js
// Usage: import { MEAL_DB, CUISINE_OPTIONS, DIET_OPTIONS } from './mealData';
// ============================================================

export const CUISINE_OPTIONS = [
  { id:"american",      label:"🍔 American",       color:"#E74C3C" },
  { id:"soul",          label:"🍗 Soul Food",       color:"#C9A84C" },
  { id:"caribbean",     label:"🌴 Caribbean",       color:"#27AE60" },
  { id:"mediterranean", label:"🫒 Mediterranean",   color:"#3498DB" },
  { id:"mexican",       label:"🌮 Mexican",         color:"#E67E22" },
  { id:"italian",       label:"🍝 Italian",         color:"#9B59B6" },
  { id:"asian",         label:"🍜 Asian",           color:"#1ABC9C" },
  { id:"indian",        label:"🍛 Indian",          color:"#F39C12" },
];

export const DIET_OPTIONS = [
  { id:"vegan",       label:"🌱 Vegan" },
  { id:"vegetarian",  label:"🥗 Vegetarian" },
  { id:"gluten-free", label:"🌾 Gluten-Free" },
  { id:"dairy-free",  label:"🥛 Dairy-Free" },
  { id:"keto",        label:"🥩 Keto" },
];

export const MEAL_DB = {

  // ════════════════════════════════════════════════════════════
  // BREAKFAST — 90+ meals
  // ════════════════════════════════════════════════════════════
  breakfast: [

    // ── AMERICAN BREAKFAST (15 meals) ──────────────────────
    {
      id:"ab1", name:"Classic Buttermilk Pancakes", emoji:"🥞",
      cuisine:"american", time:20, cal:420, tags:["vegetarian"],
      grocery:["2 cups all-purpose flour","2 tbsp granulated sugar","2 tsp baking powder","1/2 tsp baking soda","1/2 tsp salt","2 large eggs","1.5 cups buttermilk","3 tbsp melted unsalted butter","1 tsp vanilla extract","maple syrup for serving","extra butter for griddle"]
    },
    {
      id:"ab2", name:"Bacon Egg & Cheese Biscuit", emoji:"🧆",
      cuisine:"american", time:25, cal:510, tags:[],
      grocery:["2 cups self-rising flour","1/2 cup cold unsalted butter cubed","3/4 cup cold buttermilk","6 strips thick-cut bacon","4 large eggs","4 slices American cheese","salt & black pepper","1 tbsp butter for eggs"]
    },
    {
      id:"ab3", name:"Denver Omelette", emoji:"🍳",
      cuisine:"american", time:15, cal:380, tags:["gluten-free"],
      grocery:["3 large eggs","1/4 cup diced green bell pepper","1/4 cup diced red bell pepper","1/4 cup diced yellow onion","1/3 cup diced ham","1/3 cup shredded cheddar cheese","1 tbsp butter","salt & pepper","fresh chives for garnish"]
    },
    {
      id:"ab4", name:"French Toast with Berries", emoji:"🍞",
      cuisine:"american", time:20, cal:470, tags:["vegetarian"],
      grocery:["4 thick slices brioche bread","3 large eggs","1/2 cup whole milk","1 tsp vanilla extract","1 tsp cinnamon","1/4 tsp nutmeg","2 tbsp butter","1 cup mixed fresh berries","powdered sugar for dusting","maple syrup for serving"]
    },
    {
      id:"ab5", name:"Avocado Toast with Poached Eggs", emoji:"🥑",
      cuisine:"american", time:15, cal:390, tags:["vegetarian"],
      grocery:["2 slices thick sourdough bread","2 ripe avocados","2 large eggs","1 tbsp white vinegar for poaching","red pepper flakes","everything bagel seasoning","1 lemon for juice","salt & black pepper","microgreens for garnish"]
    },
    {
      id:"ab6", name:"Blueberry Waffles", emoji:"🧇",
      cuisine:"american", time:25, cal:450, tags:["vegetarian"],
      grocery:["2 cups all-purpose flour","2 tbsp sugar","1 tbsp baking powder","1/2 tsp salt","2 large eggs separated","1.75 cups whole milk","1/2 cup melted butter","1 tsp vanilla","1 cup fresh blueberries","maple syrup","whipped cream"]
    },
    {
      id:"ab7", name:"Breakfast Burrito", emoji:"🌯",
      cuisine:"american", time:20, cal:560, tags:[],
      grocery:["4 large flour tortillas","6 large eggs","1/2 lb breakfast sausage","1 cup frozen hash browns","1/2 cup shredded Mexican cheese blend","1/4 cup diced onion","1/4 cup diced bell pepper","salsa","sour cream","hot sauce"]
    },
    {
      id:"ab8", name:"Eggs Benedict", emoji:"🍳",
      cuisine:"american", time:30, cal:520, tags:[],
      grocery:["4 large eggs","4 slices Canadian bacon","2 English muffins","4 egg yolks for hollandaise","1/2 cup unsalted butter","1 lemon for juice","cayenne pepper","white vinegar for poaching","fresh chives","salt & white pepper"]
    },
    {
      id:"ab9", name:"Banana Nut Oatmeal", emoji:"🥣",
      cuisine:"american", time:10, cal:340, tags:["vegan","gluten-free"],
      grocery:["1.5 cups old-fashioned rolled oats","3 cups water or almond milk","2 ripe bananas sliced","1/4 cup chopped walnuts","2 tbsp honey or maple syrup","1 tsp cinnamon","1/4 tsp vanilla extract","pinch of salt","chia seeds optional"]
    },
    {
      id:"ab10", name:"Smoked Salmon Bagel", emoji:"🥯",
      cuisine:"american", time:10, cal:460, tags:[],
      grocery:["2 everything bagels","4 oz cream cheese softened","4 oz smoked salmon","1/4 red onion thinly sliced","2 tbsp capers","1 tomato thinly sliced","fresh dill","lemon wedges","everything bagel seasoning"]
    },
    {
      id:"ab11", name:"Hash Brown Skillet", emoji:"🍳",
      cuisine:"american", time:30, cal:490, tags:["gluten-free","vegetarian"],
      grocery:["4 medium russet potatoes grated","1 bell pepper diced","1 onion diced","2 cloves garlic minced","4 large eggs","1 cup shredded cheddar","3 tbsp vegetable oil","1 tsp paprika","salt & pepper","sour cream & chives to serve"]
    },
    {
      id:"ab12", name:"Cinnamon Roll Casserole", emoji:"🍮",
      cuisine:"american", time:40, cal:580, tags:["vegetarian"],
      grocery:["2 cans refrigerated cinnamon rolls","4 large eggs","1/2 cup heavy cream","1/4 cup maple syrup","1 tsp vanilla","1 tsp cinnamon","1/4 tsp nutmeg","cream cheese icing from cans","powdered sugar"]
    },
    {
      id:"ab13", name:"Turkey Sausage Scramble", emoji:"🍳",
      cuisine:"american", time:15, cal:350, tags:["gluten-free","dairy-free"],
      grocery:["1/2 lb turkey breakfast sausage","4 large eggs","2 egg whites","1 cup baby spinach","1/2 cup cherry tomatoes halved","1/4 cup diced onion","1 tsp olive oil","salt & pepper","fresh herbs of choice"]
    },
    {
      id:"ab14", name:"Peanut Butter Banana Smoothie Bowl", emoji:"🫐",
      cuisine:"american", time:10, cal:420, tags:["vegan","gluten-free"],
      grocery:["2 frozen bananas","2 tbsp peanut butter","1/2 cup almond milk","1/2 cup granola","1/2 cup sliced fresh strawberries","2 tbsp honey","1 tbsp chia seeds","1 tbsp hemp seeds","coconut flakes"]
    },
    {
      id:"ab15", name:"Corned Beef Hash", emoji:"🍳",
      cuisine:"american", time:25, cal:510, tags:["gluten-free"],
      grocery:["1 can (15oz) corned beef hash or 2 cups homemade","3 medium potatoes diced and parboiled","1/2 onion diced","1/2 bell pepper diced","3 cloves garlic","2 tbsp butter","4 large eggs","salt & pepper","hot sauce","fresh parsley"]
    },

    // ── SOUL FOOD BREAKFAST (12 meals) ─────────────────────
    {
      id:"sb1", name:"Shrimp & Cheese Grits", emoji:"🍤",
      cuisine:"soul", time:35, cal:580, tags:["gluten-free"],
      grocery:["1 lb large gulf shrimp peeled & deveined","1 cup stone-ground white grits","2.5 cups chicken broth","1 cup whole milk","3/4 cup sharp cheddar shredded","3 strips thick bacon","4 scallions sliced","3 cloves garlic minced","1 tbsp Cajun seasoning","2 tbsp unsalted butter","hot sauce","lemon wedge"]
    },
    {
      id:"sb2", name:"Southern Salmon Croquettes", emoji:"🐟",
      cuisine:"soul", time:25, cal:390, tags:[],
      grocery:["2 cans (14.75oz) pink salmon drained","2 large eggs","1/3 cup all-purpose flour","1/2 yellow onion finely minced","1/2 green bell pepper finely minced","2 tsp garlic powder","2 tsp Old Bay seasoning","1/2 tsp black pepper","vegetable oil for pan frying","lemon wedges","hot sauce for serving"]
    },
    {
      id:"sb3", name:"Fluffy Buttermilk Biscuits & Sausage Gravy", emoji:"🫓",
      cuisine:"soul", time:45, cal:610, tags:[],
      grocery:["2 cups self-rising flour","1/2 cup cold butter cubed","3/4 cup buttermilk","1 lb pork breakfast sausage","3 tbsp all-purpose flour","2.5 cups whole milk","1 tsp black pepper","1/2 tsp red pepper flakes","salt to taste","4 eggs scrambled on side"]
    },
    {
      id:"sb4", name:"Fried Chicken & Waffles", emoji:"🧇",
      cuisine:"soul", time:45, cal:720, tags:[],
      grocery:["4 boneless chicken thighs","1 cup buttermilk for marinating","1.5 cups flour","1 tsp paprika","1 tsp garlic powder","1 tsp cayenne","oil for frying","2 cups all-purpose flour for waffles","2 tbsp sugar","1 tbsp baking powder","2 eggs","1.5 cups milk","1/3 cup melted butter","maple syrup","hot sauce"]
    },
    {
      id:"sb5", name:"Smoked Sausage & Egg Scramble", emoji:"🍳",
      cuisine:"soul", time:20, cal:480, tags:["gluten-free"],
      grocery:["1/2 lb smoked andouille sausage sliced","5 large eggs","1/4 cup heavy cream","1/2 onion diced","1/2 green bell pepper diced","1/2 red bell pepper diced","2 cloves garlic","1/2 cup shredded pepper jack cheese","salt & pepper","hot sauce","fresh chives"]
    },
    {
      id:"sb6", name:"Sweet Potato Pancakes", emoji:"🥞",
      cuisine:"soul", time:30, cal:430, tags:["vegetarian"],
      grocery:["1 cup mashed cooked sweet potato","1.5 cups all-purpose flour","2 tsp baking powder","1 tsp cinnamon","1/2 tsp nutmeg","1/4 tsp allspice","2 large eggs","1 cup whole milk","2 tbsp brown sugar","3 tbsp melted butter","vanilla extract","maple syrup","pecans for topping"]
    },
    {
      id:"sb7", name:"Catfish & Grits", emoji:"🐟",
      cuisine:"soul", time:30, cal:540, tags:["gluten-free"],
      grocery:["4 catfish fillets","1 cup stone-ground grits","2.5 cups water","1 cup chicken broth","1/2 cup sharp cheddar","2 tbsp butter","1 tbsp Cajun seasoning","1 cup cornmeal for dredging","vegetable oil for frying","lemon","hot sauce","scallions"]
    },
    {
      id:"sb8", name:"Pimento Cheese Omelette", emoji:"🍳",
      cuisine:"soul", time:15, cal:420, tags:["gluten-free","vegetarian"],
      grocery:["4 large eggs","1/4 cup pimento cheese (store-bought)","1/4 cup diced roasted red pepper","2 tbsp diced jalapeño","1 tbsp butter","salt & pepper","fresh chives","hot sauce","buttered toast to serve"]
    },
    {
      id:"sb9", name:"Country Ham Steak & Red-Eye Gravy", emoji:"🥩",
      cuisine:"soul", time:20, cal:390, tags:["gluten-free","dairy-free"],
      grocery:["2 thick slices country ham","1/2 cup strong black coffee","1/4 cup water","1 tbsp brown sugar","black pepper","biscuits or grits to serve","butter","fresh parsley"]
    },
    {
      id:"sb10", name:"Southern Cheese Grits Bowl", emoji:"🥣",
      cuisine:"soul", time:25, cal:460, tags:["gluten-free","vegetarian"],
      grocery:["1 cup stone-ground grits","2.5 cups water","1 cup chicken broth","1 cup sharp cheddar shredded","1/4 cup parmesan grated","3 tbsp unsalted butter","1/2 cup heavy cream","salt & pepper","hot sauce","scallions","fried egg on top"]
    },
    {
      id:"sb11", name:"Loaded Sweet Potato Hash", emoji:"🍠",
      cuisine:"soul", time:30, cal:410, tags:["gluten-free","vegan"],
      grocery:["3 large sweet potatoes diced","1 red onion diced","1 red bell pepper diced","1 green bell pepper diced","3 cloves garlic","1 cup black beans drained","2 tsp smoked paprika","1 tsp cumin","1 tsp garlic powder","3 tbsp vegetable oil","salt & pepper","avocado to serve","hot sauce"]
    },
    {
      id:"sb12", name:"Hoppin' John Breakfast Bowl", emoji:"🍚",
      cuisine:"soul", time:25, cal:440, tags:["gluten-free","dairy-free"],
      grocery:["2 cups cooked black-eyed peas","1 cup long-grain white rice cooked","1/4 lb smoked ham hock meat picked","1/2 onion diced","2 stalks celery diced","2 cloves garlic","1 tbsp vegetable oil","1 tsp Cajun seasoning","salt & pepper","scallions","hot sauce","2 fried eggs on top"]
    },

    // ── CARIBBEAN BREAKFAST (12 meals) ─────────────────────
    {
      id:"cb1", name:"Ackee & Saltfish", emoji:"🌺",
      cuisine:"caribbean", time:30, cal:440, tags:["gluten-free","dairy-free"],
      grocery:["1 can (19oz) ackee drained carefully","1/2 lb saltfish (salt cod) soaked overnight & flaked","1 large tomato diced","3 scallions sliced","1/2 onion sliced","1 scotch bonnet pepper seeded & minced","2 tbsp vegetable oil","fresh thyme sprigs","1/4 tsp black pepper","fried dumplings or hard dough bread to serve"]
    },
    {
      id:"cb2", name:"Jamaican Cornmeal Porridge", emoji:"🥣",
      cuisine:"caribbean", time:20, cal:310, tags:["vegan","gluten-free"],
      grocery:["1 cup fine yellow cornmeal","3 cups water","1 can (14oz) full-fat coconut milk","3 tbsp brown sugar or to taste","1/2 tsp vanilla extract","1/4 tsp cinnamon","1/4 tsp nutmeg","1/8 tsp allspice","pinch of salt","condensed milk drizzle optional","ripe banana or mango to serve"]
    },
    {
      id:"cb3", name:"Trinidadian Doubles", emoji:"🫓",
      cuisine:"caribbean", time:45, cal:390, tags:["vegan"],
      grocery:["2 cups all-purpose flour","1 tsp active dry yeast","1 tsp turmeric","1 tsp cumin","1 tsp sugar","1/2 tsp salt","3/4 cup warm water","2 cans (15oz) chickpeas","2 tbsp curry powder","1 onion diced","4 cloves garlic","1 tsp cumin seeds","tamarind sauce","pepper sauce","cucumber chutney"]
    },
    {
      id:"cb4", name:"Bajan Bakes & Fishcakes", emoji:"🐠",
      cuisine:"caribbean", time:40, cal:470, tags:[],
      grocery:["2 cups all-purpose flour","2 tsp baking powder","1/4 tsp salt","3/4 cup water","1/2 lb salted codfish soaked & flaked","1 onion finely diced","2 scallions","1 scotch bonnet minced","1/4 cup fresh parsley","1/2 cup flour for fishcakes","1 egg","oil for frying"]
    },
    {
      id:"cb5", name:"Jamaican Boiled Dumplings & Callaloo", emoji:"🥬",
      cuisine:"caribbean", time:30, cal:360, tags:["vegan"],
      grocery:["2 cups all-purpose flour","1/2 tsp salt","3/4 cup water","1 lb fresh callaloo or spinach","1/2 onion sliced","2 cloves garlic","1 scotch bonnet","2 tbsp vegetable oil","1/4 cup coconut milk","thyme sprigs","salt & pepper"]
    },
    {
      id:"cb6", name:"Trinidadian Sada Roti & Choka", emoji:"🫓",
      cuisine:"caribbean", time:35, cal:410, tags:["vegan"],
      grocery:["2 cups all-purpose flour","1 tsp baking powder","1/4 tsp salt","3/4 cup water","4 large tomatoes","1 head garlic roasted","1 scotch bonnet","1 tbsp vegetable oil","fresh shadow beni (culantro)","salt to taste"]
    },
    {
      id:"cb7", name:"Haitian Pain Patate (Sweet Potato Pudding)", emoji:"🍮",
      cuisine:"caribbean", time:50, cal:380, tags:["vegan","gluten-free"],
      grocery:["3 large sweet potatoes grated","1 can (14oz) coconut milk","1/2 cup brown sugar","1 tsp vanilla","1/2 tsp cinnamon","1/4 tsp nutmeg","1/4 tsp allspice","1/4 cup raisins","2 tbsp butter or coconut oil","pinch of salt"]
    },
    {
      id:"cb8", name:"Jamaican Ital Stew (Breakfast)", emoji:"🫕",
      cuisine:"caribbean", time:35, cal:340, tags:["vegan","gluten-free"],
      grocery:["2 cups chopped mixed vegetables (cho-cho, carrot, potato)","1 cup kidney beans drained","1 can (14oz) coconut milk","1 cup vegetable broth","1/2 onion diced","3 cloves garlic","1 scotch bonnet","thyme sprigs","allspice berries","salt & pepper","scallions"]
    },
    {
      id:"cb9", name:"Barbadian Coconut Bakes", emoji:"🥐",
      cuisine:"caribbean", time:30, cal:350, tags:["vegetarian"],
      grocery:["2 cups all-purpose flour","1/2 cup grated coconut","3 tbsp brown sugar","1 tbsp baking powder","1/4 tsp salt","3 tbsp butter","3/4 cup coconut milk","butter & jam to serve"]
    },
    {
      id:"cb10", name:"Cuban Tostadas with Eggs", emoji:"🍳",
      cuisine:"caribbean", time:15, cal:390, tags:["vegetarian"],
      grocery:["4 Cuban bread slices toasted","4 large eggs","2 tbsp butter","1/2 cup black beans mashed","1/4 cup shredded white cheese","1 ripe tomato sliced","fresh cilantro","salt & pepper","hot sauce","1 lime"]
    },
    {
      id:"cb11", name:"Puerto Rican Mallorca with Ham & Cheese", emoji:"🥐",
      cuisine:"caribbean", time:20, cal:420, tags:[],
      grocery:["4 Mallorca sweet rolls (bakery or homemade)","4 slices honey ham","4 slices Swiss cheese","2 tbsp butter","powdered sugar for dusting","café con leche to serve"]
    },
    {
      id:"cb12", name:"Guyanese Metemgee (Breakfast Version)", emoji:"🥘",
      cuisine:"caribbean", time:50, cal:490, tags:["vegan","gluten-free"],
      grocery:["1 cup diced yam","1 cup diced dasheen (taro)","1 cup diced plantain","1 cup diced cassava","2 cups coconut milk","2 cups water","1 onion sliced","3 cloves garlic","thyme sprigs","1 scotch bonnet","salt to taste"]
    },

    // ── MEDITERRANEAN BREAKFAST (12 meals) ─────────────────
    {
      id:"mb1", name:"Classic Shakshuka", emoji:"🍅",
      cuisine:"mediterranean", time:25, cal:360, tags:["vegetarian","gluten-free"],
      grocery:["1 can (28oz) whole peeled tomatoes crushed by hand","4 large eggs","1 red bell pepper diced","1 onion diced","4 cloves garlic minced","1.5 tsp ground cumin","1.5 tsp paprika","1/2 tsp chili flakes","2 tbsp olive oil","1/2 cup crumbled feta","fresh flat-leaf parsley","crusty bread for dipping","salt & pepper"]
    },
    {
      id:"mb2", name:"Green Shakshuka with Spinach & Feta", emoji:"🥬",
      cuisine:"mediterranean", time:20, cal:320, tags:["vegetarian","gluten-free"],
      grocery:["4 large eggs","4 cups baby spinach","1 zucchini grated","1 leek thinly sliced","4 cloves garlic","1/2 cup crumbled feta","1/4 cup fresh dill","1/4 cup fresh parsley","2 tbsp olive oil","salt & pepper","pita or sourdough to serve"]
    },
    {
      id:"mb3", name:"Avocado & Feta Toast with Za'atar", emoji:"🥑",
      cuisine:"mediterranean", time:10, cal:360, tags:["vegetarian"],
      grocery:["2 slices sourdough or pita bread","2 ripe avocados","1/2 cup crumbled feta","1 cup cherry tomatoes halved","1 tbsp za'atar spice blend","2 tbsp extra virgin olive oil","1 lemon for juice","flaky sea salt","fresh mint leaves","red pepper flakes"]
    },
    {
      id:"mb4", name:"Greek Yogurt Bowl with Honey & Walnuts", emoji:"🫙",
      cuisine:"mediterranean", time:5, cal:290, tags:["vegetarian","gluten-free"],
      grocery:["2 cups full-fat Greek yogurt","3 tbsp thyme honey","1/3 cup roughly chopped toasted walnuts","1/2 cup fresh pomegranate seeds","1/2 cup sliced fresh figs or strawberries","1 tbsp rose water optional","pinch of cinnamon","fresh mint"]
    },
    {
      id:"mb5", name:"Menemen (Turkish Scrambled Eggs)", emoji:"🍳",
      cuisine:"mediterranean", time:15, cal:310, tags:["vegetarian","gluten-free"],
      grocery:["4 large eggs","2 medium tomatoes diced","2 cubanelle peppers diced","1 small onion diced","2 tbsp olive oil","1 tsp red pepper flakes","1/2 tsp cumin","salt to taste","fresh parsley","crusty Turkish bread or pita","white cheese crumbled on top"]
    },
    {
      id:"mb6", name:"Labneh Toast with Roasted Tomatoes", emoji:"🍅",
      cuisine:"mediterranean", time:25, cal:340, tags:["vegetarian"],
      grocery:["1 cup labneh (strained yogurt)","4 slices sourdough","1 cup cherry tomatoes","3 tbsp olive oil","2 cloves garlic","fresh thyme","za'atar","1 tbsp honey","fresh mint","flaky salt","lemon zest"]
    },
    {
      id:"mb7", name:"Spanakopita Breakfast Bites", emoji:"🥐",
      cuisine:"mediterranean", time:35, cal:390, tags:["vegetarian"],
      grocery:["1 package phyllo dough (8oz)","4 cups fresh spinach wilted & squeezed","1 cup crumbled feta","1/2 cup ricotta","2 large eggs","1/4 cup fresh dill","1/4 cup fresh parsley","1 onion diced sautéed","1/2 cup melted butter for brushing","salt & pepper","nutmeg"]
    },
    {
      id:"mb8", name:"Ful Medames (Egyptian Fava Beans)", emoji:"🫘",
      cuisine:"mediterranean", time:20, cal:350, tags:["vegan","gluten-free"],
      grocery:["2 cans (15oz) fava beans drained","4 cloves garlic mashed","1/4 cup extra virgin olive oil","2 lemons juiced","1 tsp ground cumin","1/2 tsp chili powder","fresh parsley","2 tomatoes diced","1/2 onion diced","pita bread","hard boiled eggs optional"]
    },
    {
      id:"mb9", name:"Börek (Turkish Cheese Pastry)", emoji:"🥐",
      cuisine:"mediterranean", time:45, cal:470, tags:["vegetarian"],
      grocery:["1 package phyllo dough","2 cups crumbled white cheese or feta","2 cups ricotta","2 large eggs","1/4 cup fresh parsley","1/2 cup melted butter","1 tbsp olive oil","sesame seeds & nigella seeds for topping","salt & pepper"]
    },
    {
      id:"mb10", name:"Moroccan Msemen (Flatbread) with Honey", emoji:"🫓",
      cuisine:"mediterranean", time:40, cal:380, tags:["vegetarian"],
      grocery:["2 cups all-purpose flour","1/2 cup fine semolina","1 tsp salt","3/4 cup warm water","1/4 cup melted butter","1/4 cup vegetable oil","honey for dipping","argan oil optional","fresh mint tea to serve"]
    },
    {
      id:"mb11", name:"Israeli Sabich (Pita Breakfast Sandwich)", emoji:"🥪",
      cuisine:"mediterranean", time:20, cal:490, tags:["vegetarian"],
      grocery:["4 pita breads","4 hard-boiled eggs sliced","1 large eggplant sliced & fried","1 cup hummus","1 tomato diced","1 cucumber diced","1/4 cup amba sauce (mango pickle)","tahini","fresh parsley","Iraqi pickled mango (amba)"]
    },
    {
      id:"mb12", name:"Kagianas (Greek Egg & Tomato Scramble)", emoji:"🍳",
      cuisine:"mediterranean", time:15, cal:290, tags:["vegetarian","gluten-free"],
      grocery:["4 large eggs","3 large ripe tomatoes grated","1/4 cup olive oil","1/2 tsp sugar","salt & pepper","dried oregano","fresh basil","feta crumbled on top","crusty Greek bread"]
    },

    // ── MEXICAN BREAKFAST (12 meals) ───────────────────────
    {
      id:"mxb1", name:"Huevos Rancheros", emoji:"🌮",
      cuisine:"mexican", time:20, cal:450, tags:["vegetarian","gluten-free"],
      grocery:["4 corn tortillas","4 large eggs","1 can (15oz) black beans","1 can (14oz) fire-roasted diced tomatoes","1 jalapeño diced","1/2 white onion diced","3 cloves garlic","1 tsp cumin","2 tbsp vegetable oil","1 ripe avocado","sour cream","cotija cheese crumbled","fresh cilantro","lime wedges"]
    },
    {
      id:"mxb2", name:"Chilaquiles Rojos with Chicken", emoji:"🫕",
      cuisine:"mexican", time:30, cal:510, tags:["gluten-free"],
      grocery:["4 cups tortilla chips (thick cut)","2 cups red salsa (store-bought or homemade)","2 cups shredded rotisserie chicken","1/2 cup chicken broth","1/2 cup Mexican crema","1/2 cup crumbled cotija cheese","1/2 white onion thinly sliced","fresh cilantro","2 fried eggs on top","lime wedges","avocado slices"]
    },
    {
      id:"mxb3", name:"Chorizo & Egg Breakfast Tacos", emoji:"🌯",
      cuisine:"mexican", time:20, cal:520, tags:[],
      grocery:["1/2 lb Mexican chorizo casing removed","4 large eggs","6 small corn tortillas","1/2 white onion diced","2 scallions sliced","1/2 cup shredded Oaxacan cheese","salsa verde","sour cream","fresh cilantro","lime wedges","pickled jalapeños"]
    },
    {
      id:"mxb4", name:"Tamales with Salsa Verde", emoji:"🌽",
      cuisine:"mexican", time:120, cal:480, tags:["vegetarian"],
      grocery:["2 cups masa harina","1 cup lard or vegetable shortening","1.5 cups warm chicken broth","dried corn husks soaked","2 cups cheese & jalapeño filling","2 cups store-bought or homemade salsa verde","Mexican crema","fresh cilantro"]
    },
    {
      id:"mxb5", name:"Molletes (Mexican Breakfast Bread)", emoji:"🍞",
      cuisine:"mexican", time:15, cal:430, tags:["vegetarian"],
      grocery:["2 bolillo rolls halved","1 can (15oz) refried beans","1 cup shredded Manchego or Oaxacan cheese","1 cup pico de gallo","1 jalapeño diced","fresh cilantro","lime","butter for rolls"]
    },
    {
      id:"mxb6", name:"Enfrijoladas (Bean-Smothered Tortillas)", emoji:"🫔",
      cuisine:"mexican", time:25, cal:460, tags:["vegetarian","gluten-free"],
      grocery:["8 corn tortillas","2 cans (15oz) black beans","3 cloves garlic","1/2 white onion","2 chipotle chiles in adobo","1 cup chicken broth","1/2 cup Mexican crema","cotija cheese","fresh cilantro","white onion rings","4 fried eggs","queso fresco"]
    },
    {
      id:"mxb7", name:"Machaca con Huevo (Dried Beef & Eggs)", emoji:"🍳",
      cuisine:"mexican", time:20, cal:440, tags:["gluten-free","dairy-free"],
      grocery:["1/2 lb machaca (dried shredded beef) or carne seca","4 large eggs","1/2 white onion diced","1/2 cup diced tomatoes","1/4 cup diced green chiles","2 tbsp vegetable oil","fresh cilantro","flour or corn tortillas","salsa","lime"]
    },
    {
      id:"mxb8", name:"Pan Dulce Breakfast Spread", emoji:"🥐",
      cuisine:"mexican", time:5, cal:360, tags:["vegetarian"],
      grocery:["4 pieces assorted pan dulce (conchas, cuernos)","1 cup café de olla (cinnamon coffee)","2 tbsp piloncillo or brown sugar","1 cinnamon stick","orange zest","butter","fruit jam optional"]
    },
    {
      id:"mxb9", name:"Discada (Northern Mexican Breakfast Skillet)", emoji:"🍳",
      cuisine:"mexican", time:35, cal:570, tags:["gluten-free","dairy-free"],
      grocery:["1/4 lb bacon diced","1/4 lb Mexican chorizo","1/4 lb ham diced","1/4 lb hot dogs sliced","1/2 lb ground beef","1 white onion diced","2 tomatoes diced","2 Anaheim chiles diced","3 cloves garlic","flour tortillas","hot sauce","lime"]
    },
    {
      id:"mxb10", name:"Avena (Mexican Oatmeal with Piloncillo)", emoji:"🥣",
      cuisine:"mexican", time:15, cal:320, tags:["vegan"],
      grocery:["1.5 cups old-fashioned oats","3 cups whole milk or oat milk","1/4 cup piloncillo or brown sugar","1 cinnamon stick","1/4 tsp vanilla","1/2 cup raisins","pinch of salt","sliced banana to serve","pecans optional"]
    },
    {
      id:"mxb11", name:"Enfrijoladas Verdes (Green Bean Tortillas)", emoji:"🫔",
      cuisine:"mexican", time:25, cal:420, tags:["vegetarian","gluten-free"],
      grocery:["8 corn tortillas","2 cans (15oz) pinto beans","1/2 cup tomatillo salsa","1/2 cup chicken broth","2 cloves garlic","1/2 onion","1 cup queso fresco","Mexican crema","fresh cilantro","4 fried eggs","avocado slices"]
    },
    {
      id:"mxb12", name:"Picadillo con Huevo (Ground Beef & Egg Skillet)", emoji:"🍳",
      cuisine:"mexican", time:25, cal:480, tags:["gluten-free","dairy-free"],
      grocery:["1/2 lb ground beef","3 large eggs","2 medium potatoes diced small","1 tomato diced","1/2 white onion diced","2 serrano chiles minced","3 cloves garlic","2 tbsp vegetable oil","1/2 tsp cumin","salt & pepper","corn tortillas to serve","hot sauce"]
    },

    // ── ITALIAN BREAKFAST (10 meals) ───────────────────────
    {
      id:"itb1", name:"Frittata Primavera", emoji:"🍳",
      cuisine:"italian", time:30, cal:380, tags:["vegetarian","gluten-free"],
      grocery:["6 large eggs","1 zucchini thinly sliced","1 cup cherry tomatoes halved","2 cups baby spinach","1/2 red onion diced","1/2 cup shredded mozzarella","1/4 cup grated Parmigiano-Reggiano","2 tbsp extra virgin olive oil","fresh basil","salt & pepper"]
    },
    {
      id:"itb2", name:"Uova in Purgatorio (Eggs in Purgatory)", emoji:"🍅",
      cuisine:"italian", time:20, cal:340, tags:["vegetarian","gluten-free"],
      grocery:["4 large eggs","1 can (28oz) San Marzano tomatoes","4 cloves garlic sliced","1/2 tsp red pepper flakes","2 tbsp extra virgin olive oil","fresh basil","1/4 cup grated Pecorino Romano","ciabatta or sourdough bread","salt & pepper"]
    },
    {
      id:"itb3", name:"Cornetto & Cappuccino Breakfast", emoji:"🥐",
      cuisine:"italian", time:5, cal:340, tags:["vegetarian"],
      grocery:["4 Italian croissants (cornetti)","apricot or raspberry jam","Nutella optional","2 shots espresso","1 cup steamed whole milk","cocoa powder for dusting","sugar optional"]
    },
    {
      id:"itb4", name:"Focaccia Caprese Breakfast Sandwich", emoji:"🥪",
      cuisine:"italian", time:15, cal:420, tags:["vegetarian"],
      grocery:["4 pieces focaccia bread","8 oz fresh mozzarella sliced","2 large tomatoes sliced","fresh basil leaves","3 tbsp extra virgin olive oil","1 tbsp balsamic glaze","flaky sea salt","black pepper","4 large eggs fried (optional)"]
    },
    {
      id:"itb5", name:"Torta di Riso (Italian Rice Breakfast Cake)", emoji:"🍮",
      cuisine:"italian", time:60, cal:410, tags:["vegetarian","gluten-free"],
      grocery:["2 cups Arborio rice","4 cups whole milk","3/4 cup sugar","4 eggs","zest of 1 lemon","zest of 1 orange","1 tsp vanilla extract","1/4 cup rum optional","pinch of cinnamon","powdered sugar for dusting"]
    },
    {
      id:"itb6", name:"Panzanella Breakfast Bowl", emoji:"🥗",
      cuisine:"italian", time:15, cal:330, tags:["vegetarian"],
      grocery:["4 thick slices stale Tuscan bread cubed","2 large ripe tomatoes diced","1 cucumber diced","1/2 red onion thinly sliced","fresh basil","3 tbsp extra virgin olive oil","2 tbsp red wine vinegar","salt & pepper","soft-boiled eggs optional"]
    },
    {
      id:"itb7", name:"Polenta e Uova (Polenta with Eggs)", emoji:"🍳",
      cuisine:"italian", time:25, cal:400, tags:["vegetarian","gluten-free"],
      grocery:["1 cup coarse polenta","3 cups water","1 cup chicken broth","1/2 cup grated Parmigiano-Reggiano","2 tbsp butter","4 large eggs","2 tbsp olive oil","salt & pepper","fresh rosemary","truffle oil optional"]
    },
    {
      id:"itb8", name:"Ribollita Breakfast Soup", emoji:"🍲",
      cuisine:"italian", time:30, cal:350, tags:["vegan"],
      grocery:["2 cups leftover minestrone or make fresh","1 cup canned cannellini beans","2 cups Tuscan kale (cavolo nero)","2 cups stale bread cubed","1 can (14oz) diced tomatoes","1 onion diced","3 cloves garlic","2 tbsp olive oil","fresh rosemary & thyme","salt & pepper"]
    },
    {
      id:"itb9", name:"Bruschetta con Uova e Tartufo", emoji:"🍞",
      cuisine:"italian", time:15, cal:380, tags:["vegetarian"],
      grocery:["4 slices thick sourdough or ciabatta","4 large eggs poached","1/4 cup black truffle paste (or tapenade)","2 tbsp butter","fresh thyme","grated Parmigiano","extra virgin olive oil","flaky salt","black pepper"]
    },
    {
      id:"itb10", name:"Sicilian Arancini Breakfast Balls", emoji:"🍚",
      cuisine:"italian", time:45, cal:490, tags:[],
      grocery:["2 cups Arborio rice cooked","1/2 cup grated Parmigiano","2 large eggs","2 oz diced mozzarella","2 oz diced ham","1/2 cup peas","1/2 cup breadcrumbs","marinara sauce for dipping","oil for frying","salt & pepper","saffron pinch"]
    },

    // ── ASIAN BREAKFAST (12 meals) ─────────────────────────
    {
      id:"asb1", name:"Japanese Tamagoyaki (Rolled Omelette)", emoji:"🍳",
      cuisine:"asian", time:15, cal:220, tags:["gluten-free","dairy-free"],
      grocery:["4 large eggs","2 tbsp dashi stock","1 tbsp soy sauce","1 tbsp mirin","1 tsp sugar","vegetable oil","daikon radish grated to serve","soy sauce for dipping","steamed rice"]
    },
    {
      id:"asb2", name:"Congee with Century Egg & Pork", emoji:"🍚",
      cuisine:"asian", time:60, cal:340, tags:["gluten-free","dairy-free"],
      grocery:["1 cup jasmine rice","8 cups chicken or pork broth","1/4 lb ground pork","2 century eggs (pidan) peeled & sliced","2 inch fresh ginger julienned","3 scallions sliced","2 tbsp soy sauce","1 tsp sesame oil","white pepper","fried shallots","crispy wonton strips optional","sesame oil drizzle"]
    },
    {
      id:"asb3", name:"Korean Doenjang Jjigae with Rice", emoji:"🫕",
      cuisine:"asian", time:25, cal:310, tags:["vegan","gluten-free"],
      grocery:["3 tbsp doenjang (Korean soybean paste)","1 cup firm tofu cubed","1 zucchini cubed","1/2 onion diced","2 cups mushrooms sliced","4 cups anchovy broth or water","2 cloves garlic","1 tbsp gochugaru (optional)","2 cups cooked short-grain rice","scallions","sesame oil"]
    },
    {
      id:"asb4", name:"Vietnamese Banh Mi Trung (Egg Banh Mi)", emoji:"🥖",
      cuisine:"asian", time:15, cal:430, tags:["dairy-free"],
      grocery:["2 Vietnamese baguettes (banh mi rolls)","4 large eggs fried","1/4 cup liver pâté (optional)","1/4 cup pickled daikon & carrots","1 cucumber thinly sliced","fresh cilantro","jalapeño slices","Maggi seasoning sauce","mayonnaise","sriracha"]
    },
    {
      id:"asb5", name:"Dim Sum Breakfast Spread (Yum Cha)", emoji:"🥟",
      cuisine:"asian", time:30, cal:480, tags:[],
      grocery:["6 har gow (shrimp dumplings) frozen","6 siu mai (pork dumplings) frozen","2 pieces cheung fun (rice noodle rolls) frozen","1 cup jasmine tea","soy sauce","chili oil","sesame oil","hoisin sauce","ginger slices in vinegar"]
    },
    {
      id:"asb6", name:"Thai Khao Tom (Rice Soup)", emoji:"🍲",
      cuisine:"asian", time:30, cal:300, tags:["gluten-free","dairy-free"],
      grocery:["1 cup jasmine rice cooked","4 cups chicken broth","1/2 lb ground pork or chicken","3 cloves garlic minced","1 tbsp fresh ginger grated","2 tbsp fish sauce","1 tsp white pepper","3 scallions","fresh cilantro","fried garlic","soft-boiled egg","lime wedges"]
    },
    {
      id:"asb7", name:"Taiwanese Scallion Pancake (Cong You Bing)", emoji:"🫓",
      cuisine:"asian", time:30, cal:380, tags:["vegan"],
      grocery:["2 cups all-purpose flour","3/4 cup boiling water","1 cup scallions finely sliced","1/4 cup sesame oil","1 tsp salt","1 tsp five-spice powder optional","vegetable oil for frying","soy dipping sauce","chili oil","rice vinegar"]
    },
    {
      id:"asb8", name:"Japanese Natto & Rice Breakfast", emoji:"🍚",
      cuisine:"asian", time:10, cal:310, tags:["vegan","gluten-free"],
      grocery:["1 cup short-grain Japanese rice cooked","1 pack natto (fermented soybeans)","1 large egg raw (optional)","2 tbsp soy sauce","1 tsp prepared mustard (from natto pack)","2 scallions sliced","1 sheet nori cut into strips","sesame seeds","pickled ginger","miso soup on side"]
    },
    {
      id:"asb9", name:"Hong Kong French Toast (西多士)", emoji:"🍞",
      cuisine:"asian", time:15, cal:520, tags:["vegetarian"],
      grocery:["4 thick slices white bread","2 tbsp peanut butter or kaya jam","3 large eggs beaten","1/4 cup evaporated milk","oil for deep frying","condensed milk for drizzling","butter","honey or golden syrup","powdered sugar"]
    },
    {
      id:"asb10", name:"Korean Gyeran Bap (Egg Rice Bowl)", emoji:"🍳",
      cuisine:"asian", time:10, cal:380, tags:["gluten-free","dairy-free"],
      grocery:["2 cups short-grain rice cooked hot","3 large eggs (1 raw + 2 fried)","3 tbsp soy sauce","1 tbsp sesame oil","2 tbsp butter","1 tsp gochugaru (Korean chili flakes)","sesame seeds","2 scallions sliced","kim (roasted seaweed sheets)","1 sheet nori crumbled"]
    },
    {
      id:"asb11", name:"Filipino Tapsilog (Beef Tapa, Sinangag, Itlog)", emoji:"🍳",
      cuisine:"asian", time:25, cal:560, tags:["gluten-free","dairy-free"],
      grocery:["1/2 lb beef sirloin thinly sliced","3 cloves garlic minced","2 tbsp soy sauce","1 tbsp vinegar","1 tsp sugar","2 cups day-old rice","5 cloves garlic for sinangag","3 tbsp vegetable oil","2 large eggs fried","banana ketchup","pickled papaya (atsara)"]
    },
    {
      id:"asb12", name:"Malaysian Nasi Lemak", emoji:"🍚",
      cuisine:"asian", time:45, cal:590, tags:["gluten-free","dairy-free"],
      grocery:["2 cups jasmine rice","1 can (14oz) coconut milk","2 pandan leaves knotted","1/2 lemongrass stalk","1 inch ginger","1/2 tsp salt","2 cups dried anchovies (ikan bilis)","1/2 cup roasted peanuts","2 hard-boiled eggs halved","sliced cucumber","sambal belacan","banana leaf for serving (optional)"]
    },

    // ── INDIAN BREAKFAST (12 meals) ────────────────────────
    {
      id:"inb1", name:"Masala Dosa with Sambar & Chutneys", emoji:"🫓",
      cuisine:"indian", time:40, cal:420, tags:["vegan","gluten-free"],
      grocery:["2 cups parboiled rice soaked overnight","1/2 cup urad dal soaked overnight","1/2 tsp fenugreek seeds","salt","3 medium potatoes boiled & mashed","1 onion diced","1 tsp mustard seeds","curry leaves","1 tsp turmeric","2 green chiles","fresh cilantro","sambar powder","tamarind","coconut chutney ingredients"]
    },
    {
      id:"inb2", name:"Aloo Paratha with Yogurt & Pickle", emoji:"🫓",
      cuisine:"indian", time:35, cal:460, tags:["vegetarian"],
      grocery:["2 cups whole wheat flour (atta)","3 medium potatoes boiled & mashed","1/2 onion finely diced","1 green chile finely diced","1 tsp garam masala","1/2 tsp ajwain (carom seeds)","fresh cilantro","salt","water for dough","ghee or butter for cooking","plain yogurt","mango pickle (aachar)"]
    },
    {
      id:"inb3", name:"Poha (Flattened Rice with Vegetables)", emoji:"🍚",
      cuisine:"indian", time:20, cal:320, tags:["vegan","gluten-free"],
      grocery:["2 cups thick poha (flattened rice) rinsed","1/2 onion diced","1 medium potato diced small","1/2 cup frozen peas","1/2 tsp mustard seeds","1/2 tsp turmeric","curry leaves","2 green chiles","2 tbsp vegetable oil","1/2 tsp sugar","fresh cilantro","lemon juice","roasted peanuts","sev (crunchy noodles) optional"]
    },
    {
      id:"inb4", name:"Idli with Sambar & Coconut Chutney", emoji:"🍥",
      cuisine:"indian", time:30, cal:290, tags:["vegan","gluten-free"],
      grocery:["2 cups idli rice soaked","1 cup urad dal soaked","salt","2 cups toor dal for sambar","1 cup mixed vegetables","2 tbsp sambar powder","tamarind paste","1/2 cup grated coconut for chutney","green chiles","ginger","mustard seeds for tempering"]
    },
    {
      id:"inb5", name:"Masala Omelette", emoji:"🍳",
      cuisine:"indian", time:12, cal:300, tags:["vegetarian","gluten-free"],
      grocery:["3 large eggs","1/2 onion finely minced","1 medium tomato finely diced","1 green chile finely minced","2 tbsp fresh cilantro chopped","1/2 tsp turmeric","1/2 tsp cumin powder","1/4 tsp chili powder","salt to taste","1 tbsp vegetable oil","buttered toast to serve","chai"]
    },
    {
      id:"inb6", name:"Upma (Semolina Breakfast Porridge)", emoji:"🥣",
      cuisine:"indian", time:20, cal:340, tags:["vegan"],
      grocery:["1.5 cups coarse semolina (rava)","3 cups water","1 onion diced","2 green chiles","1/2 cup frozen peas","1/2 cup diced carrots","1 tsp mustard seeds","1 tsp urad dal","curry leaves","2 tbsp vegetable oil","salt","lemon juice","fresh cilantro","roasted cashews"]
    },
    {
      id:"inb7", name:"Puri & Aloo Bhaji", emoji:"🍳",
      cuisine:"indian", time:35, cal:480, tags:["vegan"],
      grocery:["2 cups whole wheat flour","water for dough","salt","oil for deep frying","4 medium potatoes boiled & cubed","1/2 onion diced","1 tsp mustard seeds","1/2 tsp turmeric","1 tsp cumin","2 green chiles","curry leaves","2 tbsp vegetable oil","fresh cilantro","lemon juice"]
    },
    {
      id:"inb8", name:"Chole Bhature (Chickpea Curry with Fried Bread)", emoji:"🍛",
      cuisine:"indian", time:50, cal:610, tags:["vegan"],
      grocery:["2 cans (15oz) chickpeas drained","2 cups all-purpose flour for bhature","1/2 tsp baking powder","1/4 cup yogurt","2 onions diced","2 tomatoes diced","2 tbsp chole masala","1 tsp ginger-garlic paste","oil for deep frying","fresh cilantro","pickled onion rings","green chutney"]
    },
    {
      id:"inb9", name:"Pesarattu (Green Moong Dal Crepes)", emoji:"🫓",
      cuisine:"indian", time:30, cal:310, tags:["vegan","gluten-free"],
      grocery:["1.5 cups whole green moong dal soaked overnight","2 green chiles","1 inch ginger","fresh cilantro","1/2 onion","salt","oil for cooking","ginger chutney for serving","upma filling optional","coconut chutney"]
    },
    {
      id:"inb10", name:"Akki Roti (Rice Flour Flatbread)", emoji:"🫓",
      cuisine:"indian", time:25, cal:290, tags:["vegan","gluten-free"],
      grocery:["2 cups rice flour","1/2 onion finely grated","1 carrot grated","2 green chiles minced","1/4 cup fresh cilantro","1/4 cup desiccated coconut","1 tsp cumin seeds","salt","warm water","oil for cooking","coconut chutney","sambar for dipping"]
    },
    {
      id:"inb11", name:"Sabudana Khichdi (Tapioca Pearl Breakfast)", emoji:"🥣",
      cuisine:"indian", time:25, cal:380, tags:["vegan","gluten-free"],
      grocery:["1.5 cups sabudana (tapioca pearls) soaked 6 hrs","1/2 cup roasted peanuts crushed","2 medium potatoes boiled & diced","1 tsp cumin seeds","2 green chiles","curry leaves","2 tbsp vegetable oil","salt","sugar","lemon juice","fresh cilantro"]
    },
    {
      id:"inb12", name:"Methi Thepla (Fenugreek Flatbread)", emoji:"🫓",
      cuisine:"indian", time:30, cal:340, tags:["vegetarian"],
      grocery:["2 cups whole wheat flour","1 cup fresh fenugreek leaves (methi) chopped","1/2 cup plain yogurt","1 tsp turmeric","1 tsp chili powder","1 tsp cumin seeds","1 tsp sesame seeds","salt","2 tbsp oil","water as needed","mango pickle","yogurt to serve"]
    },
  ],

  // ════════════════════════════════════════════════════════════
  // LUNCH — 90+ meals
  // ════════════════════════════════════════════════════════════
  lunch: [

    // ── AMERICAN LUNCH (12 meals) ───────────────────────────
    {
      id:"al1", name:"Classic BBQ Pulled Pork Sandwich", emoji:"🥪",
      cuisine:"american", time:240, cal:650, tags:["dairy-free"],
      grocery:["3 lbs pork shoulder","2 tbsp brown sugar","1 tbsp paprika","1 tbsp garlic powder","1 tbsp onion powder","1 tsp cayenne","1 cup BBQ sauce","4 brioche buns","2 cups coleslaw mix","1/4 cup mayo","2 tbsp apple cider vinegar","pickles"]
    },
    {
      id:"al2", name:"Lobster Roll (New England Style)", emoji:"🦞",
      cuisine:"american", time:20, cal:480, tags:[],
      grocery:["1.5 lbs cooked lobster meat","1/4 cup mayonnaise","2 stalks celery finely diced","1 tbsp fresh chives","1 tbsp lemon juice","salt & white pepper","4 top-split hot dog buns","2 tbsp butter for rolls","lemon wedges","Old Bay seasoning","lettuce leaves"]
    },
    {
      id:"al3", name:"Cobb Salad", emoji:"🥗",
      cuisine:"american", time:20, cal:520, tags:["gluten-free"],
      grocery:["2 heads romaine lettuce chopped","2 grilled chicken breasts diced","4 strips bacon cooked & crumbled","4 large eggs hard-boiled & quartered","2 avocados diced","1 cup cherry tomatoes halved","1/2 cup crumbled blue cheese","1/4 cup red wine vinaigrette","chives"]
    },
    {
      id:"al4", name:"Philly Cheesesteak", emoji:"🥪",
      cuisine:"american", time:25, cal:680, tags:[],
      grocery:["1 lb ribeye steak thinly shaved","2 hoagie rolls","1 large onion thinly sliced","1 green bell pepper sliced","8 oz Cheez Whiz or provolone slices","2 tbsp vegetable oil","salt & pepper","hot peppers (optional)"]
    },
    {
      id:"al5", name:"New England Clam Chowder", emoji:"🍲",
      cuisine:"american", time:40, cal:490, tags:[],
      grocery:["2 lbs littleneck clams or 3 cans chopped clams","4 strips bacon diced","1 onion diced","3 stalks celery diced","3 cups potatoes diced","2 cups heavy cream","1 cup whole milk","3 tbsp flour","2 tbsp butter","fresh thyme","bay leaves","oyster crackers","fresh parsley"]
    },
    {
      id:"al6", name:"Buffalo Chicken Wrap", emoji:"🌯",
      cuisine:"american", time:20, cal:540, tags:[],
      grocery:["2 large flour tortillas","2 grilled chicken breasts shredded","1/3 cup Buffalo sauce","1/2 cup ranch dressing","2 cups romaine lettuce","1/2 cup shredded carrots","1/2 cup celery diced","1/2 cup crumbled blue cheese","red onion"]
    },
    {
      id:"al7", name:"Southern Fried Shrimp Po'Boy", emoji:"🦐",
      cuisine:"american", time:25, cal:590, tags:[],
      grocery:["1 lb large shrimp peeled","1 cup buttermilk","1 cup cornmeal","1/2 cup flour","1 tbsp Old Bay","oil for frying","2 hoagie rolls","1/2 cup remoulade (mayo+mustard+hot sauce+relish)","shredded lettuce","sliced tomatoes","pickle chips"]
    },
    {
      id:"al8", name:"Tuna Melt on Sourdough", emoji:"🥪",
      cuisine:"american", time:15, cal:450, tags:[],
      grocery:["2 cans (5oz) albacore tuna drained","1/4 cup mayonnaise","2 stalks celery diced","1/4 cup red onion diced","1 tbsp Dijon mustard","1 tbsp lemon juice","4 slices sourdough bread","4 slices Swiss cheese","2 tbsp butter","tomato slices","salt & pepper","fresh dill"]
    },
    {
      id:"al9", name:"Mac & Cheese with Pulled Pork", emoji:"🧀",
      cuisine:"american", time:30, cal:720, tags:[],
      grocery:["2 cups elbow macaroni","2 cups shredded sharp cheddar","1 cup shredded Gruyère","1 cup whole milk","2 tbsp butter","2 tbsp flour","1 tsp Dijon mustard","1/2 tsp paprika","2 cups pulled pork (leftover or store-bought)","BBQ sauce drizzle","breadcrumb topping"]
    },
    {
      id:"al10", name:"Wedge Salad with Blue Cheese", emoji:"🥗",
      cuisine:"american", time:10, cal:380, tags:["gluten-free","vegetarian"],
      grocery:["1 head iceberg lettuce quartered","1/2 cup crumbled blue cheese","4 strips bacon cooked & crumbled","1 cup cherry tomatoes halved","1/4 red onion thinly sliced","1/2 cup blue cheese dressing","chives","black pepper","lemon wedge"]
    },
    {
      id:"al11", name:"Chicago-Style Deep Dish Pizza", emoji:"🍕",
      cuisine:"american", time:60, cal:780, tags:["vegetarian"],
      grocery:["2.5 cups all-purpose flour","1 packet active dry yeast","1/2 cup cornmeal","1/3 cup olive oil","1 cup warm water","2 cups mozzarella shredded","1 can (28oz) crushed tomatoes","1 onion diced","3 cloves garlic","Italian sausage optional","fresh basil","oregano","salt"]
    },
    {
      id:"al12", name:"Loaded Baked Potato Soup", emoji:"🍲",
      cuisine:"american", time:40, cal:560, tags:["vegetarian"],
      grocery:["6 large russet potatoes","4 cups chicken or vegetable broth","1 cup sour cream","1 cup shredded cheddar","4 strips bacon crumbled","3 scallions sliced","2 tbsp butter","2 tbsp flour","1 cup whole milk","salt & pepper","chives"]
    },

    // ── SOUL FOOD LUNCH (12 meals) ─────────────────────────
    {
      id:"sl1", name:"Fried Chicken Sandwich with Comeback Sauce", emoji:"🍗",
      cuisine:"soul", time:40, cal:700, tags:[],
      grocery:["4 boneless chicken thighs","1.5 cups buttermilk","2 cups all-purpose flour","2 tbsp hot sauce in marinade","1 tbsp paprika","1 tsp garlic powder","1 tsp cayenne","oil for frying","4 brioche buns","1/4 head cabbage shredded","1/4 cup mayo","1 tsp hot sauce","bread & butter pickles","comeback sauce ingredients"]
    },
    {
      id:"sl2", name:"Smothered Turkey Wings", emoji:"🍗",
      cuisine:"soul", time:90, cal:630, tags:["gluten-free"],
      grocery:["4 large turkey wings","2 large onions sliced","4 cloves garlic","2 cups chicken broth","1/2 cup all-purpose flour for dredging","1 tsp paprika","1 tsp garlic powder","1 tsp onion powder","1/2 tsp black pepper","1/2 tsp cayenne","vegetable oil","white rice","steamed green beans"]
    },
    {
      id:"sl3", name:"Catfish Po'Boy with Homemade Remoulade", emoji:"🐟",
      cuisine:"soul", time:30, cal:590, tags:[],
      grocery:["4 catfish fillets","1 cup yellow cornmeal","1/2 cup flour","1 tbsp Cajun seasoning","2 eggs","oil for frying","4 hoagie rolls","1/2 cup mayo","2 tbsp Creole mustard","1 tbsp hot sauce","1 tbsp sweet relish","lemon juice","shredded lettuce","tomato","pickles"]
    },
    {
      id:"sl4", name:"Neck Bone & Lima Bean Stew", emoji:"🍲",
      cuisine:"soul", time:150, cal:540, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs pork neck bones","2 cups dried large lima beans soaked overnight","1 large onion diced","4 cloves garlic","2 stalks celery diced","2 bay leaves","1 tsp thyme","1 tsp paprika","salt & pepper","6 cups water or broth","corn bread to serve"]
    },
    {
      id:"sl5", name:"Chicken & Andouille Gumbo", emoji:"🫕",
      cuisine:"soul", time:90, cal:580, tags:["gluten-free","dairy-free"],
      grocery:["1 lb chicken thighs bone-in","1 lb andouille sausage sliced","1/2 cup vegetable oil","1/2 cup all-purpose flour (for roux)","1 onion diced","3 stalks celery diced","1 bell pepper diced","4 cloves garlic","1 can (14oz) diced tomatoes","4 cups chicken broth","1 tbsp filé powder","okra sliced","hot sauce","steamed rice"]
    },
    {
      id:"sl6", name:"Smothered Pork Chops with Mashed Potatoes", emoji:"🥩",
      cuisine:"soul", time:50, cal:650, tags:["gluten-free"],
      grocery:["4 bone-in pork chops","2 large onions sliced into rings","4 cloves garlic","2 cups chicken broth","1/4 cup all-purpose flour","1 tsp paprika","1 tsp garlic powder","vegetable oil","5 large russet potatoes","1/2 cup warm butter","1/2 cup warm milk","salt & pepper","fresh chives"]
    },
    {
      id:"sl7", name:"Oxtail Soup", emoji:"🥘",
      cuisine:"soul", time:180, cal:560, tags:["gluten-free","dairy-free"],
      grocery:["3 lbs oxtail","2 carrots diced","3 stalks celery diced","1 large onion diced","4 cloves garlic","1 can (14oz) diced tomatoes","2 cups beef broth","1 tbsp soy sauce","1 tbsp Worcestershire","thyme sprigs","bay leaves","salt & pepper","corn bread"]
    },
    {
      id:"sl8", name:"Fried Pork Chop Sandwich", emoji:"🥪",
      cuisine:"soul", time:25, cal:620, tags:[],
      grocery:["4 thin-cut pork chops","1 cup buttermilk","1.5 cups all-purpose flour","1 tsp garlic powder","1 tsp onion powder","1 tsp paprika","1/2 tsp cayenne","oil for frying","4 thick slices white bread","yellow mustard","hot sauce","white onion rings","bread & butter pickles"]
    },
    {
      id:"sl9", name:"Hoppin' John (Black-Eyed Peas & Rice)", emoji:"🍚",
      cuisine:"soul", time:60, cal:430, tags:["gluten-free","dairy-free"],
      grocery:["2 cups dried black-eyed peas","1/4 lb smoked ham hock","1 onion diced","3 cloves garlic","2 stalks celery","1 bay leaf","1 tsp thyme","2 cups long-grain rice","4 cups water","salt & pepper","hot sauce","scallions","collard greens on side"]
    },
    {
      id:"sl10", name:"Beef Tips & Rice with Gravy", emoji:"🥩",
      cuisine:"soul", time:60, cal:580, tags:["gluten-free"],
      grocery:["2 lbs beef sirloin tips","1 large onion sliced","3 cloves garlic","2 cups beef broth","1 packet onion soup mix","1 tbsp Worcestershire","1 tbsp soy sauce","2 tbsp cornstarch","1 tsp thyme","vegetable oil","2 cups long-grain rice","salt & pepper","fresh parsley"]
    },
    {
      id:"sl11", name:"Pinto Bean & Ham Hock Soup", emoji:"🍲",
      cuisine:"soul", time:120, cal:490, tags:["gluten-free","dairy-free"],
      grocery:["2 cups dried pinto beans soaked overnight","1 large smoked ham hock","1 onion diced","4 cloves garlic","2 stalks celery","2 bay leaves","1 tsp cumin","1 tsp paprika","salt & pepper","6 cups water","jalapeño optional","corn bread","hot sauce"]
    },
    {
      id:"sl12", name:"Liver & Onions with Gravy", emoji:"🥩",
      cuisine:"soul", time:25, cal:420, tags:["gluten-free"],
      grocery:["1.5 lbs beef liver sliced 1/2 inch","2 large onions sliced","1 cup whole milk for soaking","1/2 cup flour for dredging","1 tsp garlic powder","1 cup beef broth","1/4 cup butter","salt & pepper","fresh thyme","mashed potatoes","cooked green beans"]
    },

    // ── CARIBBEAN LUNCH (12 meals) ─────────────────────────
    {
      id:"cl1", name:"Jerk Chicken Platter with Rice & Peas", emoji:"🌴",
      cuisine:"caribbean", time:90, cal:640, tags:["gluten-free","dairy-free"],
      grocery:["6 bone-in chicken thighs & drumsticks","4 tbsp jerk seasoning (wet paste)","3 scallions","3 cloves garlic","1 scotch bonnet pepper","2 tbsp soy sauce","1 tbsp brown sugar","1 tsp allspice berries ground","2 cups long-grain rice","1 can (14oz) coconut milk","1 can (15oz) red kidney beans","2 cups water","thyme","salt"]
    },
    {
      id:"cl2", name:"Curry Goat with Roti", emoji:"🍲",
      cuisine:"caribbean", time:120, cal:680, tags:["gluten-free","dairy-free"],
      grocery:["2.5 lbs goat meat bone-in cubed","3 tbsp Jamaican curry powder","1 large onion diced","5 cloves garlic","1 scotch bonnet","3 medium potatoes cubed","1 can (14oz) coconut milk","2 cups beef broth","thyme sprigs","4 scallions","1 tsp allspice","2 tbsp vegetable oil","roti or naan to serve","salt & pepper"]
    },
    {
      id:"cl3", name:"Trinidadian Pelau (One-Pot Rice & Pigeon Peas)", emoji:"🍚",
      cuisine:"caribbean", time:60, cal:560, tags:["dairy-free"],
      grocery:["1 lb chicken pieces bone-in","2 cups parboiled rice","1 can (15oz) pigeon peas (gungo peas)","1 can (14oz) coconut milk","3 tbsp brown sugar for caramelizing","1 onion diced","4 cloves garlic","1 scotch bonnet","thyme","fresh shadow beni (culantro)","2 tbsp vegetable oil","2 cups chicken broth","salt & pepper"]
    },
    {
      id:"cl4", name:"Puerto Rican Pernil (Roasted Pork Shoulder)", emoji:"🥩",
      cuisine:"caribbean", time:240, cal:620, tags:["gluten-free","dairy-free"],
      grocery:["4 lbs bone-in pork shoulder","1/4 cup olive oil","8 cloves garlic","1 tbsp dried oregano","1 tbsp ground cumin","1 tbsp adobo seasoning","1 tsp black pepper","1 tsp salt","rice & beans on side","pickled red onion","fresh cilantro","lime"]
    },
    {
      id:"cl5", name:"Haitian Griot with Pikliz", emoji:"🥩",
      cuisine:"caribbean", time:90, cal:590, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs pork shoulder cubed","1/2 cup orange juice","1/4 cup lime juice","1 onion sliced","4 cloves garlic","1 scotch bonnet","thyme sprigs","1/2 cup vegetable oil for frying","1/2 head cabbage shredded for pikliz","1 carrot julienned","1 scotch bonnet minced for pikliz","white vinegar","salt","rice & beans to serve"]
    },
    {
      id:"cl6", name:"Cuban Ropa Vieja (Shredded Beef)", emoji:"🥘",
      cuisine:"caribbean", time:180, cal:510, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs flank steak","1 can (14oz) crushed tomatoes","1 onion sliced","2 bell peppers sliced","6 cloves garlic","1/4 cup dry white wine","1/4 cup beef broth","1 tsp cumin","1 tsp oregano","2 bay leaves","2 tbsp olive oil","1 cup pimiento-stuffed olives","capers","steamed white rice","fried plantains","black beans"]
    },
    {
      id:"cl7", name:"Stewed Oxtail with Butter Beans", emoji:"🥘",
      cuisine:"caribbean", time:200, cal:720, tags:["gluten-free","dairy-free"],
      grocery:["3 lbs oxtail","1 can (15oz) butter beans","1 can (14oz) diced tomatoes","2 large onions diced","5 cloves garlic","1 scotch bonnet","2 tbsp browning sauce","1 tbsp allspice","1 tbsp soy sauce","2 cups beef broth","thyme sprigs","bay leaves","vegetable oil","steamed rice","coleslaw"]
    },
    {
      id:"cl8", name:"Conch Fritters (Bahamian Style)", emoji:"🦑",
      cuisine:"caribbean", time:35, cal:450, tags:[],
      grocery:["1 lb conch meat tenderized & diced small","1.5 cups all-purpose flour","1 large egg","1/2 cup whole milk","1/2 onion minced","1/2 bell pepper minced","1 stalk celery minced","1 scotch bonnet minced","1/2 tsp garlic powder","oil for deep frying","dipping sauce (mayo+lime+hot sauce)","lemon wedges"]
    },
    {
      id:"cl9", name:"Dominican Sancocho (Seven-Meat Stew)", emoji:"🫕",
      cuisine:"caribbean", time:180, cal:680, tags:["gluten-free","dairy-free"],
      grocery:["1/2 lb chicken pieces","1/2 lb beef short rib","1/2 lb pork ribs","1 cup yuca peeled & cubed","1 cup yautía (taro) cubed","1 cup ñame (purple yam) cubed","2 green plantains peeled & sliced","1 ear corn cut into pieces","1 onion","4 cloves garlic","1 bunch cilantro","sazon seasoning","salt","lime","white rice"]
    },
    {
      id:"cl10", name:"Jamaican Pepper Shrimp", emoji:"🦐",
      cuisine:"caribbean", time:20, cal:380, tags:["gluten-free","dairy-free"],
      grocery:["1.5 lbs large whole shrimp (shell-on)","6 scotch bonnet peppers (reduce to taste)","8 cloves garlic minced","3 tbsp butter","2 tbsp vegetable oil","1 tsp allspice","1 tsp paprika","salt","lemon wedges","festival bread or bammy to serve","rum punch optional"]
    },
    {
      id:"cl11", name:"Barbadian Cou-Cou & Flying Fish", emoji:"🐟",
      cuisine:"caribbean", time:45, cal:490, tags:["gluten-free","dairy-free"],
      grocery:["4 flying fish fillets (or substitute tilapia/sole)","1 cup fine yellow cornmeal","1 cup sliced okra","2 cups water","2 cups fish broth","1/2 onion","2 stalks celery","1 scotch bonnet","lime juice","1/2 onion diced for sauce","2 tomatoes diced","fresh parsley","1 tbsp butter","salt & pepper"]
    },
    {
      id:"cl12", name:"Jerk Pork Sandwich with Festival Bread", emoji:"🥪",
      cuisine:"caribbean", time:60, cal:600, tags:["dairy-free"],
      grocery:["1.5 lbs pork loin","4 tbsp jerk seasoning paste","4 festival bread rolls or hoagie rolls","1 cup cabbage slaw","scotch bonnet mayo (mayo + scotch bonnet)","pickled red onion","cucumber slices","lime","mango slices","hot sauce"]
    },

    // ── MEDITERRANEAN LUNCH (12 meals) ─────────────────────
    {
      id:"medl1", name:"Chicken Shawarma Wrap", emoji:"🫔",
      cuisine:"mediterranean", time:35, cal:570, tags:["dairy-free"],
      grocery:["2 lbs chicken thighs boneless","3 tsp cumin","3 tsp paprika","1 tsp turmeric","1 tsp garlic powder","1 tsp cinnamon","1/2 tsp cayenne","3 tbsp olive oil","4 pita or lavash wraps","1 cup garlic sauce (toum)","2 tomatoes diced","1 cucumber diced","pickled turnips (pink)","fresh parsley","sumac onions","tahini drizzle"]
    },
    {
      id:"medl2", name:"Lamb Kebab Platter (Kofta)", emoji:"🍖",
      cuisine:"mediterranean", time:30, cal:590, tags:["gluten-free"],
      grocery:["1.5 lbs ground lamb","1/2 onion grated","3 cloves garlic minced","1/4 cup fresh parsley","1/4 cup fresh mint","1 tsp cumin","1 tsp coriander","1 tsp cinnamon","1/2 tsp allspice","1 cup hummus","2 tomatoes diced","1 cucumber diced","tabbouleh","pita","tzatziki","lemon"]
    },
    {
      id:"medl3", name:"Falafel Plate with All the Fixings", emoji:"🌯",
      cuisine:"mediterranean", time:40, cal:510, tags:["vegan"],
      grocery:["2 cups dried chickpeas soaked overnight (NOT canned)","1/2 cup fresh parsley","1/2 cup fresh cilantro","1 onion roughly chopped","4 cloves garlic","1 tsp cumin","1 tsp coriander","1/4 tsp cayenne","baking soda","oil for frying","4 pitas","tahini sauce","Israeli salad (tomato, cucumber, parsley)","pickled turnips","hummus"]
    },
    {
      id:"medl4", name:"Greek Souvlaki with Pita", emoji:"🥙",
      cuisine:"mediterranean", time:30, cal:520, tags:["dairy-free"],
      grocery:["1.5 lbs pork tenderloin or chicken cubed","1/4 cup olive oil","3 tbsp lemon juice","1 tbsp dried oregano","3 cloves garlic minced","salt & pepper","4 pita rounds","1 cup tzatziki","1 tomato diced","1/2 red onion thinly sliced","romaine lettuce","lemon wedges","French fries (optional inside pita)"]
    },
    {
      id:"medl5", name:"Moroccan Harira Soup", emoji:"🍲",
      cuisine:"mediterranean", time:60, cal:400, tags:["vegan"],
      grocery:["1 cup red lentils","1 can (15oz) chickpeas","1 can (14oz) diced tomatoes","1 large onion diced","4 cloves garlic","1/2 bunch fresh cilantro","1/2 bunch fresh parsley","2 stalks celery","2 tbsp tomato paste","1 tsp turmeric","1 tsp cumin","1 tsp cinnamon","1 lemon","6 cups vegetable broth","vermicelli pasta optional","dates & bread to serve"]
    },
    {
      id:"medl6", name:"Turkish Lahmacun (Turkish Pizza)", emoji:"🫓",
      cuisine:"mediterranean", time:40, cal:440, tags:["dairy-free"],
      grocery:["2 cups all-purpose flour","1 packet yeast","1/2 lb ground lamb or beef","1 large tomato grated","1 onion grated","1/2 cup flat-leaf parsley","1 tbsp red pepper paste","1 tsp cumin","1/2 tsp allspice","2 tbsp olive oil","romaine lettuce","lemon juice","sumac","turnip pickles","pomegranate molasses"]
    },
    {
      id:"medl7", name:"Greek Moussaka", emoji:"🫕",
      cuisine:"mediterranean", time:90, cal:620, tags:[],
      grocery:["1.5 lbs ground beef or lamb","2 large eggplants sliced","1 large onion diced","4 cloves garlic","1 can (28oz) crushed tomatoes","1 tsp cinnamon","1 tsp allspice","1/2 cup red wine","2.5 cups whole milk","3 tbsp butter","3 tbsp flour","2 eggs","1/2 cup grated Parmigiano or Kefalotyri","nutmeg","olive oil","salt & pepper"]
    },
    {
      id:"medl8", name:"Lebanese Fattoush Salad with Grilled Halloumi", emoji:"🥗",
      cuisine:"mediterranean", time:20, cal:420, tags:["vegetarian"],
      grocery:["2 pita breads fried or baked crispy","8 oz halloumi cheese sliced","2 romaine hearts chopped","2 tomatoes diced","1 cucumber diced","1 bunch radishes sliced","1/2 cup fresh mint","1/2 cup flat-leaf parsley","1/4 cup pomegranate seeds","3 tbsp extra virgin olive oil","3 tbsp lemon juice","1 tsp sumac","salt & pepper"]
    },
    {
      id:"medl9", name:"Spanakopita (Spinach & Feta Pie)", emoji:"🥐",
      cuisine:"mediterranean", time:60, cal:450, tags:["vegetarian"],
      grocery:["1 package (1 lb) phyllo dough","2 lbs fresh spinach wilted & squeezed","1.5 cups crumbled feta","1/2 cup ricotta","3 large eggs","1 large onion diced sautéed","4 scallions diced","1/4 cup fresh dill","1/4 cup fresh parsley","3/4 cup melted butter","nutmeg","salt & pepper"]
    },
    {
      id:"medl10", name:"Kibbeh (Lebanese Bulgur & Lamb Cakes)", emoji:"🫕",
      cuisine:"mediterranean", time:60, cal:520, tags:["dairy-free"],
      grocery:["1 lb fine bulgur wheat soaked","1 lb ground lamb","1 onion grated","1 tsp cinnamon","1 tsp allspice","1/4 tsp nutmeg","salt & pepper","1/4 lb ground lamb for filling","1/4 cup toasted pine nuts","1/4 cup onion diced","oil for frying or baking","plain yogurt","mint for garnish"]
    },
    {
      id:"medl11", name:"Shakshuka with Merguez Sausage", emoji:"🍳",
      cuisine:"mediterranean", time:30, cal:530, tags:["gluten-free","dairy-free"],
      grocery:["1/2 lb merguez sausage sliced","1 can (28oz) crushed tomatoes","4 large eggs","1 onion diced","1 red bell pepper diced","4 cloves garlic","1.5 tsp cumin","1.5 tsp paprika","1/2 tsp cinnamon","harissa paste","2 tbsp olive oil","fresh cilantro","crusty bread"]
    },
    {
      id:"medl12", name:"Pide (Turkish Stuffed Flatbread)", emoji:"🫓",
      cuisine:"mediterranean", time:50, cal:580, tags:[],
      grocery:["2.5 cups all-purpose flour","1 packet yeast","1/4 cup olive oil","3/4 cup warm water","1/2 lb ground beef","1 onion diced","1 tomato diced","2 tbsp red pepper paste","1 tsp cumin","1 tsp paprika","1/4 cup parsley","kasar cheese grated","1 egg yolk for brushing","sesame seeds","salt"]
    },

    // ── MEXICAN LUNCH (12 meals) ────────────────────────────
    {
      id:"mxl1", name:"Carne Asada Platter", emoji:"🌮",
      cuisine:"mexican", time:30, cal:580, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs skirt or flank steak","juice of 2 oranges","juice of 3 limes","6 cloves garlic minced","1 tsp cumin","1 tsp chili powder","1/4 cup soy sauce","1/4 cup cilantro","12 corn tortillas","1 white onion diced","fresh cilantro","3 avocados (guacamole)","salsa roja","radishes","lime wedges"]
    },
    {
      id:"mxl2", name:"Birria Tacos (Beef or Lamb)", emoji:"🌮",
      cuisine:"mexican", time:180, cal:700, tags:["gluten-free","dairy-free"],
      grocery:["3 lbs beef chuck roast","4 dried guajillo chiles","3 dried ancho chiles","2 dried chiles de arbol","1 can (14oz) diced tomatoes","1 onion halved","6 cloves garlic","1 cinnamon stick","5 whole cloves","1 tsp cumin seeds","1 tsp dried oregano","3 cups beef broth","corn tortillas","shredded Oaxacan cheese","white onion & cilantro","lime wedges","consommé for dipping"]
    },
    {
      id:"mxl3", name:"Enchiladas Rojas with Chicken", emoji:"🫔",
      cuisine:"mexican", time:45, cal:560, tags:["gluten-free"],
      grocery:["8 corn tortillas","3 cups shredded rotisserie chicken","3 dried guajillo chiles","2 dried ancho chiles","3 cloves garlic","1/2 onion","1 tsp cumin","2 cups chicken broth","2 cups shredded Monterrey Jack","1 cup Mexican crema","white onion rings","fresh cilantro","queso fresco","sour cream"]
    },
    {
      id:"mxl4", name:"Pozole Rojo (Red Hominy Stew)", emoji:"🍲",
      cuisine:"mexican", time:90, cal:470, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs pork shoulder","1 large can (29oz) hominy drained","4 dried guajillo chiles","2 dried ancho chiles","1 can (14oz) diced tomatoes","1 onion quartered","6 cloves garlic","1 tsp oregano","2 tsp cumin","6 cups pork or chicken broth","shredded cabbage","sliced radishes","dried oregano","lime wedges","tostadas","avocado"]
    },
    {
      id:"mxl5", name:"Chiles en Nogada (Stuffed Poblanos)", emoji:"🫑",
      cuisine:"mexican", time:90, cal:620, tags:[],
      grocery:["6 large poblano chiles roasted & peeled","1/2 lb ground beef","1/2 lb ground pork","1/2 cup chopped peach","1/2 cup raisins","1/2 cup blanched almonds","1/4 cup chopped pear","tomatoes","onion","garlic","1 cup walnuts for nogada sauce","1/2 cup crema","pomegranate seeds","fresh parsley"]
    },
    {
      id:"mxl6", name:"Tacos de Barbacoa", emoji:"🌮",
      cuisine:"mexican", time:240, cal:580, tags:["gluten-free","dairy-free"],
      grocery:["3 lbs beef cheeks or chuck","3 dried chipotle chiles in adobo","4 cloves garlic","1/2 onion","1 tsp cumin","1 tsp dried oregano","1/2 tsp cloves","lime juice","salt","corn tortillas","white onion finely diced","fresh cilantro","lime wedges","salsa verde or roja"]
    },
    {
      id:"mxl7", name:"Torta Ahogada (Drowned Sandwich)", emoji:"🥪",
      cuisine:"mexican", time:30, cal:640, tags:["dairy-free"],
      grocery:["4 birote rolls or crusty hoagie rolls","2 cups carnitas or shredded pork","1.5 cups refried beans","4 cups spicy tomato broth for drowning","3 dried arbol chiles","1 can (14oz) tomato sauce","garlic","oregano","vinegar","fresh onion rings","lime wedges","pickled jalapeños"]
    },
    {
      id:"mxl8", name:"Sopa de Lima (Yucatecan Lime Soup)", emoji:"🍲",
      cuisine:"mexican", time:45, cal:390, tags:["gluten-free","dairy-free"],
      grocery:["2 chicken breasts bone-in","4 cups chicken broth","3 limes juiced + zest","1 onion halved & charred","1 tomato charred","2 cloves garlic charred","1 habanero chile","1 tsp oregano","1/4 cup vegetable oil","6 corn tortillas cut in strips (fried)","fresh cilantro","avocado","queso fresco"]
    },
    {
      id:"mxl9", name:"Molotes (Fried Masa Stuffed with Potato & Chorizo)", emoji:"🫓",
      cuisine:"mexican", time:45, cal:510, tags:[],
      grocery:["2 cups masa harina","1.5 cups warm water","1/2 lb Mexican chorizo","3 medium potatoes boiled & mashed","salt","oil for frying","salsa verde","Mexican crema","shredded lettuce","queso fresco","pickled jalapeños"]
    },
    {
      id:"mxl10", name:"Tlayuda (Oaxacan Open-Faced Flatbread)", emoji:"🫓",
      cuisine:"mexican", time:25, cal:580, tags:[],
      grocery:["4 large tlayuda tortillas (or large corn tortillas)","1 cup black bean paste","1/2 lb tasajo (thin-sliced beef) or chicken","1 cup Oaxacan cheese shredded","1/4 head cabbage shredded","2 tomatoes sliced","2 avocados","salsa verde","Oaxacan mole negro optional","fresh cilantro"]
    },
    {
      id:"mxl11", name:"Chiles Rellenos", emoji:"🫑",
      cuisine:"mexican", time:45, cal:550, tags:["vegetarian"],
      grocery:["6 large poblano chiles roasted & peeled","2 cups shredded Oaxacan or Monterrey Jack cheese","4 large eggs separated","1/2 cup flour","1 can (14oz) diced tomatoes","1/2 onion","2 cloves garlic","oil for frying","Mexican crema","fresh cilantro","steamed rice","refried beans"]
    },
    {
      id:"mxl12", name:"Cochinita Pibil Tostadas", emoji:"🫓",
      cuisine:"mexican", time:180, cal:560, tags:["gluten-free","dairy-free"],
      grocery:["3 lbs pork shoulder","3 tbsp achiote paste","1/2 cup bitter orange juice (or OJ + lime mix)","1 tbsp cumin","1 tbsp dried oregano","5 cloves garlic","salt & pepper","banana leaves (frozen)","tostada shells","pickled red onion","habanero salsa","fresh cilantro","avocado"]
    },

    // ── ITALIAN LUNCH (12 meals) ────────────────────────────
    {
      id:"itl1", name:"Pasta e Fagioli", emoji:"🍲",
      cuisine:"italian", time:45, cal:430, tags:["vegan"],
      grocery:["1 cup dried borlotti or cranberry beans soaked overnight","1.5 cups ditalini pasta","1 can (14oz) diced tomatoes","4 cups vegetable broth","1 onion diced","4 cloves garlic","3 stalks rosemary","2 tbsp olive oil","Parmigiano rind","salt & pepper","extra virgin olive oil drizzle","crusty bread"]
    },
    {
      id:"itl2", name:"Eggplant Parmigiana", emoji:"🍆",
      cuisine:"italian", time:60, cal:520, tags:["vegetarian"],
      grocery:["2 large eggplants sliced 1/3 inch","salt for drawing out moisture","2 cups all-purpose flour","3 large eggs beaten","2 cups Italian breadcrumbs","2 cups marinara sauce","8 oz fresh mozzarella sliced","1 cup grated Parmigiano-Reggiano","olive oil for frying","fresh basil","garlic bread"]
    },
    {
      id:"itl3", name:"Ribollita (Tuscan Bread Soup)", emoji:"🍲",
      cuisine:"italian", time:60, cal:390, tags:["vegan"],
      grocery:["2 cups canned cannellini beans","2 cups cavolo nero (Tuscan kale) or regular kale","4 cups stale Tuscan bread cubed","1 can (14oz) diced tomatoes","1 carrot diced","1 celery stalk diced","1 onion diced","1 leek diced","4 cloves garlic","4 cups vegetable broth","fresh rosemary & thyme","extra virgin olive oil","salt & pepper"]
    },
    {
      id:"itl4", name:"Panzanella Salad with Anchovies", emoji:"🥗",
      cuisine:"italian", time:20, cal:380, tags:["dairy-free"],
      grocery:["4 thick slices stale ciabatta or sourdough","4 large ripe heirloom tomatoes","6 canned anchovies","1/2 red onion soaked in water","1 cucumber","1/2 cup Kalamata olives","fresh basil","capers","3 tbsp red wine vinegar","1/4 cup extra virgin olive oil","salt & pepper"]
    },
    {
      id:"itl5", name:"Spaghetti alla Carbonara", emoji:"🍝",
      cuisine:"italian", time:25, cal:620, tags:[],
      grocery:["1 lb spaghetti or rigatoni","1/2 lb guanciale or thick-cut pancetta diced","4 large egg yolks + 2 whole eggs","1.5 cups grated Pecorino Romano","1 cup grated Parmigiano-Reggiano","1 tbsp coarsely ground black pepper","salt","pasta water (reserve 1 cup)"]
    },
    {
      id:"itl6", name:"Cacio e Pepe Bucatini", emoji:"🍝",
      cuisine:"italian", time:20, cal:540, tags:["vegetarian"],
      grocery:["1 lb bucatini pasta","2 cups grated Pecorino Romano","1 cup grated Parmigiano-Reggiano","2 tbsp coarsely cracked black pepper","salt","3 tbsp extra virgin olive oil","pasta water (reserve 1.5 cups)"]
    },
    {
      id:"itl7", name:"Ossobuco alla Milanese", emoji:"🍖",
      cuisine:"italian", time:150, cal:760, tags:["gluten-free"],
      grocery:["4 veal shanks cross-cut 2-inch thick","1 onion diced","2 carrots diced","3 celery stalks diced","4 cloves garlic","1 cup dry white wine","1 can (14oz) crushed tomatoes","2 cups chicken broth","1/4 cup grated lemon zest for gremolata","1/4 cup fresh parsley","2 cloves garlic for gremolata","flour for dredging","2 tbsp olive oil + 2 tbsp butter","saffron risotto to serve"]
    },
    {
      id:"itl8", name:"Arancini di Riso (Stuffed Risotto Balls)", emoji:"🍚",
      cuisine:"italian", time:60, cal:510, tags:[],
      grocery:["3 cups Arborio rice","4 cups warm chicken broth","1/2 cup grated Parmigiano","2 large eggs","4 oz fresh mozzarella diced","2 oz ham or ragù for filling","1/2 cup frozen peas","1.5 cups Italian breadcrumbs","oil for deep frying","marinara sauce","saffron pinch","white wine 1/4 cup","salt & pepper"]
    },
    {
      id:"itl9", name:"Minestrone with Pistou", emoji:"🍲",
      cuisine:"italian", time:50, cal:370, tags:["vegan"],
      grocery:["1 can (15oz) borlotti or cannellini beans","1 zucchini diced","2 carrots diced","2 stalks celery diced","1 onion diced","2 potatoes diced","1 cup green beans cut","1 can (14oz) crushed tomatoes","1 cup small pasta (ditali)","4 cups vegetable broth","4 cloves garlic","1/4 cup fresh basil for pistou","extra virgin olive oil","Parmigiano rind","salt & pepper"]
    },
    {
      id:"itl10", name:"Saltimbocca alla Romana", emoji:"🥩",
      cuisine:"italian", time:20, cal:480, tags:["gluten-free"],
      grocery:["8 thin veal or chicken escalopes","8 thin slices prosciutto di Parma","16 fresh sage leaves","1/2 cup dry white wine","2 tbsp butter","2 tbsp olive oil","salt & pepper","lemon wedges","roasted potatoes or sautéed spinach to serve"]
    },
    {
      id:"itl11", name:"Baccalà alla Vicentina (Salt Cod in Milk)", emoji:"🐟",
      cuisine:"italian", time:120, cal:490, tags:["gluten-free"],
      grocery:["1.5 lbs salt cod desalted (soaked 48 hrs, water changed)","2 cups whole milk","1/2 cup extra virgin olive oil","2 onions thinly sliced","4 anchovies in oil","1/4 cup fresh parsley","1/2 cup grated Parmigiano","flour for dredging","salt & pepper","white polenta or grilled polenta to serve"]
    },
    {
      id:"itl12", name:"Pappa al Pomodoro (Tuscan Tomato Bread Soup)", emoji:"🍲",
      cuisine:"italian", time:30, cal:350, tags:["vegan"],
      grocery:["4 cups stale Tuscan bread torn into chunks","1 can (28oz) San Marzano tomatoes","4 cups vegetable broth","6 cloves garlic sliced","1/4 cup extra virgin olive oil","1/4 cup fresh basil leaves","1 tsp red pepper flakes","salt & pepper","additional olive oil for drizzle"]
    },

    // ── ASIAN LUNCH (12 meals) ─────────────────────────────
    {
      id:"asl1", name:"Beef Pho (Phở Bò)", emoji:"🍜",
      cuisine:"asian", time:180, cal:450, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs beef bones (knuckle + marrow)","1/2 lb beef brisket","1/2 lb beef sirloin thinly sliced for serving","1 large onion halved & charred","4 inch piece ginger charred","4 star anise","2 cinnamon sticks","6 whole cloves","1 tbsp fish sauce","1 tsp sugar","salt","14 oz flat rice noodles","bean sprouts","fresh Thai basil","fresh cilantro","4 scallions","hoisin sauce","sriracha","2 limes","jalapeño"]
    },
    {
      id:"asl2", name:"Hainanese Chicken Rice", emoji:"🍚",
      cuisine:"asian", time:60, cal:490, tags:["gluten-free","dairy-free"],
      grocery:["1 whole chicken (3.5 lbs)","3 cups jasmine rice","4 cloves garlic smashed","4 slices ginger","2 scallions","2 tbsp sesame oil","salt","chicken poaching broth for cooking rice","ginger-scallion sauce (ginger+scallion+oil+salt)","sweet soy sauce","chili garlic sauce","cucumber slices","fresh cilantro"]
    },
    {
      id:"asl3", name:"Dan Dan Noodles (Spicy Sichuan)", emoji:"🍜",
      cuisine:"asian", time:30, cal:540, tags:["dairy-free"],
      grocery:["1 lb fresh Chinese wheat noodles","1/2 lb ground pork","3 tbsp Chinese sesame paste (or tahini)","2 tbsp soy sauce","1 tbsp Chinese black vinegar","1 tbsp chili oil","1 tbsp sesame oil","1 tsp Sichuan peppercorns toasted & ground","2 tbsp doubanjiang (spicy bean paste)","3 cloves garlic","1 inch ginger","3 scallions","roasted peanuts","bok choy","pickled mustard greens (ya cai)"]
    },
    {
      id:"asl4", name:"Thai Pad See Ew (Wide Rice Noodles)", emoji:"🍜",
      cuisine:"asian", time:20, cal:510, tags:["dairy-free"],
      grocery:["1 lb fresh wide rice noodles (sen yai)","1 lb chicken breast thinly sliced","3 large eggs","2 cups Chinese broccoli (gai lan) or regular broccoli","4 cloves garlic minced","3 tbsp oyster sauce","2 tbsp soy sauce","1 tbsp dark soy sauce","1 tbsp fish sauce","1 tsp sugar","3 tbsp vegetable oil","white pepper"]
    },
    {
      id:"asl5", name:"Japanese Tonkotsu Ramen", emoji:"🍜",
      cuisine:"asian", time:240, cal:680, tags:["dairy-free"],
      grocery:["2 lbs pork trotters or neck bones","1/2 lb chashu pork belly rolled & tied","1/4 cup soy sauce","1/4 cup mirin","2 tbsp sake","4 packs fresh ramen noodles","4 soft-boiled ramen eggs (marinated)","4 sheets nori","1 cup bamboo shoots (menma)","2 cups bean sprouts","sesame oil","4 scallions","mayu (blackened garlic oil) optional"]
    },
    {
      id:"asl6", name:"Korean Bibimbap", emoji:"🍚",
      cuisine:"asian", time:40, cal:560, tags:["gluten-free","dairy-free"],
      grocery:["2 cups short-grain Korean rice cooked","1/2 lb ground beef","2 cups spinach blanched & seasoned","1 cup julienned carrots sautéed","1 cup bean sprouts blanched & seasoned","1 cup sliced mushrooms sautéed","1 zucchini julienned & sautéed","4 eggs (one per bowl)","gochujang sauce (gochujang+sesame oil+sugar+soy+vinegar)","sesame oil","sesame seeds","vegetable oil"]
    },
    {
      id:"asl7", name:"Vietnamese Bun Bo Hue (Spicy Beef Noodle Soup)", emoji:"🍜",
      cuisine:"asian", time:120, cal:490, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs beef shank","1 lb pork hock","1 stalk lemongrass","3 tbsp shrimp paste","2 tbsp fish sauce","2 tbsp annatto oil","2 tsp chili flakes","1 onion charred","1 inch ginger charred","round rice noodles (bun bo)","sliced beef or pork","banana blossom shredded","fresh herbs (mint, perilla)","lime","bean sprouts","chili oil"]
    },
    {
      id:"asl8", name:"Thai Massaman Curry", emoji:"🍛",
      cuisine:"asian", time:60, cal:580, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs bone-in chicken thighs","3 tbsp massaman curry paste","2 cans (14oz) coconut milk","3 medium potatoes cubed","1 onion quartered","1/2 cup roasted peanuts","3 tbsp fish sauce","2 tbsp palm sugar or brown sugar","3 tbsp tamarind paste","3 cardamom pods","1 cinnamon stick","3 star anise","2 bay leaves","jasmine rice","fried shallots for garnish"]
    },
    {
      id:"asl9", name:"Chinese Mapo Tofu", emoji:"🫕",
      cuisine:"asian", time:25, cal:390, tags:["vegan","gluten-free"],
      grocery:["1 block (14oz) silken or medium tofu cubed","1/2 lb ground pork (omit for vegan)","3 tbsp doubanjiang","1 tbsp fermented black beans","4 cloves garlic minced","1 inch fresh ginger","3 scallions","1 cup vegetable or pork broth","2 tbsp soy sauce","1 tsp sesame oil","1 tbsp cornstarch","2 tsp Sichuan peppercorn powder","2 tbsp vegetable oil","steamed rice"]
    },
    {
      id:"asl10", name:"Singapore Chili Crab (Simplified)", emoji:"🦀",
      cuisine:"asian", time:45, cal:560, tags:["gluten-free","dairy-free"],
      grocery:["2 whole Dungeness crabs cleaned & halved","3 tbsp sambal oelek","1/4 cup ketchup","2 tbsp oyster sauce","1 tbsp soy sauce","1 tsp sugar","4 cloves garlic minced","1 inch ginger","3 shallots","2 eggs beaten (stirred in at end)","cornstarch slurry","vegetable oil","fried mantou (Chinese buns) for dipping","scallions","fresh cilantro"]
    },
    {
      id:"asl11", name:"Japanese Katsu Curry", emoji:"🍛",
      cuisine:"asian", time:40, cal:680, tags:["dairy-free"],
      grocery:["4 pork or chicken cutlets pounded thin","2 large eggs beaten","1 cup panko breadcrumbs","1/2 cup all-purpose flour","oil for frying","1 box Japanese curry roux (S&B brand)","1 large onion diced","2 carrots diced","3 potatoes cubed","3 cups water or broth","2 cups short-grain rice","pickled daikon (fukujinzuke)","tonkatsu sauce"]
    },
    {
      id:"asl12", name:"Filipino Adobo Chicken", emoji:"🍗",
      cuisine:"asian", time:60, cal:520, tags:["gluten-free","dairy-free"],
      grocery:["3 lbs chicken pieces bone-in","1/2 cup white cane vinegar","1/3 cup soy sauce","1 whole head garlic peeled & smashed","2 bay leaves","1 tsp whole black peppercorns","1 tsp sugar","2 tbsp vegetable oil","3 cups steamed white rice","sliced green onions","fried garlic chips"]
    },

    // ── INDIAN LUNCH (12 meals) ────────────────────────────
    {
      id:"inl1", name:"Butter Chicken (Murgh Makhani)", emoji:"🍛",
      cuisine:"indian", time:50, cal:590, tags:["gluten-free"],
      grocery:["2 lbs boneless chicken thighs cubed","1 cup plain whole-milk yogurt","1 tbsp ginger-garlic paste","1 tsp Kashmiri red chili","1 can (14oz) tomato purée","1 cup heavy cream","3 tbsp unsalted butter","1 tbsp garam masala","1 tsp cumin","1 tsp coriander","1/2 tsp turmeric","1/2 tsp cardamom","fresh fenugreek leaves (kasuri methi)","fresh cilantro","2 cups basmati rice","naan bread"]
    },
    {
      id:"inl2", name:"Lamb Biryani (Hyderabadi Style)", emoji:"🍚",
      cuisine:"indian", time:120, cal:680, tags:["gluten-free"],
      grocery:["2 lbs bone-in lamb shoulder pieces","2 cups aged basmati rice soaked","1 cup plain yogurt","2 large onions thinly sliced & fried until golden","1 tbsp ginger-garlic paste","1 tsp saffron in 1/4 cup warm milk","1 tsp Biryani masala","1 tsp garam masala","1 tsp turmeric","whole spices (cardamom, cloves, cinnamon, bay leaves)","2 tbsp ghee","fresh mint leaves","fresh cilantro","fried onion (birista)","rose water","raita"]
    },
    {
      id:"inl3", name:"Dal Makhani (Black Lentil Curry)", emoji:"🫘",
      cuisine:"indian", time:120, cal:460, tags:["vegetarian","gluten-free"],
      grocery:["1 cup whole black lentils (urad dal) soaked overnight","1/2 cup kidney beans soaked overnight","1 can (14oz) crushed tomatoes","3 tbsp unsalted butter","1 cup heavy cream","1 tbsp ginger-garlic paste","1 tsp cumin seeds","1 tsp garam masala","1/2 tsp turmeric","salt","fresh cilantro","2 cups basmati rice","naan or roti"]
    },
    {
      id:"inl4", name:"Palak Paneer (Spinach & Cottage Cheese)", emoji:"🥬",
      cuisine:"indian", time:40, cal:450, tags:["vegetarian","gluten-free"],
      grocery:["1 lb paneer cubed & lightly fried","4 cups fresh spinach blanched","1 can (14oz) crushed tomatoes","1 large onion diced","1 tbsp ginger-garlic paste","2 tbsp ghee","1 tsp cumin seeds","1 tsp garam masala","1/2 tsp turmeric","1/2 cup heavy cream","1/4 cup cashew paste","salt","fresh cilantro","2 cups basmati rice","naan"]
    },
    {
      id:"inl5", name:"Chicken Chettinad Curry", emoji:"🍗",
      cuisine:"indian", time:60, cal:530, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs chicken pieces bone-in","2 onions diced","2 tomatoes diced","1 tbsp ginger-garlic paste","3 tbsp Chettinad masala (or make with kalpasi, marathi mokku, star anise, fennel, cinnamon, cloves)","2 tsp red chili powder","1 tsp turmeric","1/2 cup grated coconut toasted","curry leaves","2 tbsp coconut oil","salt","fresh cilantro","steamed rice"]
    },
    {
      id:"inl6", name:"Rajma Chawal (Kidney Bean Curry & Rice)", emoji:"🫘",
      cuisine:"indian", time:60, cal:490, tags:["vegan","gluten-free"],
      grocery:["2 cans (15oz) kidney beans or 1 cup dried soaked overnight","2 large onions diced","2 tomatoes diced","1 tbsp ginger-garlic paste","1 tsp cumin seeds","1 tsp coriander powder","1 tsp garam masala","1/2 tsp turmeric","1/2 tsp Kashmiri red chili","2 tbsp vegetable oil","salt","fresh cilantro","2 cups basmati rice","pickled onion","lime"]
    },
    {
      id:"inl7", name:"Saag Gosht (Lamb & Spinach Curry)", emoji:"🥬",
      cuisine:"indian", time:90, cal:580, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs bone-in lamb shoulder cubed","4 cups fresh spinach or mustard greens","2 onions diced","1 can (14oz) crushed tomatoes","1 tbsp ginger-garlic paste","1 tsp cumin","1 tsp coriander","1 tsp garam masala","1/2 tsp turmeric","2 dried red chiles","2 tbsp vegetable oil","salt","fresh cilantro","2 cups basmati rice","roti"]
    },
    {
      id:"inl8", name:"Pav Bhaji (Mumbai Street Vegetable Mash)", emoji:"🫓",
      cuisine:"indian", time:40, cal:450, tags:["vegetarian"],
      grocery:["4 medium potatoes boiled & mashed","2 cups mixed vegetables (cauliflower, peas, carrots, bell pepper)","3 tbsp pav bhaji masala","2 onions diced","2 tomatoes diced","2 tbsp butter","1 tbsp ginger-garlic paste","8 pav rolls (or dinner rolls)","extra butter for toasting rolls","fresh cilantro","lime wedges","raw onion rings","1/2 lemon"]
    },
    {
      id:"inl9", name:"Kadai Paneer", emoji:"🧀",
      cuisine:"indian", time:35, cal:510, tags:["vegetarian","gluten-free"],
      grocery:["1 lb paneer cubed","2 large onions diced","3 tomatoes diced","2 tbsp ginger-garlic paste","3 tsp coriander seeds toasted & ground","2 tsp cumin seeds","2 dried red chiles","1 tsp Kashmiri red chili","1 bell pepper diced","2 tbsp oil or ghee","fresh cilantro","kasuri methi (dried fenugreek)","2 cups basmati rice","naan"]
    },
    {
      id:"inl10", name:"Goan Fish Curry", emoji:"🐟",
      cuisine:"indian", time:35, cal:440, tags:["gluten-free","dairy-free"],
      grocery:["1.5 lbs firm white fish (kingfish, pomfret, or mahi-mahi)","1 can (14oz) coconut milk","3 tbsp Kashmiri red chili","1 tsp turmeric","1 tsp cumin","3 cloves garlic","1 inch ginger","1/2 cup grated coconut","tamarind paste","2 tbsp coconut oil","1 onion diced","green chiles","curry leaves","salt","steamed rice"]
    },
    {
      id:"inl11", name:"Mutton Korma (Royal Mughal Curry)", emoji:"🍲",
      cuisine:"indian", time:90, cal:620, tags:["gluten-free"],
      grocery:["2 lbs bone-in mutton (goat) or lamb","1 cup plain yogurt","2 large onions thinly sliced & fried golden (birista)","1/4 cup cashew-almond paste","1 tbsp ginger-garlic paste","whole spices (cardamom, cloves, cinnamon, black pepper, mace)","1 tsp Kashmiri red chili","1/2 tsp saffron in warm milk","2 tbsp ghee","fresh cilantro","2 cups basmati rice","naan"]
    },
    {
      id:"inl12", name:"Chole Tikki Chaat (Street Food Snack Plate)", emoji:"🍛",
      cuisine:"indian", time:45, cal:490, tags:["vegan"],
      grocery:["2 cans (15oz) chickpeas","1/2 lb potatoes for tikki","2 slices bread soaked & squeezed for tikki binding","1 tsp cumin for tikki","chole masala","2 tomatoes diced","1 onion diced","tamarind chutney","green mint chutney","sev (crispy chickpea noodles)","chaat masala","pomegranate seeds","fresh cilantro","yogurt whipped"]
    },
  ],

  // ════════════════════════════════════════════════════════════
  // DINNER — 90+ meals
  // ════════════════════════════════════════════════════════════
  dinner: [

    // ── AMERICAN DINNER (10 meals) ──────────────────────────
    {
      id:"ad1", name:"Classic Beef Meatloaf", emoji:"🥩",
      cuisine:"american", time:75, cal:580, tags:[],
      grocery:["2 lbs ground beef (80/20)","1/2 lb ground pork","1 cup plain breadcrumbs","2 large eggs","1/2 onion grated","3 cloves garlic minced","1/4 cup whole milk","2 tbsp Worcestershire","1 tbsp Dijon","1/2 cup ketchup for glaze","1 tbsp brown sugar for glaze","fresh parsley","salt & pepper","mashed potatoes","steamed green beans"]
    },
    {
      id:"ad2", name:"New York Strip with Compound Butter", emoji:"🥩",
      cuisine:"american", time:25, cal:620, tags:["gluten-free"],
      grocery:["4 New York strip steaks (12 oz each)","4 tbsp unsalted butter softened","2 cloves garlic minced","1 tbsp fresh chives","1 tbsp fresh parsley","1 tsp Dijon","kosher salt","coarse black pepper","2 tbsp vegetable oil","roasted asparagus","baked potato","sour cream","chives"]
    },
    {
      id:"ad3", name:"Slow-Cooker Pot Roast", emoji:"🥘",
      cuisine:"american", time:480, cal:620, tags:["gluten-free","dairy-free"],
      grocery:["3 lb chuck roast","1 lb baby potatoes","3 large carrots cut into chunks","2 stalks celery","1 large onion quartered","4 cloves garlic","2 cups beef broth","1 cup dry red wine","2 tbsp tomato paste","1 tbsp Worcestershire","fresh thyme & rosemary","salt & pepper","cornstarch for gravy","fresh parsley"]
    },
    {
      id:"ad4", name:"Lobster Mac & Cheese", emoji:"🦞",
      cuisine:"american", time:45, cal:780, tags:[],
      grocery:["1 lb cavatappi or elbow pasta","1.5 lbs cooked lobster meat","3 cups sharp cheddar shredded","1 cup Gruyère shredded","1/2 cup Parmigiano shredded","3 cups whole milk","2 tbsp butter","2 tbsp flour","1 tsp Dijon","1/2 tsp cayenne","1 cup panko breadcrumbs","fresh chives","salt & white pepper"]
    },
    {
      id:"ad5", name:"BBQ Beef Brisket", emoji:"🥩",
      cuisine:"american", time:480, cal:720, tags:["gluten-free","dairy-free"],
      grocery:["5 lbs beef brisket (flat cut)","2 tbsp coarse salt","2 tbsp coarse black pepper","1 tbsp garlic powder","1 tbsp paprika","1 tsp cayenne","1 cup beef broth","BBQ sauce","coleslaw","brioche buns or white bread","pickles","white onion"]
    },
    {
      id:"ad6", name:"Shrimp & Grits Dinner", emoji:"🦐",
      cuisine:"american", time:35, cal:560, tags:["gluten-free"],
      grocery:["1.5 lbs large shrimp peeled","1 cup stone-ground grits","2.5 cups chicken broth","1 cup heavy cream","1 cup sharp cheddar","4 strips bacon","1/2 onion diced","3 cloves garlic","2 tbsp butter","1 lemon","Cajun seasoning","hot sauce","fresh parsley","scallions"]
    },
    {
      id:"ad7", name:"Nashville Hot Chicken", emoji:"🍗",
      cuisine:"american", time:40, cal:680, tags:["dairy-free"],
      grocery:["4 bone-in chicken thighs & drumsticks","1 cup buttermilk","2 cups all-purpose flour","cayenne pepper (2 tbsp for hot!!)","1 tbsp brown sugar","1 tsp paprika","oil for frying","4 tbsp cayenne paste (lard + cayenne + brown sugar + garlic)","white bread slices","bread & butter pickles","coleslaw"]
    },
    {
      id:"ad8", name:"Roasted Thanksgiving Turkey (Mini)", emoji:"🦃",
      cuisine:"american", time:180, cal:580, tags:["gluten-free"],
      grocery:["1 whole turkey breast (5-6 lbs)","4 tbsp unsalted butter softened","fresh sage, thyme, rosemary","4 cloves garlic","1 lemon","1 cup chicken broth","salt & pepper","cranberry sauce","roasted sweet potatoes","green bean casserole ingredients"]
    },
    {
      id:"ad9", name:"Clam Bake (New England Style)", emoji:"🦪",
      cuisine:"american", time:60, cal:490, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs littleneck clams scrubbed","1 lb steamer clams","4 lobster tails","1 lb andouille sausage","4 ears corn halved","1.5 lbs baby red potatoes","1 large onion quartered","6 cloves garlic","2 lemons","Old Bay seasoning","2 bottles beer or water","fresh parsley","drawn butter for serving"]
    },
    {
      id:"ad10", name:"Chicken Pot Pie", emoji:"🥧",
      cuisine:"american", time:90, cal:680, tags:[],
      grocery:["2 cups cooked chicken shredded","1 cup frozen peas","1 cup diced carrots","1 cup diced celery","1/2 cup diced onion","3 tbsp butter","1/3 cup flour","1.5 cups chicken broth","1 cup heavy cream","1 package store-bought pie crust (2 sheets)","salt & pepper","fresh thyme","1 egg for wash"]
    },

    // ── SOUL FOOD DINNER (10 meals) ────────────────────────
    {
      id:"sfd1", name:"Oxtail Stew with Butter Beans", emoji:"🥘",
      cuisine:"soul", time:200, cal:740, tags:["gluten-free","dairy-free"],
      grocery:["3.5 lbs oxtail","1 can (15oz) butter beans","1 can (14oz) diced tomatoes","2 large onions diced","6 cloves garlic","1 scotch bonnet pepper","2 tbsp browning sauce","1 tbsp allspice berries","2 tbsp soy sauce","1 tbsp brown sugar","3 cups beef broth","fresh thyme","bay leaves","2 tbsp vegetable oil","steamed white rice","coleslaw"]
    },
    {
      id:"sfd2", name:"BBQ Baby Back Ribs Full Rack", emoji:"🍖",
      cuisine:"soul", time:240, cal:840, tags:["gluten-free","dairy-free"],
      grocery:["2 full racks baby back ribs","2 tbsp brown sugar","1 tbsp smoked paprika","1 tbsp garlic powder","1 tbsp onion powder","2 tsp black pepper","1 tsp cayenne","1 cup apple juice for spritzing","1.5 cups BBQ sauce","mac & cheese","collard greens with smoked turkey","Jiffy cornbread mix","1 egg","1/3 cup milk"]
    },
    {
      id:"sfd3", name:"Baked Honey BBQ Chicken Wings", emoji:"🍗",
      cuisine:"soul", time:60, cal:580, tags:["gluten-free","dairy-free"],
      grocery:["4 lbs chicken wings split at joint","1/2 cup BBQ sauce","1/4 cup honey","2 tbsp hot sauce","1 tbsp garlic powder","1 tbsp onion powder","1 tsp smoked paprika","salt & pepper","2 tbsp baking powder (for crispy skin)","celery & carrots for serving","blue cheese or ranch dip"]
    },
    {
      id:"sfd4", name:"Beef Short Rib Plate with Sides", emoji:"🥩",
      cuisine:"soul", time:220, cal:800, tags:["gluten-free"],
      grocery:["4 lbs beef short ribs bone-in","2 cups red wine","2 cups beef broth","3 carrots","3 stalks celery","1 large onion","5 cloves garlic","2 tbsp tomato paste","fresh thyme & rosemary","2 tbsp olive oil","5 Yukon Gold potatoes","1/2 cup heavy cream","4 tbsp butter","roasted asparagus","horseradish cream"]
    },
    {
      id:"sfd5", name:"Fried Catfish Dinner with All the Fixin's", emoji:"🐟",
      cuisine:"soul", time:50, cal:680, tags:[],
      grocery:["4 large catfish fillets","1 cup yellow cornmeal","1/2 cup flour","2 tbsp Cajun seasoning","oil for frying","2 cups elbow mac","2 cups sharp cheddar","1 cup whole milk","collard greens","smoked turkey neck","red pepper flakes","hush puppy mix","hot sauce","lemon wedges","tartar sauce"]
    },
    {
      id:"sfd6", name:"Smothered Chicken with Gravy", emoji:"🍗",
      cuisine:"soul", time:60, cal:620, tags:["gluten-free"],
      grocery:["4 large bone-in chicken thighs","2 large onions sliced into rings","4 cloves garlic","1 cup chicken broth","1/2 cup all-purpose flour for dredging","1 tsp paprika","1 tsp garlic powder","1/2 tsp thyme","vegetable oil","salt & pepper","steamed white rice","candied yams","green beans"]
    },
    {
      id:"sfd7", name:"Peach-Glazed Pork Tenderloin", emoji:"🥩",
      cuisine:"soul", time:40, cal:510, tags:["gluten-free","dairy-free"],
      grocery:["2 pork tenderloins","1/2 cup peach preserves","2 tbsp soy sauce","1 tbsp Dijon mustard","3 cloves garlic minced","1 tsp fresh ginger","1 tsp smoked paprika","salt & pepper","2 tbsp vegetable oil","sweet potato mash","sautéed collard greens","cornbread"]
    },
    {
      id:"sfd8", name:"Red Beans & Rice with Andouille", emoji:"🍚",
      cuisine:"soul", time:120, cal:580, tags:["gluten-free","dairy-free"],
      grocery:["1 lb dried red kidney beans soaked overnight","1 lb andouille sausage sliced","1 large onion diced","4 cloves garlic","3 stalks celery diced","1 green bell pepper diced","2 bay leaves","1 tsp thyme","1 tsp Cajun seasoning","salt & pepper","4 cups long-grain white rice","hot sauce","fresh parsley","scallions"]
    },
    {
      id:"sfd9", name:"Shrimp Etouffée", emoji:"🦐",
      cuisine:"soul", time:40, cal:490, tags:["gluten-free"],
      grocery:["1.5 lbs large shrimp peeled & deveined","1 onion diced","3 stalks celery diced","1 green bell pepper diced","5 cloves garlic","4 tbsp unsalted butter","2 tbsp all-purpose flour","1 cup shrimp or chicken broth","1 can (14oz) diced tomatoes","Cajun seasoning","Worcestershire","hot sauce","steamed long-grain rice","fresh parsley","scallions"]
    },
    {
      id:"sfd10", name:"Sunday Pot Roast with Vegetables", emoji:"🥘",
      cuisine:"soul", time:240, cal:650, tags:["gluten-free","dairy-free"],
      grocery:["3 lbs chuck roast","1 lb baby potatoes halved","3 large carrots cut into chunks","3 stalks celery","1 onion quartered","5 cloves garlic","2 cups beef broth","2 tbsp Worcestershire","1 tbsp soy sauce","fresh thyme & rosemary","bay leaves","2 tbsp vegetable oil","salt & pepper","corn bread","green salad"]
    },

    // ── CARIBBEAN DINNER (10 meals) ────────────────────────
    {
      id:"cad1", name:"Jerk Pork Shoulder with Festival & Plantains", emoji:"🌴",
      cuisine:"caribbean", time:240, cal:730, tags:["gluten-free","dairy-free"],
      grocery:["4 lbs bone-in pork shoulder","5 tbsp jerk seasoning paste","4 scallions","5 cloves garlic","2 scotch bonnet peppers","3 tbsp soy sauce","2 tbsp brown sugar","2 tbsp vegetable oil","1 tsp whole allspice","2 cups flour for festival","cornmeal for festival","1 tsp baking powder","salt","3 ripe plantains","oil for frying","rice & peas"]
    },
    {
      id:"cad2", name:"Brown Stew Chicken", emoji:"🍗",
      cuisine:"caribbean", time:60, cal:560, tags:["gluten-free","dairy-free"],
      grocery:["3 lbs chicken pieces bone-in","2 tbsp browning sauce","1 tbsp soy sauce","1 tbsp Worcestershire","1 large onion sliced","4 cloves garlic","1 scotch bonnet","1 can (14oz) diced tomatoes","1 tsp allspice","fresh thyme","bay leaves","2 cups chicken broth","2 tbsp vegetable oil","white rice","steamed vegetables","fried plantains"]
    },
    {
      id:"cad3", name:"Trinidadian Bake & Shark", emoji:"🦈",
      cuisine:"caribbean", time:45, cal:590, tags:[],
      grocery:["2 lbs shark fillets (or tilapia/mahi-mahi)","2 cups flour for bake","1 tsp baking powder","salt","water for dough","oil for frying","2 tbsp curry powder","2 cloves garlic","1 scotch bonnet","shadow beni (culantro)","cucumber slices","mango chutney","pepper sauce","chadon beni (culantro) sauce","tamarind sauce"]
    },
    {
      id:"cad4", name:"Haitian Diri Kole ak Pwa (Rice & Beans)", emoji:"🍚",
      cuisine:"caribbean", time:60, cal:450, tags:["vegan","gluten-free"],
      grocery:["2 cups long-grain rice","1 can (15oz) red kidney beans","1 can (14oz) coconut milk","1 large onion diced","4 cloves garlic","1 scotch bonnet whole","1 cup water","thyme sprigs","2 tbsp vegetable oil","salt","1 tbsp tomato paste","whole peppercorns","griot or chicken to serve alongside"]
    },
    {
      id:"cad5", name:"Cuban Lechon Asado (Roasted Pork)", emoji:"🥩",
      cuisine:"caribbean", time:300, cal:680, tags:["gluten-free","dairy-free"],
      grocery:["4 lbs pork leg or shoulder bone-in","1/2 cup sour orange juice","1/4 cup lime juice","10 cloves garlic mashed","1 tbsp dried oregano","2 tsp ground cumin","1 tsp black pepper","2 tsp salt","1/4 cup olive oil","mojo sauce (garlic+orange+lime)","black beans & rice","yuca with mojo","fried plantains"]
    },
    {
      id:"cad6", name:"Pepper Pot Stew", emoji:"🫕",
      cuisine:"caribbean", time:120, cal:540, tags:["gluten-free","dairy-free"],
      grocery:["1 lb beef stew meat cubed","1/2 lb pork cubed","1 lb fresh callaloo or spinach","1 lb cassava peeled & cubed","2 potatoes cubed","1 can (14oz) coconut milk","1 scotch bonnet","1 onion diced","4 cloves garlic","fresh thyme","whole allspice","1 cinnamon stick","4 cups broth","flour for spinners (dumplings)","salt & pepper"]
    },
    {
      id:"cad7", name:"Jamaican Escovitch Fish", emoji:"🐟",
      cuisine:"caribbean", time:30, cal:480, tags:["gluten-free","dairy-free"],
      grocery:["4 whole snapper or 4 large fillets","1 cup white vinegar","1 large onion cut into rings","2 carrots julienned","1 scotch bonnet sliced into rings","1 tsp whole allspice berries","1 tsp black peppercorns","1 bay leaf","1 tsp sugar","flour for dusting fish","vegetable oil for frying","bammy or festival to serve","rice & peas"]
    },
    {
      id:"cad8", name:"Puerto Rican Mofongo with Shrimp", emoji:"🍌",
      cuisine:"caribbean", time:40, cal:580, tags:["gluten-free","dairy-free"],
      grocery:["4 large green plantains peeled & sliced","oil for frying","1/2 lb chicharrones (pork cracklings) crushed","8 cloves garlic mashed","2 tbsp olive oil","1 lb large shrimp peeled","1/2 cup chicken broth","2 cloves garlic","1/4 cup tomato sauce","fresh cilantro","1 lime","adobo seasoning","sazón seasoning"]
    },
    {
      id:"cad9", name:"Slow Cooker Oxtail with Dumplings", emoji:"🥘",
      cuisine:"caribbean", time:300, cal:750, tags:["dairy-free"],
      grocery:["3.5 lbs oxtail","2 onions diced","6 cloves garlic","1 scotch bonnet","1 can (14oz) diced tomatoes","2 cups beef broth","2 tbsp browning sauce","2 tbsp soy sauce","2 tbsp brown sugar","1 tbsp allspice","thyme","bay leaves","spinners dumplings (flour + water + salt)","steamed cabbage","white rice"]
    },
    {
      id:"cad10", name:"Trinidadian Doubles Night Spread", emoji:"🫓",
      cuisine:"caribbean", time:60, cal:500, tags:["vegan"],
      grocery:["3 cups all-purpose flour","1 tsp active dry yeast","1 tsp turmeric","1 tsp cumin","salt","warm water","oil for frying","3 cans (15oz) chickpeas","3 tbsp Trinidadian curry powder","2 onions diced","6 cloves garlic","shadow beni (culantro)","pepper sauce","tamarind chutney","cucumber chutney","mango chutney"]
    },

    // ── MEDITERRANEAN DINNER (10 meals) ───────────────────
    {
      id:"medd1", name:"Whole Roasted Lamb Leg (Easter Style)", emoji:"🍖",
      cuisine:"mediterranean", time:180, cal:720, tags:["gluten-free","dairy-free"],
      grocery:["4-5 lb bone-in lamb leg","8 cloves garlic slivered","1/4 cup fresh rosemary","1/4 cup fresh thyme","4 tbsp olive oil","1 lemon juiced","1 tsp dried oregano","salt & black pepper","2 cups dry white wine","roasted baby potatoes with herbs","tzatziki","Greek salad","pita bread","lemon wedges"]
    },
    {
      id:"medd2", name:"Fish Tagine with Chermoula", emoji:"🫕",
      cuisine:"mediterranean", time:50, cal:430, tags:["gluten-free","dairy-free"],
      grocery:["1.5 lbs firm white fish (halibut or sea bass) steaks","1/2 cup fresh cilantro","1/2 cup fresh parsley","5 cloves garlic","1 tsp cumin","1 tsp paprika","1/2 tsp preserved lemon rind minced","1/4 cup olive oil","2 preserved lemons halved","1 cup Kalamata olives","1 can (14oz) diced tomatoes","2 tomatoes sliced","couscous","harissa"]
    },
    {
      id:"medd3", name:"Beef Kebab Dinner Platter", emoji:"🍖",
      cuisine:"mediterranean", time:35, cal:580, tags:["gluten-free","dairy-free"],
      grocery:["1.5 lbs ground beef","1/2 onion grated","3 cloves garlic","1/4 cup flat-leaf parsley","1 tsp allspice","1 tsp cinnamon","1 tsp cumin","1/2 tsp nutmeg","salt & pepper","2 tbsp olive oil","1 cup hummus","tabbouleh (bulgur+parsley+tomato+mint+lemon+oil)","pickled turnips","pita bread","garlic sauce"]
    },
    {
      id:"medd4", name:"Whole Roasted Sea Bass (Mediterranean)", emoji:"🐟",
      cuisine:"mediterranean", time:35, cal:420, tags:["gluten-free","dairy-free"],
      grocery:["2 whole sea bass (2 lbs each) cleaned","6 cloves garlic sliced","2 lemons sliced","1 bunch fresh dill","1 bunch fresh parsley","1/4 cup extra virgin olive oil","2 tomatoes sliced","1 onion sliced","capers","1 cup dry white wine","salt & pepper","roasted fingerling potatoes","Greek salad"]
    },
    {
      id:"medd5", name:"Lamb Stifado (Greek Braised Lamb with Onions)", emoji:"🥘",
      cuisine:"mediterranean", time:120, cal:640, tags:["gluten-free","dairy-free"],
      grocery:["3 lbs bone-in lamb shoulder cut into pieces","2 lbs pearl onions peeled","1 can (14oz) crushed tomatoes","1/2 cup red wine","1/4 cup red wine vinegar","1 cinnamon stick","4 whole cloves","4 allspice berries","2 bay leaves","1 tbsp honey","3 cloves garlic","2 tbsp olive oil","orzo or crusty bread","feta crumbled on top"]
    },
    {
      id:"medd6", name:"Mezze Feast (Full Spread)", emoji:"🫒",
      cuisine:"mediterranean", time:40, cal:560, tags:["vegetarian"],
      grocery:["2 cups hummus","1 cup baba ganoush (eggplant dip)","1 cup tabbouleh","1 cup labneh","1/4 cup za'atar + olive oil","2 cups stuffed grape leaves (dolmas)","1 cup falafel balls","flatbreads or pita","olives assorted","feta cheese block","cherry tomatoes","cucumber","radishes","fresh mint & parsley"]
    },
    {
      id:"medd7", name:"Chicken Bastilla (Moroccan Pie)", emoji:"🥧",
      cuisine:"mediterranean", time:90, cal:660, tags:[],
      grocery:["2 lbs bone-in chicken thighs","1 large onion diced","1/4 cup fresh cilantro","1/4 cup fresh parsley","1 tsp ginger","1 tsp turmeric","1 tsp cinnamon","1/2 tsp saffron","3 large eggs","1/2 cup toasted almonds","2 tbsp powdered sugar + 1 tsp cinnamon for top","1 package phyllo dough","1/2 cup melted butter","salt & pepper"]
    },
    {
      id:"medd8", name:"Baked Lamb Kleftiko (Slow-Roasted in Parchment)", emoji:"🍖",
      cuisine:"mediterranean", time:240, cal:700, tags:["gluten-free"],
      grocery:["4 lbs bone-in lamb shoulder cut into large pieces","4 medium potatoes quartered","1 onion quartered","1 whole head of garlic cloves separated","4 large tomatoes halved","1 cup Kalamata olives","1/2 cup dry white wine","1/4 cup olive oil","1 lemon juiced","fresh rosemary","fresh thyme","dried oregano","1 cup crumbled feta","salt & pepper","parchment paper or foil"]
    },
    {
      id:"medd9", name:"Lamb Couscous with Seven Vegetables (Moroccan)", emoji:"🍚",
      cuisine:"mediterranean", time:90, cal:580, tags:["dairy-free"],
      grocery:["2 lbs bone-in lamb shoulder","2 cups coarse couscous","2 carrots cut into chunks","2 turnips quartered","2 zucchini halved","1 cup canned chickpeas","1 cup butternut squash cubed","1 onion diced","1/4 cup raisins","1 can (14oz) diced tomatoes","ras el hanout","cumin","cinnamon","saffron","4 cups chicken broth","fresh cilantro","harissa on side"]
    },
    {
      id:"medd10", name:"Grilled Swordfish with Salsa Verde", emoji:"🐟",
      cuisine:"mediterranean", time:25, cal:450, tags:["gluten-free","dairy-free"],
      grocery:["4 swordfish steaks (8 oz each)","1 cup fresh flat-leaf parsley","1/4 cup fresh mint","2 tbsp capers","2 anchovy fillets","2 cloves garlic","3 tbsp red wine vinegar","1/2 cup extra virgin olive oil","salt & pepper","lemon","roasted cherry tomatoes","grilled zucchini","white beans with sage"]
    },

    // ── MEXICAN DINNER (10 meals) ──────────────────────────
    {
      id:"mxd1", name:"Mole Negro Chicken", emoji:"🍗",
      cuisine:"mexican", time:180, cal:620, tags:["gluten-free","dairy-free"],
      grocery:["4 lbs chicken thighs & drumsticks","5 dried mulato chiles","3 dried ancho chiles","3 dried pasilla chiles","2 dried chipotle chiles","2 oz Mexican chocolate","1 cup sesame seeds toasted","1/2 cup pumpkin seeds (pepitas)","2 ripe plantains","1 corn tortilla charred","1 onion charred","4 tomatoes charred","6 cloves garlic","raisins","cinnamon stick","cloves","cumin","chicken broth","steamed rice","black beans"]
    },
    {
      id:"mxd2", name:"Carnitas Feast with Accompaniments", emoji:"🌮",
      cuisine:"mexican", time:180, cal:650, tags:["gluten-free","dairy-free"],
      grocery:["4 lbs pork shoulder","1 orange quartered","1 lime quartered","6 cloves garlic","1 tsp cumin","1 tsp dried oregano","1 cinnamon stick","lard or vegetable oil","salt","corn or flour tortillas","diced white onion","fresh cilantro","salsa verde","salsa roja","guacamole","pickled jalapeños","radishes","lime wedges"]
    },
    {
      id:"mxd3", name:"Camarones a la Diabla (Devil Shrimp)", emoji:"🦐",
      cuisine:"mexican", time:25, cal:440, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs large shrimp peeled & deveined","5 dried chiles de arbol","3 dried guajillo chiles","1 can (14oz) diced tomatoes","4 cloves garlic","1/2 white onion","1/2 tsp cumin","2 tbsp vegetable oil","salt","fresh cilantro","lime wedges","steamed white rice","refried beans","corn tortillas"]
    },
    {
      id:"mxd4", name:"Chiles en Nogada Dinner", emoji:"🫑",
      cuisine:"mexican", time:120, cal:680, tags:[],
      grocery:["8 large poblano chiles roasted & peeled","1/2 lb ground beef","1/2 lb ground pork","1 peach diced","1 pear diced","1/4 cup raisins","1/4 cup sliced blanched almonds","2 tomatoes diced","1/4 onion diced","3 cloves garlic","1 tsp cinnamon","1 cup walnuts for nogada sauce","1 cup Mexican crema","4 oz cream cheese","pomegranate seeds","fresh parsley"]
    },
    {
      id:"mxd5", name:"Sopa Seca de Fideos (Dry Noodle Soup)", emoji:"🍝",
      cuisine:"mexican", time:35, cal:420, tags:["vegan"],
      grocery:["12 oz fideo (thin vermicelli) or angel hair pasta","1 can (14oz) crushed tomatoes","3 cloves garlic","1/2 white onion","2 chipotles in adobo","2.5 cups vegetable or chicken broth","2 tbsp vegetable oil","1 tsp cumin","salt","fresh cilantro","Mexican crema","queso fresco","avocado slices","lime"]
    },
    {
      id:"mxd6", name:"Barbacoa de Res (Beef Cheek Barbacoa)", emoji:"🌮",
      cuisine:"mexican", time:300, cal:610, tags:["gluten-free","dairy-free"],
      grocery:["4 lbs beef cheeks (cachete) or chuck roast","4 chipotle chiles in adobo","4 cloves garlic","1/2 onion","1/4 cup apple cider vinegar","1 tsp cumin","1 tsp dried oregano","1/4 tsp cloves","3 bay leaves","1 cup beef broth","banana leaves or foil","corn tortillas","white onion","cilantro","salsa verde","lime wedges"]
    },
    {
      id:"mxd7", name:"Enchiladas Verdes with Pork", emoji:"🫔",
      cuisine:"mexican", time:50, cal:540, tags:["gluten-free"],
      grocery:["8 corn tortillas","2.5 cups shredded carnitas or chicken","1 lb fresh tomatillos husked","3 serrano or jalapeño chiles","1/2 white onion","4 cloves garlic","1/2 cup fresh cilantro","1.5 cups chicken broth","1/2 cup Mexican crema","1 cup crumbled queso fresco","white onion rings","fresh cilantro","sour cream"]
    },
    {
      id:"mxd8", name:"Pescado Zarandeado (Sinaloan Grilled Fish)", emoji:"🐟",
      cuisine:"mexican", time:40, cal:480, tags:["gluten-free","dairy-free"],
      grocery:["2 whole snappers (1.5 lbs each) butterflied","4 tbsp achiote paste","2 tbsp mayonnaise","2 tbsp Worcestershire","2 tbsp soy sauce","1 lime juiced","3 cloves garlic","1 tsp cumin","salt","pickled red onion","fresh cilantro","lime wedges","flour or corn tortillas","avocado","habanero salsa"]
    },
    {
      id:"mxd9", name:"Tacos de Canasta (Basket Tacos)", emoji:"🌮",
      cuisine:"mexican", time:45, cal:460, tags:["vegan"],
      grocery:["24 small corn tortillas","2 cups refried black beans","2 cups potato & chorizo filling (or just beans)","chicharron in green salsa (optional)","2 tbsp chili oil","1/2 cup tomatillo salsa","oil for warming tortillas","cloth-lined basket","white onion","fresh cilantro","lime","pickled jalapeños"]
    },
    {
      id:"mxd10", name:"Cabrito al Pastor (Baby Goat in Adobo)", emoji:"🐐",
      cuisine:"mexican", time:180, cal:670, tags:["gluten-free","dairy-free"],
      grocery:["4 lbs bone-in goat or lamb shoulder pieces","4 dried guajillo chiles","3 dried ancho chiles","5 cloves garlic","1/2 onion","1/2 tsp cumin","1/2 tsp cloves","1/4 tsp oregano","white vinegar","salt","corn tortillas","white onion finely diced","fresh cilantro","lime wedges","salsa verde","avocado"]
    },

    // ── ITALIAN DINNER (10 meals) ──────────────────────────
    {
      id:"itd1", name:"Bistecca alla Fiorentina (Florentine T-Bone)", emoji:"🥩",
      cuisine:"italian", time:30, cal:780, tags:["gluten-free"],
      grocery:["2 Porterhouse or T-bone steaks (2 inch thick, 2 lbs each)","extra virgin olive oil","fresh rosemary & sage","coarse sea salt","coarse black pepper","lemon wedges","roasted rosemary potatoes","sautéed cannellini beans with sage","roasted cherry tomatoes","chianti or Tuscan red wine"]
    },
    {
      id:"itd2", name:"Seafood Risotto (Risotto ai Frutti di Mare)", emoji:"🦐",
      cuisine:"italian", time:45, cal:580, tags:["gluten-free"],
      grocery:["2 cups Carnaroli or Arborio rice","1/2 lb large shrimp","1/2 lb scallops","1/2 lb mussels scrubbed","1/2 lb clams scrubbed","1 cup dry white wine","4 cups warm fish or seafood broth","1 shallot minced","4 cloves garlic","2 tbsp butter","2 tbsp extra virgin olive oil","fresh parsley","lemon zest","salt & pepper"]
    },
    {
      id:"itd3", name:"Lasagna Bolognese (Classic 6-Layer)", emoji:"🍝",
      cuisine:"italian", time:150, cal:720, tags:[],
      grocery:["1 box lasagna noodles","1 lb ground beef","1/2 lb ground pork","1/4 lb pancetta diced","1 onion diced","2 carrots diced","2 celery stalks diced","1 cup dry white wine","1 can (28oz) crushed tomatoes","whole milk","3 tbsp tomato paste","2.5 cups whole milk for béchamel","4 tbsp butter","4 tbsp flour for béchamel","2.5 cups grated Parmigiano-Reggiano","fresh lasagna sheets optional","fresh basil"]
    },
    {
      id:"itd4", name:"Bistecca con Funghi Porcini", emoji:"🥩",
      cuisine:"italian", time:35, cal:620, tags:["gluten-free"],
      grocery:["4 ribeye steaks","1 oz dried porcini mushrooms (rehydrated)","2 cups fresh cremini mushrooms","4 cloves garlic","1/4 cup dry white wine","1/4 cup beef broth","2 tbsp butter","2 tbsp extra virgin olive oil","fresh thyme","fresh sage","salt & pepper","roasted potatoes","sautéed spinach with garlic"]
    },
    {
      id:"itd5", name:"Whole Roasted Branzino with Herbs", emoji:"🐟",
      cuisine:"italian", time:30, cal:420, tags:["gluten-free","dairy-free"],
      grocery:["4 whole branzino (sea bass) or trout cleaned","8 lemon slices","1 bunch fresh dill","1 bunch fresh flat-leaf parsley","1 bunch fresh thyme","6 cloves garlic halved","1/4 cup extra virgin olive oil","1 cup dry white wine","salt & pepper","roasted fingerling potatoes","sautéed Swiss chard","lemon wedges","capers"]
    },
    {
      id:"itd6", name:"Orecchiette with Sausage & Rapini (Broccoli Rabe)", emoji:"🍝",
      cuisine:"italian", time:30, cal:580, tags:[],
      grocery:["1 lb orecchiette pasta","1 lb sweet or hot Italian sausage casings removed","1 large bunch broccoli rabe (rapini) blanched","6 cloves garlic sliced","1/2 tsp red pepper flakes","1/4 cup extra virgin olive oil","1/2 cup grated Pecorino Romano","1/2 cup pasta water","salt","good quality Italian olive oil for finish"]
    },
    {
      id:"itd7", name:"Cacciucco (Tuscan Fish & Shellfish Stew)", emoji:"🫕",
      cuisine:"italian", time:90, cal:540, tags:["gluten-free","dairy-free"],
      grocery:["1 lb mixed firm fish (monkfish, halibut)","1/2 lb shrimp peeled","1/2 lb squid cleaned & sliced","1 lb mussels scrubbed","1 lb clams scrubbed","1 cup dry red wine","1 can (28oz) crushed tomatoes","1 onion diced","4 cloves garlic","3 tbsp tomato paste","red pepper flakes","sage","rosemary","olive oil","thick grilled bread rubbed with garlic","fresh parsley"]
    },
    {
      id:"itd8", name:"Vitello Tonnato (Cold Veal with Tuna Sauce)", emoji:"🥩",
      cuisine:"italian", time:90, cal:490, tags:["gluten-free"],
      grocery:["2 lb veal round roast","1 onion","2 carrots","2 celery stalks","1 cup dry white wine","4 cups water","1 can (5oz) high-quality tuna in olive oil","4 anchovy fillets","2 tbsp capers","3 egg yolks for mayonnaise base","1 cup extra virgin olive oil","2 tbsp lemon juice","salt & pepper","capers for garnish","lemon slices","fresh parsley"]
    },
    {
      id:"itd9", name:"Pappardelle al Ragù di Cinghiale (Wild Boar Ragu)", emoji:"🍝",
      cuisine:"italian", time:180, cal:680, tags:["dairy-free"],
      grocery:["1 lb dried pappardelle pasta","2 lbs wild boar or pork shoulder cut into pieces","1 onion diced","2 carrots diced","2 celery stalks diced","6 cloves garlic","2 cups Chianti red wine","1 can (28oz) crushed tomatoes","2 tbsp tomato paste","rosemary","sage","juniper berries","bay leaves","2 tbsp olive oil","salt & pepper","grated Pecorino for serving"]
    },
    {
      id:"itd10", name:"Agnello alla Scottadito (Grilled Lamb Chops)", emoji:"🍖",
      cuisine:"italian", time:25, cal:540, tags:["gluten-free","dairy-free"],
      grocery:["12 small lamb rib chops (lollipop style)","4 cloves garlic minced","2 tbsp fresh rosemary","2 tbsp fresh mint","3 tbsp extra virgin olive oil","1 lemon juiced","salt & pepper","white bean purée with sage","grilled radicchio with balsamic","lemon wedges","fresh mint"]
    },

    // ── ASIAN DINNER (10 meals) ────────────────────────────
    {
      id:"asd1", name:"Japanese Shabu-Shabu Hot Pot", emoji:"🍲",
      cuisine:"asian", time:40, cal:490, tags:["dairy-free"],
      grocery:["1 lb ribeye or sirloin thinly shaved","1 lb napa cabbage cut into pieces","2 cups shiitake mushrooms","1 block tofu cubed","1 package enoki mushrooms","2 cups chrysanthemum greens (shungiku)","1 pack udon or rice noodles","kombu (dried kelp) for broth","ponzu dipping sauce","sesame dipping sauce","steamed short-grain rice","mitsuba or scallions"]
    },
    {
      id:"asd2", name:"Chinese Peking Duck (Simplified)", emoji:"🦆",
      cuisine:"asian", time:120, cal:650, tags:["dairy-free"],
      grocery:["4 duck leg quarters (or whole duck)","3 tbsp hoisin sauce","2 tbsp soy sauce","1 tbsp honey","1 tbsp rice vinegar","1 tsp five-spice powder","garlic powder","Mandarin pancakes (store-bought)","hoisin sauce for serving","julienned cucumber","julienned scallions","jasmine rice","sesame seeds"]
    },
    {
      id:"asd3", name:"Thai Whole Steamed Snapper with Lime & Chili", emoji:"🐟",
      cuisine:"asian", time:35, cal:420, tags:["gluten-free","dairy-free"],
      grocery:["2 whole red snappers (2 lbs each)","8 limes juiced","1/4 cup fish sauce","2 tbsp palm sugar","10 Thai bird chiles minced","6 cloves garlic minced","fresh lemongrass stalk","kaffir lime leaves","ginger slices","fresh cilantro","scallions","jasmine rice","steamed bok choy"]
    },
    {
      id:"asd4", name:"Korean Galbi Jjim (Braised Short Ribs)", emoji:"🥩",
      cuisine:"asian", time:150, cal:680, tags:["gluten-free","dairy-free"],
      grocery:["4 lbs beef short ribs cut into 2-inch pieces","1 Asian pear grated","1/2 onion grated","6 cloves garlic minced","1/4 cup soy sauce","1/4 cup honey","2 tbsp sesame oil","1 tbsp ginger grated","1 cup beef broth","2 carrots cut into chunks","3 medium potatoes cubed","4 dried shitake mushrooms rehydrated","ginkgo nuts (optional)","sesame seeds","scallions","steamed rice"]
    },
    {
      id:"asd5", name:"Sichuan Water-Boiled Beef (Shui Zhu Niu Rou)", emoji:"🌶️",
      cuisine:"asian", time:30, cal:510, tags:["gluten-free","dairy-free"],
      grocery:["1.5 lbs beef sirloin thinly sliced","3 tbsp doubanjiang (Pixian bean paste)","2 tbsp Sichuan peppercorns","1/4 cup dried chilies","4 cloves garlic","1 inch ginger","3 scallions","1 cup baby bok choy","1 cup bean sprouts","3 cups chicken broth","2 tbsp cornstarch","2 tbsp soy sauce","sesame oil","vegetable oil","steamed rice"]
    },
    {
      id:"asd6", name:"Vietnamese Caramelized Ginger Fish (Ca Kho To)", emoji:"🐟",
      cuisine:"asian", time:35, cal:440, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs catfish or tilapia steaks (bone-in)","3 tbsp fish sauce","3 tbsp coconut caramel (or brown sugar + molasses)","2 inch fresh ginger julienned","5 cloves garlic minced","2 Thai bird chiles sliced","2 shallots sliced","1/4 cup water","black pepper","fresh scallions","jasmine rice","pickled vegetables"]
    },
    {
      id:"asd7", name:"Indonesian Rendang Beef", emoji:"🥩",
      cuisine:"asian", time:180, cal:630, tags:["gluten-free","dairy-free"],
      grocery:["2.5 lbs beef chuck cut into large pieces","3 cans (14oz) coconut milk","3 stalks lemongrass bruised","8 kaffir lime leaves","3 bay leaves","3 turmeric leaves (or 1 tsp dried)","2 tbsp tamarind paste","1 tbsp palm sugar","rendang spice paste (galangal+ginger+garlic+shallots+chiles+candlenuts)","steamed jasmine rice","cucumber slices"]
    },
    {
      id:"asd8", name:"Japanese Sukiyaki", emoji:"🍲",
      cuisine:"asian", time:40, cal:560, tags:["dairy-free"],
      grocery:["1.5 lbs wagyu or ribeye very thinly sliced","1 block firm tofu sliced","2 cups napa cabbage","2 cups shiitake mushrooms","1 package konnyaku noodles (shirataki)","4 scallions cut into pieces","1 cup chrysanthemum greens","sukiyaki sauce (soy+mirin+sake+sugar)","4 large eggs (raw, for dipping)","steamed short-grain rice"]
    },
    {
      id:"asd9", name:"Thai Pad Kra Pao (Holy Basil Stir Fry)", emoji:"🌿",
      cuisine:"asian", time:15, cal:450, tags:["gluten-free","dairy-free"],
      grocery:["1.5 lbs ground pork or beef","2 cups holy basil leaves (or regular Thai basil)","6 cloves garlic minced","4-6 Thai bird chiles minced","3 tbsp oyster sauce","2 tbsp fish sauce","1 tbsp soy sauce","1 tsp sugar","2 tbsp vegetable oil","4 fried eggs (crispy edges)","steamed jasmine rice","sliced cucumber","fish sauce + lime + chili dipping sauce"]
    },
    {
      id:"asd10", name:"Korean Bulgogi with Banchan", emoji:"🥩",
      cuisine:"asian", time:30, cal:520, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs ribeye or sirloin thinly sliced","1 Asian pear grated","6 cloves garlic minced","1 inch ginger grated","1/4 cup soy sauce","3 tbsp sesame oil","2 tbsp brown sugar","1 tbsp gochujang","3 scallions sliced","sesame seeds","2 cups short-grain rice","kimchi","seasoned spinach (sigeumchi namul)","bean sprout banchan","perilla leaves"]
    },

    // ── INDIAN DINNER (10 meals) ───────────────────────────
    {
      id:"ind1", name:"Lamb Rogan Josh", emoji:"🍲",
      cuisine:"indian", time:90, cal:660, tags:["gluten-free"],
      grocery:["2.5 lbs bone-in lamb shoulder cut into pieces","1 cup whole-milk yogurt","2 large onions thinly sliced","5 cloves garlic","2 inch fresh ginger","2 tbsp Kashmiri red chili powder","2 tsp coriander powder","1 tsp garam masala","1/2 tsp turmeric","4 green cardamom pods","2 black cardamom pods","1 cinnamon stick","4 whole cloves","2 bay leaves","3 tbsp ghee","fresh cilantro","2 cups basmati rice","naan","raita"]
    },
    {
      id:"ind2", name:"Whole Tandoori Chicken", emoji:"🍗",
      cuisine:"indian", time:90, cal:540, tags:["gluten-free"],
      grocery:["1 whole chicken (3.5 lbs) cut into pieces","1.5 cups plain yogurt","2 tbsp tandoori masala","1 tbsp ginger-garlic paste","1 tbsp Kashmiri red chili","1 tsp cumin","1/2 tsp turmeric","1/2 tsp garam masala","lemon juice","salt","mustard oil","fresh mint chutney","pickled onions","2 lemons","naan or roti","cucumber raita"]
    },
    {
      id:"ind3", name:"Goat Curry (Mutton Curry Dhaba Style)", emoji:"🍛",
      cuisine:"indian", time:120, cal:620, tags:["gluten-free","dairy-free"],
      grocery:["2.5 lbs bone-in goat meat (mutton) cut into pieces","3 large onions diced","1 can (14oz) crushed tomatoes","1 tbsp ginger-garlic paste","2 tsp coriander powder","1.5 tsp cumin","1 tsp Kashmiri red chili","1 tsp garam masala","1/2 tsp turmeric","3 tbsp vegetable oil","fresh cilantro","steamed basmati rice","roti or naan","pickled onion rings"]
    },
    {
      id:"ind4", name:"Prawn Masala (Kolambi Masala)", emoji:"🦐",
      cuisine:"indian", time:30, cal:440, tags:["gluten-free","dairy-free"],
      grocery:["1.5 lbs tiger prawns shell-on","2 onions finely diced","2 tomatoes diced","1 tbsp ginger-garlic paste","1 tsp cumin seeds","1 tsp Kashmiri red chili","1 tsp coriander powder","1/2 tsp turmeric","1/2 tsp garam masala","curry leaves","2 tbsp coconut oil","salt","fresh cilantro","2 cups basmati rice","roti"]
    },
    {
      id:"ind5", name:"Paneer Tikka Masala", emoji:"🧀",
      cuisine:"indian", time:50, cal:580, tags:["vegetarian","gluten-free"],
      grocery:["1.5 lbs paneer cut into cubes","1 cup plain yogurt for marinade","1 tbsp ginger-garlic paste","1 tsp Kashmiri red chili","1 tsp garam masala","1 tsp chaat masala","bell peppers & onion for skewers","1 can (14oz) crushed tomatoes","1/2 cup heavy cream","1 tbsp butter","tikka masala spice blend","kasuri methi","2 cups basmati rice","naan"]
    },
    {
      id:"ind6", name:"Kerala Fish Curry (Meen Kulambu)", emoji:"🐟",
      cuisine:"indian", time:35, cal:430, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs kingfish, pomfret, or mahi-mahi steaks","1 can (14oz) coconut milk","2 tbsp Kashmiri red chili","1 tsp turmeric","1 tsp fenugreek seeds","1/2 cup kudampuli (Kodampuli or tamarind)","2 onions diced","3 tomatoes diced","3 cloves garlic","1 inch ginger","curry leaves","3 tbsp coconut oil","salt","steamed rice","appam or rice roti"]
    },
    {
      id:"ind7", name:"Dhansak (Parsi Lamb & Lentil Curry)", emoji:"🍲",
      cuisine:"indian", time:90, cal:590, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs bone-in lamb shoulder","1 cup red lentils (masoor dal)","1/2 cup chana dal","2 onions diced","2 tomatoes diced","3 tbsp dhansak masala","1 tbsp ginger-garlic paste","1 tsp turmeric","1/4 cup tamarind paste","2 tbsp jaggery or brown sugar","fresh fenugreek leaves","fresh mint & cilantro","caramelized onion rice (brown rice)","cucumber raita","lime pickle"]
    },
    {
      id:"ind8", name:"Hyderabadi Dum Biryani (Chicken)", emoji:"🍚",
      cuisine:"indian", time:150, cal:700, tags:["gluten-free"],
      grocery:["2.5 lbs bone-in chicken pieces","2 cups basmati rice soaked","1.5 cups plain yogurt","2 large onions fried golden (birista)","1 tbsp ginger-garlic paste","1 tbsp biryani masala","1 tsp Kashmiri red chili","1/2 tsp saffron in warm milk","fresh mint & cilantro","ghee","whole spices (cardamom, cloves, cinnamon, bay leaves, star anise)","rose water","kewra water","raita","mirchi ka salan (chili curry)"]
    },
    {
      id:"ind9", name:"Sarson da Saag with Makki di Roti (Punjabi Winter Classic)", emoji:"🥬",
      cuisine:"indian", time:90, cal:490, tags:["vegetarian","gluten-free"],
      grocery:["4 cups fresh mustard greens (sarson) chopped","2 cups spinach","1 cup bathua (chenopodium) or more spinach","1/4 cup cornmeal (makki atta) stirred in","1 onion diced","2 tomatoes diced","1 tbsp ginger-garlic paste","1 tsp cumin","2 green chiles","3 tbsp ghee","salt","makki di roti (corn flour flatbread)","fresh butter on top","gur (jaggery) optional","pickled chiles"]
    },
    {
      id:"ind10", name:"Goan Beef/Pork Xacuti (Xacutti)", emoji:"🍛",
      cuisine:"indian", time:75, cal:570, tags:["gluten-free","dairy-free"],
      grocery:["2 lbs beef or pork shoulder cubed","1 coconut dry-roasted & grated","3 dried Kashmiri red chiles","2 tsp poppy seeds","1 tsp cumin seeds","1 tsp coriander seeds","5 black peppercorns","3 cloves","1 tsp star anise","1/2 nutmeg grated","1/2 mace","3 tbsp tamarind paste","1 onion diced","3 cloves garlic","1 tbsp ginger","coconut oil","steamed rice","sol kadhi (coconut milk & kokum drink) optional"]
    },
  ],
};

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────────────
export function pickMeal(type, cuisines = [], diets = []) {
  let pool = MEAL_DB[type];
  if (cuisines.length > 0) pool = pool.filter(m => cuisines.includes(m.cuisine));
  if (diets.length > 0)    pool = pool.filter(m => diets.every(d => m.tags.includes(d)));
  if (pool.length === 0)   pool = MEAL_DB[type]; // fallback to full list
  return pool[Math.floor(Math.random() * pool.length)];
}

export function buildWeeklyPlan(cuisines = [], diets = []) {
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  return days.reduce((plan, day) => {
    plan[day] = {
      breakfast: pickMeal("breakfast", cuisines, diets),
      lunch:     pickMeal("lunch",     cuisines, diets),
      dinner:    pickMeal("dinner",    cuisines, diets),
    };
    return plan;
  }, {});
}

export function buildGroceryList(mealPlan) {
  const list = {};
  Object.entries(mealPlan).forEach(([day, meals]) => {
    Object.entries(meals).forEach(([type, meal]) => {
      if (!list[meal.name]) {
        list[meal.name] = { items: meal.grocery, type, day, emoji: meal.emoji };
      }
    });
  });
  return list;
}

export function getMealCount() {
  return Object.values(MEAL_DB).reduce((total, arr) => total + arr.length, 0);
}
