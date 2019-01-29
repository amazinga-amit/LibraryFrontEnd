import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { ServicesService} from '../services/services.service';




@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

    public cols: any;
    public issueResult: any;
    public rqstform: boolean = false; 
    public showPopup: boolean;
  constructor(private Services: ServicesService) { }

  ngOnInit() {

    this.Services.fetchIssueData().subscribe(res => {
      this.issueResult= res; 
      console.log(res)});

      this.cols = [
        { field: 'bookId', header: 'Book Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } }, 
        { field: 'bookName', header: 'Book Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
        { field: 'memberId', header: 'member Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },            
        { field: 'memberName', header: 'member Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } } ,
        { field: 'issueDate', header: 'Issue Date', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } } 
      ]   
   
  }
  handleRequestbook(event)
  {
    this.rqstform = !this.rqstform;
    console.log(this.rqstform);
    console.log("I am pressed");
  }
 
  onSubmit(event) {
    this.rqstform = false;
  }
 

  
  
}
