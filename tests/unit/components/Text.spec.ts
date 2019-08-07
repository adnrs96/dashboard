import Text from '@/components/Text.vue'
import { mount } from '@vue/test-utils'

describe('Text.vue', () => {
  it('should handle h1 to h2', () => {
    const h1 = mount(Text, {
      propsData: {
        head: '1'
      }
    })
    const h2 = mount(Text, {
      propsData: {
        head: '2'
      }
    })

    expect(h1.contains('h1')).toBeTruthy()
    expect(h2.contains('h2')).toBeTruthy()
  })

  it('should handle p1 to p6', () => {
    const p1 = mount(Text, {
      propsData: {
        p: '1'
      }
    })
    const p2 = mount(Text, {
      propsData: {
        p: '2'
      }
    })
    const p3 = mount(Text, {
      propsData: {
        p: '3'
      }
    })
    const p4 = mount(Text, {
      propsData: {
        p: '4'
      }
    })
    const p5 = mount(Text, {
      propsData: {
        p: '5'
      }
    })
    const p6 = mount(Text, {
      propsData: {
        p: '6'
      }
    })

    expect(p1.contains('p')).toBeTruthy()
    expect(p2.contains('p')).toBeTruthy()
    expect(p3.contains('p')).toBeTruthy()
    expect(p4.contains('p')).toBeTruthy()
    expect(p5.contains('p')).toBeTruthy()
    expect(p6.contains('p')).toBeTruthy()
  })

  it('should have the good font-size', () => {
    const h1 = mount(Text, {
      propsData: {
        head: '1'
      }
    })
    const h2 = mount(Text, {
      propsData: {
        head: '2'
      }
    })
    const p1 = mount(Text, {
      propsData: {
        p: '1'
      }
    })
    const p2 = mount(Text, {
      propsData: {
        p: '2'
      }
    })
    const p3 = mount(Text, {
      propsData: {
        p: '3'
      }
    })
    const p4 = mount(Text, {
      propsData: {
        p: '4'
      }
    })
    const p5 = mount(Text, {
      propsData: {
        p: '5'
      }
    })
    const p6 = mount(Text, {
      propsData: {
        p: '6'
      }
    })

    expect(h1.classes('text-5xl')).toBeTruthy()
    expect(h2.classes('text-2xl')).toBeTruthy()
    expect(p1.classes('text-lg')).toBeTruthy()
    expect(p2.classes('text-base')).toBeTruthy()
    expect(p3.classes('text-sm')).toBeTruthy()
    expect(p4.classes('text-sm')).toBeTruthy()
    expect(p5.classes('text-xs')).toBeTruthy()
    expect(p6.classes('text-xs')).toBeTruthy()
  })

  it('should have the good font-weight', () => {
    const regular = mount(Text, {
      propsData: {
        weight: 'regular'
      }
    })
    const bold = mount(Text, {
      propsData: {
        weight: 'bold'
      }
    })
    const semibold = mount(Text, {
      propsData: {
        weight: 'semibold'
      }
    })
    const medium = mount(Text, {
      propsData: {
        weight: 'medium'
      }
    })

    expect(regular.classes('font-normal')).toBeTruthy()
    expect(bold.classes('font-bold')).toBeTruthy()
    expect(semibold.classes('font-semibold')).toBeTruthy()
    expect(medium.classes('font-medium')).toBeTruthy()
  })

  it('should have the good line-height', () => {
    const h1 = mount(Text, {
      propsData: {
        head: '1'
      }
    })
    const h2 = mount(Text, {
      propsData: {
        head: '2'
      }
    })
    const p1 = mount(Text, {
      propsData: {
        p: '1'
      }
    })
    const p2 = mount(Text, {
      propsData: {
        p: '2'
      }
    })
    const p2medium = mount(Text, {
      propsData: {
        p: '2',
        weight: 'medium'
      }
    })

    const p3 = mount(Text, {
      propsData: {
        p: '3'
      }
    })
    const p4 = mount(Text, {
      propsData: {
        p: '4'
      }
    })
    const p5 = mount(Text, {
      propsData: {
        p: '5'
      }
    })
    const p6 = mount(Text, {
      propsData: {
        p: '6'
      }
    })

    expect(h1.classes('leading-normal')).toBeTruthy()
    expect(h2.classes('leading-normal')).toBeTruthy()
    expect(p1.classes('leading-normal')).toBeTruthy()
    expect(p2.classes('leading-normal')).toBeTruthy()
    expect(p2medium.classes('leading-normal')).toBeTruthy()
    expect(p3.classes('leading-normal')).toBeTruthy()
    expect(p4.classes('leading-normal')).toBeTruthy()
    expect(p5.classes('leading-normal')).toBeTruthy()
    expect(p6.classes('leading-normal')).toBeTruthy()
  })
})
