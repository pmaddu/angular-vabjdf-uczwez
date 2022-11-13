import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TopBarComponent) topBarComponent!: TopBarComponent;

  ngAfterViewInit(): void {
    this.topBarComponent.checkViewChild = 'viewchild';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
