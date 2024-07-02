import { apiGlobal } from "~/services/api"

export function useApiUtil() {
    const config = useRuntimeConfig()
    return {
        generateApiUrl: (url: string) => `${config.public.API_BASE_URL}${url}`,
        checkInstanceApiUrl: ()=> apiGlobal("/some")
    }
}