<script setup lang="ts">
import { fetchGraphData, useMetaRoute, useSharedTheme } from "@/composables";
import "leaflet/dist/leaflet.css";
import { FEATURES, PACKAGES, LOREM_IPSUM_TEXT } from "@/config";
import {
  LMap,
  LTileLayer,
  LWmsTileLayer,
  LMarker,
  LTooltip,
  LControl,
} from "@vue-leaflet/vue-leaflet";
import { Bar } from "vue-chartjs";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { onMounted, ref } from "vue";
import api from "@/api/axiosInstance";
import _ from "lodash";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

useMetaRoute();
const { themeCls } = useSharedTheme();
const awesome = ref;
const selected = ref("");
const selectedHistorical = ref("");

const products = ref("");
const MapData = ref<any>({});
const errorMessage = ref(null);

const cityDataInitial = [
  {
    city: "ALEX",
    full_name: "Alexandroupoli",
    adjacentCities: ["EVROSA", "KOM", "ORE"],
    coords: [40.845718, 25.873962],
    adjacentCityFullNames: ["Evros", "Komotini", "Orestiada"],
  },
  {
    city: "BOE",
    full_name: "Viotia",
    adjacentCities: ["LEI", "MES", "PYR"],
    coords: [38.33333, 23.0],
    adjacentCityFullNames: ["Leivadia", "Mesolongi", "Pyrgos"],
  },
  {
    city: "DRA",
    full_name: "Drama",
    adjacentCities: ["KAV", "THE", "SER"],
    coords: [41.1502, 24.1469],
    adjacentCityFullNames: ["Kavala", "Thessaloniki", "Serres"],
  },
  {
    city: "EVROSA",
    full_name: "Evros",
    adjacentCities: ["ALEX", "KOM", "ORE"],
    coords: [41.433, 26.55],
    adjacentCityFullNames: ["Alexandroupoli", "Komotini", "Orestiada"],
  },
  {
    city: "GRE",
    full_name: "Grevena",
    adjacentCities: ["KOZ", "LAR", "IOAN"],
    coords: [40.0838, 21.4273],
    adjacentCityFullNames: ["Kozani", "Larisa", "Ioannina"],
  },
  {
    city: "IOAN",
    full_name: "Ioannina",
    adjacentCities: ["GRE", "KOZ", "LAR"],
    coords: [39.665, 20.8537],
    adjacentCityFullNames: ["Grevena", "Kozani", "Larisa"],
  },
  {
    city: "KAR",
    full_name: "Karditsa",
    adjacentCities: ["KOZ", "LAR", "GRE"],
    coords: [39.364, 21.9214],
    adjacentCityFullNames: ["Kozani", "Larisa", "Grevena"],
  },
  {
    city: "KAV",
    full_name: "Kavala",
    adjacentCities: ["DRA", "SER", "THE"],
    coords: [40.9376, 24.4129],
    adjacentCityFullNames: ["Drama", "Serres", "Thessaloniki"],
  },
  {
    city: "KIL",
    full_name: "Kilkis",
    adjacentCities: ["THE", "SER", "KOZ"],
    coords: [40.9937, 22.8754],
    adjacentCityFullNames: ["Thessaloniki", "Serres", "Kozani"],
  },
  {
    city: "KOM",
    full_name: "Komotini",
    adjacentCities: ["ORE", "ALEX", "EVROSA"],
    coords: [41.1, 25.4167],
    adjacentCityFullNames: ["Orestiada", "Alexandroupoli", "Evros"],
  },
  {
    city: "KOZ",
    full_name: "Kozani",
    adjacentCities: ["LAR", "GRE", "THE"],
    coords: [40.3, 21.7833],
    adjacentCityFullNames: ["Larisa", "Grevena", "Thessaloniki"],
  },
  {
    city: "LAR",
    full_name: "Larisa",
    adjacentCities: ["GRE", "KOZ", "IOAN"],
    coords: [39.6417, 22.4167],
    adjacentCityFullNames: ["Grevena", "Kozani", "Ioannina"],
  },
  {
    city: "LEI",
    full_name: "Leivadia",
    adjacentCities: ["BOE", "PYR", "MES"],
    coords: [34.9491, 33.6275],
    adjacentCityFullNames: ["Viotia", "Pyrgos", "Mesolongi"],
  },
  {
    city: "MES",
    full_name: "Mesolongi",
    adjacentCities: ["BOE", "PYR", "LEI"],
    coords: [38.3687, 21.4304],
    adjacentCityFullNames: ["Viotia", "Pyrgos", "Leivadia"],
  },
  {
    city: "ORE",
    full_name: "Orestiada",
    adjacentCities: ["EVROSA", "ALEX", "KOM"],
    coords: [41.5014, 26.5311],
    adjacentCityFullNames: ["Evros", "Alexandroupoli", "Komotini"],
  },
  {
    city: "PYR",
    full_name: "Pyrgos",
    adjacentCities: ["MES", "BOE", "LEI"],
    coords: [37.6718, 21.4432],
    adjacentCityFullNames: ["Mesolongi", "Viotia", "Leivadia"],
  },
  {
    city: "SER",
    full_name: "Serres",
    adjacentCities: ["KIL", "THE", "KAV"],
    coords: [41.0864, 23.5484],
    adjacentCityFullNames: ["Kilkis", "Thessaloniki", "Kavala"],
  },
  {
    city: "THE",
    full_name: "Thessaloniki",
    adjacentCities: ["KAV", "KIL", "KOZ"],
    coords: [40.6401, 22.9444],
    adjacentCityFullNames: ["Kavala", "Kilkis", "Kozani"],
  },
];

// Methods...
async function getProductPrices() {
  try {
    const { data } = await api.get(
      `api/prices?productCodes=${selected.value}&memberStateCodes=EL&marketCodes=ALEX, BOE, DRA, EVROSA, GRE, IOAN,KAR, KAV, KIL, KOM, KOZ, LAR, LEI , MES, ORE, PYR, SER, THE&beginDate=01/11/2023&endDate=19/01/2024`
    );
    products.value = data;
  } catch (err) {
    errorMessage.value = err.message;
  }
}

async function getMapData() {
  try {
    const data = await api.get("/map-data", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    const apiData: any = data.data; // Fill this with your API data

    const marketData = _.groupBy(apiData, (item) =>
      item.marketName.toLowerCase()
    );

    const latestMarketData: any = _.mapValues(marketData, (market: any) =>
      _.maxBy(market, "endDate")
    );

    const cityData: any = cityDataInitial; // Fill this with your city data

    const cityToMarket: any = _.mapValues(
      _.keyBy(cityData, "city"),
      () => null
    );

    function findDataForCity(cityName: string): any | null {
      const marketKey = cityName.toLowerCase();

      if (latestMarketData[marketKey]) {
        return latestMarketData[marketKey];
      }
      const adjacentCities = _.get(
        _.find(cityData, { full_name: marketKey }),
        "adjacentCityFullNames",
        []
      );
      // console.log("adjacentCities", adjacentCities);

      for (const adjacentCity of adjacentCities) {
        const data = findDataForCity(adjacentCity);

        if (data) {
          return data;
        }
      }
      return null; // If data not found for city or its adjacent cities
    }

    _.forEach(cityData, (city: any) => {
      const marketData = findDataForCity(city.full_name);

      if (marketData) {
        cityToMarket[city.city] = {
          ...city,
          ...marketData,
          price: marketData.price,
          referencePeriod: marketData.referencePeriod,
        };
      } else {
        // If no data found for city or its adjacent cities, set price to 0
        cityToMarket[city.city] = {
          ...city,
          price: "€0,00",
          referencePeriod: null,
        };
      }
    });

    MapData.value = Object.values(cityToMarket);
  } catch (err) {
    errorMessage.value = err.message;
  }
}

// const isLoading = ref(true);
// const items = ref([]);

onMounted(() => {
  getMapData();
});
</script>

<style>
table,
th,
td {
  border: 1px solid black;
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
              <img
                style="border-radius: 80px"
                src="../icons/dimitriaka.gr.png"
              />
            </figure>
          </div>
          <h1 class="title">Ελληνικά Δημητριακά</h1>

          <hr />
          <h2 class="subtitle">
            Τακτική ενημέρωση για τις καλλιέργειες των δημητριακών (καλαμπόκι,
            σιτάρι, κριθάρι) αλλά και ελαιούχων σπόρων όπως ο ηλίανθος.
            Συνδεθείτε μαζί μας ώστε να μη χάνετε καμιά ενημέρωση που θα
            ωφελήσει εσάς και τις καλλιέργειές σας!🌽
          </h2>
        </div>
      </div>
    </section>
    <section :class="['container dashboard-content', themeCls]">
      <div class="columns">
        <div class="column">
          <p class="title">Επικαιρότητα</p>
          <div class="content">
            <div
              class="fb-page"
              data-href="https://www.facebook.com/dimitriaka.gr"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="false"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/dimitriaka.gr"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/dimitriaka.gr"
                  >Ελληνικά Δημητριακά</a
                >
              </blockquote>
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
          <div style="height: 300px; width: 400px">
            <l-map
              ref="map"
              zoom="6"
              v-model:zoom="zoom"
              :center="[39.27, 23.81]"
            >
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
                >Hello, Map!</l-control
              >

              <l-marker
                v-for="city in MapData"
                :key="city?.city"
                :lat-lng="city?.coords"
              >
                <l-tooltip>
                  <div>{{ city.full_name }}: {{ city.price }}</div>
                </l-tooltip>
              </l-marker>
            </l-map>
            <div>Selected: {{ selected }}</div>

            <select v-model="selected" @change.prevent="getProductPrices">
              <option disabled value="">Επιλέξτε σπόρο:</option>
              <option value="MAI">Καλαμπόκι</option>
              <option value="DUR1">Σιτάρι σκληρό</option>
              <option value="DUR">Σιτάρι μαλακό</option>
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

      <hr />
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
              <h5 class="mt-3">Products</h5>
              <ul class="mb-0">
                <li v-for="product in products" :key="product.memberStateCode">
                  {{ product.productName.toString() }} --
                  {{ product.stageName.toString() }} --
                  {{ product.price.toString() }}
                </li>
              </ul>
            </div>
            <Line
              id="my-chart-id"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    label: 'Καλαμπόκι',
                    backgroundColor: '#f87979',
                    data: [0.19, 0.22, 0.3, 0.21, 0.2, 0.13, 0.23],
                  },
                  {
                    label: 'Σιτάρι σκληρό',
                    backgroundColor: '#f87979',
                    data: [0.38, 0.35, 0.41, 0.37, 0.36, 0.33, 0.38],
                  },
                  {
                    label: 'Σιτάρι μαλακό',
                    backgroundColor: '#bd5c5c',
                    data: [0.19, 0.22, 0.2, 0.21, 0.2, 0.19, 0.18],
                  },
                ],
              }"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
