 get salary() {
        return `You are not allowed to see the salary ${this._salary}`;
    }

    set salary(value) {

        if (value < 0) {
            console.error("Invalid Salary");
        } else {
            this._salary = value;
        }
        
    }