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
main {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
