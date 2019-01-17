import { Component, Input } from '@angular/core';
import { IActivity} from './activity.model';
//import { ActivityService} from './activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  @Input() activity: IActivity;

}
