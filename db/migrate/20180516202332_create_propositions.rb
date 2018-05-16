class CreatePropositions < ActiveRecord::Migration[5.2]
  def change
    create_table :propositions do |t|
      t.string :position
      t.integer :salary
      t.text :description
      t.integer :review_in

      t.timestamps
    end
    add_index :propositions, :position
    add_index :propositions, :salary
  end
end
