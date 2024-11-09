// src/productData.js

export const products = [
    {
      id: 1,
      name: "Smartphone",
      price: "$299",
      description: "Latest model with all-new features.",
      image: "data:image/jpeg;base64,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", 
      category: "Electronics",
      rating: 4
    },
    {
      id: 2,
      name: "T-shirt",
      price: "$19",
      description: "100% cotton, very comfortable.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTr3Jl9C6BzQJ6HjExWzauTyVAvIQjd0k1hQ&s", 
      category: "Clothing",
      rating: 3
    },
    {
      id: 3,
      name: "Laptop",
      price: "$899",
      description: "High-performance laptop for work and gaming.",
      image: "https://gamingxperts.pk/1203-large_default/hp-victus-16-r0073cl-gaming-entertainment-laptop.jpg", 
      category: "Electronics",
      rating: 5
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: "$59",
      description: "Brews the best coffee in minutes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERKGh0HBZw2w-eSgf9bVy3wjT-JUUvQYwrg&s", 
      category: "Home Appliances",
      rating: 4
    }
  ];
  