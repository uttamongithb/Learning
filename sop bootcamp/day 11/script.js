function fetchUser(userId) {
  console.log("Fetching user data...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 101, name: "John Doe" });
    }, 3000);
  });
}

function fetchOrders(userId) {
  console.log("Fetching user data...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 201 },
        { id: 202 },
        { id: 203 }
      ]);
    }, 3000);
  });
}


function fetchOrderDetails(orderId) {
  console.log("Fetching user data...", orderId);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ product: "Laptop", productId: 301 });
    }, 3000);
  });
}


function fetchProductReviews(productId) {
  console.log("Fetching product reviews...", productId);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { text: "Great product!" },
        { text: "Not bad." },
        { text: "Could be better." }
      ]);
    }, 3000);
  });
}

// fetchUser(1)
//   .then((user) => {
//     console.log("Date of User:===>", user.name);
//     return fetchOrders(user.id);
//   })
//   .then((orders) => {
//     console.log("Number of Orders:===>", orders.length);
//     return fetchOrderDetails(orders[0].id);
//   })
//   .then((details) => {
//     console.log("Order details:===>", details.product);
//     return fetchProductReviews(details.productId);
//   })
//   .then((reviews) => {
//     console.log("Product reviews:===>", reviews[0].text);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });clear


  async function getUserData() {
  try {
    const user = await fetchUser(1);
    console.log("Date of User:===>", user.name);

    const orders = await fetchOrders(user.id);
    console.log("Number of Orders:===>", orders.length);

    const details = await fetchOrderDetails(orders[0].id);
    console.log("Order details:===>", details.product);

    const reviews = await fetchProductReviews(details.productId);
    console.log("Product reviews:===>", reviews[0].text);
  } catch (err) {
    console.error("Error:", err);
  }
}

getUserData()








// function fetchUser(userId, callback) {
//     console.log('Fetching user data.....')

//     setTimeout(() => {
//         const user = {
//             id: 101,
//             name: 'john doe'
//         }
//     }, 1000);
// }


// function fetchOrders(userId, callback) {
//     console.log('Fetching user data.....')

//     setTimeout(() => {
//         const order = [
//             { id: 201, },
//             { id: 202, },
//             { id: 203, }
//         ]

//     }, 1000);
// }



// function fetchOrderDetails(productId, callback) {
//     console.log('Fetching product reviews.....', productId)

//     setTimeout(() => {
//         const details = { product: 'Laptop', ProductId: '301' }
//     }, 1000);
// }


// function fetchProductReviews(productId, callback) {
//     console.log('Fetching product reviews.....', productId)

//     setTimeout(() => {
//         const reviews = [
//             { text: 'Great product' },
//             { text: 'not bad' },
//             { text: 'could better' }
//         ]
//     }, 1000);
// }


// fetchUser(1, () => {
//     console.log('User data', user.name)
//     fetchOrders(user.id, (orders) => {
//         console.log('User orders', orders.length)
//         fetchOrderDetails(orders[0].id, (details) => {
//             fetchProductReviews(details.productId, (reviews) => {

//             })
//         })

//     })
// })