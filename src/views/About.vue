<script setup lang="ts">
  import { Alert } from '@/components';
  import { useMetaRoute } from '@/composables';
  import {ABOUT_TEXT} from "@/config";
  import Timeline from "@/views/Timeline.vue";

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

              </div>

              <div class="column">
                  <Timeline title="Test" year="2018" description="TETTETETE"/>
                  <Timeline title="Teasdasdsdst" description="TETasdasdTETETE"/>
                  <Timeline/>
                  <Timeline/>
                  <Timeline/>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</div>
</template>
