class Api::V1::PhotosController < ApplicationController
  def index
  	@photos = Photo.all
  end

  def show
  	@photo = Photo.find(params[:id])
  end

  def new
  	@photo = Photo.new(photo_params)
  	if @photo.save
  	else
  	end
  end

  private

  def photo_params
  	params.require(:photo).permit(:image, :title, :date)
  end
end
