/*
Задание 10.
Первый объект
важность: 3

Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.

1. Создайте пустой объект user.
2. Добавьте свойство name со значением Вася.
3. Добавьте свойство surname со значением Петров.
4. Поменяйте значение name на Сергей.
5. Удалите свойство name из объекта.

https://learn.javascript.ru/task/hello-object
*/

//  Создайте пустой объект user.

var user = {};  

// Добавьте свойство name со значением Вася.

user.name = "Basya";

// Добавьте свойство surname со значением Петров.

user.surname = "Petrov";

// Поменяйте значение name на Сергей.

name = "Sergey";

// Удалите свойство name из объекта.

delete user.name;

// Первые три шага могут выглядеть так

var user = new Object();
user["name"] = "Basya";
user["surname"] = "Petrov";