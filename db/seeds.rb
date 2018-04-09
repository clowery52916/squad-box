# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

court = User.create!(name: 'Courtney' , photo: 'https://i.imgur.com/I6wdfHL.jpg', password: 'qwerty1234', age: 34, email: 'clowery52916@gmail.com',  )

my_post = Post.create!(post_body: 'Hello! I love this app!!!', like: 0, user_id: court.id)

my_comment = Comment.create!(comment_body: 'I am so happy!', like: 2, user_id: court.id, post_id: my_post.id)
