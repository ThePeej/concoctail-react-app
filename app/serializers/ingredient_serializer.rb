class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :item
  belongs_to :recipe
  belongs_to :item
end
