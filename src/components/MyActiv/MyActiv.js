import "./MyActiv.css";

function MyActiv() {
  return (
    <>
      {window.innerWidth > 768 ? (
        <div className="my-activ">
          <div className="my-activ__info">
            <div className="my-activ__header">
              <p className="my-activ__header_profession">
                РОЛЬ — ВЕДУЩИЙ ДИЗАЙНЕР
              </p>
              <div className="my-activ__header_block">
                <p className="my-activ__header_block-one">
                  С 2021 года работаю ведущим дизайнер продукта в{" "}
                  <span className="my-activ__header_underline">Бланке.</span>{" "}
                  &nbsp;
                  <span className="my-activ__header_span">
                    Проектирую и запускаю банковские <br />
                  </span>{" "}
                  ① &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className="my-activ__header_span">
                    продукты для предпринимателей.
                  </span>
                  &nbsp;Управляю продуктовой дизайн-командой
                  <br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;из 7
                  человек&emsp;&emsp;&emsp;&emsp;&emsp; Пропагандирую и
                  транслирую системное мышление через дизайн.
                  <br />
                  &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
                  ② &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;Делать сложные вещи
                  простыми — это не гениальность
                  <br />{" "}
                  &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;(хотя
                  бывает и такое), а правильный процесс,
                  <br />{" "}
                  &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;который
                  приводитк отличному решению
                </p>
              </div>

              <div className="my-activ__header_block-two">
                <h2 className="my-activ__header_block-two_title">
                  БЛАНК
                  <br /> БАНК
                </h2>
                <div className="my-activ__header_block-two_text">
                  <p className="my-activ__header_block-two_paragraph">
                    Этот тезис помог мне сформировать в банке
                    <br /> ③ &emsp;&emsp;&emsp;новые продуктовые и дизайн
                    процессы. <br />
                    &emsp;&emsp;&emsp;&emsp;Которые мы сейчас развиваем вместе{" "}
                    <br />
                    &emsp;&emsp;&emsp;&emsp;со всей командой продукта
                  </p>
                  <p className="my-activ__header_block-two_paragraph">
                    А другая часть моих задач — это работа с . <br />④
                    &emsp;&emsp;&emsp;Создание условий, в которых они работают{" "}
                    <br />
                    &emsp;&emsp;&emsp;&emsp;комфортно и эффективно. Верю, что мы{" "}
                    <br />
                    &emsp;&emsp;&emsp;&emsp;умножают идеи и друг друга
                  </p>
                </div>
              </div>
            </div>
            <p className="my-activ__info_subtitle">В СВОБОДНОЕ ВРЕМЯ</p>
            <div className="my-activ__footer">
              <p className="my-activ__footer_paragraph">
                Веду телеграмм-канал «Repo». Публикую «мясо» <br />
                ⑤ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;из рабочего
                процесса: картинки, скриншоты, <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;видео и
                заметки
              </p>
              <p className="my-activ__footer_paragraph-six">
                Иногда пишу код на JavaScript: сайты, плагины и ботов. Люблю
                рисовать <br />⑥ &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;и
                проектировать шрифты. Недавно нарисовал шрифт <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;«Liter». Он
                доступен по ссылке
              </p>
              <div className="my-activ__footer_block">
                <p className="my-activ__footer_block-text">
                  Если ты хочешь пригласить меня попить кофе, или написать{" "}
                  <br />
                  по рабочему вопросу есть несколько ссылок
                  <br />
                  <br />
                  <br /> <span className="my-activ__header_underline">TG</span>
                  (Предпочитаю),
                  <span className="my-activ__header_underline">FB,</span>{" "}
                  <span className="my-activ__header_underline">TWITTER</span> и
                  <span className="my-activ__header_underline">INSTA</span>
                </p>
                <h2 className="my-activ__footer_block-title">ВНЕ РАБОТЫ</h2>
              </div>
            </div>
          </div>
          <div className="my-activ__red-block"></div>
        </div>
      ) : (
        <div className="my-activ">
          <div className="my-activ__info">
            <p className="my-activ__info_subtitle">РОЛЬ — ВЕДУЩИЙ ДИЗАЙНЕР</p>
            <div className="my-activ__header">
              <div className="my-activ__header_block">
                <h2 className="my-activ__header_block-one_title"></h2>
                <p className="my-activ__header_block-one">
                  С 2021 года работаю ведущим <br />
                  ① &emsp;дизайнер продукта в Бланке. <br />
                  &emsp;&emsp;Проектирую и запускаю
                  <br />
                  &emsp;&emsp;банковские продукты <br />
                  &emsp;&emsp;для предпринимателей. <br />
                  &emsp;&emsp;Управляю продуктовой
                  <br /> &emsp;&emsp;дизайн-командой из 7 человек
                </p>
              </div>

              <div className="my-activ__header_block-two">
                <p className="my-activ__header_block-two_paragraph">
                  Пропагандирую и транслирую <br />
                  ②&emsp;системное мышление <br />
                  &emsp;&emsp;через дизайн. Делать <br />
                  &emsp;&emsp;сложные вещи простыми — <br />
                  &emsp;&emsp;это не гениальность (хотя
                  <br />
                  &emsp;&emsp; бывает и такое), а правильный <br />
                  &emsp;&emsp;процесс, который приводит <br />
                  &emsp;&emsp;к отличному решению
                </p>
                <p className="my-activ__header_block-two_paragraph">
                  Этот тезис помог мне
                  <br />
                  ③&emsp;сформировать в банке новые <br />
                  &emsp;&emsp;продуктовые и дизайн процессы. <br />
                  &emsp;&emsp;Которые мы сейчас развиваем <br />
                  &emsp;&emsp;вместе со всей командой продукта
                </p>
                <p className="my-activ__header_block-two_paragraph">
                  А другая часть моих задач — это
                  <br /> ④&emsp;работа с людьми. Создание <br />
                  &emsp;&emsp;условий, в которых они работают <br />
                  &emsp;&emsp;комфортно и эффективно. Верю,
                  <br /> &emsp;&emsp;что мы умножают идеи и друг друга
                </p>
              </div>
            </div>
            <p className="my-activ__info_subtitle">ПИШУ КОД</p>
            <div className="my-activ__footer">
              <h2 className="my-activ__footer_block-title"></h2>

              <div className="my-activ__footer_block">
                <p className="my-activ__footer_paragraph-one">
                  Веду телеграмм-канал «Repo».
                  <br />
                  ①&emsp;Публикую «мясо» из рабочего
                  <br />
                  &emsp;&emsp;процесса: картинки, скриншоты, <br />
                  &emsp;&emsp;видео и заметки
                </p>
                <p className="my-activ__footer_paragraph">
                  Иногда пишу код на JavaScript:
                  <br />
                  ②&emsp;сайты, плагины и ботов. Люблю <br />{" "}
                  &emsp;&emsp;рисовать и проектировать <br />
                  &emsp;&emsp;шрифты. Недавно нарисовал <br /> &emsp;&emsp;шрифт
                  «Liter». Он доступен <br /> &emsp;&emsp;по ссылке
                </p>
                <p className="my-activ__footer_block-text">
                  Если ты хочешь пригласить меня <br />
                  ③&emsp;попить кофе, или написать <br />
                  &emsp;&emsp;по рабочему вопросу есть <br />
                  &emsp;&emsp;несколько ссылок
                </p>
                <p className="my-activ__footer_block-contacts">
                  TG (Предпочитаю), FB, TWITTER и INSTA
                </p>
              </div>
            </div>
          </div>
          <div className="my-activ__red-block"></div>
        </div>
      )}
    </>
  );
}

export default MyActiv;
