"use client";
import {
  Dialog,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  HomeModernIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  ShieldCheckIcon,
  PlayCircleIcon,
  PhoneIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

const products = [
  { name: "Home Decoration", description: "Home Furnishings", href: "#", icon: HomeModernIcon },
  { name: "CPU-SHIP", description: "Spare Part", href: "#", icon: CpuChipIcon },
  { name: "SmartPhone", description: "SmartPhone", href: "#", icon: DevicePhoneMobileIcon },
  { name: "Electronic", description: "Tv Desktop PC", href: "#", icon: TvIcon },
  { name: "Product Warranty", description: "Products guaranteed to be 100% authentic", href: "#", icon: ShieldCheckIcon },
];

const callsToAction = [
  { name: "Watch Ads", href: "#", icon: PlayCircleIcon },
  { name: "Contact Seller", href: "#", icon: PhoneIcon },
];

const productCards = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: 48,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: 35,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: 89,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 35,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Pencil Case',
    href: '#',
    price: 12,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
    imageAlt: 'Stylish pencil case for storing writing instruments.',
  },
  {
    id: 6,
    name: 'Notebook',
    href: '#',
    price: 15,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
    imageAlt: 'A beautiful notebook for writing notes.',
  },
  {
    id: 7,
    name: 'Backpack',
    href: '#',
    price: 45,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
    imageAlt: 'Durable backpack for daily use.',
  },
  {
    id: 8,
    name: 'Laptop Stand',
    href: '#',
    price: 25,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
    imageAlt: 'Adjustable laptop stand for ergonomic use.',
  },
  {
    id: 9,
    name: 'Wireless Mouse',
    href: '#',
    price: 30,
    imageSrc: 'https://image.made-in-china.com/2f0j00pNKVERgFbqrM/Wireless-Mouse-for-Laptop-2400-Dpi-Wireless-Computer-Mouse-with-6-Buttons-2-4G-Ergonomic-USB-Cordless-Mouse-15-Months-Battery-Life-Mouse-for-Laptop-PC-Mac-COM.webp',
    imageAlt: 'Ergonomic wireless mouse for better productivity.',
  },
  {
    id: 10,
    name: 'Smart Watch',
    href: '#',
    price: 199,
    imageSrc: 'https://image.made-in-china.com/202f0j00ZlaVMNIdwJYF/Simple-Lifestyle-Smart-Watch-for-Ios-Android-Exercise-Digital-Watches-Sports-Wrist-Smartwatch.jpg',
    imageAlt: 'Feature-rich smart watch for fitness tracking.',
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 100; // ค่าใช้จ่ายการจัดส่ง
    const discount = discountCode === "DISCOUNT" ? 10 : 0; // ใช้คูปองส่วนลด
    return subtotal + shipping - discount;
  };

  const handleCheckout = () => {
    const total = calculateTotal();
    setTotalPrice(total);
    // สามารถเพิ่มโค้ดสำหรับการชำระเงินที่นี่
  };

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
            </svg>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <PopoverGroup>
            <Popover>
              <PopoverButton className="inline-block text-gray-900">Products</PopoverButton>
              <PopoverPanel className="absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-gray-900/5">
                {products.map((product) => (
                  <a key={product.name} href={product.href} className="block p-4 hover:bg-gray-100">
                    <div className="flex items-center">
                      <product.icon className="h-6 w-6" aria-hidden="true" />
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-600">{product.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <button onClick={() => setCart([])} className="flex items-center text-gray-900">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="ml-2">Cart ({cart.length})</span>
          </button>
        </div>
      </nav>

      <div className="p-6">
        <h2 className="text-lg font-bold">Products</h2>
        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
          {productCards.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow">
              <img src={product.imageSrc} alt={product.imageAlt} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="fixed right-0 top-0 w-2/3 h-full bg-white p-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <h2 className="mt-4 text-lg font-bold">Menu</h2>
          <ul className="mt-4">
            {products.map((product) => (
              <li key={product.name} className="py-2">
                <a href={product.href} className="text-gray-700">{product.name}</a>
              </li>
            ))}
          </ul>
          <button onClick={() => setCart([])} className="flex items-center text-gray-900 mt-4">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="ml-2">Cart ({cart.length})</span>
          </button>
        </div>
      </Dialog>

      <div className="p-6">
        <h2 className="text-lg font-bold">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${item.price * item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between py-2">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="border rounded p-2 mr-2"
              />
              <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 rounded">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
