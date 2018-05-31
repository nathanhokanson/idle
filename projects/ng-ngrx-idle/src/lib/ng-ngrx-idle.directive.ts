import {
  Directive,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  Renderer2,
  OnInit
} from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { NgNgrxIdleState } from './state/ng-ngrx-idle.state';
import { Store } from '@ngrx/store';
import * as moment_ from 'moment';

const moment = moment_;

const MILLIS = 1000;

@Directive({
  selector: '[libNgNgrxIdle]'
})
export class NgNgrxIdleDirective implements OnChanges, OnInit {
  @Input() interval = 20;
  @Input() idle = 10;
  @Output() timedOut: EventEmitter<boolean> = new EventEmitter<boolean>();

  private timeoutSubscription: Subscription;
  private logoutSubscription: Subscription;
  private listener: Function;
  private lastAccessed: any;
  private intervalCheck: number = this.interval * MILLIS;

  constructor(private store: Store<any>, private renderer: Renderer2) {}

  ngOnInit() {
    this.store.select('libNgNgrxIdle').subscribe((state: any) => {
      console.log('got a state change in the directive', state);
      this.lastAccessed = state ? state._ngNgrxIdle_lastAccessed : undefined;
      if (this.timeoutSubscription) {
        this.timeoutSubscription.unsubscribe();
        this.timeoutSubscription = undefined;
      }
      if (!this.logoutSubscription) {
        this.setTimeoutSubscription();
      }
    });

    this.store.dispatch({ type: 'libNgrxIdle-noop' });
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
      console.log('lastAccessed', this.lastAccessed);
      const diff = moment().diff(this.lastAccessed);
      console.log('diff', diff);
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
