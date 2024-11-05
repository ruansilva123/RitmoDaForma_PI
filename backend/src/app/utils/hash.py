import bcrypt


def generate_hash(data : str) -> str:
    salt = bcrypt.gensalt()
    hash_data = bcrypt.hashpw(data.encode('utf-8'), salt)
    return hash_data.decode('utf-8')


def verify_equal_hash_datas(data1 : str, data2 : str) -> bool:
    return bcrypt.checkpw(data1.encode('utf-8'), data2.encode('utf-8'))