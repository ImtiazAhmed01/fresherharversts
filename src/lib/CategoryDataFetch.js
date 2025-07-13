
// export const CategoryDataFetch = async () => {
//     const res = await fetch(`http://localhost:3001/api/v1/category`);
//     const result = await res.json();
//     return result;
// }

// src/lib/fetchProducts.js
// lib/fetchProducts.js
export async function fetchProducts() {
    const res = await fetch("http://localhost:3001/api/v1/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    console.log("Fetched JSON:", json);

    // ✅ Extract products from response structure
    if (json.success && Array.isArray(json.products)) {
        return json.products;
    } else {
        throw new Error("Invalid response format");
    }
}
