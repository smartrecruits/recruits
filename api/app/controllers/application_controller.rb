class ApplicationController < ActionController::API
    include ActionController::Cookies 
    rescue_from StandardError, with: :standard_error

      #hash data into web token
    def encode(uid,email)
        payload ={
            data: {
                uid: uid,
                email: email
            },
            exp: Time.now.to_i + (24 * 3600)
        }
        JWT.encode(payload,'users_key', 'HS256')
    end

    #unhash token
    def decode(token)
        JWT.decode(token,'users_key',true,{algorithm:'HS256'})
    end
    def verify_auth
        auth_headers = request.headers['Authorization']
        if auth_headers.blank?
            render json:{errors:"Your request is not authorized"}, status: :unauthorized
        else
            token = auth_headers.split(' ')[1]
            @uid = decode(token)[0]["data"]["uid"].to_i
        end
    end

     #get and save user_id
    def save_user(token)
        @uid = decode(token)[0]["data"]["uid"].to_i
    end

    #delete jwt token 
    def remove_user 
        token = nil
        render json:{message:"log out successful"}
    end

      # rescue all common errors
    def standard_error(exception)
        render json:{errors:exception.message}, status: :unprocessable_entity
    end

     #store user id in session
    def save_user_session(id)
        session[:uid] = id
        session[:expiry] = 12.hours.from_now
    end 
    
    #delete user id in session
    def remove_user_session
        session.delete(:uid) 
        session[:expiry] = Time.now 
        render json:{message:"log out successful"}
    end

      #check for session expiry
      def session_expired? 
        session[:expiry] ||= Time.now
        time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
       unless time_diff > 0
           render json: {errors:"your session has expired log in to continue"}, status: :unauthorized        
       end
   end

   #get logged in recruiter session
   def recruiter_session 
       puts "session  #{session[:uid].inspect}"
       Recruiter.find(session[:uid].to_i)
   end

    #get logged in recruiter session
    def inteviewee_session 
        puts "session  #{session[:uid].inspect}"
        Interviewee.find(session[:uid].to_i)
    end
    
    
    # get logged in recruiter
    def recruiter
        Recruiter.find(@uid) 
    end

      # get logged in interviewee
    def interviewee
        Interviewee.find(@uid) 
    end
end
