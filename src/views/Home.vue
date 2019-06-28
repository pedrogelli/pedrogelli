<template>
  <div class="home">
    <Header />
    <Links />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Links from "@/components/Links.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Links,
    Footer
  }
};
</script>
