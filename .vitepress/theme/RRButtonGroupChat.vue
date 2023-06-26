<script setup>
import RRButton from './RRButton.vue';
import RRIconDiscord from './RRIconDiscord.vue';
import RRIconMatrix from './RRIconMatrix.vue';
</script>

<template>
  <div class="btn-group">
    <div class="btn-container">
      <RRButton
        tag="a"
        size="medium"
        theme="brand"
        text="#runrig-coop:matrix.org"
        href="https://matrix.to/#/#runrig-space:matrix.org">
        <template #before-text>
          <RRIconMatrix theme="brand"/>
        </template>
      </RRButton>
    </div>
    <div class="btn-container">
      <RRButton
        tag="a"
        size="medium"
        theme="alt"
        text="#design-tech-incubator"
        href="https://discord.gg/HvXdzdeaW9">
        <template #before-text>
          <RRIconDiscord theme="alt"/>
        </template>
      </RRButton>
    </div>
  </div>
</template>

<style scoped>
.btn-group {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;
}
.btn-group {
  justify-content: center;
}
@media (min-width: 640px) {
  .btn-group {
    padding-top: 32px;
  }
}
@media (min-width: 960px) {
  .btn-group {
    justify-content: flex-start;
  }
}
.btn-container {
  flex-shrink: 0;
  padding: 6px;
}
</style>