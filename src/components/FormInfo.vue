<template>
  <div class="form-part">
    <h4>寄送地址</h4>
    <div class="form-part__address">
      <div class="form-row">
        <div class="form-group select-wrapper form-group-title">
          <label for="title">稱謂</label>
          <select name="title" id="title">
            <option value="1">先生</option>
            <option value="2">小姐</option>
          </select>
        </div>
        <div class="form-group form-group-name">
          <label for="name">姓名</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="name"
            placeholder="請輸入姓名"
            required
          />
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group form-group-tel">
          <label for="phone">電話</label>
          <input
            type="tel"
            class="form-control"
            name="phone"
            id="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="請輸入行動電話"
            required
          />
        </div>
        <div class="form-group form-group-email">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>
      <div class="form-row-3">
        <div class="form-group form-group-city">
          <label for="city">縣市</label>
          <input
            list="city-of-taiwan"
            class="form-control"
            name="city"
            id="city"
          />
          <datalist id="city-of-taiwan">
            <datalist id="city-of-taiwan">
              <option value="基隆市"></option>
              <option value="台北市"></option>
              <option value="新北市"></option>
              <option value="桃園市"></option>
              <option value="新竹縣"></option>
              <option value="新竹市"></option>
              <option value="苗栗縣"></option>
              <option value="台中市"></option>
              <option value="彰化縣"></option>
              <option value="雲林縣"></option>
              <option value="嘉義縣"></option>
              <option value="台南市"></option>
              <option value="高雄市"></option>
              <option value="屏東縣"></option>
              <option value="台東縣"></option>
              <option value="花蓮縣"></option>
              <option value="澎湖縣"></option>
              <option value="金門縣"></option>
              <option value="連江縣"></option>
            </datalist>
          </datalist>
        </div>
        <div class="form-group form-group-address">
          <label for="address">地址</label>
          <input
            type="text"
            class="form-control"
            name="address"
            id="address"
            placeholder="請輸入地址 "
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>
