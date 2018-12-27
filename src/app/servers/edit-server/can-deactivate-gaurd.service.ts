import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanComponentDeactivated } from './can-deactivate-gaurd.service';
import { Observable } from "rxjs/Observable";
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivated{
    canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean;

}

export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivated> {
    canDeactivate(component : CanComponentDeactivated,
        currentRoute : ActivatedRouteSnapshot,
        routerState : RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            return component.canDeactivate();
        }
}