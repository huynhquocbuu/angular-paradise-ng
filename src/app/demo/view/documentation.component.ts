import {Component} from '@angular/core';

@Component({
    templateUrl: './documentation.component.html',
    styles: [`
        .docs pre {
            font-family: monospace;
            background-color: #dee4e9;
            color: #757575;
            padding: 1em;
            font-size: 14px;
            border-radius: 3px;
            overflow: auto;
        }`
    ]
})
export class DocumentationComponent {
}
