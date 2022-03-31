import { defineConfig } from 'windicss/helpers'
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import basePlugin from './theme/base'
import buttonPlugin from './theme/button'

export default defineConfig({
  preflight: true,

  theme: {
    extend: {
      colors: {
        gray: {
          300: '#efeff1',
          400: '#dedee3',
          500: '#adadb8',
          600: '#464649',
          700: '#1f1f23',
          800: '#18181b',
          900: '#0e0e10',
        },

        primary: {
          50: '#D9F58E',
          100: '#D2F37B',
          200: '#C6F056',
          300: '#B9EC30',
          400: '#A8DF14',
          500: '#8CBA11',
          600: '#7EA90E',
          700: '#3F5308',
          800: '#182003',
          900: '#121702'
        },

        twitch: '#9146FF',
        youtube: '#EE3838',
      },
    },
  },

  safelist: [
    'text-twitch',
    'text-youtube',
    'focus:ring-twitch',
    'focus:ring-youtube',
  ],

  plugins: [
    aspectRatioPlugin,
    basePlugin,
    buttonPlugin,
  ]
})