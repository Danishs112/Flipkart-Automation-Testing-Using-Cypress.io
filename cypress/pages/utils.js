var base64 = require('base-64');
import cred from "./../fixtures/example.json";

class Utility {
   static getDecodedString(string){
       return base64.decode(cred[string]);
   }
}

export default Utility;