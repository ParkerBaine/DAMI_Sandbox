class UserNotifier < ApplicationMailer
  default :from => 'new-user@dami.com'

  def new_user_email(email_address)
    @new_user_email = email_address
    mail( :to => "sfoxx@rabengroup.com",
    :subject => 'A new user has signed up for DAMI Updates' )
  end

end
