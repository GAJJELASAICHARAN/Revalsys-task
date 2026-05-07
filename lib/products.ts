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
