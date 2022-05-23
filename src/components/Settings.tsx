import React from "react";
import './styles/settings.css';

export class Settings extends React.Component{
  render(){ 
	  return (
		<React.Fragment>
			<div id="setingsList">
			  <ul>
				  <li className="setting-button wcc-id">
					<img src="" className="wcc-id-avatar" />
					<div>
						<strong>WCC ID - очень скоро!</strong>
						<span>Все возможности Навигатора и не только в одной учётной  записи</span>
					</div>
				  </li>
				  <li className="setting-button parameter-menu">
						<li>
							<img src="" />
							<span>Навигатор</span>
						</li>
						<li>
							<img src="" />
							<span>Поиск и списки</span>
						</li>
						<li>
							<img src="" />
							<span>Уведомления</span>
						</li>
						<li>
							<img src="" />
							<span>Безопасность</span>
						</li>
				  </li>
				  <li className="setting-button parameter-menu">
					<ul>
						<li>
							<img src="" />
							<span>О навигаторе</span>
						</li>
						<li>
							<img src="" />
							<span>Политика конфедициальности данных WCC</span>
						</li>
						<li>
							<img src="" />
							<span>Приложения и сервисы WCC</span>
						</li>
					</ul>
				  </li>
			  </ul>
			</div>
		</React.Fragment>
	  );
  }
}