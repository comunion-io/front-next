import { defineComponent } from 'vue'

import './index.css'

export default defineComponent({
  name: 'LinkButton',
  props: {},
  setup(props, ctx) {
    return () => <button>SimpleButton</button>
  },
})
