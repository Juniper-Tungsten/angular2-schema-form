import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormElementComponent } from './formelement.component';
import { FormComponent } from './form.component';
import { WidgetChooserComponent } from './widgetchooser.component';
import { ArrayWidget, ButtonWidget, ObjectWidget, CheckboxWidget, FileWidget, IntegerWidget, TextAreaWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget } from './defaultwidgets';
import { DefaultWidget } from './default.widget';
import { WidgetRegistry } from './widgetregistry';
import { DefaultWidgetRegistry } from './defaultwidgets';
import { SchemaValidatorFactory, ZSchemaValidatorFactory } from './schemavalidatorfactory';
import { FormElementComponentAction } from "./formelement.action.component";
var moduleProviders = [
    {
        provide: WidgetRegistry,
        useClass: DefaultWidgetRegistry
    },
    {
        provide: SchemaValidatorFactory,
        useClass: ZSchemaValidatorFactory
    }
];
var SchemaFormModule = (function () {
    function SchemaFormModule() {
    }
    SchemaFormModule.forRoot = function (providers) {
        if (providers) {
            providers.forEach(function (provider) {
                var found = moduleProviders.find(function (p) { return p.provide === provider.provide; });
                found.useClass = provider.useClass;
            });
        }
        return {
            ngModule: SchemaFormModule,
            providers: moduleProviders.slice()
        };
    };
    SchemaFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ReactiveFormsModule],
                    declarations: [
                        FormElementComponent,
                        FormElementComponentAction,
                        FormComponent,
                        WidgetChooserComponent,
                        DefaultWidget,
                        ArrayWidget,
                        ButtonWidget,
                        ObjectWidget,
                        CheckboxWidget,
                        FileWidget,
                        IntegerWidget,
                        TextAreaWidget,
                        RadioWidget,
                        RangeWidget,
                        SelectWidget,
                        StringWidget,
                    ],
                    entryComponents: [
                        FormElementComponent,
                        FormElementComponentAction,
                        FormComponent,
                        WidgetChooserComponent,
                        ArrayWidget,
                        ButtonWidget,
                        ObjectWidget,
                        CheckboxWidget,
                        FileWidget,
                        IntegerWidget,
                        TextAreaWidget,
                        RadioWidget,
                        RangeWidget,
                        SelectWidget,
                        StringWidget,
                    ],
                    exports: [
                        FormComponent,
                        FormElementComponent,
                        FormElementComponentAction,
                        WidgetChooserComponent,
                        ArrayWidget,
                        ButtonWidget,
                        ObjectWidget,
                        CheckboxWidget,
                        FileWidget,
                        IntegerWidget,
                        TextAreaWidget,
                        RadioWidget,
                        RangeWidget,
                        SelectWidget,
                        StringWidget
                    ]
                },] },
    ];
    /** @nocollapse */
    SchemaFormModule.ctorParameters = function () { return []; };
    return SchemaFormModule;
}());
export { SchemaFormModule };
