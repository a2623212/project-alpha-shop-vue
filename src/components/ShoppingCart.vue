<template>
  <div id="shopping-cart_panel">
    <div class="cart-container">
      <div class="title">
        <h4>購物籃</h4>
      </div>
      <div class="items-panel">
        <div class="item">
          <img
            src="https://fakeimg.pl/300/"
            alt="item picture"
            class="picture"
          />
          <div class="info">
            <p class="info__product">破壞補丁修身牛仔褲</p>
            <div class="info__count">
              <div>
                <img
                  src="https://fakeimg.pl/50/"
                  alt=""
                  class="icon minus"
                  data-id="1"
                />
              </div>
              <div class="info__count--number">2</div>
              <div>
                <img
                  src="https://fakeimg.pl/50/"
                  alt=""
                  class="icon plus"
                  data-id="1"
                />
              </div>
            </div>
          </div>
          <div class="fee">$200</div>
        </div>
      </div>

      <div class="fee-panel__delivery">
        <h5>運費</h5>
        <span class="fee-panel__delivery--fee">免費</span>
      </div>
      <div class="fee-panel__total">
        <h5>小計</h5>
        <span class="fee-panel__total--fee">$5,298</span>
      </div>
    </div>
  </div>
</template>
