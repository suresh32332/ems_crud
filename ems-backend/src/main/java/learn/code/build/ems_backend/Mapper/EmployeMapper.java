package learn.code.build.ems_backend.Mapper;

import learn.code.build.ems_backend.Dto.EmployeDto;
import learn.code.build.ems_backend.Models.Employee;


public class EmployeMapper {

    // Takes an Employee object (from DB).
    //Converts it into a EmployeDto object (for frontend/API)

    public static EmployeDto mapToEmployeDto(Employee employe){
        return new EmployeDto(
                employe.getId(),
                employe.getFirstName(),
                employe.getLastName(),
                employe.getEmail(),
                employe.getPhoneNo()
         );
    }

    //Takes a EmployeDto (from frontend/API).
   // Converts it into an Employee entity (for DB save/update).

    public static Employee mapToEmployee(EmployeDto employeDto) {
        return new Employee(
                employeDto.getId(),
                employeDto.getFirstName(),
                employeDto.getLastName(),
                employeDto.getEmail(),
                employeDto.getPhoneNo()
        );
    }
}
