interface Product{
    name:string;
    price:number;
    cost:number;
    quantity:number;

}
const products: Array<Product> = [
  { name: "Oil", price: 100, cost: 300, quantity: 4 },
  { name: "Rice", price: 200, cost: 100, quantity: 5 },
  { name: "Soap", price: 50, cost: 50, quantity: 10 },
  { name: "Milk", price: 30, cost: 50, quantity: 2 },
  { name: "Sugar", price: 150, cost: 100, quantity: 3 },
  { name: "Bread", price: 20, cost: 25, quantity: 4 },
];
const n:number=products.length;
function printProducts(products:Array<Product>){
    for(const p of products ){
    
        console.log(p.name , p.price , p.cost,p.quantity);
        console.log(p.name +" Profit: "+ TotalProfit(p) +" Margin: "+Margin(p).toFixed(1))
    }
}
printProducts(products);
function TotalProfit(prodcut:Product):number{
    let profit:number;
    profit=(prodcut.price-prodcut.cost)*prodcut.quantity;
    return profit;
}
function Margin(prodcut:Product):number{
    let margin:number;
    margin=(prodcut.price-prodcut.cost)/prodcut.price  *100;
    return margin;
}
function HighestProfit(products:Array<Product>):Product | undefined{
  let best : Product | undefined;
  for(const p of products){
  if(best==undefined || TotalProfit(p)> TotalProfit(best)){
    best=p
  }}
return best}
    let highestproduct:Product | undefined=HighestProfit(products);
    if(highestproduct!=undefined){
    console.log("The highest profit of all is : "+highestproduct.name +" "+ highestproduct.price +" "+ highestproduct.cost+" "+highestproduct.quantity);
    }
const ProductsName=products.map((x)=>x.name);//so map it take the array we gave him and based on condition ro work we gave him it return new array form the old one 
console.log(ProductsName)
const Profits=products.map((x)=>TotalProfit(x));
console.log(Profits)
console.log(products.filter(n=>Margin(n)>25))//it aslo give us a new array but only those who pass the condtion or satsfy 
console.log(products.filter(n=>TotalProfit(n)<0))
console.log(products.reduce((total,n)=>total+TotalProfit(n),0))//this only return one thing using hte aray we give him 
console.log(products.reduce((biggest,n)=> TotalProfit(n)>TotalProfit(biggest)? n:biggest))


