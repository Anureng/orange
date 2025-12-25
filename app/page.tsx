'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FormHeader from '@/components/form-header';
import FormField from '@/components/form-field';
import FormActions from '@/components/form-actions';
import { Shirt, ShoppingCart, Star, Users, Award, Mail, Phone, MapPin } from 'lucide-react';
import { Product, FEATURED_PRODUCTS, OWNER } from '@/lib/types';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [contactForm, setContactForm] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleContactFormChange = (field: keyof ContactFormData, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmitContact = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Contact Form Submitted:', contactForm);
    setFormSubmitted(true);
    setContactForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleCancelContact = () => {
    setContactForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  const filteredProducts = FEATURED_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  const cartCount = cartItems.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg">
              <Shirt className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Orange Apparels
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Owner: <span className="font-semibold text-orange-600">{OWNER.name}</span></span>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-orange-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section with Form Header */}
        <FormHeader
          title="Discover Premium Clothing"
          description="Explore our exclusive collection of high-quality apparel crafted for style and comfort"
          icon={Shirt}
          badge="New Arrivals"
          centered
        />

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search products by name or tag..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full border-orange-200 focus:border-orange-500"
          />
          <p className="text-sm text-gray-600 mt-2">
            Showing {filteredProducts.length} of {FEATURED_PRODUCTS.length} products
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map(product => (
            <Card
              key={product.id}
              className="hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
              onClick={() => handleSelectProduct(product)}
            >
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.originalPrice && (
                  <Badge className="absolute top-3 right-3 bg-orange-600 text-white">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pb-3 space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                  <span className="text-xs text-gray-600">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1">
                  {product.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="text-sm text-gray-600">
                  <p>Category: <span className="font-semibold capitalize">{product.category}</span></p>
                  <p>Material: {product.material}</p>
                  <p className={product.inStock ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {product.inStock ? `${product.inventory} In Stock` : 'Out of Stock'}
                  </p>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  onClick={() => handleAddToCart(product.id)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Unavailable'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your search.</p>
          </div>
        )}

        {/* Owner Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-orange-600 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Owner
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="text-lg font-bold text-gray-900">{OWNER.name}</p>
              <p className="text-sm text-gray-600">{OWNER.businessName}</p>
              <Badge className="mx-auto">Business Owner</Badge>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-orange-600 flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                Quality
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600">Premium quality clothing with ethical production standards</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-orange-600 flex items-center justify-center gap-2">
                <Star className="w-5 h-5" />
                Trusted
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600">4.8+ average rating from thousands of satisfied customers</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500">
          <FormHeader
            title="Get in Touch"
            description="Have questions? We'd love to hear from you. Contact us today!"
            icon={Mail}
            centered
          />

          {formSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold text-center">
                ✓ Thank you for contacting us! We'll get back to you soon.
              </p>
            </div>
          )}

          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                id="firstName"
                label="First Name"
                placeholder="Enter your first name"
                value={contactForm.firstName}
                onChange={(value) => handleContactFormChange('firstName', value)}
                required
              />
              <FormField
                id="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                value={contactForm.lastName}
                onChange={(value) => handleContactFormChange('lastName', value)}
                required
              />
            </div>

            <FormField
              id="email"
              type="email"
              label="Email"
              placeholder="your.email@example.com"
              value={contactForm.email}
              onChange={(value) => handleContactFormChange('email', value)}
              required
            />

            <FormField
              id="phone"
              type="tel"
              label="Phone Number"
              placeholder="+1 (555) 000-0000"
              value={contactForm.phone}
              onChange={(value) => handleContactFormChange('phone', value)}
              required
            />

            <FormField
              id="message"
              type="textarea"
              label="Message"
              placeholder="Tell us how we can help..."
              value={contactForm.message}
              onChange={(value) => handleContactFormChange('message', value)}
              required
            />
          </div>

          <FormActions
            onSubmit={handleSubmitContact}
            onCancel={handleCancelContact}
            submitText="Send Message"
            cancelText="Clear"
            submitVariant="default"
            alignment="center"
          />

          {/* Contact Information */}
          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{OWNER.email}</p>
                <p className="text-gray-600">Email</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-center md:text-left">
              <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{OWNER.phone}</p>
                <p className="text-gray-600">Phone</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-center md:text-left">
              <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{OWNER.businessName}</p>
                <p className="text-gray-600">Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Orange Apparels. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Owned and operated by {OWNER.name}</p>
        </div>
      </footer>
    </div>
  );
}