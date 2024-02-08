<script setup lang="ts">
import { useMetaRoute, useSharedTheme } from '@/composables';
import "leaflet/dist/leaflet.css";
import { FEATURES, PACKAGES, LOREM_IPSUM_TEXT } from '@/config';
import { LMap, LTileLayer, LWmsTileLayer, LMarker, LTooltip, LControl } from "@vue-leaflet/vue-leaflet";
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
import {ref} from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement);

useMetaRoute();
const { themeCls } = useSharedTheme();
const awesome = ref;
const selected = ref('');
const selectedHistorical = ref('');

const products = ref('');
const errorMessage = ref(null);

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
          <p class="title">Τιμές</p>
          <div style="height:300px; width:400px">
            <l-map ref="map" zoom=6 v-model:zoom="zoom" :center="[39.27, 23.81]">
              <l-wms-tile-layer
                url="https://maps.heigit.org/osm-wms/service"
                attribution="HeiGIT <a href='osm-wms.de'>OSM WMS</a>"
                layer-type="base"
                name="osm-wms.de"
                :max-zoom="10"
                version="1.3.0"
                format="image/png"
                :transparent="true"
                layers="osm_auto:all"
              />

              <l-control
                class="leaflet-control leaflet-demo-control"
                position="bottomleft"
              >Hello, Map!</l-control>

              <!--    alexandroupoli-->
              <l-marker :lat-lng="[40.845718, 25.873962]">
                <l-tooltip>
                  <div v-if="selected==='Καλαμπόκι'">Alexandroupoli: 0,21e/kg</div>
                  <div v-if="selected==='Σιτάρι σκληρό'">Alexandroupoli: 0,42e/kg</div>
                  <div v-if="selected==='Σιτάρι μαλακό'">Alexandroupoli: 0,50e/kg</div>
                </l-tooltip>
              </l-marker>

              <!--    viotia-->
              <l-marker :lat-lng="[38.33333, 23.0]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>

              <!--    drama-->
              <l-marker :lat-lng="[41.1502, 24.1469]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    evros-->
              <l-marker :lat-lng="[41.4330, 26.5500]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    grevena-->
              <l-marker :lat-lng="[40.0838, 21.4273]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    ioannina-->
              <l-marker :lat-lng="[39.6650, 20.8537]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    karditsa-->
              <l-marker :lat-lng="[39.3640, 21.9214]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    kavala-->
              <l-marker :lat-lng="[40.9376, 24.4129]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    kilkis-->
              <l-marker :lat-lng="[40.9937, 22.8754]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    komitini-->
              <l-marker :lat-lng="[41.1, 25.4167]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    kozani-->
              <l-marker :lat-lng="[40.30, 21.7833]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    larisa-->
              <l-marker :lat-lng="[39.6417, 22.4167]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    leivadia-->
              <l-marker :lat-lng="[34.9491, 33.6275]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    MES-->
              <l-marker :lat-lng="[38.3687, 21.4304]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    ORE-->
              <l-marker :lat-lng="[41.5014, 26.5311]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    PYR-->
              <l-marker :lat-lng="[37.6718, 21.4432]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    SER-->
              <l-marker :lat-lng="[41.0864, 23.5484]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
              <!--    THE-->
              <l-marker :lat-lng="[40.6401, 22.9444]">
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
              </l-marker>
            </l-map>
            <div>Selected: {{ selected }}</div>

            <select v-model="selected">
              <option disabled value="">Επιλέξτε σπόρο:</option>
              <option>Καλαμπόκι</option>
              <option>Σιτάρι σκληρό</option>
              <option>Σιτάρι μαλακό</option>
            </select>
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
          <p class="title">Τιμή καλαμποκιού ιστορικό</p>
          <div class="content">{{ LOREM_IPSUM_TEXT }}</div>

          <div>Selected: {{ selectedHistorical }}</div>

          <select v-model="selectedHistorical">
            <option disabled value="">Επιλέξτε σπόρο:</option>
            <option>Καλαμπόκι</option>
            <option>Σιτάρι σκληρό</option>
            <option>Σιτάρι μαλακό</option>
          </select>
          <div class="container">
            <div v-if="products">
              <h5>Products</h5>{{console.log(products)}}
              <ul class="mb-0">
                <li v-for="product in products" :key="product.id">{{product.toString()}}</li>
              </ul>
            </div>
            <Line id="my-chart-id" :data="{labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Καλαμπόκι',
          backgroundColor: '#f87979',
          data: [0.19, 0.22, 0.3, 0.21, 0.2, 0.13, 0.23]
        },
        {
          label: 'Σιτάρι σκληρό',
          backgroundColor: '#f87979',
          data: [0.38, 0.35, 0.41, 0.37, 0.36, 0.33, 0.38]
        },
        {
          label: 'Σιτάρι μαλακό',
          backgroundColor: '#bd5c5c',
          data: [0.19, 0.22, 0.2, 0.21, 0.2, 0.19, 0.18]
        }

      ]}" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
