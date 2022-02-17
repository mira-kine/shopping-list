import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
// add, delete, edit, and item list displays
test('adds item to list, able to edit', () => {
  render(<App />);
  // initial items rendering
  const addInput = screen.getByPlaceholderText(/item/i);
  const addButton = screen.getByText('Add');

  // check default items
  screen.getByText(/rice/i);
  screen.getByText(/pork tenderloin/i);

  // custom item not displayed
  expect(screen.queryByText(/egg/i)).not.toBeInTheDocument();
  // type into add Item input textbox
  userEvent.type(addInput, 'egg');
  userEvent.click(addButton);
  // verify it was added
  screen.getByText(/egg/i);
  // edit newly added item
  const editButton = screen.getByLabelText('Edit egg');
  userEvent.click(editButton);
  const editInput = screen.getByLabelText('Edit field');
  userEvent.type(editInput, '{selectall}{del}Bread');
  const saveButton = screen.getByRole('button', {
    name: /save/i,
  });
  userEvent.click(saveButton);

  // verify edit, verify something NOT being in there as well
  screen.getByText(/bread/i);
  expect(screen.queryByText('egg')).not.toBeInTheDocument();
  expect(editInput).not.toBeInTheDocument();
  expect(
    screen.queryByText('button', {
      name: /save/i,
    })
  ).not.toBeInTheDocument();

  // Delete
  const deleteButton = screen.getByLabelText(/delete bread/i);
  userEvent.click(deleteButton);
  expect(screen.queryByText(/bread/i)).toBeNull();
  // submit form to render input with text content, checkbox, edit button, delete button
});
