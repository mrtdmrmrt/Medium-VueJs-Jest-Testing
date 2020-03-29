import {mount} from '@vue/test-utils'
import MdButton from './MdButton.vue'

describe('MdButton.vue', () => {
  it('Bileşenimizin class özelliğini kontrol edilmesi', () => {
    const wrapper = mount(MdButton)
    expect(wrapper.classes()).toContain('md-button');
  })

 const typeClass = ['default', 'primary','success','warning','danger'];
 typeClass.forEach(item =>{
  it('Bileşenimizin customClass: '+item+' özelliğini props ile kontrol edilmesi',() =>{
    const wrapper = mount(MdButton, {
      propsData: {
        customClass: item
      },
    })
    expect(wrapper.classes()).toContain('md-button--'+item);
   })
 })
 const typeSize = ['small', 'medium', 'large'];
 typeSize.forEach(item =>{
  it('Bileşenimizin size: '+item+' özelliğini props ile kontrol edilmesi',() =>{
    const wrapper = mount(MdButton, {
      propsData: {
        size: item
      },
    })
    expect(wrapper.classes()).toContain('md-button--'+item);
   })
 })
 it('Snapshot özelliği', () => {
  const wrapper = mount(MdButton)
  expect(wrapper.html()).toMatchSnapshot()
})
})

