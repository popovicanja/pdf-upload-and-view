import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss']
})
export class FileReaderComponent implements OnInit {

  close = new EventEmitter();
  fileUrl: SafeResourceUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      const url = reader.result;
      this.fileUrl = this.getSafeUrl(url);
    };
    reader.readAsDataURL(this.data.blob);
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
