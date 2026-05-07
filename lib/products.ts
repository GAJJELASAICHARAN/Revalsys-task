export interface Product {
  id: string;
  name: string;
  category: 'laptops' | 'smartphones' | 'tablets' | 'accessories' | 'wearables';
  price: number;
  originalPrice?: number;
  badge?: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  specs: Record<string, string>;
  inStock: boolean;
  isFeatured: boolean;
}

type ImportedProduct = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  discountPrice: number;
  rating: number;
  stock: number;
  reviewsCount?: number;
  badge?: string;
  description: string;
  image: string;
  features: string[];
};

const importedProducts: ImportedProduct[] = [
  // Laptops (Amazon.in "laptops" organic_results positions 1–20)
  {
    id: 1,
    name: 'HP Smartchoice Victus Ryzen 7 7445HS RTX 3050 16GB/512GB 144Hz (B0FDKPXD95)',
    brand: 'HP',
    category: 'Laptops',
    price: 89990,
    discountPrice: 89990,
    rating: 4.1,
    stock: 25,
    reviewsCount: 216,
    description:
      "HP Victus gaming laptop with Ryzen 7 7445HS, RTX 3050 6GB, 16GB DDR5, 512GB SSD and 144Hz FHD display.",
    image: 'https://m.media-amazon.com/images/I/71o5eHSQiKL._AC_UY218_.jpg',
    features: ['CPU: Ryzen 7 7445HS', 'GPU: RTX 3050 6GB', 'RAM: 16GB DDR5', 'Storage: 512GB SSD', 'Display: 15.6" FHD 144Hz'],
  },
  {
    id: 2,
    name: 'Lenovo LOQ Ryzen 5 7235HS RTX 3050A 12GB/512GB 144Hz (B0F832WDMW)',
    brand: 'Lenovo',
    category: 'Laptops',
    price: 83990,
    discountPrice: 66990,
    rating: 3.8,
    stock: 30,
    reviewsCount: 33,
    description:
      'Lenovo LOQ gaming laptop with Ryzen 5 7235HS, RTX 3050A 4GB, 12GB RAM, 512GB SSD and 144Hz FHD display.',
    image: 'https://m.media-amazon.com/images/I/61aXoUYHNcL._AC_UY218_.jpg',
    features: ['CPU: Ryzen 5 7235HS', 'GPU: RTX 3050A 4GB', 'RAM: 12GB', 'Storage: 512GB SSD', 'Display: 15.6" FHD 144Hz'],
  },
  {
    id: 3,
    name: 'HP 15 Core i3-1315U 8GB/512GB FHD (B0F4R5W1NC)',
    brand: 'HP',
    category: 'Laptops',
    price: 50903,
    discountPrice: 47600,
    rating: 4.2,
    stock: 40,
    reviewsCount: 2100,
    description:
      'HP 15 laptop with 13th Gen Intel Core i3-1315U, 8GB DDR4, 512GB SSD and 15.6" FHD anti-glare display.',
    image: 'https://m.media-amazon.com/images/I/61R5Ecv7i-L._AC_UY218_.jpg',
    features: ['CPU: Intel Core i3-1315U', 'RAM: 8GB DDR4', 'Storage: 512GB SSD', 'Display: 15.6" FHD', 'OS: Windows 11'],
  },
  {
    id: 4,
    name: 'Acer Aspire Lite Ryzen 5-5625U 16GB/512GB FHD (B0DG2GCTD7)',
    brand: 'Acer',
    category: 'Laptops',
    price: 89999,
    discountPrice: 45990,
    rating: 4.0,
    stock: 50,
    reviewsCount: 826,
    badge: "Amazon's Choice",
    description:
      'Acer Aspire Lite thin & light laptop with AMD Ryzen 5-5625U, 16GB RAM, 512GB SSD and 15.6" FHD display.',
    image: 'https://m.media-amazon.com/images/I/718UBZxpxrL._AC_UY218_.jpg',
    features: ['CPU: Ryzen 5-5625U', 'RAM: 16GB', 'Storage: 512GB SSD', 'Display: 15.6" FHD', 'Build: Metal body'],
  },
  {
    id: 5,
    name: 'ASUS Zenbook 14 Core Ultra 5 225H 16GB/1TB OLED Touch (B0GX9K5JJF)',
    brand: 'ASUS',
    category: 'Laptops',
    price: 127990,
    discountPrice: 106990,
    rating: 4.6,
    stock: 18,
    reviewsCount: 250,
    description:
      'ASUS Zenbook 14 (2026) thin & light laptop with Intel Core Ultra 5 225H, 16GB RAM, 1TB SSD and OLED touchscreen display.',
    image: 'https://m.media-amazon.com/images/I/71rzGwCAp-L._AC_UY218_.jpg',
    features: ['CPU: Core Ultra 5 225H', 'GPU: Intel Arc iGPU', 'RAM: 16GB', 'Storage: 1TB SSD', 'Display: 14" FHD+ OLED Touch'],
  },
  {
    id: 6,
    name: 'ASUS TUF A15 Ryzen 7 7445HS RTX 3050 16GB/512GB 144Hz (B0FM3C4L2F)',
    brand: 'ASUS',
    category: 'Laptops',
    price: 83990,
    discountPrice: 67990,
    rating: 4.3,
    stock: 35,
    reviewsCount: 821,
    description:
      'ASUS TUF A15 gaming laptop with Ryzen 7 7445HS, RTX 3050 4GB, 16GB DDR5 and 144Hz FHD display.',
    image: 'https://m.media-amazon.com/images/I/81nPkLHN3vL._AC_UY218_.jpg',
    features: ['CPU: Ryzen 7 7445HS', 'GPU: RTX 3050 4GB', 'RAM: 16GB DDR5', 'Storage: 512GB SSD', 'Display: 15.6" FHD 144Hz'],
  },
  {
    id: 7,
    name: 'HP 15 Core i3-1315U 12GB/512GB FHD (B0F4R3GFMQ)',
    brand: 'HP',
    category: 'Laptops',
    price: 52720.16,
    discountPrice: 52690,
    rating: 4.1,
    stock: 28,
    reviewsCount: 510,
    description:
      'HP 15 laptop with 13th Gen Intel Core i3-1315U, 12GB DDR4, 512GB SSD and 15.6" FHD anti-glare display.',
    image: 'https://m.media-amazon.com/images/I/71FXHAM+jWL._AC_UY218_.jpg',
    features: ['CPU: Intel Core i3-1315U', 'RAM: 12GB DDR4', 'Storage: 512GB SSD', 'Display: 15.6" FHD', 'Camera: Privacy shutter'],
  },
  {
    id: 8,
    name: 'Acer Aspire One Celeron N4500 12GB/256GB 14" (B0GW8KXZMF)',
    brand: 'Acer',
    category: 'Laptops',
    price: 55999,
    discountPrice: 35990,
    rating: 1.0,
    stock: 12,
    reviewsCount: 1,
    description:
      'Acer Aspire One thin & light laptop with Intel Celeron N4500, 12GB RAM, 256GB SSD and 14" HD display.',
    image: 'https://m.media-amazon.com/images/I/71I0Oo7W2-L._AC_UY218_.jpg',
    features: ['CPU: Intel Celeron N4500', 'RAM: 12GB', 'Storage: 256GB SSD', 'Display: 14" HD', 'OS: Windows 11'],
  },
  {
    id: 9,
    name: 'ASUS Zenbook S14 Core Ultra 9 32GB/1TB 3K OLED Touch (B0GTVWDJK1)',
    brand: 'ASUS',
    category: 'Laptops',
    price: 377990,
    discountPrice: 249990,
    rating: 4.7,
    stock: 10,
    reviewsCount: 120,
    description:
      'ASUS Zenbook S14 (2026) Copilot+ PC with Core Ultra 9, 32GB RAM, 1TB SSD and 3K OLED touchscreen display.',
    image: 'https://m.media-amazon.com/images/I/71-xjAtfsVL._AC_UY218_.jpg',
    features: ['CPU: Core Ultra 9', 'RAM: 32GB', 'Storage: 1TB SSD', 'Display: 14" 3K OLED Touch', 'Weight: ~1.2kg'],
  },
  {
    id: 10,
    name: 'HP 15 Athlon 7120U 8GB/512GB DOS (B0GTYSL8KK)',
    brand: 'HP',
    category: 'Laptops',
    price: 56990,
    discountPrice: 39800,
    rating: 2.0,
    stock: 15,
    reviewsCount: 2,
    description:
      'HP 15 thin & light laptop with AMD Athlon 7120U, 8GB DDR5, 512GB SSD and 15.6" HD display (DOS).',
    image: 'https://m.media-amazon.com/images/I/718-7YE0WQL._AC_UY218_.jpg',
    features: ['CPU: Athlon 7120U', 'RAM: 8GB DDR5', 'Storage: 512GB SSD', 'Display: 15.6" HD', 'OS: DOS'],
  },
  {
    id: 11,
    name: 'Dell G15 i5-13450HX RTX 3050 16GB/1TB (B0CRKXDX83)',
    brand: 'Dell',
    category: 'Laptops',
    price: 105398,
    discountPrice: 80990,
    rating: 4.0,
    stock: 22,
    reviewsCount: 1400,
    description:
      'Dell G15 gaming laptop with 13th Gen Intel Core i5-13450HX, RTX 3050 6GB, 16GB RAM and 1TB SSD.',
    image: 'https://m.media-amazon.com/images/I/61ko2a0owDL._AC_UY218_.jpg',
    features: ['CPU: Intel Core i5-13450HX', 'GPU: RTX 3050 6GB', 'RAM: 16GB', 'Storage: 1TB SSD', 'Display: 15.6" FHD'],
  },
  {
    id: 12,
    name: 'Lenovo IdeaPad Slim 3 i5-13420H 16GB/512GB 15.3" (B0GDQFZBQC)',
    brand: 'Lenovo',
    category: 'Laptops',
    price: 92500,
    discountPrice: 66000,
    rating: 4.1,
    stock: 30,
    reviewsCount: 92,
    description:
      'Lenovo IdeaPad Slim 3 with 13th Gen Intel Core i5-13420H, 16GB RAM, 512GB SSD and 15.3" WUXGA IPS display.',
    image: 'https://m.media-amazon.com/images/I/71D9HSayVSL._AC_UY218_.jpg',
    features: ['CPU: Intel Core i5-13420H', 'RAM: 16GB', 'Storage: 512GB SSD', 'Display: 15.3" WUXGA IPS', 'Weight: ~1.6kg'],
  },
  {
    id: 13,
    name: 'ASUS Vivobook 15 i3-1315U 16GB/512GB FHD (B0G4QP6FXJ)',
    brand: 'ASUS',
    category: 'Laptops',
    price: 54990,
    discountPrice: 46990,
    rating: 4.3,
    stock: 35,
    reviewsCount: 261,
    description:
      'ASUS Vivobook 15 with 13th Gen Intel Core i3-1315U, 16GB RAM, 512GB SSD and 15.6" FHD anti-glare display.',
    image: 'https://m.media-amazon.com/images/I/71OUu3JeNIL._AC_UY218_.jpg',
    features: ['CPU: Intel Core i3-1315U', 'RAM: 16GB', 'Storage: 512GB SSD', 'Display: 15.6" FHD', 'OS: Windows 11 Home'],
  },
  {
    id: 14,
    name: 'Lenovo IdeaPad Slim 3 i5-12450H 16GB/512GB FHD (B0FH71SN5N)',
    brand: 'Lenovo',
    category: 'Laptops',
    price: 83200,
    discountPrice: 60900,
    rating: 4.0,
    stock: 32,
    reviewsCount: 175,
    description:
      'Lenovo IdeaPad Slim 3 with 12th Gen Intel Core i5-12450H, 16GB LPDDR5, 512GB SSD and 15.6" FHD anti-glare display.',
    image: 'https://m.media-amazon.com/images/I/81leoJuYYaL._AC_UY218_.jpg',
    features: ['CPU: Intel Core i5-12450H', 'RAM: 16GB LPDDR5', 'Storage: 512GB SSD', 'Display: 15.6" FHD', 'Keyboard: Backlit'],
  },
  {
    id: 15,
    name: 'HP 15 Ryzen 3 7320U 8GB/512GB FHD (B0D3HG5CMG)',
    brand: 'HP',
    category: 'Laptops',
    price: 54990,
    discountPrice: 45810,
    rating: 4.0,
    stock: 2,
    reviewsCount: 313,
    description:
      'HP 15 laptop with AMD Ryzen 3 7320U, 8GB LPDDR5, 512GB SSD and 15.6" FHD anti-glare display.',
    image: 'https://m.media-amazon.com/images/I/61SHFVKs+AL._AC_UY218_.jpg',
    features: ['CPU: Ryzen 3 7320U', 'RAM: 8GB LPDDR5', 'Storage: 512GB SSD', 'Display: 15.6" FHD', 'Camera: 1080p FHD'],
  },
  {
    id: 16,
    name: 'ASUS Vivobook 15 Ryzen 7 5825U 16GB/512GB FHD (B0FC2LKFSC)',
    brand: 'ASUS',
    category: 'Laptops',
    price: 57990,
    discountPrice: 55990,
    rating: 4.1,
    stock: 25,
    reviewsCount: 157,
    description:
      'ASUS Vivobook 15 with AMD Ryzen 7 5825U, 16GB RAM, 512GB SSD and 15.6" FHD display.',
    image: 'https://m.media-amazon.com/images/I/71zMooVIVAL._AC_UY218_.jpg',
    features: ['CPU: Ryzen 7 5825U', 'GPU: Radeon iGPU', 'RAM: 16GB', 'Storage: 512GB SSD', 'Battery: 42Wh'],
  },
  {
    id: 17,
    name: 'Dell 15 Core 3 100U 8GB/512GB FHD 120Hz (B0BQJ68HHC)',
    brand: 'Dell',
    category: 'Laptops',
    price: 49990,
    discountPrice: 49990,
    rating: 4.1,
    stock: 35,
    reviewsCount: 1100,
    description:
      'Dell 15 thin & light laptop with 14th Gen Intel Core 3 100U, 8GB DDR4, 512GB SSD and 15.6" FHD 120Hz IPS display.',
    image: 'https://m.media-amazon.com/images/I/717WZ7WriwL._AC_UY218_.jpg',
    features: ['CPU: Intel Core 3 100U', 'RAM: 8GB DDR4', 'Storage: 512GB SSD', 'Display: 15.6" FHD 120Hz', 'OS: Windows 11'],
  },
  {
    id: 18,
    name: 'Acer Aspire 3 Celeron N4500 12GB/512GB 15.6" (B0FF4QBNWM)',
    brand: 'Acer',
    category: 'Laptops',
    price: 39000,
    discountPrice: 39000,
    rating: 3.5,
    stock: 20,
    reviewsCount: 422,
    description:
      'Acer Aspire 3 with Intel Celeron N4500, 12GB LPDDR4X, 512GB SSD and 15.6" HD display.',
    image: 'https://m.media-amazon.com/images/I/61+6C077NmL._AC_UY218_.jpg',
    features: ['CPU: Intel Celeron N4500', 'RAM: 12GB LPDDR4X', 'Storage: 512GB SSD', 'Display: 15.6" HD', 'OS: Windows 11'],
  },
  {
    id: 19,
    name: 'Dell Vostro 3530 i5-1334U 16GB/512GB FHD (B0D2Y1BLDT)',
    brand: 'Dell',
    category: 'Laptops',
    price: 73163,
    discountPrice: 66990,
    rating: 3.8,
    stock: 25,
    reviewsCount: 511,
    description:
      'Dell Vostro 3530 with 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD and 15.6" FHD anti-glare display.',
    image: 'https://m.media-amazon.com/images/I/712WiT-wexL._AC_UY218_.jpg',
    features: ['CPU: Intel Core i5-1334U', 'RAM: 16GB DDR4', 'Storage: 512GB SSD', 'Display: 15.6" FHD', 'OS: Windows 11'],
  },
  {
    id: 20,
    name: 'ASUS Vivobook Go 14 Ryzen 5 7520U 16GB/512GB FHD (B0FN9FV4ZZ)',
    brand: 'ASUS',
    category: 'Laptops',
    price: 52990,
    discountPrice: 46990,
    rating: 4.4,
    stock: 1,
    reviewsCount: 54,
    description:
      'ASUS Vivobook Go 14 thin & light laptop with AMD Ryzen 5 7520U, 16GB RAM, 512GB SSD and 14" FHD display.',
    image: 'https://m.media-amazon.com/images/I/71AfM5k3J4L._AC_UY218_.jpg',
    features: ['CPU: Ryzen 5 7520U', 'RAM: 16GB', 'Storage: 512GB SSD', 'Display: 14" FHD', 'Weight: ~1.38kg'],
  },

  // Smartphones (Amazon.in "smartphones" organic_results positions 1–20)
  {
    id: 21,
    name: 'realme NARZO Power 5G 8GB/128GB 10001mAh (B0GMG65KB8)',
    brand: 'realme',
    category: 'Smartphones',
    price: 35999,
    discountPrice: 27999,
    rating: 3.8,
    stock: 60,
    reviewsCount: 44,
    description:
      'realme NARZO Power 5G with 144Hz curved AMOLED display, dual-chip system, 50MP Sony OIS camera and 10001mAh battery.',
    image: 'https://m.media-amazon.com/images/I/81MaNDUdnhL._AC_UY218_.jpg',
    features: ['RAM: 8GB', 'Storage: 128GB', 'Display: 144Hz AMOLED', 'Camera: 50MP OIS', 'Battery: 10001mAh'],
  },
  {
    id: 22,
    name: 'Apple iPhone 17 Pro Max 2TB 6.9" (B0FQF9ZLD7)',
    brand: 'Apple',
    category: 'Smartphones',
    price: 229900,
    discountPrice: 229900,
    rating: 4.5,
    stock: 12,
    reviewsCount: 340,
    description:
      'Apple iPhone 17 Pro Max with A19 Pro chip, 6.9" display and Pro Fusion camera system.',
    image: 'https://m.media-amazon.com/images/I/616-Eh2FbPL._AC_UY218_.jpg',
    features: ['Chip: A19 Pro', 'Storage: 2TB', 'Display: 6.9"', 'Camera: Pro Fusion', '5G'],
  },
  {
    id: 23,
    name: 'POCO C71 4GB/64GB (B0F4CWD6V3)',
    brand: 'POCO',
    category: 'Smartphones',
    price: 8999,
    discountPrice: 8999,
    rating: 4.0,
    stock: 150,
    reviewsCount: 2700,
    badge: "Amazon's Choice",
    description:
      'POCO C71 budget smartphone with 4GB RAM and 64GB storage.',
    image: 'https://m.media-amazon.com/images/I/51U-172cpVL._AC_UY218_.jpg',
    features: ['RAM: 4GB', 'Storage: 64GB', 'Value pick', 'Dual SIM', 'Android'],
  },
  {
    id: 24,
    name: 'Samsung Galaxy M07 4GB/64GB Helio G99 (B0FN7QTRPY)',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 10999,
    discountPrice: 9999,
    rating: 4.2,
    stock: 200,
    reviewsCount: 1200,
    description:
      'Samsung Galaxy M07 with MediaTek Helio G99, 50MP camera, 5000mAh battery and 25W fast charging (without charger).',
    image: 'https://m.media-amazon.com/images/I/610lbucItmL._AC_UY218_.jpg',
    features: ['RAM: 4GB', 'Storage: 64GB', 'Chipset: Helio G99', 'Camera: 50MP', 'Battery: 5000mAh'],
  },
  {
    id: 25,
    name: 'Samsung Galaxy M06 5G 4GB/128GB Dimensity 6300 (B0DX6P3RX9)',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 13999,
    discountPrice: 12499,
    rating: 4.0,
    stock: 180,
    reviewsCount: 2700,
    description:
      'Samsung Galaxy M06 5G with MediaTek Dimensity 6300, 50MP camera, 25W fast charging and 4 OS upgrades (without charger).',
    image: 'https://m.media-amazon.com/images/I/71vibvcdAlL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 4GB', 'Storage: 128GB', 'Camera: 50MP', 'Fast charge: 25W'],
  },
  {
    id: 26,
    name: 'realme C71 4G 6GB/128GB 90Hz 6300mAh (B0GFW1BJ1D)',
    brand: 'realme',
    category: 'Smartphones',
    price: 13399,
    discountPrice: 13399,
    rating: 4.5,
    stock: 140,
    reviewsCount: 305,
    description:
      'realme C71 4G with 90Hz eye-comfort display, 6300mAh battery and 37MP cameras.',
    image: 'https://m.media-amazon.com/images/I/61l38sgkFML._AC_UY218_.jpg',
    features: ['RAM: 6GB', 'Storage: 128GB', 'Display: 90Hz', 'Battery: 6300mAh', 'IP54'],
  },
  {
    id: 27,
    name: 'Samsung Galaxy M56 5G 8GB/256GB (B0F43W6V6J)',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 36999,
    discountPrice: 26499,
    rating: 4.3,
    stock: 90,
    reviewsCount: 1400,
    description:
      'Samsung Galaxy M56 5G with 50MP camera, AI features, vapour cooling chamber and lag-free gaming (without charger).',
    image: 'https://m.media-amazon.com/images/I/71PQ2tp0jwL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 8GB', 'Storage: 256GB', 'Camera: 50MP', 'Cooling: Vapour chamber'],
  },
  {
    id: 28,
    name: 'vivo T5x 5G 6GB/128GB 7200mAh (B0GTTXP6WF)',
    brand: 'vivo',
    category: 'Smartphones',
    price: 28999,
    discountPrice: 22135,
    rating: 3.9,
    stock: 110,
    reviewsCount: 64,
    description:
      'vivo T5x 5G with 50MP AI dual camera, 32MP selfie, 6.76" FHD+ display and 7200mAh battery.',
    image: 'https://m.media-amazon.com/images/I/71uPWQoOysL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 6GB', 'Storage: 128GB', 'Battery: 7200mAh', 'Camera: 50MP + 32MP'],
  },
  {
    id: 29,
    name: 'Motorola G57 Power 5G 8GB/128GB 7000mAh (B0G3TFPN94)',
    brand: 'Motorola',
    category: 'Smartphones',
    price: 17999,
    discountPrice: 17400,
    rating: 4.2,
    stock: 120,
    reviewsCount: 364,
    description:
      'Motorola G57 Power 5G with Snapdragon 6s Gen 4, 50MP LYT-600 camera and 7000mAh battery with 33W TurboPower.',
    image: 'https://m.media-amazon.com/images/I/41cSpRScVlL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 8GB', 'Storage: 128GB', 'Battery: 7000mAh', 'Fast charge: 33W'],
  },
  {
    id: 30,
    name: 'REDMI A7 Pro 5G 4GB/128GB 120Hz 6.9" (B0GS5M4VMH)',
    brand: 'Redmi',
    category: 'Smartphones',
    price: 16999,
    discountPrice: 13499,
    rating: 3.8,
    stock: 130,
    reviewsCount: 103,
    description:
      "REDMI A7 Pro 5G with segment-focused specs: 6.9\" 120Hz display, large battery and fast processor.",
    image: 'https://m.media-amazon.com/images/I/71AjkPyeFiL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 4GB', 'Storage: 128GB', 'Display: 6.9" 120Hz', 'Big battery'],
  },
  {
    id: 31,
    name: 'Apple iPhone 17 Pro 256GB (B0FQG1LPVF)',
    brand: 'Apple',
    category: 'Smartphones',
    price: 134900,
    discountPrice: 134900,
    rating: 4.5,
    stock: 14,
    reviewsCount: 371,
    description:
      'Apple iPhone 17 Pro with A19 Pro chip, up to 120Hz display and Pro Fusion camera system.',
    image: 'https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY218_.jpg',
    features: ['Chip: A19 Pro', 'Storage: 256GB', 'Display: up to 120Hz', '5G', 'Pro camera'],
  },
  {
    id: 32,
    name: 'Apple iPhone Air 256GB (B0FQFBDQJ1)',
    brand: 'Apple',
    category: 'Smartphones',
    price: 119900,
    discountPrice: 101190,
    rating: 4.5,
    stock: 18,
    reviewsCount: 43,
    description:
      'Apple iPhone Air with thin design, powerful A19 Pro chip and 6.5" display.',
    image: 'https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg',
    features: ['Chip: A19 Pro', 'Storage: 256GB', 'Display: 6.5"', 'All-day battery', '5G'],
  },
  {
    id: 33,
    name: 'iQOO Z11x 5G 8GB/256GB 7200mAh (B0GP8XTH7K)',
    brand: 'iQOO',
    category: 'Smartphones',
    price: 33999,
    discountPrice: 26999,
    rating: 4.2,
    stock: 95,
    reviewsCount: 437,
    description:
      'iQOO Z11x 5G with Dimensity 7400-Turbo, 7200mAh battery and OriginOS 6.',
    image: 'https://m.media-amazon.com/images/I/61HBOs7MdQL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 8GB', 'Storage: 256GB', 'Battery: 7200mAh', 'Chipset: Dimensity 7400-Turbo'],
  },
  {
    id: 34,
    name: 'Samsung Galaxy A55 5G 8GB/256GB (B0CWPBBQ3M)',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 89999,
    discountPrice: 45999,
    rating: 4.3,
    stock: 70,
    reviewsCount: 6600,
    description:
      'Samsung Galaxy A55 5G with AI features, 50MP OIS camera, IP67 rating and sAMOLED display.',
    image: 'https://m.media-amazon.com/images/I/71EeBkydf9L._AC_UY218_.jpg',
    features: ['5G', 'RAM: 8GB', 'Storage: 256GB', 'Camera: 50MP OIS', 'IP67'],
  },
  {
    id: 35,
    name: 'Samsung Galaxy M17 5G 4GB/128GB 50MP OIS (B0FN7RN9TH)',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 16499,
    discountPrice: 14499,
    rating: 4.1,
    stock: 160,
    reviewsCount: 2200,
    description:
      'Samsung Galaxy M17 5G with 50MP OIS triple camera, IP54, AI features and 6 OS upgrades (without charger).',
    image: 'https://m.media-amazon.com/images/I/7101h6htEgL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 4GB', 'Storage: 128GB', 'Camera: 50MP OIS', 'IP54'],
  },
  {
    id: 36,
    name: 'SAMSUNG Galaxy F07 4GB/64GB (B0FT7T3GZF)',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 10999,
    discountPrice: 9605,
    rating: 3.6,
    stock: 175,
    reviewsCount: 70,
    description:
      'Samsung Galaxy F07 with 4GB RAM and 64GB storage.',
    image: 'https://m.media-amazon.com/images/I/317CVL0zICL._AC_UY218_.jpg',
    features: ['RAM: 4GB', 'Storage: 64GB', 'Dual SIM', 'Budget phone', 'Android'],
  },
  {
    id: 37,
    name: 'REDMI A7 Pro 5G 4GB/64GB 120Hz 6.9" (B0GS5SM6JR)',
    brand: 'Redmi',
    category: 'Smartphones',
    price: 15999,
    discountPrice: 12499,
    rating: 3.8,
    stock: 140,
    reviewsCount: 103,
    description:
      'REDMI A7 Pro 5G variant with 4GB RAM and 64GB storage, featuring a large 6.9" 120Hz display.',
    image: 'https://m.media-amazon.com/images/I/71AjkPyeFiL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 4GB', 'Storage: 64GB', 'Display: 6.9" 120Hz', 'Big battery'],
  },
  {
    id: 38,
    name: 'Motorola G96 8GB/128GB 144Hz pOLED (B0FHGD6K6K)',
    brand: 'Motorola',
    category: 'Smartphones',
    price: 20999,
    discountPrice: 19550,
    rating: 4.3,
    stock: 80,
    reviewsCount: 410,
    description:
      'Motorola G96 with 144Hz 3D curved pOLED display, 8GB RAM and 128GB storage.',
    image: 'https://m.media-amazon.com/images/I/41Aa2smwv-L._AC_UY218_.jpg',
    features: ['RAM: 8GB', 'Storage: 128GB', 'Display: 144Hz pOLED', 'Curved display', '5G-ready'],
  },
  {
    id: 39,
    name: 'realme narzo 100 Lite 5G 4GB/128GB 7000mAh 144Hz (B0GTRHJYYF)',
    brand: 'realme',
    category: 'Smartphones',
    price: 27999,
    discountPrice: 14499,
    rating: 3.9,
    stock: 105,
    reviewsCount: 30,
    description:
      'realme narzo 100 Lite 5G with 7000mAh battery, 144Hz display and VC cooling.',
    image: 'https://m.media-amazon.com/images/I/81vHnwGKVSL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 4GB', 'Storage: 128GB', 'Battery: 7000mAh', 'Display: 144Hz'],
  },
  {
    id: 40,
    name: 'Vivo T4x 5G 8GB/128GB (B0F194NC2H)',
    brand: 'vivo',
    category: 'Smartphones',
    price: 19499,
    discountPrice: 19249,
    rating: 4.4,
    stock: 115,
    reviewsCount: 3200,
    description:
      'Vivo T4x 5G with 8GB RAM and 128GB storage.',
    image: 'https://m.media-amazon.com/images/I/81-HKhoE-JL._AC_UY218_.jpg',
    features: ['5G', 'RAM: 8GB', 'Storage: 128GB', 'Dual SIM', 'Fast performance'],
  },

  // Wearables (Amazon.in "wearables" organic_results — top 20 wearable-tech picks)
  {
    id: 41,
    name: 'WHOOP Peak 12-Month Membership Health & Fitness Wearable (B0DY2SWV16)',
    brand: 'WHOOP',
    category: 'Wearables',
    price: 28990,
    discountPrice: 28990,
    rating: 4.3,
    stock: 40,
    reviewsCount: 3000,
    badge: "Amazon's Choice",
    description:
      'WHOOP Peak 5.0 health and fitness wearable with 24/7 activity and sleep tracking, heart rate, HRV, stress monitor, personalized coaching and 14+ days battery life. Includes 12-month membership.',
    image: 'https://m.media-amazon.com/images/I/61Fe+1-71-L._AC_UL320_.jpg',
    features: [
      'Tracking: 24/7 activity & sleep',
      'Sensors: HR, HRV, Stress',
      'Coaching: Personalized',
      'Battery: 14+ days',
      'Membership: 12 months',
    ],
  },
  {
    id: 42,
    name: 'Pebble Qore Fitness Band 45 Days Battery (B0FMRKHN4M)',
    brand: 'Pebble',
    category: 'Wearables',
    price: 4999,
    discountPrice: 2899,
    rating: 3.8,
    stock: 120,
    reviewsCount: 429,
    description:
      'Pebble Qore fitness band with 45 days battery life, 100+ sports modes, advanced health tracking including HR, SpO2, stress and sleep, plus OneKey measurement and smart notifications.',
    image: 'https://m.media-amazon.com/images/I/71HyzMqzzPL._AC_UL320_.jpg',
    features: [
      'Battery: 45 days',
      'Sports modes: 100+',
      'Sensors: HR, SpO2, Stress',
      'Sleep tracking',
      'Smart notifications',
    ],
  },
  {
    id: 43,
    name: 'Pebble Qore 2 Premium Metal Fitness Band (B0GG4W7N66)',
    brand: 'Pebble',
    category: 'Wearables',
    price: 5999,
    discountPrice: 3699,
    rating: 3.9,
    stock: 90,
    reviewsCount: 244,
    description:
      'Pebble Qore 2 premium metal fitness band with 45 days battery life, heart rate, SpO2, HRV and body temperature monitoring, sleep tracking, AI health analysis and smart notifications.',
    image: 'https://m.media-amazon.com/images/I/71KDdMgGJ4L._AC_UL320_.jpg',
    features: [
      'Build: Premium metal',
      'Battery: 45 days',
      'Sensors: HR, SpO2, HRV, Temp',
      'AI health analysis',
      'Sleep tracking',
    ],
  },
  {
    id: 44,
    name: 'Fire-Boltt Ninja Call Pro Max Smart Watch 2.01" HD (B0C496V772)',
    brand: 'Fire-Boltt',
    category: 'Wearables',
    price: 14999,
    discountPrice: 1399,
    rating: 3.9,
    stock: 200,
    reviewsCount: 1200,
    description:
      'Fire-Boltt Ninja Call Pro Max Bluetooth calling smartwatch with 2.01" HD display, 120+ sports modes, full health suite, AI voice assistance and SpO2 + heart rate monitoring.',
    image: 'https://m.media-amazon.com/images/I/61zBJcICfFL._AC_UL320_.jpg',
    features: [
      'Display: 2.01" HD',
      'BT calling',
      'Sports modes: 120+',
      'AI voice assistance',
      'Sensors: SpO2, HR',
    ],
  },
  {
    id: 45,
    name: 'pTron Orbis Era Smart Glasses Bluetooth 5.4 (B0FXB2BLW1)',
    brand: 'pTron',
    category: 'Wearables',
    price: 3799,
    discountPrice: 1499,
    rating: 3.1,
    stock: 80,
    reviewsCount: 147,
    description:
      'pTron Orbis Era smart glasses with Bluetooth 5.4, open-ear music, hands-free calls, blue-light protection and 8 hours playtime, compatible with phones and tablets.',
    image: 'https://m.media-amazon.com/images/I/51e5DPLNpRL._AC_UL320_.jpg',
    features: [
      'Bluetooth: v5.4',
      'Audio: Open ear',
      'Calls: Hands-free',
      'Blue light protection',
      'Playtime: 8 hrs',
    ],
  },
  {
    id: 46,
    name: 'Pebble Arq Smart Bracelet Digital Display (B0G6LBKYLD)',
    brand: 'Pebble',
    category: 'Wearables',
    price: 7999,
    discountPrice: 3299,
    rating: 3.5,
    stock: 70,
    reviewsCount: 53,
    description:
      'Pebble Arq smart bracelet with digital display, heart rate and SpO2 monitoring, sleep tracker, multiple sports modes, magnetic strap and a premium build in Obsidian Gold.',
    image: 'https://m.media-amazon.com/images/I/61JjUyhyRuL._AC_UL320_.jpg',
    features: [
      'Form factor: Bracelet',
      'Display: Digital',
      'Sensors: HR, SpO2',
      'Strap: Magnetic',
      'Sleep tracker',
    ],
  },
  {
    id: 47,
    name: 'Boat Wave Call 3 Smartwatch 1.83" HD BT Calling (B0FLF44GTQ)',
    brand: 'Boat',
    category: 'Wearables',
    price: 6999,
    discountPrice: 1399,
    rating: 4.1,
    stock: 220,
    reviewsCount: 25700,
    description:
      'Boat Wave Call 3 smartwatch with 1.83" HD display, animated watch faces, Bluetooth calling, functional crown, multiple sports modes, IP68 rating and HR + SpO2 monitoring.',
    image: 'https://m.media-amazon.com/images/I/71UdDIKDlEL._AC_UL320_.jpg',
    features: [
      'Display: 1.83" HD',
      'BT calling',
      'Functional crown',
      'Rating: IP68',
      'Sensors: HR, SpO2',
    ],
  },
  {
    id: 48,
    name: 'pTron Orbis Neo Smart Glasses Bluetooth 5.4 (B0FKH9MFTG)',
    brand: 'pTron',
    category: 'Wearables',
    price: 3799,
    discountPrice: 999,
    rating: 3.4,
    stock: 100,
    reviewsCount: 246,
    description:
      'pTron Orbis Neo smart glasses with Bluetooth 5.4, open-ear music, hands-free calls, eye protection, 7 hours playtime and a lightweight, stylish wireless sunglasses design.',
    image: 'https://m.media-amazon.com/images/I/51FglCpb-PL._AC_UL320_.jpg',
    features: [
      'Bluetooth: v5.4',
      'Audio: Open ear',
      'Calls: Hands-free',
      'Playtime: 7 hrs',
      'Design: Lightweight',
    ],
  },
  {
    id: 49,
    name: 'Samsung Galaxy Fit3 Fitness Band 13 Days Battery (B0CTCLBST5)',
    brand: 'Samsung',
    category: 'Wearables',
    price: 9999,
    discountPrice: 3968,
    rating: 4.1,
    stock: 150,
    reviewsCount: 3000,
    description:
      'Samsung Galaxy Fit3 light and sleek fitness band with 13 days battery life, 100+ exercises and detailed sleep tracking in a Dark Gray finish.',
    image: 'https://m.media-amazon.com/images/I/61K2qby-3oL._AC_UL320_.jpg',
    features: [
      'Battery: 13 days',
      'Exercises: 100+',
      'Sleep tracking',
      'Design: Light & sleek',
      'Notifications',
    ],
  },
  {
    id: 50,
    name: 'Fastrack Astor FS1 Pro 1.97" AMOLED BT Calling Smart Watch (B0DB5XSKLJ)',
    brand: 'Fastrack',
    category: 'Wearables',
    price: 4999,
    discountPrice: 2499,
    rating: 4.1,
    stock: 130,
    reviewsCount: 1600,
    description:
      'Fastrack Astor FS1 Pro smartwatch with 1.97" AMOLED display, Bluetooth calling, 100+ sports modes, SpO2 and heart rate monitoring, women\'s health features, IP68 and up to 5 days battery.',
    image: 'https://m.media-amazon.com/images/I/71BMeCVMZOL._AC_UL320_.jpg',
    features: [
      'Display: 1.97" AMOLED',
      'BT calling',
      'Sports modes: 100+',
      'Battery: 5 days',
      'Rating: IP68',
    ],
  },
  {
    id: 51,
    name: 'TMY Air Vision AI Smart Glasses 8MP HD Camera (B0GV7Z851T)',
    brand: 'TMY',
    category: 'Wearables',
    price: 9999,
    discountPrice: 5999,
    rating: 4.3,
    stock: 60,
    reviewsCount: 1900,
    description:
      'TMY Air Vision AI smart glasses with 8MP HD camera for hands-free photo and video, AI voice assistant, object recognition, Bluetooth 5.3 and dual mic noise reduction.',
    image: 'https://m.media-amazon.com/images/I/51zDgiEGQSL._AC_UL320_.jpg',
    features: [
      'Camera: 8MP HD',
      'AI voice assistant',
      'Object recognition',
      'Bluetooth: v5.3',
      'Dual mic noise reduction',
    ],
  },
  {
    id: 52,
    name: 'Fire-Boltt Talk Round Smart Watch 1.39" TFT (B0CG1VX5P4)',
    brand: 'Fire-Boltt',
    category: 'Wearables',
    price: 14999,
    discountPrice: 1199,
    rating: 4.0,
    stock: 250,
    reviewsCount: 60400,
    description:
      'Fire-Boltt Talk Round smartwatch with 1.39" TFT display, Bluetooth calling, dual button design, voice assistance, SpO2 and heart rate monitor and 120+ sports modes in a metal build.',
    image: 'https://m.media-amazon.com/images/I/71uRJs56VAL._AC_UL320_.jpg',
    features: [
      'Display: 1.39" TFT round',
      'BT calling',
      'Voice assistance',
      'Sensors: SpO2, HR',
      'Build: Metal',
    ],
  },
  {
    id: 53,
    name: 'Redmi Move Smartwatch 1.85" AMOLED HyperOS (B0FSLT35WH)',
    brand: 'Redmi',
    category: 'Wearables',
    price: 3999,
    discountPrice: 2499,
    rating: 3.9,
    stock: 110,
    reviewsCount: 106,
    description:
      'Redmi Move smartwatch with 1.85" AMOLED 600-nit display, Bluetooth calling, 140+ sports modes, 24x7 HR and SpO2, AOD and up to 14-day battery, running on HyperOS.',
    image: 'https://m.media-amazon.com/images/I/51wxHEqyaNL._AC_UL320_.jpg',
    features: [
      'Display: 1.85" AMOLED 600 nits',
      'BT calling',
      'Sports modes: 140+',
      'Battery: 14 days',
      'Always-on display',
    ],
  },
  {
    id: 54,
    name: 'Noise Pulse 4 Max Smart Watch 1.96" AMOLED (B0D6GFWYTQ)',
    brand: 'Noise',
    category: 'Wearables',
    price: 6999,
    discountPrice: 2499,
    rating: 4.0,
    stock: 180,
    reviewsCount: 85300,
    description:
      'Noise Pulse 4 Max smart watch with AI Create (India\'s first with unlimited watch faces), AI search, 1.96" AMOLED display, functional crown, premium metallic finish and full health suite.',
    image: 'https://m.media-amazon.com/images/I/618L-zIgoRL._AC_UL320_.jpg',
    features: [
      'Display: 1.96" AMOLED',
      'AI Create watch faces',
      'AI search',
      'Functional crown',
      'Health suite',
    ],
  },
  {
    id: 55,
    name: 'OURA Ring 4 Smart Ring Sleep & Fitness Tracker (B0D9WWJ9W8)',
    brand: 'OURA',
    category: 'Wearables',
    price: 39900,
    discountPrice: 39900,
    rating: 4.1,
    stock: 25,
    reviewsCount: 7000,
    description:
      'OURA Ring 4 smart ring (Rose Gold, size 6) with sleep tracking, heart rate, fitness metrics and up to 8 days battery life. Includes a sizing kit for first-time buyers.',
    image: 'https://m.media-amazon.com/images/I/61OizeerWIL._AC_UL320_.jpg',
    features: [
      'Form factor: Smart ring',
      'Sleep tracking',
      'Sensor: Heart rate',
      'Battery: up to 8 days',
      'Includes sizing kit',
    ],
  },
  {
    id: 56,
    name: 'Fastrack Limitless Glide X 1.83" Smart Watch (B0D963J6GN)',
    brand: 'Fastrack',
    category: 'Wearables',
    price: 2799,
    discountPrice: 1299,
    rating: 4.0,
    stock: 160,
    reviewsCount: 375,
    description:
      'Fastrack Limitless Glide X smartwatch with 1.83" Ultra UV HD display, SpO2, heart rate and sleep tracking, Bluetooth calling, 100+ sports modes and 5-day battery.',
    image: 'https://m.media-amazon.com/images/I/81Dk8SDkmRL._AC_UL320_.jpg',
    features: [
      'Display: 1.83" Ultra UV HD',
      'BT calling',
      'Sports modes: 100+',
      'Sensors: SpO2, HR',
      'Battery: 5 days',
    ],
  },
  {
    id: 57,
    name: 'Noise Pulse Hyper Smart Watch 1.85" 21 Days Battery (B0F8J8J9TN)',
    brand: 'Noise',
    category: 'Wearables',
    price: 5999,
    discountPrice: 1599,
    rating: 4.0,
    stock: 175,
    reviewsCount: 24800,
    description:
      'Noise Pulse Hyper smartwatch with 21 days battery, 1.85" display, AI watch faces, 100+ sports modes, full health suite, SpO2 + heart rate monitor and 1ATM water resistance.',
    image: 'https://m.media-amazon.com/images/I/61ehilHb3tL._AC_UL320_.jpg',
    features: [
      'Display: 1.85"',
      'Battery: 21 days',
      'AI watch faces',
      'Sports modes: 100+',
      'Water resistance: 1ATM',
    ],
  },
  {
    id: 58,
    name: 'Noise Twist Go Smart Watch 1.39" TruSync BT Calling (B0FCMC8T4F)',
    brand: 'Noise',
    category: 'Wearables',
    price: 4999,
    discountPrice: 1599,
    rating: 4.0,
    stock: 190,
    reviewsCount: 54000,
    description:
      'Noise Twist Go smart watch with 1.39" display, TruSync Bluetooth calling, glossy metal finish, 150+ watch faces, IP68 rating, sleep tracking and 100+ sports modes.',
    image: 'https://m.media-amazon.com/images/I/61IKOhOH9LL._AC_UL320_.jpg',
    features: [
      'Display: 1.39"',
      'BT calling: TruSync',
      'Watch faces: 150+',
      'Rating: IP68',
      'Sports modes: 100+',
    ],
  },
  {
    id: 59,
    name: 'Amazfit Bip 6 Smart Watch 46mm 1.97" AMOLED GPS (B0DYJKTHYF)',
    brand: 'Amazfit',
    category: 'Wearables',
    price: 14999,
    discountPrice: 7999,
    rating: 4.2,
    stock: 80,
    reviewsCount: 4900,
    description:
      'Amazfit Bip 6 smartwatch with 46mm case, 14-day battery, 1.97" AMOLED display, GPS with free maps, AI features, Bluetooth call & text, fitness and sleep tracking, 140+ workout modes and 5 ATM water resistance.',
    image: 'https://m.media-amazon.com/images/I/61UvVTN0IEL._AC_UL320_.jpg',
    features: [
      'Display: 1.97" AMOLED',
      'GPS: Built-in + free maps',
      'Battery: 14 days',
      'Workout modes: 140+',
      'Water resistance: 5 ATM',
    ],
  },
  {
    id: 60,
    name: 'Fitbit Inspire 3 Health & Fitness Tracker + 6mo Premium (B0B75RC9C3)',
    brand: 'Fitbit',
    category: 'Wearables',
    price: 8999,
    discountPrice: 8998,
    rating: 4.2,
    stock: 95,
    reviewsCount: 5600,
    description:
      'Fitbit Inspire 3 health and fitness tracker in Midnight Zen / Black, bundled with a 6-month Fitbit Premium membership for advanced insights and personalized guidance.',
    image: 'https://m.media-amazon.com/images/I/61AeGQhwjxL._AC_UL320_.jpg',
    features: [
      'Form factor: Tracker',
      'Health & fitness tracking',
      'Premium: 6 months included',
      'Color: Midnight Zen',
      'Companion app',
    ],
  },
  // Tablets (Amazon.in "tablets" organic_results positions 1–20)
  {
    id: 61,
    name: `XIAOMI Pad 8 Creator's Edition 12GB/256GB 3.2K 11.2" (B0GPWDXZXP)`,
    brand: 'XIAOMI',
    category: 'Tablets',
    price: 57890,
    discountPrice: 43999,
    rating: 4.1,
    stock: 40,
    reviewsCount: 31,
    description:
      "XIAOMI Pad 8 Creator's Edition with 11.2\" 3.2K nano-texture display, Snapdragon 8s Gen 4, 12GB RAM, 256GB storage and 9200mAh battery.",
    image: 'https://m.media-amazon.com/images/I/71n9Ww7sNpL._AC_UY218_.jpg',
    features: ['Chipset: Snapdragon 8s Gen 4', 'RAM: 12GB', 'Storage: 256GB', 'Display: 11.2" 3.2K', 'Battery: 9200mAh', 'Connectivity: Wi‑Fi 7'],
  },
  {
    id: 62,
    name: 'Samsung Galaxy Tab A11+ 6GB/128GB 11" 90Hz (B0G1BS9S4Q)',
    brand: 'Samsung',
    category: 'Tablets',
    price: 27999,
    discountPrice: 27999,
    rating: 4.5,
    stock: 40,
    reviewsCount: 157,
    description:
      'Samsung Galaxy Tab A11+ with 11" display, 6GB RAM, 128GB storage, 90Hz refresh rate, quad speakers with Dolby Atmos and AI with Google Gemini.',
    image: 'https://m.media-amazon.com/images/I/41LSxHi+KPL._AC_UY218_.jpg',
    features: ['RAM: 6GB', 'Storage: 128GB', 'Display: 11" 90Hz', 'Audio: Quad speakers (Dolby Atmos)', 'Connectivity: Wi‑Fi'],
  },
  {
    id: 63,
    name: 'OnePlus Pad Lite 6GB/128GB 11" 9340mAh (B0FHWWDRRM)',
    brand: 'OnePlus',
    category: 'Tablets',
    price: 19999,
    discountPrice: 17999,
    rating: 4.4,
    stock: 80,
    reviewsCount: 684,
    badge: "Amazon's Choice",
    description:
      'OnePlus Pad Lite with 11" display (up to 500 nits), 6GB RAM, 128GB storage and a 9340mAh battery designed for long video playback.',
    image: 'https://m.media-amazon.com/images/I/61NmETUvDiL._AC_UY218_.jpg',
    features: ['RAM: 6GB', 'Storage: 128GB', 'Display: 11" (500 nits)', 'Battery: 9340mAh', 'Connectivity: Wi‑Fi'],
  },
  {
    id: 64,
    name: 'Lenovo Idea Tab 8GB/256GB 11" 2.5K with Pen (B0FJG1V6RJ)',
    brand: 'Lenovo',
    category: 'Tablets',
    price: 25000,
    discountPrice: 23999,
    rating: 4.4,
    stock: 80,
    reviewsCount: 458,
    description:
      'Lenovo Idea Tab with pen support, 11" 2.5K display (500 nits), 8GB RAM, 256GB storage (expandable), quad speakers with Dolby Atmos and Android 15.',
    image: 'https://m.media-amazon.com/images/I/811f0wwClAL._AC_UY218_.jpg',
    features: ['RAM: 8GB', 'Storage: 256GB (Expandable)', 'Display: 11" 2.5K (500 nits)', 'Audio: 4 speakers (Dolby Atmos)', 'OS: Android 15', 'Pen: Included'],
  },
  {
    id: 65,
    name: 'Lenovo Tab 4GB/128GB 10.1" Metal Body (B0G24QRHLG)',
    brand: 'Lenovo',
    category: 'Tablets',
    price: 19000,
    discountPrice: 14999,
    rating: 4.3,
    stock: 80,
    reviewsCount: 463,
    description:
      'Lenovo Tab with 10.1" display, 4GB RAM, 128GB storage (expandable), metal body, dual speakers with Dolby Atmos and Android 14.',
    image: 'https://m.media-amazon.com/images/I/71PwporL-mL._AC_UY218_.jpg',
    features: ['RAM: 4GB', 'Storage: 128GB (Expandable)', 'Display: 10.1"', 'Build: Metal body', 'Audio: Dual speakers (Dolby Atmos)', 'OS: Android 14', 'Connectivity: Wi‑Fi'],
  },
  {
    id: 66,
    name: 'Apple iPad 11" (A16) 128GB Wi‑Fi 6 (B0DZ7B7HT9)',
    brand: 'Apple',
    category: 'Tablets',
    price: 34900,
    discountPrice: 34400,
    rating: 4.6,
    stock: 60,
    reviewsCount: 1400,
    description:
      'Apple iPad 11" with A16 chip, Liquid Retina display, 128GB storage, Wi‑Fi 6, 12MP front and rear cameras, Touch ID and all‑day battery life.',
    image: 'https://m.media-amazon.com/images/I/614DUOrmADL._AC_UY218_.jpg',
    features: ['Chipset: A16', 'Display: 11" Liquid Retina', 'Storage: 128GB', 'Connectivity: Wi‑Fi 6', 'Cameras: 12MP front + 12MP rear', 'Security: Touch ID'],
  },
  {
    id: 67,
    name: 'Redmi Pad 2 6GB/128GB 11" 2.5K 9000mAh (B0FBRVRF4F)',
    brand: 'Redmi',
    category: 'Tablets',
    price: 19999,
    discountPrice: 18999,
    rating: 4.3,
    stock: 70,
    reviewsCount: 610,
    description:
      'Redmi Pad 2 with 11" 2.5K display, 6GB RAM, 128GB storage, 9000mAh battery, Dolby Atmos support, HyperOS 2 and active pen support.',
    image: 'https://m.media-amazon.com/images/I/71MZu6Dzm+L._AC_UY218_.jpg',
    features: ['RAM: 6GB', 'Storage: 128GB', 'Display: 11" 2.5K', 'Battery: 9000mAh', 'OS: HyperOS 2', 'Stylus: Active pen support', 'Audio: Dolby Atmos'],
  },
  {
    id: 68,
    name: 'DOMO Slate SL39 4GB/32GB 10.1" 4G Dual SIM (B0GFWTG1P4)',
    brand: 'DOMO',
    category: 'Tablets',
    price: 24990,
    discountPrice: 7350,
    rating: 5.0,
    stock: 40,
    reviewsCount: 2,
    description:
      'DOMO Slate SL39 10.1" 4G tablet with 4GB RAM, 32GB storage (expandable), dual SIM slot, GPS and Bluetooth.',
    image: 'https://m.media-amazon.com/images/I/51tag-fWTBL._AC_UY218_.jpg',
    features: ['RAM: 4GB', 'Storage: 32GB (Expandable)', 'Display: 10.1"', 'Connectivity: 4G (Dual SIM)', 'GPS', 'Bluetooth'],
  },
  {
    id: 69,
    name: 'OnePlus Pad Go 2 8GB/128GB 12.1" 2.8K 120Hz (B0G4QQNK1K)',
    brand: 'OnePlus',
    category: 'Tablets',
    price: 29999,
    discountPrice: 27999,
    rating: 4.1,
    stock: 80,
    reviewsCount: 556,
    description:
      'OnePlus Pad Go 2 with 12.1" 2.8K display, Dolby Vision, 120Hz refresh rate, quad speakers, 8GB RAM, 128GB storage and 10050mAh battery.',
    image: 'https://m.media-amazon.com/images/I/61HTBi5HNQL._AC_UY218_.jpg',
    features: ['RAM: 8GB', 'Storage: 128GB', 'Display: 12.1" 2.8K 120Hz', 'HDR: Dolby Vision', 'Audio: Quad speakers', 'Battery: 10050mAh', 'Connectivity: Wi‑Fi'],
  },
  {
    id: 70,
    name: 'IWEGGO Android Tablet 18GB/128GB 10" (B0CDLBNZQH)',
    brand: 'IWEGGO',
    category: 'Tablets',
    price: 11480,
    discountPrice: 11480,
    rating: 4.0,
    stock: 25,
    reviewsCount: 186,
    description:
      'IWEGGO Android tablet with 10" HD touchscreen, up to 18GB RAM (marketing), 128GB storage (expandable), Wi‑Fi 6, Bluetooth 5.0 and 2‑in‑1 support.',
    image: 'https://m.media-amazon.com/images/I/715upBp3uML._AC_UY218_.jpg',
    features: ['RAM: up to 18GB', 'Storage: 128GB (Expandable)', 'Display: 10" HD', 'Connectivity: Wi‑Fi 6', 'Bluetooth: 5.0', '2‑in‑1'],
  },
  {
    id: 71,
    name: 'Redmi Pad 2 4GB/128GB 11" 2.5K 9000mAh (B0FBRS76BR)',
    brand: 'Redmi',
    category: 'Tablets',
    price: 16999,
    discountPrice: 16999,
    rating: 4.2,
    stock: 60,
    reviewsCount: 380,
    description:
      'Redmi Pad 2 Wi‑Fi tablet with 11" 2.5K display, 4GB RAM, 128GB storage, 9000mAh battery, Dolby Atmos and active pen support.',
    image: 'https://m.media-amazon.com/images/I/71XIM211EkL._AC_UY218_.jpg',
    features: ['RAM: 4GB', 'Storage: 128GB', 'Display: 11" 2.5K', 'Battery: 9000mAh', 'Audio: Dolby Atmos', 'Stylus: Active pen support', 'Connectivity: Wi‑Fi'],
  },
  {
    id: 72,
    name: 'Samsung Galaxy Tab S10 Lite 6GB/128GB 10.9" 90Hz (B0FNWRZSC5)',
    brand: 'Samsung',
    category: 'Tablets',
    price: 42999,
    discountPrice: 42999,
    rating: 4.4,
    stock: 50,
    reviewsCount: 136,
    description:
      'Samsung Galaxy Tab S10 Lite with S Pen in box, 10.9" display, 90Hz refresh rate, 6GB RAM, 128GB storage and IP42 rating.',
    image: 'https://m.media-amazon.com/images/I/61rPkLrppbL._AC_UY218_.jpg',
    features: ['RAM: 6GB', 'Storage: 128GB', 'Display: 10.9" 90Hz', 'Stylus: S Pen (in box)', 'Durability: IP42', 'Connectivity: Wi‑Fi + 5G (variant)'],
  },
  {
    id: 73,
    name: 'OnePlus Pad 12GB/256GB 29.49cm 144Hz (B0BY2ZZ4SJ)',
    brand: 'OnePlus',
    category: 'Tablets',
    price: 39999,
    discountPrice: 25990,
    rating: 4.5,
    stock: 40,
    reviewsCount: 735,
    description:
      'OnePlus Pad with 12GB RAM, 256GB storage, high refresh rate display, Dolby Vision/Atmos and Wi‑Fi with cellular data sharing.',
    image: 'https://m.media-amazon.com/images/I/61QnhDo0FEL._AC_UY218_.jpg',
    features: ['RAM: 12GB', 'Storage: 256GB', 'Display: 144Hz', 'Audio/Video: Dolby Vision + Atmos', 'Connectivity: Wi‑Fi (cellular sharing)'],
  },
  {
    id: 74,
    name: 'Lenovo Tab Plus 8GB/128GB 11.5" 2K 90Hz (B0D6G4CVZ7)',
    brand: 'Lenovo',
    category: 'Tablets',
    price: 32000,
    discountPrice: 22999,
    rating: 4.5,
    stock: 40,
    reviewsCount: 2000,
    description:
      'Lenovo Tab Plus with 11.5" 2K 90Hz display, 8GB RAM, 128GB storage, JBL Hi‑Fi speakers, Android 14 and 45W fast charger.',
    image: 'https://m.media-amazon.com/images/I/61ZEkMXevXL._AC_UY218_.jpg',
    features: ['RAM: 8GB', 'Storage: 128GB', 'Display: 11.5" 2K 90Hz', 'Audio: JBL Hi‑Fi speakers', 'Charging: 45W fast charger', 'OS: Android 14', 'Kickstand: Built‑in'],
  },
  {
    id: 75,
    name: 'Redmi Pad 2 Pro 8GB/128GB 12.1" 2.5K 12000mAh (B0GDPWLJMM)',
    brand: 'Redmi',
    category: 'Tablets',
    price: 29999,
    discountPrice: 25999,
    rating: 4.2,
    stock: 80,
    reviewsCount: 99,
    description:
      'Redmi Pad 2 Pro with 12.1" 2.5K display, 120Hz refresh rate, Snapdragon 7s Gen 4, 8GB RAM, 128GB storage and 12000mAh battery.',
    image: 'https://m.media-amazon.com/images/I/71t0olqGsFL._AC_UY218_.jpg',
    features: ['Chipset: Snapdragon 7s Gen 4', 'RAM: 8GB', 'Storage: 128GB', 'Display: 12.1" 2.5K 120Hz', 'Battery: 12000mAh', 'Connectivity: Wi‑Fi 6', 'OS: HyperOS 2'],
  },
  {
    id: 76,
    name: 'DOMO Slate SL39 4GB/32GB 10.1" 4G Dual SIM (B0GWMPF9PM)',
    brand: 'DOMO',
    category: 'Tablets',
    price: 24990,
    discountPrice: 7350,
    rating: 5.0,
    stock: 15,
    reviewsCount: 1,
    description:
      'DOMO Slate SL39 10.1" 4G tablet with 4GB RAM, 32GB storage (expandable), dual SIM, Bluetooth, GPS and octa‑core CPU.',
    image: 'https://m.media-amazon.com/images/I/51SvYkHmEcL._AC_UY218_.jpg',
    features: ['RAM: 4GB', 'Storage: 32GB (Expandable)', 'Display: 10.1"', 'Connectivity: 4G (Dual SIM)', 'CPU: Octa‑core', 'GPS', 'Bluetooth'],
  },
  {
    id: 77,
    name: 'IKALL N11 2GB/16GB 7" Android Tablet (B0DP5215CG)',
    brand: 'IKALL',
    category: 'Tablets',
    price: 5999,
    discountPrice: 3999,
    rating: 2.9,
    stock: 25,
    reviewsCount: 26,
    description:
      'IKALL N11 compact 7" tablet with Android, quad‑core processor, 2GB RAM, 16GB storage and 3000mAh battery.',
    image: 'https://m.media-amazon.com/images/I/61qvCinLhTL._AC_UY218_.jpg',
    features: ['RAM: 2GB', 'Storage: 16GB', 'Display: 7" HD', 'CPU: Quad‑core', 'Battery: 3000mAh', 'OS: Android'],
  },
  {
    id: 78,
    name: 'Acer Iconia 5G Tablet 8GB/128GB 11.45" 2.2K 90Hz (B0GQTJDRSL)',
    brand: 'Acer',
    category: 'Tablets',
    price: 44333,
    discountPrice: 25499,
    rating: 3.6,
    stock: 40,
    reviewsCount: 12,
    description:
      'Acer Iconia 5G tablet with 11.45" 2.2K 90Hz IPS display, MediaTek processor, 8GB RAM, 128GB storage, 16MP rear and 8MP front cameras and slim metal body.',
    image: 'https://m.media-amazon.com/images/I/71Le3xG8GUL._AC_UY218_.jpg',
    features: ['RAM: 8GB', 'Storage: 128GB', 'Display: 11.45" 2.2K 90Hz IPS', 'Cameras: 16MP rear + 8MP front', 'Connectivity: Wi‑Fi + 5G', 'Build: Slim metal body', 'OS: Android 15'],
  },
  {
    id: 79,
    name: 'Lenovo Idea Tab Pro Gen 2 8GB/256GB 13" 3.5K 144Hz (B0GWHYQW77)',
    brand: 'Lenovo',
    category: 'Tablets',
    price: 70000,
    discountPrice: 39999,
    rating: 5.0,
    stock: 15,
    reviewsCount: 4,
    description:
      'Lenovo Idea Tab Pro Gen 2 with Pen Plus, 13" 3.5K 144Hz display, 8GB RAM, 256GB storage, Snapdragon 8s Gen 4 and 10200mAh battery.',
    image: 'https://m.media-amazon.com/images/I/815gFtA2UVL._AC_UY218_.jpg',
    features: ['Chipset: Snapdragon 8s Gen 4', 'RAM: 8GB', 'Storage: 256GB', 'Display: 13" 3.5K 144Hz', 'Battery: 10200mAh', 'Connectivity: Wi‑Fi 7', 'Pen: Pen Plus'],
  },
  {
    id: 80,
    name: 'DOMO Slate SL39 4GB/32GB 10.1" 4G Dual SIM (B0GMJMGKRC)',
    brand: 'DOMO',
    category: 'Tablets',
    price: 24990,
    discountPrice: 7249,
    rating: 3.7,
    stock: 40,
    reviewsCount: 4,
    description:
      'DOMO Slate SL39 10.1" 4G tablet with 4GB RAM, 32GB storage (expandable), dual SIM slot, Bluetooth, GPS and octa‑core CPU.',
    image: 'https://m.media-amazon.com/images/I/71u0DGAYYML._AC_UY218_.jpg',
    features: ['RAM: 4GB', 'Storage: 32GB (Expandable)', 'Display: 10.1"', 'Connectivity: 4G (Dual SIM)', 'CPU: Octa‑core', 'GPS', 'Bluetooth'],
  },
];

const seedProducts: Product[] = [];

const mapImportedCategory = (rawCategory: string): Product['category'] => {
  const c = rawCategory.toLowerCase();
  if (c.includes('smartphone') || c.includes('phone')) return 'smartphones';
  if (c.includes('tablet')) return 'tablets';
  if (c.includes('laptop')) return 'laptops';
  if (c.includes('watch') || c.includes('wearable')) return 'wearables';
  return 'accessories';
};

const featuresToSpecs = (features: string[]): Record<string, string> => {
  const specs: Record<string, string> = {
    // Helps the product detail page show something even when a feature list is empty.
    'Feature Count': String(features.length),
  };

  features.forEach((feature, idx) => {
    const trimmed = feature.trim();
    if (!trimmed) return;

    const parts = trimmed.split(/:\s*/);
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();
      specs[key || `Feature ${idx + 1}`] = value || trimmed;
    } else {
      specs[`Feature ${idx + 1}`] = trimmed;
    }
  });

  return specs;
};

const seedMaxNumericId = Math.max(
  0,
  ...seedProducts.map(p => {
    const n = Number(p.id);
    return Number.isFinite(n) ? n : 0;
  })
);

const mappedImportedProducts: Product[] = importedProducts.map((p, idx) => {
  const hasDiscount = p.discountPrice < p.price;
  const finalPrice = hasDiscount ? p.discountPrice : p.price;

  return {
    id: String(seedMaxNumericId + 1 + idx),
    name: p.name,
    category: mapImportedCategory(p.category),
    price: finalPrice,
    originalPrice: hasDiscount ? p.price : undefined,
    badge: p.badge,
    rating: p.rating,
    reviews: typeof p.reviewsCount === 'number' ? p.reviewsCount : 300,
    image: p.image,
    description: p.description,
    specs: featuresToSpecs(p.features),
    inStock: p.stock > 0,
    isFeatured: Boolean(p.badge),
  };
});

export const products: Product[] = [...seedProducts, ...mappedImportedProducts];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    p =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
  );
}
