"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.app_name = 'Please enter the name or position of a person from the list..';
        this.option_class = 'option_name';
        this.current_bold = -1;
        this.arrOfVisibles = [];
        this.autocompleteObjs = [
            {
                "id": "1",
                "name": "Ali Halahla",
                "title": "Nescafe CEO",
                "imgSrc": "https://darussalam.pk/data/books/darussalam-2017-05-18-18-12-38al-quran-al-kareem-(15-lines)-1.png"
            },
            {
                "id": "2",
                "name": "Ryan Reynolds",
                "title": "Face of Deadpool",
                "imgSrc": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/02/08/Pictures/_33b2ca74-0cc1-11e8-ba67-a8387f729390.jpeg"
            },
            {
                "id": "3",
                "name": "Jacob Avners",
                "title": "Maker of this app",
                "imgSrc": "https://darussalam.pk/data/books/darussalam-2017-05-18-18-12-38al-quran-al-kareem-(15-lines)-1.png"
            },
            {
                "id": "4",
                "name": "Ryan Gosling",
                "title": "Blade Runner 2049",
                "imgSrc": "https://assets1.ignimgs.com/thumbs/userUploaded/2018/1/25/bladerunnerwtfqsblogroll-1516900934852_270h.jpg"
            },
            {
                "id": "5",
                "name": "Bernie Sanders",
                "title": "2016 POTUS candidate",
                "imgSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bernie_Sanders.jpg/220px-Bernie_Sanders.jpg"
            },
            {
                "id": "6",
                "name": "Anthony Kiedis",
                "title": "RHCP frontman",
                "imgSrc": ""
            },
            {
                "id": "7",
                "name": "Kobe Bryant",
                "title": "ex-NBA player",
                "imgSrc": ""
            },
            {
                "id": "8",
                "name": "Larry King",
                "title": "TV host",
                "imgSrc": ""
            }
        ];
    }
    AppComponent.prototype.onOptionClicked = function (val) {
        document.getElementsByTagName('input')[0].value = this.autocompleteObjs[val - 1].name;
        var i;
        for (i = 0; i < this.arrOfVisibles.length; i++) {
            this.arrOfVisibles[i].style.display = 'none';
        }
    };
    AppComponent.prototype.onPress = function (val) {
        var i;
        if (this.current_bold == -1) {
            if (val.keyCode == 40)
                this.current_bold = this.arrOfVisibles.length - 1;
            else if (val.keyCode == 38)
                this.current_bold = 0;
        }
        else {
            if (val.keyCode == 38) {
                if (this.current_bold == 0)
                    this.current_bold = this.arrOfVisibles.length - 1;
                else
                    this.current_bold--;
            }
            else if (val.keyCode == 40) {
                if (this.current_bold == this.arrOfVisibles.length - 1)
                    this.current_bold = 0;
                else
                    this.current_bold++;
            }
        }
        for (i = 0; i < this.arrOfVisibles.length; i++) {
            if (i == this.current_bold) {
                this.arrOfVisibles[i].className = "option selected";
            }
            else {
                this.arrOfVisibles[i].className = "option unselected";
            }
        }
    };
    AppComponent.prototype.onType = function (val) {
        this.arrOfVisibles = [];
        for (var _i = 0, _a = this.autocompleteObjs; _i < _a.length; _i++) {
            var obj = _a[_i];
            var isElemVisible = false;
            var elem = document.getElementById(obj.id);
            var elemName = elem.getElementsByClassName(this.option_class)[0];
            if (obj.name.toLowerCase().indexOf(val.toLowerCase()) != -1 && val.length >= 2) {
                var htmlStr = obj.name.substring(0, obj.name.toLowerCase().indexOf(val.toLowerCase())) + "<b><i>" + obj.name.substring(obj.name.toLowerCase().indexOf(val.toLowerCase()), obj.name.toLowerCase().indexOf(val.toLowerCase()) + val.length) + "</i></b>" + obj.name.substring(obj.name.toLowerCase().indexOf(val.toLowerCase()) + val.length, obj.name.length);
                elemName.innerHTML = htmlStr;
                elem.style.display = 'block';
                this.arrOfVisibles.push(elem);
                isElemVisible = true;
            }
            var elemTitle = elem.getElementsByClassName('option_title')[0];
            if (obj.title.toLowerCase().indexOf(val.toLowerCase()) != -1 && val.length >= 2) {
                var htmlStr = obj.title.substring(0, obj.title.toLowerCase().indexOf(val.toLowerCase())) + "<b><i style='font-style:normal;'>" + obj.title.substring(obj.title.toLowerCase().indexOf(val.toLowerCase()), obj.title.toLowerCase().indexOf(val.toLowerCase()) + val.length) + "</i></b>" + obj.title.substring(obj.title.toLowerCase().indexOf(val.toLowerCase()) + val.length, obj.title.length);
                elemTitle.innerHTML = htmlStr;
                elem.style.display = 'block';
                this.arrOfVisibles.push(elem);
                isElemVisible = true;
            }
            if (!isElemVisible) {
                elem.style.display = 'none';
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<input type=\"text\" (keydown)='onPress($event)' (input)='onType($event.target.value)' placeholder={{app_name}}../>" +
            "<br/><div *ngFor=\"let obj of autocompleteObjs; trackBy:index\"><div id={{obj.id}} class=\"option\" (click)='onOptionClicked(obj.id)'><img src={{obj.imgSrc}} /><div><span class={{option_class}}>{{obj.name}}</span><br/><br/><span class=\"option_title\">{{obj.title}}</span></div></div></div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map