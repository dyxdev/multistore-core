import {ofetch} from "ofetch"


export default defineNuxtPlugin(() => {
    
    const runtime = useRuntimeConfig()

    const api = $fetch.create({
      baseURL: runtime.public.apiBase as string,
      //Aqui van los interceptores como si fuera axios
      
     /* onRequest({ request, options, error }) {
        if (session.value?.token) {
          const headers = options.headers ||= {}
          if (Array.isArray(headers)) {
            headers.push(['Authorization', `Bearer ${session.value?.token}`])
          } else if (headers instanceof Headers) {
            headers.set('Authorization', `Bearer ${session.value?.token}`)
          } else {
            headers.Authorization = `Bearer ${session.value?.token}`
          }
        }
      },
      async onResponseError({ response }) {
        if (response.status === 401) {
          await navigateTo('/login')
        }
      }*/
    })
  
    // Expose to useNuxtApp().$api
    return {
      provide: {
        api
      }
    }
  })
  