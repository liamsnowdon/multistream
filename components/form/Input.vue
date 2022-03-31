<template>
  <div class="space-y-2 w-full">
    <label :for="label" class="block text-sm font-medium text-gray-200">
      {{ label }}
    </label>

    <input
      :id="label"
      :type="type"
      :disabled="disabled"
      :value="value"
      :placeholder="placeholder"
      class="bg-gray-800 block w-full rounded-lg text-base font-medium text-gray-200 placeholder-gray-600 font-sans py-1 px-2 focus:(outline-none ring-2)"
      :class="`focus:ring-${ringColor}`"
      @input="handleInput"
    />

    <p v-if="helper" class="text-gray-500 text-xs italic">
      {{ helper }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface InputProps {
  value: string | number
  type?: string
  placeholder: string
  disabled?: boolean
  label: string
  helper: string
  ringColor: string
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  value: null,
  placeholder: null,
  disabled: false,
  label: null,
  helper: null,
  ringColor: null,
})

const emit = defineEmits(['input'])

const handleInput = (event: Event) => {
  emit('input', (event.target as HTMLInputElement).value)
}
</script>