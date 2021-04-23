import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignmentFullStack';
  isValid = false;

  ngOnInit(): void {
    let val = localStorage.getItem('isValidUser')

    if(val != null && val == 'true'){
        this.isValid = true
    }else{
      this.isValid = false
    }
  }
}
