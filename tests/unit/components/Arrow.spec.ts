import { mount } from '@vue/test-utils'
import Arrow from '@/components/Arrow.vue'

describe('Arrow.vue', () => {
  describe('direction', () => {
    it('should point left', () => {
      const arrow = mount(Arrow, {
        propsData: {
          left: true
        }
      })

      expect(arrow.classes('rotate')).toBeTruthy()
    })

    it('should point top left', () => {
      const arrow = mount(Arrow, {
        propsData: {
          left: true,
          top: true
        }
      })

      expect(arrow.classes('rotate-45deg')).toBeTruthy()
    })

    it('should point top', () => {
      const arrow = mount(Arrow, {
        propsData: {
          top: true
        }
      })

      expect(arrow.classes('rotate-90deg')).toBeTruthy()
    })

    it('should point top right', () => {
      const arrow = mount(Arrow, {
        propsData: {
          top: true,
          right: true
        }
      })

      expect(arrow.classes('rotate-135deg')).toBeTruthy()
    })

    it('should point right', () => {
      const arrow = mount(Arrow, {
        propsData: {
          right: true
        }
      })

      expect(arrow.classes('rotate-180deg')).toBeTruthy()
    })

    it('should point bottom right', () => {
      const arrow = mount(Arrow, {
        propsData: {
          right: true,
          bottom: true
        }
      })

      expect(arrow.classes('rotate-225deg')).toBeTruthy()
    })

    it('should point bottom', () => {
      const arrow = mount(Arrow, {
        propsData: {
          bottom: true
        }
      })

      expect(arrow.classes('rotate-270deg')).toBeTruthy()
    })

    it('should point bottom left', () => {
      const arrow = mount(Arrow, {
        propsData: {
          bottom: true,
          left: true
        }
      })

      expect(arrow.classes('rotate-315deg')).toBeTruthy()
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
