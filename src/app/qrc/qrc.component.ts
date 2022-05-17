import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qrc',
  templateUrl: './qrc.component.html',
  styleUrls: ['./qrc.component.css']
})
export class QrcComponent implements OnInit {
  qr_data:string='';
  organisations:any;
  names:any;
  phones:any;
  email:any;
  url:any;
  url2:any;
  constructor(public router:Router) { 
    
    
  }
  
 ngOnInit(){

  let name="shahnaz",
    organisation="INDUS Real Estate",
    phone="0544516292",
    email='shahnaz@gmail.com',
    url='https://www.indusre.com/',
    url2='https://www.indusre.com/indus-real-estate-agent-paresh-chaturvedi-a-2.html',
    Birthday='12-12-1990',
    pic='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8eW91bmclMjB3b21hbnxlbnwwfHwwfHw%3D&w=1000&q=80';
 
    //  printing to visiting card


this.qr_data= `BEGIN:VCARD
VERSION:3.0
N:${name}
ORG:${organisation}
TEL;TYPE=voice,work:${phone}
EMAIL:${email}
URL:${url}
URL:${url2}
BDAY:${Birthday}
END:VCARD
`

 this.names=name;
 this.organisations=organisation;
 this.phones=phone;
this.email=email;
this.url=url;
this.url2=url2;

//PHOTO;ENCODING=BASE64;TYPE=jpeg:${pic}
 
}
}