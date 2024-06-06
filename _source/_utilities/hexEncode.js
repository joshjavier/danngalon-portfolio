/* ----------------------------------------------------------------------------
Encode email address to make it unreadable to email harvesters
h/t https://thalita.dev/writings/encoded-email/
Liquid: {{ contact.email | hexEncode }}
---------------------------------------------------------------------------- */

/** @param {string} value */
function hexEncode(value) {
  return value
    .split('')
    .map((char) => `&#x${char.charCodeAt().toString(16)};`)
    .join('');
}

module.exports = hexEncode;
