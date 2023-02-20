import React from 'react';

function Modals({open, handleConfirm}) {
    return (
        <>
            <div
                className={
                    open
                        ? "modal in_show"
                        : "modal"
                }
            >
                <div className="modal__content">
                    <div>
                        <h4 className="modal-text">Вход в аккаунт</h4>
                        <input className="input" type="text" placeholder="логин"/>
                        <input className="input" type="text" placeholder="пароль"/>
                        <button className="modal-button modals">Войти</button>
                        <p>Забыли пароль?</p>
                        <div className="vector"><div className="vector2"></div></div>
                        <p className="var">Нет аккаунта? <a href="" placeholder="">Зарегистрируйтесь</a></p>
                    </div>
                </div>
            </div>
            <div
                className="in_overlay"
                onClick={() => handleConfirm(false)}
            />
        </>
    );
}

export default Modals;