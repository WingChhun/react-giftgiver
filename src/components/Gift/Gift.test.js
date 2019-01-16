import React from 'react';
import { shallow, mount } from 'enzyme';
import Gift from './Gift';

const props = {
  gift: { id: 1 },
  removeGift: jest.fn()
};

const wrapper = shallow(<Gift />);

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
  });

  describe('When typing into a person input', () => {
    let inputPerson;
    const value = 'Uncle';
    const event = {
      target: {
        value: value
      }
    };

    beforeEach(() => {
      inputPerson = wrapper.find('.input-person').simulate('change', event);
    });

    it('updates the person in state', () => {
      expect(wrapper.state().person).toEqual(value);
    });
  });

  describe('when typing into the present input', () => {
    let inputPresent = null;
    const value = 'Hello World';
    const event = {
      target: {
        value
      }
    };

    beforeEach(() => {
      inputPresent = wrapper.find('.input-present').simulate('change', event);
    });

    it('Updates the present in state', () => {
      expect(wrapper.state().present).toEqual(value);
    });
  });

  describe(`When clicking 'remove gift' trigger the removeGift() props function to all`, () => {
    const gift = shallow(<Gift {...props} />);
    let btnRemoveGift = null;
    //TODO: Before each click the remove gift button
    beforeEach(() => {
      btnRemoveGift = gift.find('.btn-remove');

      btnRemoveGift.simulate('click');
    });

    it(`Calls the removeGift() function`, () => {
      expect(props.removeGift).toHaveBeenCalled();
    });
  });
});
