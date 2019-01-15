import React from 'react';
import {shallow, mount} from 'enzyme';
import Gift from "./Gift";

const props = {};

const wrapper = shallow(<Gift/>);

describe(`Gift Component`, () => {

    it('renders without Crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it(`initializes a person and present in state`, () => {
        const state = wrapper.state();
        const expectedData = {
            person: '',
            present: ''
        };
        expect(state).toEqual(expectedData);
    })

    describe('When typing into a person input', () => {

        let inputPerson;
        const value = 'Uncle';
        const event = {
            target: {
                value: value
            }
        };

        beforeEach(() => {
            inputPerson = wrapper
                .find('.input-person')
                .simulate('change', event);
        })

        it('updates the person in state', () => {
            expect(wrapper.state().person).toEqual(value);
        })

    });

    describe('when typing into the present input', () => {

        let inputPresent = null;
        const value = "Hello World"
        const event = {
            target: {
                value
            }
        };

        beforeEach(() => {
            inputPresent = wrapper
                .find('.input-present')
                .simulate('change', event);
        })

        it("Updates the present in state", () => {

            expect(wrapper.state().present).toEqual(value);
        });
    });

})