class StaticClass {
  constructor() {
    throw new Error("This is a static class")
  }
}

export function pureValue(value: string | null | undefined): string {
  if (!value) return ""
  return value.replace(/\D+/g, "")
}

const PATTERN_BIRTHDATE = /(\d{2})(\d{2})(\d{4})/

const process = (mask: string, value: string) => {
  const arrayMask = mask.split("")
  const arrayValue = String(value).split("")
  return arrayMask.reduce((acc, curr) => {
    if (arrayValue.length) {
      if (curr === "9") {
        return acc + arrayValue.shift()
      }
      return acc + curr
    }

    return acc
  }, "")
}

export const getPureNumbers = (value: string) => {
  if (!value) {
    return ""
  }
  return value.replace(/\D+/g, "")
}

const masks = {
  date: (value: string) => {
    const pure = getPureNumbers(value)
    const teste = process("99/99/9999", pure)
    return process("99/99/9999", pure)
  },
  default: (value: string) => value,
}

export const formatBirthDate = (value: string | null | undefined) => {
  if (!value) return

  const clearValue = pureValue(value)

  return clearValue.replace(PATTERN_BIRTHDATE, "$1/$2/$3")
}

export type MasksTypes = keyof typeof masks

export class Mask extends StaticClass {
  static format(maskType: MasksTypes = "default", value: string) {
    const mask = masks[maskType]
    return mask ? mask(value) : value
  }
}
