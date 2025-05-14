<script setup>
import { data } from './../.vitepress/theme/posts.data.js';
import RRPostIndex from './../.vitepress/theme/RRPostIndex.vue';
</script>

<RRPostIndex :data="data" />
