import {Component} from "@angular/core";

@Component({
  selector: 'sf-button-widget',
  template: '<button [attr.type]="button.type" (click)="button.action($event)">{{button.label}}</button>'
})
export class ButtonWidget {
  public button
  public formProperty
}
