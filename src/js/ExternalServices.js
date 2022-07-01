<<<<<<< HEAD
const baseURL = "http://157.201.228.93:2992/"
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices  {
=======
const baseURL = 'http://157.201.228.93:2992/';
// const baseURL = 'http://127.0.0.1:3000/';
async function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export default class ExternalServices {
>>>>>>> main
  constructor() {
    //Using the API means we don't need to tie the dataSource to a specific category anymore. So we can remove this in the constructor.
    // this.category = category;
    // this.path = `../json/${this.category}.json`;
<<<<<<< HEAD
   
=======
>>>>>>> main
  }
  getData(category) {
    // instead we will pass the category we want in here when we need it.
    return fetch(baseURL + `products/search/${category}`)
<<<<<<< HEAD
      .then(convertToJson).then((data) => data.Result);
=======
      .then(convertToJson)
      .then((data) => data.Result);
>>>>>>> main
  }
  async findProductById(id) {
    //const products = await this.getData()
    //return products.find((item) => item.Id === id);
    // the API allows us to pull products directly from it by ID...so we can change this method as well to take advantage of that.
<<<<<<< HEAD
    return await fetch(baseURL + `product/${id}`).then(convertToJson)
=======
    return await fetch(baseURL + `product/${id}`)
      .then(convertToJson)
>>>>>>> main
      .then((data) => data.Result);
  }
  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + 'checkout/', options).then(convertToJson);
  }
}