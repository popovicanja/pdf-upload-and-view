import {NgModule} from '@angular/core';
import {MessageBarComponent} from './components/message-bar/message-bar.component';
import {MessageBar} from './components/message-bar/message-bar.service';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    MessageBarComponent,
  ],
  imports: [
    MatSnackBarModule,
  ],
  exports: [],
  providers: [
    MessageBar,
  ],
  entryComponents: [
    MessageBarComponent,
  ]
})
export class SharedModule {}
