// ============================================
// Craft Catalyst E-COMMERCE - DATA MANAGEMENT
// ============================================

const productsData = [
    // PROJECT KITS
    {
        id: 1,
        name: "Drone Starter Kit",
        description: "Beginner drone-building kit with motors & controller",
        price: 2999,
        category: "project-kits",
        image: "images/dronekit.jpeg",
        badge: "Trending"
    },
    {
        id: 2,
        name: "Solar Energy Kit",
        description: "Build working solar-powered projects",
        price: 399,
        category: "project-kits",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355472/search_images/5800ec9d31ad15a77c15145a56f3b9ad20b8c1ed.jpg"
    },
    {
        id: 3,
        name: "Hydraulic Lift Kit",
        description: "DIY hydraulic lift model using syringes & pipes",
        price: 299,
        category: "project-kits",
        image: "images/hydraulic-kit.jpeg"
    },
    {
        id: 4,
        name: "Bridge Model Kit",
        description: "Craft stick kit to build strong model bridges",
        price: 159,
        category: "project-kits",
        image: "images/bridge-kit.jpeg"
    },

    // PROJECT ITEMS
    {
        id: 12,
        name: "LED Assortment Pack",
        description: "100 LEDs in various colors",
        price: 149,
        category: "project-items",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355472/search_images/5e38d06f84ea7c87a06e8ced9d332d34b989d0bc.jpg"
    },
    {
        id: 13,
        name: "Resistor Kit",
        description: "300+ resistors in 30 different values",
        price: 499,
        category: "project-items",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355481/search_images/4220bca833fe5f1b0ce5e705675731a75b113f3d.jpg"
    },
    {
        id: 14,
        name: "Sensor Module Set",
        description: "10 different sensor modules for projects",
        price: 499,
        category: "project-items",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355481/search_images/a0e2991a09f25cc1aef3a3310d9cf07fa6458528.jpg"
    },
    {
        id: 15,
        name: "Mini Motor Pack",
        description: "Pack of 5 high-speed DC motors",
        price: 149,
        category: "project-items",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355481/search_images/a614c3635a78f3dcc5801269bb6e23f182d97aa2.jpg"
    },
    {
        id: 16,
        name: "Jumper Wire Pack",
        description: "40pcs male-to-male and female jump wires",
        price: 79,
        category: "project-items",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355649/search_images/13fd4604c5803eb4e6a4f8e2d632d2132a2a3af4.jpg"
    },
    {
        id: 17,
        name: "Glue Gun + Sticks",
        description: "Hot glue gun with 5 glue sticks",
        price: 249,
        category: "project-items",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355649/search_images/58bb5713da066bb23a2d8f6a8777eda5d6a3190a.jpg",
        badge: "Popular"
    },
    {
        id: 18,
        name: "Cardboard Sheets Pack",
        description: "Set of 10 strong A4 cardboard sheets",
        price: 99,
        category: "project-items",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355776/search_images/d6c9d069d9bfd992bff9741bfb4b9260f65294bd.jpg"
    },
    {
        id: 19,
        name: "Thermocol Sheets",
        description: "3 thick thermocol sheets for model making",
        price: 59,
        category: "project-items",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355776/search_images/a51378c8ee31746bb7946d0e79508ae995f2a969.jpg"
    },
    {
        id: 20,
        name: "Copper Wire Roll",
        description: "10m copper wire for motor and science projects",
        price: 59,
        category: "project-items",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355776/search_images/20459b8b562c6d4e5320e49c3ae39b2e438270c9.jpg"
    },

    // PRINTS
    {
        id: 21,
        name: "Black & White Prints",
        description: "High quality B&W printing per page",
        price: 2,
        category: "prints",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355775/search_images/e991eea6c7fcb2a3383a26d455b82fa2ae435d27.jpg"
    },
    {
        id: 22,
        name: "Color Prints",
        description: "Premium color printing per page",
        price: 5,
        category: "prints",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355775/search_images/e991eea6c7fcb2a3383a26d455b82fa2ae435d27.jpg"
    },
    {
        id: 23,
        name: "Project Report Binding",
        description: "Professional spiral binding service",
        price: 50,
        category: "prints",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355785/search_images/4d204fc91586c953002ff9c3a9602ac44f9319ed.jpg",
        badge: "Popular"
    },
    {
        id: 24,
        name: "A3 Poster Printing",
        description: "High-quality poster printing for school projects",
        price: 29,
        category: "prints",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355775/search_images/e991eea6c7fcb2a3383a26d455b82fa2ae435d27.jpg"
    },
    {
        id: 25,
        name: "Laminate Sheets",
        description: "Glossy lamination per sheet",
        price: 15,
        category: "prints",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355775/search_images/e991eea6c7fcb2a3383a26d455b82fa2ae435d27.jpg"
    },
    {
        id: 26,
        name: "Certificate Printing",
        description: "Premium certificate print with textured paper",
        price: 30,
        category: "prints",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355775/search_images/e991eea6c7fcb2a3383a26d455b82fa2ae435d27.jpg"
    },
    {
        id: 27,
        name: "Notebook Custom Cover",
        description: "Print custom notebook covers",
        price: 20,
        category: "prints",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355649/search_images/cbcf4ea1f748d2d1a7642a84910af8c650cd86f9.jpg"
    },
    {
        id: 28,
        name: "Chart Paper Prints",
        description: "Printed A2/A3 project charts",
        price: 20,
        category: "prints",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355775/search_images/e991eea6c7fcb2a3383a26d455b82fa2ae435d27.jpg"
    },
    {
        id: 29,
        name: "File Folder Printing",
        description: "Custom printed project folders",
        price: 40,
        category: "prints",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355775/search_images/e991eea6c7fcb2a3383a26d455b82fa2ae435d27.jpg"
    },

    // EMERGENCY ESSENTIALS
    {
        id: 31,
        name: "Emergency Stationery Kit",
        description: "Pen, pencil, eraser, ruler combo",
        price: 99,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355786/search_images/8d682152d455184d66c5da9f75b89f99aafc8a20.jpg",
        badge: "Fast"
    },
    {
        id: 32,
        name: "Scientific Calculator",
        description: "Casio FX-991EX scientific calculator",
        price: 899,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355481/search_images/964fe198d49d270e40ec84c6ed214f10eb345923.jpg"
    },
    {
        id: 33,
        name: "USB Flash Drive 32GB",
        description: "High-speed USB 3.0 flash drive",
        price: 399,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355481/search_images/1d81854f722b83f4b78974a9841af5d654722770.jpg"
    },
    {
        id: 34,
        name: "Emergency Charger",
        description: "Universal phone charger with cable",
        price: 299,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355785/search_images/3388b1a2cf5bdd57c9dc90b8f7f3321a6a544ab7.jpg",
        badge: "Hot"
    },
    {
        id: 35,
        name: "Portable Power Bank",
        description: "10000mAh compact power bank",
        price: 899,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355649/search_images/9d323bc0828ae5dcb0f8c432e615968e06098693.jpg"
    },
    {
        id: 36,
        name: "Emergency Umbrella",
        description: "Compact foldable umbrella",
        price: 249,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355660/search_images/972c13d8e59a30849b42f357304368af880bd89c.jpg"
    },
    {
        id: 37,
        name: "First Aid Mini Kit",
        description: "Bandages, antiseptic wipes, cotton, tape",
        price: 149,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1763739314/search_images/e9937c571595dd9084cbd470c4f2d11f3d0e0c78.jpg"
    },
    {
        id: 38,
        name: "Water Bottle 500ml",
        description: "Cold water for hot days & emergencies",
        price: 20,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355669/search_images/0bb2af45f316a0f80b8c1fbc7be386dcc5a62b10.jpg"
    },
    {
        id: 39,
        name: "Mask & Sanitizer Combo",
        description: "1 sanitizer + 2 masks",
        price: 49,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355776/search_images/fcad8007eac8ba2d04be553a2829f0956a7ec9ad.jpg"
    },
    {
        id: 40,
        name: "Energy Chocolate Bar",
        description: "Instant energy boost snack",
        price: 30,
        category: "essentials",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355785/search_images/d1f682304a871f9a1723724377fa53b7d0e976b6.jpg"
    },
 
    // STUDY SUPPLIES
    {
        id: 41,
        name: "Notebook Pack (5)",
        description: "Set of 5 ruled notebooks",
        price: 199,
        category: "study",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355649/search_images/cbcf4ea1f748d2d1a7642a84910af8c650cd86f9.jpg"
    },
    {
        id: 42,
        name: "Pen Set Premium",
        description: "Pack of 10 ballpoint pens",
        price: 99,
        category: "study",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355660/search_images/6c234b2321bef53f6dd3186023065fb1cea68161.jpg"
    },
    {
        id: 43,
        name: "Highlighter Set",
        description: "6 fluorescent highlighter markers",
        price: 99,
        category: "study",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355660/search_images/d85529cee33a3d06fedbfec47648aac33be10363.jpg"
    },
    {
        id: 44,
        name: "Sticky Notes Pack",
        description: "Colorful sticky notes",
        price: 49,
        category: "study",
        image: "https://m.media-amazon.com/images/I/71spLX1XYBL.jpg"
    },
    {
        id: 45,
        name: "Graph Paper Book",
        description: "100 sheets graph notebook",
        price: 89,
        category: "study",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355669/search_images/9c5f4960745c7f67276e1f3cfd9ce5c2426f3972.jpg"
    },
    {
        id: 46,
        name: "A4 Sheets Pack (100)",
        description: "High-quality A4 printing sheets",
        price: 119,
        category: "study",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355669/search_images/c7686f9e351cf1ea116cd7ea08b5c3563529aa5b.jpg"
    },
    {
        id: 47,
        name: "Eraser Pack (4)",
        description: "Smooth, dust-free erasers",
        price: 39,
        category: "study",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355669/search_images/40076c2a9ef1debba8fcd74bb331b66b3a3acdd0.jpg"
    },
    {
        id: 48,
        name: "Sharpener Metal",
        description: "Durable metal blade sharpener",
        price: 7,
        category: "study",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355669/search_images/bc71ed01bd9a2820457e839d821c7594c0cff53e.jpg"
    },
    {
        id: 49,
        name: "Geometry Box Premium",
        description: "Compass, divider, protractor & ruler",
        price: 159,
        category: "study",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355660/search_images/0e303672119b17a765f9b684cd9cffb5604e365b.jpg"
    },
    {
        id: 50,
        name: "Sticky Flags Set",
        description: "Colorful bookmarks for notes",
        price: 49,
        category: "study",
        image: "https://pplx-res.cloudinary.com/image/upload/v1764355785/search_images/f3ffab2bff333e585a5a62283cc80e90fce5c253.jpg"
    }
];

// Save to localStorage
localStorage.setItem('products', JSON.stringify(productsData));

// Configuration
const config = {
    deliveryCharge: 30,
    freeDeliveryThreshold: 500,
    taxRate: 0.18, // 18% GST
    promoCodes: {
        'FIRST50': { discount: 50, type: 'fixed' },
        'SAVE10': { discount: 10, type: 'percent' },
        'STUDENT20': { discount: 20, type: 'percent' }
    }
};
