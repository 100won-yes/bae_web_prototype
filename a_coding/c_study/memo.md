1.

WEB APIs

API = Application Programming Interfaces 

  API란 사용자가 어떠한 기능(예를들어 로그인,로그아웃 등)을 사용할 때 그 기능이 어떤 로직으로 짜여져 있고 어떻게 구동되는지 몰라도 사용할 수 있게 만든 것.

  API는 종류가 매우 다양하다 (Storage APIs, File APIs, DOM APIs, Graphic APIs 등)

  js작업을 하면서 자주 쓰는 console.log(); 의 console 도 API의 종류 중 하나이다.

  API 종류 참고 사이트 - https://developer.mozilla.org/ko/docs/Web/API

  DOM = Document Object Model 

  DOM이란 어떠한 요소(Element)들을 삭제하거나 추가하거나 조작하는 기능을 제공하는 것

API 중에는 HTTPs 에서만 구동 되는 것도 있다. 
  
  HTTP(Hypertext Transfer Protocal)란  웹 클라이언트와 서버가 어떻게 통신 할 것인지 통신 규약을 정해 놓은 것 (request와 response를 수행함)으로 

  여기서 HTTPs의 s는 Secure의 약자로 즉 보안처리가 잘 된 것이라는 뜻

2.

Browser 구조 분석

  Window - Browser을 열었을 때 보이는 전체

  Document - Window에서 그 Browser만의 영역을 제외한 나머지 전체 부분(HTML을 통하여 작성하는 부분)

  Navigator - Document를 제외한 Browser의 기능이 담겨진 부분

  Window - DOM - document 등
          - BOM(Browser Object Model) - navigator, location, fetch, storage 등
          - JavaScript - Array, Map, Date 등

    @ console.log(window);를 통하여 여러가지 WEB APIs가 나오는 걸 알 수 있다.