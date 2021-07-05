import { Status } from './../models/data.models';
import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCharacterStatus]',
})
export class CharacterStatusDirective implements OnInit {
  @Input('appCharacterStatus') status!: Status;

  constructor(private el: ElementRef, private render2: Renderer2) {}

  ngOnInit(): void {
    this.render2.addClass(this.el.nativeElement, this.statusClass());
  }

  statusClass(): string {
    switch (this.status) {
      case Status.Alive:
        return 'alive';
      case Status.Dead:
        return 'dead';
      default:
        return 'unknown';
    }
  }
}
