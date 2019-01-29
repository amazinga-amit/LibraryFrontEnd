import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {


  public cols: any;
  public excelResult: any;
  public showPopup: boolean = false;
  constructor(private Services: ServicesService) { }


  ngOnInit() {
    this.Services.fetchMyData().subscribe(res => {
      this.excelResult = res;
      console.log(res)
    });

    this.cols = [
      { field: 'bookID', header: 'Book Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
      { field: 'bookName', header: 'Book Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
      { field: 'bookAddDate', header: 'book add date', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
      { field: 'bookAvailFlag', header: 'Availiblity', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } }
    ]
  }

  handleAddBook(event) {
    this.showPopup = !this.showPopup;
    console.log(this.showPopup);
  }

  onSubmit(event) {
    this.showPopup = false;
    
  }
  handleDeletebook() {
    //execute action
  }


}

