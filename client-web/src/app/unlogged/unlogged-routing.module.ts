import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnloggedComponent } from './unlogged/unlogged.component';

const routes: Routes = [
  {path:'', component:UnloggedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnloggedRoutingModule { }
