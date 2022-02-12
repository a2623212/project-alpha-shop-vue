<template>
  <div class="form-part">
    <h4>付款資訊</h4>
    <div class="form-part__payment">
      <div class="form-group">
        <label for="credit-name">持卡人姓名</label>
        <input
          type="text"
          class="form-control"
          name="credit-name"
          id="credit-name"
          v-model="name"
          placeholder="John Done"
          required
        />
      </div>
      <div class="form-group">
        <label for="credit-number">卡號</label>
        <input
          type="tel"
          name="credit-number"
          id="credit-number"
          v-model="cardNo"
          placeholder="1111 2222 3333 4444"
          pattern="[0-9\s]{13,19}"
          maxlength="19"
        />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="credit-expire">有效期限</label>
          <input
            type="tel"
            name="credit-expire"
            id="credit-expire"
            v-model="expire"
            placeholder="MM/YY"
            pattern="[0-9\s]{13,19}"
            maxlength="5"
          />
        </div>
        <div class="form-group">
          <label for="credit-cvc">CVC / CCV</label>
          <input
            type="tel"
            name="credit-cvc"
            id="credit-cvc"
            v-model="cvc"
            placeholder="123"
            pattern="[0-9\s]{13,19}"
            maxlength="3"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormPayment",
  data() {
    return {
      name: "",
      cardNo: "",
      expire: "",
      cvc: "",
    };
  },
};
</script>
