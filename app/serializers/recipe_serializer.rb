class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :glass, :img_url, :instructions
  has_many :ingredients
end
