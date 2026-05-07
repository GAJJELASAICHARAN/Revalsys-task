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
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'Smartphones',
    price: 159999,
    discountPrice: 149999,
    rating: 4.8,
    stock: 25,
    description:
      '6.7-inch Super Retina XDR display with A17 Pro chip and advanced camera system.',
    image: 'https://example.com/images/iphone15promax.jpg',
    features: ['256GB Storage', 'Titanium Body', '48MP Camera', '5G Support'],
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 134999,
    discountPrice: 124999,
    rating: 4.7,
    stock: 40,
    description:
      'Flagship Android smartphone with AI-powered camera and Snapdragon processor.',
    image: 'https://example.com/images/s24ultra.jpg',
    features: ['512GB Storage', '200MP Camera', 'S-Pen Included', '120Hz Display'],
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    brand: 'Apple',
    category: 'Laptops',
    price: 129999,
    discountPrice: 119999,
    rating: 4.9,
    stock: 15,
    description:
      'Lightweight laptop powered by Apple M3 chip with all-day battery life.',
    image: 'https://example.com/images/macbookairm3.jpg',
    features: ['16GB RAM', '512GB SSD', '13.6-inch Display', '18 Hours Battery'],
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'Headphones',
    price: 34999,
    discountPrice: 29999,
    rating: 4.8,
    stock: 60,
    description:
      'Premium wireless noise-cancelling headphones with crystal-clear audio.',
    image: 'https://example.com/images/sonyxm5.jpg',
    features: ['Noise Cancellation', '30 Hours Battery', 'Bluetooth 5.3', 'Fast Charging'],
  },
  {
    id: 5,
    name: 'Dell XPS 15',
    brand: 'Dell',
    category: 'Laptops',
    price: 179999,
    discountPrice: 169999,
    rating: 4.6,
    stock: 10,
    description: 'High-performance laptop for creators and developers.',
    image: 'https://example.com/images/dellxps15.jpg',
    features: ['Intel i9 Processor', '32GB RAM', '1TB SSD', 'RTX 4060'],
  },
  {
    id: 6,
    name: 'Apple Watch Series 9',
    brand: 'Apple',
    category: 'Smart Watches',
    price: 45999,
    discountPrice: 41999,
    rating: 4.7,
    stock: 35,
    description:
      'Advanced smartwatch with fitness tracking and health monitoring.',
    image: 'https://example.com/images/applewatch9.jpg',
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Always-On Display'],
  },
  {
    id: 7,
    name: 'LG OLED C3 55-inch TV',
    brand: 'LG',
    category: 'Televisions',
    price: 149999,
    discountPrice: 139999,
    rating: 4.9,
    stock: 8,
    description:
      '55-inch 4K OLED smart TV with Dolby Vision and AI processor.',
    image: 'https://example.com/images/lgoledc3.jpg',
    features: ['4K OLED', '120Hz Refresh Rate', 'Dolby Atmos', 'WebOS'],
  },
  {
    id: 8,
    name: 'boAt Airdopes 141',
    brand: 'boAt',
    category: 'Earbuds',
    price: 4499,
    discountPrice: 1499,
    rating: 4.3,
    stock: 120,
    description: 'Affordable wireless earbuds with long battery backup.',
    image: 'https://example.com/images/airdopes141.jpg',
    features: ['42 Hours Playback', 'Bluetooth 5.1', 'Low Latency', 'Fast Charging'],
  },
  {
    id: 9,
    name: 'Canon EOS R50',
    brand: 'Canon',
    category: 'Cameras',
    price: 78999,
    discountPrice: 72999,
    rating: 4.6,
    stock: 12,
    description: 'Compact mirrorless camera ideal for photography and vlogging.',
    image: 'https://example.com/images/canonr50.jpg',
    features: ['24.2MP Sensor', '4K Video', 'Dual Pixel Autofocus', 'WiFi Connectivity'],
  },
  {
    id: 10,
    name: 'ASUS ROG Strix G16',
    brand: 'ASUS',
    category: 'Gaming Laptops',
    price: 159999,
    discountPrice: 149999,
    rating: 4.7,
    stock: 18,
    description: 'Gaming laptop with high refresh display and RTX graphics.',
    image: 'https://example.com/images/rogstrixg16.jpg',
    features: ['Intel i7 14th Gen', 'RTX 4070', '240Hz Display', '16GB RAM'],
  },
  // ... remaining imported products 11–40 unchanged ...
];

const seedProducts: Product[] = [
  {
    id: '1',
    name: 'ProBook Ultra 16',
    category: 'laptops',
    price: 183900,
    originalPrice: 223900,
    badge: 'Best Seller',
    rating: 4.8,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
    description: 'Ultra-thin laptop with stunning display and all-day battery',
    specs: {
      processor: 'Intel Core i9-13900K',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '16" OLED 3K',
      battery: '20+ hours',
    },
    inStock: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'XPhone 15 Pro Max',
    category: 'smartphones',
    price: 95900,
    badge: 'Best Seller',
    rating: 4.7,
    reviews: 1205,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop',
    description: 'Flagship smartphone with advanced camera system and powerful processor',
    specs: {
      processor: 'A17 Pro',
      camera: '48MP Main + 12MP Ultra-Wide',
      display: '6.7" Super Retina XDR',
      battery: '4000mAh',
      storage: '256GB',
    },
    inStock: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'TabMax Pro 12.9"',
    category: 'tablets',
    price: 79900,
    originalPrice: 95900,
    badge: 'Deal',
    rating: 4.6,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
    description: 'Premium tablet with M2 chip and stunning display for creative professionals',
    specs: {
      processor: 'M2 Chip',
      display: '12.9" Liquid Retina XDR',
      ram: '8GB',
      storage: '512GB SSD',
      battery: '10 hours',
    },
    inStock: true,
    isFeatured: false,
  },
  {
    id: '4',
    name: 'SoundPro Wireless Buds',
    category: 'accessories',
    price: 19900,
    originalPrice: 23900,
    badge: 'Deal',
    rating: 4.5,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    description: 'Premium wireless earbuds with active noise cancellation',
    specs: {
      'noise cancellation': 'Active ANC',
      battery: '6 hours (30 with case)',
      connectivity: 'Bluetooth 5.3',
      driver: '10mm Custom',
      codec: 'LDAC',
    },
    inStock: true,
    isFeatured: false,
  },
  {
    id: '5',
    name: 'SmartWatch Elite',
    category: 'wearables',
    price: 31900,
    badge: 'Best Seller',
    rating: 4.6,
    reviews: 723,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    description: 'Advanced smartwatch with health tracking and always-on display',
    specs: {
      display: '1.9" AMOLED Always-On',
      processor: 'S9 SiP',
      battery: '18+ hours',
      'water resistance': '50m',
      sensors: 'ECG, SpO2, Temperature',
    },
    inStock: true,
    isFeatured: true,
  },
  {
    id: '6',
    name: 'GameBook RTX Pro',
    category: 'laptops',
    price: 143900,
    originalPrice: 175900,
    badge: 'Deal',
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1588872657360-cbe660dbde36?w=400&h=400&fit=crop',
    description: 'High-performance gaming laptop with RTX 4090 graphics',
    specs: {
      processor: 'Intel i9-13900HX',
      gpu: 'NVIDIA RTX 4090',
      ram: '64GB DDR5',
      storage: '2TB SSD NVMe',
      display: '16" 240Hz QHD',
    },
    inStock: true,
    isFeatured: false,
  },
  {
    id: '7',
    name: 'StreamPhone X',
    category: 'smartphones',
    price: 55900,
    originalPrice: 63900,
    badge: 'New',
    rating: 4.4,
    reviews: 834,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
    description: 'Mid-range smartphone with excellent value and great performance',
    specs: {
      processor: 'Snapdragon 8 Gen 2',
      camera: '50MP Main + 12MP Ultra-Wide',
      display: '6.5" OLED 144Hz',
      battery: '5000mAh',
      storage: '256GB',
    },
    inStock: true,
    isFeatured: false,
  },
  {
    id: '8',
    name: 'UltraTab Lite',
    category: 'tablets',
    price: 35900,
    rating: 4.3,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Portable and affordable tablet perfect for reading and browsing',
    specs: {
      processor: 'A15 Bionic',
      display: '10.2" Retina',
      ram: '4GB',
      storage: '256GB',
      battery: '12 hours',
    },
    inStock: true,
    isFeatured: false,
  },
  {
    id: '9',
    name: 'CarConnect Hub',
    category: 'accessories',
    price: 14300,
    originalPrice: 18300,
    badge: 'Deal',
    rating: 4.5,
    reviews: 612,
    image: 'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=400&h=400&fit=crop',
    description: 'Advanced car dashboard system with wireless connectivity',
    specs: {
      display: '10" HD Touchscreen',
      connectivity: 'Wi-Fi 6, Bluetooth 5.2',
      storage: '128GB',
      'voice control': 'AI Assistant',
      compatibility: 'Universal',
    },
    inStock: false,
    isFeatured: false,
  },
  {
    id: '10',
    name: 'FitBand Pro',
    category: 'wearables',
    price: 15900,
    originalPrice: 19900,
    badge: 'Deal',
    rating: 4.4,
    reviews: 521,
    image: 'https://images.unsplash.com/photo-1575311373937-040b3e6f0b0b?w=400&h=400&fit=crop',
    description: 'Fitness tracker with advanced health monitoring',
    specs: {
      display: '1.4" Color AMOLED',
      battery: '14 days',
      'water resistance': '50m',
      sensors: 'HR, SpO2, Sleep',
      tracking: '100+ sports modes',
    },
    inStock: true,
    isFeatured: false,
  },
  {
    id: '11',
    name: 'CreativeBook Air M3',
    category: 'laptops',
    price: 95900,
    badge: 'New',
    rating: 4.6,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1520869f2b45-0cc60c46e5f8?w=400&h=400&fit=crop',
    description: 'Lightweight laptop designed for creators and professionals',
    specs: {
      processor: 'M3 Pro',
      ram: '16GB',
      storage: '512GB SSD',
      display: '14" Liquid Retina',
      battery: '18 hours',
    },
    inStock: true,
    isFeatured: false,
  },
  {
    id: '12',
    name: 'CompactPhone SE',
    category: 'smartphones',
    price: 34300,
    originalPrice: 39900,
    rating: 4.2,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop',
    description: 'Compact smartphone with powerful performance in a smaller package',
    specs: {
      processor: 'A16 Bionic',
      camera: '12MP',
      display: '5.4" Super Retina XDR',
      battery: '3000mAh',
      storage: '128GB',
    },
    inStock: true,
    isFeatured: false,
  },
];

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
