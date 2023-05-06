export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate:"%s Nakamas",
             htmlAttrs: {
                lang: 'es'
              },
              meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Programa de inventario documental para una gestión eficiente y organizada de documentos' },
                { name: 'keywords', content: 'inventario documental, gestión de documentos, software, organización de documentos' }
                ],
                link: [
                    {
                        rel: 'stylesheet',
                        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
                        integrity: 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD',
                        crossorigin: 'anonymous'
                    }
                ],
                script: [
                    {
                        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
                        integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN',
                        crossorigin: 'anonymous'
                    },
                    {
                        src: 'https://kit.fontawesome.com/96549dedfc.js',
                        crossorigin: 'anonymous'
                    },
                ],    
  
        }
    },
    appConfig:{
        nuxtIcon:{
            size:'1.5em',
        }
    },
    
    modules: [
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Roboto: true,
                },
                download: true,
            },
            
        ],
        
        'nuxt-icon',
        '@pinia/nuxt',
        
    ],
  
    // deja utilizar globalmente las configuraciones de body y * pero no variables
  
    css: [
        '@/assets/css/global.css',
    ],
  
    // deja utilizar globalmente las variables pero no las configuraciones de body y *
    vite: {
        css: {
          preprocessorOptions: {
            css: {
              additionalData: '@import "@/assets/css/variables.css";'
            }
          }
        }
    },

  
  })