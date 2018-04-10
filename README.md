# Concoctails
#### A React Portfolio Project for Flatiron School
---

The project is a react app that allows users to find cocktail recipes based off what they already have in their home bar. Users can select from a set of bar essentials that they might already have, and the app will provide cocktails that can be made with those essentials. 

Built using HTML, CSS, Javascript, Ruby on Rails, React, and Materialize CSS framework


## Installation Instructions

#### Setup Rails API backend

Clone this repo, and then navigate to the repo directory in your terminal.

Run `bundle install` to install all gem dependencies.

Run all rake migrations with `rake db:migrate`

Run in Rails Console (`rails c`) to set up database:

```
drinks = eval File.open('db/drinks.rb').read

drinks.each do |d|
  recipe = Recipe.create(
    {
      name: d[:strDrink],
      category: d[:strCategory],
      glass: d[:strGlass],
      img_url: d[:strDrinkThumb],
      instructions: d[:strInstructions]
    }
  )

  items = []
  quantities = []
  ingredient_counter = 0
  measure_counter = 0

  d.each do |key, array|
    if key.to_s.include?('strIngredient')
      items.push(d[key])
    elsif key.to_s.include?('strMeasure')
      quantities.push(d[key])
    end
  end

  items.each_with_index do |item, index|
    ingredient = recipe.ingredients.build()
    ingredient.item = Item.find_or_create_by(name: item)
    if quantities[index]
      ingredient.quantity = quantities[index]
    end
    ingredient.save
  end
end
```

Start up a rails server on port 3001: `rails s -p 3001`

#### Setup React server frontend

Change directories into client folder: `cd client`

Run `npm install` to install all package dependencies

Start up React server and enjoy the app! `npm start`


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ThePeej/concoctails-react-app. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

