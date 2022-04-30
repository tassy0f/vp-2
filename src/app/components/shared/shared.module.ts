import { NgModule } from "@angular/core";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        NavComponent
    ],
    imports:[],
    exports:[
        HeaderComponent,
        FooterComponent,
        NavComponent
    ]
})
export class SharedModule { }