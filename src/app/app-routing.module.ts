import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from    './components/sign-up-page/sign-up-page.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginPageComponent},
  {path:"signUp", component:SignUpPageComponent},
  {path:"home", component:HomeComponent},
];

With the above configuration, our angular