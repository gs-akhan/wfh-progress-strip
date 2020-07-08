import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private notification: NzNotificationService) { }

  ngOnInit(): void {
  }

  createBasicNotification() {
    this.notification.blank("Some Notification Here",
      "This information is the body of the Notifcation"
    )
  }
}
