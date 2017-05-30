import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from "../../angular2/app/events/shared/event.service";

@Component ({
    templateUrl:'./app/events/create-event.component.html',
      styles:[`
  em { float: right; color:#E05C65; padding-left: 10px; }
  .error input { background-color: #E3C3C5; }
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999;}
  .error :-moz-placeholder { color:#999; }
  .color :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent{
    isDirty: boolean = true
    constructor (private router: Router, eventService:EventService) {

    }

    saveEvent(formValues) {
        //this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }
    cancel() {
        this.router.navigate(['/events'])
    }

}