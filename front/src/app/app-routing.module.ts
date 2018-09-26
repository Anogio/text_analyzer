import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextCountComponent }      from './text-count/text-count.component';

const routes: Routes = [
  { path: 'new', component: TextCountComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
  	exports: [ RouterModule ]
})

export class AppRoutingModule {}