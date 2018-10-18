import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
