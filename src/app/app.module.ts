import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustDirDirective } from './cust-dir.directive';
import { CustPipePipe } from './cust-pipe.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ReversePipe } from './reverse.pipe';
//import { ServiceDataComponent } from './service-data/service-data.component';
import { ChildComponent } from './life-cycle/child/child.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { PromiseComponent } from './promise/promise.component';
import { DynamicrowComponent } from './dynamicrow/dynamicrow.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DirectivesComponent,
    ReactiveFormComponent,
    BindingComponent,
    PipeComponent,
    CustDirDirective,
    CustPipePipe,
    LifeCycleComponent,
    ReversePipe,
    ChildComponent,
    ServiceDataComponent,
    RxjsOperatorsComponent,
    PromiseComponent,
    DynamicrowComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
