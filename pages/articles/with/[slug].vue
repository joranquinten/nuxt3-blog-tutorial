<script lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <ArticleOverview :tag="$route.params.slug" />
</template>
