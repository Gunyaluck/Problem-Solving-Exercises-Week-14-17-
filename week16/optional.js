function groupBy(items, property) {
    let fruit = [];
    let vegetable = [];

    for (let i=0; i<items.length; i++){
        if (items[i][property] === "fruit"){
            fruit.push(items[i]);
        } else {
            vegetable.push(items[i]);
        }
    }

    return {
        fruit: fruit,
        vegetable: vegetable
    };
 };
 
 let result1 = groupBy([
    { name: "Apple", type: "fruit" },
    { name: "Broccoli", type: "vegetable" },
    { name: "Banana", type: "fruit" }
 ], "type");
 
 console.log(result1);
 // {
 //   fruit: [
 //     { name: "Apple", type: "fruit" },
 //     { name: "Banana", type: "fruit" }
 //   ],
 //   vegetable: [
 //     { name: "Broccoli", type: "vegetable" }
 //   ]
 // }