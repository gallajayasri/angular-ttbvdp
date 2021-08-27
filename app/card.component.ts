import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'card-component',
    template: `
        <div class="card-list">
            <div *ngFor="let card of scrollViewCards">
                <scrollview-card [card]="card"></scrollview-card>
            </div>
        </div>
    `,
    styles: [`
        .card-list {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }
        .k-textarea {
            resize: none;
        }
        .comment-box {
            display: flex;
            flex-direction: column;
        }
        .card-comment-wrapper .box {
            display: flex;
            justify-content: space-between;
        }
        .card-post-comment-wrapper {
            padding: 16px 16px 0;
        }
        .card-comment-wrapper {
            margin-bottom: 8px;
            padding: 0 16px;
        }
        .card-comment-container {
            padding: 4px 0;
            align-items: center;
            display: flex;
        }
        .comment-box .comment-text {
            font-size: 13px;
            font-weight: bold;
            max-width: 100px;
        }
        .comment-box span {
            font-size: 10px;
            font-weight: normal;
            word-break: break-all;
        }
        .time span {
            margin-left: 8px;
        }
        .box .k-button-icon {
            font-size: 16px;
            align-self: center;
        }
        .post-likes-count {
            font-size: 13px;
            align-self: center;
            color: #656565;
        }
        .k-button.k-flat:focus::after {
            display: none;
        }
        .k-button {
            outline: none;
        }
        .k-button .k-i-heart {
            color: #ff6358;
        }
        .k-card-subtitle .k-icon {
            vertical-align: baseline;
            font-size: 12px;
        }
        .k-card-header .k-card-title+.k-card-subtitle {
            margin-top: 0;
        }
        .k-card-title {
            margin-bottom: 4px;
        }
        .k-card-media li img {
            width: 285px;
        }
        comment-actions {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        .k-card-action {
            flex: 0 0 auto;
        }
        .k-avatar{
            margin-right: 1em;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class CardComponent {
    public scrollViewCards: Array<any> = [
        {
            thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg',
            headerTitle: 'bg_traditions',
            headerSubtitle: 'Bulgaria, Europe',
            commentsExpanded: false,
            postLiked: false,
            comments: [],
            newCommentTextValue: '',
            postLikes: 674,
            scrollViewItems: [
                { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/kukeri.jpg' },
                { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/martenitsa.jpg' },
                { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg' }
            ]
        },
        {
            thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila_lakes.jpg',
            headerTitle: 'bg_mountains',
            headerSubtitle: 'Bulgaria, Europe',
            commentsExpanded: false,
            postLiked: false,
            comments: [],
            newCommentTextValue: '',
            postLikes: 962,
            scrollViewItems: [
                { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg' },
                { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/pamporovo.jpg' },
                { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/camping.jpg' }
            ]
        }
    ];

    constructor() { /**/ }
}
