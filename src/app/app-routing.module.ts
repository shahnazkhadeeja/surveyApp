import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { LogoComponent } from './logo/logo.component';
import { QrcComponent } from './qrc/qrc.component';
import { VcardComponent } from './vcard/vcard.component';

const routes: Routes = [

  
      {
        path: '',
        component: FormComponent,

      },
      {
        path: 'qrc',
        component: QrcComponent

      },

      {
        path: 'visitingcard',
        component: VcardComponent

      },
      {
        path: 'logo',
        component: LogoComponent

      }
      
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









