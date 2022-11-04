/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './styles/settings.css';
import { Route, NavLink as Link } from "react-router-dom";

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
								<Link to="/tab4/navigator">
									<img src="https://img.icons8.com/fluency-systems-filled/96/000000/mobile-navigator.png" />
									<span>Навигатор</span>
								</Link>
							</li>
							<li>
								<Link to="/tab4/search">
									<img src="https://img.icons8.com/fluency-systems-filled/96/000000/search-in-list.png" />
									<span>Поиск и списки</span>
								</Link>
							</li>
							<li>
								<Link to="/tab4/push">
									<img src="https://img.icons8.com/fluency-systems-filled/96/000000/appointment-reminders.png" />
									<span>Уведомления</span>
								</Link>
							</li>
							<li>
								<Link to="/tab4/security">
									<img src="https://img.icons8.com/fluency-systems-filled/96/000000/block.png" />
									<span>Безопасность</span>
								</Link>
							</li>
						</ul>
				  </li>
				  <li className="setting-button parameter-menu">
					<ul>
						<li>
							<Link to="/tab4/info">
								<img src="https://img.icons8.com/fluency-systems-filled/96/000000/info-squared.png" />
								<span>О навигаторе</span>
							</Link>
						</li>
						<li>
							<Link to="/tab4/info/security">
								<img src="https://img.icons8.com/fluency-systems-filled/96/000000/private2.png" />
								<span>Политика конфедициальности данных WCC</span>
							</Link>
						</li>
						<li>
							<Link to="/tab4/info/list">
								<img src="https://img.icons8.com/fluency-systems-filled/96/000000/apps.png" />
								<span>Приложения и сервисы WCC</span>
							</Link>
						</li>
					</ul>
				  </li>
			  </ul>
			</div>
		</React.Fragment>
	  );
  }
}
