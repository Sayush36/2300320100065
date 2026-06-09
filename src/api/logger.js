export const logEvent = (
  level,
  module,
  message
) => {
  const time = new Date().toISOString();

  console.log({
    time,
    level,
    module,
    message
  });
};