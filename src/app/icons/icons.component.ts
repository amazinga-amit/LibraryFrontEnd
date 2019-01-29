import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  public cols: any;
  public memberResult: any;
  public MemPopup: boolean = false;
  constructor(private Services: ServicesService) { }


  ngOnInit() {
    this.Services.fetchMyMemberData().subscribe(res => {
      this.memberResult = res;
      console.log(res)
    });

    this.cols = [
      { field: 'memberId', header: 'Member Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
      { field: 'memberName', header: 'Member Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
      { field: 'issuedFlag', header: 'Returned Flag', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } }
     // { field: 'bookAvailFlag', header: 'Availiblity', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } }
    ]
  }

  handleAddMember(event) {
    this.MemPopup = !this.MemPopup;
    console.log(this.MemPopup);
  }

  onSubmit(event) {
    this.MemPopup = false;
    
  }
  handleDeleteMember() {
    //execute action
  }

}
