import {Routes} from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {UsersComponent} from "./users/users.component";

export const ADMIN_ROUTES: Routes = [
    {
        path: 'cursos',
        component: CoursesComponent
    },
    {
        path: 'usuarios',
        component: UsersComponent
    }
]
