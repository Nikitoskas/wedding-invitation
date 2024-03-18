import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Injector } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OverlayComponent } from './components/overlay/overlay.component';
import { OverlayService } from './service/overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private overlay: Overlay, overlayService: OverlayService) {
    overlayService.openOverlay$.subscribe((text) => {
      this.openOverlay(text);
    });
  }

  openOverlay(text: string) {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      backdropClass: 'backdrop',
      panelClass: 'panelClass'
    });

    const portal = new ComponentPortal(
      OverlayComponent,
      null,
      Injector.create({
        providers: [{ provide: MAT_DIALOG_DATA, useValue: text }],
      })
    );
    overlayRef.attach(portal);

    // setTimeout(() => {
    //   overlayRef.detach()
    // }, 2000);
  }
}
