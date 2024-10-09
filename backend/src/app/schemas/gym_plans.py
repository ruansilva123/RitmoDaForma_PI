from pydantic import BaseModel


class GymPlanBase(BaseModel):
    value_plan : float
    title_plan : str
    times_installment_plan : int 
    descripition_plan : str


class GymPlanCreate(GymPlanBase):
    pass


class GymPlan(GymPlanBase):
    id_plan : int 

    class Config: 
        from_attributes = True