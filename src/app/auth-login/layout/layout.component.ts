import { Component } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends NbAuthComponent {

}
