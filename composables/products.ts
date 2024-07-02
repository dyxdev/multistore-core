export const useProducts = async () => {

  const { data, error } = await useFetch('/api/store/local-data')

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch products.`,
    })
  }

  const fetchCategory = (category?: string) => {
    // // Optimize any image urls in the data contents
    // const { optimizeImage } = useOptimizeImage()

    return data.value.products.filter(
      (product) => !category || product.category === category,
    )
    
  }

  return { ...data, fetchCategory }
}
