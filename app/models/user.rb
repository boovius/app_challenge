class User < ActiveRecord::Base

  has_many   :apps

  def self.create_with_omniauth(auth)

    puts '*' * 30
    ap auth

    create! do |user|
      user.uid = auth['uid']
      user.name = auth['info']['nickname'] || auth['info']['name'] || auth['info']['email']
    end
  end
end
