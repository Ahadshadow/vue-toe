<!-- EditModal.vue -->
<template>
  <div id="modal" class="modal modal-fixed-footer">
    <!-- Modal content -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "EditModal",
  props: {
    editInput: Object as PropType<any>,
  },
});
</script>
