<!-- DataTables.vue -->
<template>
  <table
    class="table-responsive bordered highlight centered hoverable z-depth-2"
    v-show="persons.length"
  >
    <thead>
      <tr>
        <th v-for="column in columns">
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(person, index) in persons">
        <td>{{ index }}</td>
        <td>
          {{ person.lname }}
        </td>
        <td>
          {{ person.fname }}
        </td>
        <td>{{ person.age }} years</td>
        <td>
          {{ person.job }}
        </td>
        <td>
          {{ person.address }}
        </td>
        <td style="width: 18%">
          <a
            href="#modal"
            @click="edit(index)"
            class="btn waves-effect waves-light yellow darken-2"
            ><i class="material-icons">edit</i>
          </a>
          <a
            href="#!"
            class="btn waves-effect waves-light red darken-2"
            @click="archive(index)"
            ><i class="material-icons">archive</i>
          </a>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="input-field">
            <input
              placeholder="Placeholder"
              ref="lname"
              v-model="input.lname"
              id="lname"
              type="text"
            />
            <label for="lname">Last Name</label>
          </div>
        </td>
        <td>
          <div class="input-field">
            <input
              placeholder="Placeholder"
              v-model="input.fname"
              id="fname"
              type="text"
            />
            <label for="fname">First Name</label>
          </div>
        </td>
        <td>
          <div class="input-field">
            <input placeholder="Placeholder" id="age" type="text" />
            <label for="age">Age</label>
          </div>
        </td>
        <td>
          <div class="input-field">
            <input placeholder="Placeholder" id="job" type="text" />
            <label for="job">Job</label>
          </div>
        </td>
        <td>
          <div class="input-field">
            <input placeholder="Placeholder" id="address" type="text" />
            <label for="address">Address</label>
          </div>
        </td>
        <td>
          <a href="#!" class="btn btn-waves green darken-2"
            ><i class="material-icons">add</i></a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "DataTables",
  props: {
    columns: Array as PropType<string[]>,
    persons: Array as PropType<any[]>,
  },
});
</script>
