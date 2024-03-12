import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterComponent } from '../../components/counter/counter.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [
    CommonModule, CounterComponent, SideMenuComponent
  ],
  templateUrl: './alonePage.component.html',
  styleUrls: ['./alonePage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent { }
