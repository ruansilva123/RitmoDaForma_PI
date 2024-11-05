from pydantic import BaseModel


# ===== Academy Class =====
class AcademyClassBase(BaseModel):
    name_class : str


class AcademyClassCreate(AcademyClassBase):
    pass


class AcademyClass(AcademyClassBase):
    id_class : int

    class Config:
        from_attributes = True


# ===== Hour Schedule =====
class HourScheduleBase(BaseModel):
    hour : str


class HourScheduleCreate(HourScheduleBase):
    pass


class HourSchedule(HourScheduleBase):
    id_hour : int 

    class Config:
        from_attributes = True


# ===== Calendar =====
class CalendarBase(BaseModel):
    day_week : str


class CalendarCreate(CalendarBase):
    pass


class Calendar(CalendarBase):
    id_calendar : int
    class_id : int
    hour_id : int

    class config:
        from_attributes = True

# ===== Price =====
class PriceBase(BaseModel):
    price_class : float
    amount_class_week : int
    period_class : str


class PriceCreate(PriceBase):
    pass


class Price(PriceBase):
    id_price : int 
    class_id : int 

    class Config: 
        from_attributes = True