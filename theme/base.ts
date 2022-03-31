import plugin from 'windicss/plugin'

export default plugin(({ addBase, theme }) => {
  addBase({
    html: {
      height: '100%',
    },
    body: {
      background: theme('colors.gray.900') as string,
      color: theme('colors.gray.300') as string,
      minHeight: theme('height.screen') as string,
      height: '100%',
    },
  })
})