<template>
  <template v-if="isTwitch">
    <iframe
      :src="iframeSrc"
      frameborder="0"
      allowfullscreen="false"
      scrolling="no"
    />
  </template>

  <template v-else-if="isYoutube">
    <iframe
      :src="iframeSrc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </template>
</template>

<script lang="ts" setup>
import { StreamTypes } from '~/types/stream'
import useStream from '~/composables/useStream'

const props = defineProps<{
  type: StreamTypes
  url: string
}>()

const config = useRuntimeConfig()
const { isTwitch, isYoutube } = useStream(props.type)

const iframeSrc = computed(() => {
  switch (props.type) {
    case StreamTypes.Twitch:
      return `https://player.twitch.tv/?channel=${props.url}&parent=${config.twitchParent}` // emongg
    case StreamTypes.Youtube:
      return `https://www.youtube.com/embed/${props.url}` // 9qTkE6P3SaQ
  }
})
</script>