package learn.code.build.ems_backend.Repository;

import learn.code.build.ems_backend.Models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeRepo extends JpaRepository<Employee,Long> {

}
