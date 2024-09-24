export var formatPublicKey = function formatPublicKey(publicKey) {
  if (publicKey.length <= 10) return publicKey; // In case the key is too short
  return "".concat(publicKey.slice(0, 5), "...").concat(publicKey.slice(-5));
};