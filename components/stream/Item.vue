<template>
  <div class="bg-gray-800">
    <div class="aspect-9/16 overflow-hidden">
      <StreamSites
        v-if="!streamType"
        @type="setStreamType"
      />

      <StreamUrl
        v-else-if="!streamUrl"
        :type="streamType"
        @url="setStreamUrl"
        @back="reset"
      />

      <StreamLiveStream
        v-else
        :type="streamType"
        :url="streamUrl"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StreamTypes } from '~/types/stream'

const props = defineProps<{
  paramKey: string
}>()

const streamType = ref(null)
const streamUrl = ref(null)

const setStreamType = (type: StreamTypes) => {
  streamType.value = type
}

const setStreamUrl = (url: string) => {
  streamUrl.value = url
}

const reset = () => {
  streamType.value = null
  streamUrl.value = null
}
</script>
