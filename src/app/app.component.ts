import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {FileReaderComponent} from './file-reader/file-reader.component';
import {FormModalConfigBuilder} from '../shared/global/form-modal-config-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  file: File;

  constructor(
    private dialog: MatDialog,
    private formModalConfigBuilder: FormModalConfigBuilder,
  ) { }

  updateFile(file: File) {
    this.file = file;
  }

  removeFile(event) {
    this.preventDefault(event);
    this.file = null;
  }

  preventDefault(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  previewFile(file) {
    const pdfBlob = new Blob([file], {type: 'application/pdf'});
    const config = this.formModalConfigBuilder
      .create()
      .withTitle('Preview of uploaded document')
      .withWidth('90%')
      .withHeight('90%')
      .withPanelClass('cu-dialog-overflow-hidden')
      .withDataProperty('blob', pdfBlob)
      .getConfig();
    const dialogRef = this.dialog.open(FileReaderComponent, config);
    dialogRef.componentInstance.close.subscribe(value => {
      dialogRef.close();
    });
  }
}
