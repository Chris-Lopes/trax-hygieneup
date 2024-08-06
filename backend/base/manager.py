import setup

con, cur = setup.main()


class Base:
    def __init__(self) -> None:
        self.cursor = con.cursor()

    def merge_map(self, keys: list, values: list) -> dict:
        return dict(zip(keys, values))

    def drop_pass(self, data) -> list:
        return data[0:-1:]

    def get_keys(self):
        return [key for key in self.cursor.description]


class User(Base):
    id = 'id'
    name = 'name'
    description = 'description'
    email = 'email'
    phone = 'phone'

    def __init__(self) -> None:
        super().__init__()
        self.table = setup.user

    def insert(self, name: str, description: str, email: str, phone: int, password: str):
        if (self.validate_not_exist(email=email, phone=phone)):
            self.cursor.execute(f'''INSERT INTO {self.table} (name, description, email, phone, password) VALUES (?,?,?,?,?,?)''', (
                name, description, email, phone, password))
            con.commit()
            return True
        else:
            return False

    def login(self, email: str = '', phone: int = 0, password: str = ''):
        column, credential = None, None
        if email:
            column, credential = 'email', email
        else:
            column, credential = 'phone', phone
        data = self.cursor.execute(f'''SELECT * FROM {self.table}
                    WHERE {column} = ? AND password = ?''', (credential, password)).fetchall()
        keys = self.get_keys()
        return self.merge_map(self.drop_pass(data), self.drop_pass(keys))

    def get(self, column_name='id', credential=''):
        data = self.cursor.execute(f'''SELECT * FROM {self.table}
                    WHERE {column_name} = ? ''', (credential,)).fetchall()[0]
        keys = self.get_keys()
        return self.merge_map(self.drop_pass(keys), self.drop_pass(data))

    def validate_not_exist(self, email='', phone=0) -> bool:
        if (self.cursor.execute(f'''SELECT * FROM {self.table}
                    WHERE email = ? OR phone = ?''', (email, phone)).fetchall()):
            return False
        return True


class Seller(Base):
    id = 'id'
    name = 'name'
    description = 'description'
    fssai = 'fssai'
    email = 'email'
    phone = 'phone'
    password = 'password'

    def __init__(self) -> None:
        super().__init__()
        self.table = setup.seller

    def insert(self, name: str, description: str, fssai: str, email: str, phone: int, password: str):
        if (self.validate_not_exist(email=email, phone=phone)):
            self.cursor.execute(f'''INSERT INTO {self.table} (name, description, fssai, email, phone, password) VALUES (?,?,?,?,?,?)''', (
                name, description, fssai, email, phone, password))
            con.commit()
            return True
        else:
            return False

    def login(self, email: str = '', phone: int = 0, password: str = ''):
        column, credential = None, None
        if email:
            column, credential = 'email', email
        else:
            column, credential = 'phone', phone
        data = self.cursor.execute(f'''SELECT * FROM {self.table}
                    WHERE {column} = ? AND password = ?''', (credential, password)).fetchall()[0]
        keys = self.get_keys()
        return self.merge_map(self.drop_pass(keys), self.drop_pass(data))

    def get(self, column_name='id', credential=''):
        data = self.cursor.execute(f'''SELECT * FROM {self.table}
                    WHERE {column_name} = ? ''', (credential,)).fetchall()[0]
        keys = self.get_keys()

    def validate_not_exist(self, email='', phone=0) -> bool:
        if (self.cursor.execute(f'''SELECT * FROM {self.table}
                    WHERE email = ? OR phone = ?''', (email, phone)).fetchall()):
            return False
        return True


class Reviews(Base):
    id = 'id'
    user_id = 'user_id'
    product_id = 'product_id'
    title = 'title'
    description = 'description'
    rating = 'rating'
    time = 'time'

    def __init__(self) -> None:
        self.table = setup.reviews

    def insert(self, user_id: int, product_id: int, title: str, description: str, rating: int, time: str):
        if (self.validate_not_exist(user_id, product_id)):
            self.cursor.execute(f'''INSERT INTO {self.table} ( user_id, product_id, title, description, rating, time) VALUES (?,?,?,?,?,?)''', (
                user_id, product_id, title, description, rating, time))
            return True
        else:
            return False

    def get(self, id=0, user_id=0, product_id=0) -> list:
        data = self.cursor.execute(
            f'''SELECT * FROM {self.table} WHERE id = ? OR user_id = ? OR product_id = ?''', (id, user_id, product_id)).fetchall()
        keys = self.get_keys()
        data = [self.merge_map(keys, values) for values in data]
        return data

    def validate_not_exist(self, user_id, product_id):
        if (self.cursor.execute(f'''SELECT * FROM {self.table} WHERE user_id = ? AND product_id = ?)''', (user_id, product_id)).fetchall()):
            return False
        else:
            return True


class Products(Base):
    id = 'id'
    seller_id = 'seller_id'
    name = 'name'
    description = 'description'
    product_image = 'product_image'

    def __init__(self) -> None:
        super().__init__()
        self.table = setup.product

    def insert(self, seller_id: int, name: str, description: str, product_image: bytes):
        self.cursor.execute(f'''INSERT INTO {
                            self.table} (seller_id, name, description, product_image)''', (seller_id, name, description, product_image))
        return True

    def get(self, id=0, seller_id=0, name=''):
        data = self.cursor.execute(
            f'''SELECT * FROM {self.table} WHERE id = ? OR seller_id = ? OR name = ? ''', (id, seller_id, name)).fetchall()
        keys = self.get_keys()
        data = [self.merge_map(keys, value) for value in data]
        if (id):
            return data[0]
        else:
            return data


if __name__ == '__main__':
    user = User()
    seller = Seller()
    # user.login('Nam', 'des', 'sim', 'anoni@emyatil.com', 9816326423, 'phurut')
    # user.login(email='anoni@emyatil.com', password='phurut')
    seller.insert('Seller', "des", 123412341,
                  'sell@mail.com', 1412356243, 'secret')
    seller.login(email='sell@mail.com', password='secret')
