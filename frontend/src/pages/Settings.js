import React from 'react'

export const Settings = () => {
    return (
    <div class="container">

        <div className="row">
            <div className="col-sm-30">
                <h1>Настройки</h1>
                <ul className="nav nav-tabs nav-stacked flex-column" id="tab-example" role="tablist">
                    <li clasNames="nav-item">
                        <a className="nav-link active" id="first-tab" data-toggle="tab"
                           href="#first-tab-content" role="tab" aria-controls="first-tab-content"
                           aria-selected="true">Аккаунт</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="second-tab" data-toggle="tab"
                           href="#second-tab-content" role="tab" aria-controls="second-tab-content"
                           aria-selected="false">Уведомления</a>
                    </li>
                </ul>
            </div>

            <div className="col-sm-5">
                <div className="tab-content" id="tab-content-example">
                    <div className="tab-pane fade show active" id="first-tab-content" role="tabpanel"
                         aria-labelledby="first-tab">
                         <div className="row">
                             <div className="col">
                                <h3>Основная информация</h3>
                                <h5>Фамилия</h5>
                                <input type="surname" class="form-control" id="input-name" data-required-error="Поле не заполнено" placeholder="Фамилия" name="secondName"/>
                                <h5>Имя</h5>
                                <input type="name" className="form-control" data-required-error="Поле не заполнено" placeholder="Имя" name="firstName" />
                                <h5>Отчество</h5>
                                <input type="Lastname" className="form-control" data-required-error="Поле не заполнено" placeholder="Отчество(если есть)" name="lastName"/>
                                <button>Сохранить изменения</button>
                                <h3>Сменить пароль</h3>
                                <div className="row">
                                    <div className="col">
                                        <h5>Текущий пароль</h5>
                                        <input type="password" className="form-control" id="input-password" data-required-error="Поле не заполнено" placeholder="Password" name="password" />
                                    </div>
                                    <div className="col">
                                        <h5>Новый пароль</h5>
                                        <input type="password" className="form-control" id="input-password" data-required-error="Поле не заполнено" placeholder="Password" name="password" />
                                    </div>
                                    <div className="col">
                                        <h5>Повторите пароль</h5>
                                        <input type="password" className="form-control" id="input-password" data-required-error="Поле не заполнено" placeholder="Password" name="password" />
                                    </div>
                                    <button>Сохранить изменения</button>
                                </div>
                             </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    )
}