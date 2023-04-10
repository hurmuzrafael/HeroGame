

class Hero {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
        this.canFly = false;
        this.shield = false;
    }

    attacked(damage) {
        if(this.canFly) { //this.canFly scris asa inseamna ca este = cu true
            let chance = Math.random(); //Math.random - adauga o valoare random intre 0-1. CHANCE este o variabila ce tine rezultatul functiei Math.random(); valoarea variabilei Chance difera de la o apelare (a functiei Attacked) la alta (doar daca conditia this.canFly este true). 
            if(chance > 0.5) { //daca chance > 0.5 => eroul care are proprietatea de can Fly, va zbura si va evita damage-ul.
                console.log(this.name + ' flew away.');
                damage = 0;
            }
        }

        if(this.shield) { //
            damage *= 0.8; //damage = damage * 0.8; damage-ul scade cu 0.2.
            console.log(this.name + " defends with a shield");
        }

        this.hp  -= damage; //this.hp = this.hp - damage.
        console.log(this.name + " has been attacked. Hp reduced " + damage + ". Hp remaning: " + this.hp + "."); 
    }
}

class Dwarf extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.shield = true;
    }

    attack(otherHero) { //eroul Dwarf ataca un alt erou (other hero) si metoda attack () are ca si parametru otherhero( other hero este un obiect). vom avea 3 obiecte eroi instantiate din clasele de eroi si ii putem folosi ca si valori ale parametrilor.
        let damage = 10;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage); //otherHero(obiectul eroului care a fost atacat) apeleaza metoda din clasa Parinte (clasa Hero) si ca si parametru se transmite valoarea variabilei damage.
    }
}

class Sprite extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
    }

    attack(otherHero) { //eroul Sprite ataca un alt erou (other hero) si metoda attack () are ca si parametru otherhero( other hero este un obiect). vom avea 3 obiecte eroi instantiate din clasele de eroi si ii putem folosi ca si valori ale parametrilor.
        let damage = 15;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage); //otherHero(obiectul eroului care a fost atacat) apeleaza metoda din clasa Parinte (clasa Hero) si ca si parametru se transmite valoarea variabilei damage.
    }
}

class Dragon extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
        this.shield = true;
    }

    attack(otherHero) { //eroul Dragon ataca un alt erou (other hero) si metoda attack () are ca si parametru otherhero( other hero este un obiect). vom avea 3 obiecte eroi instantiate din clasele de eroi si ii putem folosi ca si valori ale parametrilor.
        let damage = 5;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage); //otherHero(obiectul eroului care a fost atacat) apeleaza metoda din clasa Parinte (clasa Hero) si ca si parametru se transmite valoarea variabilei damage.
    }
}

class Fight {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.turn = 0;
    }

    performAttack() {
        if(this.turn === 0) {
            this.hero1.attack(this.hero2);
        } else {
            this.hero2.attack(this.hero1);
        }
    }

    changeTurn() {
        this.turn = 1 - this.turn; // tura poate sa fie 0 sau 1.
    }
    findWinner() {
        if(this.hero1.hp > 0) {
            let winner = this.hero1.name + " won with " + this.hero1.hp + " Hp left."
            console.log(winner);
            return winner;
        } else if(this.hero2.hp > 0) {
            let winner = this.hero2.name + " won with " + this.hero2.hp + " Hp left.";
            console.log(winner);
            return winner;
        } else {
            let winner = 'No heroes left alive.'
            console.log(winner);
            return winner;
        }
    }

    go() {
        do {
            this.performAttack();
            this.changeTurn();
        } while(this.hero1.hp > 0 && this.hero2.hp > 0);
        this.findWinner();
    }
}

let dwarf = new Dwarf("Gimli", 50);
let sprite = new Sprite("Misandei", 40);
let dragon = new Dragon("Drogon", 60);

let epicFight0 = new Fight(dwarf, dragon);
epicFight0.go(); //dragon won

// let epicFight1 = new Fight(sprite, dragon);
// epicFight1.go() //sprite won;

// let epicFight2 = new Fight(dwarf, sprite);
// epicFight2.go(); //sprite won
