from flask import Flask, request, make_response, jsonify
from base import manager

app = Flask(__name__)
user = manager.User()
seller = manager.Seller()
review = manager.Reviews()
product = manager.Products()

# User Details
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


@app.route('/user/get/id/<int:id>')
def get_user_id(id):
    data = user.get(column_name=user.id, credential=id)
    if (data):
        return jsonify(data)
    else:
        return False
    
@app.route('/user/get/<email>')
def get_user_email(email):
    data = user.get(column_name=user.email, credential=email)
    if (data):
        return jsonify(data)
    else:
        return False
    
@app.route('/user/get/phone/<int:phone>')
def get_user_phone(phone):
    data = user.get(column_name=user.phone, credential=phone)
    if (data):
        return jsonify(data)
    else:
        return False
    

#Seller Details
@app.route('/seller/login', methods=['GET'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')
    data = user.login(email=email, password=password)
    print(data)
    if (data):
        return jsonify(data)
    else:
        return False, 400
    
#Seller Name
@app.route('/seller/get/name/<str:name>')
def get_seller_name(name):
    data = seller.get(column_name=seller.name, credential=name)
    if (data):
        return jsonify(data)
    else:
        return False

#Seller Description
@app.route('/seller/<description>')
def get_seller_description(description):
    data = seller.get(column_name=seller.description, credential=description)
    if (data):
        return jsonify(data)
    else:
        return False
    
    
@app.route('/seller/fssai/<int:fssai>')
def get_seller_fssai(fssai):
    data = seller.get(column_name=user.fssai, credential=fssai)
    if (data):
        return jsonify(data)
    else:
        return False

#Reviews Panel
@app.route('/review/get/user_id/<int: user_id>')
def get_review_user_id(user_id):
    data = review.get(user_id=user_id)
    if (data):
        return jsonify(data)
    else:
        return False


@app.route('/review/get/product_id/<int: product_id>')
def get_review_product_id(product_id):
    data = review.get(product_id=product_id)
    if (data):
        return jsonify(data)
    else:
        return False


@app.route('/review/get/id/<int: id>')
def get_review_id(id):
    data = review.get(id=id)
    if (data):
        return jsonify(data)
    else:
        return False
    
@app.route('/products/get/seller_id/<int: seller_id>')
def get_products_id(id):
    data = product.get(id=id)
    if (data):
        return jsonify(data)
    else:
        return False

    
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
