
 import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees'

export const ListEmploye = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employees) => axios.post(REST_API_BASE_URL,employees);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

export const updateEmployee = (employeeId,employees) => axios.put(REST_API_BASE_URL + '/' + employeeId,employees);

export const deleteEmployee = (employeeId)  => axios.delete(REST_API_BASE_URL + '/' + employeeId);