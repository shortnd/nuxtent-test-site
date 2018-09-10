<template>
  <div>
    <h2>Projects</h2>
    <div v-if="projects.length > 0">
      <div v-for="project in projects" :key="project.id">
        <nuxt-link :to="project.permalink">{{project.title}}</nuxt-link>
      </div>
    </div>
    <div v-else>
      There are no projects
    </div>
    <!-- <div v-else>
      There are no current projects
    </div> -->
  </div>
</template>

<script>
export default {
  asyncData: async ({app}) => ({
    projects: await app.$content('/projects').getAll()
  })
}
</script>

<style>

</style>
