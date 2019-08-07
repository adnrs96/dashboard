import { mount } from '@vue/test-utils'
import Arrow from '@/components/Arrow.vue'

describe('Arrow.vue', () => {
  describe('direction', () => {
    it('should point left', () => {
      const basic = mount(Arrow)
      const left = mount(Arrow, {
        propsData: {
          left: true
        }
      })

      expect.assertions(6)

      expect(basic.classes('rotate-90deg')).toBeFalsy()
      expect(basic.classes('rotate--90deg')).toBeFalsy()
      expect(basic.classes('rotate-180deg')).toBeFalsy()

      expect(left.classes('rotate-90deg')).toBeFalsy()
      expect(left.classes('rotate--90deg')).toBeFalsy()
      expect(left.classes('rotate-180deg')).toBeFalsy()
    })

    it('should point right', () => {
      const right = mount(Arrow, {
        propsData: {
          right: true
        }
      })

      expect.assertions(3)

      expect(right.classes('rotate-90deg')).toBeFalsy()
      expect(right.classes('rotate--90deg')).toBeFalsy()
      expect(right.classes('rotate-180deg')).toBeTruthy()
    })

    it('should point top', () => {
      const top = mount(Arrow, {
        propsData: {
          top: true
        }
      })

      expect.assertions(3)

      expect(top.classes('rotate-90deg')).toBeTruthy()
      expect(top.classes('rotate--90deg')).toBeFalsy()
      expect(top.classes('rotate-180deg')).toBeFalsy()
    })

    it('should point bottom', () => {
      const bottom = mount(Arrow, {
        propsData: {
          bottom: true
        }
      })

      expect.assertions(3)

      expect(bottom.classes('rotate-90deg')).toBeFalsy()
      expect(bottom.classes('rotate--90deg')).toBeTruthy()
      expect(bottom.classes('rotate-180deg')).toBeFalsy()
    })
  })

  describe('circled', () => {
    it('should have a circle', () => {
      const arrow = mount(Arrow, {
        propsData: {
          circled: true
        }
      })

      expect.assertions(4)

      expect(arrow.classes('border')).toBeTruthy()
      expect(arrow.classes('border-solid')).toBeTruthy()
      expect(arrow.classes('border-gray-20')).toBeTruthy()
      expect(arrow.classes('rounded-full')).toBeTruthy()
    })

    it('should not have a circle', () => {
      const arrow = mount(Arrow)

      expect.assertions(4)

      expect(arrow.classes('border')).toBeFalsy()
      expect(arrow.classes('border-solid')).toBeFalsy()
      expect(arrow.classes('border-gray-20')).toBeFalsy()
      expect(arrow.classes('rounded-full')).toBeFalsy()
    })
  })
})
