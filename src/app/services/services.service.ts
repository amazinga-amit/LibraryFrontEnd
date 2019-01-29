import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public excelUrl= "http://localhost:9090/readExcel";
  public excelWriteUrl= "http://localhost:9090/writeExcel";
  public readreqst = "http://localhost:9090/readRqst";
  public writeRqst = "http://localhost:9090/writeRqst";
  public readIssue = "http://localhost:9090/readIssue";
  public writeIssue = "http://localhost:9090/writeIssue";
  public readHistory = "http://localhost:9090/readHistory";
  public writeHistory = "http://localhost:9090/writeHistory";
  public readMem = "http://localhost:9090/readMem";
  public writeMem ="http://localhost:9090/writeMember";
  public issueBook = "http://localhost:9090/issueBook";
  public returnBook = "http://localhost:9090/returnBook";


  
  constructor(private http: HttpClient  ) { }

  fetchMyData()
  {
    return this.http.get(this.excelUrl);
  }

  postMyData(param)
  {
    return this.http.post(this.excelWriteUrl,param);
  }

  fetchRqstData()
  {
    return this.http.get(this.readreqst);
  }

  postMyBookReqst(param)
  {
    return this.http.post(this.writeRqst,param)
  }
  
  fetchIssueData()
  {
    return this.http.get(this.readIssue);
  }

  postMyIsueReqst(param)
  {
    return this.http.post(this.writeRqst,param)
  }

  fetchHistoryData()
  {
    return this.http.get(this.readHistory);
  }

  postMyHistoryReqst(param)
  {
    return this.http.post(this.writeRqst,param)
  }
  fetchMyMemberData()
  {
    return this.http.get(this.readMem);
  }
  postMyMemberReqst(param)
  {
    return this.http.post(this.writeMem,param)
  }

  postMyIssueBookReqst(param)
  {
    return this.http.post(this.issueBook,param)
  }
  postMyReturnBookReqst(param)
  {
    return this.http.post(this.returnBook,param)
  }


}
