import {Component, OnInit} from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'apitest',
    template:
        `<h1>API Live Test</h1>
        <ul>
            <li class="item" *ngFor="#item of items">
                <span><b>Name:</b> {{item.name}}</span><br />
                <span><b>Username:</b> {{item.username}}</span><br />
                <span><b>Email:</b> {{item.email}}</span><br />
                <span><b>Address:</b> {{item.address.street}} {{item.address.suite}}, {{item.address.city}}, {{item.address.zipcode}}</span><br />
                <span><b>Phone:</b> {{item.phone}}</span><br />
                <span><b>Website:</b> {{item.website}}</span><br />
            </li>
        </ul>
        `,
    styles:
        [`ul {
            list-style: none;
            }
        .item {
            background: #eee;
            border: 1px solid gainsboro;
            padding: 10px;
            margin-bottom: 20px;
        }
        `],
    providers: [HTTP_PROVIDERS]
})

export class ApiTestModule{

    // Data types
    public items;

    // HTTP Constructor
    constructor(public http:Http) { }

    //Error Logging
    logError(err) {
        console.error('There was an error: ' + err);
    }

    testApiCall() {
        this.http.get('http://jsonplaceholder.typicode.com/users')
            .map(res => res.json())
            .subscribe(
                data => this.items = data,
                err => this.logError(err),
                () => console.log('Data has been returned.')
            );
    }

    ngOnInit() {
        this.testApiCall();
    }
}