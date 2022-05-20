import React from "react";
import './styles/stores.css';

export class Stores extends React.Component{
  render(){ 
	  return (
		<React.Fragment>
			<div id="storesGrid">
			  <header>Категории</header>
			  <main>
				  <a href="#special">Самое необходимое</a>
				  <a href="#1">Молоко и яица</a>
				  <a href="#2">Мясо и рыба</a>
				  <a href="#3">Колбаса,деликатесы и полуфабрикаты</a>
				  <a href="#4">Хлебоблочные и кондитерские изделия</a>
				  <a href="#5">Фрукты и овощи</a>
			  </main>
			  <footer>
				  <div id="header">На основе ваших покупок</div>

				  <section id="recommends">
					<div data-status="error">
						<h3>Сервис персонализации активности в приложении на данный момент недоступен!</h3>
						<span>Мы делаем всё, чтобы рекомендации покупок работали для вас без проблем!</span>
					</div>
				  </section>
			  </footer>
			</div>
			
		</React.Fragment>
	  );
  }
}
