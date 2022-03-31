import plugin from 'windicss/plugin'

export default plugin(({ addComponents, theme }) => {
  addComponents({
    '.btn': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      padding: '0.75rem 1.25rem',
      height: '3rem',
      fontSize: theme('fontSize.base') as string,
      lineHeight: theme('lineHeight.6') as string,
      fontWeight: 'bold',
      borderRadius: '0.625rem',
      color: theme('colors.gray-100') as string,
      '&:disabled': {
        cursor: 'default',
        opacity: '0.75',
      },
      '> :not([hidden]):not([sr=only]) ~ :not([hidden]):not([sr=only])': {
        marginLeft: '0.5rem',
      },
    },

    // ------------
    //   Variants
    // ------------

    // Twitch
    '.btn--twitch': {
      backgroundColor: theme('colors.twitch') as string,
      '&:hover:not(:disabled)': {
        opacity: '0.90',
      },
    },

    // Twitch
    '.btn--youtube': {
      backgroundColor: theme('colors.youtube') as string,
      '&:hover:not(:disabled)': {
        opacity: '0.90',
      },
    },

    // Secondary

    '.btn--secondary': {
      backgroundColor: theme('colors.gray.700') as string,
      '&:hover:not(:disabled)': {
        backgroundColor: theme('colors.gray.600') as string,
      },
      '&:disabled': {
        backgroundColor: theme('colors.gray.700') as string,
        color: theme('colors.gray.100') as string,
      },
    },

    // -----------
    //    Sizes
    // -----------

    // Small
    '.btn--s': {
      padding: '0.5rem 1rem',
      height: '2.5rem',
      fontSize: theme('fontSize.sm') as string,
      lineHeight: theme('lineHeight.5') as string,
    },

    // Large
    '.btn--l': {
      padding: '0.75rem 1.5rem',
      height: '3rem',
      fontSize: theme('fontSize.base') as string,
      lineHeight: theme('lineHeight.6') as string,
    },

    // -----------
    //    Other
    // -----------

    '.btn--block': {
      width: '100%',
    },
  })
})