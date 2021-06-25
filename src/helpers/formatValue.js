export default function formatValue(value) {
  if (!value && value !== 0) return;
  const valueModulus = Math.sqrt(value ** 2);
  const stringValue = valueModulus.toString();

  const result =
    valueModulus < 9
      ? `0,0${valueModulus}`
      : valueModulus < 99
      ? `0,${valueModulus}`
      : stringValue.substring(0, stringValue.length - 2) +
        "," +
        stringValue.substring(stringValue.length - 2);

  return result;
}
