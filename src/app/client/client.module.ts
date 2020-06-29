import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { RxHistoryComponent } from './rx-history/rx-history.component';
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
  {
    path: '',
    component:MainComponent,
  children: [
     {
       path:'',
       component:HomePageComponent
      },
      {
        path:'RxHistoryClient'
      ,
      component:RxHistoryComponent
      }
   ],
  },
];

@NgModule({
  declarations: [NavbarComponent, MenubarComponent, HomePageComponent, MainComponent, RxHistoryComponent],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, NgxPaginationModule

  ]
})
export class ClientModule { }
