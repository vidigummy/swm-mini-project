# SWM 미니프로젝트 - FRONT

## Entity

- User:

  - 사용자 고유 아이디 (string)
  - 패스워드 (string)
  - 이미지 (blob ? image ? 타입 뭘까요 ?)
  - 이름 (string)
  - 본인 분야 (string Array)
  - 팀매칭 여부 (boolean)
  - 구하는사람 분야 (string Array)
  - 연락처(전화번호) (string)
  - 본인 소개 (string)
  - 희망 프로젝트 주제 (string)

- Post:
  - 사용자 고유 아이디 (string)
  - 패스워드 (string)

## 페이지별

- 카드 조회 페이지 (GET)

  - 이름
  - 본인 분야
  - 팀매칭 여부
  - 구하는사람 분야

- 카드 조회 상세 페이지 (GET)

  - 이름
  - 본인분야
  - 팀매칭 여부
  - 구하는사람 분야
  - 연락처(전화번호)
  - 본인 소개
  - 희망 프로젝트 주제

- 사용자 등록 페이지 (POST)

  - ...

- 사용자 정보 수정 (PUT)

  - ...

- 사용자 정보 삭제 (DELETE)

  - ...
