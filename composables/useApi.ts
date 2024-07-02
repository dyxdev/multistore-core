import type { UseFetchOptions } from 'nuxt/app'
import {apiGlobal} from "~/services/api"
export function useStoreApi<T>(
  url: string | (() => string),
  options: Omit<UseFetchOptions<T>, 'default'> & { default: () => T | Ref<T> },
) {
  return useFetch(url, {
    ...options,
    $fetch: apiGlobal
  })
}
