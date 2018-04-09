class User < ApplicationRecord
  has_many :comments
  has_many :posts
  validates :password, presence: true, length: { minimum: 10}
  validates :email, confirmation: true
  validates :age, numericality: { message: 'You are over the allowed age, your age is %{value}, you are not permitted to enter this site.' }

end
