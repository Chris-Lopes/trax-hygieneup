from flask import Flask, request, make_response, jsonify
from base import manager

app = Flask(__name__)
user = manager.User()
seller = manager.Seller()

# This is the home page


@app.route('/')
def webpage():
    return "<p>Home<p>"

# This is the login page


@app.route('/user/login')
def login():
    request.method = 'GET'
    email = request.form.get('email')
    password = request.form.get('password')
    data = user.login(email=email, password=password)
    print(data)
    if (data):
        return jsonify(data)
    else:
        return False, 400
        # This is the profile page


@app.route('/user/get/<int:id>')
def get_user(id):
    data = user.get(id=id)
    if (data):
        return data
    else:
        return False


@app.route('/profile')
def profile():
    return "<p>Profile<p>"

# This is the reviews page


@app.route('/review')
def profile():
    return "<p>Write a Review<p>"


@app.route('/user/create', methods=['POST'])
def user_create():
    email = request.form.get('email')
    name = request.form.get('name').title()
    password = request.form.get('password')
    description = request.form.get('description')
    phone = request.form.get('phone')
    password = request.form.get('password')
    status = user.insert(name, description, email, phone, password)

    if status:
        response = make_response('Success!', 200)
        print(make_response)
        return response

    else:
        response = make_response('Failed!', 400)
        return response


if __name__ == '__main__':
    app.run(debug=True)
