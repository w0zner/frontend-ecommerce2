import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  public active: boolean= false;

  constructor(private sessionStorage: SessionStorageService){}

  ngOnInit(): void {
    this.isActive();
  }

  isActive(){
    let type: string= this.sessionStorage.getItem('userData')?.type;
    if(type !== null && type==='ADMIN'){
      this.active=true;
    }
  }

}
