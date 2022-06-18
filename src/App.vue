<template>
  <v-app>
<todo></todo>
  </v-app>
</template>

<script>
import todo from './components/Todo.vue'
export default {
  name: 'App',
  components: {
  todo
},
  data: () => ({

  }),
};
</script>
