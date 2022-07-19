
// 리액트 fragment : 감싸려고 쓰는 태그의 꼴 
// 렌더링 결과에는 반영되지 않는다
function Clock(){
  return <>
    <h1>현재 시간을 보여줘</h1>
    <p>현재 시간 : {new Date().toLocaleTimeString()}</p>
  </>
}

export default Clock;
