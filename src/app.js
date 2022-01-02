import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    console.log(response);
    // Firstly, log response to the console,
    // inspect the response and see that it has data field

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const { data: products } = response;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((product) => {
      console.log(product.name);
    });

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable

    const mappedProducts = products
      .filter((product) => product.name.includes("Şal"))
      .map((product) => ({ image: product.image, name: product.name }));

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish

    const app = document.getElementById("app");
    mappedProducts.forEach((product) => {
      let card = `<div class="card">
      <img
        class="card__image"
        srcset="${product.image}
    "
      />
      <div class="card__name">${product.name}</div>
    </div>`;
      app.innerHTML += card;
    });
  });
