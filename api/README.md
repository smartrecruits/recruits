# SMART RECRUITERS API

# Description
We can visualize the relationship between the tables in the database using an Entity Relationship Diagram (ERD):

![image](https://user-images.githubusercontent.com/117741313/232131503-7594e510-ecf1-41b6-947a-2aeaae35c795.png)

the following paths are the paths in the database

     get /interviewee/scores

     get /interviewees

     delete /interviewee/logout

     post /interviewee

     post /interviewee/login

     post /interviewee/reset

     get /interviewee/:id

     get /interviewee/grades/:id

     get /interviewee/delete/:id

     delete /recruiter/logout

     post /recruiter

     post /recruiter/login

     post /recruiter/reset

     get /recruiter/:id

     get /recruiter/delete/:id

     get /assessments

     post /assessments

     delete /assessments/:id

     put /assessments/:id

     get /assessments/done

     get /interviewee/:interviewee_id/answers
    
     patch /recruiter/:recruiter_id/answers/:id

     post /invites/:interviewee_id

     put /invites/:interviewee_id/:id

     get /interviewee/:interviewee_id/invites

     get /interviewee/:interviewee_id/invites/:id

## Requirements
In order to use this repo you need to have the following installed:

- OS [either: Windows 10+, Linux or MacOS(running on x86 or arm architecture)]
- VS Code
- Ruby

## Installation
Clone from this here [github](https://github.com/smartrecruits/recruits)

to clone follow this steps


Clone the repo by using the following:     

       https://github.com/smartrecruits/recruits

Change directory to the repo folder: 

        cd recruits

Open it in Visual Studio Code

        code .
        

## Running This Application
Running the application is very straight forward. You can use the following steps to run the app. 

- Ensure the ruby gems are setup in your machine

    cd api && bundle install

To create the postgres database

     cd api && rails db:create

- Perform database migrations

    cd api && rails db:migrate
      
- Run the application on the terminal

    cd api && rails console

- Run the server

    cd api && rails s      
      



## Author 

 Grace Aloo
 
 Elvis
 
 Ian Orieko

## License
MIT
