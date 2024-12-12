class Student {
    constructor(name = '', surname = '', age = 0) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    //  Вывела информацию о студенте
    print() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age}`);
    }

    // Сохранения данных в локальное хранилище
    saveToFile() {
        const data = JSON.stringify(this);
        localStorage.setItem('student', data);
        console.log('Student saved to file.');
    }

    // Загрузки данных из локального хранилища
    readFromFile() {
        const data = localStorage.getItem('student');
        if (data) {
            const obj = JSON.parse(data);
            this.name = obj.name;
            this.surname = obj.surname;
            this.age = obj.age;
            console.log('Student data loaded from file.');
        } else {
            console.log('No student data found.');
        }
    }
}
