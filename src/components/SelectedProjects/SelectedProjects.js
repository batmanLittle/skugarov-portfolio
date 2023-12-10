import "./SelectedProjects.css";
import Card from "../Card/Card";

function SelectedProjects() {
  return (
    <div className="selected-projects">
      <div className="selected-projects__block">
        <h1 className="selected-projects__title-one">
          ХАИЛАИТЫ <span>A.K.A</span>
        </h1>
        <h1 className="selected-projects__title">ССЫЛКИ НА МОИ</h1>
        <div className="selected-projects__block-three">
          <h1>
            <span>ИЗБРАННЫЕ</span>
          </h1>
          <div className="selected-projects__block-three_text">
            <p>Каждый ссылка - это результат работы</p>
            <p>нескольких людей или команды.</p>
            <p>Без них</p>
            <p>ни один проект не увидел</p>
            <p>бы света</p>
          </div>
        </div>

        <h1>
          <span>ПРОЕКТЫ</span>
        </h1>
      </div>

      <div className="selected-projects__cards">
        <Card
          text1={"ЗАПУСТИЛИ И РАЗВИВАЕМ"}
          text2={"ЛИЧНЫЙ КАБИНЕТ"}
          text3={"WEB & MOBILE "}
          styleText3={"card__block-one_text-three"}
          styleText4={"card__text-hide"}
          style={"card__blue"}
          number={"①"}
          title={"БЛАНК БАНК "}
          job={"РОЛЬ: ВЕДУЩИЙ ДИЗАЙНЕР"}
          styleJob={"card__red"}
        />
        <Card
          text1={"РАЗВИВАЛ РАЗДЕЛ ПЕРЕВОДОВ"}
          text2={"ДЛЯ ФИЗ. ЛИЦ"}
          text3={"iOS & ANDROID "}
          styleText1={"card__block-two_text-one"}
          styleText2={"card__block-two_text-two"}
          styleText3={"card__block-two_text-three"}
          styleText4={"card__text-hide"}
          style={"card__red"}
          number={"②"}
          title={"АЛЬФА БАНК "}
          job={"РОЛЬ: СТАРШИЙ ДИЗАЙНЕР"}
          styleJob={"card__blue"}
        />
        <Card
          text1={"РЕДИЗАЙН ПРИЛОЖЕНИЙ"}
          text2={"iOS & ANDROID"}
          styleText2={"card__block-three_text-two"}
          styleText3={"card__text-hide"}
          styleText4={"card__text-hide"}
          style={"card__green"}
          number={"③"}
          title={"ВЕДО- МОСТИ "}
          job={"РОЛЬ: СТАРШИЙ ДИЗАЙНЕР"}
          styleJob={"card__red"}
        />
        <Card
          text1={"БАНК ЗЕНИТ"}
          text2={"& PFOOD"}
          styleText2={"card__block-four_text-two"}
          styleText3={"card__text-hide"}
          styleText4={"card__text-hide"}
          style={"card__burgundy"}
          number={"④"}
          title={"SURF STUDIO "}
          job={"РОЛЬ: UX/UI ДИЗАЙНЕР"}
          styleJob={"card__red"}
        />
        <Card
          text1={"ДОСТАВИСТЫ"}
          text2={"Актион-медиа"}
          text3={"ERNST & YOUNG"}
          text4={"NISSAN"}
          styleText2={"card__block-five_text-two"}
          styleText4={"card__block-five_text-four"}
          style={"card__black"}
          number={"⑤"}
          title={"ЕЩЕ РАБОТАЛ ДЛЯ↑↑↑"}
          job={"РОЛЬ: UX/UI ДИЗАЙНЕР"}
          styleJob={"card__yellow"}
          styleArrow={"card__text-hide"}
        />
      </div>
    </div>
  );
}

export default SelectedProjects;
