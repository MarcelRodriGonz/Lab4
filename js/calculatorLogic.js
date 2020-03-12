var tempLog='';
function calculatorLogic(classname, id){
  var instruction='';
  var textAreaLog = document.getElementById('logInformation');
  var resultLabel = document.getElementById('resultValue');
  var input = document.getElementsByClassName('inputNumber')[0].value;
    
    document.getElementsByClassName('inputNumber')[0].value='';

  if(isNaN(input)){
    return alert('Error: Please type a number, not a letter.');
  }
  
  instruction = recieveInstruction(classname,id);
  if(input!='' || instruction=='resetButton'){
    switch(instruction){
      case 'resetButton':
        textAreaLog.value='';
        resultLabel.value='';
        tempLog='';
        input='';
        instruction='';
      break;

      case 'equalButton':
        tempLog += input;
        textAreaLog.value += ('\n') + tempLog;
        tempLog = tempLog.split(' ')
        resultLabel.value = calculate(tempLog);
        textAreaLog.value += ' = ' + resultLabel.value;
        console.log(textAreaLog.value);
        tempLog = '';
      break;

      case 'addButton':
        tempLog+=input+' + ';
      break;

      case 'substractButton':
        tempLog+=input+' - ';
      break;

      case 'multiplicationButton':
        tempLog+=input+' * ';
      break;

      case 'divisionButton':
        tempLog+=input+' / ';
      break;
    }
  }
}

function recieveInstruction(classname,id){
  if(classname!=''){
    return classname;
  }else if(id!=''){
    return id;
  }
}

function calculate(tempLog){
  var result=parseFloat(tempLog[0]);

  for(i=1;i<tempLog.length;i+=2){
    if(tempLog[i] == '+'){
      result += parseFloat(tempLog[i+1]);
    }
    if(tempLog[i] == '-'){
      result -= parseFloat(tempLog[i+1]);
    }
    if(tempLog[i] == '*'){
      result *= parseFloat(tempLog[i+1]);
    }
    if(tempLog[i] == '/'){
      result /= parseFloat(tempLog[i+1]);
    }
  }
  return result.toString();
}