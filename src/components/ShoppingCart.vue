<template>
  <div id="shopping-cart_panel">
    <div class="cart-container">
      <div class="title">
        <h4>購物籃</h4>
      </div>
      <div class="items-panel">
        <div class="item" v-for="item in cartItems" :key="item.id">
          <img :src="item.image" alt="item picture" class="picture" />
          <div class="info">
            <p class="info__product">{{ item.name }}</p>
            <div class="info__count">
              <div>
                <img
                  src="../assets/icon/outline_remove_black_24dp.png"
                  alt=""
                  class="icon minus"
                  @click.stop.prevent="handleRemoveClick(item.id)"
                />
              </div>
              <div class="info__count--number">{{ item.quantity }}</div>
              <div>
                <img
                  src="../assets/icon/outline_add_black_24dp.png"
                  alt=""
                  class="icon plus"
                  @click.stop.prevent="handlePlusClick(item.id)"
                />
              </div>
            </div>
          </div>
          <div class="fee">
            $ {{ (item.uniPrice * item.quantity).toLocaleString() }}
          </div>
        </div>
      </div>

      <div class="fee-panel__delivery">
        <h5>運費</h5>
        <span class="fee-panel__delivery--fee">{{
          deliveryFee ? `$ ${deliveryFee}` : "免費"
        }}</span>
      </div>
      <div class="fee-panel__total">
        <h5>小計</h5>
        <span class="fee-panel__total--fee"
          >$ {{ totalFee.toLocaleString() }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    initialCartItems: {
      type: Array,
      required: true,
    },
    deliveryFee: {
      type: Number,
      required: true,
    },
  },
  created() {
    this.fetchItems();
  },
  updated() {
    this.subtotal();
  },
  data() {
    return {
      cartItems: [
        {
          id: -1,
          name: "",
          image: "",
          quantity: 0,
          uniPrice: -1,
        },
      ],
      totalFee: 5298,
    };
  },
  methods: {
    fetchItems() {
      this.cartItems = this.initialCartItems;
    },
    handlePlusClick(itemId) {
      this.cartItems = this.cartItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    },
    handleRemoveClick(itemId) {
      this.cartItems = this.cartItems.map((item) => {
        if (item.id === itemId) {
          if (!item.quantity) {
            return item;
          }
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    },
    subtotal() {
      const itemAmountArray = this.cartItems.map(
        (item) => item.quantity * item.uniPrice
      );
      const total = itemAmountArray.reduce((a, b) => a + b);
      this.totalFee = total + this.deliveryFee;
    },
  },
};
</script>
