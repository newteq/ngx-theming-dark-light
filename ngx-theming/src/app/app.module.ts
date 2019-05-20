import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserModule,
		ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
