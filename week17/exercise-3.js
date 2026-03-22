function filterProducts(products, targetCategory, targetPrice) {
    let targetProducts = [];
    for (let i=0; i<products.length; i++){
        if(products[i].category === targetCategory && products[i].price <= targetPrice){
            targetProducts.push(products[i]);
        }
    }

    return targetProducts;
 };
 
 let result = filterProducts([
    { name: "Notebook", category: "stationery", price: 50 },
    { name: "Pen", category: "stationery", price: 20 },
    { name: "Shoes", category: "fashion", price: 90 },
    { name: "Bag", category: "fashion", price: 300 },
    { name: "Pencil", category: "stationery", price: 10 }
 ], "stationery", 30);
 
 console.log(result);
 // Expected Output:
 // [
 //   { name: "Pen", category: "stationery", price: 20 },
 //   { name: "Pencil", category: "stationery", price: 10 }
 // ]