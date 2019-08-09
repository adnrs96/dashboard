import { mount } from '@vue/test-utils'
import Icon from '@/components/Icon.vue'

describe('Icon.vue', () => {
  it('should have the good color', () => {
    expect.assertions(3)

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

  describe('get current', () => {
    it('should return icon properties', () => {
      expect.assertions(3)

      const icon = mount(Icon, {
        propsData: {
          icon: 'spinner'
        }
      })
      const vm = icon.vm as any

      expect(vm.current.name).toEqual('spinner')
      expect(vm.current.height).toEqual(20)
      expect(vm.current.width).toEqual(20)
    })

    it('should return empty properties when icon is not found', () => {
      expect.assertions(5)

      const icon = mount(Icon, {
        propsData: {
          icon: 'toto'
        }
      })
      const vm = icon.vm as any

      expect(vm.current.name).toEqual('')
      expect(vm.current.height).toEqual(0)
      expect(vm.current.width).toEqual(0)
      expect(vm.current.circle).toEqual({})
      expect(vm.current.path).toEqual({})
    })
  })
})
