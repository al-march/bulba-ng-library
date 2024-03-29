import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from "./start-page/start-page.component";

import { TabsExampleComponent } from "./tabs-example/tabs-example.component";
import { ToggleButtonsExampleComponent } from "./toggle-buttons-example/toggle-buttons-example.component";
import { ModalExampleComponent } from "./modal-example/modal-example.component";
import { SelectExampleComponent } from "./select-example/select-example.component";
import { MenuExampleComponent } from "./menu-example/menu-example.component";
import { AccordionExampleComponent } from "./accordion-example/accordion-example.component";
import { InputExampleComponent } from "./input-example/input-example.component";

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'tabs',
    component: TabsExampleComponent,
  },
  {
    path: 'toggle-buttons',
    component: ToggleButtonsExampleComponent,
  },
  {
    path: 'modal',
    component: ModalExampleComponent,
  },
  {
    path: 'select',
    component: SelectExampleComponent,
  },
  {
    path: 'input',
    component: InputExampleComponent,
  },
  {
    path: 'menu',
    component: MenuExampleComponent,
  },
  {
    path: 'accordion',
    component: AccordionExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
