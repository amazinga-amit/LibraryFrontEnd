import { Component, OnInit , Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicesService} from '../services/services.service';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
 export class LoginformComponent implements OnInit {

   constructor() { }

   ngOnInit() {
   }

 }
// export class LibraryFormComponent implements OnInit {
//   public libForm: any;
//   @Input() openForm: boolean;
//   constructor(private fb: FormBuilder, private Services: ServicesService) { }

//   ngOnInit() {
//    this.libForm = this.fb.group({
//      bookName: ['',Validators.required],
//      owner: [''],
//      assignTo: ['']
//    })
    
//   }
//   onSubmit() {
//     // TODO: Use EventEmitter with form value
//     console.log(this.libForm.value);
//     this.Services.postMyData(this.libForm.value).subscribe(res => { 
//       console.log(res)});
      
//   }

// }
