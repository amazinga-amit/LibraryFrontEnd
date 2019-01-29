import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services/services.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  public cols: any;
  public readHistoryResult: any;
  constructor(private Services: ServicesService) { }

ngOnInit() {
  this.Services.fetchHistoryData().subscribe(res => {
      this.readHistoryResult= res; 
      console.log(res)});

      this.cols = [
        { field: 'bookId', header: 'Book Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } }, 
        { field: 'bookName', header: 'Book Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
        { field: 'memberId', header: 'Member Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },            
        { field: 'memberName', header: 'Member Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } } ,
        { field: 'issueDate', header: 'Issue Date', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top'} },
        { field: 'submitDate', header: 'Submit Date', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top'} },

      ]   
  }

}
