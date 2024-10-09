import re

def validate_password():
    pass


def validate_new_password(password : str):
    if (len(password) >= 8 and 
        len(password) <=12 and
        re.search(r"[A-Z]", password) and
        re.search(r"[a-z]", password) and
        re.search(r"[\d]", password) and
        re.search(r"[!@#$%&*(){|}]", password)):
        return True
    return False