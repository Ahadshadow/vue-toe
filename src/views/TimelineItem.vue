<script setup lang="ts">

interface Props {
  title: string
  description: string
  year: string
  date: string
}

withDefaults(defineProps<Props>(), {
  title: 'sample title',
  description: 'sample description',
  date: '15 aygoustou default'
});
</script>

<template>
  <section class="timeline-item">
    <div class="item">
      <span class="dot" />
      <h3 class="date-item">{{ date }}</h3>
      <h4 class="title-item">{{ title }}</h4>
      <p class="description-item"> {{description}} </p>
    </div>
  </section>
</template>
