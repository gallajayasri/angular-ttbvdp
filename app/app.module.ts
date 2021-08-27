import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { LayoutComponent } from './layout.component';
import { AvatarComponent } from './avatar.component';
import { CardComponent } from './card.component';
import { CommentActionsComponent } from './comment-actions.component';
import { ExpansionPanelComponent } from './expansionpanel.component';
import { PostCommentComponent } from './comment.component';
import { PanelBarComponent } from './panelbar.component';
import { ScrollViewCardComponent } from './scrollview-card.component';
import { SplitterComponent } from './splitter.component';
import { StepperComponent } from './stepper.component';
import { TabStripComponent } from './tabstrip.component';
import { TileLayoutComponent } from './tilelayout.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

import { AppComponent } from './app.component';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonsModule,
        ScrollViewModule,
        FormsModule,
        CommonModule,
        LayoutModule
    ],
    declarations: [
        AppComponent,
        AvatarComponent,
        CardComponent,
        CommentActionsComponent,
        ExpansionPanelComponent,
        LayoutComponent,
        PanelBarComponent,
        PostCommentComponent,
        ScrollViewCardComponent,
        SplitterComponent,
        StepperComponent,
        TabStripComponent,
        TileLayoutComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
