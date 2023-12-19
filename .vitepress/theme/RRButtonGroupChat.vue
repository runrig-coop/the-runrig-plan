<script setup>
import RRButton from './RRButton.vue';
import RRIconDiscord from './RRIconDiscord.vue';
import RRIconGOAT from './RRIconGOAT.vue';
import RRIconMatrix from './RRIconMatrix.vue';
</script>

<template>
  <div class="btn-group">
    <div class="btn-container">
      <RRButton
        tag="a"
        size="medium"
        theme="brand"
        text="#runrig-coop"
        href="https://matrix.to/#/#runrig-space:matrix.org">
        <template #before-text>
          <RRIconMatrix theme="brand" class="icon matrix"/>
        </template>
      </RRButton>
    </div>
    <div class="btn-container">
      <RRButton
        tag="a"
        size="medium"
        theme="alt"
        text="GOAT Forum"
        href="https://forum.goatech.org">
        <template #before-text>
          <div class="icon-goat-container">
            <RRIconGOAT theme="alt" class="icon goat"/>
          </div>
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
          <RRIconDiscord theme="alt" class="icon discord"/>
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
:deep(.before-text-container svg.icon),
:deep(.after-text-container svg.icon) {
  height: 18px;
  width: 24px;
}

:deep(.before-text-container svg.goat) {
  margin-bottom: -3px;
  height: 24px;
}
</style>