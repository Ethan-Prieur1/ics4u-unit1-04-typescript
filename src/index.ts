/**
 * The program makes the user guess the random number
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-09-23
 */
import promptSync from 'prompt-sync'

const randomNumber = Math.floor(Math.random() * 6 + 1)
const counter = 0
While(true)
{
  const prompt = promptSync()
  const userString = prompt('Guess My Random Number (1-6): ')
  const userNumber = parseInt(userString)
  counter + 1
  if (userNumber === randomNumber) {
    console.log(`You Got it right?! (${counter} Guess)`)
    break
  } else if (randomNumber < userNumber) {
    console.log(`You Guessed TOO HIGH!!! You DUNCE!`)
  } else if (randomNumber > userNumber) {
    console.log(`You Guessed TOO LOW!! You FOOL!`)
  } else {
    ;`Invalid Input, Redeem Yourself and Try Again`
  }
}
console.log(`\nDone`)
