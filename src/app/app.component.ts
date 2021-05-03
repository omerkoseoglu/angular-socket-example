import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-socket-example';

  constructor(
    private _socket: Socket
  ) {
    this._socket
      .on('welcome', (params) => {
        console.log('welcome', params);
      });
  }

  sendTest(): void {
    this._socket.emit('test', 'test message');
  }
}
