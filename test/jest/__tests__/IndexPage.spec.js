import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('วิวัฒนาการของโลกสมัยใหม่.')
  })
  it('เช็ค ชื่อ ชื่อเล่น และรหัสนักศึกษา', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: 'ฉันรักวิว.',
          firstName: 'ชนาธิป',
          lastName: 'สร้อยจิตร',
          nickName:'เติ้ล',
          stuCode:'318',
        }
      },
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text())
      .toBe('ฉันรักวิว.')
  })

})

test('ทดสอบว่ามีฟอร์ม', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form').exists()).toBe(true)
})

test('ทดสอบว่าใน ฟอร์ม มีการรับค่า(input)', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form > input').exists()).toBe(true)
})

test('ทดสอบว่ามีปุ่ม bottom', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('button').exists()).toBe(true)
})

