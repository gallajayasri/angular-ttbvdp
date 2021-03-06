import { Component, Input } from '@angular/core';

import { CardComponent } from '@progress/kendo-angular-layout';

@Component({
    selector: 'post-comment',
    template: `
        <div *ngIf="card.comments.length">
            <div class="card-comment-wrapper">
                <div class="box" *ngFor="let comment of card.comments">
                    <div class="card-comment-container">
                        <kendo-avatar
                            class="card-comment-thumbnail"
                            initials="EG"
                            shape="circle"
                            [cssStyle]="{ color: 'white' }"
                        >
                        </kendo-avatar>
                        <div class="comment-box">
                            <span class="comment-text">{{ comment.text }}</span>
                            <span class="time">1s ago<span>{{ comment.likes }} like</span></span>
                        </div>
                    </div>
                    <button class="k-button k-flat" (click)="commentLikesCount(comment)">
                        <span [ngClass]="commentHeartIcon(comment)"></span>
                    </button>
                </div>
            </div>
        </div>
        <div class="k-hbox card-post-comment-wrapper">
            <textarea class="k-textarea" placeholder="Comment..." [(ngModel)]="card.newCommentTextValue"></textarea>
            <button class="k-button k-primary k-flat" (click)="postComment(card)">Post</button>
        </div>
    `
})
export class PostCommentComponent {
    @Input() public card: CardComponent;

    public commentLikesCount(comment: any): void {
        if (comment.likes > 0) {
            comment.likes -= 1;
        } else {
            comment.likes += 1;
        }
    }

    public commentHeartIcon(comment: any): string {
        if (comment && comment.likes > 0) {
            return 'k-icon k-i-heart';
        } else {
            return 'k-icon k-i-heart-outline';
        }
    }

    public postComment(card: CardComponent): void {
        if (card.newCommentTextValue) {
            const comment = { text: card.newCommentTextValue, likes: 0 };
            card.comments.push(comment);
            card.newCommentTextValue = '';
        }
    }
}
