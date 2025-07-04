export const categoriesData = [
    {
        id: 1,
        name: 'Tarjetas Madre',
        description:
            'Componentes principales para la interconexión de todos los demás elementos de hardware.',
        createdAt: '2024-07-03T18:25:00Z', // Example timestamp
    },
    {
        id: 2,
        name: 'Tarjetas Gráficas',
        description:
            'Dispositivos encargados de procesar y renderizar imágenes para la salida de video.',
        createdAt: '2024-07-03T18:25:00Z',
    },
    {
        id: 3,
        name: 'Procesadores',
        description:
            'El cerebro del sistema, encargado de ejecutar instrucciones y procesar datos.',
        createdAt: '2024-07-03T18:25:00Z',
    },
];

export const productsData = [
    // --- Tarjetas Madre (Motherboards) ---
    {
        id: 1,
        name: 'ASUS ROG Strix Z790-E Gaming WiFi II',
        url_image:
            'https://dlcdnwebimgs.asus.com/files/media/E8F9316B-CB25-42B5-9422-CA99338CDB38/v1/img/spec/connectivity-m.png',
        description:
            'Motherboard de alto rendimiento para gaming con soporte para procesadores Intel de 14ª/13ª/12ª generación, DDR5, PCIe 5.0, WiFi 7 y soluciones de enfriamiento avanzadas.',
        price: 479.99,
        id_category: 1,
        available: 'active',
        stock: 50,
        createdAt: '2024-07-03T18:25:00Z',
        updatedAt: '2024-07-03T18:25:00Z',
    },
    {
        id: 2,
        name: 'MSI MAG B650 Tomahawk WiFi',
        url_image:
            'https://age.uz/upload/webp/resize_cache/fd4/400_400_1/29fv3yy2dnffcian0qbm7ka9wyx25mtg.webp',
        description:
            'Placa base ATX robusta para procesadores AMD Ryzen 7000/8000/9000, con soporte DDR5, PCIe 4.0, Wi-Fi 6E y soluciones térmicas premium para un rendimiento estable.',
        price: 199.99,
        id_category: 1,
        available: 'active',
        stock: 75,
        createdAt: '2024-07-03T18:25:00Z',
        updatedAt: '2024-07-03T18:25:00Z',
    },
    {
        id: 3,
        name: 'Gigabyte B650 AORUS Elite AX V2',
        url_image:
            'https://www.gigabyte.com/FileUpload/Global/KeyFeature/2518/innergigabyte/images/product/summary.png',
        description:
            'Placa base AM5 para AMD Ryzen 7000/8000/9000, con diseño VRM digital, soporte DDR5, PCIe 5.0 M.2, Wi-Fi 6E y características DIY-friendly.',
        price: 199.99,
        id_category: 1,
        available: 'active',
        stock: 60,
        createdAt: '2024-07-03T18:25:00Z',
        updatedAt: '2024-07-03T18:25:00Z',
    },

    // --- Tarjetas Gráficas (Graphics Cards) ---
    {
        id: 4,
        name: 'ASUS ROG Strix GeForce RTX 4070 Ti SUPER 16GB GDDR6X OC Edition',
        url_image:
            'https://dlcdnwebimgs.asus.com/files/media/798C35E3-EF80-4568-9071-F2B4A0F86703/v1/img/kv/pd.png',
        description:
            'Tarjeta gráfica de alto rendimiento con arquitectura NVIDIA Ada Lovelace, DLSS 3, trazado de rayos avanzado y un diseño térmico robusto con ventiladores Axial-tech.',
        price: 949.99,
        id_category: 2,
        available: 'active',
        stock: 30,
        createdAt: '2024-07-03T18:25:00Z',
        updatedAt: '2024-07-03T18:25:00Z',
    },
    {
        id: 5,
        name: 'ASRock AMD Radeon RX 7900 XTX Phantom Gaming 24GB OC',
        url_image:
            'https://pg.asrock.com/Graphics-Card/photo/Radeon%20RX%207900%20XTX%20Phantom%20Gaming%2024GB%20OC(L1).png',
        description:
            'Tarjeta gráfica de gama alta con GPU AMD RDNA 3, 24GB GDDR6, soporte PCIe 4.0, sistema de enfriamiento Phantom Gaming 3X y capacidad para 4K/8K.',
        price: 899.99,
        id_category: 2,
        available: 'active',
        stock: 25,
        createdAt: '2024-07-03T18:25:00Z',
        updatedAt: '2024-07-03T18:25:00Z',
    },

    // --- Procesadores (Processors) ---
    {
        id: 6,
        name: 'Intel Core i9-14900K',
        url_image: 'https://wiztech.com.ar/assets/images/products/procesador/14900_a.png',
        description:
            'Procesador de escritorio de 24 núcleos (8 P-cores + 16 E-cores) con hasta 6.0 GHz, 36MB de caché, gráficos Intel UHD Graphics 770 integrados y soporte para DDR4/DDR5.',
        price: 599.0,
        id_category: 3,
        available: 'active',
        stock: 40,
        createdAt: '2024-07-03T18:25:00Z',
        updatedAt: '2024-07-03T18:25:00Z',
    },
    {
        id: 7,
        name: 'AMD Ryzen 9 7950X3D',
        url_image: 'https://mlx.com.ar/wp-content/uploads/CPU012-1-1024x1024.webp',
        description:
            'Procesador de gaming de 16 núcleos con tecnología AMD 3D V-Cache, hasta 5.7 GHz, 128MB L3 Cache y gráficos AMD Radeon integrados, ideal para gamers y creadores.',
        price: 760.99,
        id_category: 3,
        available: 'active',
        stock: 35,
        createdAt: '2024-07-03T18:25:00Z',
        updatedAt: '2024-07-03T18:25:00Z',
    },
    {
        id: 8,
        name: 'Intel Core i7-14700K',
        url_image: 'https://c1.neweggimages.com/productimage/nb640/19-118-466-04.jpg',
        description:
            'Procesador de escritorio de 20 núcleos (8 P-cores + 12 E-cores) con hasta 5.6 GHz, 33MB de caché, gráficos Intel UHD Graphics 770 integrados y soporte para DDR4/DDR5.',
        price: 380.0,
        id_category: 3,
        available: 'active',
        stock: 45,
        createdAt: '2024-07-03T18:25:00Z',
        updatedAt: '2024-07-03T18:25:00Z',
    },
];