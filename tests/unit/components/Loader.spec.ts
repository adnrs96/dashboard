import Loader from '@/components/Loader.vue'
import { mount } from '@vue/test-utils'

describe('Loader.vue', () => {
  it('should display a loading view', () => {
    const loader = mount(Loader)
    const img = loader.find('img')

    expect(loader.contains('div')).toBeTruthy()
    expect(loader.classes()).toContain('w-screen')
    expect(loader.classes()).toContain('h-screen')
    expect(loader.classes()).toContain('bg-indigo-50')
    expect(loader.classes()).toContain('overflow-hidden')

    expect(img.classes()).toContain('w-full')
    expect(img.attributes().src).toEqual('@/assets/img/loader/loader-bg.png')
  })
})
