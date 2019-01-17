import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationThumbnailComponent, DestinationGalleryComponent } from './components';
import { DestinationResolver } from './destination.resolver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';
import { ActivityService } from '../activity/activity.service';
import { ActivityComponent } from '../activity/activity.component';

@NgModule({
	imports: [
		DestinationRoutingModule,
		CommonModule,
		HttpClientModule,
		ApiModule,
	],
	providers: [
		DestinationService,
		DestinationResolver,
		ActivityService,
	],
	declarations: [
		DestinationComponent,
		DestinationThumbnailComponent,
		DestinationGalleryComponent,
		ActivityComponent,
	],
	exports: [
		DestinationThumbnailComponent,
		ActivityComponent,
	]
})
export class DestinationModule {}
