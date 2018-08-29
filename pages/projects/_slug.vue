<template>
  <section class="content-container">
    <h2>{{project.title}}</h2>
    <nuxtent-body :body="project.body"/>
  </section>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload}) => ({
    project: await app.$content('/projects').get(route.path) || payload
  })
}
</script>

<style>

</style>
