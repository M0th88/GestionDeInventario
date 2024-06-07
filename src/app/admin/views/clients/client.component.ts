import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IClient, TableData } from './client.data';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { pageTransition } from 'src/app/shared/utils/animations';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';


@Component({
  selector: 'client',
  standalone: true,
  imports: [NgClass, NgIf,CommonModule,ModalModule],

  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
  animations: [pageTransition]
})
export class ClientComponent {
  @Input() columnData: any = [];
  public clients: IClient[] = TableData.clients;
  @Input() pageData: number[] = [];

  public clientSelected: IClient | undefined;



  

  modalCompnent: ModalComponent

  constructor() {
    this.modalCompnent = new ModalComponent();
  }


  shorting: boolean = false;


  sortingUp() {
    this.shorting = !this.shorting;
  }
  sortingDown() {
    this.shorting = !this.shorting;
  }

  showModal: boolean = false;

  openModal(client: IClient) {

    this.clientSelected = client;
    this.showModal = !this.showModal;
  }

  onModalCloseHandler(event: boolean) {
    this.showModal = event;
  }


}


