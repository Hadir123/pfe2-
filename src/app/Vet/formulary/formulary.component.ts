import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent implements OnInit {
  public search :string ;
test=null ;
defaultSelection = 'All';
searchText: any;
//address: string;
public benif=[
  {name:'hhhhh',
  tradeName:'ok'},
 {name:'hhhhhhhhhh',
 tradeName:'saa'},
 { name:'heloo'
,tradeName:'cv'}
];
filterArgs: any = { name: '', tradeName: '' };

public benifTest=[];
@ViewChild('searchInput') searchInput: ElementRef;
@ViewChild('searchHi') searchHi: ElementRef;

newPlaceHolder: string = "Search By ....";
config: any;
  constructor() { this.config = {
    itemsPerPage: 7,
    currentPage: 1,
    totalItems: this.benif.length
  } }

  ngOnInit(): void {
    this.search=null ;
    this.benifTest=this.benif;
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  find()
  {this.benifTest=this.benif;
    if(this.test==='Name')

{
  if (this.search!== '') {
    this.benifTest = this.benifTest.filter(res => {
      return res.name.toLowerCase().match(this.search.toLowerCase());
    });
  } else if (this.search === '') {
    this.ngOnInit();
  }

}

else
if(this.test==='Trade Name')
{if (this.search!== '') {
  this.benifTest = this.benifTest.filter(res => {
    return res.tradeName.toLowerCase().match(this.search.toLowerCase());
  });
} else if (this.search === '') {
  this.ngOnInit();
}
}


  }
  change(num)
  {
    if(num==='1')
    {
    this.test='Name'
     // console.log(this.form.current_weight_unit);
     console.log('name')
     this.ngOnInit();
     this.benifTest=this.benif ; }
     else if(num==='2')

   { this.test='Trade Name';
  console.log('Trade Name')
  this.ngOnInit();
  this.benifTest=this.benif ;}
  else
  { this.test=null ;
    this.ngOnInit();
    this.benifTest=this.benif ;}

  }
  Exit()
  {this.search=null ;

    this.ngOnInit();
    this.benifTest=this.benif ;
this.change('0');
       this.searchInput.nativeElement.value = '';
this.searchHi.nativeElement.value='0'
    this.newPlaceHolder= "Search by ";

    //document.getElementById('search');


  }


  searchList(row: any) {
    if (this.searchText) {
      const propVal = row[this.searchText.toLowerCase()] + '';
      if (propVal) {
        return propVal.toUpperCase().indexOf(this.searchText.toUpperCase()) > -1;
      } else {
        return false;
      }
    }
    return true;
  }

  searchFilter() {
    /* this.searchList = this.searchText; */
    if (this.search!== '') {
      this.benifTest = this.benifTest.filter(res => {
        return res.name.toLowerCase().match(this.search.toLowerCase());
      });
    } else if (this.search === '') {
      this.ngOnInit();
    }
  }
}
