<template>
  <component :is="component" />
</template>

<script lang="ts" setup>
const props = defineProps({
  name: String
})

const component = `icons-${props.name}`
</script>