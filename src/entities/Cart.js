export default class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
