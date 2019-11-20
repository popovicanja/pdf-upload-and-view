import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatIconModule} from '@angular/material';
import {FileReaderComponent} from './file-reader/file-reader.component';
import {FormModalConfigBuilder} from '../shared/global/form-modal-config-builder';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FileDropComponent } from './file-drop/file-drop.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FileReaderComponent,
    FileDropComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    SharedModule,
  ],
  entryComponents: [FileReaderComponent],
  providers: [FormModalConfigBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
