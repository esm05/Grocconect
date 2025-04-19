// Taking advantage of the local storage API to host the token of the JWT

import { InjectionToken } from "@angular/core";
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});

export class Storage {
}
