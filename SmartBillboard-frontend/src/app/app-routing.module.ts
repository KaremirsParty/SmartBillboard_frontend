import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MetamaskComponent } from './metamask/metamask.component';

const routes: Routes = [
  { path: '', component: MetamaskComponent, pathMatch: 'full' },
  { path: 'metamask', component: MetamaskComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
