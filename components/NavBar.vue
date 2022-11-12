<script lang="ts" setup>
const NavPages = await usePagesNav();
const NavItems = [...NavPages, { slug: "articles", title: "Articles" }];
</script>

<template>
  <nav>
    <a
      v-for="item in NavItems"
      :key="item.slug"
      :href="`/${item.slug}`"
      :title="item.title"
      >{{ item.title }}
    </a>
  </nav>
</template>
