class AddDetailsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :post, :text
    add_column :users, :comment, :text
  end
end
