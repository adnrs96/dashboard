import Text from '@/components/Text.vue'
import { mount } from '@vue/test-utils'

describe('Text.vue', () => {
  it('should deplays some text', () => {
    const text = mount(Text)
    text.setProps({
      head: '1'
    })
    expect(text.html()).toBeTruthy()
  })
})
