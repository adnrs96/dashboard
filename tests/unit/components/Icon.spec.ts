import { mount } from '@vue/test-utils'
import Icon from '@/components/Icon.vue'

describe('Icon.vue', () => {
  it('should have the good color', () => {
    const icon1 = mount(Icon, {
      propsData: {
        icon: 'github-o',
        color: 'white'
      }
    })
    const icon2 = mount(Icon, {
      propsData: {
        icon: 'github-o',
        color: 'neutral'
      }
    })
    const icon3 = mount(Icon, {
      propsData: {
        icon: 'github-o',
        color: 'black'
      }
    })

    expect(icon1.find('svg').classes('text-white')).toBeTruthy()
    expect(icon2.find('svg').classes('text-gray-50')).toBeTruthy()
    expect(icon3.find('svg').classes('text-black')).toBeTruthy()
  })
})
