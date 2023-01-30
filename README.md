# Market-Service-App

- 작업내용
  - json객체 파일로 data를 만들어서 사용
  - localStorage를 사용해 상품정보를 저장하여 장바구니 구현
  - 가격, 할인율을 필터링하여 상품 정렬 구현
  - 장바구니에 담겨있는 상품들의 가격들을 계산하여 배송비 반영
  - vanilla js
  - sweetalert 라이브러리 사용

---

</br>

### 🏠 Home

![maket](https://drive.google.com/uc?id=142E8MmcdtKnBoK3C4F2l52gW9aSwFyEY)

- section별로 상품 구분하여 정렬
- 장바구니, 전체상품 페이지 구현

</br>

---

### 🍪 LocalStorage

![stor](https://drive.google.com/uc?id=1nhtA-U1sVc9Uphm3ZX1CGe9SX7kRaX2_)

- loacalStorage에 key,value형식으로 상품정보를 저장
- 장바구니에서 localStorage에 저장되어있는 값으로 상품 렌더링
- 상품 담기, 삭제 구현

</br>

---

### 🛒 Cart 장바구니

![cart](https://drive.google.com/uc?id=1eXZN2oDuEE6WU1qcOZifqzBMGR3gAdag)

- 장바구니에 담은 상품들을 확인
- 장바구니페이지에서도 상품 삭제 가능

</br>

---

### 💳 상품 가격 계산

![price](https://drive.google.com/uc?id=1PfVOjQR9F7h7S7iumtQLpOAQ0wadvpVK)

- 상품금액, 할인금액, 배송비, 결제예정금액 계산하여 화면에 나타냄
- 금액에 맞춰 배송비 반영되도록 구현

</br>

---

### ⛓ 금액, 할인율별 상품 정렬

![sort](https://drive.google.com/uc?id=1oZhzxPVuuwWja4oI7kAdvmhpiICW6aNr)

- 최소금액, 최대금액, 최소할인율로 상품 정렬

</br>

---

### 👍🏻 Review

- reduce 메서드로 상품 가격을 계산하면서 reduce메서드의 활용성을 알게 됨
- module로 세분화시켜 코드를 작성하면서 module의 중요성을 알게 되었음.
  - key, 상수를 따로 만들어 사용
  - 재사용에 있어서 코드를 짤 때 첫 로직을 제대로 정리해야할 것 같다고 느낌
- 논리연산자를 잘 사용하면 코드의 반복을 줄이고 가독성을 높일 수 있었음
