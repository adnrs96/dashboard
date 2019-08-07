import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  describe('get path()', () => {
    it('should return the good color', () => {
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

      expect((black.vm as any).textColor).toBe('white')
      expect((white.vm as any).textColor).toBe('black')
    })
  })

  describe('get textColor', () => {
    it('should return the good icon', () => {
      const github = mount(Button, {
        propsData: {
          icon: 'github-o'
        }
      })
      const gitlab = mount(Button, {
        propsData: {
          icon: 'gitlab-o'
        }
      })
      const google = mount(Button, {
        propsData: {
          icon: 'google-f'
        }
      })

      expect((github.vm as any).path).toBe(
        './assets/img/logos/github-waving-cat-outline.svg'
      )
      expect((gitlab.vm as any).path).toBe(
        './assets/img/logos/gitlab-outline.svg'
      )
      expect((google.vm as any).path).toBe(
        './assets/img/logos/google-filled.svg'
      )
    })
  })
})
