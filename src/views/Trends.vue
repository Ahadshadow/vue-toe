<script setup lang="ts">
  import { Alert } from '@/components';
  import { useMetaRoute } from '@/composables';
  import { fetchGraphData } from '@/composables';
  import {ABOUT_TEXT, FEATURES} from "@/config";
  import {SERVICES} from "@/config/servives.config";

  import {Bar, Line} from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement);

  fetchGraphData();
  useMetaRoute();
</script>

<template>

  <div class="tile notification-tile is-parent is-vertical is-10">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="is-flex is-horizontal-center">
            <figure class="image is-132x132">
<!--              <font-awesome-icon-->
<!--                class="vue-svg"-->
<!--                :icon="['fab', 'vuejs']"-->
<!--              />-->
              <img src="../icons/dimitriaka.gr.png">
            </figure>
          </div>
          <h1 class="title">Τάσεις</h1>
          <div><p class="subtitle">Τάσεις αγροτικού τομέα συμφωνα με γραφημα ιστορικο 30 ημερών για καλαμπό, σκληρο και μαλακό σιτάρι</p></div>
          <hr>
<!--          <p-->
<!--            v-for="({ bold_text, description }, index) in SERVICES"-->
<!--            :key="index"-->
<!--            class="service"-->
<!--          >-->
<!--            <font-awesome-icon icon="check" />-->
<!--            {{ description }}-->
<!--            <b v-if="bold_text">-->
<!--              {{ bold_text }}-->
<!--            </b>-->
<!--          </p>-->
        </div>
      </div>
    </section>


    <section :class="['container dashboard-content', themeCls]">
      <div class="columns">
        <div class="column">
          <p class="title">Τιμή καλαμποκιού ιστορικό</p>
          <div class="content">{{ LOREM_IPSUM_TEXT }}</div>

          <div class="container">
            <Line id="my-chart-id" :data="{labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [0.19, 0.22, 0.3, 0.21, 0.2, 0.13, 0.23]
              }
            ]}" />
          </div>
        </div>

        <div class="column">
          <p class="title">Τιμή καλαμποκιού ιστορικό</p>
          <div class="content">{{ LOREM_IPSUM_TEXT }}</div>

          <div class="container">
            <Line id="my-chart-id" :data="{labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [0.19, 0.22, 0.3, 0.21, 0.2, 0.13, 0.23]
              }
            ]}" />
          </div>
        </div>

      </div>
      <div class="columns">
        <div class="column">
          <p class="title">Τιμή καλαμποκιού ιστορικό</p>
          <div class="content">{{ LOREM_IPSUM_TEXT }}</div>

          <div class="container">
            <Line id="my-chart-id" :data="{labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [0.19, 0.22, 0.3, 0.21, 0.2, 0.13, 0.23]
              }
            ]}" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
