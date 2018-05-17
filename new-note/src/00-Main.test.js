import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Main from './MyApp/00-Main'

Enzyme.configure({ adapter: new Adapter() })
const app = Enzyme.shallow(<Main />)

it('renders correctly', () => {
    expect(app).toMatchSnapshot()
})