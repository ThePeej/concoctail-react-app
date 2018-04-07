class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :ingredients
end
