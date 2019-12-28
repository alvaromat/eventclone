import {redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

export const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
export const redirectLoggedInToManage = () => redirectLoggedInTo(['manage']);
