import React from 'react';
import { render } from 'react-native-testing-library'; // Assuming you're using react-native-testing-library
import AddApplication from './AddApplication';

test('adds a new job offer and displays it', () => {
  // Render the component
  const { getByPlaceholder, getByText } = render(<AddApplication />);

  // Get the input element and add a new job offer
  const input = getByPlaceholder('Title'); // Assuming this is your input element
  input.props.onChangeText('New Job Offer'); // Simulate typing in a new job offer title

  // Get the button element and trigger the addition of the job offer
  const addButton = getByText('Add'); // Assuming 'Add' is the button text
  addButton.props.onPress(); // Simulate pressing the button

  // Assert that the new job offer appears on the screen
  const newJobOffer = getByText('New Job Offer');
  expect(newJobOffer).toBeTruthy();
});