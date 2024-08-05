from flask import Flask, request, make_response
from base import manager

app = Flask(__name__)
user = manager.User()
seller = manager.Seller()

#This is the home page
@app.route('/')
def webpage():
    return "<p>Home<p>"

#This is the login page
@app.route('/user/login', methods=['GET', 'POST'])
def login():
    request.method = 'GET'
    email = request.form.get('email')
    password1 = request.form.get('password1') 
    password2 = request.form.get('password2')
    data = user.login()

#This is the profile page
@app.route('/profile')
def profile():
    return "<p>Profile<p>"

#This is the reviews page
@app.route('/review')
def profile():
    return "<p>Write a Review<p>"

@app.route('/user/create', methods = ['POST'] )
def user_create():
        email = request.form.get('email')
        name = request.form.get('name').title()
        password1 = request.form.get('password1') 
        password2 = request.form.get('password2')
        status = user.insert()

        if status :
            response = make_response('Success!', 200)
            return response
        
        else:
            response = make_response('Failed!', 400)
            return response
        
        if len(email) < 4:
            flash('Email must be greater than 4 characters',category='error')
            pass
        elif len(name) < 1:
            flash('First name must be greater than 1 characters',category='error')
            pass
        elif password1 != password2:
            flash('Passwords don\'t match',category='error')
            pass
        elif len(password1) < 7:
            flash('Password must be atlease 7 characters',category='error')
            pass
        else:
            flash('Account created!',category='success')
            #add user to database
            pass

if __name__ == '__main__':
    app.run(debug=True)