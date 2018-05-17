import React from 'react'
import ReactDOM from 'react-dom'
import NewCat from '../NewCat'
import {mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewCat />, div)
})

it('has a name input', () => {
  const component = mount(<NewCat />)
  expect(component.find('.control-label#name').text()).toBe("Cat Name: ")
})

it('has a age input', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('.control-label#age').text()).toBe("Age: ")
})

it('has a enjoys input', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('.control-label#enjoys').text()).toBe("Enjoys: ")
})
