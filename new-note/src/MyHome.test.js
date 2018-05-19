import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'



import TextComp from './MyApp/01-Home'
describe('<TextComp />', () => {
    Enzyme.configure({ adapter: new Adapter() })

    it('renders correctly', () => {
        const Wrapper = Enzyme.shallow(<TextComp />)
        expect.anything(Wrapper)
    })
})