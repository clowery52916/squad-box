class Api::UsersController < ApplicationController

  # GET /api/users
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create!(user_params)
    puts @user

    render json: @user
  end

  def show
    @user = User.find(params[:user])
    puts @user
    render json: @user
  end

  def update
    @user = User.find(params[:user])
    @user.update!(user_params)

    render json: @user
  end

  def destroy
    @user = User.find(params[:user]).delete

    render status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:name, :photo, :password, :email, :age)
  end
end
