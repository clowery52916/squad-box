class Api::CommentsController < ApplicationController
  # GET /api/comments
  def index
    @comments = Comment.all
    render json: @comments
  end

  def create
    @comment = Comment.create!(comment_params)

    render json: @comment
  end

  def show
    @comment = Comment.find(params[:id])

    render json: @comment
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update!(comment_params)

    render json: @comment
  end

  def destroy
    @comment = Comment.find(params[:id]).delete

    render status: :ok
  end

  private

  def comment_params
    params.require(:comment).permit(:user, :post, :comment_body, :like)
  end
end
