---
title: 해당 템플릿 사용 방법
date: 2021-12-24
---

> 첫 게시글입니다.

여러분은 이 템플릿을 복사해서 {사용자명}.github.io 라는 public 저장소를 만드시면 됩니다.

아래 설명을 따라하면 블로그 호스팅용 저장소를 만들 수 있습니다.

```sh
git clone https://github.com/get6/blog-website-template.git {사용자명}.github.io
cd {사용자명}.github.io
```

그러면 내려받은 위치로 이동된 후 이 명령을 통해 `git remote -v` 이 저장소와 연결된 원격 저장소 경로를 볼 수 있습니다. 

> 예상된 출력 결과
```sh
➜  blog-website-template git:(dev) ✗ git remote -v
origin  git@github.com:get6/blog-website-template.git (fetch)
origin  git@github.com:get6/blog-website-template.git (push)
```

여기다가 push하시면 안되니깐 이 원격 리모트를 지웁니다. `git remote remove origin`

그리고 GitHub에 {사용자명}.github.io로 public 저장소를 만듭니다.
> 주의! 막 만들어진 원격 저장소 내부에는 아무런 파일도 없는 상태여야 합니다.\
> 안되는 건 아니지만 무언가가 있으면 충돌이 날 수 있습니다. 이를 먼저 해결하셔야 합니다.

만들어졌다면 아래 명령어를 통해 로컬에 있는 저장소를 원격 저장소로 올려줍시다. (저는 메인 브랜치를 dev로 했습니다.)
```sh
git remote add origin {블로그 호스팅용 깃주소}
git branch -M dev
git push -u origin dev
```

이러면 블로그 원격 저장소에 만들기가 끝이납니다.

---

원하는 방식으로 자유롭게 만드세요. 압축 파일을 다운받고 저장소를 만든 뒤 push를 하셔도 좋습니다.

이 템플릿은 제가 사용하기 위한 설정들을 다 구성해 놓았기 때문에 가져가셔서 원하는 UI만 개발하시면 될겁니다.

기본 브랜치는 dev고 배포용 브랜치는 main입니다.

저 같은 경우 blog 폴더를 [Obsidian](https://obsidian.md/)에서 열어서 글을 작성하고 있습니다.
이렇게 사용하는 경우 blog/.obsidian 폴더가 만들어지고 여러 파일이 생깁니다.