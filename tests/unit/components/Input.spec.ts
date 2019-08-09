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

    it('should emit', () => {
      const valid = mount(Input)

      expect.assertions(9)
      const vm = valid.vm as any
      vm.onClick()
      expect(valid.emitted().click).toBeTruthy()
      vm.onFocus()
      expect(valid.emitted().focus).toBeTruthy()
      expect(vm).toHaveProperty('focused', true)
      vm.onBlur()
      expect(valid.emitted().blur).toBeTruthy()
      expect(vm).toHaveProperty('focused', false)
      vm.onChange()
      expect(valid.emitted().change).toBeTruthy()
      vm.onInput({ target: { value: 'toto' } })
      expect(valid.emitted().input).toBeTruthy()
      expect(valid.emitted().update).toBeTruthy()
      expect(valid.emitted().input[0]).toEqual(['toto'])
    })

    it('should emit no-value', () => {
      const valid = mount(Input)

      expect.assertions(1)
      const vm = valid.vm as any
      vm.onInput(undefined)
      expect(valid.emitted().update[0]).toEqual([''])
    })
  })
})
