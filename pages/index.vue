<template>
  <section class="home-container">
    <div>
      <h2 class="home-slogan">
        Seamlessly use content files in your Nuxt.js sites.
      </h2>
      <h3>Posts</h3>
      <div v-for="post in posts" :key="post.id">
        <nuxt-link :to="post.permalink">{{post.title}}</nuxt-link>
      </div>
      <h3>Projects</h3>
      <div v-for="project in projects" :key="project.id">
        <nuxt-link :to="project.permalink">{{project.title}}</nuxt-link>
      </div>
    </div>
    <script>
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    </script>
  </section>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}
      ]
    }
  },
  data() {
  },
  asyncData: async ({app}) => ({
      posts: await app.$content('/posts').getAll(),
      projects: await app.$content('/projects').getAll()
  })
}
</script>

<style>
.home-container {
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.home-slogan {
  font-weight: 300;
  font-size:42px;
  color:#526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.home-links {
  padding-top: 15px;
}

</style>
