import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-request-book-form',
  templateUrl: './request-book-form.component.html',
  styleUrls: ['./request-book-form.component.scss']
})
export class RequestBookFormComponent implements OnInit, OnChanges{

  public addrqForm: FormGroup;
  @Input() rqstform: boolean;
  @Input() selectedRow: any;
  @Output() onSubmit = new EventEmitter();
  constructor(private fb: FormBuilder, private Services: ServicesService) {
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['rqstform']) {
      this.addrqForm = this.fb.group({
        bookId: ['', Validators.required],
        bookName: [''],
         memberId: ['', Validators.required],
         memberName: ['']
      })
    }
    if(this.selectedRow){
    this.addrqForm.controls['bookId'].setValue(this.selectedRow.bookID);
    this.addrqForm.controls['bookName'].setValue(this.selectedRow.bookName);
    }
  }
  submit() {
    // TODO: Use EventEmitter with form value
    console.log(this.addrqForm.value);
    this.Services.postMyBookReqst(this.addrqForm.value).subscribe(res => {
      console.log(res);
    });
    this.onSubmit.emit(true);
  }

}
