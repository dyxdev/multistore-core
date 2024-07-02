import {ofetch} from "ofetch"


export const apiGlobal = ofetch.create({
    baseURL: import.meta.env.VITE_BASE_URL as string,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.apiKey as string}`,
    },
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