var customerName = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName;
}
console.log(upperCaseCustomerName());

function setBestCustomer(){
  bestCustomer = 'not bob';
  return bestCustomer;
}
