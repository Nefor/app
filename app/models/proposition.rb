# == Schema Information
#
# Table name: propositions
#
#  id          :bigint(8)        not null, primary key
#  position    :string
#  salary      :integer
#  description :text
#  review_in   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Proposition < ApplicationRecord
  # There is enough 50 symbols to describe position title
  #
  #   'Junior Ruby Developer'
  #
  validates :position, length: { minimum: 3, maximum: 50 }
  # Limitation in 5k symbols to prevent unnecessary data storage
  validates :description, length: { maximum: 5000 }
  # 18 months - the longest term until salary review in our service
  validates :review_in, numericality: { only_integer: true, less_than_or_equal_to: 18 }
end
