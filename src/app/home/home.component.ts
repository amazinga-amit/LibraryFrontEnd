import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { ServicesService} from '../services/services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // public emailChartType: ChartType;
    // public emailChartData: any;
    // public emailChartLegendItems: LegendItem[];

    // public hoursChartType: ChartType;
    // public hoursChartData: any;
    // public hoursChartOptions: any;
    // public hoursChartResponsive: any[];
    // public hoursChartLegendItems: LegendItem[];

    // public activityChartType: ChartType;
    // public activityChartData: any;
    // public activityChartOptions: any;
    // public activityChartResponsive: any[];
    // public activityChartLegendItems: LegendItem[];
    public cols: any;
    public excelResult: any;
    public rqstform: boolean = false; 
    public showPopup: boolean;
    public selectedRow: any; 
  constructor(private Services: ServicesService) { }

  ngOnInit() {

    this.Services.fetchMyData().subscribe(res => {
      this.excelResult= res; 
      console.log(res)});

      this.cols = [
        { field: 'bookID', header: 'Book Id', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } }, 
        { field: 'bookName', header: 'Book Name', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
        { field: 'bookAddDate', header: 'book add date', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },            
        { field: 'bookAvailFlag', header: 'Availiblity', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } } 
      ]   
   
  }
  handleRequestbook(event)
  {
    this.rqstform = !this.rqstform;
    console.log(this.rqstform);
    console.log("I am pressed");
  }
  handleRequestbook2(event)
  {
    this.showPopup = !this.showPopup;
    console.log(this.showPopup);
    console.log("I am pressed");
  }
  onSubmit(event) {
    this.rqstform = false;
  }
  onSubmit2(event) {
    this.showPopup = false;
  }
  onRowSelect(event){
    console.log(event.data);
    this.selectedRow = event.data;
  }

}
