import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnloggedRoutingModule } from './unlogged-routing.module';
import { UnloggedComponent } from './unlogged/unlogged.component';

@NgModule({
  declarations: [UnloggedComponent],
  imports: [
    CommonModule,
    UnloggedRoutingModule    
  ]
})
export class UnloggedModule { }
