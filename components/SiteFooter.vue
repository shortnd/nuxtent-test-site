<template>
  <footer>
    <div class="container">
      <span class="copyright">{{footer_info.copyright}}</span>
      <a id="login" href="/admin">Login</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footer_info: this.$store.state.site_info[1].body
    }
  }
}
</script>

<style scoped>
.container{
  margin: 0 auto;
  max-width:1200px;
  width:100%;
}
.container #login{float:right}
</style>
