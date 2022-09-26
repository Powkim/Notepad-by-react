<img src="https://user-images.githubusercontent.com/107850055/191019479-c15383e7-3a40-4efe-9812-e3882c6b5c44.png"></img>
1.첫번째 오류 : local storage에 저장한 데이터들을 map을 사용해서 값을 불러오려고 했는데 Uncaught TypeError: memolist.map is not a function 오류가뜸. 이유는 내가 로컬 스토리지에 데이터를 저장할때 배열 형태로 저장한게 아닌,string으로 저장했기 때문에 배열로 이루어진 data에만 처리가 가능한 map이 작동하지 않아서 생긴 오류였고 배열형태로 데이터를 저장해주니까 정상작동됐다.
2.두번째 오류 : create버튼을 누르게되면 입력된 데이터가 바로 local storage로 저장이 돼야 하는데 클릭을 두번해야 데이터가 저장이 됐다.
