import { inject, defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { componentSymbol } from '../../provide'
import { ComponentMap } from '../../types'
import { Navigators } from '@comunion/components/src'
import { SimpleButton } from '@comunion/components/src'

import './index.css'

export default defineComponent({
  name: 'Library',
  setup() {
    const components: ComponentMap = inject(componentSymbol)!
    return () => (
      <div class="p-library">
        <div class="p-library-left">
          <div class="p-library-logo">This is logo</div>
          <div class="p-library-navs">
            <Navigators title="Components">
              {Object.keys(components).map(componentName => (
                <Navigators.Item key={componentName} route={`/lib/components/${componentName}`}>
                  {componentName}
                </Navigators.Item>
              ))}
            </Navigators>
          </div>
        </div>
        <div class="p-library-right">
          <div class="p-library-header">todo</div>
          <div class="p-library-content">
            <SimpleButton />
          </div>
        </div>
      </div>
    )
  },
})
