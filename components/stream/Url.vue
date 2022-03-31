<template>
  <div class="flex flex-col items-center justify-center p-8 mx-auto space-y-4 md:space-y-8 xl:space-y-16">
    <h2 class="inline-flex items-center space-x-4 text-lg md:text-2xl text-gray-200 font-bold">
      <Icon :name="type" class="h-7 md:h-8" :class="`text-${type}`" />
      
      <span v-if="isTwitch">Enter the <span class="capitalize">{{ type }}</span> streamer's name</span>
      <span v-else-if="isYoutube">Enter the <span class="capitalize">{{ type }}</span> stream ID</span>
    </h2>

    <form @submit.prevent="$emit('url', url)" class="flex flex-col justify-center items-center space-y-4 min-w-90">
      <div class="flex items-center space-x-2 bg-gray-700 rounded-xl p-3 md:p-6 w-full">
        <FormInput
          :value="url"
          :placeholder="placeholder"
          :label="label"
          :helper="helper"
          :ring-color="type"
          @input="handleInput"
        />
      </div>

      <div class="flex space-x-2 w-full">
        <Button variant="secondary" type="button" @click="$emit('back')">Back</Button>
        <Button :variant="type" :disabled="!url" block>Watch stream</Button>
      </div>
      
    </form>
  </div>
</template>

<script lang="ts" setup>
import { StreamTypes } from '~/types/stream'
import useStream from '~/composables/useStream'

const props = defineProps<{
  type: StreamTypes
}>()

const { isTwitch, isYoutube } = useStream(props.type)

const url = ref('')

const label = computed(() => {
  switch (props.type) {
    case StreamTypes.Twitch:
      return 'Streamer name'
    case StreamTypes.Youtube:
      return 'Stream ID'
  }
})

const helper = computed(() => {
  switch (props.type) {
    case StreamTypes.Twitch:
      return 'This is the username that appears in the URL.'
    case StreamTypes.Youtube:
      return 'This is the ID that appears in the URL after "?v="'
  }
})

const placeholder = computed(() => {
  switch (props.type) {
    case StreamTypes.Twitch:
      return 'emongg'
    case StreamTypes.Youtube:
      return 'oHg5SJYRHA0'
  }
})

const handleInput = (value: string) => {
  url.value = value
}
</script>