import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

export default function () {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  return {
    smAndLarger: breakpoints.greater('sm'),
    mdAndLarger: breakpoints.greater('md'),
    lgAndLarger: breakpoints.greater('lg'),
    
    smAndSmaller: breakpoints.smaller('md'),
    mdAndSmaller: breakpoints.smaller('lg'),
    lgAndSmaller: breakpoints.smaller('xl'),
  }
}