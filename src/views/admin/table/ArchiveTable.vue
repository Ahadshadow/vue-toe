<!-- ArchiveTable.vue -->
<template>
  <table
    class="table-responsive centered bordered striped highlight z-depth-1 hoverable"
    v-show="bin.length"
  >
    <!-- Archive table content -->
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ArchiveTable",
  props: {
    columns: Array as PropType<string[]>,
    bin: Array as PropType<any[]>,
  },
});
</script>
