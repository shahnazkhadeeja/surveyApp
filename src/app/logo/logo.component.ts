import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { image } from 'html2canvas/dist/types/css/types/image';
import { NgxQrcodeStylingService, Options } from 'ngx-qrcode-styling';



@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})

export class LogoComponent implements AfterViewInit {
  qr_data:string='';
  organisations:any;
  names:any;
  phones:any;
  email:any;
  url:any;
  url2:any;
    public config: Options = {
     
     image:"data:image/jpeg;base64,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",
 
       data:'hamir asher',
    
       backgroundOptions: {
        color: "#ffffff",
      },
      }
      //  printing to visiting card
  
  
  
    
    constructor(private qrcode: NgxQrcodeStylingService) {
      
     
    }
    
   
    ngAfterViewInit(): void {
        // Create QRCode by Service and HTMLElement 
        this.qrcode.create(this.config, document.getElementById('canvas'))
    }
}


