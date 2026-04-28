import { useState, useEffect } from "react";

// ─── MEAL DATABASE ────────────────────────────────────────────────────────────
const MEAL_DB = {
  breakfast: [
    // American
    { id:"b1", name:"Buttermilk Pancakes", emoji:"🥞", cuisine:"american", time:20, cal:420, tags:["vegetarian"], proteins:["eggs","milk"], veggies:[], sides:["maple syrup","butter"], grocery:["2 cups all-purpose flour","2 tbsp sugar","2 tsp baking powder","1/2 tsp salt","2 eggs","1.5 cups buttermilk","3 tbsp melted butter","maple syrup","butter for serving"] },
    { id:"b2", name:"Bacon & Egg Scramble", emoji:"🍳", cuisine:"american", time:15, cal:480, tags:[], proteins:["bacon","eggs"], veggies:["bell pepper","onion"], sides:["toast"], grocery:["6 strips bacon","4 eggs","1 bell pepper diced","1/2 onion diced","2 tbsp butter","salt & pepper","2 slices bread","hot sauce (optional)"] },
    { id:"b3", name:"French Toast Casserole", emoji:"🍞", cuisine:"american", time:35, cal:510, tags:["vegetarian"], proteins:["eggs","milk"], veggies:[], sides:["powdered sugar","berries"], grocery:["1 loaf brioche bread","4 eggs","1.5 cups whole milk","2 tsp vanilla","1 tsp cinnamon","3 tbsp brown sugar","powdered sugar","1 cup mixed berries"] },
    // Soul Food
    { id:"b4", name:"Shrimp & Grits", emoji:"🍤", cuisine:"soul", time:30, cal:560, tags:["gluten-free"], proteins:["shrimp"], veggies:["scallions","garlic"], sides:["stone-ground grits"], grocery:["1 lb large shrimp peeled","1 cup stone-ground grits","2 cups chicken broth","1 cup milk","1/2 cup cheddar cheese","3 cloves garlic","4 scallions","2 strips bacon","1 tbsp Cajun seasoning","2 tbsp butter","salt & pepper"] },
    { id:"b5", name:"Salmon Croquettes", emoji:"🐟", cuisine:"soul", time:25, cal:390, tags:[], proteins:["canned salmon"], veggies:["onion","bell pepper"], sides:["hot sauce","grits"], grocery:["2 cans (14oz) pink salmon","1 egg","1/4 cup flour","1/2 onion finely diced","1/2 bell pepper diced","1 tsp garlic powder","1 tsp Old Bay seasoning","oil for frying","hot sauce for serving"] },
    { id:"b6", name:"Biscuits & Country Gravy", emoji:"🫓", cuisine:"soul", time:40, cal:580, tags:["vegetarian"], proteins:["sausage","milk"], veggies:[], sides:["scrambled eggs"], grocery:["2 cups self-rising flour","1/2 cup cold butter","3/4 cup buttermilk","1/2 lb breakfast sausage","3 tbsp flour","2 cups whole milk","salt & black pepper","4 eggs"] },
    // Caribbean
    { id:"b7", name:"Ackee & Saltfish", emoji:"🌺", cuisine:"caribbean", time:30, cal:440, tags:["gluten-free"], proteins:["saltfish","ackee"], veggies:["tomato","scallion","onion"], sides:["fried dumplings","festival"], grocery:["1 can ackee (19oz)","1/2 lb saltfish (salt cod)","1 tomato diced","3 scallions","1/2 onion","1 scotch bonnet pepper","2 tbsp vegetable oil","thyme sprigs","black pepper"] },
    { id:"b8", name:"Cornmeal Porridge", emoji:"🥣", cuisine:"caribbean", time:20, cal:310, tags:["vegan","gluten-free"], proteins:[], veggies:[], sides:["fresh fruit"], grocery:["1 cup fine cornmeal","3 cups water","1 can coconut milk","2 tbsp brown sugar","1/2 tsp vanilla","1/4 tsp cinnamon","1/4 tsp nutmeg","pinch of salt","banana or mango for serving"] },
    // Mediterranean
    { id:"b9", name:"Shakshuka", emoji:"🍅", cuisine:"mediterranean", time:25, cal:360, tags:["vegetarian","gluten-free"], proteins:["eggs"], veggies:["tomato","bell pepper","onion"], sides:["crusty bread","feta"], grocery:["1 can (28oz) crushed tomatoes","4 eggs","1 bell pepper diced","1 onion diced","4 cloves garlic","1 tsp cumin","1 tsp paprika","1/2 tsp chili flakes","2 tbsp olive oil","1/4 cup crumbled feta","fresh parsley","crusty bread for dipping"] },
    { id:"b10", name:"Avocado Feta Toast", emoji:"🥑", cuisine:"mediterranean", time:10, cal:340, tags:["vegetarian"], proteins:["eggs","feta"], veggies:["tomato","cucumber"], sides:["lemon","olive oil"], grocery:["2 ripe avocados","4 slices sourdough bread","1/2 cup crumbled feta","1 cup cherry tomatoes halved","1/2 cucumber sliced","2 tbsp olive oil","1 lemon","red pepper flakes","salt & black pepper","fresh basil"] },
    { id:"b11", name:"Greek Yogurt Bowl", emoji:"🫙", cuisine:"mediterranean", time:5, cal:290, tags:["vegetarian","gluten-free"], proteins:["greek yogurt"], veggies:[], sides:["honey","granola","berries"], grocery:["2 cups full-fat Greek yogurt","2 tbsp honey","1/2 cup granola","1/2 cup blueberries","1/2 cup strawberries sliced","2 tbsp chopped walnuts","1 tsp chia seeds"] },
    // Mexican
    { id:"b12", name:"Huevos Rancheros", emoji:"🌮", cuisine:"mexican", time:20, cal:450, tags:["vegetarian","gluten-free"], proteins:["eggs"], veggies:["tomato","jalapeño","onion"], sides:["corn tortillas","black beans"], grocery:["4 corn tortillas","4 eggs","1 can (15oz) black beans","1 can (14oz) diced tomatoes","1 jalapeño diced","1/2 onion diced","2 cloves garlic","1 tsp cumin","2 tbsp vegetable oil","1/2 cup salsa","1 avocado","sour cream","fresh cilantro","lime"] },
    { id:"b13", name:"Chorizo Breakfast Tacos", emoji:"🌯", cuisine:"mexican", time:20, cal:520, tags:[], proteins:["chorizo","eggs"], veggies:["onion","scallion"], sides:["corn tortillas","salsa"], grocery:["1/2 lb Mexican chorizo","4 eggs","6 small corn tortillas","1/2 onion diced","2 scallions","1/2 cup shredded Mexican cheese","1/2 cup salsa verde","sour cream","fresh cilantro","lime wedges"] },
    // Italian
    { id:"b14", name:"Frittata with Veggies", emoji:"🍳", cuisine:"italian", time:30, cal:380, tags:["vegetarian","gluten-free"], proteins:["eggs"], veggies:["zucchini","spinach","tomato"], sides:["crusty bread"], grocery:["6 eggs","1 zucchini sliced","2 cups baby spinach","1 cup cherry tomatoes halved","1/2 onion diced","1/2 cup shredded mozzarella","2 tbsp olive oil","fresh basil","salt & pepper","crusty Italian bread"] },
    // Asian
    { id:"b15", name:"Congee with Toppings", emoji:"🍚", cuisine:"asian", time:45, cal:320, tags:["gluten-free"], proteins:["soft-boiled eggs","chicken"], veggies:["scallion","ginger"], sides:["crispy shallots","soy sauce"], grocery:["1 cup jasmine rice","6 cups chicken broth","2 cups shredded rotisserie chicken","2 soft-boiled eggs","2 scallions sliced","1 inch fresh ginger","2 tbsp soy sauce","1 tsp sesame oil","crispy shallots","white pepper"] },
    { id:"b16", name:"Veggie Fried Rice", emoji:"🍳", cuisine:"asian", time:20, cal:410, tags:["vegetarian"], proteins:["eggs"], veggies:["peas","carrots","corn","scallion"], sides:["soy sauce","sesame oil"], grocery:["3 cups cooked day-old rice","3 eggs","1 cup frozen peas","1 cup diced carrots","1 cup corn kernels","3 scallions","3 cloves garlic","2 tbsp soy sauce","1 tbsp oyster sauce","1 tsp sesame oil","2 tbsp vegetable oil"] },
    // Indian
    { id:"b17", name:"Masala Omelette", emoji:"🍳", cuisine:"indian", time:12, cal:300, tags:["vegetarian","gluten-free"], proteins:["eggs"], veggies:["onion","tomato","chili","cilantro"], sides:["buttered toast","chai"], grocery:["3 eggs","1/2 onion finely diced","1 tomato diced","1 green chili diced","fresh cilantro","1/2 tsp turmeric","1/2 tsp cumin seeds","salt to taste","1 tbsp oil","2 slices bread"] },
    { id:"b18", name:"Aloo Paratha", emoji:"🫓", cuisine:"indian", time:35, cal:460, tags:["vegetarian"], proteins:[], veggies:["potato","onion","chili"], sides:["yogurt","pickle","butter"], grocery:["2 cups whole wheat flour","3 medium potatoes boiled and mashed","1/2 onion finely diced","1 green chili diced","1 tsp garam masala","1/2 tsp cumin","fresh cilantro","salt","butter","plain yogurt","mango pickle"] },
  ],

  lunch: [
    // Soul Food
    { id:"l1", name:"Fried Chicken Sandwich", emoji:"🍗", cuisine:"soul", time:35, cal:680, tags:[], proteins:["chicken thighs"], veggies:["lettuce","tomato","pickles"], sides:["coleslaw","fries"], grocery:["4 chicken thighs boneless","2 cups buttermilk","2 cups flour","1 tbsp paprika","1 tsp cayenne","1 tsp garlic powder","oil for frying","4 brioche buns","1/4 head cabbage shredded","1 cup shredded carrots","1/2 cup mayo","2 tbsp apple cider vinegar","lettuce","tomato","pickles","hot sauce"] },
    { id:"l2", name:"Smothered Pork Chops", emoji:"🥩", cuisine:"soul", time:45, cal:620, tags:["gluten-free"], proteins:["pork chops"], veggies:["onion","garlic"], sides:["mashed potatoes","green beans"], grocery:["4 bone-in pork chops","2 onions sliced","4 cloves garlic","2 cups chicken broth","1/2 cup flour","1 tsp thyme","1 tsp garlic powder","2 tbsp vegetable oil","salt & pepper","4 potatoes","4 tbsp butter","1/2 cup warm milk","1 lb green beans"] },
    { id:"l3", name:"Catfish Po'Boy", emoji:"🐟", cuisine:"soul", time:30, cal:590, tags:[], proteins:["catfish fillets"], veggies:["lettuce","tomato"], sides:["remoulade","fries"], grocery:["4 catfish fillets","1 cup cornmeal","1/2 cup flour","1 tbsp Cajun seasoning","2 eggs","oil for frying","4 hoagie rolls","2 tbsp mayo","1 tbsp Creole mustard","1 tsp hot sauce","lettuce","tomato","pickles"] },
    // Caribbean
    { id:"l4", name:"Jerk Chicken Rice Bowl", emoji:"🌴", cuisine:"caribbean", time:40, cal:580, tags:["gluten-free"], proteins:["chicken thighs"], veggies:["scallion","garlic","scotch bonnet"], sides:["rice & peas","fried plantains"], grocery:["6 chicken thighs","3 tbsp jerk seasoning","2 scallions","3 cloves garlic","1 scotch bonnet pepper","2 tbsp soy sauce","2 tbsp vegetable oil","2 cups long-grain rice","1 can coconut milk","1 can kidney beans","2 ripe plantains","fresh thyme"] },
    { id:"l5", name:"Curry Goat", emoji:"🍲", cuisine:"caribbean", time:120, cal:640, tags:["gluten-free"], proteins:["goat meat"], veggies:["potato","onion","scotch bonnet"], sides:["rice","roti"], grocery:["2 lbs goat meat cubed","2 tbsp Jamaican curry powder","1 onion diced","4 cloves garlic","1 scotch bonnet pepper","3 potatoes cubed","1 can coconut milk","2 cups beef broth","thyme sprigs","green onions","2 tbsp vegetable oil","2 cups white rice","roti or naan bread"] },
    { id:"l6", name:"Stewed Fish with Bammy", emoji:"🐠", cuisine:"caribbean", time:35, cal:490, tags:["gluten-free"], proteins:["snapper","cod"], veggies:["tomato","onion","bell pepper"], sides:["bammy","festival"], grocery:["2 lbs whole snapper or cod fillets","1 can (14oz) diced tomatoes","1 onion sliced","1 bell pepper sliced","3 cloves garlic","1 scotch bonnet pepper","2 tbsp soy sauce","thyme","allspice berries","2 tbsp vegetable oil","2 bammy cakes (frozen section)"] },
    // Mediterranean
    { id:"l7", name:"Grilled Chicken Gyro", emoji:"🫔", cuisine:"mediterranean", time:30, cal:520, tags:[], proteins:["chicken breast"], veggies:["tomato","cucumber","onion"], sides:["tzatziki","pita"], grocery:["4 chicken breasts","4 pita breads","2 tbsp olive oil","1 tbsp oregano","1 tsp garlic powder","1 tsp paprika","1 cucumber","2 tomatoes diced","1 red onion sliced","1 cup Greek yogurt","2 cloves garlic","fresh dill","1 lemon","feta cheese"] },
    { id:"l8", name:"Lamb Kofta Bowl", emoji:"🍖", cuisine:"mediterranean", time:35, cal:560, tags:["gluten-free"], proteins:["ground lamb"], veggies:["tomato","cucumber","parsley"], sides:["hummus","rice","pita"], grocery:["1.5 lbs ground lamb","1 onion grated","3 cloves garlic","1 tsp cumin","1 tsp coriander","1 tsp cinnamon","fresh parsley","1 cup hummus","2 tomatoes diced","1 cucumber diced","1 cup cooked rice","pita bread","tzatziki","lemon"] },
    { id:"l9", name:"Falafel Wrap", emoji:"🌯", cuisine:"mediterranean", time:30, cal:480, tags:["vegan"], proteins:["chickpeas"], veggies:["tomato","cucumber","lettuce"], sides:["tahini sauce","pita"], grocery:["2 cans (15oz) chickpeas drained","1/2 onion","3 cloves garlic","1/4 cup fresh parsley","1/4 cup fresh cilantro","1 tsp cumin","1 tsp coriander","oil for frying","4 pita breads","1/4 cup tahini","1 lemon","tomatoes","cucumber","lettuce","pickled turnips"] },
    { id:"l10", name:"Greek Salad with Grilled Salmon", emoji:"🐟", cuisine:"mediterranean", time:25, cal:450, tags:["gluten-free"], proteins:["salmon"], veggies:["tomato","cucumber","olives","red onion"], sides:["feta","lemon dressing"], grocery:["4 salmon fillets","2 large tomatoes chopped","1 English cucumber chopped","1/2 red onion sliced","1 cup Kalamata olives","1 cup crumbled feta","3 tbsp olive oil","1 lemon","1 tsp dried oregano","salt & pepper","2 tbsp olive oil for salmon"] },
    // Mexican
    { id:"l11", name:"Carne Asada Tacos", emoji:"🌮", cuisine:"mexican", time:30, cal:550, tags:["gluten-free"], proteins:["skirt steak"], veggies:["onion","cilantro","jalapeño"], sides:["corn tortillas","guacamole","salsa"], grocery:["1.5 lbs skirt steak","1 orange juiced","2 limes juiced","4 cloves garlic","1 tsp cumin","1 tsp chili powder","2 tbsp soy sauce","8 small corn tortillas","1 white onion diced","fresh cilantro","2 avocados","1 jalapeño","2 limes","salsa verde"] },
    { id:"l12", name:"Chicken Pozole", emoji:"🍲", cuisine:"mexican", time:50, cal:430, tags:["gluten-free"], proteins:["chicken breast"], veggies:["hominy","cabbage","radish"], sides:["tostadas","lime","oregano"], grocery:["2 chicken breasts","1 can (25oz) hominy drained","1 can (14oz) diced tomatoes","1 onion","4 cloves garlic","2 dried ancho chilies","1 tsp oregano","4 cups chicken broth","2 cups shredded cabbage","4 radishes sliced","2 limes","dried oregano","tostada shells"] },
    // Italian
    { id:"l13", name:"Chicken Parm Sandwich", emoji:"🍝", cuisine:"italian", time:35, cal:680, tags:[], proteins:["chicken breast"], veggies:["tomato"], sides:["marinara","mozzarella","ciabatta"], grocery:["4 chicken breasts pounded thin","2 eggs","1 cup Italian breadcrumbs","1/2 cup grated parmesan","1 jar (24oz) marinara sauce","8 oz fresh mozzarella sliced","4 ciabatta rolls","2 tbsp olive oil","oil for frying","fresh basil","salt & pepper"] },
    { id:"l14", name:"Tuscan White Bean Soup", emoji:"🍲", cuisine:"italian", time:35, cal:380, tags:["vegan","gluten-free"], proteins:["white beans"], veggies:["spinach","tomato","celery","carrot"], sides:["crusty bread"], grocery:["2 cans (15oz) cannellini beans","1 can (14oz) diced tomatoes","4 cups vegetable broth","2 cups baby spinach","3 stalks celery diced","2 carrots diced","1 onion diced","4 cloves garlic","1 tsp rosemary","2 tbsp olive oil","parmesan rind","crusty Italian bread","salt & pepper"] },
    // Asian
    { id:"l15", name:"Teriyaki Chicken Bowl", emoji:"🍗", cuisine:"asian", time:25, cal:520, tags:[], proteins:["chicken thighs"], veggies:["broccoli","edamame","carrot"], sides:["steamed rice","sesame seeds"], grocery:["4 chicken thighs boneless","1/4 cup soy sauce","2 tbsp honey","1 tbsp mirin","1 tsp sesame oil","2 cloves garlic","1 tsp fresh ginger","2 cups broccoli florets","1 cup frozen edamame","2 carrots julienned","2 cups cooked jasmine rice","sesame seeds","scallions"] },
    { id:"l16", name:"Beef & Broccoli", emoji:"🥩", cuisine:"asian", time:25, cal:490, tags:[], proteins:["flank steak"], veggies:["broccoli","garlic","ginger"], sides:["steamed rice"], grocery:["1.5 lbs flank steak sliced thin","4 cups broccoli florets","3 cloves garlic","1 inch fresh ginger","1/3 cup soy sauce","2 tbsp oyster sauce","1 tbsp brown sugar","1 tsp sesame oil","2 tbsp cornstarch","2 tbsp vegetable oil","2 cups cooked rice","sesame seeds"] },
    { id:"l17", name:"Pho Noodle Soup", emoji:"🍜", cuisine:"asian", time:60, cal:410, tags:[], proteins:["beef sirloin","beef bones"], veggies:["bean sprouts","scallion","cilantro"], sides:["rice noodles","hoisin","sriracha"], grocery:["1 lb beef sirloin thinly sliced","8 cups beef broth","1 onion halved charred","3 inch ginger charred","3 star anise","1 cinnamon stick","cloves","12 oz rice noodles","2 cups bean sprouts","4 scallions","fresh cilantro","fresh basil","2 limes","hoisin sauce","sriracha","fish sauce"] },
    // Indian
    { id:"l18", name:"Butter Chicken", emoji:"🍛", cuisine:"indian", time:45, cal:580, tags:["gluten-free"], proteins:["chicken breast"], veggies:["tomato","onion","garlic","ginger"], sides:["basmati rice","naan"], grocery:["2 lbs chicken breast cubed","1 can (14oz) crushed tomatoes","1 can (14oz) coconut cream","1 onion diced","4 cloves garlic","1 inch fresh ginger","2 tbsp butter","1 tbsp garam masala","1 tsp turmeric","1 tsp cumin","1 tsp coriander","1 tsp paprika","fresh cilantro","2 cups basmati rice","naan bread"] },
    { id:"l19", name:"Chana Masala", emoji:"🫘", cuisine:"indian", time:35, cal:420, tags:["vegan","gluten-free"], proteins:["chickpeas"], veggies:["tomato","onion","spinach"], sides:["basmati rice","naan"], grocery:["2 cans (15oz) chickpeas drained","1 can (14oz) crushed tomatoes","2 cups baby spinach","1 large onion diced","4 cloves garlic","1 inch ginger","2 tsp garam masala","1 tsp cumin seeds","1 tsp turmeric","1 tsp coriander","2 tbsp vegetable oil","fresh cilantro","2 cups basmati rice","naan or roti"] },
  ],

  dinner: [
    // Soul Food
    { id:"d1", name:"Oxtail Stew", emoji:"🥘", cuisine:"soul", time:180, cal:720, tags:["gluten-free"], proteins:["oxtail"], veggies:["carrot","potato","onion","scotch bonnet"], sides:["white rice","coleslaw"], grocery:["3 lbs oxtail","1 can (14oz) diced tomatoes","2 carrots chopped","3 potatoes cubed","1 onion diced","4 cloves garlic","1 scotch bonnet pepper","2 tbsp soy sauce","2 tbsp brown sugar","1 tbsp allspice","2 cups beef broth","fresh thyme","2 tbsp vegetable oil","3 cups white rice","cabbage for coleslaw"] },
    { id:"d2", name:"BBQ Baby Back Ribs", emoji:"🍖", cuisine:"soul", time:180, cal:820, tags:["gluten-free"], proteins:["pork ribs"], veggies:["onion","garlic"], sides:["mac & cheese","collard greens","cornbread"], grocery:["2 racks baby back ribs","2 tbsp brown sugar","1 tbsp paprika","1 tbsp garlic powder","1 tbsp onion powder","1 tsp cayenne","1 cup BBQ sauce","2 cups elbow macaroni","2 cups shredded sharp cheddar","1 cup whole milk","2 tbsp butter","1 lb collard greens","1/4 lb smoked turkey","1 box Jiffy cornbread mix"] },
    { id:"d3", name:"Fried Catfish & Hush Puppies", emoji:"🐟", cuisine:"soul", time:40, cal:650, tags:[], proteins:["catfish"], veggies:["onion","scallion"], sides:["hush puppies","coleslaw","tartar sauce"], grocery:["4 catfish fillets","1 cup yellow cornmeal","1/2 cup flour","1 tbsp Cajun seasoning","2 eggs","oil for frying","1 cup cornmeal for hush puppies","1/2 cup flour","1 egg","1/2 cup buttermilk","1/4 cup diced onion","1/2 tsp baking powder","coleslaw mix","mayo","apple cider vinegar"] },
    { id:"d4", name:"Braised Short Ribs", emoji:"🥩", cuisine:"soul", time:200, cal:780, tags:["gluten-free"], proteins:["beef short ribs"], veggies:["carrot","celery","onion","garlic"], sides:["creamy mashed potatoes","roasted asparagus"], grocery:["4 lbs beef short ribs","2 cups red wine","2 cups beef broth","3 carrots chopped","3 stalks celery","1 onion diced","4 cloves garlic","2 tbsp tomato paste","fresh thyme & rosemary","2 tbsp olive oil","5 potatoes","1/2 cup warm cream","4 tbsp butter","1 lb asparagus"] },
    // Caribbean
    { id:"d5", name:"Jerk Pork with Festival", emoji:"🌴", cuisine:"caribbean", time:90, cal:710, tags:["gluten-free"], proteins:["pork shoulder"], veggies:["scallion","garlic","scotch bonnet"], sides:["festival","rice & peas","fried plantains"], grocery:["3 lbs pork shoulder","4 tbsp jerk seasoning paste","4 scallions","4 cloves garlic","1 scotch bonnet","2 tbsp soy sauce","2 tbsp brown sugar","1 tsp allspice","1 cup rice","1 can coconut milk","1 can kidney beans","2 ripe plantains","vegetable oil","2 cups flour","1 tsp baking powder","1 tsp sugar","cornmeal for festival"] },
    { id:"d6", name:"Pepper Pot Soup", emoji:"🍲", cuisine:"caribbean", time:90, cal:520, tags:["gluten-free"], proteins:["beef","pork"], veggies:["spinach","cassava","potato"], sides:["bread","dumplings"], grocery:["1 lb stew beef cubed","1/2 lb pork cubed","2 cups spinach or callaloo","1 lb cassava peeled and cubed","2 potatoes cubed","1 can coconut milk","1 scotch bonnet","1 onion","3 cloves garlic","thyme","allspice","cinnamon stick","4 cups beef broth","flour for dumplings","butter"] },
    { id:"d7", name:"Curry Chicken", emoji:"🍛", cuisine:"caribbean", time:60, cal:590, tags:["gluten-free"], proteins:["chicken"], veggies:["potato","onion","scotch bonnet"], sides:["white rice","roti"], grocery:["3 lbs chicken pieces bone-in","3 tbsp Jamaican curry powder","2 potatoes cubed","1 onion diced","4 cloves garlic","1 scotch bonnet","1 cup coconut milk","2 cups chicken broth","fresh thyme","1 tbsp vegetable oil","salt & pepper","3 cups white rice","store-bought roti"] },
    // Mediterranean
    { id:"d8", name:"Lamb Chops with Roasted Veg", emoji:"🍖", cuisine:"mediterranean", time:45, cal:680, tags:["gluten-free"], proteins:["lamb chops"], veggies:["zucchini","tomato","bell pepper","eggplant"], sides:["couscous","mint yogurt sauce"], grocery:["8 lamb chops","2 zucchini sliced","2 bell peppers sliced","1 eggplant cubed","1 cup cherry tomatoes","4 tbsp olive oil","3 cloves garlic","1 tbsp rosemary","1 tbsp thyme","1.5 cups couscous","2 cups chicken broth","1 cup Greek yogurt","fresh mint","1 lemon","salt & pepper"] },
    { id:"d9", name:"Baked Salmon Orzo", emoji:"🐟", cuisine:"mediterranean", time:35, cal:580, tags:["gluten-free"], proteins:["salmon"], veggies:["spinach","tomato","kalamata olives"], sides:["orzo","lemon herb sauce"], grocery:["4 salmon fillets","2 cups orzo pasta","3 cups chicken broth","2 cups baby spinach","1 cup cherry tomatoes","1/2 cup Kalamata olives","3 cloves garlic","2 tbsp olive oil","1/2 cup crumbled feta","1 lemon","fresh dill","fresh parsley","salt & pepper"] },
    { id:"d10", name:"Moussaka", emoji:"🫕", cuisine:"mediterranean", time:90, cal:620, tags:[], proteins:["ground beef","ground lamb"], veggies:["eggplant","tomato","onion"], sides:["Greek salad","crusty bread"], grocery:["1 lb ground beef","1/2 lb ground lamb","2 large eggplants sliced","1 can (28oz) crushed tomatoes","1 onion diced","4 cloves garlic","1 tsp cinnamon","1 tsp allspice","2 cups whole milk","3 tbsp flour","3 tbsp butter","2 eggs","1/2 cup grated parmesan","3 tbsp olive oil","salt & pepper","fresh parsley"] },
    { id:"d11", name:"Chicken Shawarma Platter", emoji:"🫔", cuisine:"mediterranean", time:40, cal:570, tags:["gluten-free"], proteins:["chicken thighs"], veggies:["tomato","cucumber","red onion"], sides:["hummus","tabbouleh","pita"], grocery:["2 lbs chicken thighs","2 tsp cumin","2 tsp paprika","1 tsp turmeric","1 tsp garlic powder","1 tsp cinnamon","1/2 tsp cayenne","3 tbsp olive oil","1 cup hummus","2 tomatoes diced","1 cucumber diced","1 red onion diced","1 cup bulgur wheat","fresh parsley","mint","2 lemons","pita bread"] },
    // Mexican
    { id:"d12", name:"Birria Beef Tacos", emoji:"🌮", cuisine:"mexican", time:180, cal:680, tags:["gluten-free"], proteins:["beef chuck"], veggies:["onion","tomato","cilantro"], sides:["corn tortillas","consommé","lime","radish"], grocery:["3 lbs beef chuck roast","4 dried guajillo chilies","2 dried ancho chilies","1 can (14oz) diced tomatoes","1 onion","4 cloves garlic","1 tsp cumin","1 tsp oregano","1 cinnamon stick","3 cups beef broth","corn tortillas","1 white onion diced","fresh cilantro","3 limes","radishes sliced","shredded Oaxacan cheese"] },
    { id:"d13", name:"Chile Verde Pork", emoji:"🫕", cuisine:"mexican", time:90, cal:560, tags:["gluten-free"], proteins:["pork shoulder"], veggies:["tomatillo","green chile","potato"], sides:["flour tortillas","Mexican rice","refried beans"], grocery:["2 lbs pork shoulder cubed","1 lb tomatillos husked and quartered","4 Hatch green chiles roasted","1 onion diced","4 cloves garlic","2 potatoes cubed","2 cups chicken broth","1 tsp cumin","1 tsp oregano","2 tbsp vegetable oil","flour tortillas","2 cups Mexican rice","1 can refried beans","fresh cilantro","lime"] },
    // Italian
    { id:"d14", name:"Osso Buco", emoji:"🍖", cuisine:"italian", time:150, cal:740, tags:[], proteins:["veal shanks"], veggies:["carrot","celery","onion","tomato"], sides:["saffron risotto","gremolata","crusty bread"], grocery:["4 veal shanks cross-cut","1 can (14oz) crushed tomatoes","2 carrots diced","3 stalks celery diced","1 onion diced","4 cloves garlic","1 cup dry white wine","2 cups chicken broth","2 tbsp tomato paste","flour for dredging","2 tbsp olive oil","2 cups Arborio rice","4 cups warm chicken broth","saffron","1 cup white wine","parmesan","fresh parsley","lemon zest"] },
    { id:"d15", name:"Seafood Linguine", emoji:"🦐", cuisine:"italian", time:35, cal:590, tags:[], proteins:["shrimp","scallops","clams"], veggies:["garlic","tomato","parsley"], sides:["linguine","crusty bread","white wine"], grocery:["1 lb linguine","1/2 lb large shrimp","1/2 lb sea scallops","1 lb littleneck clams","1 can (14oz) diced tomatoes","6 cloves garlic","1/2 cup dry white wine","1/4 cup olive oil","red pepper flakes","fresh parsley","1 lemon","salt & pepper","crusty bread"] },
    // Asian
    { id:"d16", name:"General Tso's Chicken", emoji:"🍗", cuisine:"asian", time:40, cal:620, tags:[], proteins:["chicken thighs"], veggies:["broccoli","dried chili"], sides:["steamed rice","egg rolls"], grocery:["2 lbs chicken thighs cubed","1/3 cup soy sauce","3 tbsp hoisin sauce","2 tbsp rice vinegar","3 tbsp sugar","1 tbsp sesame oil","4 cloves garlic","1 tbsp fresh ginger","dried red chilies","cornstarch for coating","oil for frying","3 cups broccoli florets","2 cups cooked rice","frozen egg rolls"] },
    { id:"d17", name:"Miso Glazed Salmon", emoji:"🐟", cuisine:"asian", time:25, cal:520, tags:["gluten-free"], proteins:["salmon"], veggies:["bok choy","edamame","scallion"], sides:["steamed rice","miso soup"], grocery:["4 salmon fillets","3 tbsp white miso paste","2 tbsp honey","1 tbsp soy sauce","1 tbsp rice vinegar","2 heads baby bok choy","1 cup frozen edamame","4 scallions","1 inch fresh ginger","sesame seeds","2 cups cooked jasmine rice","miso soup packets"] },
    { id:"d18", name:"Thai Green Curry", emoji:"🍛", cuisine:"asian", time:35, cal:540, tags:["gluten-free"], proteins:["chicken thighs","shrimp"], veggies:["zucchini","bell pepper","bamboo shoots","thai basil"], sides:["jasmine rice"], grocery:["1.5 lbs chicken thighs sliced","1/2 lb shrimp","2 cans (14oz) coconut milk","3 tbsp green curry paste","1 zucchini sliced","1 bell pepper sliced","1 can bamboo shoots drained","Thai basil leaves","3 kaffir lime leaves","2 tbsp fish sauce","1 tbsp sugar","1 lime","2 cups jasmine rice"] },
    // Indian
    { id:"d19", name:"Lamb Rogan Josh", emoji:"🍲", cuisine:"indian", time:90, cal:660, tags:["gluten-free"], proteins:["lamb shoulder"], veggies:["onion","tomato","garlic","ginger"], sides:["basmati rice","naan","raita"], grocery:["2 lbs lamb shoulder cubed","1 cup plain yogurt","2 onions diced","1 can (14oz) crushed tomatoes","5 cloves garlic","2 inch fresh ginger","2 tsp Kashmiri red chili","1 tsp cumin","1 tsp coriander","1 tsp garam masala","1/2 tsp turmeric","4 cardamom pods","2 tbsp ghee","fresh cilantro","2 cups basmati rice","naan","1 cup plain yogurt for raita","cucumber"] },
    { id:"d20", name:"Palak Paneer", emoji:"🥬", cuisine:"indian", time:40, cal:440, tags:["vegetarian","gluten-free"], proteins:["paneer"], veggies:["spinach","onion","tomato","garlic"], sides:["basmati rice","naan"], grocery:["1 lb paneer cubed","4 cups fresh spinach","1 onion diced","1 can (14oz) crushed tomatoes","4 cloves garlic","1 inch fresh ginger","2 tbsp ghee","1 tsp cumin seeds","1 tsp garam masala","1/2 tsp turmeric","1/2 cup heavy cream","2 cups basmati rice","naan bread","salt & pepper"] },
  ],

  sides: [
    { id:"s1", name:"Collard Greens", emoji:"🥬", cuisine:"soul", grocery:["1 lb collard greens washed and chopped","1/4 lb smoked turkey leg","1 onion diced","3 cloves garlic","1 cup chicken broth","1 tbsp apple cider vinegar","red pepper flakes","salt & pepper"] },
    { id:"s2", name:"Mac & Cheese", emoji:"🧀", cuisine:"soul", grocery:["2 cups elbow macaroni","2 cups sharp cheddar shredded","1/2 cup gruyere shredded","2 cups whole milk","3 tbsp butter","3 tbsp flour","salt","black pepper","paprika","breadcrumbs for topping"] },
    { id:"s3", name:"Fried Plantains", emoji:"🍌", cuisine:"caribbean", grocery:["3 ripe plantains","1/2 cup vegetable oil","salt"] },
    { id:"s4", name:"Rice & Peas", emoji:"🍚", cuisine:"caribbean", grocery:["2 cups long grain rice","1 can coconut milk","1 can kidney beans","2 cups water","2 cloves garlic","thyme sprigs","salt & pepper"] },
    { id:"s5", name:"Tabbouleh", emoji:"🥗", cuisine:"mediterranean", grocery:["1 cup bulgur wheat","2 cups fresh parsley","1/2 cup fresh mint","4 scallions","2 tomatoes diced","1/4 cup olive oil","2 tbsp lemon juice","salt & pepper"] },
    { id:"s6", name:"Roasted Root Veggies", emoji:"🥕", cuisine:"mediterranean", grocery:["2 carrots chopped","2 parsnips chopped","1 sweet potato cubed","1 red onion","3 tbsp olive oil","1 tsp cumin","1 tsp paprika","salt & pepper","fresh rosemary"] },
    { id:"s7", name:"Mexican Street Corn", emoji:"🌽", cuisine:"mexican", grocery:["6 ears corn","1/4 cup mayo","1/4 cup sour cream","1 cup cotija cheese crumbled","chili powder","lime","fresh cilantro"] },
    { id:"s8", name:"Steamed Jasmine Rice", emoji:"🍚", cuisine:"asian", grocery:["2 cups jasmine rice","2.5 cups water","salt","1 tsp butter"] },
  ]
};

const CUISINE_OPTIONS = [
  { id:"american", label:"🍔 American", color:"#FF6B35" },
  { id:"soul", label:"🍗 Soul Food", color:"#C9A84C" },
  { id:"caribbean", label:"🌴 Caribbean", color:"#2ECC71" },
  { id:"mediterranean", label:"🫒 Mediterranean", color:"#3498DB" },
  { id:"mexican", label:"🌮 Mexican", color:"#E74C3C" },
  { id:"italian", label:"🍝 Italian", color:"#9B59B6" },
  { id:"asian", label:"🍜 Asian", color:"#E67E22" },
  { id:"indian", label:"🍛 Indian", color:"#F39C12" },
];

const DIET_OPTIONS = [
  { id:"vegan", label:"🌱 Vegan" },
  { id:"vegetarian", label:"🥗 Vegetarian" },
  { id:"gluten-free", label:"🌾 Gluten-Free" },
  { id:"dairy-free", label:"🥛 Dairy-Free" },
  { id:"keto", label:"🥩 Keto" },
];

const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const FULL_DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const MEAL_TYPES = ["breakfast","lunch","dinner"];

const MEAL_TYPE_COLORS = { breakfast:"#FFE66D", lunch:"#4ECDC4", dinner:"#FF6B35" };
const MEAL_TYPE_BG = { breakfast:"rgba(255,230,109,0.12)", lunch:"rgba(78,205,196,0.12)", dinner:"rgba(255,107,53,0.12)" };

function getYouTubeLink(mealName) {
  const query = encodeURIComponent(`how to make ${mealName} recipe`);
  return `https://www.youtube.com/results?search_query=${query}`;
}

function pickMeal(type, cuisines, diets) {
  let pool = MEAL_DB[type];
  if (cuisines.length > 0) pool = pool.filter(m => cuisines.includes(m.cuisine));
  if (diets.length > 0) pool = pool.filter(m => diets.every(d => m.tags.includes(d)));
  if (pool.length === 0) pool = MEAL_DB[type];
  return pool[Math.floor(Math.random() * pool.length)];
}

function generatePlan(cuisines, diets) {
  return DAYS.reduce((plan, day) => {
    plan[day] = {
      breakfast: pickMeal("breakfast", cuisines, diets),
      lunch: pickMeal("lunch", cuisines, diets),
      dinner: pickMeal("dinner", cuisines, diets),
    };
    return plan;
  }, {});
}

function buildGroceryList(mealPlan) {
  const list = {};
  Object.entries(mealPlan).forEach(([day, meals]) => {
    Object.entries(meals).forEach(([type, meal]) => {
      if (!list[meal.name]) list[meal.name] = { items: meal.grocery, type, day };
    });
  });
  return list;
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

*{box-sizing:border-box;margin:0;padding:0;}
:root{
  --bg:#FFF8F0;
  --card:#FFFFFF;
  --card2:#FEF6EC;
  --orange:#FF6B35;
  --orange2:#FF8C5A;
  --green:#27AE60;
  --teal:#4ECDC4;
  --yellow:#F5A623;
  --text:#1A1A2E;
  --muted:#8A8A9A;
  --border:#EEE8E0;
  --shadow:0 4px 20px rgba(255,107,53,0.10);
}
.app{font-family:'Nunito',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;max-width:430px;margin:0 auto;position:relative;overflow-x:hidden;}
.screen{padding:0 0 100px;animation:fadeUp 0.35s ease;}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
h1,h2,.display{font-family:'Playfair Display',serif;}

.status-bar{padding:12px 20px 0;display:flex;justify-content:space-between;font-size:11px;color:var(--muted);font-weight:600;}

/* Header */
.header{padding:16px 20px 8px;display:flex;align-items:center;justify-content:space-between;}
.logo{display:flex;align-items:center;gap:9px;}
.logo-icon{width:38px;height:38px;background:linear-gradient(135deg,#FF6B35,#FF8C5A);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 3px 12px rgba(255,107,53,0.35);}
.logo-text{font-family:'Playfair Display',serif;font-size:22px;font-weight:800;color:var(--text);}
.notif-btn{width:38px;height:38px;background:var(--card);border:1.5px solid var(--border);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:17px;cursor:pointer;box-shadow:var(--shadow);}

/* Hero */
.hero{padding:8px 20px 18px;}
.hero-greeting{color:var(--muted);font-size:14px;font-weight:600;margin-bottom:3px;}
.hero-title{font-family:'Playfair Display',serif;font-size:26px;font-weight:800;line-height:1.25;color:var(--text);}
.hero-title em{color:var(--orange);font-style:normal;}

/* Stats strip */
.stats-strip{display:flex;gap:10px;padding:0 20px 18px;}
.stat-card{flex:1;background:var(--card);border:1.5px solid var(--border);border-radius:16px;padding:11px 10px;text-align:center;box-shadow:var(--shadow);}
.stat-val{font-family:'Playfair Display',serif;font-size:21px;font-weight:700;}
.stat-lbl{font-size:10px;color:var(--muted);font-weight:700;letter-spacing:0.3px;margin-top:1px;}

/* Section header */
.sec-hd{padding:0 20px;display:flex;justify-content:space-between;align-items:center;margin-bottom:11px;}
.sec-title{font-size:17px;font-weight:800;color:var(--text);}
.sec-link{font-size:12px;color:var(--orange);font-weight:700;cursor:pointer;}

/* Day tabs */
.day-tabs{display:flex;gap:8px;padding:0 20px 18px;overflow-x:auto;scrollbar-width:none;}
.day-tabs::-webkit-scrollbar{display:none;}
.day-tab{flex-shrink:0;padding:8px 15px;border-radius:20px;font-size:13px;font-weight:700;cursor:pointer;transition:all 0.2s;border:1.5px solid var(--border);background:var(--card);color:var(--muted);}
.day-tab.active{background:var(--orange);border-color:var(--orange);color:white;box-shadow:0 3px 12px rgba(255,107,53,0.3);}

/* Meal cards */
.meal-cards-wrap{padding:0 20px;display:flex;flex-direction:column;gap:11px;}
.meal-card{background:var(--card);border:1.5px solid var(--border);border-radius:20px;overflow:hidden;box-shadow:var(--shadow);cursor:pointer;transition:transform 0.2s,box-shadow 0.2s;}
.meal-card:active{transform:scale(0.98);}
.meal-card-top{display:flex;align-items:center;gap:13px;padding:14px 14px 0 14px;}
.meal-type-badge{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:10px;font-size:10px;font-weight:800;letter-spacing:0.5px;text-transform:uppercase;}
.meal-emoji-box{width:54px;height:54px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0;}
.meal-body{flex:1;}
.meal-name{font-size:16px;font-weight:800;color:var(--text);line-height:1.2;margin-bottom:4px;}
.meal-cuisine-tag{display:inline-block;font-size:10px;font-weight:700;background:var(--bg);border:1px solid var(--border);padding:2px 8px;border-radius:8px;color:var(--muted);margin-bottom:4px;}
.meal-metas{display:flex;gap:10px;}
.meal-meta{font-size:11px;color:var(--muted);font-weight:600;}
.meal-meta strong{color:var(--text);}
.meal-card-actions{display:flex;gap:8px;padding:10px 14px 13px;}
.meal-action-btn{flex:1;padding:9px 6px;border-radius:12px;border:none;font-family:'Nunito',sans-serif;font-size:12px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;transition:all 0.2s;}
.btn-watch{background:#FF0000;color:white;}
.btn-watch:hover{background:#CC0000;}
.btn-swap{background:var(--bg);color:var(--text);border:1.5px solid var(--border);}
.btn-swap:hover{background:var(--border);}
.btn-save{background:var(--bg);color:var(--orange);border:1.5px solid var(--border);}
.btn-save:hover{background:rgba(255,107,53,0.08);}

/* Diet tags */
.diet-tags{display:flex;flex-wrap:wrap;gap:5px;padding:0 14px 12px;}
.diet-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;background:rgba(39,174,96,0.1);color:var(--green);}

/* Surprise btn */
.surprise-btn{margin:16px 20px 0;background:linear-gradient(135deg,#FF6B35,#FF8C5A);border:none;border-radius:18px;padding:16px;color:white;font-family:'Nunito',sans-serif;font-size:15px;font-weight:800;cursor:pointer;width:calc(100% - 40px);display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 4px 18px rgba(255,107,53,0.35);transition:all 0.2s;}
.surprise-btn:hover{transform:translateY(-1px);box-shadow:0 6px 22px rgba(255,107,53,0.45);}

/* Bottom nav */
.bottom-nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:rgba(255,248,240,0.97);backdrop-filter:blur(20px);border-top:1.5px solid var(--border);padding:10px 0 20px;display:flex;justify-content:space-around;z-index:100;}
.nav-item{display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;padding:4px 16px;border-radius:14px;transition:all 0.2s;}
.nav-icon{font-size:22px;}
.nav-label{font-size:10px;color:var(--muted);font-weight:700;transition:color 0.2s;}
.nav-item.active .nav-label{color:var(--orange);}

/* Onboarding */
.onboard-wrap{padding:22px 20px;}
.ob-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;}
.ob-brand{display:flex;align-items:center;gap:8px;}
.step-bar{height:5px;background:var(--border);border-radius:3px;flex:1;margin:0 6px;overflow:hidden;}
.step-fill{height:100%;background:var(--orange);border-radius:3px;transition:width 0.4s ease;}
.skip-btn{background:none;border:none;color:var(--muted);font-family:'Nunito',sans-serif;font-size:13px;font-weight:700;cursor:pointer;}
.ob-title{font-family:'Playfair Display',serif;font-size:27px;font-weight:800;margin-bottom:7px;line-height:1.2;}
.ob-title em{color:var(--orange);font-style:normal;}
.ob-sub{color:var(--muted);font-size:14px;font-weight:600;margin-bottom:26px;}
.chip-grid{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:26px;}
.sel-chip{padding:10px 15px;border-radius:20px;border:2px solid var(--border);background:var(--card);color:var(--text);font-family:'Nunito',sans-serif;font-size:13px;font-weight:700;cursor:pointer;transition:all 0.2s;}
.sel-chip.sel{border-color:var(--orange);background:rgba(255,107,53,0.1);color:var(--orange);}
.text-in{width:100%;background:var(--card);border:2px solid var(--border);border-radius:14px;padding:13px 16px;color:var(--text);font-size:14px;outline:none;margin-bottom:12px;font-family:'Nunito',sans-serif;transition:border-color 0.2s;resize:none;}
.text-in:focus{border-color:var(--orange);}
.text-in::placeholder{color:var(--muted);}
.range-group{margin-bottom:20px;}
.range-row{display:flex;justify-content:space-between;margin-bottom:7px;font-size:13px;font-weight:700;}
.range-row em{color:var(--orange);font-style:normal;}
input[type=range]{width:100%;accent-color:var(--orange);height:4px;}
.primary-btn{width:100%;background:var(--orange);border:none;border-radius:16px;padding:16px;color:white;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;cursor:pointer;transition:all 0.2s;margin-top:8px;box-shadow:0 4px 16px rgba(255,107,53,0.3);}
.primary-btn:hover{background:var(--orange2);transform:translateY(-1px);}
.back-btn{background:none;border:none;color:var(--muted);font-family:'Nunito',sans-serif;width:100%;margin-top:12px;cursor:pointer;font-size:13px;font-weight:700;}

/* Family mode pill */
.family-pill{display:flex;align-items:center;gap:10px;background:var(--card);border:2px solid var(--border);border-radius:16px;padding:14px 16px;margin-bottom:12px;cursor:pointer;}
.family-pill.active{border-color:var(--orange);background:rgba(255,107,53,0.07);}
.family-pill-icon{font-size:24px;}
.family-pill-info{flex:1;}
.family-pill-name{font-weight:800;font-size:14px;}
.family-pill-sub{font-size:12px;color:var(--muted);font-weight:600;}
.family-pill-check{width:22px;height:22px;border-radius:7px;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:12px;}
.family-pill.active .family-pill-check{background:var(--orange);border-color:var(--orange);color:white;}

/* Calendar */
.cal-wrap{padding:0 20px;}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-bottom:16px;}
.cal-col{text-align:center;}
.cal-lbl{font-size:9px;color:var(--muted);font-weight:800;letter-spacing:0.3px;text-transform:uppercase;margin-bottom:5px;}
.cal-num{width:34px;height:34px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin:0 auto;cursor:pointer;transition:all 0.2s;background:var(--card);border:1.5px solid var(--border);}
.cal-num.sel{background:var(--orange);color:white;border-color:var(--orange);box-shadow:0 2px 10px rgba(255,107,53,0.3);}
.cal-num.tod{border-color:var(--orange);}
.day-meal-row{display:flex;align-items:center;gap:11px;background:var(--card);border:1.5px solid var(--border);border-radius:15px;padding:11px 13px;margin-bottom:8px;cursor:pointer;}
.dmr-emoji{font-size:22px;}
.dmr-info{flex:1;}
.dmr-type{font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);font-weight:800;}
.dmr-name{font-weight:800;font-size:14px;}
.dmr-watch{background:#FF0000;color:white;border:none;border-radius:9px;padding:6px 11px;font-size:11px;font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;}

/* Grocery */
.grocery-header{padding:20px 20px 16px;background:linear-gradient(135deg,rgba(39,174,96,0.1),transparent);}
.grocery-title{font-family:'Playfair Display',serif;font-size:22px;font-weight:800;}
.grocery-sub{color:var(--muted);font-size:13px;font-weight:600;margin-top:3px;}
.grocery-tabs{display:flex;gap:8px;padding:0 20px 14px;overflow-x:auto;scrollbar-width:none;}
.grocery-tabs::-webkit-scrollbar{display:none;}
.gtab{flex-shrink:0;padding:7px 14px;border-radius:16px;font-size:12px;font-weight:700;cursor:pointer;border:1.5px solid var(--border);background:var(--card);color:var(--muted);transition:all 0.2s;}
.gtab.active{background:var(--green);border-color:var(--green);color:white;}
.grocery-meal-section{padding:0 20px;}
.meal-section-hd{display:flex;align-items:center;gap:8px;margin-bottom:10px;margin-top:16px;}
.meal-section-emoji{font-size:20px;}
.meal-section-name{font-size:14px;font-weight:800;}
.meal-section-day{font-size:11px;color:var(--muted);font-weight:600;}
.grocery-item{display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);cursor:pointer;}
.gcheck{width:21px;height:21px;border-radius:7px;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;transition:all 0.2s;flex-shrink:0;margin-top:1px;}
.gcheck.chk{background:var(--teal);border-color:var(--teal);}
.gitem-name{font-size:13px;font-weight:600;transition:color 0.2s;line-height:1.4;}
.gitem-name.chk{color:var(--muted);text-decoration:line-through;}
.delivery-btn{margin:16px 20px;background:var(--card);border:2px solid var(--teal);border-radius:15px;padding:14px;color:var(--teal);font-family:'Nunito',sans-serif;font-size:14px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:all 0.2s;}
.delivery-btn:hover{background:rgba(78,205,196,0.1);}

/* Profile */
.profile-hero{padding:28px 20px;text-align:center;background:linear-gradient(180deg,rgba(255,107,53,0.1) 0%,transparent 100%);}
.profile-av{width:78px;height:78px;background:linear-gradient(135deg,#FF6B35,#FF8C5A);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:34px;margin:0 auto 11px;box-shadow:0 4px 18px rgba(255,107,53,0.3);}
.profile-name{font-family:'Playfair Display',serif;font-size:22px;font-weight:800;}
.profile-sub{color:var(--muted);font-size:13px;font-weight:600;margin-top:3px;}
.pref-row{padding:14px 20px;display:flex;align-items:center;gap:12px;border-bottom:1px solid var(--border);cursor:pointer;}
.pref-icon{font-size:20px;width:28px;text-align:center;}
.pref-txt{flex:1;}
.pref-lbl{font-size:14px;font-weight:700;}
.pref-val{font-size:12px;color:var(--muted);font-weight:600;margin-top:1px;}
.pref-arrow{color:var(--muted);font-size:16px;}

/* Meal detail modal */
.modal-overlay{position:fixed;inset:0;background:rgba(26,26,46,0.65);z-index:200;display:flex;align-items:flex-end;animation:fadeIn 0.2s ease;}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.modal-sheet{background:var(--bg);border-radius:28px 28px 0 0;padding:0 0 100px;max-height:85vh;overflow-y:auto;animation:slideUp 0.3s ease;}
@keyframes slideUp{from{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}
.modal-handle{width:40px;height:5px;background:var(--border);border-radius:3px;margin:14px auto 0;}
.modal-emoji-header{text-align:center;padding:18px 20px 0;font-size:60px;}
.modal-meal-name{font-family:'Playfair Display',serif;font-size:24px;font-weight:800;text-align:center;padding:8px 20px 0;}
.modal-tags{display:flex;justify-content:center;flex-wrap:wrap;gap:6px;padding:10px 20px 0;}
.modal-tag{font-size:11px;font-weight:700;padding:4px 10px;border-radius:10px;background:rgba(255,107,53,0.1);color:var(--orange);}
.modal-stats{display:flex;gap:10px;padding:14px 20px;}
.mstat{flex:1;background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:11px;text-align:center;}
.mstat-val{font-size:18px;font-weight:800;color:var(--orange);}
.mstat-lbl{font-size:10px;color:var(--muted);font-weight:700;margin-top:2px;}
.modal-section-title{font-size:16px;font-weight:800;padding:16px 20px 8px;}
.ingredient-item{display:flex;align-items:center;gap:10px;padding:8px 20px;border-bottom:1px solid var(--border);}
.ingredient-dot{width:7px;height:7px;border-radius:50%;background:var(--orange);flex-shrink:0;}
.ingredient-text{font-size:13px;font-weight:600;}
.watch-full-btn{margin:16px 20px 0;background:#FF0000;border:none;border-radius:15px;padding:15px;color:white;font-family:'Nunito',sans-serif;font-size:15px;font-weight:800;cursor:pointer;width:calc(100% - 40px);display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 3px 14px rgba(255,0,0,0.25);}
.watch-full-btn:hover{background:#CC0000;}
.close-modal-btn{margin:10px 20px 0;background:var(--bg);border:2px solid var(--border);border-radius:15px;padding:13px;color:var(--text);font-family:'Nunito',sans-serif;font-size:14px;font-weight:800;cursor:pointer;width:calc(100% - 40px);}

/* Toast */
.toast{position:fixed;bottom:115px;left:50%;transform:translateX(-50%);background:var(--text);color:white;padding:11px 22px;border-radius:22px;font-weight:700;font-size:13px;z-index:300;white-space:nowrap;animation:toastIn 0.3s ease,toastOut 0.3s ease 1.7s forwards;}
@keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
@keyframes toastOut{to{opacity:0}}

/* Loading */
.gen-overlay{position:fixed;inset:0;background:rgba(255,248,240,0.95);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:400;gap:18px;}
.gen-spinner{width:64px;height:64px;border:4px solid var(--border);border-top-color:var(--orange);border-radius:50%;animation:spin 0.8s linear infinite;}
@keyframes spin{to{transform:rotate(360deg)}}
.gen-txt{font-family:'Playfair Display',serif;font-size:20px;font-weight:800;text-align:center;}
.gen-sub{color:var(--muted);font-size:13px;font-weight:600;text-align:center;}
`;

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function MealMind() {
  const [navTab, setNavTab] = useState("onboard");
  const [obStep, setObStep] = useState(0);
  const [diets, setDiets] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [servings, setServings] = useState(4);
  const [ingredients, setIngredients] = useState("");
  const [budget, setBudget] = useState(120);
  const [timeLimit, setTimeLimit] = useState(45);
  const [familyMode, setFamilyMode] = useState(false);
  const [mealPlan, setMealPlan] = useState(null);
  const [activeDay, setActiveDay] = useState("Mon");
  const [calDay, setCalDay] = useState(0);
  const [grocery, setGrocery] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [groceryTab, setGroceryTab] = useState("all");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [savedMeals, setSavedMeals] = useState([]);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2100); };

  const doGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      const plan = generatePlan(cuisines, diets);
      setMealPlan(plan);
      setGrocery(buildGroceryList(plan));
      setLoading(false);
      setNavTab("home");
    }, 2000);
  };

  const swapMeal = (type, day) => {
    const newMeal = pickMeal(type, cuisines, diets);
    setMealPlan(prev => {
      const updated = { ...prev, [day]: { ...prev[day], [type]: newMeal } };
      setGrocery(buildGroceryList(updated));
      return updated;
    });
    showToast("Meal swapped! ✨");
  };

  const toggleSave = (meal) => {
    setSavedMeals(prev => prev.find(m => m.id === meal.id) ? prev.filter(m => m.id !== meal.id) : [...prev, meal]);
    showToast(savedMeals.find(m => m.id === meal.id) ? "Removed from favorites" : "Saved to favorites ❤️");
  };

  const totalCal = mealPlan && activeDay
    ? Object.values(mealPlan[activeDay]).reduce((s, m) => s + m.cal, 0) : 0;

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalItems = Object.values(grocery).reduce((s, g) => s + g.items.length, 0);

  // ONBOARDING
  if (navTab === "onboard") {
    const steps = [
      {
        title: <><em>Dietary</em> needs</>,
        sub: "We'll only show meals that fit your lifestyle.",
        content: (
          <div className="chip-grid">
            {DIET_OPTIONS.map(d => (
              <button key={d.id} className={`sel-chip ${diets.includes(d.id) ? "sel" : ""}`}
                onClick={() => setDiets(p => p.includes(d.id) ? p.filter(x => x !== d.id) : [...p, d.id])}>
                {d.label}
              </button>
            ))}
            <button className={`sel-chip ${diets.length === 0 ? "sel" : ""}`}
              onClick={() => setDiets([])}>🍽️ No restrictions</button>
          </div>
        )
      },
      {
        title: <>Favorite <em>cuisines</em></>,
        sub: "Pick any cultures you love eating. Mix & match!",
        content: (
          <div className="chip-grid">
            {CUISINE_OPTIONS.map(c => (
              <button key={c.id} className={`sel-chip ${cuisines.includes(c.id) ? "sel" : ""}`}
                onClick={() => setCuisines(p => p.includes(c.id) ? p.filter(x => x !== c.id) : [...p, c.id])}>
                {c.label}
              </button>
            ))}
          </div>
        )
      },
      {
        title: <>Cooking for <em>family?</em></>,
        sub: "We'll adjust portions and add kid-friendly options.",
        content: (
          <>
            {[
              { icon:"👩", label:"Just Me", sub:"1 person · quick meals", val:1, fm:false },
              { icon:"👩‍❤️‍👨", label:"Couple", sub:"2 people · easy weeknights", val:2, fm:false },
              { icon:"👨‍👩‍👧", label:"Small Family", sub:"3–4 people · family-friendly", val:4, fm:true },
              { icon:"👨‍👩‍👧‍👦", label:"Big Family", sub:"5–6 people · big batches", val:6, fm:true },
            ].map(opt => (
              <div key={opt.val} className={`family-pill ${servings === opt.val ? "active" : ""}`}
                onClick={() => { setServings(opt.val); setFamilyMode(opt.fm); }}>
                <div className="family-pill-icon">{opt.icon}</div>
                <div className="family-pill-info">
                  <div className="family-pill-name">{opt.label}</div>
                  <div className="family-pill-sub">{opt.sub}</div>
                </div>
                <div className="family-pill-check">{servings === opt.val ? "✓" : ""}</div>
              </div>
            ))}
          </>
        )
      },
      {
        title: <>What's in your <em>fridge?</em></>,
        sub: "We'll use ingredients you have to save money.",
        content: (
          <textarea className="text-in" rows={4}
            placeholder="e.g. chicken, rice, onions, garlic, canned tomatoes..."
            value={ingredients} onChange={e => setIngredients(e.target.value)} />
        )
      },
      {
        title: <>Time & <em>budget</em></>,
        sub: "We'll never suggest meals outside your limits.",
        content: (
          <>
            <div className="range-group">
              <div className="range-row"><span>⏱️ Max cook time per meal</span><em>{timeLimit} min</em></div>
              <input type="range" min={10} max={120} step={5} value={timeLimit} onChange={e => setTimeLimit(+e.target.value)} />
            </div>
            <div className="range-group">
              <div className="range-row"><span>💰 Weekly grocery budget</span><em>${budget}</em></div>
              <input type="range" min={50} max={400} step={10} value={budget} onChange={e => setBudget(+e.target.value)} />
            </div>
          </>
        )
      }
    ];

    const s = steps[obStep];
    const isLast = obStep === steps.length - 1;
    const pct = ((obStep + 1) / steps.length) * 100;

    return (
      <div className="app">
        <style>{CSS}</style>
        {loading && <Loader />}
        <div className="status-bar"><span>9:41</span><span>●●●</span></div>
        <div className="onboard-wrap screen">
          <div className="ob-top">
            <div className="ob-brand">
              <div className="logo-icon">🍽️</div>
              <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:800, fontSize:18 }}>MealMind</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8, flex:1, margin:"0 14px" }}>
              <div className="step-bar"><div className="step-fill" style={{ width:`${pct}%` }} /></div>
              <span style={{ fontSize:11, color:"var(--muted)", fontWeight:700, whiteSpace:"nowrap" }}>{obStep+1}/{steps.length}</span>
            </div>
            <button className="skip-btn" onClick={doGenerate}>Skip</button>
          </div>

          <div className="ob-title">{s.title}</div>
          <div className="ob-sub">{s.sub}</div>
          {s.content}

          <button className="primary-btn" onClick={() => isLast ? doGenerate() : setObStep(p => p + 1)}>
            {isLast ? "✨ Generate My Meal Plan!" : "Continue →"}
          </button>
          {obStep > 0 && <button className="back-btn" onClick={() => setObStep(p => p - 1)}>← Back</button>}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <style>{CSS}</style>
      {loading && <Loader />}
      {toast && <div className="toast">{toast}</div>}
      {selectedMeal && (
        <MealModal meal={selectedMeal} onClose={() => setSelectedMeal(null)}
          onSave={toggleSave} saved={savedMeals.some(m => m.id === selectedMeal.id)}
          servings={servings} />
      )}

      <div className="status-bar"><span>9:41</span><span>●●●</span></div>

      {/* ── HOME ── */}
      {navTab === "home" && (
        <div className="screen">
          <div className="header">
            <div className="logo">
              <div className="logo-icon">🍽️</div>
              <span className="logo-text">MealMind</span>
            </div>
            <div className="notif-btn">🔔</div>
          </div>

          <div className="hero">
            <div className="hero-greeting">Good morning, {familyMode ? "Super Mom! 👩‍👧‍👦" : "Chef! 👋"}</div>
            <div className="hero-title">Let's plan <em>delicious</em> meals this week</div>
          </div>

          <div className="stats-strip">
            <div className="stat-card"><div className="stat-val" style={{color:"var(--orange)"}}>21</div><div className="stat-lbl">Meals Planned</div></div>
            <div className="stat-card"><div className="stat-val" style={{color:"var(--green)"}}>{totalCal.toLocaleString()}</div><div className="stat-lbl">Today's Cal</div></div>
            <div className="stat-card"><div className="stat-val" style={{color:"var(--yellow)"}}>x{servings}</div><div className="stat-lbl">Servings</div></div>
          </div>

          <div className="sec-hd">
            <div className="sec-title">📅 This Week</div>
            <div className="sec-link" onClick={() => setNavTab("calendar")}>Full View →</div>
          </div>

          <div className="day-tabs">
            {DAYS.map(d => (
              <button key={d} className={`day-tab ${activeDay === d ? "active" : ""}`}
                onClick={() => setActiveDay(d)}>{d}</button>
            ))}
          </div>

          {mealPlan && (
            <div className="meal-cards-wrap">
              {MEAL_TYPES.map(type => {
                const meal = mealPlan[activeDay][type];
                const col = MEAL_TYPE_COLORS[type];
                const bg = MEAL_TYPE_BG[type];
                const isSaved = savedMeals.some(m => m.id === meal.id);
                return (
                  <div key={type} className="meal-card" onClick={() => setSelectedMeal(meal)}>
                    <div className="meal-card-top">
                      <div className="meal-emoji-box" style={{ background: bg }}>
                        {meal.emoji}
                      </div>
                      <div className="meal-body">
                        <div style={{ marginBottom: 5 }}>
                          <span className="meal-type-badge" style={{ background: bg, color: col }}>
                            {type === "breakfast" ? "☀️" : type === "lunch" ? "🌤" : "🌙"} {type}
                          </span>
                        </div>
                        <div className="meal-name">{meal.name}</div>
                        <div className="meal-metas">
                          <span className="meal-meta">⏱ <strong>{meal.time}m</strong></span>
                          <span className="meal-meta">🔥 <strong>{meal.cal} cal</strong></span>
                          <span className="meal-meta">👥 <strong>x{servings}</strong></span>
                        </div>
                      </div>
                    </div>
                    {meal.tags.length > 0 && (
                      <div className="diet-tags">
                        {meal.tags.map(t => <span key={t} className="diet-tag">✓ {t}</span>)}
                      </div>
                    )}
                    <div className="meal-card-actions" onClick={e => e.stopPropagation()}>
                      <button className="meal-action-btn btn-watch"
                        onClick={() => window.open(getYouTubeLink(meal.name), "_blank")}>
                        ▶ Watch How to Cook
                      </button>
                      <button className="meal-action-btn btn-swap"
                        onClick={() => swapMeal(type, activeDay)}>
                        🔄 Swap
                      </button>
                      <button className="meal-action-btn btn-save"
                        onClick={() => toggleSave(meal)}>
                        {isSaved ? "❤️" : "🤍"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <button className="surprise-btn" onClick={() => {
            setLoading(true);
            setTimeout(() => {
              const plan = generatePlan(cuisines, diets);
              setMealPlan(plan); setGrocery(buildGroceryList(plan));
              setLoading(false); showToast("New plan generated! 🎉");
            }, 1500);
          }}>
            🎲 Surprise Me! Regenerate Whole Plan
          </button>
        </div>
      )}

      {/* ── CALENDAR ── */}
      {navTab === "calendar" && (
        <div className="screen">
          <div className="header">
            <div className="sec-title" style={{fontSize:21}}>📅 Weekly Calendar</div>
            <button style={{background:"none",border:"none",color:"var(--orange)",fontFamily:"'Nunito',sans-serif",fontWeight:800,fontSize:13,cursor:"pointer"}}
              onClick={() => { setLoading(true); setTimeout(() => { const p=generatePlan(cuisines,diets); setMealPlan(p); setGrocery(buildGroceryList(p)); setLoading(false); showToast("Plan regenerated! 🎉"); }, 1500); }}>
              🔄 Regenerate
            </button>
          </div>
          <div className="cal-wrap">
            <div className="cal-grid">
              {DAYS.map((d, i) => (
                <div key={d} className="cal-col">
                  <div className="cal-lbl">{d}</div>
                  <div className={`cal-num ${calDay === i ? "sel" : ""} ${i === 0 ? "tod" : ""}`}
                    onClick={() => { setCalDay(i); setActiveDay(d); }}>
                    {7+i}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontWeight:800, fontSize:16, marginBottom:13, fontFamily:"'Playfair Display',serif" }}>
              {FULL_DAYS[calDay]}, April {7+calDay}
            </div>
            {mealPlan && MEAL_TYPES.map(type => {
              const meal = mealPlan[DAYS[calDay]][type];
              return (
                <div key={type} className="day-meal-row" onClick={() => setSelectedMeal(meal)}>
                  <div className="dmr-emoji">{meal.emoji}</div>
                  <div className="dmr-info">
                    <div className="dmr-type">{type}</div>
                    <div className="dmr-name">{meal.name}</div>
                  </div>
                  <button className="dmr-watch"
                    onClick={e => { e.stopPropagation(); window.open(getYouTubeLink(meal.name), "_blank"); }}>
                    ▶ Watch
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── GROCERY ── */}
      {navTab === "grocery" && (
        <div className="screen">
          <div className="grocery-header">
            <div className="grocery-title">🛒 Grocery List</div>
            <div className="grocery-sub">{totalItems} ingredients · {checkedCount} checked off · est. ${Math.round(budget*0.8)}</div>
          </div>

          <button className="delivery-btn" onClick={() => showToast("Opening grocery delivery... 🚚")}>
            🚚 Order via Grocery Delivery
          </button>

          <div className="grocery-tabs">
            <button className={`gtab ${groceryTab === "all" ? "active" : ""}`} onClick={() => setGroceryTab("all")}>All Meals</button>
            {Object.entries(grocery).map(([name]) => (
              <button key={name} className={`gtab ${groceryTab === name ? "active" : ""}`} onClick={() => setGroceryTab(name)}>
                {name.split(" ").slice(0,2).join(" ")}
              </button>
            ))}
          </div>

          <div className="grocery-meal-section">
            {Object.entries(grocery)
              .filter(([name]) => groceryTab === "all" || groceryTab === name)
              .map(([mealName, info]) => (
                <div key={mealName}>
                  <div className="meal-section-hd">
                    <div className="meal-section-emoji">
                      {info.type === "breakfast" ? "☀️" : info.type === "lunch" ? "🌤" : "🌙"}
                    </div>
                    <div>
                      <div className="meal-section-name">{mealName}</div>
                      <div className="meal-section-day">{info.type} · {info.day} · {servings} servings</div>
                    </div>
                  </div>
                  {info.items.map(item => {
                    const key = `${mealName}__${item}`;
                    return (
                      <div key={key} className="grocery-item" onClick={() => setCheckedItems(p => ({...p,[key]:!p[key]}))}>
                        <div className={`gcheck ${checkedItems[key] ? "chk" : ""}`}>
                          {checkedItems[key] && <span style={{fontSize:11,color:"white"}}>✓</span>}
                        </div>
                        <span className={`gitem-name ${checkedItems[key] ? "chk" : ""}`}>{item}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* ── PROFILE ── */}
      {navTab === "profile" && (
        <div className="screen">
          <div className="profile-hero">
            <div className="profile-av">👩‍🍳</div>
            <div className="profile-name">My Kitchen</div>
            <div className="profile-sub">7-day streak 🔥 · {savedMeals.length} saved meals · {servings} servings</div>
          </div>
          {[
            {icon:"🥗",label:"Dietary Preferences",val:diets.length ? diets.join(", ") : "No restrictions"},
            {icon:"🌍",label:"Favorite Cuisines",val:cuisines.length ? cuisines.join(", ") : "All cuisines"},
            {icon:"👨‍👩‍👧",label:"Family Size",val:`${servings} ${servings===1?"person":"people"}${familyMode?" · Family Mode ON":""}`},
            {icon:"⏱️",label:"Max Cook Time",val:`${timeLimit} minutes per meal`},
            {icon:"💰",label:"Weekly Budget",val:`$${budget}/week`},
            {icon:"❤️",label:"Saved Meals",val:`${savedMeals.length} meals saved`},
            {icon:"🔔",label:"Meal Prep Reminders",val:"8:00 AM daily"},
            {icon:"📊",label:"Nutrition Goals",val:`~${Math.round(totalCal || 2000)} cal/day`},
          ].map(r => (
            <div key={r.label} className="pref-row">
              <div className="pref-icon">{r.icon}</div>
              <div className="pref-txt"><div className="pref-lbl">{r.label}</div><div className="pref-val">{r.val}</div></div>
              <div className="pref-arrow">›</div>
            </div>
          ))}
          <div style={{padding:"0 20px",marginTop:16}}>
            <button className="primary-btn" onClick={() => { setNavTab("onboard"); setObStep(0); }}>
              ✏️ Update My Preferences
            </button>
          </div>
        </div>
      )}

      <div className="bottom-nav">
        {[
          {id:"home",icon:"🏠",label:"Home"},
          {id:"calendar",icon:"📅",label:"Plan"},
          {id:"grocery",icon:"🛒",label:"Grocery"},
          {id:"profile",icon:"👩‍🍳",label:"Profile"},
        ].map(t => (
          <div key={t.id} className={`nav-item ${navTab===t.id?"active":""}`} onClick={()=>setNavTab(t.id)}>
            <span className="nav-icon">{t.icon}</span>
            <span className="nav-label">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MEAL DETAIL MODAL ────────────────────────────────────────────────────────
function MealModal({ meal, onClose, onSave, saved, servings }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={e => e.stopPropagation()}>
        <div className="modal-handle" />
        <div className="modal-emoji-header">{meal.emoji}</div>
        <div className="modal-meal-name">{meal.name}</div>
        <div className="modal-tags">
          {meal.tags.map(t => <span key={t} className="modal-tag">{t}</span>)}
          <span className="modal-tag" style={{background:"rgba(52,152,219,0.1)",color:"#3498DB"}}>{meal.cuisine}</span>
        </div>
        <div className="modal-stats">
          <div className="mstat"><div className="mstat-val">{meal.time}m</div><div className="mstat-lbl">Cook Time</div></div>
          <div className="mstat"><div className="mstat-val">{meal.cal}</div><div className="mstat-lbl">Calories</div></div>
          <div className="mstat"><div className="mstat-val">x{servings}</div><div className="mstat-lbl">Servings</div></div>
          <div className="mstat"><div className="mstat-val">{meal.proteins?.length || 1}</div><div className="mstat-lbl">Proteins</div></div>
        </div>

        <div className="modal-section-title">🛒 Ingredients (for {servings} servings)</div>
        {meal.grocery.map((item, i) => (
          <div key={i} className="ingredient-item">
            <div className="ingredient-dot" />
            <div className="ingredient-text">{item}</div>
          </div>
        ))}

        <button className="watch-full-btn" onClick={() => window.open(getYouTubeLink(meal.name), "_blank")}>
          ▶ Watch How to Make {meal.name} on YouTube
        </button>
        <button className="watch-full-btn" style={{background:"var(--orange)",marginTop:8}}
          onClick={() => { onSave(meal); }}>
          {saved ? "❤️ Saved to Favorites" : "🤍 Save to Favorites"}
        </button>
        <button className="close-modal-btn" onClick={onClose}>← Back to Meals</button>
      </div>
    </div>
  );
}

function Loader() {
  const [msg, setMsg] = useState("Picking your meals...");
  const msgs = ["Picking your meals...","Matching your cuisines...","Building grocery list...","Almost ready! 🎉"];
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => { i = (i+1)%msgs.length; setMsg(msgs[i]); }, 600);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="gen-overlay">
      <div style={{fontSize:52}}>🍽️</div>
      <div className="gen-spinner" />
      <div className="gen-txt">{msg}</div>
      <div className="gen-sub">Personalizing your family's<br />perfect weekly meal plan</div>
    </div>
  );
}
