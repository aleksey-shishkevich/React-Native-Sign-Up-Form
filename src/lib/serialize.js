/**
 * serialize request object to GET params
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

export default function serialize(request){
   return Object.getOwnPropertyNames(request).map(param => 
   {
       return Array.isArray(request[param]) ? request[param].map(el => `${param}[]=${el}`).join('&') : `${param}=${request[param]}`
   }
   
   ).join('&');
}