class Post < ApplicationRecord
  belongs_to :user
    # validates :post_body, presence: true, length: { minimum: 1, max:  200 }
end
