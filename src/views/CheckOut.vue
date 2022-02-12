<template>
  <main class="container">
    <h2 id="main-title">結帳</h2>
    <div id="main-content">
      <section id="stepper">
        <Stepper :current-step="currentStep" />
      </section>
      <section id="form">
        <div id="main-content__form">
          <div id="main-content__form__form-panel">
            <form>
              <router-view
                :initial-delivery-fee="deliveryFee"
                @after-select-radio="afterSelectRadio"
              />
            </form>
          </div>
        </div>
      </section>
      <section id="shopping-cart">
        <Shopping-cart
          :initial-cart-items="cartItems"
          :delivery-fee="deliveryFee"
        />
      </section>
      <section id="btn-control">
        <div>
          <button
            id="btn-previous"
            class="btn-previous arrow-previous"
            :class="{ 'btn-d-none': isBeginning }"
            @click.stop.prevent="handlePreviousClick(currentStep)"
          >
            上一步
          </button>
          <button
            id="btn-next"
            class="btn-next arrow-next"
            :class="{ 'btn-d-none': isMiddle }"
            @click.stop.prevent="handleNextClick(currentStep)"
          >
            下一步
          </button>
          <button
            id="btn-done"
            class="btn-done"
            :class="{ 'btn-d-none': !isDone }"
          >
            確認下單
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Stepper from "./../components/Stepper.vue";
import ShoppingCart from "./../components/ShoppingCart.vue";
import { v4 as uuidv4 } from "uuid";
import imageA from "../assets/Block@picture1.png";
import imageB from "../assets/Block@picture2.png";

export default {
  name: "CheckOut",
  components: {
    Stepper,
    ShoppingCart,
  },
  data() {
    return {
      cartItems: [
        {
          id: uuidv4(),
          name: "破壞補丁修身牛仔褲",
          image: imageA,
          quantity: 1,
          uniPrice: 3999,
        },
        {
          id: uuidv4(),
          name: "刷色直筒牛仔褲",
          image: imageB,
          quantity: 1,
          uniPrice: 1299,
        },
      ],
      deliveryFee: 0,
      currentStep: 1,
      isDone: false,
      isMiddle: false,
      isBeginning: true,
    };
  },
  methods: {
    handleNextClick(step) {
      if (step === 1) {
        this.isBeginning = false;
        this.currentStep = 2;
      } else if (step === 2) {
        this.isDone = true;
        this.isMiddle = true;
        this.currentStep = 3;
      }
      this.handleNextRouter(step);
    },
    handlePreviousClick(step) {
      if (step === 3) {
        this.isDone = false;
        this.isMiddle = false;
        this.currentStep = 2;
      } else if (step === 2) {
        this.isBeginning = true;
        this.currentStep = 1;
      }
      this.handlePreviousRouter(step);
    },
    handleNextRouter(step) {
      this.$router.push({ path: `/checkout/${step + 1}` });
    },
    handlePreviousRouter(step) {
      this.$router.push({ path: `/checkout/${step - 1}` });
    },
    afterSelectRadio(fee) {
      this.deliveryFee = fee;
    },
  },
};
</script>
