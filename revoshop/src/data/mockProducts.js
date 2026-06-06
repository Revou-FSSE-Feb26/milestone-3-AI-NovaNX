import { mockCategories } from "./mockCategories";

function categoryBySlug(slug) {
  return mockCategories.find((category) => category.slug === slug);
}

export const mockProducts = [
{
  "id": 1001,
  "title": "Essence Mascara Lash Princess",
  "name": "Essence Mascara Lash Princess",
  "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  "price": 9.99,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"],

  "brand": "Essence",
  "sourceUrl": "https://dummyjson.com/products/1"
},
{
  "id": 1002,
  "title": "Eyeshadow Palette with Mirror",
  "name": "Eyeshadow Palette with Mirror",
  "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
  "price": 19.99,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"],

  "brand": "Glamour Beauty",
  "sourceUrl": "https://dummyjson.com/products/2"
},
{
  "id": 1003,
  "title": "Powder Canister",
  "name": "Powder Canister",
  "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
  "price": 14.99,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"],

  "brand": "Velvet Touch",
  "sourceUrl": "https://dummyjson.com/products/3"
},
{
  "id": 1004,
  "title": "Red Lipstick",
  "name": "Red Lipstick",
  "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
  "price": 12.99,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"],

  "brand": "Chic Cosmetics",
  "sourceUrl": "https://dummyjson.com/products/4"
},
{
  "id": 1005,
  "title": "Red Nail Polish",
  "name": "Red Nail Polish",
  "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
  "price": 8.99,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"],

  "brand": "Nail Couture",
  "sourceUrl": "https://dummyjson.com/products/5"
},
{
  "id": 1006,
  "title": "Calvin Klein CK One",
  "name": "Calvin Klein CK One",
  "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
  "price": 49.99,
  "category": categoryBySlug("fragrances"),
  "image": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"],

  "brand": "Calvin Klein",
  "sourceUrl": "https://dummyjson.com/products/6"
},
{
  "id": 1007,
  "title": "Chanel Coco Noir Eau De",
  "name": "Chanel Coco Noir Eau De",
  "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
  "price": 129.99,
  "category": categoryBySlug("fragrances"),
  "image": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"],

  "brand": "Chanel",
  "sourceUrl": "https://dummyjson.com/products/7"
},
{
  "id": 1008,
  "title": "Dior J'adore",
  "name": "Dior J'adore",
  "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
  "price": 89.99,
  "category": categoryBySlug("fragrances"),
  "image": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"],

  "brand": "Dior",
  "sourceUrl": "https://dummyjson.com/products/8"
},
{
  "id": 1009,
  "title": "Dolce Shine Eau de",
  "name": "Dolce Shine Eau de",
  "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
  "price": 69.99,
  "category": categoryBySlug("fragrances"),
  "image": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"],

  "brand": "Dolce & Gabbana",
  "sourceUrl": "https://dummyjson.com/products/9"
},
{
  "id": 1010,
  "title": "Gucci Bloom Eau de",
  "name": "Gucci Bloom Eau de",
  "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
  "price": 79.99,
  "category": categoryBySlug("fragrances"),
  "image": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"],

  "brand": "Gucci",
  "sourceUrl": "https://dummyjson.com/products/10"
},
{
  "id": 1011,
  "title": "Annibale Colombo Bed",
  "name": "Annibale Colombo Bed",
  "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
  "price": 1899.99,
  "category": categoryBySlug("furniture"),
  "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"],

  "brand": "Annibale Colombo",
  "sourceUrl": "https://dummyjson.com/products/11"
},
{
  "id": 1012,
  "title": "Annibale Colombo Sofa",
  "name": "Annibale Colombo Sofa",
  "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
  "price": 2499.99,
  "category": categoryBySlug("furniture"),
  "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
  "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"],

  "brand": "Annibale Colombo",
  "sourceUrl": "https://dummyjson.com/products/12"
},
{
  "id": 1013,
  "title": "Bedside Table African Cherry",
  "name": "Bedside Table African Cherry",
  "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
  "price": 299.99,
  "category": categoryBySlug("furniture"),
  "image": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
  "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp",
  "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"],

  "brand": "Furniture Co.",
  "sourceUrl": "https://dummyjson.com/products/13"
},
{
  "id": 1014,
  "title": "Knoll Saarinen Executive Conference Chair",
  "name": "Knoll Saarinen Executive Conference Chair",
  "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
  "price": 499.99,
  "category": categoryBySlug("furniture"),
  "image": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
  "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp",
  "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"],

  "brand": "Knoll",
  "sourceUrl": "https://dummyjson.com/products/14"
},
{
  "id": 1015,
  "title": "Wooden Bathroom Sink With Mirror",
  "name": "Wooden Bathroom Sink With Mirror",
  "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
  "price": 799.99,
  "category": categoryBySlug("furniture"),
  "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
  "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
  "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"],

  "brand": "Bath Trends",
  "sourceUrl": "https://dummyjson.com/products/15"
},
{
  "id": 1016,
  "title": "Apple",
  "name": "Apple",
  "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
  "price": 1.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/16"
},
{
  "id": 1017,
  "title": "Beef Steak",
  "name": "Beef Steak",
  "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
  "price": 12.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/17"
},
{
  "id": 1018,
  "title": "Cat Food",
  "name": "Cat Food",
  "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
  "price": 8.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/18"
},
{
  "id": 1019,
  "title": "Chicken Meat",
  "name": "Chicken Meat",
  "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
  "price": 9.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
  "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/19"
},
{
  "id": 1020,
  "title": "Cooking Oil",
  "name": "Cooking Oil",
  "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
  "price": 4.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/20"
},
{
  "id": 1021,
  "title": "Cucumber",
  "name": "Cucumber",
  "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
  "price": 1.49,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/21"
},
{
  "id": 1022,
  "title": "Dog Food",
  "name": "Dog Food",
  "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
  "price": 10.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/22"
},
{
  "id": 1023,
  "title": "Eggs",
  "name": "Eggs",
  "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
  "price": 2.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/23"
},
{
  "id": 1024,
  "title": "Fish Steak",
  "name": "Fish Steak",
  "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
  "price": 14.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/24"
},
{
  "id": 1025,
  "title": "Green Bell Pepper",
  "name": "Green Bell Pepper",
  "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
  "price": 1.29,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/25"
},
{
  "id": 1026,
  "title": "Green Chili Pepper",
  "name": "Green Chili Pepper",
  "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
  "price": 0.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/26"
},
{
  "id": 1027,
  "title": "Honey Jar",
  "name": "Honey Jar",
  "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
  "price": 6.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/27"
},
{
  "id": 1028,
  "title": "Ice Cream",
  "name": "Ice Cream",
  "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
  "price": 5.49,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
  "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
  "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
  "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/28"
},
{
  "id": 1029,
  "title": "Juice",
  "name": "Juice",
  "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
  "price": 3.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/29"
},
{
  "id": 1030,
  "title": "Kiwi",
  "name": "Kiwi",
  "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
  "price": 2.49,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/30"
},
{
  "id": 1031,
  "title": "Lemon",
  "name": "Lemon",
  "description": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
  "price": 0.79,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/lemon/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/31"
},
{
  "id": 1032,
  "title": "Milk",
  "name": "Milk",
  "description": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
  "price": 3.49,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/milk/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/32"
},
{
  "id": 1033,
  "title": "Mulberry",
  "name": "Mulberry",
  "description": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
  "price": 4.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/mulberry/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/33"
},
{
  "id": 1034,
  "title": "Nescafe Coffee",
  "name": "Nescafe Coffee",
  "description": "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
  "price": 7.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/34"
},
{
  "id": 1035,
  "title": "Potatoes",
  "name": "Potatoes",
  "description": "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
  "price": 2.29,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/potatoes/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/35"
},
{
  "id": 1036,
  "title": "Protein Powder",
  "name": "Protein Powder",
  "description": "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
  "price": 19.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/protein-powder/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/36"
},
{
  "id": 1037,
  "title": "Red Onions",
  "name": "Red Onions",
  "description": "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
  "price": 1.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/red-onions/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/37"
},
{
  "id": 1038,
  "title": "Rice",
  "name": "Rice",
  "description": "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
  "price": 5.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/rice/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/38"
},
{
  "id": 1039,
  "title": "Soft Drinks",
  "name": "Soft Drinks",
  "description": "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
  "price": 1.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/39"
},
{
  "id": 1040,
  "title": "Strawberry",
  "name": "Strawberry",
  "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
  "price": 3.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/strawberry/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/40"
},
{
  "id": 1041,
  "title": "Tissue Paper Box",
  "name": "Tissue Paper Box",
  "description": "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
  "price": 2.49,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/1.webp",
  "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/2.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/41"
},
{
  "id": 1042,
  "title": "Water",
  "name": "Water",
  "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
  "price": 0.99,
  "category": categoryBySlug("groceries"),
  "image": "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/groceries/water/1.webp"],

  "brand": "Groceries",
  "sourceUrl": "https://dummyjson.com/products/42"
},
{
  "id": 1043,
  "title": "Decoration Swing",
  "name": "Decoration Swing",
  "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
  "price": 59.99,
  "category": categoryBySlug("home-decoration"),
  "image": "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp",
  "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/2.webp",
  "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/3.webp"],

  "brand": "Home Decoration",
  "sourceUrl": "https://dummyjson.com/products/43"
},
{
  "id": 1044,
  "title": "Family Tree Photo Frame",
  "name": "Family Tree Photo Frame",
  "description": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
  "price": 29.99,
  "category": categoryBySlug("home-decoration"),
  "image": "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp"],

  "brand": "Home Decoration",
  "sourceUrl": "https://dummyjson.com/products/44"
},
{
  "id": 1045,
  "title": "House Showpiece Plant",
  "name": "House Showpiece Plant",
  "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
  "price": 39.99,
  "category": categoryBySlug("home-decoration"),
  "image": "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/1.webp",
  "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/2.webp",
  "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/3.webp"],

  "brand": "Home Decoration",
  "sourceUrl": "https://dummyjson.com/products/45"
},
{
  "id": 1046,
  "title": "Plant Pot",
  "name": "Plant Pot",
  "description": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
  "price": 14.99,
  "category": categoryBySlug("home-decoration"),
  "image": "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp",
  "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/2.webp",
  "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/3.webp",
  "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/4.webp"],

  "brand": "Home Decoration",
  "sourceUrl": "https://dummyjson.com/products/46"
},
{
  "id": 1047,
  "title": "Table Lamp",
  "name": "Table Lamp",
  "description": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
  "price": 49.99,
  "category": categoryBySlug("home-decoration"),
  "image": "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp"],

  "brand": "Home Decoration",
  "sourceUrl": "https://dummyjson.com/products/47"
},
{
  "id": 1048,
  "title": "Bamboo Spatula",
  "name": "Bamboo Spatula",
  "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
  "price": 7.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/48"
},
{
  "id": 1049,
  "title": "Black Aluminium Cup",
  "name": "Black Aluminium Cup",
  "description": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
  "price": 5.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/1.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/2.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/49"
},
{
  "id": 1050,
  "title": "Black Whisk",
  "name": "Black Whisk",
  "description": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
  "price": 9.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/50"
},
{
  "id": 1051,
  "title": "Boxed Blender",
  "name": "Boxed Blender",
  "description": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
  "price": 39.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/1.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/2.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/3.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/4.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/51"
},
{
  "id": 1052,
  "title": "Carbon Steel Wok",
  "name": "Carbon Steel Wok",
  "description": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
  "price": 29.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/52"
},
{
  "id": 1053,
  "title": "Chopping Board",
  "name": "Chopping Board",
  "description": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
  "price": 12.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/53"
},
{
  "id": 1054,
  "title": "Citrus Squeezer Yellow",
  "name": "Citrus Squeezer Yellow",
  "description": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
  "price": 8.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/54"
},
{
  "id": 1055,
  "title": "Egg Slicer",
  "name": "Egg Slicer",
  "description": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
  "price": 6.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/55"
},
{
  "id": 1056,
  "title": "Electric Stove",
  "name": "Electric Stove",
  "description": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
  "price": 49.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/1.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/2.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/3.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/4.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/56"
},
{
  "id": 1057,
  "title": "Fine Mesh Strainer",
  "name": "Fine Mesh Strainer",
  "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
  "price": 9.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/57"
},
{
  "id": 1058,
  "title": "Fork",
  "name": "Fork",
  "description": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
  "price": 3.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/58"
},
{
  "id": 1059,
  "title": "Glass",
  "name": "Glass",
  "description": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
  "price": 4.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/59"
},
{
  "id": 1060,
  "title": "Grater Black",
  "name": "Grater Black",
  "description": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
  "price": 10.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/60"
},
{
  "id": 1061,
  "title": "Hand Blender",
  "name": "Hand Blender",
  "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
  "price": 34.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/61"
},
{
  "id": 1062,
  "title": "Ice Cube Tray",
  "name": "Ice Cube Tray",
  "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
  "price": 5.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/62"
},
{
  "id": 1063,
  "title": "Kitchen Sieve",
  "name": "Kitchen Sieve",
  "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
  "price": 7.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/63"
},
{
  "id": 1064,
  "title": "Knife",
  "name": "Knife",
  "description": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
  "price": 14.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/64"
},
{
  "id": 1065,
  "title": "Lunch Box",
  "name": "Lunch Box",
  "description": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
  "price": 12.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/65"
},
{
  "id": 1066,
  "title": "Microwave Oven",
  "name": "Microwave Oven",
  "description": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
  "price": 89.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/1.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/2.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/3.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/4.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/66"
},
{
  "id": 1067,
  "title": "Mug Tree Stand",
  "name": "Mug Tree Stand",
  "description": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
  "price": 15.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/1.webp",
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/2.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/67"
},
{
  "id": 1068,
  "title": "Pan",
  "name": "Pan",
  "description": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
  "price": 24.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/68"
},
{
  "id": 1069,
  "title": "Plate",
  "name": "Plate",
  "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
  "price": 3.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/69"
},
{
  "id": 1070,
  "title": "Red Tongs",
  "name": "Red Tongs",
  "description": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
  "price": 6.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/70"
},
{
  "id": 1071,
  "title": "Silver Pot With Glass Cap",
  "name": "Silver Pot With Glass Cap",
  "description": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
  "price": 39.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/71"
},
{
  "id": 1072,
  "title": "Slotted Turner",
  "name": "Slotted Turner",
  "description": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
  "price": 8.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/72"
},
{
  "id": 1073,
  "title": "Spice Rack",
  "name": "Spice Rack",
  "description": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
  "price": 19.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/73"
},
{
  "id": 1074,
  "title": "Spoon",
  "name": "Spoon",
  "description": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
  "price": 4.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/74"
},
{
  "id": 1075,
  "title": "Tray",
  "name": "Tray",
  "description": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
  "price": 16.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/75"
},
{
  "id": 1076,
  "title": "Wooden Rolling Pin",
  "name": "Wooden Rolling Pin",
  "description": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
  "price": 11.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/76"
},
{
  "id": 1077,
  "title": "Yellow Peeler",
  "name": "Yellow Peeler",
  "description": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
  "price": 5.99,
  "category": categoryBySlug("kitchen-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/1.webp"],

  "brand": "Kitchen Accessories",
  "sourceUrl": "https://dummyjson.com/products/77"
},
{
  "id": 1078,
  "title": "Apple MacBook Pro 14 Inch Space Grey",
  "name": "Apple MacBook Pro 14 Inch Space Grey",
  "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
  "price": 1999.99,
  "category": categoryBySlug("laptops"),
  "image": "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp",
  "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/2.webp",
  "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/3.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/78"
},
{
  "id": 1079,
  "title": "Asus Zenbook Pro Dual Screen Laptop",
  "name": "Asus Zenbook Pro Dual Screen Laptop",
  "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
  "price": 1799.99,
  "category": categoryBySlug("laptops"),
  "image": "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp",
  "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/2.webp",
  "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp"],

  "brand": "Asus",
  "sourceUrl": "https://dummyjson.com/products/79"
},
{
  "id": 1080,
  "title": "Huawei Matebook X Pro",
  "name": "Huawei Matebook X Pro",
  "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
  "price": 1399.99,
  "category": categoryBySlug("laptops"),
  "image": "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
  "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/2.webp",
  "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/3.webp"],

  "brand": "Huawei",
  "sourceUrl": "https://dummyjson.com/products/80"
},
{
  "id": 1081,
  "title": "Lenovo Yoga 920",
  "name": "Lenovo Yoga 920",
  "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
  "price": 1099.99,
  "category": categoryBySlug("laptops"),
  "image": "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/1.webp",
  "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/2.webp",
  "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/3.webp"],

  "brand": "Lenovo",
  "sourceUrl": "https://dummyjson.com/products/81"
},
{
  "id": 1082,
  "title": "New DELL XPS 13 9300 Laptop",
  "name": "New DELL XPS 13 9300 Laptop",
  "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
  "price": 1499.99,
  "category": categoryBySlug("laptops"),
  "image": "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp",
  "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp",
  "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp"],

  "brand": "Dell",
  "sourceUrl": "https://dummyjson.com/products/82"
},
{
  "id": 1083,
  "title": "Blue & Black Check Shirt",
  "name": "Blue & Black Check Shirt",
  "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
  "price": 29.99,
  "category": categoryBySlug("mens-shirts"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/4.webp"],

  "brand": "Fashion Trends",
  "sourceUrl": "https://dummyjson.com/products/83"
},
{
  "id": 1084,
  "title": "Gigabyte Aorus Men Tshirt",
  "name": "Gigabyte Aorus Men Tshirt",
  "description": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
  "price": 24.99,
  "category": categoryBySlug("mens-shirts"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/4.webp"],

  "brand": "Gigabyte",
  "sourceUrl": "https://dummyjson.com/products/84"
},
{
  "id": 1085,
  "title": "Man Plaid Shirt",
  "name": "Man Plaid Shirt",
  "description": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
  "price": 34.99,
  "category": categoryBySlug("mens-shirts"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/4.webp"],

  "brand": "Classic Wear",
  "sourceUrl": "https://dummyjson.com/products/85"
},
{
  "id": 1086,
  "title": "Man Short Sleeve Shirt",
  "name": "Man Short Sleeve Shirt",
  "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
  "price": 19.99,
  "category": categoryBySlug("mens-shirts"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/4.webp"],

  "brand": "Casual Comfort",
  "sourceUrl": "https://dummyjson.com/products/86"
},
{
  "id": 1087,
  "title": "Men Check Shirt",
  "name": "Men Check Shirt",
  "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
  "price": 27.99,
  "category": categoryBySlug("mens-shirts"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/4.webp"],

  "brand": "Urban Chic",
  "sourceUrl": "https://dummyjson.com/products/87"
},
{
  "id": 1088,
  "title": "Nike Air Jordan 1 Red And Black",
  "name": "Nike Air Jordan 1 Red And Black",
  "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
  "price": 149.99,
  "category": categoryBySlug("mens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/4.webp"],

  "brand": "Nike",
  "sourceUrl": "https://dummyjson.com/products/88"
},
{
  "id": 1089,
  "title": "Nike Baseball Cleats",
  "name": "Nike Baseball Cleats",
  "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
  "price": 79.99,
  "category": categoryBySlug("mens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/4.webp"],

  "brand": "Nike",
  "sourceUrl": "https://dummyjson.com/products/89"
},
{
  "id": 1090,
  "title": "Puma Future Rider Trainers",
  "name": "Puma Future Rider Trainers",
  "description": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
  "price": 89.99,
  "category": categoryBySlug("mens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/4.webp"],

  "brand": "Puma",
  "sourceUrl": "https://dummyjson.com/products/90"
},
{
  "id": 1091,
  "title": "Sports Sneakers Off White & Red",
  "name": "Sports Sneakers Off White & Red",
  "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
  "price": 119.99,
  "category": categoryBySlug("mens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/4.webp"],

  "brand": "Off White",
  "sourceUrl": "https://dummyjson.com/products/91"
},
{
  "id": 1092,
  "title": "Sports Sneakers Off White Red",
  "name": "Sports Sneakers Off White Red",
  "description": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
  "price": 109.99,
  "category": categoryBySlug("mens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/3.webp",
  "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/4.webp"],

  "brand": "Off White",
  "sourceUrl": "https://dummyjson.com/products/92"
},
{
  "id": 1093,
  "title": "Brown Leather Belt Watch",
  "name": "Brown Leather Belt Watch",
  "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
  "price": 89.99,
  "category": categoryBySlug("mens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/3.webp"],

  "brand": "Fashion Timepieces",
  "sourceUrl": "https://dummyjson.com/products/93"
},
{
  "id": 1094,
  "title": "Longines Master Collection",
  "name": "Longines Master Collection",
  "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
  "price": 1499.99,
  "category": categoryBySlug("mens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/3.webp"],

  "brand": "Longines",
  "sourceUrl": "https://dummyjson.com/products/94"
},
{
  "id": 1095,
  "title": "Rolex Cellini Date Black Dial",
  "name": "Rolex Cellini Date Black Dial",
  "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
  "price": 8999.99,
  "category": categoryBySlug("mens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/3.webp"],

  "brand": "Rolex",
  "sourceUrl": "https://dummyjson.com/products/95"
},
{
  "id": 1096,
  "title": "Rolex Cellini Moonphase",
  "name": "Rolex Cellini Moonphase",
  "description": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
  "price": 12999.99,
  "category": categoryBySlug("mens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/3.webp"],

  "brand": "Rolex",
  "sourceUrl": "https://dummyjson.com/products/96"
},
{
  "id": 1097,
  "title": "Rolex Datejust",
  "name": "Rolex Datejust",
  "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
  "price": 10999.99,
  "category": categoryBySlug("mens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/3.webp"],

  "brand": "Rolex",
  "sourceUrl": "https://dummyjson.com/products/97"
},
{
  "id": 1098,
  "title": "Rolex Submariner Watch",
  "name": "Rolex Submariner Watch",
  "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
  "price": 13999.99,
  "category": categoryBySlug("mens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/2.webp",
  "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/3.webp"],

  "brand": "Rolex",
  "sourceUrl": "https://dummyjson.com/products/98"
},
{
  "id": 1099,
  "title": "Amazon Echo Plus",
  "name": "Amazon Echo Plus",
  "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
  "price": 99.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/2.webp"],

  "brand": "Amazon",
  "sourceUrl": "https://dummyjson.com/products/99"
},
{
  "id": 1100,
  "title": "Apple Airpods",
  "name": "Apple Airpods",
  "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
  "price": 129.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/2.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/3.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/100"
},
{
  "id": 1101,
  "title": "Apple AirPods Max Silver",
  "name": "Apple AirPods Max Silver",
  "description": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
  "price": 549.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/101"
},
{
  "id": 1102,
  "title": "Apple Airpower Wireless Charger",
  "name": "Apple Airpower Wireless Charger",
  "description": "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
  "price": 79.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/1.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/102"
},
{
  "id": 1103,
  "title": "Apple HomePod Mini Cosmic Grey",
  "name": "Apple HomePod Mini Cosmic Grey",
  "description": "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
  "price": 99.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/1.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/103"
},
{
  "id": 1104,
  "title": "Apple iPhone Charger",
  "name": "Apple iPhone Charger",
  "description": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
  "price": 19.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/1.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/2.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/104"
},
{
  "id": 1105,
  "title": "Apple MagSafe Battery Pack",
  "name": "Apple MagSafe Battery Pack",
  "description": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
  "price": 99.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/2.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/105"
},
{
  "id": 1106,
  "title": "Apple Watch Series 4 Gold",
  "name": "Apple Watch Series 4 Gold",
  "description": "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
  "price": 349.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/2.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/3.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/106"
},
{
  "id": 1107,
  "title": "Beats Flex Wireless Earphones",
  "name": "Beats Flex Wireless Earphones",
  "description": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
  "price": 49.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp"],

  "brand": "Beats",
  "sourceUrl": "https://dummyjson.com/products/107"
},
{
  "id": 1108,
  "title": "iPhone 12 Silicone Case with MagSafe Plum",
  "name": "iPhone 12 Silicone Case with MagSafe Plum",
  "description": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
  "price": 29.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/1.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/2.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/3.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/4.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/108"
},
{
  "id": 1109,
  "title": "Monopod",
  "name": "Monopod",
  "description": "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
  "price": 19.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/1.webp",
  "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/2.webp"],

  "brand": "TechGear",
  "sourceUrl": "https://dummyjson.com/products/109"
},
{
  "id": 1110,
  "title": "Selfie Lamp with iPhone",
  "name": "Selfie Lamp with iPhone",
  "description": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
  "price": 14.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/1.webp"],

  "brand": "GadgetMaster",
  "sourceUrl": "https://dummyjson.com/products/110"
},
{
  "id": 1111,
  "title": "Selfie Stick Monopod",
  "name": "Selfie Stick Monopod",
  "description": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
  "price": 12.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/1.webp"],

  "brand": "SnapTech",
  "sourceUrl": "https://dummyjson.com/products/111"
},
{
  "id": 1112,
  "title": "TV Studio Camera Pedestal",
  "name": "TV Studio Camera Pedestal",
  "description": "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
  "price": 499.99,
  "category": categoryBySlug("mobile-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/1.webp"],

  "brand": "ProVision",
  "sourceUrl": "https://dummyjson.com/products/112"
},
{
  "id": 1113,
  "title": "Generic Motorcycle",
  "name": "Generic Motorcycle",
  "description": "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
  "price": 3999.99,
  "category": categoryBySlug("motorcycle"),
  "image": "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/1.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/2.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/3.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/4.webp"],

  "brand": "Generic Motors",
  "sourceUrl": "https://dummyjson.com/products/113"
},
{
  "id": 1114,
  "title": "Kawasaki Z800",
  "name": "Kawasaki Z800",
  "description": "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
  "price": 8999.99,
  "category": categoryBySlug("motorcycle"),
  "image": "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/1.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/2.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/3.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/4.webp"],

  "brand": "Kawasaki",
  "sourceUrl": "https://dummyjson.com/products/114"
},
{
  "id": 1115,
  "title": "MotoGP CI.H1",
  "name": "MotoGP CI.H1",
  "description": "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
  "price": 14999.99,
  "category": categoryBySlug("motorcycle"),
  "image": "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/1.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/2.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/3.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/4.webp"],

  "brand": "MotoGP",
  "sourceUrl": "https://dummyjson.com/products/115"
},
{
  "id": 1116,
  "title": "Scooter Motorcycle",
  "name": "Scooter Motorcycle",
  "description": "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
  "price": 2999.99,
  "category": categoryBySlug("motorcycle"),
  "image": "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/1.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/2.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/3.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/4.webp"],

  "brand": "ScootMaster",
  "sourceUrl": "https://dummyjson.com/products/116"
},
{
  "id": 1117,
  "title": "Sportbike Motorcycle",
  "name": "Sportbike Motorcycle",
  "description": "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
  "price": 7499.99,
  "category": categoryBySlug("motorcycle"),
  "image": "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/1.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/2.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/3.webp",
  "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/4.webp"],

  "brand": "SpeedMaster",
  "sourceUrl": "https://dummyjson.com/products/117"
},
{
  "id": 1118,
  "title": "Attitude Super Leaves Hand Soap",
  "name": "Attitude Super Leaves Hand Soap",
  "description": "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
  "price": 8.99,
  "category": categoryBySlug("skin-care"),
  "image": "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp",
  "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/2.webp",
  "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/3.webp"],

  "brand": "Attitude",
  "sourceUrl": "https://dummyjson.com/products/118"
},
{
  "id": 1119,
  "title": "Olay Ultra Moisture Shea Butter Body Wash",
  "name": "Olay Ultra Moisture Shea Butter Body Wash",
  "description": "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
  "price": 12.99,
  "category": categoryBySlug("skin-care"),
  "image": "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/1.webp",
  "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/2.webp",
  "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/3.webp"],

  "brand": "Olay",
  "sourceUrl": "https://dummyjson.com/products/119"
},
{
  "id": 1120,
  "title": "Vaseline Men Body and Face Lotion",
  "name": "Vaseline Men Body and Face Lotion",
  "description": "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
  "price": 9.99,
  "category": categoryBySlug("skin-care"),
  "image": "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/1.webp",
  "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/2.webp",
  "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/3.webp"],

  "brand": "Vaseline",
  "sourceUrl": "https://dummyjson.com/products/120"
},
{
  "id": 1121,
  "title": "iPhone 5s",
  "name": "iPhone 5s",
  "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
  "price": 199.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/3.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/121"
},
{
  "id": 1122,
  "title": "iPhone 6",
  "name": "iPhone 6",
  "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
  "price": 299.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/3.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/122"
},
{
  "id": 1123,
  "title": "iPhone 13 Pro",
  "name": "iPhone 13 Pro",
  "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
  "price": 1099.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/3.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/123"
},
{
  "id": 1124,
  "title": "iPhone X",
  "name": "iPhone X",
  "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
  "price": 899.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/3.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/124"
},
{
  "id": 1125,
  "title": "Oppo A57",
  "name": "Oppo A57",
  "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
  "price": 249.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/3.webp"],

  "brand": "Oppo",
  "sourceUrl": "https://dummyjson.com/products/125"
},
{
  "id": 1126,
  "title": "Oppo F19 Pro Plus",
  "name": "Oppo F19 Pro Plus",
  "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
  "price": 399.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/3.webp"],

  "brand": "Oppo",
  "sourceUrl": "https://dummyjson.com/products/126"
},
{
  "id": 1127,
  "title": "Oppo K1",
  "name": "Oppo K1",
  "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
  "price": 299.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/3.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/4.webp"],

  "brand": "Oppo",
  "sourceUrl": "https://dummyjson.com/products/127"
},
{
  "id": 1128,
  "title": "Realme C35",
  "name": "Realme C35",
  "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
  "price": 149.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/3.webp"],

  "brand": "Realme",
  "sourceUrl": "https://dummyjson.com/products/128"
},
{
  "id": 1129,
  "title": "Realme X",
  "name": "Realme X",
  "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
  "price": 299.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/realme-x/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/realme-x/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/realme-x/3.webp"],

  "brand": "Realme",
  "sourceUrl": "https://dummyjson.com/products/129"
},
{
  "id": 1130,
  "title": "Realme XT",
  "name": "Realme XT",
  "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
  "price": 349.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/3.webp"],

  "brand": "Realme",
  "sourceUrl": "https://dummyjson.com/products/130"
},
{
  "id": 1131,
  "title": "Samsung Galaxy S7",
  "name": "Samsung Galaxy S7",
  "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
  "price": 299.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/3.webp"],

  "brand": "Samsung",
  "sourceUrl": "https://dummyjson.com/products/131"
},
{
  "id": 1132,
  "title": "Samsung Galaxy S8",
  "name": "Samsung Galaxy S8",
  "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
  "price": 499.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/3.webp"],

  "brand": "Samsung",
  "sourceUrl": "https://dummyjson.com/products/132"
},
{
  "id": 1133,
  "title": "Samsung Galaxy S10",
  "name": "Samsung Galaxy S10",
  "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
  "price": 699.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/3.webp"],

  "brand": "Samsung",
  "sourceUrl": "https://dummyjson.com/products/133"
},
{
  "id": 1134,
  "title": "Vivo S1",
  "name": "Vivo S1",
  "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
  "price": 249.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/3.webp"],

  "brand": "Vivo",
  "sourceUrl": "https://dummyjson.com/products/134"
},
{
  "id": 1135,
  "title": "Vivo V9",
  "name": "Vivo V9",
  "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
  "price": 299.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/3.webp"],

  "brand": "Vivo",
  "sourceUrl": "https://dummyjson.com/products/135"
},
{
  "id": 1136,
  "title": "Vivo X21",
  "name": "Vivo X21",
  "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
  "price": 499.99,
  "category": categoryBySlug("smartphones"),
  "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/3.webp"],

  "brand": "Vivo",
  "sourceUrl": "https://dummyjson.com/products/136"
},
{
  "id": 1137,
  "title": "American Football",
  "name": "American Football",
  "description": "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
  "price": 19.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/137"
},
{
  "id": 1138,
  "title": "Baseball Ball",
  "name": "Baseball Ball",
  "description": "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
  "price": 8.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/138"
},
{
  "id": 1139,
  "title": "Baseball Glove",
  "name": "Baseball Glove",
  "description": "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
  "price": 24.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/1.webp",
  "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/2.webp",
  "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/3.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/139"
},
{
  "id": 1140,
  "title": "Basketball",
  "name": "Basketball",
  "description": "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
  "price": 14.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/140"
},
{
  "id": 1141,
  "title": "Basketball Rim",
  "name": "Basketball Rim",
  "description": "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
  "price": 39.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/141"
},
{
  "id": 1142,
  "title": "Cricket Ball",
  "name": "Cricket Ball",
  "description": "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
  "price": 12.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/142"
},
{
  "id": 1143,
  "title": "Cricket Bat",
  "name": "Cricket Bat",
  "description": "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
  "price": 29.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/143"
},
{
  "id": 1144,
  "title": "Cricket Helmet",
  "name": "Cricket Helmet",
  "description": "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
  "price": 44.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/1.webp",
  "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/2.webp",
  "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/3.webp",
  "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/4.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/144"
},
{
  "id": 1145,
  "title": "Cricket Wicket",
  "name": "Cricket Wicket",
  "description": "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
  "price": 29.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/145"
},
{
  "id": 1146,
  "title": "Feather Shuttlecock",
  "name": "Feather Shuttlecock",
  "description": "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
  "price": 5.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/146"
},
{
  "id": 1147,
  "title": "Football",
  "name": "Football",
  "description": "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
  "price": 17.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/football/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/football/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/147"
},
{
  "id": 1148,
  "title": "Golf Ball",
  "name": "Golf Ball",
  "description": "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
  "price": 9.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/148"
},
{
  "id": 1149,
  "title": "Iron Golf",
  "name": "Iron Golf",
  "description": "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
  "price": 49.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/149"
},
{
  "id": 1150,
  "title": "Metal Baseball Bat",
  "name": "Metal Baseball Bat",
  "description": "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
  "price": 29.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/150"
},
{
  "id": 1151,
  "title": "Tennis Ball",
  "name": "Tennis Ball",
  "description": "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
  "price": 6.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/151"
},
{
  "id": 1152,
  "title": "Tennis Racket",
  "name": "Tennis Racket",
  "description": "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
  "price": 49.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/152"
},
{
  "id": 1153,
  "title": "Volleyball",
  "name": "Volleyball",
  "description": "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
  "price": 11.99,
  "category": categoryBySlug("sports-accessories"),
  "image": "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/1.webp"],

  "brand": "Sports Accessories",
  "sourceUrl": "https://dummyjson.com/products/153"
},
{
  "id": 1154,
  "title": "Black Sun Glasses",
  "name": "Black Sun Glasses",
  "description": "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
  "price": 29.99,
  "category": categoryBySlug("sunglasses"),
  "image": "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/2.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/3.webp"],

  "brand": "Fashion Shades",
  "sourceUrl": "https://dummyjson.com/products/154"
},
{
  "id": 1155,
  "title": "Classic Sun Glasses",
  "name": "Classic Sun Glasses",
  "description": "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
  "price": 24.99,
  "category": categoryBySlug("sunglasses"),
  "image": "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/1.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/2.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/3.webp"],

  "brand": "Fashion Shades",
  "sourceUrl": "https://dummyjson.com/products/155"
},
{
  "id": 1156,
  "title": "Green and Black Glasses",
  "name": "Green and Black Glasses",
  "description": "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
  "price": 34.99,
  "category": categoryBySlug("sunglasses"),
  "image": "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/1.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/2.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/3.webp"],

  "brand": "Fashion Shades",
  "sourceUrl": "https://dummyjson.com/products/156"
},
{
  "id": 1157,
  "title": "Party Glasses",
  "name": "Party Glasses",
  "description": "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
  "price": 19.99,
  "category": categoryBySlug("sunglasses"),
  "image": "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/1.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/2.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/3.webp"],

  "brand": "Fashion Fun",
  "sourceUrl": "https://dummyjson.com/products/157"
},
{
  "id": 1158,
  "title": "Sunglasses",
  "name": "Sunglasses",
  "description": "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
  "price": 22.99,
  "category": categoryBySlug("sunglasses"),
  "image": "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/1.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/2.webp",
  "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/3.webp"],

  "brand": "Fashion Shades",
  "sourceUrl": "https://dummyjson.com/products/158"
},
{
  "id": 1159,
  "title": "iPad Mini 2021 Starlight",
  "name": "iPad Mini 2021 Starlight",
  "description": "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
  "price": 499.99,
  "category": categoryBySlug("tablets"),
  "image": "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp",
  "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/2.webp",
  "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/3.webp",
  "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/4.webp"],

  "brand": "Apple",
  "sourceUrl": "https://dummyjson.com/products/159"
},
{
  "id": 1160,
  "title": "Samsung Galaxy Tab S8 Plus Grey",
  "name": "Samsung Galaxy Tab S8 Plus Grey",
  "description": "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
  "price": 599.99,
  "category": categoryBySlug("tablets"),
  "image": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp",
  "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/2.webp",
  "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/3.webp",
  "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/4.webp"],

  "brand": "Samsung",
  "sourceUrl": "https://dummyjson.com/products/160"
},
{
  "id": 1161,
  "title": "Samsung Galaxy Tab White",
  "name": "Samsung Galaxy Tab White",
  "description": "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
  "price": 349.99,
  "category": categoryBySlug("tablets"),
  "image": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/1.webp",
  "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/2.webp",
  "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/3.webp",
  "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/4.webp"],

  "brand": "Samsung",
  "sourceUrl": "https://dummyjson.com/products/161"
},
{
  "id": 1162,
  "title": "Blue Frock",
  "name": "Blue Frock",
  "description": "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
  "price": 29.99,
  "category": categoryBySlug("tops"),
  "image": "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/tops/blue-frock/1.webp",
  "https://cdn.dummyjson.com/product-images/tops/blue-frock/2.webp",
  "https://cdn.dummyjson.com/product-images/tops/blue-frock/3.webp",
  "https://cdn.dummyjson.com/product-images/tops/blue-frock/4.webp"],

  "brand": "Tops",
  "sourceUrl": "https://dummyjson.com/products/162"
},
{
  "id": 1163,
  "title": "Girl Summer Dress",
  "name": "Girl Summer Dress",
  "description": "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
  "price": 19.99,
  "category": categoryBySlug("tops"),
  "image": "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/1.webp",
  "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/2.webp",
  "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/3.webp",
  "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/4.webp"],

  "brand": "Tops",
  "sourceUrl": "https://dummyjson.com/products/163"
},
{
  "id": 1164,
  "title": "Gray Dress",
  "name": "Gray Dress",
  "description": "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
  "price": 34.99,
  "category": categoryBySlug("tops"),
  "image": "https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/tops/gray-dress/1.webp",
  "https://cdn.dummyjson.com/product-images/tops/gray-dress/2.webp",
  "https://cdn.dummyjson.com/product-images/tops/gray-dress/3.webp",
  "https://cdn.dummyjson.com/product-images/tops/gray-dress/4.webp"],

  "brand": "Tops",
  "sourceUrl": "https://dummyjson.com/products/164"
},
{
  "id": 1165,
  "title": "Short Frock",
  "name": "Short Frock",
  "description": "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
  "price": 24.99,
  "category": categoryBySlug("tops"),
  "image": "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/tops/short-frock/1.webp",
  "https://cdn.dummyjson.com/product-images/tops/short-frock/2.webp",
  "https://cdn.dummyjson.com/product-images/tops/short-frock/3.webp",
  "https://cdn.dummyjson.com/product-images/tops/short-frock/4.webp"],

  "brand": "Tops",
  "sourceUrl": "https://dummyjson.com/products/165"
},
{
  "id": 1166,
  "title": "Tartan Dress",
  "name": "Tartan Dress",
  "description": "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
  "price": 39.99,
  "category": categoryBySlug("tops"),
  "image": "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/tops/tartan-dress/1.webp",
  "https://cdn.dummyjson.com/product-images/tops/tartan-dress/2.webp",
  "https://cdn.dummyjson.com/product-images/tops/tartan-dress/3.webp",
  "https://cdn.dummyjson.com/product-images/tops/tartan-dress/4.webp"],

  "brand": "Tops",
  "sourceUrl": "https://dummyjson.com/products/166"
},
{
  "id": 1167,
  "title": "300 Touring",
  "name": "300 Touring",
  "description": "The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.",
  "price": 28999.99,
  "category": categoryBySlug("vehicle"),
  "image": "https://cdn.dummyjson.com/product-images/vehicle/300-touring/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/vehicle/300-touring/1.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/300-touring/2.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/300-touring/3.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/300-touring/4.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/300-touring/5.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/300-touring/6.webp"],

  "brand": "Chrysler",
  "sourceUrl": "https://dummyjson.com/products/167"
},
{
  "id": 1168,
  "title": "Charger SXT RWD",
  "name": "Charger SXT RWD",
  "description": "The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.",
  "price": 32999.99,
  "category": categoryBySlug("vehicle"),
  "image": "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/1.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/2.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/3.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/4.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/5.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/6.webp"],

  "brand": "Dodge",
  "sourceUrl": "https://dummyjson.com/products/168"
},
{
  "id": 1169,
  "title": "Dodge Hornet GT Plus",
  "name": "Dodge Hornet GT Plus",
  "description": "The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.",
  "price": 24999.99,
  "category": categoryBySlug("vehicle"),
  "image": "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/1.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/2.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/3.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/4.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/5.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/6.webp"],

  "brand": "Dodge",
  "sourceUrl": "https://dummyjson.com/products/169"
},
{
  "id": 1170,
  "title": "Durango SXT RWD",
  "name": "Durango SXT RWD",
  "description": "The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.",
  "price": 36999.99,
  "category": categoryBySlug("vehicle"),
  "image": "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/1.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/2.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/3.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/4.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/5.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/6.webp"],

  "brand": "Dodge",
  "sourceUrl": "https://dummyjson.com/products/170"
},
{
  "id": 1171,
  "title": "Pacifica Touring",
  "name": "Pacifica Touring",
  "description": "The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
  "price": 31999.99,
  "category": categoryBySlug("vehicle"),
  "image": "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/1.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/2.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/3.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/4.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/5.webp",
  "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/6.webp"],

  "brand": "Chrysler",
  "sourceUrl": "https://dummyjson.com/products/171"
},
{
  "id": 1172,
  "title": "Blue Women's Handbag",
  "name": "Blue Women's Handbag",
  "description": "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
  "price": 49.99,
  "category": categoryBySlug("womens-bags"),
  "image": "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/3.webp"],

  "brand": "Fashionista",
  "sourceUrl": "https://dummyjson.com/products/172"
},
{
  "id": 1173,
  "title": "Heshe Women's Leather Bag",
  "name": "Heshe Women's Leather Bag",
  "description": "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
  "price": 129.99,
  "category": categoryBySlug("womens-bags"),
  "image": "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/3.webp"],

  "brand": "Heshe",
  "sourceUrl": "https://dummyjson.com/products/173"
},
{
  "id": 1174,
  "title": "Prada Women Bag",
  "name": "Prada Women Bag",
  "description": "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
  "price": 599.99,
  "category": categoryBySlug("womens-bags"),
  "image": "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/3.webp"],

  "brand": "Prada",
  "sourceUrl": "https://dummyjson.com/products/174"
},
{
  "id": 1175,
  "title": "White Faux Leather Backpack",
  "name": "White Faux Leather Backpack",
  "description": "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
  "price": 39.99,
  "category": categoryBySlug("womens-bags"),
  "image": "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/3.webp"],

  "brand": "Urban Chic",
  "sourceUrl": "https://dummyjson.com/products/175"
},
{
  "id": 1176,
  "title": "Women Handbag Black",
  "name": "Women Handbag Black",
  "description": "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
  "price": 59.99,
  "category": categoryBySlug("womens-bags"),
  "image": "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/3.webp"],

  "brand": "Elegance Collection",
  "sourceUrl": "https://dummyjson.com/products/176"
},
{
  "id": 1177,
  "title": "Black Women's Gown",
  "name": "Black Women's Gown",
  "description": "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
  "price": 129.99,
  "category": categoryBySlug("womens-dresses"),
  "image": "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/4.webp"],

  "brand": "Womens Dresses",
  "sourceUrl": "https://dummyjson.com/products/177"
},
{
  "id": 1178,
  "title": "Corset Leather With Skirt",
  "name": "Corset Leather With Skirt",
  "description": "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
  "price": 89.99,
  "category": categoryBySlug("womens-dresses"),
  "image": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/4.webp"],

  "brand": "Womens Dresses",
  "sourceUrl": "https://dummyjson.com/products/178"
},
{
  "id": 1179,
  "title": "Corset With Black Skirt",
  "name": "Corset With Black Skirt",
  "description": "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
  "price": 79.99,
  "category": categoryBySlug("womens-dresses"),
  "image": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/4.webp"],

  "brand": "Womens Dresses",
  "sourceUrl": "https://dummyjson.com/products/179"
},
{
  "id": 1180,
  "title": "Dress Pea",
  "name": "Dress Pea",
  "description": "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
  "price": 49.99,
  "category": categoryBySlug("womens-dresses"),
  "image": "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/4.webp"],

  "brand": "Womens Dresses",
  "sourceUrl": "https://dummyjson.com/products/180"
},
{
  "id": 1181,
  "title": "Marni Red & Black Suit",
  "name": "Marni Red & Black Suit",
  "description": "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
  "price": 179.99,
  "category": categoryBySlug("womens-dresses"),
  "image": "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/4.webp"],

  "brand": "Womens Dresses",
  "sourceUrl": "https://dummyjson.com/products/181"
},
{
  "id": 1182,
  "title": "Green Crystal Earring",
  "name": "Green Crystal Earring",
  "description": "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
  "price": 29.99,
  "category": categoryBySlug("womens-jewellery"),
  "image": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/3.webp"],

  "brand": "Womens Jewellery",
  "sourceUrl": "https://dummyjson.com/products/182"
},
{
  "id": 1183,
  "title": "Green Oval Earring",
  "name": "Green Oval Earring",
  "description": "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
  "price": 24.99,
  "category": categoryBySlug("womens-jewellery"),
  "image": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/3.webp"],

  "brand": "Womens Jewellery",
  "sourceUrl": "https://dummyjson.com/products/183"
},
{
  "id": 1184,
  "title": "Tropical Earring",
  "name": "Tropical Earring",
  "description": "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
  "price": 19.99,
  "category": categoryBySlug("womens-jewellery"),
  "image": "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/3.webp"],

  "brand": "Womens Jewellery",
  "sourceUrl": "https://dummyjson.com/products/184"
},
{
  "id": 1185,
  "title": "Black & Brown Slipper",
  "name": "Black & Brown Slipper",
  "description": "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
  "price": 19.99,
  "category": categoryBySlug("womens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/4.webp"],

  "brand": "Comfort Trends",
  "sourceUrl": "https://dummyjson.com/products/185"
},
{
  "id": 1186,
  "title": "Calvin Klein Heel Shoes",
  "name": "Calvin Klein Heel Shoes",
  "description": "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
  "price": 79.99,
  "category": categoryBySlug("womens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/4.webp"],

  "brand": "Calvin Klein",
  "sourceUrl": "https://dummyjson.com/products/186"
},
{
  "id": 1187,
  "title": "Golden Shoes Woman",
  "name": "Golden Shoes Woman",
  "description": "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
  "price": 49.99,
  "category": categoryBySlug("womens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/4.webp"],

  "brand": "Fashion Diva",
  "sourceUrl": "https://dummyjson.com/products/187"
},
{
  "id": 1188,
  "title": "Pampi Shoes",
  "name": "Pampi Shoes",
  "description": "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
  "price": 29.99,
  "category": categoryBySlug("womens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/4.webp"],

  "brand": "Pampi",
  "sourceUrl": "https://dummyjson.com/products/188"
},
{
  "id": 1189,
  "title": "Red Shoes",
  "name": "Red Shoes",
  "description": "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
  "price": 34.99,
  "category": categoryBySlug("womens-shoes"),
  "image": "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/3.webp",
  "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/4.webp"],

  "brand": "Fashion Express",
  "sourceUrl": "https://dummyjson.com/products/189"
},
{
  "id": 1190,
  "title": "IWC Ingenieur Automatic Steel",
  "name": "IWC Ingenieur Automatic Steel",
  "description": "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
  "price": 4999.99,
  "category": categoryBySlug("womens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/3.webp"],

  "brand": "IWC",
  "sourceUrl": "https://dummyjson.com/products/190"
},
{
  "id": 1191,
  "title": "Rolex Cellini Moonphase",
  "name": "Rolex Cellini Moonphase",
  "description": "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
  "price": 15999.99,
  "category": categoryBySlug("womens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/3.webp"],

  "brand": "Rolex",
  "sourceUrl": "https://dummyjson.com/products/191"
},
{
  "id": 1192,
  "title": "Rolex Datejust Women",
  "name": "Rolex Datejust Women",
  "description": "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
  "price": 10999.99,
  "category": categoryBySlug("womens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/3.webp"],

  "brand": "Rolex",
  "sourceUrl": "https://dummyjson.com/products/192"
},
{
  "id": 1193,
  "title": "Watch Gold for Women",
  "name": "Watch Gold for Women",
  "description": "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
  "price": 799.99,
  "category": categoryBySlug("womens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/3.webp"],

  "brand": "Fashion Gold",
  "sourceUrl": "https://dummyjson.com/products/193"
},
{
  "id": 1194,
  "title": "Women's Wrist Watch",
  "name": "Women's Wrist Watch",
  "description": "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
  "price": 129.99,
  "category": categoryBySlug("womens-watches"),
  "image": "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/1.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/2.webp",
  "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/3.webp"],

  "brand": "Fashion Co.",
  "sourceUrl": "https://dummyjson.com/products/194"
},
{
  "id": 1195,
  "title": "Essence Mascara Lash Princess Bundle",
  "name": "Essence Mascara Lash Princess Bundle",
  "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula. This bundle variant is added to complete the 200-product mock catalog.",
  "price": 11.49,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"],

  "brand": "Essence",
  "sourceUrl": "https://dummyjson.com/products/1#bundle"
},
{
  "id": 1196,
  "title": "Eyeshadow Palette with Mirror Bundle",
  "name": "Eyeshadow Palette with Mirror Bundle",
  "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application. This bundle variant is added to complete the 200-product mock catalog.",
  "price": 22.99,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"],

  "brand": "Glamour Beauty",
  "sourceUrl": "https://dummyjson.com/products/2#bundle"
},
{
  "id": 1197,
  "title": "Powder Canister Bundle",
  "name": "Powder Canister Bundle",
  "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish. This bundle variant is added to complete the 200-product mock catalog.",
  "price": 17.24,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"],

  "brand": "Velvet Touch",
  "sourceUrl": "https://dummyjson.com/products/3#bundle"
},
{
  "id": 1198,
  "title": "Red Lipstick Bundle",
  "name": "Red Lipstick Bundle",
  "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish. This bundle variant is added to complete the 200-product mock catalog.",
  "price": 14.94,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"],

  "brand": "Chic Cosmetics",
  "sourceUrl": "https://dummyjson.com/products/4#bundle"
},
{
  "id": 1199,
  "title": "Red Nail Polish Bundle",
  "name": "Red Nail Polish Bundle",
  "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home. This bundle variant is added to complete the 200-product mock catalog.",
  "price": 10.34,
  "category": categoryBySlug("beauty"),
  "image": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"],

  "brand": "Nail Couture",
  "sourceUrl": "https://dummyjson.com/products/5#bundle"
},
{
  "id": 1200,
  "title": "Calvin Klein CK One Bundle",
  "name": "Calvin Klein CK One Bundle",
  "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear. This bundle variant is added to complete the 200-product mock catalog.",
  "price": 57.49,
  "category": categoryBySlug("fragrances"),
  "image": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
  "images": [
  "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
  "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"],

  "brand": "Calvin Klein",
  "sourceUrl": "https://dummyjson.com/products/6#bundle"
}];
