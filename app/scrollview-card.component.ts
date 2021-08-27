import { Component, Input } from '@angular/core';

@Component({
    selector: 'scrollview-card',
    template: `
        <kendo-card width="260px">
            <kendo-card-header class="k-hbox">
                <kendo-avatar width="40px" height="40px" [imageSrc]="card.thumbnailSrc" shape="circle"></kendo-avatar>
                <div>
                    <h1 kendoCardTitle>{{ card.headerTitle }}</h1>
                    <p kendoCardSubtitle>{{ card.headerSubtitle }}</p>
                </div>
            </kendo-card-header>

            <kendo-scrollview
                *ngIf="card.scrollViewItems"
                kendoCardMedia
                [data]="card.scrollViewItems"
                width="100%"
                height="185px"
                [arrows]="false"
                [pageable]="true">
                <ng-template let-item="item">
                    <img src='{{ item.url }}' alt='{{ item.title }}' [ngStyle]="{ minWidth: '100%' }" draggable="false" />
                </ng-template>
            </kendo-scrollview>

            <kendo-card-actions>
                <comment-actions [card]="card"></comment-actions>
            </kendo-card-actions>

            <hr kendoCardSeparator *ngIf="card.comments.length && card.commentsExpanded">
            <kendo-card-body *ngIf="card.commentsExpanded">
                <post-comment [card]="card"></post-comment>
            </kendo-card-body>
        </kendo-card>
    `
})
export class ScrollViewCardComponent {
    @Input() public card: any;
}
