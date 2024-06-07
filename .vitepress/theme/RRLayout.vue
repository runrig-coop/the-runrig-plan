<script setup>
import { onMounted } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import RRSection from './RRSection.vue';
import RRHomeBG from './RRHomeBG.vue';
import RRPostHeader from './RRPostHeader.vue'
import openFieldImage from './assets/open_field_system.png';
import stackImage from './assets/stack-diagram.svg';

const { Layout } = DefaultTheme;
const data = useData();
const { frontmatter: fm, isDark } = data;

onMounted(() => {
  // The maximum heights used as the basis for the scroll position,
  // mapped to breakpoints @media min-widths that change the body height.
  const maxBodyHeights = {
    0: 4220,
    640: 4337,
    960: 4357,
  };
  // Max out the body height to the above values, rather than using the actual
  // height of the document body, because the lower page sections might expand
  // as text and other content is added, but that shouldn't effect the animation
  // higher up on the page.
  function calcScrollPosition(breakpoints) {
    const [minWidth, ...rest] = breakpoints || Object.keys(maxBodyHeights).reverse();
    const isMin = rest.length === 0 || window.innerWidth >= minWidth;
    if (isMin) {
      const maxHeight = maxBodyHeights[minWidth];
      const bodyHeight = Math.min(maxHeight, document.body.offsetHeight);
      const scrollHeight = bodyHeight - window.innerHeight;
      const position = window.pageYOffset / scrollHeight;
      return position
    }
    return calcScrollPosition(rest);
  };
  // Create a custom CSS property, var(--scroll), for scroll animations,
  // such as the home page background image.
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', calcScrollPosition());
  }, false);
});

// const openFieldImage = './assets/open_field_system.png';
// const stackImage = './assets/stack-diagram.svg';

const ctaButtons = [
  {
    theme: 'brand',
    text: 'Read the Plan',
    link: '/overview',
  },
  {
    theme: 'alt',
    text: 'Get Involved',
    link: '/get-involved',
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
            Runrig is a communal farming platform, a <em>libre</em> software
            project and a method of socio-ecological design. It aims for
            collective sovereignty over not just our food, but also the labor
            that raises it, the land and living things that support it, and the
            data connecting connecting it all.
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
            Free &amp; open source software is a starting point, not the
            destination. Full computing autonomy requires control of the
            underlying infrastructure, something beyond the capacity of most
            individuals. Runrig redistributes control of the entire system back
            to <em>all</em> users, in collective ownership.
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
            Runrig emphasizes ecology, dialogue and free play over any specific
            technology, because the evolution of a software system is only one
            factor in the evolution of the broader social and natural systems in
            which it is embedded. Rather than make an independent, greenfield
            alternative to existing software platforms, we seek out targeted
            interventions that can multiply the impact of already available tools.
            Runrig aims to be the mortar joining these technological building
            blocks together, while reinforcing and giving shape to the whole.
          </p>
          <div id="open-field-system">
            <img id="open-field-img" :src="openFieldImage">
          </div>
        </template>
      </RRSection>
      <RRSection id="autonomy">
        <template #section-info>
          <h2 class="name">
            <span class="clip">Autonomy by design</span>
          </h2>
          <p class="text">
            To achieve collective ownership and democratic control of the shared
            system, while preserving the data rights of individual users, Runrig
            comprises 3 functional layers:
          </p>
          <ol>
            <li>A single, collectively owned data storage provider.</li>
            <li>Many federated cooperative service platforms.</li>
            <li>Local-first and self-hosted applications.</li>
          </ol>
          <div id="stack-diagram">
            <img :src="stackImage">
          </div>
        </template>
      </RRSection>
      <RRSection id="next" :actions="ctaButtons">
        <template #section-info>
          <h1 class="name">
            <span class="clip">What's Next?</span>
          </h1>
          <!-- Using vp-doc class for text-decoration on <a> tags -->
          <p class="text vp-doc">
            In the <a href="/roadmap-2024">Runrig Roadmap for 2024</a> we propose a
            <a href="/roadmap-2024#three-phase-business-plan">3-phase business model</a>
            for a workers' cooperative, which can then steward the development of
            the platform cooperatives and eventually "One Big Data Co-op," à la
            Bill Haywood and the Wobblies. Right now as a volunteer-driven group,
            we're in <em>Phase Zero</em>. Before taking any contracts or pursuing
            grants for the following phases, we're building out one or two
            <a href="/roadmap-2024#projects-for-2024">reference implementations</a>
            to test the viability of the model at each phase of development. We're
            holding open workshops every other week, along with community chat rooms
            and discussion boards, so anyone can <a href="/get-involved">get involved</a>.
            As we progress, we're actively seeking partnerships and collaborations with
            similarly aligned organizations, and eventually hope to recruit farmers,
            food & tech workers and activists as coop members,
            so <a href="https://buttondown.email/runrig" target="_blank">sign up</a>
            for our newsletter to receive occasional updates.
          </p>
          <p class="text vp-doc">
            The Runrig Plan is a living document that describes the main design
            principles of the social and ecological technologies we are building
            now and in the near future. The <a href="/overview">Overview
            </a> is intended for a general audience and is the best place to
            start for all interested. Two appendices are also presented now,
            though they are still in a very rough stage of draft. The
            <a href="/architecture">Architecture</a> page will go into
            more technical detail of the underlying software and networking
            systems involved in the implementation of Runrig, while the
            <a href="/ecology">Ecology</a> page will cover more of the
            social, environmental and economic aspects of the plan, as well as
            governance structures and legal considerations.
          </p>
        </template>
      </RRSection>
    </template>
  </Layout>
  <Layout v-else-if="data.page.value.relativePath.startsWith('posts/')">
    <template #doc-before>
      <RRPostHeader :fm="fm" :page="data.page"/>
    </template>
    <template #default></template>
  </Layout>
  <Layout v-else/>
</template>

<style>
.rr-home section .text {
  max-width: 42em;
  margin-bottom: 32px;
}
@media (min-width: 640px) {
  .rr-home section .text {
    max-width: 36em;
  }
}
@media (min-width: 960px) {
  .rr-home section .text {
    max-width: 39em;
  }
}
.rr-home section {
  min-height: 42em;
}

@media (min-width: 960px) {
  .rr-home section {
    min-height: 54em;
  }
}
@media (min-width: 1152px) {
  .rr-home section {
    min-height: 54em;
  }
}
.align-right .name,
.align-right .quote,
.align-right .text {
  text-align: right;
  margin-inline-start: auto;
  white-space: pre-line;
}

section#runrig-hero {
  min-height: 60em;
}
section#runrig-hero .main {
  padding-top: max(22em, 40vh);
}
@media (min-width: 640px) {
  section#runrig-hero {
    min-height: 72em;
  }
  section#runrig-hero .main {
    padding-top: 384px;
  }
}
@media (min-width: 960px) {
  section#runrig-hero .main {
    padding-top: 512px;
  }
}
@media (min-width: 1152px) {
  section#runrig-hero .text {
    max-width: 42em;
  }
}

@media (min-width: 640px) {
  section#commons {
    min-height: 64em;
  }
}
@media (min-width: 960px) {
  section#commons {
    min-height: 92em;
  }
  section#commons .main {
    padding-top: 352px;
  }
}
@media (min-width: 1152px) {
  section#commons {
    min-height: 72em;
  }
  section#commons .main {
    padding-top: 64px;
  }
}
#commons .quote blockquote {
  margin-top: 48px;
  line-height: 32px;
  font-size: 24px;
  color: var(--vp-c-yellow-1);
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
  }
}

#autonomy .name {
  grid-area: auto-name;
}
#autonomy #stack-diagram {
  grid-area: auto-diagram;
  margin: auto;
  position: relative;
  width: 100%;
  height: 100%;
}
#autonomy .text {
  grid-area: auto-text;
}
#autonomy ol {
  grid-area: auto-layers;
  list-style: auto;
  margin: auto auto 64px 1em;
}
@media (min-width: 960px) {
  #autonomy .main {
    display: grid;
    grid-template-columns: 46% 46%;
    column-gap: 8%;
    grid-template-areas:
      "auto-diagram ."
      "auto-diagram auto-name"
      "auto-diagram auto-text"
      "auto-diagram auto-layers"
      "auto-diagram .";
  }
}

@media (min-width: 960px) {
  #stack-diagram img {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: stack-diagram-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
}
@keyframes stack-diagram-960 {
  0% {
    transform: scale(3);
    right: 50%;
  }
  50% {
    transform: scale(3);
    right: 50%;
  }
  80% {
    transform: scale(1);
    right: 0;
  }
  100% {
    transform: scale(1);
  }
}
@media (min-width: 1152px) {
  #stack-diagram img {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: stack-diagram-1152 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
}
@keyframes stack-diagram-1152 {
  0% {
    transform: scale(2.5);
    right: 50%;
  }
  55% {
    transform: scale(2.5);
    right: 50%;
  }
  75% {
    transform: scale(1.5);
    right: 0;
  }
  100% {
    transform: scale(1.5);
  }
}
</style>
