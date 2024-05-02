<script setup lang="ts">
import { fetchGraphData, useMetaRoute, useSharedTheme } from "@/composables";
import "leaflet/dist/leaflet.css";
import {
  FEATURES,
  PACKAGES,
  LOREM_IPSUM_TEXT,
  cityDataInitial,
} from "@/config";
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
import moment from "moment";

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
const selected = ref("MAI");
const selectedHistorical = ref("");

const products = ref("");
const MapData = ref<any>({});
const errorMessage = ref(null);

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
  const endDate = moment().format("DD/MM/YYYY");
  const startDate = moment().subtract(1, "years").format("DD/MM/YYYY");
  try {
    const { data } = await api.get(
      `api/map-data?productCodes=${selected.value}&memberStateCodes=EL&marketCodes=ALEX, BOE, DRA, EVROSA, GRE, IOAN,KAR, KAV, KIL, KOM, KOZ, LAR, LEI , MES, ORE, PYR, SER, THE&beginDate=${startDate}&endDate=${endDate}`
      // `api/map-data?products=Oilseed meals&memberStateCodes=EL&marketCodes=ALEX, BOE, DRA, EVROSA, GRE, IOAN,KAR, KAV, KIL, KOM, KOZ, LAR, LEI , MES, ORE, PYR, SER, THE&beginDate=${startDate}&endDate=${endDate}`
    );
    const apiData: any = data;

    const marketData = _.groupBy(apiData, (item: any) =>
      item.marketName.toLowerCase()
    );

    const latestMarketData: any = _.mapValues(
      marketData,
      (market: any) => market[0]
    );

    const cityData: any = cityDataInitial;

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

    console.log("MapData", MapData.value);
  } catch (err) {
    errorMessage.value = err.message;
  }
}

function getApiResponses() {
  getMapData();
  getProductPrices();
}

onMounted(() => {
  getApiResponses();
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

        <div class="column mb-5">
          <p class="title">Τιμές</p>
          <div style="height: 300px; width: 100%">
            <l-map
              ref="map"
              zoom="6"
              v-model:zoom="zoom"
              :center="[39.27, 23.81]"
              style="z-index: 0"
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
                  <div>
                    {{ city.full_name }}: {{ city.price }}
                    <br />
                    {{ city.referencePeriod }}
                  </div>
                </l-tooltip>
              </l-marker>
            </l-map>
            <div>Selected: {{ selected }}</div>

            <select v-model="selected" @change.prevent="getApiResponses">
              <option disabled value="">Επιλέξτε σπόρο:</option>
              <option value="MAI">Καλαμπόκι</option>
              <option value="DUR">Σιτάρι σκληρό</option>
              <option value="BLTFOUR">Σιτάρι μαλακό</option>
            </select>
          </div>
        </div>

        <div class="column mb-5">
          <iframe
            src="https://www.meteoblue.com/en/weather/maps/greece-%28historical-region%29_greece_12217205#coords=6.19/39.35/21.747&map=windAnimation~rainbow~auto~10%20m%20above%20gnd~none"
            frameborder="0"
            scrolling="NO"
            allowtransparency="true"
            sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
            style="width: 100%; height: 400px"
          ></iframe>
          <div>
            <!-- DO NOT REMOVE THIS LINK --><a
              href="https://www.meteoblue.com/en/weather/maps/greece?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
              target="_blank"
              rel="noopener"
              >meteoblue</a
            >
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
                  {{ product.marketName?.toString() }} --
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
