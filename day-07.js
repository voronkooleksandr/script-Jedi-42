// https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript
// головне в роботі розробника - уважність!..тут з підказками, тому 100 не чесно буде :)

function validateMessage(msg) {
  if (msg === null) throw new ReferenceError("Message is null!");
  if (typeof msg !== "string")
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  if (msg.length === 0 || msg.length > 255)
    throw new RangeError(`Message contains ${msg.length} characters!`);
  if (msg.includes("<") && msg.includes(">")) {
    return false;
  } else {
    return true;
  }
}

