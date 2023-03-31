const srcDisplay = document.querySelector('.src') as HTMLDivElement;
const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const button = document.querySelector('button') as HTMLButtonElement;

let calculation: string[] = [];
console.log(calculation);

let accumulativeCalculation: string;

function calculate(event: any) {
  event.preventDefault();
  const value: any = event.target.value
  if (value === 'CLEAR') {
    calculation = [];
    srcDisplay.innerText = '.';

  }

  else if (value === '=') {
    srcDisplay.innerText = eval(accumulativeCalculation)
  } else {
    calculation.push(value);

    accumulativeCalculation = calculation.join('');
    srcDisplay.innerText = accumulativeCalculation;

    console.log(calculation);
    console.log(accumulativeCalculation);
  }
}

buttons.forEach((button) =>
  button.addEventListener('click', (e) => calculate(e))
)

