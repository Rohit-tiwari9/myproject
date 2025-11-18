const products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 79999,
        category: "Smartphones",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
        description: "The latest iPhone with advanced camera system, powerful A17 Pro chip, and all-day battery life."
    },
    {
        id: 2,
        name: "Samsung S23",
        price: 74999,
        category: "Smartphones",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        description: "Samsung Galaxy S23 with stunning display, powerful Snapdragon processor, and versatile camera."
    },
    {
        id: 3,
        name: "MacBook Air M2",
        price: 104999,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
        description: "Apple MacBook Air with M2 chip, up to 18 hours of battery life, and stunning Liquid Retina display."
    },
    {
        id: 4,
        name: "Dell XPS 13",
        price: 129999,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        description: "Dell XPS 13 with InfinityEdge display, powerful Intel processors, and premium build quality."
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        price: 34999,
        category: "Headphones",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
        description: "Sony WH-1000XM5 wireless noise-cancelling headphones with industry-leading call quality."
    },
    {
        id: 6,
        name: "JBL Tune 760NC",
        price: 7999,
        category: "Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        description: "JBL Tune 760NC wireless headphones with active noise cancellation and 50 hours of battery life."
    },
    {
        id: 7,
        name: "Apple Watch Series 9",
        price: 41999,
        category: "Smartwatches",
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400",
        description: "Apple Watch Series 9 with advanced health monitoring, GPS, and cellular connectivity."
    },
    {
        id: 8,
        name: "Samsung Galaxy Watch 6",
        price: 29999,
        category: "Smartwatches",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        description: "Samsung Galaxy Watch 6 with comprehensive health tracking and long battery life."
    },
    {
        id: 9,
        name: "Canon EOS 1500D",
        price: 39999,
        category: "Cameras",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
        description: "Canon EOS 1500D DSLR camera with 24.1MP sensor and Full HD video recording."
    },
    {
        id: 10,
        name: "Nikon D5600",
        price: 52999,
        category: "Cameras",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
        description: "Nikon D5600 DSLR camera with 24.2MP sensor, vari-angle touchscreen, and 4K UHD video."
    }
];

function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

function getProductsByCategory(category, excludeId = null) {
    return products.filter(product => 
        product.category === category && product.id !== excludeId
    );
}