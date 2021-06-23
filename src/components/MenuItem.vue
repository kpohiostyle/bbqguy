<template>
  <div class="col-md-12">
    <div class="card shadow flex-grow-1 ">
      <button title="Open Keep Details"
              type="button"
              class=""
              data-toggle="modal"
              data-target="#keepDetailsModal"
              @click="menuItemDetails()"
      >
        <img :src="keep.img" class="card-img">
        <div class="card-img-overlay d-flex align-items-end inline">
          <h5 class="card-title">
            {{ menuItems.name }}
          </h5>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { menusService } from '../services/MenusService'
export default {
  name: 'MenuItemComponent',
  props: {
    menuItem: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      activeMenuItem: computed(() => AppState.activeMenuItem)
    })
    return {
      state,
      keepDetails() {
        AppState.activeMenuItem = props.menuItem
        menusService.getKeepById(AppState.activeMenuItem.id)
      }
    }
  },
  components: {}

}
</script>
<style>
.profile{
    position: absolute;
    right: 0;
    bottom: 0;

}
.card {
  transition: all .2s ease-out;
}
.card:hover{
  transform: scale(1.1);
}
.small-image{
  height: 30px;
  width: 30px;
}
button{
  border:none;
}
</style>
