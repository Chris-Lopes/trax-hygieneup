from base import manager
from flask import Flask, jsonify, make_response, request
from flask_cors import CORS

# Run this main.py after cd into trax-hygineneup and not backend

app = Flask(__name__)
CORS(app)
user = manager.User()
seller = manager.Seller()
review = manager.Reviews()
product = manager.Products()

failed = 0  # Failed json response with status code
with app.app_context():
    failed = make_response(jsonify({'status': 'Failed!'}, 400))


@app.route('/user/login', methods=['GET'])
def user_login():
    email = request.form.get('email')
    password = request.form.get('password')
    data = user.login(email=email, password=password)
    print(data)
    if (request.get_json()):
        return jsonify(data)
    else:
        return failed


@app.route('/user/get/id/<int:id>')
def get_user_id(id):
    data = user.get(column_name=user.id, credential=id)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/user/get/<email>')
def get_user_email(email):
    data = user.get(column_name=user.email, credential=email)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/user/get/phone/<int:phone>')
def get_user_phone(phone):
    data = user.get(column_name=user.phone, credential=phone)
    if (data):
        return jsonify(data)
    else:
        return failed


# Seller Details
@app.route('/seller/login', methods=['GET'])
def seller_login():
    email = request.form.get('email')
    password = request.form.get('password')
    data = user.login(email=email, password=password)
    print(data)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/seller/create')
def seller_create():
    pass
    # Seller Name


@app.route('/seller/get/name/<name>')
def get_seller_name(name):
    data = seller.get(column_name=seller.name, credential=name)
    if (data):
        return jsonify(data)
    else:
        return failed

# Seller Description


@app.route('/seller/<description>')
def get_seller_description(description):
    data = seller.get(column_name=seller.description, credential=description)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/seller/fssai/<int:fssai>')
def get_seller_fssai(fssai):
    data = seller.get(column_name=user.fssai, credential=fssai)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/seller/get/id/<int:id>')
def get_seller_id(id):
    data = seller.get(column_name=user.id, credential=id)
    if (data):
        return jsonify(data)
    else:
        return failed


# Reviews Panel
@app.route('/review/create', methods=['POST'])
def review_create():
    data = request.get_json()
    if (data is dict):
        review.insert(data['user_id'], data['product_id'], data['title'],
                      data['description'], data['rating'], data['time'])
        return jsonify('Success!')
    else:
        return failed


@app.route('/review/get/user_id/<int:user_id>')
def get_review_user_id(user_id):
    data = review.get(user_id=user_id)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/review/get/product_id/<int:product_id>')
def get_review_product_id(product_id):
    data = review.get(product_id=product_id)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/review/get/id/<int:id>')
def get_review_id(id):
    data = review.get(id=id)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/products/get/id/<int:id>')
def get_products_id(id):
    data = product.get(id=id)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/products/get/seller_id/<int:seller_id>')
def get_products_seller_id(seller_id):
    data = product.get(seller_id=seller_id)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/products/get/name/<name>')
def get_products_name(name):
    data = product.get(name=name)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/products/getall')
def get_all_products():
    data = product.get_all()
    return data


@app.route('/products/insert', methods=['GET'])
def insert():
    seller_id = request.form.get('seller_id')
    name = request.form.get('name')
    description = request.form.get('description')
    product_image = request.form.get('product_image')
    data = product.insert(seller_id=seller_id, name=name,
                          description=description, product_image=product_image)
    print(data)
    if (data):
        return jsonify(data)
    else:
        return failed


@app.route('/user/create', methods=['POST'])
def user_create():
    email = request.form.get('email')
    name = request.form.get('name')
    password = request.form.get('password')
    description = request.form.get('description')
    phone = request.form.get('phone')
    password = request.form.get('password')
    print(request.get_json())
    if request.form:
        status = user.insert(name, description, email, phone, password)
    else:
        status = 0

    if status:
        response = make_response(jsonify('Success!'), 200)
        print(make_response)
        return response

    else:
        return failed


if __name__ == '__main__':
    app.run(debug=True)
