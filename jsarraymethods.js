// 8 js array methods

//1 filter

const items = [
{name: 'Bike',      price:100},
{name: 'TV',        price:200},
{name: 'Album',     price:10},
{name: 'Book',      price:5},
{name: 'Phone',     price:500},
{name: 'Computer',  price:1000},
{name: 'Keyboard',  price:25}
]

/*const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(items)          // logs all items
console.log(filteredItems)  //filters selected items
*/

//2 map 3 find
  /*  
    const itemNames = items.map((item) => {  //itemPrices 4 prices / foundItem, .find
        return item.name  //replace name with price for prices / === 'Album' after item.name
    })
    
    console.log(itemNames)  //itemPrices / foundItem
*/
// 4 forEach    does not return anything and log in not needed

/*
items.forEach((item) => {
    console.log(item.name)      //price or any other thing
})
*/
//5 some / 6 every

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100        //returns true or false
})

console.log(hasInexpensiveItems)

//7 reduce

