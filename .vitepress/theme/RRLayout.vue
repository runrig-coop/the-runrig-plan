<script setup>
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import RRSection from './RRSection.vue';

const { Layout } = DefaultTheme;
const { frontmatter: fm } = useData();

const tractorImage = '/tractor.svg';
const openFieldImage = '/Plan_mediaeval_manor.jpg';
const stackImage = 'https://object-storage-ca-ymq-1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-dev/learn/software-overview-diagram-new.svg';

const ctaButtons = [
  {
    theme: 'brand',
    text: 'Read the Plan',
    link: '/overview',
  },
  {
    theme: 'alt',
    text: 'Get Involved',
    link: '/contact',
  },
];
</script>

<template>
  <Layout :class="{ 'rr-home': fm.layout === 'home' }">
    <template #home-hero-after>
      <RRSection id="runrig-hero" :image="tractorImage" :actions="ctaButtons">
        <template #section-info>
          <h1 class="name">
            <span class="clip">Runrig</span>
          </h1>
          <p class="text">
            Runrig is a communal technology platform, a <em>libre</em> software project and a
            method of socio-ecological design. It aims for the collective sovereignty over
            not just our food, but also the labor that raises it, the land and living things
            that support it, and the data connecting it all.
          </p>
          <p class="tagline">Locally. Regionally. Globally.</p>
        </template>
      </RRSection>
      <RRSection id="commons" :image="openFieldImage">
        <template #section-info>
          <h2 class="name">
            <span class="clip">More than just a software commons</span>
          </h2>
          <p class="text">
            Free &amp; open source software is a vital commons in today's digital world. It is,
            however, a commons of <em>information only</em> &mdash; it is a starting point, not the
            destination. Real autonomy requires control of the underlying infrastructure,
            something beyond the capacity of most individuals. Runrig is a plan for the
            collective ownership of the system as a whole, because no software user is free
            until all users are free.
          </p>
        </template>
      </RRSection>
      <RRSection id="autonomy" :image="stackImage">
        <template #section-info>
          <h2 class="name">
            <span class="clip">Autonomy by design</span>
          </h2>
          <p class="text">
            Three functional layers:
            <ol>
              <li>A single, collectively owned data storage provider.</li>
            </ol>
          </p>
        </template>
      </RRSection>
      <RRSection id="ecology">
        <template #section-info>
          <h2 class="name">
            <span class="clip">Ecology over architecture</span>
          </h2>
          <p class="text">
            The evolution of a software system is only one factor in the evolution of the
            broader social and natural systems in which it is embedded. Accordingly, Runrig
            emphasizes ecology, dialogue and free play over any specific technological
            architecture. Rather than creating an independent, greenfield alternative to the
            software platforms already available today, we seek out targeted interventions
            that can multiply the impact of those existing tools, while laying the
            groundwork for more resilient infrastructure in the future. Runrig aims to be
            the mortar joining these technological building blocks together, while
            reinforcing and helping to define the overarching superstructure.
          </p>
        </template>
      </RRSection>
      <RRSection id="next" :actions="ctaButtons">
        <template #section-info>
          <h1 class="name">
            <span class="clip">What's Next?</span>
          </h1>
          <p class="text">
            TODO
          </p>
        </template>
      </RRSection>
    </template>
  </Layout>
</template>

<style>
.rr-home .text {
  max-width: 45em;
}
.rr-home section {
  min-height: 65vh;
}
</style>
