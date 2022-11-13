<script lang="ts" setup>
/**
 * Define props
 */
interface Props {
  document: object
}
const props = defineProps<Props>()

const htmlString = useDocumentToHtmlString(props.document);
</script>

<template>
    <div v-html="htmlString"></div>
</template>
