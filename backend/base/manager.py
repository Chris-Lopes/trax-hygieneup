import setup

con, cur = setup.main()


def drop_pass(data):
    return data[0:-1:]


class User:
    id = 'id'
    name = 'name'
    description = 'description'
    image = 'image'
    email = 'email'
    phone = 'phone'

    def __init__(self) -> None:
        self.table = setup.user

    def validate_not_exist(self, email='', phone=0):
        if (cur.execute(f'''SELECT * FROM {self.table}
                    WHERE email = ? OR phone = ?''', (email, phone)).fetchall()):
            return False
        return True

    def insert(self, name: str, description: str, image: bytes, email: str, phone: int, password: str):
        if (self.validate_not_exist(email=email, phone=phone)):
            cur.execute(f'''INSERT INTO {self.table} (name, description, image, email, phone, password) VALUES (?,?,?,?,?,?)''', (
                name, description, image, email, phone, password))
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
        return cur.execute(f'''SELECT * FROM {self.table}
                    WHERE {column} = ? AND password = ?''', (credential, password)).fetchall()

    def get(self, column_name='', credential=''):
        data = cur.execute(f'''SELECT * FROM {self.table}
                    WHERE {column_name} = ? ''', (credential,)).fetchall()
        return list(drop_pass(val) for val in data)


class Seller:
    id = 'id'
    name = 'name'
    description = 'description'
    image = 'image'
    fssai = 'fssai'
    email = 'email'
    phone = 'phone'
    password = 'password'

    def __init__(self) -> None:
        self.table = setup.seller

    def validate_not_exist(self, email='', phone=0, fssai=0):
        if (cur.execute(f'''SELECT * FROM {self.table}
                    WHERE email = ? OR phone = ? OR fssai = ?''', (email, phone, fssai)).fetchall()):
            return False
        return True

    def insert(self, name: str, description: str, image: bytes, fssai: str, email: str, phone: int, password: str):
        if (self.validate_not_exist(email=email, phone=phone)):
            cur.execute(f'''INSERT INTO {self.table} (name, description, image, fssai, email, phone, password) VALUES (?,?,?,?,?,?)''', (
                name, description, image, fssai, email, phone, password))
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
        return cur.execute(f'''SELECT * FROM {self.table}
                    WHERE {column} = ? AND password = ?''', (credential, password)).fetchall()

    def get(self, column_name='', credential=''):
        data = cur.execute(f'''SELECT * FROM {self.table}
                    WHERE {column_name} = ? ''', (credential,)).fetchall()
        return list(drop_pass(val) for val in data)


if __name__ == '__main__':
    user = User()
    user.insert('Nam', 'des', 'sim', 'anoni@emyatil.com', 9816326423, 'phurut')
    print(user.get(user.email, 'anoni@emyatil.com'))
