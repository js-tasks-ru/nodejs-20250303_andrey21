export default function sum(a, b) {
 if (typeof a !== 'number' || typeof b !== 'number') {
   throw TypeError('Expected a positive integer');
 }
 return a + b;
}
