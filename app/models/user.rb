class User < ApplicationRecord

  has_many :posts, dependent: :destroy
  has_many :comments, through: :posts

  validates :password, presence: true, length: { minimum: 6}
  validates :email, confirmation: true
  validates :age, numericality: { message: 'You are over the allowed age, your age is %{value}, you are not permitted to enter this site.' }

end
