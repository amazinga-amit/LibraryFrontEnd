import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { IssueModel } from '../models/issue';
import { ConfirmationService } from 'primeng/api';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public cols: any;
  public readRqstResult: any;
  public issueEnabled: boolean = false;
  public issue: IssueModel = new IssueModel();
  public selectedRow: any;
  public msgs: Message[]= [];
  public display: boolean= false;
  constructor(private Services: ServicesService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    console.log(this.issueEnabled, sessionStorage.getItem('isLibrarian'));
    this.Services.fetchRqstData().subscribe(res => {
      this.readRqstResult = res;
      console.log(res)
    });

    this.cols = [
      { field: 'bookId', header: 'Book Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
      { field: 'bookName', header: 'Book Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
      { field: 'memberId', header: 'Member Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
      { field: 'memberName', header: 'Member Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
      { field: 'requestDate', header: 'Rqst Date', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } }
    ]

    if (sessionStorage.getItem('isLibrarian') == 'Y') {
      this.issueEnabled = true;
    }
    else
      this.issueEnabled = false;
  }


  public issueClicked(param) {
    console.log("issue clicked", this.selectedRow);
      this.display= true;
      
  }
  yesClicked(){
    this.display= false;
    if(this.selectedRow){
      this.issue.bookId = this.selectedRow.bookId;
      this.issue.bookName = this.selectedRow.bookName;
      this.issue.memberId = this.selectedRow.memberId;
      this.issue.memberName = this.selectedRow.memberName;
      console.log(this.issue.bookId);

      this.Services.postMyIssueBookReqst(this.issue).subscribe(res => {
        console.log(res);
    });
  }

}
}
