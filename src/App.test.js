import React from 'react';
import App from './App'
import Creatures from './Creatures'
import CreatureDetails from './CreatureDetails'
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

describe('Routes', () => {
  it('should show unicorn page when unicorn is selected', () => {
    const wrapper = mount(
            <MemoryRouter initialEntries={[ '/unicorns' ]}>
              <App/>
            </MemoryRouter>
          );
    expect(wrapper.find(Creatures)).toHaveLength(1);        
  })

  it('should show puppies page when puppy is selected', () => {
    const wrapper = mount(
            <MemoryRouter initialEntries={[ '/puppies' ]}>
              <App/>
            </MemoryRouter>
          );
    expect(wrapper.find(Creatures)).toHaveLength(1);        
  })

  it('should show sharks page when shark is selected', () => {
    const wrapper = mount(
            <MemoryRouter initialEntries={[ '/sharks' ]}>
              <App/>
            </MemoryRouter>
          );
    expect(wrapper.find(Creatures)).toHaveLength(1);        
  })

  it('should show an individual shark page when a shark is selected', () => {
    const wrapper = mount(
            <MemoryRouter initialEntries={[ '/sharks/1' ]}>
              <App/>
            </MemoryRouter>
          );
    expect(wrapper.find(CreatureDetails)).toHaveLength(1);        
  })

  it('should not be able to find an individual shark page when a shark is selected', () => {
    const wrapper = mount(
            <MemoryRouter initialEntries={[ '/sharks/15' ]}>
              <App/>
            </MemoryRouter>
          );
    expect(wrapper.find(CreatureDetails)).toHaveLength(0);        
  })

  it('should not show the CreatureDetails component when the main page is rendered', () => {
    const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
              <App/>
            </MemoryRouter>
          );
    expect(wrapper.find(CreatureDetails)).toHaveLength(0);        
  })

  it('should show the App component when the main page is selected', () => {
    const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
              <App/>
            </MemoryRouter>
          );
    expect(wrapper.find(App)).toHaveLength(1);        
  })
})
