// Customer data
let customers = [
    {
        name: "Hilliary Duck",
        email: "HilliaryDuck@Gmail.com",
        purchases: ["Iphone","AirPods","TypeCCable"]
    },
    {
        name: "Jeffery Mouse",
        email: "JefferyMouse@Gmail.com",
        purchases: ["Apple Watch", "iPad"]
    },
    {
        name: "Bill Duck",
        email: "BillDuck@Gmail.com",
        purchases: ["MacMini", "Magic Mouse"]
    }
];
// Adds a new customer
customers.push( {
    name: "Donald Duck",
    email: "DonaldDuck@Gmail.com",
    purchases: ["MacBook", "Golden iPhone"]
});
// Removes the first customer

customers.shift();

// Updates the second customer's email and adds a new purchase

customers[1].email = "Island1234@Gmail.com";

customers[1].purchases.push("AirPods");

console.log(customers);

