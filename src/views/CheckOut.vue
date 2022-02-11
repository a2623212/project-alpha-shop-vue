<template>
  <div class="container">
    <h1>結帳</h1>
    <div class="stepper">
      <Stepper />
    </div>
    <div>
      <form>
        <router-view />
      </form>
    </div>
    <div>
      <ShoppingCart />
    </div>
  </div>
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
