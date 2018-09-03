# json.extract! @quotes, :id, :text, :author
# @quotes.as_json

json.quotes @quotes do |quote|
  json.id quote.id
  json.attrs quote.attributes do |attribute|
    # binding.pry
    json.text attribute['text']
    json.author attribute['author']
  end
  # json.reviews product.reviews do |review|
  #   json.user review.user
  #   json.rating review.rating
  #   json.body review.body
  # end
end
