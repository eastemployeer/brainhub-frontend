import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import FormField from './FormField';

const event = {
  firstName: "John",
  lastName: "Brooks",
  email: "exampl@gmail.com",
  date: '2023-01-01',
};

const register = jest.fn();

describe('FormField component', () => {
  it('checks onChange calls after input value changes', () => {
    const onChange = jest.fn(e => expect(event.firstName).toContain(e.target.value));
    
    render(<FormField name="firstName" label="First name" onChange={onChange} register={register} errors={{}} />);
    const input = screen.getByRole('textbox');
    user.type(input, event.firstName);
    
    expect(onChange).toHaveBeenCalledTimes(4); // Because value is "John" -> 4 letters
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: event.firstName,
        }),
      }));
  });

  it('renders label with proper text', () => {
    const onChange = jest.fn();

    render(<FormField name="firstName" label="First name" onChange={onChange} register={register} errors={{}} />);

    expect(screen.getByText(/first name/i)).toBeInTheDocument();
  });
});
