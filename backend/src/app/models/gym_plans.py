from sqlalchemy import Column, Integer, String, Numeric
from app.core.database import Base


class GymPlan(Base):
    __tablename__ = "gym_plans"

    id_plan = Column(Integer, primary_key=True)
    value_plan = Column(Numeric(6,2))
    title_plan = Column(String(45))
    times_installment_plan = Column(Integer)
    descripition_plan = Column(String(100))
