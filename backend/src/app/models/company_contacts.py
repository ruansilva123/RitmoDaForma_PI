from sqlalchemy import Column, Integer, String
from app.core.database import Base


class CompanyContact(Base):
    __tablename__ = "company_contacts"

    id_contact = Column(Integer, primary_key=True)
    company_contact = Column(String(45))
    description_contact = Column(String(100))