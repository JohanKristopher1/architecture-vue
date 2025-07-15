<template>
    <main>
      <AboutComponents
      :name="profile.name"
      :bio="profile.bio"
      :avatar="profile.avatar"
      :stats="stats"
      />
      <GaleryComponents :photos="galery"/>
    </main>
</template>
<script>

import AboutComponents from '@/components/AboutComponents.vue';
import userData from '@/assets/db/userData';
import GaleryComponents from '@/components/GaleryComponents.vue';
import galeryData from '@/assets/db/galeryData';
export default {
  name: 'HomePage',
  components: {AboutComponents, GaleryComponents},
  data() {
    return {
      profile: {},
      stats: {},
      galery: []
    }
  },

  created() {
    this.profile = userData.profile
    this.stats = userData.stats
    this.galery = galeryData.galery
  }
}
</script>
<style scoped></style>