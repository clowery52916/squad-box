class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.datetime :created_at
      t.text :post_body
      t.integer :like
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
