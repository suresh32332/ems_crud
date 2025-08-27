package learn.code.build.ems_backend.Controller;

import learn.code.build.ems_backend.Dto.EmployeDto;
import learn.code.build.ems_backend.Service.EmployeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("api/employees")

public class EmployeController {
    @Autowired
    private EmployeService employeService;

    // build employee and create a new employees
    @PostMapping
    public ResponseEntity<EmployeDto>  CreateEmploye(@RequestBody EmployeDto employeDto) {
          EmployeDto saveEmploye = employeService.createEmploye(employeDto);
          return new ResponseEntity<>(saveEmploye, HttpStatus.CREATED);
    }

    // get single employe id
    @GetMapping("{id}")
    public ResponseEntity<EmployeDto> getEmployeId(@PathVariable("id") long employeId ){
        EmployeDto employeDto = employeService.getEmployeId(employeId);
        return new ResponseEntity<>(employeDto,HttpStatus.OK);
    }

    // get all employees id
    @GetMapping
     public ResponseEntity<List<EmployeDto>> getAllEmployee(){
        List<EmployeDto> employee= employeService.getAllEmployeId();
        return new ResponseEntity<>(employee,HttpStatus.OK);
    }
   // update all employee
    @PutMapping("{id}")
    public ResponseEntity<EmployeDto> updateEmploye(@PathVariable("id") Long id, @RequestBody EmployeDto updateEmploye){
        EmployeDto employeDto =employeService.updateEmploye(id, updateEmploye);
        return new ResponseEntity<>(employeDto,HttpStatus.OK);
    }

   // delete employee from db
    @DeleteMapping("{id}")
      public ResponseEntity<String> deleteEmploye(@PathVariable("id") Long employId ){
        employeService.deleteEmploye(employId);
        return ResponseEntity.ok("Employee deleted Successfully");
    }

}
