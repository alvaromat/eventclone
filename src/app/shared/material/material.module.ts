import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatIconRegistry, MatInputModule} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class MaterialModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
