import "./FreeTime.css";

function FreeTime() {
  return (
    <div className="free-time">
      {window.innerWidth > 320 ? (
        <>
          <h1>ЧТО СЕИЧАС ДЕЛАЮ,</h1>
          <h1 className="free-time__title-right">ГДЕ РАБОТАЮ ———</h1>
          <h1 className="free-time__title-right">
            <span>ЧЕМ ЗАНИМАЮСЬ</span>
          </h1>
        </>
      ) : (
        <>
          <h1 className="free-time__title-one">ЧТО СЕИЧАС</h1>
          <h1 className="free-time__title-two">ДЕЛАЮ, ГДЕ РАБО</h1>
          <h1 className="free-time__title-three">—ТАЮ И ЧЕМ</h1>
          <h1 className="free-time__title-right">
            <span> ЗАНИМАЮСЬ</span>
          </h1>
        </>
      )}

      <h1 className="free-time__title-right">
        <span>ВНЕ РАБОТЫ</span>
      </h1>
    </div>
  );
}

export default FreeTime;
