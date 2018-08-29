<template>
  <div>
    <h2>Posts</h2>
    <div v-for="post in posts" :key="post.id">
      <nuxt-link :to="post.permalink">{{post.title}}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  asyncData: async ({app}) => ({
    posts: await app.$content('/posts').getAll()
  })
}
</script>

