import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('should have to good color', () => {
    const black = mount(Button, {
      propsData: {
        black: true
      }
    })
    const white = mount(Button, {
      propsData: {
        white: true
      }
    })

    // expect(black.find('p').classes('bg-black')).toBeTruthy()
    // expect(white.find('p').classes('bg-white')).toBeTruthy()
  })
})
