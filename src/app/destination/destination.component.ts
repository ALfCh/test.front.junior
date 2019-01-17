import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDestination } from './destination.model';
import { IActivity } from '../activity/activity.model';
import { ActivityService } from '../activity/activity.service';
//import { Observable } from 'rxjs';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
	destination: IDestination;
	activities : IActivity[];

	get bgImg() { return `url('${this.destination.bg}')`; }
	constructor(
		protected route: ActivatedRoute,
		protected activityService: ActivityService,
	) {}
	ngOnInit() {
		this.route.data
		.subscribe((data: { destination: IDestination }) => {
			this.destination = data.destination;
		});
		this.activityService.findActivityByDestinationId(this.destination.id)
		.subscribe((activities : IActivity[]) => {
			this.activities = activities;
		});
	}
}
