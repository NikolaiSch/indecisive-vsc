export const rust = {
  i8: "isize",
  i16: "i8",
  i32: "i16",
  i64: "i32",
  i128: "i64",
  isize: "i128",

  u8: "usize",
  u16: "u8",
  u32: "u16",
  u64: "u32",
  u128: "u64",
  usize: "u128",

  f32: "f64",
  f64: "f32",

  const: "static",
  static: "const",

  "println!": "print!",
  "print!": "println!",

  "eprintln!": "eprint!",
  "eprint!": "eprintln!",

  "&mut": "&dyn",
  "&dyn": "&mut",

  to_uppercase: "to_lowercase",
  to_lowercase: "to_uppercase",

  into_iter: "iter",
  iter: "iter_mut",
  iter_mut: "into_iter",

  // TODO: need to figure pub and pub(self) out

  // TODO: need to figure out #[cfg(x)] and #[cfg(not(x))] out

  // TODO: maybe need to take the trait bounds out and into a where and reverse them

  // TODO: maybe options into results and results into options

  // TODO: &str to String and String to &str

  // TODO: const fn to fn and fn to async fn and async fn to const fn

  // TODO: Maybe &self to &mut self and &mut self to &self

  // TODO: if not a notable string, then use raw strings and then byte strings and then byte raw strings

  // TODO: if its a random long constant number, use _ for numbers clarity

  // TODO: maybe use Char::is_numberic() and then its !is_numberic()

  // TODO: unwrap() to expect()
}
