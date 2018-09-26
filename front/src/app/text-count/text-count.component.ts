import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-text-count',
  templateUrl: './text-count.component.html',
  styleUrls: ['./text-count.component.css']
})
export class TextCountComponent implements OnInit {
	inputText = "coucou";
	testVar = 2;
	inputLen = this.inputText.length;
	//inputLen = 2

  private lbUrl = 'http://localhost:3000/api/Texts';

  putText (text : string): void {
     // Put request to add some text
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    const httpOptions = {headers:headers}
    let textObj = {
      Author:'Antoine',
      Content: text,
      Good: 'Amazingly well written!'
    };
    
    let resp = this.http.put(this.lbUrl, textObj, httpOptions)
    console.log(resp)
    resp.subscribe(x => console.log(x))

    // Simple request to check results
    headers = new HttpHeaders().set('Accept', 'application/json')
    const httpOptionsGet = {headers:headers}
    resp = this.http.get(this.lbUrl,httpOptionsGet)
    console.log(resp)
    resp.subscribe(x => console.log(x))
  }

    constructor(private http: HttpClient) { 
 
  }

  ngOnInit() {
  }

}
