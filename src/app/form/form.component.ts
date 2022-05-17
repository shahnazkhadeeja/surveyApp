import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {  ViewChild } from "@angular/core";
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  surveyform: any = FormGroup;
  current_stage:any=1
  stage2_data:any;
  stage4_data:any;
  stage5_data:any;
  stage3_data:any;
  email:String='';
  username:String='';
  phone1:String='';
  phone2:String='';
  q1:String='';
  value:string="";
  stage1_data:any={}
  user_val1:any=''
  user_val2:any='';
  user_val3:any='';
  user_val4:any='';
data1:any;
finaldata:any="";

  constructor(public service:SurveyService,public router:Router) { }

  ngOnInit(): void {


  }

  changeStage(stage:any) {
    this.current_stage=stage
  
    if(this.current_stage==2){      
     this.stage1_data={email:this.email,username:this.username,phone1:this.phone1,phone2:this.phone2};     
     console.log(this.stage1_data)
      // data1=this.stage1_data
    }
    else if(this.current_stage==3){      
     this.stage2_data={q1:this.user_val1};     
     console.log(this.stage2_data)
    }
    else if(this.current_stage==4){      
      this.stage3_data={q2:this.user_val2};     
      console.log(this.stage3_data)
     }
     else if(this.current_stage==5){      
      this.stage4_data={q3:this.user_val3};     
      console.log(this.stage4_data)
     }
     else if(this.current_stage==6){      
      this.stage5_data={q4:this.user_val4};     
      console.log(this.stage5_data)
        
      let  finaldata={stagedata1:this.stage1_data,stagedata2:this.stage2_data,stagedata3:this.stage3_data,stagedata4:this.stage4_data,stagedata5:this.stage5_data};
      console.log(finaldata)
      this.service.createSurveydata(finaldata).subscribe(Response=>{
        if (Response.status == 'success')
        console.log("successfully add data to service")
      });
      
     }
      
  }

  setq1(event:any){
  this.user_val1= event.value
  console.log(this.user_val1)

  }


  setq2(event:any){
    this.user_val2= event.value
    console.log(this.user_val2)
  
    }
    setq3(event:any){
      this.user_val3= event.value
      console.log(this.user_val3)
    
      }
      setq4(event:any){
        this.user_val4= event.value
        console.log(this.user_val4)
      
        }
      
        // finalStage(){
        // let  finaldata={stagedata1:this.stage1_data,stagedata2:this.stage2_data,stagedata3:this.stage3_data,stagedata4:this.stage4_data,stagedata5:this.stage5_data};
        //   console.log(finaldata)
        //   this.service.createSurveydata(finaldata).subscribe(Response=>{
        //     if (Response.status == 'success')
        //     console.log("successfully add data to service")
        //   });
        // }

}
