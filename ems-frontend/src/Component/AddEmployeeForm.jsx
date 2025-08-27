import { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/ListAllEmploye'
import { useNavigate, useParams } from 'react-router-dom'
function AddEmployeeForm() {
    const navegator = useNavigate();
    // -----------------------------------------------------------------------------------3.05------------------------------------------------
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    const { id } = useParams();


    //validaation 
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: ''

    })

    // click the update button specify employee and show form 
    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setPhoneNo(response.data.phoneNo);
            }).catch(errors => {
                console.log(errors)
            })
        }
    }, { id })



    // change  form title 
    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Employees</h2>;
        } else {
            return <h2 className='text-center'>Add New Employees</h2>;
        }
    }


   
    function saveOrUpdateEmployee(e) {
        e.preventDefault();
        if (validation()) {
            const employee = { firstName, lastName, email, phoneNo }
            console.log(employee);

            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navegator('/employee');
                }).catch(errors => {
                    console.log(errors);
                })
            } else {

                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navegator('/employee')
                }).catch(errors => {
                    console.log(errors);
                })
            }


        }

    }
    // validation form 
    function validation() {
        let valid = true;

        const errorsCopy = { ...errors }

        //first name
        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is Required';
            valid = false
        }

        // lastname
        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is Required';
            valid = false
        }

        //email
        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is Required';
            valid = false
        }


        // phone no
        if (phoneNo.trim()) {
            errorsCopy.phoneNo = '';
        } else {
            errorsCopy.phoneNo = 'Phone no is Required';
            valid = false
        }
        setErrors(errorsCopy);
        return valid;

    }


    return (
        <div>
            <div className="container">
                <br /> <br />
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        {
                            pageTitle()
                        }
                        <div className="card-body">
                            <form >
                                <div className="form-group md-2">
                                    <label className="form-label "> First Name : </label>
                                    <input type="text"
                                        placeholder="First Name"
                                        name="FirstName"
                                        value={firstName}
                                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />

                                    {errors.firstName && <div className='invalid-feedback'> {errors.firstName}</div>}
                                </div>


                                <div className="form-group mb2">
                                    <label className="form-label "> Last Name : </label>
                                    <input type="text"
                                        placeholder="Last Name"
                                        name="LastName"
                                        value={lastName}
                                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {errors.lastName && <div className='invalid-feedback'> {errors.lastName}</div>}
                                </div>


                                <div className="form-group mb2">
                                    <label className="form-label "> Email : </label>
                                    <input type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <div className='invalid-feedback'> {errors.email}</div>}
                                </div>



                                <div className="form-group mb2">
                                    <label className="form-label "> Phone No : </label>
                                    <input type="number"
                                        placeholder="Phone Number"
                                        name="number"
                                        value={phoneNo}
                                        className={`form-control ${errors.phoneNo ? 'is-invalid' : ''}`}
                                        onChange={(e) => setPhoneNo(e.target.value)}
                                    />
                                    {errors.phoneNo && <div className='invalid-feedback'> {errors.phoneNo}</div>}
                                </div>

                                <button className='btn btn-success' onClick={saveOrUpdateEmployee}> Submit </button>
                            </form>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default AddEmployeeForm
