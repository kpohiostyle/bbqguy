<template>
  <div class="container fluid">
    <div class="row">
      <MenuItem v-for="menuItem in state.menuItems" :key="menuItem.id" :menu-item="menuItem" />
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
// import Notification from '../utils/Notification'
export default {
  name: 'MenuPage',
  setup() {
    const state = reactive({
      menuItems: computed(() => AppState.menuItems)
    })
    return {
      state
    }
  }
}
</script>
<style>

</style>
