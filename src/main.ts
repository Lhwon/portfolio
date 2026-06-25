import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import './styles.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'portfolioLight',
    themes: {
      portfolioDark: {
        dark: true,
        colors: {
          background: '#101418',
          surface: '#171d23',
          primary: '#5fb3a6',
          secondary: '#9fb7d5',
          accent: '#f2c46d',
          info: '#6aa8d8',
        },
      },
      portfolioLight: {
        dark: false,
        colors: {
          background: '#f7fafc',
          surface: '#ffffff',
          primary: '#187c74',
          secondary: '#385675',
          accent: '#d8902f',
          info: '#3b82f6',
          'on-background': '#17202a',
          'on-surface': '#17202a',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: 'lg',
    },
    VCard: {
      rounded: 'lg',
    },
  },
})

createApp(App).use(vuetify).mount('#app')
