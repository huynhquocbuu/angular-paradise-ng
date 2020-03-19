import {Component} from '@angular/core';

@Component({
    templateUrl: './documentation.component.html',
    styles: [`
        .docs p {
            line-height: 1.5;
        }

        .docs pre.doc-command {
            font-family: monospace;
			background-color: #323e4b;
			color: #ffffff;
            padding: 1em;
            font-size: 14px;
            border-radius: 3px;
            overflow: auto;
        }`
    ]
})
export class DocumentationComponent {
}
