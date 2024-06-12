import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  imports: [CommonModule,CommonModule]
})
export class AddbookComponent {
  @Input() show: boolean = false;
  @Input() title: string = "Modal";
  @Input() size: string = "xl:max-w-7xl";
  @Input() footer: boolean = true;
  
  @Output() closeModal = new EventEmitter<boolean>();

  onModalClose() {
    this.show = false;
    this.closeModal.emit(this.show);
  }
}
