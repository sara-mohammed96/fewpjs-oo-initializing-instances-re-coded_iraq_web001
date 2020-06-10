// Write your code here
class breakfast{
  constructor(food,drink){
    this.food=food;
    this.drink=drink;
  }
}

class lunch{
  constructor(salad,soup,drink){
    this.salad=salad;
    this.soup=soup;
    this.drink=drink;
  }
}

class dinner{
  constructor(salad ,soup,entree,dessert){
    this.salad=salad;
    this.soup=soup;
    this.entree=entree;
    this._dessert=dessert;
  }
}

let breakfast=new breakfast("bancake","milk");
breakfast;