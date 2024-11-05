from pydantic import BaseModel


class CompanyContactBase(BaseModel):
    company_contact : str
    description_contact : str


class CompanyContactCreate(CompanyContactBase):
    pass


class CompanyContact(CompanyContactBase):
    id_contact : int

    class Config: 
        from_attributes = True