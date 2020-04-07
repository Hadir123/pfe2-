import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { SnotifyModule, SnotifyService } from 'ng-snotify';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private jarwis: JarwisService, private notifier:NotifierService,) { }

  ngOnInit(): void {
  }
  public form ={
    email:null ,
  }
  public error:null;
onSubmit()
{
this.jarwis.sendPasswordRestLink(this.form).subscribe(
  data=>this.HandleResponse(data),
 err=>this.HandleError(err)

);
}
HandleResponse(res)
{//console.log(res);

  this.notifier.notify("success", "You are awesome! I mean it!");
  this.form.email=null ;
  alert('Check your Email');
}
HandleError(error){
this.error=error.error.error
}
}
