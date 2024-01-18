<script setup lang="ts">
import TimelineItem from "@/views/TimelineItem.vue";

interface Props {
  title: string
  description: string
  year: string
}

withDefaults(defineProps<Props>(), {
  title: 'sample title',
  description: 'sample description',
  year: '2019'
});
</script>

<template>
  <section class="timeline">
<!--    <div v-if="hasItems" class="wrapper-timeline">-->
    <div class="wrapper-timeline">
      <div class="wrapper-item">
        <div class="section-year">
          <p class="year">
            {{ year }}
          </p>
        </div>
        <TimelineItem
          :title="title"
          :description="description"
          :year="year"
        />
      </div>
    </div>
  </section>
</template>
