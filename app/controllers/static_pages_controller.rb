class StaticPagesController < ApplicationController
  def home
    @home = true
  end

  def action
    @action = true
  end

  def principles
    @principles = true
  end

  def leadership
    @leadership = true
  end

  def about_us
    @about_us = true
  end

  def partnership
    @partnership = true
  end

  def support
    @support = true
  end

  def resources
    @resources = true
  end

  def partners
    @partners = true
  end

  def studies
    @studies = true
  end

  def news
    @news = true
  end

  def fiduciary_guide
    @fiduciary_guide = true
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
