import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,        
    FooterComponent,             
  ],
  imports: [
    BrowserModule,    
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
  ],
  exports: [ 
    BrowserModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
