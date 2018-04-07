Drinks.each do |d|
  recipe = Recipe.new(
    {
      name: d.strDrink,
      category: d.strCategory,
      glass: d.strGlass,
      img_url: d.strDrinkThumb,
      instructions: d.strInstructions
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
    ingredient.item = Item.find_or_create_by_name(item)
    if quantitites[index]
      ingredient.quantity = quantitites[index]
    end
    ingredient.save
  end

end




Recipe
  has_many :ingredients
  has_many :items, :through => :ingredients

Ingredient
  belongs_to :recipe
  belongs_to :item
  
  t.string :quantity

Item
  has_many :ingredients
  has_many :recipes, :through => :ingredients

  t.string :name


Recipe.Ingredients. each do |ingredient|
    <%= ingredient.item.name >
    <%= ingredient.quantity >