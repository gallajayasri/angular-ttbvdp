import { Component } from '@angular/core';

@Component({
    selector: 'avatar-component',
    template: `
    <div class="list">
        <div class="contact-list">Contacts</div>
        <div class="contact" *ngFor="let contact of contactInitials">
            <div class="k-hbox">
                <kendo-avatar shape="circle" [initials]="contact.avatar"></kendo-avatar>
                <div>
                    <h2>{{ contact.name }}</h2>
                    <p>{{ contact.position }}</p>
                </div>
            </div>
        </div>
        <div class="contact" *ngFor="let contact of contactImages">
            <div class="k-hbox">
                <kendo-avatar shape="circle" [imageSrc]="contact.avatar"></kendo-avatar>
                <div>
                    <h2>{{ contact.name }}</h2>
                    <p>{{ contact.position }}</p>
                </div>
            </div>
        </div>
        <div class="contact">
            <div class="k-hbox">
                <kendo-avatar shape="circle" icon="user"> </kendo-avatar>
                <div class="mate-info">
                    <h2>Unknown</h2>
                    <p>Not specified</p>
                </div>
            <div class="k-hbox"></div>
        </div>
    </div>
    `,
    styles: [`
    .contact {
        padding: 8px 14px;
        margin-bottom: 4px;
        box-shadow: 0 1px 2px #ccc;
    }
    .contact h2 {
        font-size: 1.3em;
        font-weight: normal;
        margin: 0;
    }
    .contact p {
        margin: 0;
        font-size: 0.8em;
    }
    .k-hbox div {
        margin-left: 1em;
    }
    .mate-info {
        display: inline-block;
        vertical-align: top;
    }
    .list {
        width: 280px;
        margin: auto;
        padding: 4px 10px;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08);
    }
    .contact-list {
        text-align: center;
        padding: 4px;
        font-size: 20px;
    }
    `]
})
export class AvatarComponent {
    public firstContactImage = 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg';
    public secondContactImage = 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg';

    public contactImages: Array<any> = [
        { avatar: this.firstContactImage, name: 'Michael Holz', position: 'Manager' },
        { avatar: this.secondContactImage, name: 'André Stewart', position: 'Product Manager' }
    ];

    public contactInitials: Array<any> = [
        { avatar: 'JS', name: 'Jason Smith', position: 'UX Designer' },
        { avatar: 'GP', name: 'George Porter', position: 'Software Engineer' }
    ];
}
