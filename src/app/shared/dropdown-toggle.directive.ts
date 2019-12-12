import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective {
  isOpen = false;
  @Output() appDropdownToggle = new EventEmitter<boolean>();

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.appDropdownToggle.emit(this.isOpen);
  }

}
