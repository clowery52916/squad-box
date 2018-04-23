class Post < ApplicationRecord


  has_many :posts, dependent: :destroy
  has_many :users, through: :posts
  validates :post_body, presence: true, length: { minimum: 1, max:  200 }
end
