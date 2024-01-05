<script setup lang="ts">
  import { Alert } from '@/components';
  import { useMetaRoute } from '@/composables';
  import {ABOUT_TEXT} from "@/config";

  useMetaRoute();
</script>

<template>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
