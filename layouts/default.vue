<template>
  <div>
    <nav-bar />
    <side-bar />
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>
import navbar from '@/components/partials/adminNav'
import sidebar from '@/components/partials/adminSidebar'
export default {
  components: {
    'nav-bar': navbar,
    'side-bar': sidebar
  },
  mounted() {
    M.AutoInit()
  }
}
</script>
<style scoped>
</style>