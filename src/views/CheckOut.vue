<template>
  <main class="container">
    <h2 id="main-title">結帳</h2>
    <div id="main-content">
      <section id="stepper">
        <Stepper />
      </section>
      <section id="form">
        <div id="main-content__form">
          <div id="main-content__form__form-panel">
            <form>
              <router-view />
            </form>
          </div>
        </div>
      </section>
      <section id="shopping-cart">
        <Shopping-cart />
      </section>
      <section id="btn-control">
        <div>
          <button id="btn-previous" class="btn-previous arrow-previous">
            上一步
          </button>
          <button id="btn-next" class="btn-next arrow-next">下一步</button>
          <button id="btn-done" class="btn-done btn-d-none">確認下單</button>
        </div>
      </section>
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
