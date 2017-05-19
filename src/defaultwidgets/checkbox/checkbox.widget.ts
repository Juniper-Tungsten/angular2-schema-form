import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-checkbox-widget',
  template: `<div class="widget form-group">
    <label [attr.for]="id" class="horizontal control-label" [ngClass]="{ 'hidden-xs-up hidden-xs-down': schema.title === schema.description }">
        {{ schema.title }}
    </label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<div class="checkbox">
		<span class="horizontal control-label">
			<input [formControl]="control" [attr.name]="name" [indeterminate]="control.value !== false && control.value !== true ? true :null" type="checkbox" [attr.disabled]="schema.readOnly">
			<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
			{{schema.description}}
		</span>
	</div>
</div>`
})
export class CheckboxWidget extends ControlWidget {}
