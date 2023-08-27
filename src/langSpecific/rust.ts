let decisions = {
  // rust
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

  // TODO: need to figure pub out
}
