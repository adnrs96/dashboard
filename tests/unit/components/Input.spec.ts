import { mount } from '@vue/test-utils'
import Input from '@/components/Input.vue'

describe('Input.vue', () => {
  describe('basic input', () => {
    it('should exist', () => {
      const input = mount(Input)

      expect(input.html()).toBeTruthy()
    })
  })

  describe('validation', () => {
    it('should be neutral when nothing changed', () => {
      const cmpnt = mount(Input)

      expect(cmpnt.classes('border-gray-50')).toBeTruthy()
    })

    it('should be green when it is valid', () => {
      const cmpnt = mount(Input, {
        propsData: {
          valid: true
        }
      })

      expect(cmpnt.classes('border-green-50')).toBeTruthy()
    })

    it('should be red when it is invalid', () => {
      const cmpnt = mount(Input, {
        propsData: {
          valid: false
        }
      })
      const input = cmpnt.find('input')

      expect.assertions(2)
      expect(cmpnt.classes('border-red-50')).toBeTruthy()
      expect(input.classes('text-red-80')).toBeTruthy()
    })

    it('should have a valid icon', () => {
      const valid = mount(Input, {
        propsData: {
          icon: 'github-o'
        }
      })

      expect.assertions(1)
      expect(valid.vm).toHaveProperty('icon', 'github-o')
    })
  })
})
