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

const openFieldImage = '/open_field_system_quadrants.png';
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
      <RRHomeBG :isDark="isDark"/>
    </template>
    <template #home-hero-after>
      <RRSection id="runrig-hero" :actions="ctaButtons">
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
      <RRSection id="commons" class="align-right">
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
          <div id="open-field-system">
            <VPImage id="open-field-img" class="image-src" :image="openFieldImage" />
          </div>
        </template>
      </RRSection>
      <RRSection id="autonomy">
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
          <VPImage class="image-src" :image="stackImage" />
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
  margin-bottom: 32px;
}
@media (min-width: 640px) {
  .rr-home .text {
    max-width: 36em;
  }
}
@media (min-width: 960px) {
  .rr-home .text {
    max-width: 39em;
  }
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
  padding-top: 55vh;
  margin-bottom: 128px;
}
@media (min-width: 640px) {
  section#runrig-hero {
    padding-top: 512px;
    margin-bottom: 256px;
  }
}
@media (min-width: 960px) {
  section#runrig-hero {
    padding-top: 640px;
    margin-bottom: 128px;
  }
}
@media (min-width: 1152px) {
  section#runrig-hero .text {
    max-width: 42em;
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
@media (min-width: 640px) {
  section#commons {
    margin-bottom: 384px;
  }
}

#open-field-system {
  display: none;
}
@media (max-width: 640px) {
  #open-field-system {
    display: block;
    position: relative;
  }
  #open-field-system::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    box-shadow: inset 0 0 8px 8px var(--vp-c-bg);
  }
}

#autonomy ol {
  list-style: auto;
  margin-left: 1em;
}
</style>
