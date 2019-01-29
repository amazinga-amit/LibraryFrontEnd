import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, RequiredValidator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.scss']
})
export class AddMemberFormComponent implements OnInit {

  public addMemForm: any;
  @Input() MemPopup: boolean;
  @Output() onSubmit = new EventEmitter();
  constructor(private fb: FormBuilder, private Services: ServicesService) {
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['MemPopup']) {
      this.addMemForm = this.fb.group({
       // member_id: ['', Validators.required],
        memberName: [''],
        contactNum: [''],
        emailId: [''],
        issuedFlag: ['']
      })
    }
  }
  onsubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.addMemForm.value);
    this.Services.postMyMemberReqst(this.addMemForm.value).subscribe(res => {
      console.log(res);
    });
    this.onSubmit.emit(true);
  }

}
