import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector:'app-footer',
    templateUrl:'./app-footer.component.html',
    styleUrls:['./app-footer.component.scss']
})
export class FooterComponent {


  @Output() SideNavigationToggle = new EventEmitter();

  onToggleOpenSidenav() {
    this.SideNavigationToggle.emit();
  }


}
