# def welcome(user):
#   print("Welcome,", user)

# products = ['pen', 'scissors', 'paper']

# def add_item(products, item):
#   products.append(item)


# def hashtag():
#   word = input()
#   return '#' + word

# def hashtag():
#   word = input()
#   return '#' + word

# discount = lambda price: price * 0.9 
# print(discount(100))

# x = lambda price, count :  price * count
# print(x(2,10))


# res = (lambda x, y: x + y) (2, 3)

# res = (lambda x, y: x*y) (2,3)
# print(res)

# def mult(n):
#   return lambda a : a * n

# doubler = mult(2)
# tripler = mult(3)

# print(doubler(5))
# print(tripler(5))

# exam_scores = [85, 62, 95]
# def is_passing(score):
#   return score >= 70

# status = list(map(is_passing, exam_scores))

# class Car:
#   def __init__(self, model, year, odometer):
#     self.model = model
#     self.year = year
#     self.odometer = odometer

#   def describe_car(self):
#     print(self.year, self.model)

#   def read_odometer(self):
#     print("Odometer:", self.odometer, "miles")

# my_car = Car('Audi', 2020, 15000)

# my_car.describe_car()
# my_car.read_odometer()

# #changing a value of the attribute
# my_car.odometer = 20000

# my_car.read_odometer()

# class Car:
#   def __init__(self, model, year, odometer):
#     self.model = model
#     self.year = year
#     self.odometer = odometer

#   def describe_car(self):
#     print(self.year, self.model)

#   def read_odometer(self):
#     print("Odometer:", self.odometer, "miles")

# my_car = Car('Audi', 2020, 15000)
# my_car = Car('BMW', 2025, 19000)

# my_car.describe_car()
# my_car.read_odometer()

# #changing a value of the attribute
# my_car.odometer = 20000

# my_car.read_odometer()

# class Car:
#   def __init__(self, model, year, odometer):
#     self.model = model
#     self.year = year
#     # Making the odometer attribute 'protected'
#     self._odometer = odometer  

#   def describe_car(self):
#     print(self.year, self.model)

#   def read_odometer(self):
#     print("Odometer:", self._odometer, "miles")

# my_car = Car('Audi', 2020, 15000)

# my_car.describe_car()
# my_car.read_odometer()

# class Car:
#   def __init__(self, model, year, odometer):
#     self.model = model
#     self.year = year
#     # Making the odometer attribute 'protected'
#     self._odometer = odometer  

#   def describe_car(self):
#     print(self.year, self.model)

#   def read_odometer(self):
#     print("Odometer:", self._odometer, "miles")

# my_car = Car('Audi', 2020, 15000)

# #accessing the protected attribute
# print(my_car._odometer)

# class Car:
#   def __init__(self, model, year, odometer):
#     self.model = model
#     self.year = year
#     # Making the odometer attribute 'private'
#     self.__odometer = odometer  

#   def describe_car(self):
#     print(self.year, self.model)

#   def read_odometer(self):
#     print("Odometer:", self.__odometer, "miles")

# my_car = Car('Audi', 2020, 15000)

# #accessing the attribute within method
# my_car.read_odometer()


# #error
# print(my_car.__odometer)

class Car:
  def __init__(self, model, year, odometer):
    self.model = model
    self.year = year
    # Making the odometer attribute 'private'
    self.__odometer = odometer  

  def describe_car(self):
    print(self.year, self.model)

  def read_odometer(self):
    print("Odometer:", self.__odometer, "miles")

my_car = Car('Audi', 2020, 15000)

#accesing using name mangling
print(my_car._Car__odometer)


class Car:
  def __init__(self, model, year, odometer):
    self.model = model
    self.year = year
    # Making the odometer attribute 'private'
    self.__odometer = odometer  

  def _describe_car(self):  # Making the describe_car method 'protected'
    print(self.year, self.model)

  def __read_odometer(self):  # Making the read_odometer method 'private'
    print("Odometer:", self.__odometer, "miles")


my_car = Car('Audi', 2020, 15000)

#accessing protected method
my_car._describe_car()

#error when accessing a privet method
my_car.__read_odometer()