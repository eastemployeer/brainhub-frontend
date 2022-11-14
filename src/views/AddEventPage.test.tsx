import React from 'react';
import { render } from '@testing-library/react';
import AddEventPage from './AddEventPage';

describe('AddEventPage view', () => {
  it('renders 4 inputs on page', () => {
    const { container } = render(<AddEventPage />);
    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toEqual(4);
  });

  it('renders button type submit as the last child of the form', () => {
    const { container } = render(<AddEventPage />);
    const form = container.querySelector('form');
    expect(form?.lastChild).toHaveAttribute('type', 'submit');
  });

  it('renders initially not active dimmer', () => {
    const { container } = render(<AddEventPage />);
    const dimmer = container.querySelector('.dimmer');
    expect(dimmer).not.toHaveClass('active');
  });
});
