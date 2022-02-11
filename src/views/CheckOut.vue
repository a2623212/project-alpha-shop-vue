<template>
  <main class="container">
    <h2 id="main-title">結帳</h2>
    <div id="main-content">
      <section class="stepper">
        <Stepper />
      </section>
      <section class="form">
        <div id="main-content__form">
          <div id="main-content__form__form-panel">
            <form></form>
          </div>
        </div>
      </section>
      <section class="shopping-cart">
        <Shopping-cart />
      </section>

      <div id="btn-control">
        <button
          id="btn-previous"
          class="btn-previous arrow-previous btn-d-none"
        >
          上一步
        </button>
        <button id="btn-next" class="btn-next arrow-next">下一步</button>
        <button id="btn-done" class="btn-done btn-d-none">確認下單</button>
      </div>
    </div>
  </main>
</template>

<script>
import Stepper from "./../components/Stepper";
import ShoppingCart from "./../components/ShoppingCart";
export default {
  name: "CheckOut",
  components: {
    Stepper,
    ShoppingCart,
  },
};
</script>
