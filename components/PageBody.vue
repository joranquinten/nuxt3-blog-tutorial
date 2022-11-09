<script lang="ts" setup>
/**
 * Define props
 */
interface Props {
  slug: string;
}
const props = defineProps<Props>();
// ----------------------------------------------------------------------------
const config = useRuntimeConfig();

const { title, body, heroImage } = await usePage(props.slug);

const uri = useRoute().path;

useHead({
  title,
  link: [
    {
      rel: "canonical",
      href: `${config.HOST}/${props.slug}`,
    },
  ],
});
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
