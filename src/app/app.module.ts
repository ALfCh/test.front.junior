import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
//import { ActivityComponent } from './activity/activity.component';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
	],
	declarations: [
		AppComponent,
		//ActivityComponent,
	],
	bootstrap: [//point d'entrée
		AppComponent,
	],
})
export class AppModule {}
