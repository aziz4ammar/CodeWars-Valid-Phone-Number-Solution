function validPhoneNumber(phoneNumber) {
    // Regular expression pattern to match the phone number format
    var pattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    
    // Test if the phone number matches the pattern
    return pattern.test(phoneNumber);
  }  