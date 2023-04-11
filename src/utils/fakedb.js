// use local storage to manage cart data
const addToDb = (id) => {
  let appliedCart = getStoredCart();
  // add quantity
  const quantity = appliedCart[id];
  if (!quantity) {
    appliedCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    appliedCart[id] = newQuantity;
  }
  localStorage.setItem("appliedCart", JSON.stringify(appliedCart));
};

const removeFromDb = (id) => {
  const appliedCart = getStoredCart();
  if (id in appliedCart) {
    delete appliedCart[id];
    localStorage.setItem("appliedCart", JSON.stringify(appliedCart));
  }
};

const getStoredCart = () => {
  let newStoredCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("appliedCart");
  if (storedCart) {
    newStoredCart = JSON.parse(storedCart);
  }
  return newStoredCart;
};

const deleteFromCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, getStoredCart, deleteFromCart };
