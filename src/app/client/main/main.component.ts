import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private jarwis :JarwisService ,private app:AppComponent) { }

  ngOnInit(): void {
    this.jarwis.setCLient(true);
    console.log(this.jarwis.client)
this.app.client=true ;
  }

}
