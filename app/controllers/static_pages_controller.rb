class StaticPagesController < ApplicationController
  def home
  end

  def leadership
  end

  def about_us
  end

  def issues
  end

  def partnership
  end

  def support
  end

  def resources
  end

  def studies
  end

  def new_user
    if EmailValidator.valid?(params[:email])
      email_address = params[:email]
      UserNotifier.new_user_email(email_address).deliver_now
      flash.discard[:success] = "Your email address has been received"
    else
      flash.discard[:danger] = "Invalid email address"
    end
    redirect_to :back
  end
end
