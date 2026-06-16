export async function typeWriter(
  text,
  callback,
  speed = 10
) {

  let current = "";

  for (
    let i = 0;
    i < text.length;
    i++
  ) {

    current += text[i];

    callback(current);

    await new Promise(
      (resolve) =>
        setTimeout(resolve, speed)
    );

  }

}