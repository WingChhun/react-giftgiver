import React from 'react';
import {shallow, mount} from 'enzyme';
import App from "./App";

const props = {
    gifts: []
}
const app = shallow(<App {...props}/>);

describe("App Component", () => {
    it("renders properly", () => {
        expect(app).toMatchSnapshot();
    })

    it("Initializes state with an empty list of gifts", () => {

        const props = {};
        const wrapper = mount(<App {...props}/>);

        //        const {gifts} = wrapper.instance.state

        console.log(wrapper.instance);
        console.log(wrapper.state());

        // expect(gifts).toEqual([]);

    })

    it(`adds a new gift to 'state' when clicking the 'add' gift button`, () => {

        const wrapper = mount(<App {...props}/>);

        const button = wrapper
            .find('.btn-add')
            .first();
        const expectedData = [
            {
                id: 1
            }
        ];
        button.simulate('click');

        console.log("HYello");
        expect(wrapper.state('gifts')).toEqual(expectedData);

    })

    it(`adds a new gift to 'state' when clicking the 'add' gift button to be 1 after 2 clicks`, () => {

        const wrapper = mount(<App {...props}/>);

        const button = wrapper
            .find('.btn-add')
            .first();
        const expectedData = [
            {
                id: 1
            }, {
                id: 2
            }
        ];
        button.simulate('click');
        button.simulate('click');

        console.log(wrapper.state());

        expect(wrapper.state('gifts')).toEqual(expectedData);

    })
    afterEach(() => {})
});
