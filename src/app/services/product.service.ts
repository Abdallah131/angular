import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Sony WH-1000XM5 Wireless Headphones',
      price: 399.99,
      description:
        'Industry-leading noise cancellation with Auto NC Optimizer, exceptional sound quality with LDAC and DSEE Extreme, 30-hour battery life with quick charging (3 min charge = 3 hours playback), speak-to-chat technology, multipoint connection. Premium comfort with soft fit leather.',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    },
    {
      id: 2,
      name: 'Apple Watch Series 9 GPS + Cellular',
      price: 499.99,
      description:
        'Advanced health monitoring with ECG, blood oxygen, and temperature sensors. Always-on Retina display, S9 SiP chip with double-tap gesture control, up to 18 hours battery life, water resistant to 50m, crash detection, emergency SOS, comprehensive fitness tracking with workout detection.',
      imageUrl:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    },
    {
      id: 3,
      name: 'Rain Design mStand Laptop Stand',
      price: 49.99,
      description:
        'Premium aluminum construction with single piece solid aluminum design, cable management, elevated ergonomic viewing angle (6 inches), improves airflow around laptop, compatible with all laptops and notebooks 10"-17", non-slip rubber base, sleek modern design matches MacBook aesthetic.',
      imageUrl:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    },
    {
      id: 4,
      name: 'Keychron K8 Pro Mechanical Keyboard',
      price: 109.99,
      description:
        'Hot-swappable mechanical switches (Gateron G Pro), wireless Bluetooth 5.1 and wired USB-C connectivity, RGB backlight with 18 lighting effects, 4000mAh battery (up to 240 hours), Mac and Windows compatible, aluminum frame, programmable keys via VIA software, tenkeyless compact design.',
      imageUrl:
        'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80',
    },
    {
      id: 5,
      name: 'Logitech MX Master 3S Wireless Mouse',
      price: 99.99,
      description:
        '8000 DPI precision sensor with quiet clicks (90% noise reduction), MagSpeed electromagnetic scrolling, 7 programmable buttons, multi-device connectivity (3 devices), USB-C quick charging (3 hours = 70 days), ergonomic design for all-day comfort, works on glass surfaces, Logi Options+ software customization.',
      imageUrl:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80',
    },
    {
      id: 6,
      name: 'Anker PowerExpand 8-in-1 USB-C Hub',
      price: 79.99,
      description:
        '4K HDMI output (30Hz), 100W Power Delivery pass-through charging, 3x USB 3.0 ports (5Gbps), SD & microSD card readers, Ethernet port (Gigabit), aluminum construction, universal compatibility with USB-C laptops, plug-and-play no drivers needed, compact portable design perfect for travel.',
      imageUrl:
        'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80',
    },
    {
      id: 7,
      name: 'Samsung T7 Portable SSD 2TB',
      price: 179.99,
      description:
        'Read speeds up to 1,050MB/s, write speeds up to 1,000MB/s, USB 3.2 Gen 2 interface, shock-resistant with internal frame protection (drop resistant up to 2 meters), password protection with AES 256-bit hardware encryption, compatible with PC, Mac, Android devices, compact credit card size design, includes USB-C to C and USB-C to A cables.',
      imageUrl:
        'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&q=80',
    },
    {
      id: 8,
      name: 'Logitech Brio 4K Ultra HD Webcam',
      price: 199.99,
      description:
        '4K Ultra HD video quality at 30fps (1080p at 60fps), HDR and RightLight 3 for optimized lighting, 5x digital zoom with autofocus, dual omnidirectional microphones with noise cancellation, 90-degree field of view, Windows Hello facial recognition, tripod-ready universal clip, works with all major video platforms.',
      imageUrl:
        'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&q=80',
    },
    {
      id: 9,
      name: 'BenQ ScreenBar Halo Monitor Light',
      price: 129.99,
      description:
        'Asymmetric optical design eliminates screen glare, wireless controller with ambient light sensor, adjustable color temperature (2700K-6500K), stepless dimming, backlight for wall illumination, USB-A powered (5V/1A), fits monitors 17"-32", eye-care certified, reduces eye strain during long work sessions.',
      imageUrl:
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
    },
    {
      id: 10,
      name: 'JBL Charge 5 Portable Speaker',
      price: 179.99,
      description:
        'Powerful JBL Pro Sound with dedicated tweeter and dual passive radiators, 20 hours of playtime, IP67 waterproof and dustproof, built-in powerbank to charge devices, PartyBoost feature to pair multiple speakers, durable fabric and rugged rubber housing, Bluetooth 5.1 connectivity, comes in 6 vibrant colors.',
      imageUrl:
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
    },
    {
      id: 11,
      name: 'Lamicall Adjustable Phone Stand',
      price: 19.99,
      description:
        'Heavy-duty aluminum alloy construction with premium quality, fully adjustable viewing angle and height, non-slip rubber pads protect device and surface, cable management slot, supports phones and tablets 4"-13", supports devices with cases, perfect for desk, kitchen, or office use, elegant minimalist design.',
      imageUrl:
        'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80',
    },
    {
      id: 12,
      name: 'JOTO Cable Management Organizer Kit',
      price: 24.99,
      description:
        'Complete 10-piece cable management solution: 5 cable clips (holds 5 cables each), 2 cable sleeves (19" each), 20 cable ties, adhesive cable drops, and cable box. Premium silicone material, strong 3M adhesive, perfect for desk, wall, car, or home office, organize charging cables, HDMI, USB, power cords.',
      imageUrl:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    },
    {
      id: 13,
      name: 'Dell UltraSharp 27" 4K USB-C Monitor',
      price: 649.99,
      description:
        '4K UHD resolution (3840x2160), IPS Black technology with 2000:1 contrast ratio, 99% sRGB color coverage factory calibrated, USB-C connectivity with 90W power delivery, built-in KVM switch, ComfortView Plus flicker-free screen with low blue light, height adjustable stand with pivot and tilt, VESA mountable.',
      imageUrl:
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
    },
    {
      id: 14,
      name: 'Blue Yeti USB Microphone',
      price: 129.99,
      description:
        'Professional three-capsule array for pristine audio, four pickup patterns (cardioid, bidirectional, omnidirectional, stereo), studio controls for headphone volume, pattern selection, instant mute, and mic gain, plug-and-play USB connectivity, compatible with Mac and PC, perfect for streaming, podcasting, voiceover, gaming.',
      imageUrl:
        'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80',
    },
    {
      id: 15,
      name: 'Herman Miller Aeron Chair (Remastered)',
      price: 1445.0,
      description:
        '8Z Pellicle suspension for breathability and support, PostureFit SL adjustable sacral and lumbar support, fully adjustable arms (height, width, depth, pivot), synchronized tilt mechanism, size B fits 90% of users, 12-year warranty, made from 49% recycled materials, ergonomically designed for 8+ hour workdays.',
      imageUrl:
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80',
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
