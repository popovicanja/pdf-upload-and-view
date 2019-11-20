import {Component, EventEmitter, Output} from '@angular/core';
import {MessageBar} from '../../shared/components/message-bar/message-bar.service';

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss']
})
export class FileDropComponent {

  file: File;
  allowedExtensions = ['.pdf'];

  @Output() fileUpdated = new EventEmitter<File>();

  constructor(private messageBar: MessageBar) { }

  triggerFileInput(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  updateFile(event) {
    this.selectFile(event.target.files);
  }

  selectFile(fileList: FileList) {
    if (fileList.length > 0) {
      this.file = fileList[0];
      if (this.file.type === 'application/pdf') {
        this.fileUpdated.emit(this.file);
      } else {
        this.messageBar.info('You can upload only pdf file format!');
      }
    }
  }

  onDrop(event: DragEvent) {
    this.preventDefault(event);
    this.selectFile(event.dataTransfer.files);
  }

  preventDefault(event) {
    event.preventDefault();
    event.stopPropagation();
  }

}
