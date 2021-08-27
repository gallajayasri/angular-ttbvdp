import { Component, Input } from '@angular/core';

import { CardComponent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'comment-actions',
  template: `
    <div>
      <button class="k-button k-flat" (click)="postLikesCount(card)">
        <span [ngClass]="postHeartIcon(card)"></span>
      </button>
      <button class="k-button k-flat" (click)="commentClick(card)">
        <span class="k-icon k-i-comment"></span>
      </button>
      <button class="k-button k-flat">
        <span class="k-icon k-i-share"></span>
      </button>
    </div>
    <span class="post-likes-count">{{ card.postLikes }} likes</span>
  `
})
export class CommentActionsComponent {
  @Input() public card: CardComponent;

  public commentClick(card: CardComponent): void {
    card.commentsExpanded = !card.commentsExpanded;
  }

  public postLikesCount(card: CardComponent): void {
    if (card.postLiked) {
      card.postLikes -= 1;
    } else {
      card.postLikes += 1;
    }

    card.postLiked = !card.postLiked;
  }

  public postHeartIcon(card: CardComponent): string {
    return card.postLiked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline';
  }
}
