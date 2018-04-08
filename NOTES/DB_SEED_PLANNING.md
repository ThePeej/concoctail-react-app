###RUN IN RAILS CONSOLE TO SET UP DATABASE:


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