class StaticPagesController < ApplicationController
  def home
  end

  def leadership
  end

  def about_us
  end

  def partnership
  end

  def support
  end

  def resources
  end

  def studies
  end

  def news
  end

  def new_user
    if EmailValidator.valid?(params[:email])
      UserNotifier.new_user_email(params[:email]).deliver_now
      flash.discard[:success] = "Your email address has been received"
    else
      flash.discard[:danger] = "Invalid email address"
    end
    redirect_to :back
  end

  def pdf
    filename = params[:title]+".pdf"
    pdf_filename = File.join(Rails.root, "public/pdf/"+filename)
    send_file(pdf_filename, :filename => filename , :disposition => 'inline', :type => "application/pdf")
  end

end
