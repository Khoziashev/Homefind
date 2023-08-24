function get(name?: string) {
  const match = document.cookie.match(
    new RegExp("(?:^|;\\s*)" + name + "=([^;]*)")
  );

  return match ? match[1] : null;
}

export default { get };
