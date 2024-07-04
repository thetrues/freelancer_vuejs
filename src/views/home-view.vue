<script setup>
import Hero from '@/components/hero-section.vue'
import HomeCards from '@/components/home-cards.vue'
import JobList from '@/components/job-listing.vue'
</script>

<template>
  <Hero title="" subTitle="" />
  <HomeCards />
  <JobList :limit="3" :showButton="true" />
</template>
