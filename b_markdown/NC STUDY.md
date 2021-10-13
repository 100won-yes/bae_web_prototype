# NC STUDY

## 211012

### vscode

- 폴더, 파일 이름은 항상 영문 소문자로 한다 (대문자 X)



### html

- <!-- <a href="http://google.com" target="_blank"> -->

  > 저 코드에서 a 는 tag 를 나타냄. href / target 는 attribute(속성)를 나타냄.

- <img> tag는 self-closing tag. (닫는 tag가 따로 없다.)



### CSS

- #### <!-- h1 {color:red;} -->

  > 코드에서 color 부분은 Property (속성) 을 나타낸다.

- #### collapsing margins 

  > 두 block 간의 경계가 같을시 margin 값은 둘중에 한개만 적용된다. (위,아래만 적용)

- #### inline-block

  inline 요소는 높이와 너비를 가지지 않는다. 그래서 block요소를 inline로 

  바꿔주면 높이와 너비를 가지지 않으므로 브라우저 상에서 사라진것처럼 보인다.

  그럴때 display:inline-block 를 사용해주면 된다. 그런데 inline-block은

  일반 block 처럼 너비를 웹사이즈에 맞추는게 아니라 float처럼 각각 사이즈에 맞춘다.

  (inline-block 속성은 사용하지 않는게 좋다. 반응형 처럼 창크기에 영향을 많이받음)

- #### FLEX

  - display:flex; 는 block요소들을 밑이 아닌 옆으로 해주고 싶을때 사용 (float처럼)

  - 주의할점은 원하는 요소에 써주는게 아닌 그 부모요소에 써야된다.

  - 축이되는 용어

    - ![download](C:\bae_work\bae_git\bae_web_prototype\b_markdown\image\download.png)
    - main axis - > justify-content:#; / cross axis - > align-items:#;를 나타냄

  - flex-direction:#; 속성은 디폴트 값이 row이고 column으로 바꿀시

    이미 정해놓은 main / cross axis 가 서로 뒤바뀌게 된다.

