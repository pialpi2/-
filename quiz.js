class Employee {
    constructor(){
        this.baseSalllary = 8000000;
    }
    calculateSalary(){}
}

class FullTimeEmployee extends Employee{
    calculateSalary(){
        console.log(`Budi mendapatkan bonus gaji karyawan tetap adalah ${this.baseSalllary}`);
    }
}

class PartTimeEmployee extends Employee{
    calculateSalary(bonus){
        this.baseSalllary = 6000000;
        this.totalSallary = this.baseSalllary * bonus;
        console.log(`Sita mendapatkan bonus ${bonus} gaji karyawan kontrak ${this.baseSalllary}`);
    }
}

const partTime = new PartTimeEmployee();
partTime.calculateSalary(5);