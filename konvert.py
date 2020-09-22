# пользователь вводит данные
#second homework
user_type = input('''Добрый день!
    Вас приветствует конвертер валют. Вы можете сконвертировать рубли в доллары, евро, йены и юани
    Обратите внимание, что курс действителен на 22.09.2020.
    Выберите тип операции, которую вы хотите совершить:
    $ - доллары
    € - евро
    ¥ - японская йена
    元 - китайский юань
    ''')
user_rub = int(input('Введите сумму: '))


# даем значение функции konvert()
def konvert():
    if user_type == "$":
        print(user_rub * 76.04)
    if user_type == "€":
        print(user_rub * 90.01)
    if user_type == '¥':
        print(user_rub * 73.07 / 100)
    if user_type == '元':
        print(user_rub * 11.23)


# даем значение функции again()
def again():
    # User decision if they want to do again
    calc_again = input('''
     Хотите сконвертировать валюты еще раз?
     Введите Д, если да, и Н, если нет.
     ''')
    if calc_again.upper() == 'Д':
        konvert()
    elif calc_again.upper() == 'Н':
        print('Спасибо! Увидимся в следующий раз.')
    else:
        again()


# запускаем функции
konvert()
again()
