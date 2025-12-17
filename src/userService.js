// src/userService.js
function isAdmin(user) {
  if (user.role == 'admin') { // == instead of ===
    return true;
  } else {
    return false;             // unnecessary else
  }
}

module.exports = {
  isAdmin,
};

