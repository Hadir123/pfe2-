import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pharamcist',
  templateUrl: './add-pharamcist.component.html',
  styleUrls: ['./add-pharamcist.component.css']
})
export class AddPharamcistComponent implements OnInit {
id1=null ;
id2=null;
edit=true ;

  constructor(private router:Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id1 =this.route.snapshot.params['id1'];
    console.log(this.id1);
    this.id2=this.route.snapshot.params['id2'];
    console.log(this.id2);
    if((this.id1==='null')&&(this.id2==='null'))
    { alert("y3tk kasra");
      this.router.navigateByUrl('addPharmacy');
    }
  }

}
