const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
let userOTP = '';

function sendOTP() {
  alert(`Your OTP is: ${generatedOTP}`);
}

function verifyOTP(input) {
  userOTP = input;
  return userOTP === generatedOTP;
}

