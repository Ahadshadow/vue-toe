<template>
  <!-- <div id="app"> -->
  <h4 class="head">Application</h4>
  <v-app>
    <v-data-table :items="this.items"></v-data-table>
  </v-app>
  <!-- </div> -->
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import { VDataTable } from "vuetify/components";
import { VApp } from "vuetify/components";

export default defineComponent({
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Species", value: "species" },
        { text: "Diet", value: "diet" },
        { text: "Habitat", value: "habitat" },
      ],
      items: [
        {
          name: "African Elephant",
          species: "Loxodonta africana",
          diet: "Herbivore",
          habitat: "Savanna, Forests",
        },
        // Add more items here
      ],
    };
  },
  components: {
    VDataTable,
    VApp,
  },
});
</script>

<style scoped>
/* Your CSS styles */

.container {
  /* background-color: black !important; */
}
</style>
