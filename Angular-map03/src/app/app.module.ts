import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot( {apiKey: 'AIzaSyB6mXdlANO54DFjxLwxFfLJRcbHW8SrdoQ'} )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
