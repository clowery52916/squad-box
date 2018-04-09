class Api::PostsController < ApplicationController
  # GET /api/posts
  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    @post = Post.create!(post_params)

    render json: @post
  end

  def show
    @post = Post.find(params[:id])

    render json: @post
  end

  def update
    @post = Post.find(params[:id])
    @post.update!(post_params)

    render json: @post
  end

  def destroy
    @post = Post.find(params[:id]).delete

    render status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :post_body, :like)
  end
end
