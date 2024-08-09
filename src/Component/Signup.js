import React, { useRef, useState } from 'react';
import img from '../images/img17.jpg';
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

export default function Signup() {

  // const form = document.getElementById('form');
  // const username = document.getElementById('username');
  // const email = document.getElementById('email');
  // const password = document.getElementById('password');
  // const password2 = document.getElementById('password2');

  // form.addEventListener('submit', e => {
  //   e.preventDefault();

  //   validateInputs();
  // });

  // const setError = (element, message) => {
  //   const inputControl = element.parentElement;
  //   const errorDisplay = inputControl.querySelector('.error');

  //   errorDisplay.innerText = message;
  //   inputControl.classList.add('error');
  //   inputControl.classList.remove('success')
  // }

  // const setSuccess = element => {
  //   const inputControl = element.parentElement;
  //   const errorDisplay = inputControl.querySelector('.error');

  //   errorDisplay.innerText = '';
  //   inputControl.classList.add('success');
  //   inputControl.classList.remove('error');
  // };

  // const isValidEmail = email => {
  //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // }

  // const validateInputs = () => {
  //   const usernameValue = username.value.trim();
  //   const emailValue = email.value.trim();
  //   const passwordValue = password.value.trim();
  //   const password2Value = password2.value.trim();

  //   if (usernameValue === '') {
  //     setError(username, 'Username is required');
  //   } else {
  //     setSuccess(username);
  //   }

  //   if (emailValue === '') {
  //     setError(email, 'Email is required');
  //   } else if (!isValidEmail(emailValue)) {
  //     setError(email, 'Provide a valid email address');
  //   } else {
  //     setSuccess(email);
  //   }


  //   if (passwordValue === '') {
  //     setError(password, 'Password is required');
  //   } else if (passwordValue.length < 8) {
  //     setError(password, 'Password must be at least 8 character.')
  //   } else {
  //     setSuccess(password);
  //   }


  //   if (password2Value === '') {
  //     setError(password2, 'Please confirm your password');
  //   } else if (password2Value !== passwordValue) {
  //     setError(password2, "Passwords doesn't match");
  //   } else {
  //     setSuccess(password2);
  //   }


  // };



  // const form = document.getElementById('form');

  const navigate = useNavigate();
  const [emaill, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [result, setResult] = useState("");


  const formSubmit = (e) => {
    e.preventDefault();

    validateInputs(e);
  }

  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  let num1 = 0;
  let num2 = 0;
  let num3 = 0;

  const validateInputs = (e) => {

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const emailError = document.querySelector('#emailError');
    const passError = document.querySelector('#passError');
    const pass2Error = document.querySelector('#pass2Error');


    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (emailValue === '') {
      emailError.innerHTML = 'Email is required';
      email.classList.add('border-red-600');
      email.classList.remove('border-green-600');
    } else if (!isValidEmail(emailValue)) {
      emailError.innerHTML = 'Provide a valid email address';
      email.classList.add('border-red-600');
      email.classList.remove('border-green-600');
    } else {
      emailError.innerHTML = '';
      email.classList.remove('border-red-600');
      email.classList.add('border-green-600');
      num1 = 1;
    }


    if (passwordValue === '') {
      passError.innerHTML = 'Password is required';
      password.classList.add('border-red-600');
      password.classList.remove('border-green-600');
    } else if (passwordValue.length < 8) {
      passError.innerHTML = 'Password must be at least 8 character.';
      password.classList.add('border-red-600');
      password.classList.remove('border-green-600');
    } else {
      passError.innerHTML = '';
      password.classList.remove('border-red-600');
      password.classList.add('border-green-600');
      num2 = 1;
    }

    if (password2Value === '') {
      pass2Error.innerHTML = 'Please confirm your password';
      password2.classList.add('border-red-600');
      password2.classList.remove('border-green-600');

    } else if (password2Value !== passwordValue) {
      pass2Error.innerHTML = "Passwords doesn't match";
      password2.classList.add('border-red-600');
      password2.classList.remove('border-green-600');
    } else {
      pass2Error.innerHTML = '';
      password2.classList.remove('border-red-600');
      password2.classList.add('border-green-600');
      num3 = 1;
    }

    if (num1 === 1 && num2 === 1 && num3 === 1) {
      const url = 'http://localhost/manish/restaurant/src/Component/action.php';
      let fData = new FormData();
      fData.append('email', emaill);
      fData.append('password', pass);
      fData.append('cpassword', cpass);
      axios.post(url, fData).then(response => navigate('/Login')).catch(error => alert("sorry for inconvience"));
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs(e)

    const url = 'http://localhost/manish/restaurant/src/Component/action.php';
    let fData = new FormData();
    fData.append('email', emaill);
    fData.append('password', pass);
    fData.append('cpassword', cpass);
    axios.post(url, fData).then(response => navigate('/Login')).catch(error => alert("sorry for inconvience"));
  }


  // const form = $(e.target);
  // $.ajax({
  //   type: "POST",
  //   url: 'http://localhost/manish/restaurant/src/Component/action.php',
  //   data: form.serialize(),
  //   success(data) {
  //     setResult(data);
  //   },
  // });




  return (
    <div className='w-screen h-screen' style={{ backgroundImage: `url(${img})` }}>
      <div className="bg-black/80 wi-full h-full flex justify-center items-center">
        <div className="w-[400px] mx-4 py-16 px-10 bg-white text-center rounded-lg">
          <form id="form" onSubmit={(e) => formSubmit(e)} action="action.php" method='post'>
            <h1 className='text-2xl font-bold mb-3' >Signup</h1>
            <div className="">
              <input name='email' type="email" id='email' className='rounded-sm inline-block w-full border-[3px] border-gray-300  px-3 py-2 mb-1' placeholder='Email' value={emaill} onChange={(e) => setEmail(e.target.value)} />
              <h2 id='emailError' className="text-[#ff3860] text-left text-[10px]  mb-3"></h2>
            </div>
            <div className="">

              <input name='password' type="password" id='password' className='rounded-sm inline-block w-full border-[3px] border-gray-300 px-3 py-2 mb-1' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
              <h2 id='passError' className="text-[#ff3860] text-left text-[10px]  mb-3"></h2>
            </div>
            <div className="">
              <input name='cpassword' type="password" id='password2' className='rounded-sm inline-block w-full border-[3px] border-gray-300 px-3 py-2 mb-1' placeholder='Confirm Password' value={cpass} onChange={(e) => setCpass(e.target.value)} />
              <h2 id='pass2Error' className="text-[#ff3860] text-left text-[10px] mb-4"></h2>
            </div>
            <button name='submit' type="submit" value="Signup" className='rounded-sm bg-red-700 text-white font-bold inline-block w-full px-3 py-2 mb-3'>Signup</button>
            <p>Already have an account? <Link className='text-red-700' to="/Login">Login</Link></p>
          </form>
          <h1>{result}</h1>
        </div>
      </div>
    </div>
  )
}

