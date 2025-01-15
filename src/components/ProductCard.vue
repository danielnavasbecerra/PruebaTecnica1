<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-64 object-cover"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
      <p class="text-xl text-gray-500">${{ product.price }}</p>
      <button  @click="$emit('add-to-cart', product)"
        class="mt-4 w-full py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-400 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>
