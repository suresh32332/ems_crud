package learn.code.build.ems_backend.Service;

import learn.code.build.ems_backend.Dto.EmployeDto;

import java.util.List;

public interface EmployeService {

    EmployeDto createEmploye(EmployeDto employeDto);

    EmployeDto getEmployeId(Long employeId);

    List<EmployeDto> getAllEmployeId();

    EmployeDto updateEmploye(Long employeId, EmployeDto updateEmploye);

    void deleteEmploye(Long employeId);
}
