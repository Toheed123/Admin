import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { NotificationType, Notification } from "src/app/shared/component/notification/notification";


@Injectable()
export class NotificationService {

  private _subject = new Subject<Notification>();
  private _idx = 0;


  constructor() { }

  getObservable(): Observable<Notification> {
    return this._subject.asObservable();
  }

  info(title: string, message: string, timeout = 3000) {
    this._subject.next(new Notification(this._idx++, NotificationType.info, title, message, timeout));
   
  }

  success(title: string, message: string, timeout = 3000) {
      this._subject.next(new Notification(this._idx++, NotificationType.success, title, message, timeout));
      this._subject.subscribe((val) => {
        console.log(val)
        console.log('Hello')
      })
  }

  warning(title: string, message: string, timeout = 3000) {
    this._subject.next(new Notification(this._idx++, NotificationType.warning, title, message, timeout));
  }

  error(title: string, message: string, timeout = 0) {
    this._subject.next(new Notification(this._idx++, NotificationType.error, title, message, timeout));
  }

}