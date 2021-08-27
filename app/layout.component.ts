import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'layout-component',
    template: `
        <div class="header">
            <h5>{{ selectedItem }} component</h5>
        </div>
        <div class="content" id="Avatar" *ngIf="selectedItem === 'Avatar'">
            <avatar-component></avatar-component>
        </div>
        <div class="content" id="Card" *ngIf="selectedItem === 'Card'">
            <card-component></card-component>
        </div>
        <div class="content" id="ExpansionPanel" *ngIf="selectedItem === 'ExpansionPanel'">
            <expansionpanel-component></expansionpanel-component>
        </div>
        <div class="content" id="PanelBar" *ngIf="selectedItem === 'PanelBar'">
            <panelbar-component></panelbar-component>
        </div>
        <div class="content" id="Splitter" *ngIf="selectedItem === 'Splitter'">
            <splitter-component></splitter-component>
        </div>
        <div class="content" id="Stepper" *ngIf="selectedItem === 'Stepper'">
            <stepper-component></stepper-component>
        </div>
        <div class="content" id="TabStrip" *ngIf="selectedItem === 'TabStrip'">
            <tabstrip-component></tabstrip-component>
        </div>
        <div class="content" id="TileLayout" *ngIf="selectedItem === 'TileLayout'">
            <tilelayout-component></tilelayout-component>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
    .content {
        padding: 40px 20px;
    }
    .header {
        padding: 20px;
        text-align: center;
    }
    `]
})
export class LayoutComponent {
    @Input() public selectedItem: string;
}
