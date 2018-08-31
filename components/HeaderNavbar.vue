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
          <!-- {{posts}} -->
          <ul v-if="posts">
            <li v-for="post in posts" :key="post.id">
              <nuxt-link :to="post.permalink">{{post.title}}</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/projects">Projects</nuxt-link>
          <ul v-if="projects">
            <li v-for="project in projects" :key="project.id">
              <nuxt-link :to="project.permalink">{{project.title}}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      header_info: this.$store.state.site_info[0].body,
      posts: this.$store.state.posts_pages,
      projects: this.$store.state.pro_pages
    }
  },
}
</script>

<style scoped>
nav ul{float:right;position: relative;}
nav ul li {
  display: inline-block;
}
nav ul li a{
  padding: 0 10px;
  display:block;
}
nav ul li:hover ul{display:block}
nav ul ul {position: absolute;top:100%;margin:0;padding: 0;display:none;background:rgba(0,0,0,.2)}
nav ul ul li {display:block}
nav ul ul a{padding:15px;border-bottom:1px solid rgba(255,255,255,.8)}
</style>
