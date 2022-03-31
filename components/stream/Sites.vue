<template>
  <div class="flex flex-col items-center justify-center p-8 mx-auto space-y-8 xl:space-y-16">
    <h2 class="text-lg md:text-2xl text-gray-200 font-bold">Select a streaming site</h2>

    <div class="grid grid-cols-2 gap-4">
      <button
        v-for="type in StreamTypes"
        :key="type"
        class="flex flex-col items-center space-y-4 bg-gray-700 w-full rounded-xl p-4 px-8 font-bold hover:(bg-gray-600) focus:(outline-none ring-2 ring-gray-600 ring-offset-2 ring-offset-gray-600)"
        @click="$emit('type', type)"
      > 
        <Icon :name="type" class="h-12" :class="`text-${type}`" />
        <span class="capitalize">{{ type }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StreamTypes } from '~/types/stream'
</script>