import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomerBillComponent } from './customer-bill/customer-bill.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RawmaterialsComponent } from './rawmaterials/rawmaterials.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { StockAvailableComponent } from './stock-available/stock-available.component';
import { CareersComponent } from './careers/careers.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { OurCommunityComponent } from './our-community/our-community.component';



export const routes: Routes = [
  
  { path: 'our-community', component: OurCommunityComponent},
  { path: 'our-mission', component: OurMissionComponent},
  { path: 'customer-bill', component: CustomerBillComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'raw-materials', component: RawmaterialsComponent},
  { path: 'employee-salary', component: EmployeeSalaryComponent},
  { path: 'stock-available', component: StockAvailableComponent},
  { path: 'employee-details', component: EmployeeDetailsComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: '**', redirectTo: "login" }
 
];

