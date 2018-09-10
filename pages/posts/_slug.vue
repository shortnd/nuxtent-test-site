<template>
  <section class="content-container">
    <h2>{{ post.title }}</h2>
    <nuxtent-body :body="post.body"/>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description }
      ]
    }
  },
  data: {
    // slides: this.post.galleryImages
  },
  asyncData: async ({ app, route, payload}) => ({
      post: await app.$content('/posts').get(route.path) || payload
  }),
}
</script>

<style>

</style>
