from flask import Flask, request, make_response, jsonify
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
    password = request.form.get('password') 
    data = user.login()
    print(data)
    if(data):
         tup = data[0]
         naksha = {user.id: tup[0], user.name: tup[1], user.description:tup1[2], user.image:tup[3], user.email:tup[4], user.phone: tup[5]}
         print(naksha)
         return jsonify(naksha), 200
    else:

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
            print(make_response)
            return response
        
        else:
            response = make_response('Failed!', 400)
            return response
        
    
if __name__ == '__main__':
    app.run(debug=True)