import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Book', icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Requested', icon: 'pe-7s-user', class: '' },
    { path: '/table', title: 'Issued', icon: 'pe-7s-note2', class: '' },
    { path: '/typography', title: 'History', icon: 'pe-7s-news-paper', class: '' },
    { path: '/librarian', title: 'Login as Librarian', icon: 'pe-7s-rocket', class: 'active-pro' },
];

export const ROUTES1: RouteInfo[] = [
    { path: '/dashboard', title: 'Book', icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Requested', icon: 'pe-7s-user', class: '' },
    { path: '/table', title: 'Issued', icon: 'pe-7s-note2', class: '' },
    { path: '/typography', title: 'History', icon: 'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Add Member', icon: 'pe-7s-add-user', class: '' },
    { path: '/maps', title: 'Add Book', icon: 'pe-7s-map-marker', class: '' },
    // { path: '/notifications', title: 'Assigning', icon: 'pe-7s-bell', class: '' },
    { path: '/librarian', title: 'Login as Librarian', icon: 'pe-7s-rocket', class: 'active-pro' },
];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    liblogged: boolean = true;
    @Input() isUser: boolean;
    @Output() getRoutes= new EventEmitter();
    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        sessionStorage.setItem('isLibrarian','N');
    }
    onClick(path){
        console.log(path);
        
        if(path == '/librarian')
        this.liblogged = !this.liblogged;

        if( !this.liblogged){
          this.menuItems = ROUTES1.filter(menuItem => menuItem);
            sessionStorage.setItem('isLibrarian','Y')}
        else {
          this.menuItems = ROUTES.filter(menuItem => menuItem);
          sessionStorage.setItem('isLibrarian','N');
        }
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
