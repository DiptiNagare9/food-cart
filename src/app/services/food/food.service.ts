import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Brownie',
        price:300,
        cookingTime:'20-30',
        favourite:true,
        origins:['US'],
        star:3.0,
        imageUrl:'/assets/brownie.jpg',
        tags:['Dessert','Brownie']
      },
      {
        id:2,
        name:'Burger',
        price:150,
        cookingTime:'15-20',
        favourite:false,
        origins:['Germany'],
        star:3.5,
        imageUrl:'/assets/burger.jpg',
        tags:['Fastfood','Burger']
      },
      {
        id:3,
        name:'French Fries',
        price:100,
        cookingTime:'5-10',
        favourite:false,
        origins:['Belgium'],
        star:3.0,
        imageUrl:'/assets/fries.jpg',
        tags:['Fastfood','Fries']
      },
      {
        id:4,
        name:'Pasta',
        price:450,
        cookingTime:'30-40',
        favourite:true,
        origins:['Italy','China'],
        star:4.5,
        imageUrl:'/assets/pasta.jpg',
        tags:['Fastfood','Pasta']
      },
      {
        id:5,
        name:'Pizza',
        price:500,
        cookingTime:'20-30',
        favourite:true,
        origins:['Italy'],
        star:4.0,
        imageUrl:'/assets/pizza.jpg',
        tags:['Fastfood','Pizza']
      },
      {
        id:6,
        name:'Ramen',
        price:300,
        cookingTime:'20-30',
        favourite:true,
        origins:['Korea','China'],
        star:3.5,
        imageUrl:'/assets/ramen.jpg',
        tags:['Korean','Ramen']
      },
      {
        id:7,
        name:'Soup',
        price:250,
        cookingTime:'15-20',
        favourite:false,
        origins:['China'],
        star:3.0,
        imageUrl:'/assets/soup.jpg',
        tags:['Chinese','Soup']
      },
      {
        id:8,
        name:'Sushi',
        price:700,
        cookingTime:'40-50',
        favourite:false,
        origins:['Japan'],
        star:4.5,
        imageUrl:'/assets/sushi.jpg',
        tags:['Japnese','Sushi']
      },
    ]
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag == 'All' ? 
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    
    // if(tag == 'All'){
    //   return this.getAll();
    // }else{
    //   return this.getAll().filter(food => food.tags?.includes(tag))
    // }
  }

  getAllTag():Tag[]{
    return [
      {name:'All', count:8},
      {name:'Fastfood', count:4},
      {name:'Dessert', count:1},
      {name:'Chinese', count:1},
      {name:'Korean', count:1},
      {name:'Japnese',count:1}
    ]
  }
}
