<script lang="ts" setup>
const articles = await useArticles();
</script>

<template>
  <nav>
    <a
      v-for="item in articles"
      :key="item.slug"
      :href="`/articles/${item.slug}`"
      :title="item.title"
      >{{ item.title }}
    </a>
  </nav>
</template>
