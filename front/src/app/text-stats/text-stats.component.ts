import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text-stats',
  templateUrl: './text-stats.component.html',
  styleUrls: ['./text-stats.component.css']
})
export class TextStatsComponent implements OnInit {
	url = "http://localhost:3000/api/Texts/"
	stats = {}
	@Input() xVals 
	@Input() yVals
	emptyStats = {}
	async getStats(id:String){
			//let resp = this.http.get(this.url+id+"/stats")
			//resp.toPromise().then(x => {this.stats=x; console.log('Promise resolved.')})
			var stat = await this.http.get(this.url+id+"/stats").toPromise()
			var err = stat['stats']['err']
			if(err==0){
				this.stats = stat["stats"]['stat']
			}
			else{
				this.stats = this.emptyStats
			}
			this.xVals = Object.values(this.stats)
			this.yVals = Object.keys(this.stats)
	}

  constructor(private http: HttpClient) { 
  	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var i
	for(i=0; i<alphabet.length; i++){
		this.emptyStats[alphabet[i]] = 0
	}
	this.stats= this.emptyStats
	this.xVals = Object.values(this.stats)
	this.yVals = Object.keys(this.stats)
  }

  ngOnInit() {
  }

}
