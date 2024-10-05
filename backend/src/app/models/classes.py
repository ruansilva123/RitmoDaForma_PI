from sqlalchemy import Column, Integer, String, ForeignKey, Numeric
from sqlalchemy.orm import relationship
from app.core.database import Base


class AcademyClass(Base):
    __tablename__ = "academy_classes"

    id_class = Column(Integer, primary_key=True)
    name_class = Column(String(45))

    calendars = relationship("Calendar", back_populates="academy_class")
    prices = relationship("Price", back_populates="academy_class")


class HourSchedule(Base):
    __tablename__ = "hour_schedules"

    id_hour = Column(Integer, primary_key=True)
    hour = Column(String(45))

    calendars = relationship("Calendar", back_populates="hour_schedule")


class Calendar(Base):
    __tablename__ = "calendars"

    id_calendar = Column(Integer, primary_key=True)
    day_week = Column(String(45))
    class_id = Column(Integer, ForeignKey("academy_classes.id_class"))
    hour_id = Column(Integer, ForeignKey("hour_schedules.id_hour"))

    academy_class = relationship("AcademyClass", back_populates="calendars")
    hour_schedule = relationship("HourSchedule", back_populates="calendars")


class Price(Base):
    __tablename__ = "prices"

    id_price = Column(Integer, primary_key=True)
    price_class = Column(Numeric(6,2))
    amount_class_week = Column(Integer)
    period_class = Column(String(45))
    class_id = Column(Integer, ForeignKey("academy_classes.id_class"))

    academy_class = relationship("AcademyClass", back_populates="prices")