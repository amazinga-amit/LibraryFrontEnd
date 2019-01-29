import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services/services.service';
import { ReturnModel } from '../models/return';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
   
    public cols: any;
    public readIssueResult: any;
    public returnEnabled: boolean= false;
    public selectedRow: any; 
    //public issue: IssueModel= new IssueModel();
    public return: ReturnModel = new ReturnModel();
    public display: boolean= false;
    constructor(private Services: ServicesService) { }

  ngOnInit() {
    this.Services.fetchIssueData().subscribe(res => {
        this.readIssueResult= res; 
        console.log(res)});
  
        this.cols = [
          { field: 'bookId', header: 'Book Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } }, 
          { field: 'bookName', header: 'Book Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
          { field: 'memberId', header: 'Member Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },            
          { field: 'memberName', header: 'Member Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } } ,
          { field: 'issueDate', header: 'Issue Date', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top'} }
        ]   ;
       //this can wait 
      if(sessionStorage.getItem('isLibrarian')== 'Y'){
        this.returnEnabled = true;
      }
      else 
      this.returnEnabled = false;
    }

     returnClicked(){
      console.log("issue clicked", this.selectedRow);
      this.display= true;
    }

    yesClicked(){
      this.display= false;
      if(this.selectedRow){
        this.return.bookId = this.selectedRow.bookId;
        this.return.bookName = this.selectedRow.bookName;
        this.return.memberId = this.selectedRow.memberId;
        this.return.memberName = this.selectedRow.memberName;
        this.return.issueDate = this.selectedRow.issueDate;
        console.log(this.return.bookId);
  
        this.Services.postMyReturnBookReqst(this.return).subscribe(res => {
          console.log(res);
      });
    }
  
  }
     
}

