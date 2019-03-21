const PizzaAPI = {
  pizzas: [
    { id:1,
      pizzaImage:'https://thumbs.dreamstime.com/z/cheese-pizza-white-background-79167.jpg',
      name:'Cheese Pizza on White Background',
      description: 'High Resolution cheese pizza with good DOF. Shot witht he Canon 20D.'
    },
    { id:2,
      pizzaImage:'http://assets.kraftfoods.com/recipe_images/opendeploy/204924-1bd98c79243057e7a8da5afe3ba5773cba4ce089_642x428.jpg',
      name:'Pepperoni Pizza',
      description: 'Whip up a family favourite with our Pepperoni Pizza recipe! This 17-minute pepperoni pizza recipe uses ready-to-use pre-baked pizza crust & 3 ingredients.'
    },
    { id:3,
      pizzaImage:'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/oh/13/oh-double-mushroom-pizza-x.jpg?itok=i-soTLG6',
      name:'Double-Mushroom Pizza',
      description: 'Cremini and portobellos are actually the same mushroom; portobellos are the mature form. Marry them with a whole-wheat crust for a pizza with earthy, nutty flavor.'
    },
    { id:4,
      pizzaImage:'https://www.tasteofhome.com/wp-content/uploads/2018/02/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b-696x696.jpg',
      name:'Grilled Veggie Pizza',
      description: 'I came up with this recipe one summer as a way to use up vegetables from our garden. Grilling the veggies first brings out their sizzling flavors. Try it with a sprinkling of olives or pine nuts before adding the cheese. '
    },
    { id:5,
      pizzaImage:'https://cdn-us-ec.yottaa.net/55b635db0b5344273c002031/d1fd69005c1501336a81123dfe2baf36.yottaa.net/v~4b.491/1374-3-large.jpg?yocs=2u_&yoloc=us',
      name:'HAWAIIAN PIZZA',
      description: `Did you know Hawaiian pizza is the most popular pizza in Australia, accounting for a full 15% of all pizza sales? And it's a popular choice in this country, as well; though far from ousting pepperoni from the top spot, this ham-pineapple concoction has been making steady inroads, particularly among kids.
      Speaking of kids, if you're looking to add fiber to your family's diet, this is a great way to do it. This pizza's crackly/crisp/crunchy crust includes Hi-maize Fiber, a totally "invisible" way boost fiber in baking — no grittiness, no color, no flavor. Each slice of this pizza includes 3g of fiber — not bad for a "white flour" crust, eh?`
    }
  ],
  all: function() { return this.pizzas},
  get: function(id) {
    const pizza = (p) => p.id === id;
    return this.pizzas.find(pizza);
  }
}

export default PizzaAPI
