import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []
  //leere Zeichenkette

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      //auch E ignorieren
    } else {
      result.push(currentElement)
    }
  }

  // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentUpperCase = currentElement.toUpperCase()
    result.push(currentUpperCase)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // zähle das e
      count = count + 1
    } else if (currentElement === "E") {
      //auch E ignorieren
      count = count + 1
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe05(args) {
  const input = args
  const result = []

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const UpperCase = currentElement.toUpperCase()
    if (currentElement === "." || currentElement === " ") {
    } else if (currentElement === UpperCase) {
      hasUpperCaseLetter = true
    }
  }
  return hasUpperCaseLetter
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  let SpecialLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const UpperCaseLetter = currentElement.toUpperCase()

    const LowerCaseLetter = UpperCaseLetter.toLowerCase()
    if (currentElement === " ") result.push(currentElement)
    else if (LowerCaseLetter === UpperCaseLetter) {
      SpecialLetter = true
    }
  }
  return SpecialLetter
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe08(args) {
  //func und tab
  const input = args
  const result = [] // leeres resultat weil sonst hängt es immeer an den vorhandenen Wert an

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Erkenne ob das aktuelle Zeichen ein e ist
    if (currentElement === "e") {
      // Das aktuelle Zeichen ist ein e
      // Statt das e anzuhängen, hängen wir eine 3 an
      result.push(3)
    } else if (currentElement === "E") {
      // Wir möchten auch grosse Es erkennen
      result.push(3)
    } else {
      // In allen anderen Fällen, möchten wir das aktuelle Zeichen anhängen
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)
// link und tab

export function aufgabe09(args) {
  const input = args
  const result = []

  const len = input.length
  if (len === 6) {
    // wenn Länge 6
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)
export function aufgabe12(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Suche die Position des ersten es in einem Text
    if (input[i] === "e" || input[i] === "E") {
      return i
    } else {
      return -1
    }
  }
  return
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []

  let Position = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn du ein e findest
    if (currentElement === "e" || currentElement === "E") {
      //speichere die Position des e`s
      Position = i
    }
  }

  return Position
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []

  let pos = -1
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //suche die Position des dritten e`s in einem Text
    if (currentElement === "e" || currentElement === "E") {
      count = count + 1
      if (count === 3) {
        pos = i
      }
    }
  }
  return pos
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args

  let pos = -1

  for (let i = 0; i < input.length; i++) {
    //wenn du ein leere Zeichen findest
    if (input[i] === " ") {
      //speichere die Position
      pos = i
      break
    }
  }
  return pos
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {}
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)
