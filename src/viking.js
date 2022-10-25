// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.healt -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (damage > this.healt) {
      return `${this.name} has received ${this.damage} points of damage`;
    }
    if (this.health <= 0) {
      return `${this.name} has died inact of combat`;
    }
  }
  battleCry() {
    return `Odin owns you all!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (damage < this.health) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if (damage >= this.health) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking() {}
  addSaxon() {}
  vikingAttack() {}
  saxonAttack() {}
  showStatus() {}
}
