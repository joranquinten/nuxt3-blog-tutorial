<script lang="ts" setup>
const NavItems = await usePagesNav();
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
    <a href="/articles">Articles</a>
  </nav>
</template>
