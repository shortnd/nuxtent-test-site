<template>
  <header>
    <div class="top-bar">
      <a :href="'tel:' + header_info.phone_number">{{ header_info.phone_number }}</a>
      <a :href="'mailto:' + header_info.email_address">{{ header_info.email_address }}</a>
      <a :href="'https://'+header_info.facebook_link" target="_blank">facebook</a>
    </div>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>

      <ul>
        <li>
          <nuxt-link to="/posts">Posts</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      header_info: this.$store.state.site_info[0].body 
    }
  },
}
</script>

<style scoped>
nav ul{float:right}
nav ul li {
  display: inline-block
}
nav ul li a{
  padding: 0 10px
}
</style>
