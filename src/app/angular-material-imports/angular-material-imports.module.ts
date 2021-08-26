import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AngularMaterialImportsModule { }
