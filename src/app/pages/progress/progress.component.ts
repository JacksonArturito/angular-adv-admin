import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css',
  ]
})
export class ProgressComponent  {
  progreso1: Number = 25;
  progreso2: Number = 35;

  get getProceso1(){
    return `${ this.progreso1 }%`;
  }

  get getProceso2(){
    return `${ this.progreso2 }%`;
  }

}
