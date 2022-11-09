<script lang="ts" setup>
/**
 * Define props
 */
interface Props {
  slug: string;
}
const props = defineProps<Props>();
// ----------------------------------------------------------------------------
const { title, body, heroImage } = await usePage(props.slug);
</script>

<template>
  <article>
    <header>
      <h1>
        {{ title }}
      </h1>
    </header>
    <div>
      {{ body }}
    </div>
  </article>
</template>
