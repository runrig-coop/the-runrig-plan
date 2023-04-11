<script setup>
import { onMounted } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
import RRSection from './RRSection.vue';
import RRHomeBG from './RRHomeBG.vue';

const { Layout } = DefaultTheme;
const { frontmatter: fm, isDark } = useData();

onMounted(() => {
  // Create a custom CSS property, var(--scroll), for scroll animations,
  // such as the home page background image.
  window.addEventListener('scroll', () => {
    const position = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    document.body.style.setProperty('--scroll', position);
  }, false);
});

const tractorImage = '/emoji_u1f69c.svg';
const stackImage = '/stack-diagram.svg';

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
  <Layout v-if="fm.layout === 'home'" :class="{ 'rr-home': fm.layout === 'home' }">
    <template #layout-top>
      <RRHomeBG/>
    </template>
    <template #home-hero-after>
      <RRSection id="runrig-hero" :actions="ctaButtons">
        <template #section-info>
          <div class="tractor-container">
            <VPImage class="tractor-svg" image="/emoji_u1f69c.svg"/>
          </div>
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
      <RRSection id="commons" :class="{ 'is-dark': isDark }" class="align-right">
        <template #section-info>
          <h2 class="name">
            <span class="clip">More than just a software commons</span>
          </h2>
          <p class="text">
            Free &amp; open source software is a starting point, but not the destination.
            Full autonomy requires control of the underlying infrastructure, something beyond
            the capacity of most individuals. Runrig redistributes control of the entire
            system back to the users, collectively.
          </p>
          <figure class="quote">
            <blockquote>
              "Nobody's free until everybody's free."
            </blockquote>
            <cite>~ Fannie Lou Hamer</cite>
          </figure>
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
      <RRSection id="autonomy" :image="stackImage">
        <template #section-info>
          <h2 class="name">
            <span class="clip">Autonomy by design</span>
          </h2>
          <p class="text">
            Three functional layers:
            <ol>
              <li>A single, collectively owned data storage provider.</li>
              <li>Many federated cooperative service platforms.</li>
              <li>Local-first and self-hosted applications (optional).</li>
            </ol>
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
  <Layout v-else/>
</template>

<style>
.rr-home .text {
  max-width: 42em;
}
.rr-home section {
  min-height: 64vh;
}

.align-right .name,
.align-right .quote,
.align-right .text {
  text-align: right;
  margin-inline-start: auto;
  white-space: pre-line;
}

section#runrig-hero {
  padding-top: 256px;
  margin-bottom: 128px;
}
#runrig-hero .tractor-container {
  position: absolute;
  height: 128px;
  width: 128px;
  left: calc(min(100%, 42em) - 128px);
  top: calc(40px - 128px);
}
#runrig-hero .tractor-svg {
  display: inline-block;
  /* transform: scaleX(-1); */
}
@media (min-width: 640px) {
  section#runrig-hero {
    padding-top: 512px;
    margin-bottom: 256px;
  }
  #runrig-hero .tractor-container {
    height: 256px;
    width: 256px;
    left: calc(min(100%, 42em) - 256px);
    top: calc(56px - 256px);
  }
}
@media (min-width: 960px) {
  #runrig-hero .tractor-container {
    left: calc(42em - 256px);
    top: calc(64px - 256px);
  }
}

#commons .quote blockquote {
  margin-top: 48px;
  line-height: 32px;
  font-size: 24px;
  color: var(--vp-c-yellow);
  font-weight: 700;
  font-style: italic;
}
@media (min-width: 960px) {
  #commons .quote blockquote {
    margin-top: 56px;
    line-height: 40px;
    font-size: 32px;
  }
}
section#commons {
  margin-bottom: 384px;
}

#autonomy ol {
  list-style: auto;
  margin-left: 1em;
}
</style>
