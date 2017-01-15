var Cat = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('http://www.flickr.com/tabby');
    this.nicknames = ko.observableArray(['Fluff','Daisy','Kaasje']);
    this.level = ko.computed(function(){
      if(this.clickCount() < 10)
        return 'Newborn';
      if(this.clickCount() >= 10 && this.clickCount() < 40)
        return 'Infant';
      if(this.clickCount() >= 40 && this.clickCount() < 100)
        return 'Teen';
      if(this.clickCount() >= 100)
        return 'adult';
    }, this);
};
var ViewModel = function(){
    var self = this;
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function(){
      self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());


