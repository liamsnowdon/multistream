<template>
  <button
    class="btn"
    :class="classes"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
type ButtonVariants = 'twitch' | 'youtube' | 'secondary'
type ButtonSizes = 'large' | 'medium' | 'small'

interface ButtonProps {
  loading?: boolean
  disabled?: boolean
  variant?: ButtonVariants
  size?: ButtonSizes
  block?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  loading: false,
  disabled: false,
  variant: 'secondary',
  size: 'medium',
  block: false
})

const isVariant = (variant: ButtonVariants) => props.variant === variant
const isSize = (size: ButtonSizes) => props.size  === size

const classes = computed(() => {
  return {
    'btn--twitch': isVariant('twitch'),
    'btn--youtube': isVariant('youtube'),
    'btn--secondary': isVariant('secondary'),
    'btn--s': isSize('small'),
    'btn--l': isSize('large'),
    'btn--block': props.block
  }
})
</script> 