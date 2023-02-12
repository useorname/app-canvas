const images = ref<string[]>([])
const texts = ref<string[]>(['Just buy it.'])

export const useAssetsStore = () => {

  return {
    images,
    texts
  }
}