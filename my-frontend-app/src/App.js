import logo from './logo.svg';
import './App.css';

function App() {
  // Dummy data for the table
  const employees = [
    { EmployeeName: 'John Doe', joiningDate: '2023-01-15', Role: 'Developer', ProjectAssigned: 'Project A' },
    { EmployeeName: 'Jane Smith', joiningDate: '2022-08-20', Role: 'Designer', ProjectAssigned: 'Project B' },
    { EmployeeName: 'Mike Johnson', joiningDate: '2023-03-10', Role: 'Manager', ProjectAssigned: 'Project C' },
  ];

  return (
    <div className="body">
      <div className="top-tab"></div>
      <div className="main-area">
        <div className="left-pane"></div>
        <div className="main">
          <table className="centered-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Joining Date</th>
                <th>Role</th>
                <th>Project Assigned</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.EmployeeName}</td>
                  <td>{employee.joiningDate}</td>
                  <td>{employee.Role}</td>
                  <td>{employee.ProjectAssigned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
