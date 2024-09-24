import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() searchTerm: string = '';

  @Output() searchTermChange: EventEmitter<string> = new EventEmitter();

  @Output() search: EventEmitter<void> = new EventEmitter();
  @Output() addNew: EventEmitter<void> = new EventEmitter();

  onSearch(): void {
    this.searchTermChange.emit(this.searchTerm);
    this.search.emit();
  }

  goTo(): void {
    this.addNew.emit();
  }
}
