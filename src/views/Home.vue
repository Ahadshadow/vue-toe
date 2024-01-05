<script setup lang="ts">
import { useMetaRoute, useSharedTheme } from '@/composables';
import { FEATURES, PACKAGES, LOREM_IPSUM_TEXT } from '@/config';

import { Bar } from 'vue-chartjs';
import { Line } from 'vue-chartjs';
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

useMetaRoute();
const { themeCls } = useSharedTheme();
</script>

<style>
table, th, td {
  border:1px solid black;
}
</style>

<template>
  <div class="view-wrapper">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="is-flex is-horizontal-center">
            <figure class="image is-132x132">
              <!--              <font-awesome-icon-->
              <!--                class="vue-svg"-->
              <!--                :icon="['fab', 'vuejs']"-->
              <!--              />-->
              <img style="border-radius: 80px;" src="../icons/dimitriaka.gr.png">
            </figure>
          </div>
          <h1 class="title">Ελληνικά Δημητριακά</h1>

          <hr>
          <h2 class="subtitle">Τακτική ενημέρωση για τις καλλιέργειες των δημητριακών (καλαμπόκι, σιτάρι, κριθάρι) αλλά και ελαιούχων σπόρων όπως ο ηλίανθος. Συνδεθείτε μαζί μας ώστε να μη χάνετε καμιά ενημέρωση που θα ωφελήσει εσάς και τις καλλιέργειές σας!🌽</h2>
        </div>
      </div>
    </section>
    <section :class="['container dashboard-content', themeCls]">
      <div class="columns">
        <div class="column">
          <p class="title">Επικαιρότητα</p>
          <div class="content">
            <div class="fb-page" data-href="https://www.facebook.com/dimitriaka.gr"
                 data-tabs="timeline" data-width="" data-height=""
                 data-small-header="false" data-adapt-container-width="false"
                 data-hide-cover="false" data-show-facepile="true">
              <blockquote
              cite="https://www.facebook.com/dimitriaka.gr"
              class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/dimitriaka.gr">Ελληνικά Δημητριακά</a></blockquote>
            </div>
          </div>
        </div>
        <div class="column">
          <p class="title">Τιμές</p>
          <div class="content">
            <table>
              <tr>
                <th>Σπόρος</th>
                <th>Τιμή</th>
                <th>Μεταβολή</th>
              </tr>
              <td>Καλαμπόκι</td>
              <td>0,19</td>
              <td>+1%</td>
              <tr>
                <td>Σιτάρι σκληρό</td>
                <td>0,45</td>
                <td>+0.01%</td>
              </tr>
              <tr>
                <td>Σιτάρι μαλακό</td>
                <td>0,45</td>
                <td>+0.01%</td>
              </tr>
              <tr>
                <td>Κριθάρι</td>
                <td>0,45</td>
                <td>+0.01%</td>
              </tr>
              <tr>
                <td>Ηλίανθος</td>
                <td>0,45</td>
                <td>+0.01%</td>
              </tr>
              <tr>
                <td>Βαμβάκι</td>
                <td>0,45</td>
                <td>+0.01%</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="column">
          <p class="title">Τιμές Εξόδων</p>
          <div class="content">
            <table>
              <tr>
                <th>Έξοδο</th>
                <th>Τιμή</th>
                <th>Μεταβολή</th>
              </tr>
              <tr>
                <td>Ντίζελ</td>
                <td>0,79</td>
                <td>+0,12%</td>
              </tr>
              <tr>
                <td>Λιπασμα</td>
                <td>15,3</td>
                <td>+1%</td>
              </tr>
              <tr>
                <td>Ρεύμα άρδευσης</td>
                <td>3,23</td>
                <td>+0,05%</td>
              </tr>
            </table>
          </div>
        </div>

      </div>

      <hr>
      <div class="columns">
        <div class="column">
          <p class="title">lorem ipsum</p>
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
