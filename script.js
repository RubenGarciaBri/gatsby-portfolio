// const shoppinglistArray = [
//   ["Milk", 2],
//   ["Coffee", 5],
// ];

// const list = shoppinglistArray.reduce((acc, [item, price]) => {
//   acc[item] = price
//   return acc
// },{})

// async function fetch(url){ 
//     console.log(`S: ${url}`)
//     return new Promise(resolve => setTimeout(() => {
//     console.log(`E: ${url}`)
//     resolve()
// }, 2000))};

const urls = [
    "https://google.com",
    "https://linkedin.com",
    "https://sld.codes"
]

const fetchUrls = async () => {
  for(url of urls){
    await fetch(url)
  }
}

fetchUrls()