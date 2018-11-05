import { Component } from '@angular/core';

@Component({
    selector: 'autocomp-obj',
    template: `<div><img src={{imgSrc}} /><p>{{name}}</p><br/><p>{{title}}</p></div>`,
})
export class AppComponent {
        imgSrc = 'Ya Ali Madad';
        name = 'Ali';
        title = 'Halahla'
}