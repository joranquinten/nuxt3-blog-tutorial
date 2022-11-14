<script lang="ts" setup>
interface Props {
  slug: string;
}
const props = defineProps<Props>();

const searchParams = useSlugQuery(props.slug);

const { title, body } = await useArticle({ searchParams, key: props.slug });
</script>

<template>
  <article>
    <header>
      <h1>
        {{ title }}
      </h1>
    </header>
    <div>
      <DocumentToHtmlString :document="body" />
    </div>
  </article>
</template>
