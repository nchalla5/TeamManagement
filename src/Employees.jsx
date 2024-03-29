
import manProfile from "./images/manLogo.jpg";
import womanProfile from "./images/womanLogo.jpg"


const Employees = ({employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick}) => {
    
    return (
        <main className = "container">
          <Filter selectedTeam = {selectedTeam} handleTeamSelectionChange = {handleTeamSelectionChange}/>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                    {
                        employees.map((employee) => (
                            <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam)? 'card m-2 standout':'card m-2'} style={{cursor:"pointer"}} onClick = {handleEmployeeCardClick}>

                                {(employee.gender === 'male')?<img src = {manProfile} className="card-img-top" alt="male-profile"/>:
                                <img src = {womanProfile} className="card-img-top" alt="female-profile"/>}
                                <div className="card-body">
                                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                    <p className="card-text"><b>Designation: </b>{employee.designation}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>           
        </main>
    );
}
function Filter({selectedTeam, handleTeamSelectionChange}) {
  return (
    <div class="row justify-content-center mt-3 mb-3">
      <div class="col-6">
        <select className="form-select form-select-lg" value = {selectedTeam} onChange={handleTeamSelectionChange}>
          <option value="TeamA">Team A</option>
          <option value="TeamB">Team B</option>
          <option value="TeamC">Team C</option>
          <option value="TeamD">Team D</option>
        </select>
      </div>
    </div>
  )
}
export default Employees