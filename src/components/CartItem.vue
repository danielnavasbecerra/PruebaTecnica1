<template>
  <div class="cart-item">
    <img :src="product.image" alt="product.name" class="product-image" />
    <div class="details">
      <h2>{{ product.name }}</h2>
      <p>Precio: ${{ product.price }}</p>
      <p>Cantidad: {{ product.quantity }}</p>
      <p>Total: ${{ product.price * product.quantity }}</p>
      <div class="actions">
        <button @click="decrementQuantity">-</button>
        <button @click="incrementQuantity">+</button>
        <button @click="removeItem" class="remove">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  emits: ["updateQuantity", "remove"],
  methods: {
    incrementQuantity() {
      this.$emit("updateQuantity", this.product.id, this.product.quantity + 1);
    },
    decrementQuantity() {
      if (this.product.quantity > 1) {
        this.$emit(
          "updateQuantity",
          this.product.id,
          this.product.quantity - 1
        );
      }
    },
    removeItem() {
      this.$emit("remove", this.product.id);
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
}

.details {
  flex: 1;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}

.remove {
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
