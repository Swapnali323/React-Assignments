import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import EmployeeList from './components/EmployeeList';
// import EmployeeList from './components';
import employees from './components/EmployeeList';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('first test',() =>{
  const container = render(<EmployeeList employees={[]}  />);
const headers = thead.find('th');
expect(headers).toHaveLength(EmployeesToShow.length);
})