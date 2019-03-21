import Components from './components'

function install(Vue, opts = {}) {
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install: install })
}

export default {
  install
}
