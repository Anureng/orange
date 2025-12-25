export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: 'men' | 'women' | 'kids' | 'accessories';
  subcategory: string;
  sizes: Size[];
  colors: Color[];
  material: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  inventory: number;
  sku: string;
  tags: string[];
}

export interface Size {
  id: string;
  size: string;
  label: string;
  available: boolean;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
  available: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  price: number;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
  address: Address;
  createdAt: string;
  loyaltyPoints: number;
  memberSince: string;
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
  orderDate: string;
  estimatedDelivery?: string;
  deliveredDate?: string;
}

export interface Review {
  id: string;
  productId: string;
  customerId: string;
  customerName: string;
  rating: number;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
  createdAt: string;
  images?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentId?: string;
  productCount: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minPurchase: number;
  maxUses: number;
  currentUses: number;
  startDate: string;
  endDate: string;
  active: boolean;
}

export interface WishlistItem {
  id: string;
  customerId: string;
  productId: string;
  product: Product;
  addedAt: string;
}

export interface Inventory {
  id: string;
  productId: string;
  size: string;
  color: string;
  quantity: number;
  reserved: number;
  available: number;
  warehouseLocation: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  cost: number;
  estimatedDays: number;
  available: boolean;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: 'credit_card' | 'debit_card' | 'paypal' | 'apple_pay' | 'google_pay';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId: string;
  processedAt: string;
}

export interface Owner {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  avatar?: string;
}

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Orange T-Shirt',
    description: 'Premium quality cotton t-shirt with signature orange branding',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    images: [],
    category: 'men',
    subcategory: 'tops',
    sizes: [
      { id: '1', size: 'S', label: 'Small', available: true },
      { id: '2', size: 'M', label: 'Medium', available: true },
      { id: '3', size: 'L', label: 'Large', available: true },
      { id: '4', size: 'XL', label: 'X-Large', available: true },
    ],
    colors: [
      { id: '1', name: 'Orange', hex: '#FF8C00', available: true },
      { id: '2', name: 'White', hex: '#FFFFFF', available: true },
    ],
    material: '100% Cotton',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    inventory: 245,
    sku: 'OA-TSHIRT-001',
    tags: ['casual', 'bestseller', 'orange'],
  },
  {
    id: '2',
    name: 'Urban Streetwear Hoodie',
    description: 'Comfortable hoodie perfect for casual wear',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1556821552-5f03c1b89f08?w=500&h=500&fit=crop',
    images: [],
    category: 'men',
    subcategory: 'outerwear',
    sizes: [
      { id: '1', size: 'S', label: 'Small', available: true },
      { id: '2', size: 'M', label: 'Medium', available: true },
      { id: '3', size: 'L', label: 'Large', available: true },
      { id: '4', size: 'XL', label: 'X-Large', available: false },
    ],
    colors: [
      { id: '1', name: 'Orange', hex: '#FF8C00', available: true },
      { id: '2', name: 'Black', hex: '#000000', available: true },
    ],
    material: '80% Cotton, 20% Polyester',
    rating: 4.7,
    reviews: 98,
    inStock: true,
    inventory: 187,
    sku: 'OA-HOOD-001',
    tags: ['hoodie', 'streetwear', 'popular'],
  },
  {
    id: '3',
    name: 'Women\'s Fitted Orange Dress',
    description: 'Elegant fitted dress with modern silhouette',
    price: 74.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1595777707802-e176fc7f913f?w=500&h=500&fit=crop',
    images: [],
    category: 'women',
    subcategory: 'dresses',
    sizes: [
      { id: '1', size: 'XS', label: 'X-Small', available: true },
      { id: '2', size: 'S', label: 'Small', available: true },
      { id: '3', size: 'M', label: 'Medium', available: true },
      { id: '4', size: 'L', label: 'Large', available: true },
      { id: '5', size: 'XL', label: 'X-Large', available: false },
    ],
    colors: [
      { id: '1', name: 'Orange', hex: '#FF8C00', available: true },
      { id: '2', name: 'Coral', hex: '#FF7F50', available: true },
    ],
    material: '95% Polyester, 5% Spandex',
    rating: 4.9,
    reviews: 203,
    inStock: true,
    inventory: 156,
    sku: 'OA-DRESS-001',
    tags: ['dress', 'elegant', 'women', 'bestseller'],
  },
  {
    id: '4',
    name: 'Premium Armani Pants',
    description: 'Sophisticated tailored pants with premium fabric blend, perfect for formal and business casual occasions',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    images: [],
    category: 'men',
    subcategory: 'pants',
    sizes: [
      { id: '1', size: '28', label: '28', available: true },
      { id: '2', size: '30', label: '30', available: true },
      { id: '3', size: '32', label: '32', available: true },
      { id: '4', size: '34', label: '34', available: true },
      { id: '5', size: '36', label: '36', available: true },
      { id: '6', size: '38', label: '38', available: true },
    ],
    colors: [
      { id: '1', name: 'Black', hex: '#000000', available: true },
      { id: '2', name: 'Navy', hex: '#000080', available: true },
      { id: '3', name: 'Charcoal', hex: '#36454F', available: true },
      { id: '4', name: 'Gray', hex: '#808080', available: true },
    ],
    material: '65% Wool, 30% Polyester, 5% Spandex',
    rating: 4.9,
    reviews: 312,
    inStock: true,
    inventory: 198,
    sku: 'OA-ARMANI-PANTS-001',
    tags: ['armani', 'formal', 'tailored', 'business', 'premium'],
  },
  {
    id: '5',
    name: 'Classic Denim Jeans',
    description: 'Timeless denim jeans with perfect fit and premium quality, suitable for casual and smart casual wear',
    price: 69.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop',
    images: [],
    category: 'men',
    subcategory: 'pants',
    sizes: [
      { id: '1', size: '28', label: '28', available: true },
      { id: '2', size: '30', label: '30', available: true },
      { id: '3', size: '32', label: '32', available: true },
      { id: '4', size: '34', label: '34', available: true },
      { id: '5', size: '36', label: '36', available: true },
      { id: '6', size: '38', label: '38', available: false },
    ],
    colors: [
      { id: '1', name: 'Dark Blue', hex: '#1E3A5F', available: true },
      { id: '2', name: 'Light Blue', hex: '#87CEEB', available: true },
      { id: '3', name: 'Black', hex: '#000000', available: true },
      { id: '4', name: 'Medium Blue', hex: '#4169E1', available: true },
    ],
    material: '100% Cotton Denim',
    rating: 4.8,
    reviews: 487,
    inStock: true,
    inventory: 342,
    sku: 'OA-DENIM-JEANS-001',
    tags: ['denim', 'jeans', 'casual', 'bestseller', 'classic'],
  },
];

export const OWNER: Owner = {
  id: 'owner-001',
  name: 'Hitesh Sidhani',
  email: 'hitesh@orangeapparels.com',
  phone: '+91-9876543210',
  businessName: 'Orange Apparels',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
};