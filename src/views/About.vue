<script setup lang="ts">
  import { Alert } from '@/components';
  import { useMetaRoute } from '@/composables';
  import {ABOUT_TEXT} from "@/config";
  import Timeline from "@/views/Timeline.vue";
  import {SERVICES} from "@/config/servives.config";
  import {ABOUT} from "@/config/about.config";

useMetaRoute();
</script>

<template>
  <div class="tile notification-tile is-parent is-vertical is-8">
  <section class="view-wrapper">
    <section>
      <div>
        <div class="container has-text-centered">
          <div class="is-flex is-horizontal-center">
            <div class="columns">
              <div class="column">
                <p class="title">Σχετικά με εμάς</p>
                <div class="content">{{ ABOUT_TEXT }}</div>

                <p
                  v-for="({ bold_text, description }, index) in ABOUT"
                  :key="index"
                  class="service"
                >
                  <font-awesome-icon icon="check" />
                  {{ description }}
                  <b v-if="bold_text">
                    {{ bold_text }}
                  </b>
                </p>
              </div>

              <div class="column">
                  <Timeline title="Οι υπηρεσίες" year="2024" description="Η κοινότητα ξεκινάει την παροχή δωρεάν υπηρεσιών διαφήμισης, social media και αποδοτικότητας σοδειάς για ιδιώτες και επιχειρήσεις." date="2 Ιανουαριου"/>
                  <Timeline title="Τα νούμερα" year="2023" description="Οι δημοσιεύσεις της ομάδας φτάνουν σταθερά τις 30.000 μηνιαίες προβολές" date="1 δεκεμβριου"/>
                  <Timeline title="Η προβολή" year="2023" description="Η κοινότητα Ελληνικά Δημητριακά φτάνει τους 500 ακολούθους στο facebook" date="15 νοεμβριου"/>
                  <Timeline title="Η κοινότητα" year="2023" description="Ο Απόστολος Μπάης συλλαμβάνει την ιδέα δημιουργίας κοινότητας ενημέρωσης αγροτών και παραγωγών του πρωτογενή τομέα" date="15 Αυγουστου"/>
                  <Timeline title="Τρίτη γενιά" year="2022" date="8 Ιουλιου" description="Ο Απόστολος Μπάης του Κυριάκου αποφοιτεί ως Γεωπόνος από το ΔΠΘ, έχοντας εργαστεί στην εταιρία Μπαρμπα Στάθης (έλεγχος ποιότητας), Αγροτεχνικό Γραφείο Agroaction, και ως ερευνητής στο Πανεπιστήμιο του Οσιγιεκ (Κροατία)."/>
                  <Timeline title="Δεύτερη γενιά" year="1992" description="Ο Κυριάκος Μπάης του Θεοδώρου αναλαμβάνει τα ηνία της οικογενειακής επιχείρησης με μόλις 80στρ. ιδιόκτητα"/>
                  <Timeline title="Το ξεκίνημα" year="1950" description="Ο Θεόδωρος Μπάης του Ιωάννη αποφασίζει να κάνει τη στροφή από τον κτηνοτροφικό στον αγροτικό τομέα, πουλάει το κοπάδι του και αγοράζει το πρώτο κομμάτι γης του"/>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</div>
</template>
