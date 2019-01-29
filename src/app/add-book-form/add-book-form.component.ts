import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss']
})
export class AddBookFormComponent implements OnInit, OnChanges {

  public addBkForm: any;
  @Input() showPopup: boolean;
  @Output() onSubmit = new EventEmitter();
  constructor(private fb: FormBuilder, private Services: ServicesService) {
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['showPopup']) {
      this.addBkForm = this.fb.group({
     //   bookID: ['', Validators.required],
        bookName: [''],
        bookAddDate: [''],
        bookAvailFlag: ['']
      })
    }
  }
  onsubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.addBkForm.value);
    this.Services.postMyData(this.addBkForm.value).subscribe(res => {
      console.log(res);
    });
    this.onSubmit.emit(true);
  }
}
