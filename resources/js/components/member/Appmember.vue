<template>
  <div>
    
    components/member/Appmember.vue
    <router-link to="page">Page</router-link>
    <router-link to="page1">Page1</router-link>
    <router-link to="page2">Page2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  // const default_layout = "default";

  // export default {
  //   computed: {
  //     layout() {
  //       return (this.$route.meta.layout || default_layout) + '-layout';
  //     }
  //   }
  // }
</script>