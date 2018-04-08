Recipe
  has_many :ingredients
  has_many :items, :through => :ingredients

  t.string :name
  t.string :category
  t.string :glass
  t.string :img_url
  t.text :instructions

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