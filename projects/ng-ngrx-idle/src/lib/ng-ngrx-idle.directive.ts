import {
  Directive,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  Renderer2
} from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { NgNgrxIdleState } from './state/ng-ngrx-idle.state';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

const MILLIS = 1000;

@Directive({
  selector: '[libNgNgrxIdle]'
})
export class NgNgrxIdleDirective implements OnChanges {
  @Input() interval = 20;
  @Input() idle = 10;
  @Output() timedOut: EventEmitter<boolean> = new EventEmitter<boolean>();

  private timeoutSubscription: Subscription;
  private logoutSubscription: Subscription;
  private listener: Function;
  private state: NgNgrxIdleState;
  private intervalCheck: number = this.interval * MILLIS;

  constructor(
    private store: Store<NgNgrxIdleState>,
    private renderer: Renderer2
  ) {
    store.select('lastAccessed').subscribe((state: NgNgrxIdleState) => {
      if (this.timeoutSubscription) {
        this.timeoutSubscription.unsubscribe();
        this.timeoutSubscription = undefined;
      }
      if (!this.logoutSubscription) {
        this.setTimeoutSubscription();
      }
    });
  }

  ngOnChanges(changes) {
    if (changes.interval) {
      this.intervalCheck = this.interval * MILLIS;
    }
  }

  setTimeoutSubscription() {
    this.timeoutSubscription = timer(
      this.intervalCheck,
      this.intervalCheck
    ).subscribe(() => {
      const diff = moment().diff(this.state.lastAccessed);
      if (diff > this.intervalCheck) {
        this.listener = this.renderer.listen(
          'document',
          'mousemove',
          this.removeListener.bind(this)
        );
        this.logoutSubscription = timer(MILLIS, MILLIS).subscribe(x => {
          if (x >= this.idle) {
            this.timedOut.emit(true);
          }
        });
        this.timeoutSubscription.unsubscribe();
        this.timeoutSubscription = undefined;
      }
    });
  }

  removeListener() {
    this.listener();
    this.logoutSubscription.unsubscribe();
    this.logoutSubscription = undefined;
    this.setTimeoutSubscription();
  }
}
