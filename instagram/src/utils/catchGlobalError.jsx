// global error -> 419 error (토큰 관련)
export default function catchGlobalError(error) {
  const { data, status } = error.response;

  console.log(data.message);

  if (status === 419) {
    alert(data.message || "토큰이 만료되었습니다");
    localStorage.clear(); // 기존에 있는 token 제거
    window.location.href = "/"; // 로그인 화면으로 이동
  }
}
