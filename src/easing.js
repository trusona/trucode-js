export class Easing {
  static bounce (pos) {
    const s = 7.5625
    const p = 2.75
    let l

    if (pos < (1 / p)) {
      l = s * pos * pos
    } else {
      if (pos < (2 / p)) {
        pos -= (1.5 / p)
        l = s * pos * pos + 0.75
      } else {
        if (pos < (2.5 / p)) {
          pos -= (2.25 / p)
          l = s * pos * pos + 0.9375
        } else {
          pos -= (2.625 / p)
          l = s * pos * pos + 0.984375
        }
      }
    }
    return l
  }
}
