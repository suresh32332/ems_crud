import { useEffect, useState } from "react";

import { deleteEmployee, ListEmploye } from "../Services/ListAllEmploye";

import { useNavigate } from "react-router-dom";

function ListOfEmploye() {

    const [employe, setEmploye] = useState([]);

    const navegator = useNavigate();

    useEffect(() => {
        getAllEmployee();

    }, [])

    function getAllEmployee() {
        ListEmploye().then((Response) => {
            setEmploye(Response.data);

        }).catch(error => {
            console.error(error);
        })
    }



function AddNewEmployee() {
    navegator('/add-employee')
}
function updateEmployee(id) {
    navegator(`/update-employee/${id}`)
}

function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id).then((response) => {
        getAllEmployee();
    }).catch(errors => {
        console.log(errors);
    })
}



return (
    <div className="container">
        <h2>List of Employee </h2>
        <button className="btn btn-primary" onClick={AddNewEmployee}> Add New Employee</button>

        <table className="table table-striped table-success table-hover table-bordered ">
            <thead>
                <tr>
                    <th>Employe Id</th>
                    <th>Employe FirstName</th>
                    <th>Employe LastName</th>
                    <th>Employe Email</th>
                    <th>Employe PhoneNo</th>
                    <th>Action</th>


                </tr>
            </thead>
            <tbody>
                {
                    employe.map(employe =>
                        <tr key={employe.id}>
                            <td>{employe.id}</td>
                            <td>{employe.firstName}</td>
                            <td>{employe.lastName}</td>
                            <td>{employe.email}</td>
                            <td>{employe.phoneNo}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateEmployee(employe.id)}>Update</button>

                                <button className="btn btn-danger" onClick={() => removeEmployee(employe.id)}
                                    style={{ marginLeft: '10px' }}

                                    >Delete</button>
                            </td>
                        </tr>
                    )
                }

            </tbody>

        </table>
    </div>
);
}

export default ListOfEmploye