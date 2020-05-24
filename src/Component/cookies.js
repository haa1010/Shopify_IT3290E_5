
import React from'react'
function callCookies(){
    const [cookies, setCookie] = useCookies(['cart']);
    return cookies.cart;
}
export default callCookies;