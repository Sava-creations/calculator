Code Overview
setscreen(num)
Updates the current input and the displayed value.
Prevents multiple leading zeros and multiple decimal points.
Clears the input when an operator is selected.
clearScreen()
Resets the calculator's state and clears the display.
setoperator(op)
Sets the current operator and prepares for the next input.
If the last character is an operator, it replaces it with the new operator.
Calls _calculate() if a previous input exists to perform the calculation.
_calculate()
Performs the arithmetic operation based on the current operator.
Fixes precision errors by converting the result to a string with 10 digits and then back to a number.
Updates the display with the current result.
Contributing
Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!

License
This project is licensed under the MIT License.

