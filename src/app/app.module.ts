import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlownaStronaComponent } from './glowna-strona/glowna-strona.component';
import { HomeComponent } from './home/home.component';
import { AomComponent } from './aom/aom.component';
import { MinegunsComponent } from './mineguns/mineguns.component';
import { AboutComponent } from './about/about.component';
import { HomeGaleriaComponent } from './home-galeria/home-galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    GlownaStronaComponent,
    HomeComponent,
    AomComponent,
    MinegunsComponent,
    AboutComponent,
    HomeGaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
