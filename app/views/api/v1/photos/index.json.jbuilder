json.array! @photos do |photo|
	json.id photo.id
	json.title photo.title
	json.date photo.date
end