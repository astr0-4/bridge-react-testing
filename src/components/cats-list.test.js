import React from 'react';
import { shallow } from 'enzyme';
import CatsList from './cats-list';
import Cat from './cat'

describe('cats list component tests', () => {
  const cat1 = {
    name: 'Snuggles',
    picture: 'https://picsofsnugglez.com/1'
  }

  const cat2 = {
   name: 'Red',
   picture: 'https://picsofsnugglez.com/2'
  }

  const props = {
    cats: [cat1, cat2]
  }

  it('should render all the cats in the array', () => {
    const cats = [cat1, cat2]
    const wrapper = shallow(<CatsList { ...props } />);
    expect(wrapper.find(Cat)).toHaveLength(cats.length);
  });

  it('should render each cat', () => {
    const wrapper = shallow(<CatsList { ...props } />);
    const cat1Component = <Cat name={cat1.name} picture={cat1.picture} />
    const cat2Component = <Cat name={cat2.name} picture={cat2.picture} />
    expect(wrapper.contains(cat1Component)).toEqual(true)
    expect(wrapper.contains(cat2Component)).toEqual(true)
  });
})

