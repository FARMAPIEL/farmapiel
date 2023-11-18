export function fillDecimals(symbol: string,number: any, length: any) {
    function pad(input: any, length: any, padding: any): any { 
      var str = input + "";
      return (length <= str.length) ? str : pad(str + padding, length, padding);
    }
    var str        = number+"";
    var dot        = str.lastIndexOf('.');
    var isDecimal  = dot != -1;
    var integer    = isDecimal ? str.substr(0, dot) : str;
    var decimals   = isDecimal ? str.substr(dot+1)  : "";
    decimals       = pad(decimals, length, 0);
    return symbol + addCommas(integer);
  }


export function addCommas(nStr: string) { 
  nStr += ''; 
  var x = nStr.split('.'); 
  var x1 = x[0]; 
  var x2 = x.length > 1 ? '.' + x[1] : ''; 
  var rgx = /(\d+)(\d{3})/; 
  while (rgx.test(x1)) { 
   x1 = x1.replace(rgx, '$1' + '.' + '$2'); 
  } 
  return x1 + x2; 
}