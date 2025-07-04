const categories = [
  {
    id: 1,
    name: "Tarjetas Madre",
    description: "Componentes principales para la interconexión de todos los demás elementos de hardware.",
    createdAt: "2024-07-03T18:25:00Z" // Example timestamp
  },
  {
    id: 2,
    name: "Tarjetas Gráficas",
    description: "Dispositivos encargados de procesar y renderizar imágenes para la salida de video.",
    createdAt: "2024-07-03T18:25:00Z"
  },
  {
    id: 3,
    name: "Procesadores",
    description: "El cerebro del sistema, encargado de ejecutar instrucciones y procesar datos.",
    createdAt: "2024-07-03T18:25:00Z"
  }
];

const products = [
  // --- Tarjetas Madre (Motherboards) ---
  {
    id: 1,
    name: "ASUS ROG Strix Z790-E Gaming WiFi II",
    url_image: "https://rog.asus.com/media/ROG_STRIX_Z790-E_GAMING_WIFI_II/ROG_STRIX_Z790-E_GAMING_WIFI_II_KV.webp",
    description: "Motherboard de alto rendimiento para gaming con soporte para procesadores Intel de 14ª/13ª/12ª generación, DDR5, PCIe 5.0, WiFi 7 y soluciones de enfriamiento avanzadas.",
    price: 479.99,
    id_category: 1, 
    available: "active",
    stock: 50,
    createdAt: "2024-07-03T18:25:00Z", 
    updatedAt: "2024-07-03T18:25:00Z" 
  },
  {
    id: 2,
    name: "MSI MAG B650 Tomahawk WiFi",
    url_image: "https://c1.neweggimages.com/productimage/nb640/13-144-557-08.jpg",
    description: "Placa base ATX robusta para procesadores AMD Ryzen 7000/8000/9000, con soporte DDR5, PCIe 4.0, Wi-Fi 6E y soluciones térmicas premium para un rendimiento estable.",
    price: 199.99,
    id_category: 1,
    available: "active",
    stock: 75,
    createdAt: "2024-07-03T18:25:00Z",
    updatedAt: "2024-07-03T18:25:00Z"
  },
  {
    id: 3,
    name: "Gigabyte B650 AORUS Elite AX V2",
    url_image: "https://c1.neweggimages.com/productimage/nb640/13-145-487-01.png",
    description: "Placa base AM5 para AMD Ryzen 7000/8000/9000, con diseño VRM digital, soporte DDR5, PCIe 5.0 M.2, Wi-Fi 6E y características DIY-friendly.",
    price: 199.99,
    id_category: 1,
    available: "active",
    stock: 60,
    createdAt: "2024-07-03T18:25:00Z",
    updatedAt: "2024-07-03T18:25:00Z"
  },

  // --- Tarjetas Gráficas (Graphics Cards) ---
  {
    id: 4,
    name: "ASUS ROG Strix GeForce RTX 4070 Ti SUPER 16GB GDDR6X OC Edition",
    url_image: "https://rog.asus.com/media/ROG_STRIX_RTX4070TIS_O16G_GAMING/ROG_STRIX_RTX4070TIS_O16G_GAMING_KV.webp",
    description: "Tarjeta gráfica de alto rendimiento con arquitectura NVIDIA Ada Lovelace, DLSS 3, trazado de rayos avanzado y un diseño térmico robusto con ventiladores Axial-tech.",
    price: 949.99,
    id_category: 2,
    available: "active",
    stock: 30,
    createdAt: "2024-07-03T18:25:00Z",
    updatedAt: "2024-07-03T18:25:00Z"
  },
  {
    id: 5,
    name: "ASRock AMD Radeon RX 7900 XTX Phantom Gaming 24GB OC",
    url_image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/661895_529131_01_front_comping.jpg",
    description: "Tarjeta gráfica de gama alta con GPU AMD RDNA 3, 24GB GDDR6, soporte PCIe 4.0, sistema de enfriamiento Phantom Gaming 3X y capacidad para 4K/8K.",
    price: 899.99,
    id_category: 2,
    available: "active",
    stock: 25,
    createdAt: "2024-07-03T18:25:00Z",
    updatedAt: "2024-07-03T18:25:00Z"
  },

  // --- Procesadores (Processors) ---
  {
    id: 6,
    name: "Intel Core i9-14900K",
    url_image: "https://c1.neweggimages.com/productimage/nb640/19-118-462-01.jpg",
    description: "Procesador de escritorio de 24 núcleos (8 P-cores + 16 E-cores) con hasta 6.0 GHz, 36MB de caché, gráficos Intel UHD Graphics 770 integrados y soporte para DDR4/DDR5.",
    price: 599.00,
    id_category: 3,
    available: "active",
    stock: 40,
    createdAt: "2024-07-03T18:25:00Z",
    updatedAt: "2024-07-03T18:25:00Z"
  },
  {
    id: 7,
    name: "AMD Ryzen 9 7950X3D",
    url_image: "https://c1.neweggimages.com/productimage/nb640/19-113-791-03.jpg",
    description: "Procesador de gaming de 16 núcleos con tecnología AMD 3D V-Cache, hasta 5.7 GHz, 128MB L3 Cache y gráficos AMD Radeon integrados, ideal para gamers y creadores.",
    price: 760.99,
    id_category: 3,
    available: "active",
    stock: 35,
    createdAt: "2024-07-03T18:25:00Z",
    updatedAt: "2024-07-03T18:25:00Z"
  },
  {
    id: 8,
    name: "Intel Core i7-14700K",
    url_image: "https://c1.neweggimages.com/productimage/nb640/19-118-466-04.jpg",
    description: "Procesador de escritorio de 20 núcleos (8 P-cores + 12 E-cores) con hasta 5.6 GHz, 33MB de caché, gráficos Intel UHD Graphics 770 integrados y soporte para DDR4/DDR5.",
    price: 380.00,
    id_category: 3,
    available: "active",
    stock: 45,
    createdAt: "2024-07-03T18:25:00Z",
    updatedAt: "2024-07-03T18:25:00Z"
  }
];

const apiResponse = {
  categories: categories,
  products: products
};

console.log(apiResponse);