var initialCats = [{
      clickCount: 0,
      name: 'Wazza',
      imgSrc: 'img/22252709_010df3379e_z.jpg',
      imgAttribution: 'http://www.flickr.com/wazza',
      nicknames: ['Fluff','Daisy','Kaasje']
    },{
      clickCount: 0,
      name: 'Tabby',
      imgSrc: 'img/434164568_fea0ad4013_z.jpg',
      imgAttribution: 'http://www.flickr.com/tabby',
      nicknames: ['Fluff','Daisy','Kaasje']
    },{
      clickCount: 0,
      name: 'Kinki',
      imgSrc: 'img/1413379559_412a540d29_z.jpg',
      imgAttribution: 'http://www.flickr.com/kinki',
      nicknames: ['Fluff','Daisy','Kaasje']
    }
];

var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
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
    this.catList = ko.observableArray([]);
    initialCats.forEach(function(cat){
      self.catList().push(ko.observable(new Cat(cat)));
    });
    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementCounter = function(){
      self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
    this.setCat = function(cat){
      self.currentCat(cat);
    }
};

ko.applyBindings(new ViewModel());


