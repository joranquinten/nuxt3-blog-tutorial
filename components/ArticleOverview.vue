<script lang="ts" setup>
interface Props {
  tag?: string;
}
const props = defineProps<Props>();

const searchParams = props.tag
    ? await useTagSearch(props.tag)
    : undefined;

const articles = await useArticles({ searchParams, key: props?.tag || '' });
const tags = await useTags();
</script>

<template>
  <h1>Articles</h1>
  <nav>
    <a
      v-for="item in articles"
      :key="item.slug"
      :href="`/articles/${item.slug}`"
      :title="item.title"
      >{{ item.title }}
    </a>
  </nav>
  <h2>Tags</h2>
  <nav>
    <a
      v-for="item in tags"
      :key="item.slug"
      :href="`/articles/with/${item.slug}`"
      :title="item.title"
      >{{ item.title }}
    </a>
  </nav>
</template>
