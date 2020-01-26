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
import navbar from '@/components/userpartials/userNav'
import sidebar from '@/components/userpartials/userSidebar'
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