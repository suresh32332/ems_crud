package learn.code.build.ems_backend.Dto;

 // -------------------------only use this class getter and setter method ------------

public class EmployeDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNo;


    public EmployeDto (){}
    public EmployeDto(Long id ,String firstName, String lastName, String email, String phoneNo) {
        this.firstName = firstName;
        this.id = id;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo;
    }

 //Getter and Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }
}
