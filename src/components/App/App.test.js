import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

const props = {
  gifts: []
};
const app = shallow(<App {...props} />);

describe('App Component', () => {
  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Initializes state with an empty list of gifts', () => {
    const props = {};
    const wrapper = mount(<App {...props} />);

    expect(wrapper.state('gifts')).toEqual([]);
  });

  it(`addButton updates state gifts`, () => {
    const wrapper = shallow(<App {...props} />);
    const expectedData = [
      {
        id: 1
      }
    ];
    wrapper.instance().addButton();

    expect(wrapper.state('gifts')).toEqual(expectedData);
  });

  describe(`Clicking 'add gift' button`, () => {
    const wrapper = shallow(<App {...props} />);
    const button = wrapper.find('.btn-add').first();

    beforeEach(() => {
      button.simulate('click');
    });

    afterEach(() => {
      // Restore the default sandbox here
      wrapper.setState({ gifts: [] });
    });

    it(`adds a new gift to 'state' when clicking the 'add' gift button`, () => {
      const expectedData = [
        {
          id: 1
        }
      ];

      expect(wrapper.state('gifts')).toEqual(expectedData);
    });

    it(`Adds a new gift to the rendered list when clicking the 'add gift' button`, () => {
      const newGifts = wrapper.find('.gift-list').children();

      expect(newGifts.length).toEqual(1);
    });

    it('creates a gift componment', () => {
      expect(wrapper.find('Gift').exists()).toBe(true);
    });

    //TODO: Remove a gift testing
    describe('When a user wants to remove the added gift', () => {
      let wrapper = shallow(<App {...props} />);

      //Note: Access the instance of the wrapper: occurence  of the app component within our tests

      //Note: App.instance(): call removeGift() function within the instance()

      beforeEach(() => {
        //TODO: removeGift does not exist yet
        wrapper.instance().removeGift(1);
      });

      it(`removes gift with id of '1' to be removed from gifst array`, () => {
        //$ Expect to be an empty array because removal
        expect(wrapper.state().gifts).toEqual([]);
      });
    });
  });
});
