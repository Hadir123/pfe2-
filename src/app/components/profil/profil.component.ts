import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { TokenService } from 'src/app/Services/token.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  public edite:boolean;
  public test=null;
  public user=null;
  public $id=null ;
  public token= null ;
  public search =null ;
  public adresse=null;
  public vetInfo=null ;
  public petowners=[] ;
  public relation=[];
  public teste2=null ;
  public idvet=null ;
  show : boolean=true ;
 // img:null ;
image:File =null ;
  fichierAEnvoyer: File = null;

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  form={
    //img:this.img,
    name:'hdiar'


  }
  constructor(private http: HttpClient , private Token:TokenService) { }

  ngOnInit() {


    this.token =this.Token.get();

     this.http.get('http://backend2.test:8800/api/Profil?token='+this.token).subscribe(data=>{console.log(data)

     this.test= data ;
     this.user=this.test.user ;
     this.adresse=this.test.adresse ;
console.log(this.user);
console.log(this.adresse)
  },
      err=>console.log(err)) ;


  }


  fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }


    onSubmit() {
      const formData = new FormData();
      formData.append('file', this.fileData);
      console.log(this.fileData);
     /* this.http.post('url/to/your/api', formData)
        .subscribe(res => {
          console.log(res);
          //this.uploadedFilePath = res.data.filePath;
          alert('SUCCESS !!');
        })*/ }


  edit()
  {
    this.edite=true;
  }
  changeStatus()
 {
   this.show=!this.show ;

 }
 Save()
 { console.log(this.image);

 const formData = new FormData();
formData.append('image', this.image );
  console.log(formData);
 // this.form.img=formData;
 this.http.post('http://backend2.test:8800/api/tof?token='+this.token,formData).subscribe(res => {
      console.log(res);
      this.test=res ;
      console.log(this.test);
      alert('SUCCESS !!');

      this.http.get('http://backend2.test:8800/api/Profil?token='+this.token).subscribe(data=>{console.log(data)

      this.test= data ;
      this.user=this.test.user ;
      this.adresse=this.test.adresse ;
 console.log(this.user);
 console.log(this.adresse)
 this.show=!this.show ;});
    }, err=>console.log(err))
 }

    onSelectFile(event) { // called each time file input changes
       /* if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]); // read file as data url

          reader.onload = (event) => { // called once readAsDataURL is completed
            //this.img= event.target;
            console.log(event.target.result)
          }
        }*/
        console.log(event);
        this.image = <File>event.target.files[0]
        console.log(this.image)

    }

}
