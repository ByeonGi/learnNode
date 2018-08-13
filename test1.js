var http = require("http");
//어플리케이션에 필요한 모듈을 불러올땐 require명령을 사용
//다음 코드는 http모듈을 불러오고 반환되는 http 인스턴스를 http 변수에 저장

http.createServer(function(request, response){
  /*
    http 헤더 전송
    http Statue : 200:OK
    Content type : text/plain
  */
  response.writeHead(200, {'Content-Type' : 'text/plain'});

  // Response Body 를 "Hello World"로 설정
  response.end("Hello World\n");
}).listen(8081);
//http 인스턴스를 사용하여 http.createServer() 메소드를 실행
//listen메소드를 사용하여 포트 8081과 bind해줍니다.
// http.createServer()의 매개변수는 request와 response를 매개변수로 가지고 잇는 함수를 넣어줍니다.
//다음 코드는 언제나 "hello world"를 리턴하는포트 8081의 웹서버를 생성해줍니다.

console.log("Server running at http://127.0.0.1:8081");
//가즈아