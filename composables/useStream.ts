import { StreamTypes } from '~/types/stream'

export default function (type: StreamTypes) {
  const isTwitch = type === StreamTypes.Twitch
  const isYoutube = type === StreamTypes.Youtube

  return {
    isTwitch,
    isYoutube,
  }
}