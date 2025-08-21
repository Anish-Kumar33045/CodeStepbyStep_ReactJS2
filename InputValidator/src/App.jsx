import "./App.css";
import Soln1 from "./Soln1";
import Soln2 from "./Soln2";
import UseReducerHook from "./UseReducerHook";
function App() {
  return (
    <div>
      {/* <Soln1 /> */}
      {/* <Soln2 /> */}
      <UseReducerHook />
    </div>
  );
}

export default App;
/*
let regex = /^[A-Za-z0-9]+$/i;
creates a regular expression and stores it in the variable regex.

Breakdown of the pattern:
/ ... / → regex literal.

^ → start of the string.

[A-Za-z0-9] → allows uppercase letters (A–Z), lowercase letters (a–z), and digits (0–9).

+ → one or more characters.

$ → end of the string.
The $ in your regex is not a literal dollar symbol.
In regex, $ means “end of string”.

i → case-insensitive flag (so [A-Za-z] already covers both cases, but with i you could just write [A-Z0-9] or [a-z0-9]).
*/
