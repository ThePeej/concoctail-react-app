class Recipe < ApplicationRecord
  has_many :ingredients
  has_many :items, :through => :ingredients
  validates :name, presence: true
  validates :category, presence: true
  validates :img_url, presence: true

end
