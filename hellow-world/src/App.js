import React from "react";
import "./App.css";
import EmployeeList from './components/EmployeeList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

function App() {

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <EmployeeList />
    </div>
  );
}

export default App;

// test('gagag',() =>{
//   const container = render(<EmployeeList data={[]} employees={employees} />);

// There should be ONLY 1 table element
// const table = container.find('table');
// expect(table).toHaveLength(1);
// The table should have ONLY 1 thead element
// const thead = table.find('thead');
// expect(thead).toHaveLength(1);
// The number of th tags should be equal to number of columns
// const headers = thead.find('th');
// expect(headers).toHaveLength(cols.length);
// Each th tag text should equal to column header
// headers.forEach((th, idx) => {
//    expect(th.text()).toEqual(cols[idx].header);
// });
// The table should have ONLY 1 tbody tag
// const tbody = table.find('tbody');
// expect(tbody).toHaveLength(1);
// tbody tag should have the same number of tr tags as data rows
// const rows = tbody.find('tr');
// expect(rows).toHaveLength(data.length);
// })
 // Shallow render the data table
//  const container = shallow(<EmployeeList data={[]} employees={employees} />);

// // There should be ONLY 1 table element
// const table = container.find('table');
// expect(table).toHaveLength(1);
// // The table should have ONLY 1 thead element
// const thead = table.find('thead');
// expect(thead).toHaveLength(1);
// // The number of th tags should be equal to number of columns
// const headers = thead.find('th');
// expect(headers).toHaveLength(cols.length);
// // Each th tag text should equal to column header
// headers.forEach((th, idx) => {
//    expect(th.text()).toEqual(cols[idx].header);
// });
// // The table should have ONLY 1 tbody tag
// const tbody = table.find('tbody');
// expect(tbody).toHaveLength(1);
// // tbody tag should have the same number of tr tags as data rows
// const rows = tbody.find('tr');
// expect(rows).toHaveLength(data.length);
// Loop through each row and check the content
// rows.forEach((tr, rowIndex) => {
//    const cells = tr.find('td');
//    expect(cells).toHaveLength(cols.length);
//    expect(cells.at(0).text()).toEqual(data[rowIndex].id);
//    expect(cells.at(1).text()).toEqual(data[rowIndex].name);
//    expect(cells.at(2).text()).toEqual(data[rowIndex].email);
// });