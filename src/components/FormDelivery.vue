<template>
  <div class="form-part">
    <h4>運送方式</h4>
    <div
      class="form-part__delivery"
      @change.stop.prevent="handleRadioSelected(deliveryFee)"
    >
      <div
        class="form-part__delivery__type"
        :class="{ checked: deliveryFee === '0' || !deliveryFee }"
      >
        <input
          name="delivery"
          id="s-delivery"
          type="radio"
          v-model="deliveryFee"
          value="0"
        />
        <label for="s-delivery">
          <span class="delivery-type d-block">標準運送</span>
          <span class="delivery-time d-block">約 3~7 個工作天</span>
          <span class="delivery-fee d-block">免費</span>
        </label>
      </div>
      <div
        class="form-part__delivery__type"
        :class="{ checked: deliveryFee === '500' }"
      >
        <input
          name="delivery"
          id="d-delivery"
          type="radio"
          v-model="deliveryFee"
          value="500"
        />
        <label for="d-delivery">
          <span class="delivery-type d-block">DHL 貨運</span>
          <span class="delivery-time d-block">48 小時內送到</span>
          <span class="delivery-fee d-block">$500</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormDelivery",
  props: {
    initialDeliveryFee: {
      type: Number,
      require: true,
    },
  },
  created() {
    this.fetchFee();
  },
  data() {
    return {
      deliveryFee: -1,
    };
  },
  methods: {
    fetchFee() {
      this.deliveryFee = this.initialDeliveryFee;
    },
    handleRadioSelected(deliveryFee) {
      const fee = Number(deliveryFee);
      this.$emit("after-select-radio", fee);
    },
  },
};
</script>
