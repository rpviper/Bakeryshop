import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  form: FormGroup;
  employees: any;

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.employeeService.getEmployees().subscribe(employeesFromBackend => {   // siin uus kood
      this.employees = employeesFromBackend.data;
    })
  }

  private initForm(): void {
    this.form = this.fb.group({ // TODO: Add validations
      id: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)]],
      email: ['', Validators.required, Validators.email],
      avatar: ['', Validators.required]
    });
  }

  addEmployee(): void {
    console.log(this.form.value);

    const newEmployee = {
      id: this.form.value.id,
      first_name: this.form.value.name.split(" ")[0],
      last_name: this.form.value.name.split(" ")[1],
      email: this.form.value.email,
      avatar: this.form.value.avatar
    }
    this.employees.push(newEmployee);
    // TODO: Add an employee to the table this.employees.push()
  }

  deleteEmployee(employee): void {
    // TODO: Delete an employee from the table this.employees.splice()
  }
}
