import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private Token: TokenService , private route: Router) { }
public token=this.Token.get() ;
public visible =false ;
  ngOnInit(): void {

  }

}
