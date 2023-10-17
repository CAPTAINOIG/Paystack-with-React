import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'


const Paystackintegration = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const payWithPayStack = (e) => {
    const publicKey = import.meta.env.VITE_APP_PAYSTACK_KEY;
    if(email === "" || firstName === "" || lastName === "" || amount === ""){
      alert('all input field are required')
  }  else{
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey,
      amount: amount * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction){
        let message = `Payment Complete! Reference ${transaction.reference}`
        alert(message)
        setEmail("")
        setAmount("")
        setFirstName("")
        setLastName("")
      },
      oncancel(){
        alert("You have Canceled the transaction")
      }
     })
  }
}

  return (
    <div className='w3-container w3-row '>
      <div className='w3 container w3-purple'>
        <h3 className='w3-center'>Make Payment</h3>
      </div>
      <div className='w3-container w3-quarter'></div>
      <div className='w3-container w3-half'>
        <div className='w3-container w3-card-4'>
          <form id='paymentForm' className=''>
            <div className='form-group'>
              <label htmlFor="email">Email Address</label>
              <input type="email" id='email-address' className='w3-input' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className='form-group'>
              <label htmlFor="amount">Amount</label>
              <input type="tel" id='amount' className='w3-input' onChange={(e) => setAmount(e.target.value)} value={amount} />
            </div>
            <div className='form-group'>
              <label htmlFor="first-name">First Name</label>
              <input type="text" id='first-name' className='w3-input' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </div>
            <div className='form-group'>
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id='last-name' className='w3-input' onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </div>
            <button style={{marginBottom: 10}} className='w3-btn w3-block w3-purple' type='submit' onClick={payWithPayStack}>PAY</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Paystackintegration