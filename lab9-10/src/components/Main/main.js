import React, { useState } from 'react';
import './main.css';
import '../Footer/footer.css'; 


const Main = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <main className="main-page">
      <section className="hero-section">
        <h1 className="main-title animate-title">Вітаю в CroKeddy</h1>
        <p className="main-description">
        Відкрийте для себе найчарівнішу колекцію в’язаних гачком іграшок ручної роботи, які дарують радість, чарівність і тепло.
        CroKeddy — це не просто магазин, це світ чудес.
        </p>
        <p className="main-highlight animate-highlight">
          <strong>Гарантую:</strong> Кожну іграшку в нашій колекції створено з любов’ю та увагою до деталей, щоб дарувати тепло, радість і унікальність.
          Відчуйте чарівність ручної роботи, яка підкорює серця та приносить затишок у кожен дім.
        </p>
        <p className="main-description">
          <strong>Лише в нашому магазині:</strong> Ми пропонуємо індивідуальний підхід, ексклюзивні замовлення та незабутні емоції
          від вибору іграшки до моменту, коли вона приносить радість. Відкрийте для себе магію ручної роботи та додайте тепла у ваше життя.
        </p>
        <div className="highlights">
          <div className="highlight-item">
            <h3>Унікальність</h3>
            <p>Кожна іграшка виготовляється вручну, що робить її особливою та неповторною</p>
          </div>
          <div className="highlight-item">
            <h3>Якість і безпека</h3>
            <p>Ми використовуємо тільки екологічні матеріали, які безпечні для дітей і дорослих</p>
          </div>
          <div className="highlight-item">
            <h3>Індивідуальний підхід </h3>
            <p>Створюємо іграшки на замовлення з урахуванням ваших побажань та ідей</p>
          </div>
        </div>
        <button className="view-more-btn" onClick={handleViewMore}>
          {showMore ? 'View Less' : 'View More'}
        </button>
        {showMore && (
          <div className="extra-info">
            <h2>Чому варто обрати CroKeddy?</h2>
            <p>
            У CroKeddy ми віримо в створення не просто іграшок; ми створюємо спогади та моменти радості. 
            Наші твори — це не лише чарівність і краса, але й тепло, любов і якість, на які заслуговуєте ви та ваші близькі. 
            Завдяки унікальному вибору дизайну ручної роботи наші іграшки відрізняються характером і майстерністю.
            </p>
            <p>
            З моменту, коли ви відкриваєте Magic Threads, наша команда тут, щоб забезпечити виняткову турботу, 
            проводячи вас через кожну деталь, щоб допомогти вам знайти ідеальну іграшку, яка принесе радість вашим близьким. 
            Приєднуйтеся до нашої спільноти щасливих клієнтів і додайте чарівництва у свій світ.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
