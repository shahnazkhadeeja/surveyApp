import { Component, OnInit } from '@angular/core';
import {ElementRef, ViewChild, Renderer2 } from '@angular/core';  

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.css']
})
export class QrReaderComponen {

  // elementType = 'url';  
  // public imagePath: any;  
  // value : any;  
  
  // showQRCode: boolean = false;
  // @ViewChild('result') resultElement: ElementRef;    
  // constructor(private renderer: Renderer2) {  
    
  // }  
  
  // preview(files:any) {  
  //   if (files.length === 0)  
  //     return;  
  //   var mimeType = files[0].type;  
  //   if (mimeType.match(/image\/*/) == null) {  
  //     alert("Only images are supported.");  
  //     return;  
  //   }  
  //   var reader = new FileReader();  
  //   reader.readAsDataURL(files[0]);  
  //   reader.onload = (_event) => {  
  //     this.value = reader.result;  
  //     console.log(reader.result);  
  //     this.showQRCode = true;  
  //   }  
  // }  
  // render(e:any) {  
  //   let element: Element = this.renderer.createElement('h1');  
  //   element.innerHTML = e.result;  
  //   this.renderElement(element);  
  // }  
  
  // renderElement(element:any) {  
  //   for (let node of this.resultElement.nativeElement.childNodes) {  
  //     this.renderer.removeChild(this.resultElement.nativeElement, node);  
  //   }  
  //   this.renderer.appendChild(this.resultElement.nativeElement, element);  
  // }  
}  

