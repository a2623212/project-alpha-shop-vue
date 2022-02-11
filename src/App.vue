<template>
  <div id="alpha-shop">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./../src/components/Navbar";
import Footer from "./../src/components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
#alpha-shop {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
main {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
