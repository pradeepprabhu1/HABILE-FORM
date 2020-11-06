import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { TextService } from './text/text.service';
import {HttpClientModule} from '@angular/common/http';
import { SelectComponent } from './select/select.component';
import { FieldsEnum } from './text/fieldsEnum';
import { ContactEnum } from './text/contactEnum';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    SelectComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TextService],
  bootstrap: [AppComponent],
  entryComponents: [TextComponent, SelectComponent]
})
export class AppModule { }
