package learn.code.build.ems_backend.Service;

import learn.code.build.ems_backend.Dto.EmployeDto;
import learn.code.build.ems_backend.Exception.ResourceNotFoundException;
import learn.code.build.ems_backend.Mapper.EmployeMapper;
import learn.code.build.ems_backend.Models.Employee;
import learn.code.build.ems_backend.Repository.EmployeRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeServiceImpl implements EmployeService {
    @Autowired
    private EmployeRepo employeRepo;

    @Override
    public EmployeDto createEmploye(EmployeDto employeDto) {
        Employee employe = EmployeMapper.mapToEmployee(employeDto);
        Employee createEmploye=employeRepo.save(employe);
        return EmployeMapper.mapToEmployeDto(createEmploye);
    }

    @Override
    public EmployeDto getEmployeId(Long employeId) {
        Employee employee = employeRepo.findById(employeId).
                orElseThrow(()->new ResourceNotFoundException("Employe not found " + employeId));
        return EmployeMapper.mapToEmployeDto(employee);
    }

    @Override
    public List<EmployeDto> getAllEmployeId() {
        List<Employee>  employees =employeRepo.findAll();
        return employees.stream().map((employe) -> EmployeMapper.mapToEmployeDto(employe)).collect(Collectors.toList());
    }

    @Override
    public EmployeDto updateEmploye(Long employeeId, EmployeDto updateEmploye) {
        Employee employee = employeRepo.findById(employeeId).orElseThrow(()
                ->new ResourceNotFoundException("not found id " + employeeId));

         employee.setFirstName(updateEmploye.getFirstName());
         employee.setLastName(updateEmploye.getLastName());
         employee.setEmail(updateEmploye.getEmail());
         employee.setPhoneNo(updateEmploye.getPhoneNo());

         Employee updateEmployees = employeRepo.save(employee);

        return EmployeMapper.mapToEmployeDto(updateEmployees);
    }

    @Override
    public void deleteEmploye(Long employeId) {
        Employee employee = employeRepo.findById(employeId).
                orElseThrow(()->new ResourceNotFoundException("Employe not found " + employeId));
        employeRepo.deleteById(employeId);
    }


}
