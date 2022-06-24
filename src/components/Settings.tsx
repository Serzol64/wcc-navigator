/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './styles/settings.css';

export class Settings extends React.Component{
  render(){ 
	  return (
		<React.Fragment>
			<div id="setingsList">
			  <ul>
				  <li className="setting-button wcc-id">
					<img src="https://img.icons8.com/fluency-systems-filled/96/ffffff/guest-male.png" className="wcc-id-avatar" />
					<div>
						<strong>WCC ID - очень скоро!</strong>
						<span>Все возможности Навигатора и не только в одной учётной  записи</span>
					</div>
				  </li>
				  <li className="setting-button parameter-menu">
						<ul>
							<li>
								<img src="https://img.icons8.com/fluency-systems-filled/96/000000/mobile-navigator.png" />
								<span>Навигатор</span>
							</li>
							<li>
								<img src="https://img.icons8.com/fluency-systems-filled/96/000000/search-in-list.png" />
								<span>Поиск и списки</span>
							</li>
							<li>
								<img src="https://img.icons8.com/fluency-systems-filled/96/000000/appointment-reminders.png" />
								<span>Уведомления</span>
							</li>
							<li>
								<img src="https://img.icons8.com/fluency-systems-filled/96/000000/block.png" />
								<span>Безопасность</span>
							</li>
						</ul>
				  </li>
				  <li className="setting-button parameter-menu">
					<ul>
						<li>
							<img src="https://img.icons8.com/fluency-systems-filled/96/000000/info-squared.png" />
							<span>О навигаторе</span>
						</li>
						<li>
							<img src="https://img.icons8.com/fluency-systems-filled/96/000000/private2.png" />
							<span>Политика конфедициальности данных WCC</span>
						</li>
						<li>
							<img src="https://img.icons8.com/fluency-systems-filled/96/000000/apps.png" />
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