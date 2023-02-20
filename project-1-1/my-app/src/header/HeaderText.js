import React, {useState} from 'react';
import Modals from "./modal/Modals";

const HeaderText = () => {
    const [open, setOpen] = useState(false);

    const handleConfirm = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpen(false);
    };

    return (
        <div className="container">
            <div className="item">
                <div className="head">
                    <button className="Button Neon">Тренировки</button>
                    <button onClick={() => setOpen(true)} className="button neon" >Войти</button>
                    <Modals open={open} handleConfirm={handleConfirm}/>
                </div>
            </div>
            <h2 className="capital"><b/>" Начни сейчас! С нами <br/>удобно, быстро и доступно "</h2>
            <div className="portfolio">
                <ul>
                    <li><span className="text">Плата за подписку начинается после окончания<br/> бесплатного пробного периода</span><button className="Buttons Neons">Бесплатно 12 дней</button> <button className="buttons neons">Другие абонементы</button></li>
                </ul>
            </div>
            <h3 className="span"><strong>Подробнее</strong></h3>
            <div className="point"></div>
        </div>
    );
}

export default HeaderText;
