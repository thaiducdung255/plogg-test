/* eslint-disable no-console */
/* eslint - disable no - underscore - dangle */
const { v4: uuidv4 } = require('uuid');

class Person {
   constructor(firstName, lastName, addresses) {
      this._ID = uuidv4();
      this._firstName = firstName;
      this._lastName = lastName;
      this._addresses = addresses;
      this.validateProps();
   }

   // validate properties for Person
   validateProps() {
      if (!this._firstName ?? !this._lastName ?? !this._addresses) {
         throw Error('Missing required params while initializing Person. Required 3 params');
      }

      if (typeof this.firstName !== 'string') {
         throw Error('Person.firstName is not a string');
      }

      if (typeof this.firstName !== 'string') {
         throw Error('Person.firstName is not a string');
      }

      if (!Array.isArray(this.addresses)) {
         throw Error('Person.addresses is not an array');
      }

      let isValidAddresses = true;

      if (this.addresses.length) {
         isValidAddresses = this.addresses.some((address) => typeof address === 'string');
      }

      if (!isValidAddresses) {
         throw Error('Person.addresses is not a valid array of strings');
      }
   }

   // getters and setters
   get firstName() {
      return this._firstName;
   }

   set firstName(newFirstName) {
      this._firstName = newFirstName;
   }

   get lastName() {
      return this._lastName;
   }

   set lastName(newLastName) {
      this._lastName = newLastName;
   }

   get addresses() {
      return this._addresses;
   }

   set addresses(newAddresses) {
      this._addresses = newAddresses;
   }

   get ID() {
      return this._ID;
   }

   set ID(_newID) {
      // prevent from modifying ID
      throw Error('cannot modify ID');
   }
}

const dung = new Person('dung', 'thai', ['hcmc'])

dung.firstName = 'Dung'
dung.lastName = 'Thai'
console.log(dung.firstName, dung.lastName)
